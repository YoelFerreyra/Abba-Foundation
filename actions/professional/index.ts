"use server"
import { prisma } from "@/lib/prisma";

export const getAllProfessionalsAction = async() => {
  try {
    const professionals = await prisma.professional.findMany();
    console.log(professionals);
    return professionals;
  } catch (error) {
    console.log(error);
  }
};

export const createProfessionalAction = async (data: any) => {
  try {
    const professional = await prisma.professional.create({ data: data });
    console.log(professional);
    return professional;
  } catch (error) {
    console.log(error);
  }
};
