"use server";

import { prisma } from "@/lib/prisma";

export async function getAllEvents() {
  try {
    const events = await prisma.event.findMany({
      include: {
        professional: true,
        patient: true,
        createdBy: true,
      },
      orderBy: {
        startEvent: "asc",
      },
    });
    return events;
  } catch (error) {
    console.error("Error fetching events:", error);
    throw error;
  }
}

export async function deleteEvent(id: number) {
  try {
    await prisma.event.delete({ where: { id } });
    return { success: true };
  } catch (error) {
    console.error("Error deleting event:", error);
    throw error;
  }
}

export async function createEvent(data: {
  title: string;
  description?: string;
  startEvent: Date;
  endEvent: Date;
  eventType: "CONSULTATION" | "STUDY" | "OTHER";
  createdById: string | undefined;
  professionalId?: number | null;
  patientId: number;
  status?: "AVAILABLE" | "SCHEDULED" | "CANCELLED" | "COMPLETED";
}) {
  if (!data.professionalId) return { error: "Professional ID is required" };

  if (!data.createdById) {
    return { error: "Created By ID is required" };
  }
  const user = await prisma.user.findUnique({
    where: { firebaseUid: data.createdById },
  });

  if (!user) {
    return { error: "User not found" };
  }

  return await prisma.event.create({
    data: {
      ...data,
      createdById: user?.id,
    },
  });
}

export async function updateEvent(
  id: number,
  data: Partial<{
    title: string;
    description: string;
    startEvent: Date;
    endEvent: Date;
    eventType: "CONSULTATION" | "STUDY" | "OTHER";
    status: "AVAILABLE" | "SCHEDULED" | "CANCELLED" | "COMPLETED";
    professionalId: number;
    patientId: number;
  }>
) {
  return prisma.event.update({
    where: { id },
    data,
  });
}

type TimeRange = {
  startTime: string; // "08:00"
  endTime: string; // "12:00"
};

type WeeklyScheduleInput = {
  professionalId: number;
  sessionTime?: number;
  availability: {
    [day: string]: {
      enabled: boolean;
      timeRanges: TimeRange[];
    };
  };
};

const dayMap: Record<
  string,
  "MONDAY" | "TUESDAY" | "WEDNESDAY" | "THURSDAY" | "FRIDAY"
> = {
  monday: "MONDAY",
  tuesday: "TUESDAY",
  wednesday: "WEDNESDAY",
  thursday: "THURSDAY",
  friday: "FRIDAY",
};

export async function createWeeklySchedule({
  professionalId,
  sessionTime = 30,
  availability,
}: WeeklyScheduleInput) {
  try {
    const schedulesToCreate = Object.entries(availability)
      .filter(([, value]) => value.enabled)
      .flatMap(([dayKey, value]) => {
        return value.timeRanges.map(({ startTime, endTime }) => ({
          professionalId,
          dayOfWeek: dayMap[dayKey.toLowerCase()],
          startTime,
          endTime,
          sessionTime,
          repeatsWeekly: true,
          isActive: true,
        }));
      });

    const created = await prisma.schedule.createMany({
      data: schedulesToCreate,
    });

    return { success: true, count: created.count };
  } catch (err) {
    console.error("Error creating weekly schedule:", err);
    return { success: false, error: "Failed to create schedule" };
  }
}

export async function getWeeklySchedule(professionalId: number) {
  try {
    const schedule = await prisma.schedule.findMany({
      where: { professionalId },
      orderBy: { dayOfWeek: "asc" },
    });
    return schedule;
  } catch (error) {
    console.error("Error fetching weekly schedule:", error);
    throw error;
  }
}
