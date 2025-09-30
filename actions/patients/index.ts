"use server";
import { PatientFormData } from "@/app/dashboard/concurrentes/schemas/patient-schema";
import { prisma } from "@/lib/prisma";

export const getAllPatientsAction = async () => {
  try {
    const patients = await prisma.patient.findMany({
      select: {
        id: true,
        firstName: true,
        lastName: true,
        phone: true,
        birthday: true,
        createdAt: true,
        address: true,
        dni: true,
        isActive: true,
      },
    });
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

export async function getPatientById(id: number | string | undefined) {
  if (!id) {
    throw new Error("Patient ID is required");
  }

  const patientId = Number(id);

  if (isNaN(patientId)) {
    throw new Error("Invalid Patient ID");
  }

  const patient = await prisma.patient.findUnique({
    where: { id: patientId },
    include: {
      user: true,
      legalGuardian: true,
      clinics: { select: { id: true, name: true } },
      admission: {
        include: {
          admissionType: true,
          legalGuardian: true,
          healthInsuranceAuthorizations: {
            include: {
              healthInsuranceProvider: true,
            },
          },
        },
      },
    },
  });

  return patient;
}

export async function editPatientAction(id: string, data: any) {
  try {
    const patient = await prisma.patient.update({
      where: { id: Number(id) },
      data: data,
    });
    return patient;
  } catch (error) {
    console.log(error);
  }
}

export async function getScheduleProfesionalAction(id: string) {
  try {
    if (!id) return { schedule: [], events: [] };
    const schedule = await prisma.schedule.findMany({
      where: {
        professionalId: Number(id),
      },
      orderBy: { startTime: "asc" },
    });

    const events = await prisma.event.findMany({
      where: {
        professionalId: Number(id),
        startEvent: { gte: new Date() },
      },
      orderBy: { startEvent: "asc" },
    });

    return { schedule, events };
  } catch (error) {
    console.log(error);
  }
}

export async function getFutureEventsByProfessional(
  professionalId: number | string
) {
  try {
    const events = await prisma.event.findMany({
      where: {
        professionalId: Number(professionalId),
        startEvent: { gte: new Date() },
      },
      orderBy: { startEvent: "asc" },
    });
    return events;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function createPatientWithAdmission(data: PatientFormData) {
  let legalGuardianId = null;

  if (data.hasLegalGuardian && data.legalGuardian) {
    const tutor = await prisma.legalGuardian.create({
      data: {
        ...data.legalGuardian,
      },
    });

    legalGuardianId = tutor.id;
  }

  const result = await prisma.patient.create({
    data: {
      firstName: data.firstName,
      lastName: data.lastName,
      address: data.address,
      dni: data.dni,
      cuil: data.cuil,
      dniProcessingNumber: data.dniProcessingNumber,
      birthday: data.birthday,
      phone: data.phone,
      affiliateNumber: data.affiliateNumber,
      isActive: data.isActive,
      legalGuardianId: legalGuardianId,
      clinics: data.clinicId
        ? {
            connect: { id: data.clinicId },
          }
        : undefined,

      admission: data.admission
        ? {
            create: {
              admissionDate: data.admission.admissionDate || new Date(),
              isSchoolEnrolled: data.admission.isSchoolEnrolled || false,
              schoolShift: data.admission.schoolShift,
              cud: data.admission.cud,
              cudExpirationDate: data.admission.cudExpirationDate,
              admissionType: {
                connect: { id: data.admission.admissionTypeId },
              },
            },
          }
        : undefined,
    },
  });

  return result;
}

export async function createHealthInsuranceProvider(data: unknown) {
  try {
    const newProvider = await prisma.healthInsuranceProvider.create({
      data: data,
    });

    return { data: newProvider };
  } catch (error) {
    console.error("Error creating HealthInsuranceProvider:", error);
    return { error: { message: "Ocurrió un error al crear el prestador." } };
  }
}

export async function deletePatientByIdAction(id?: string | number) {
  try {
    if (!id) {
      return { error: { message: "Ocurrió un error al crear el prestador." } };
    }
    await prisma.admission.deleteMany({
      where: { patientId: Number(id) },
    });

    const newProvider = await prisma.patient.delete({
      where: {
        id: Number(id),
      },
    });

    return { data: newProvider };
  } catch (error) {
    console.error("Error creating HealthInsuranceProvider:", error);
    return { error: { message: "Ocurrió un error al crear el prestador." } };
  }
}

export async function getAdmissionTypes() {
  try {
    const admissionTypes = await prisma.admissionType.findMany({
      orderBy: { id: "asc" },
    });
    return admissionTypes;
  } catch (error) {
    console.error("Error fetching admission types:", error);
    return [];
  }
}

export async function getAllClinicsAction() {
  try {
    const clinics = await prisma.clinic.findMany({
      orderBy: { name: "asc" },
    });
    return clinics;
  } catch (error) {
    console.error("Error fetching clinics:", error);
    return [];
  }
}
