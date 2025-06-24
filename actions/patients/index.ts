"use server"
import { prisma } from "@/lib/prisma";

export const getAllPatientsAction = async() => {
  try {
    const patients = await prisma.patient.findMany();
    return patients;
  } catch (error) {
    console.log(error);
  }
};

export const createPatientAction = async (data: any) => {
  try {
    const patient = await prisma.patient.create({ data: data });
    return patient;
  } catch (error) {
    console.log(error);
  }
};

export async function getPatientById(id: number | string| undefined) {
  if (!id) {
    throw new Error("Patient ID is required");
  }

  const patientId = Number(id);

  if (isNaN(patientId)) {
    throw new Error("Invalid Patient ID");
  }
  const result = prisma.patient.findUnique({
    where: { id: patientId },
    include: {
      events: {
        orderBy: { startEvent: 'desc' },
      },
    },
  })
  return result;
}

export async function editPatientAction(id: string, data: any) {
  try {
    const patient = await prisma.patient.update({
      where: { id: Number(id) },
      data: data,
    });
    console.log(patient);
    return patient;
  } catch (error) {
    console.log(error);
  }
}

export async function getScheduleProfesionalAction(id: string) { 
  try {
    const schedule = await prisma.schedule.findMany({
      where: { 
        professionalId: Number(id)
      },
      orderBy: { startTime: 'asc' },
    });

    const events = await prisma.event.findMany({
      where: {
        professionalId: Number(id),
        startEvent: { gte: new Date() },
      },
      orderBy: { startEvent: 'asc' },
    });

    return { schedule, events };
  } catch (error) {
    console.log(error);
  }
}

export async function getFutureEventsByProfessional(professionalId: number | string) {
  try {
    const events = await prisma.event.findMany({
      where: {
        professionalId: Number(professionalId),
        startEvent: { gte: new Date() },
      },
      orderBy: { startEvent: 'asc' },
    });
    return events;
  } catch (error) {
    console.log(error);
    return [];
  }
}
