"use server"
import { ProfessionalFormData } from "@/app/dashboard/profesionales/schemas/professional-schema";
import { prisma } from "@/lib/prisma";

export const getAllProfessionalsAction = async() => {
  try {
    const professionals = await prisma.professional.findMany({
      include: {
        professionalTypes: true,
      }
    });
    
    return professionals;
  } catch (error) {
    console.log(error);
  }
};

export const createProfessionalAction = async (data: ProfessionalFormData) => {
  try {
    const professional = await prisma.professional.create({ data });
    return professional;
  } catch (error) {
    console.log(error);
  }
};

export async function getProfessionalTypes() {
  try {
    const types = await prisma.professionalType.findMany({
      orderBy: { name: "asc" },
    })
    return types
  } catch (error) {
    console.error("Error fetching professional types:", error)
    return []
  }
}