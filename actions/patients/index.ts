"use server"
import { prisma } from "@/lib/prisma";

export const getAllPatientsAction = async() => {
  try {
    const patients = await prisma.patient.findMany();
    console.log(patients);
    return patients;
  } catch (error) {
    console.log(error);
  }
};

export const createPatientAction = async (data: any) => {
  try {
    const patient = await prisma.patient.create({ data: data });
    console.log(patient);
    return patient;
  } catch (error) {
    console.log(error);
  }
};
