import { prisma } from "@/lib/prisma"

async function main() {

  const admissionTypes = [
    { name: 'Obra Social' },
    { name: 'Particular' },
    { name: 'Familiar' },
    { name: 'Empleado' },
  ];

  for (const type of admissionTypes) {
    await prisma.admissionType.create({
      data: {
        name: type.name
      }
    });
  }

  const provider = await prisma.healthInsuranceProvider.create({
    data: {
      name: "Obra Social Ejemplo",
      description: "Cobertura médica completa para afiliados",
      contractor: "Empresa Contratante SA",
      subcontractor: "Empresa Subcontratada SRL",
      cuit: "30-12345678-9",
      address: "Calle Falsa 123, CABA",
      email: "contacto@obraejemplo.com",
      phone: "011-1234-5678",
      contact: "Lic. María Pérez",
    },
  })

  const user = await prisma.user.create({
    data: {
      firebaseUid: "uid-ejemplo-123",
      email: "paciente@ejemplo.com",
      role: "CLIENT",
      isActive: true,
    },
  })

  const guardianUser = await prisma.user.create({
    data: {
      firebaseUid: "uid-tutor-456",
      email: "tutor@ejemplo.com",
      role: "CLIENT",
      isActive: true,
    },
  })

  const legalGuardian = await prisma.legalGuardian.create({
    data: {
      firstName: "Carlos",
      lastName: "Gómez",
      address: "Av. Siempre Viva 742",
      dni: "30123456",
      cuil: "20-30123456-7",
      dniProcessingNumber: "PROC-001",
      birthday: new Date("1980-06-15"),
      phone: "011-5555-7890",
      professionalActivity: "Contador",
      legalGuardianType: "PARENT",
      legalGuardianStatus: "ACTIVE",
      isActive: true,
      userId: guardianUser.id,
      healthInsuranceProviderId: provider.id,
    },
  })

  const patient = await prisma.patient.create({
    data: {
      firstName: "Lucía",
      lastName: "Gómez",
      address: "Av. Siempre Viva 742",
      dni: "40987654",
      cuil: "20-40987654-3",
      dniProcessingNumber: "PROC-002",
      birthday: new Date("2010-03-12"),
      phone: "011-5555-1234",
      affiliateNumber: "AFF-12345",
      patientType: "CHILD",
      patientStatus: "ACTIVE",
      isActive: true,
      userId: user.id,
      legalGuardianId: legalGuardian.id,
      healthInsuranceProviderId: provider.id,
    },
  })

  console.log("✔️ Seed completado con éxito.")
}

main()
  .catch((e) => {
    console.error("❌ Error en seeds:", e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })