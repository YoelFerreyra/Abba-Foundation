"use server"
import { prisma } from "@/lib/prisma";

export const getAllEventsAction = async() => {
  try {
    const events = await prisma.event.findMany();

    return events;
  } catch (error) {
    console.log(error);
  }
};

export const getAllEventsFromUserAction = async(patientId: number) => {
  try {
    const events = await prisma.event.findMany(
      {
        where: {
          patientId: patientId
        },
        include: {
          patient: true,
          clinic: true,
        },
      }
    );

    return events;
  } catch (error) {
    console.log(error);
  }
};

export const getAllClinicsAction = async() => {
  try {
    const clinics = await prisma.clinic.findMany();

    return clinics
  } catch (error) {
    console.log(error);
  }
}