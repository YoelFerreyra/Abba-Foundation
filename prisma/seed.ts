import { prisma } from "@/lib/prisma"

async function main() {

  const services = [
  "PSICOLOGÍA",
  "PSICOPEDAGOGÍA",
  "FONOAUDIOLOGÍA",
  "MÓDULO DE MAESTRO DE APOYO",
  "TERAPIA OCUPACIONAL",
  "PSICOMOTRICIDAD",
  "TRANSPORTE TERAPÉUTICO",
  "TRANSPORTE ESCOLAR",
  "MÓDULO INTEGRAL INTENSIVO",
  "MÓDULO INTEGRAL SIMPLE",
  "MÓDULO DE APOYO A LA INCLUSIÓN ESCOLAR"
]

  for (const name of services) {
    await prisma.coverageService.upsert({
      where: { name },
      update: {},
      create: { name },
    })
  }

  const admissionTypes = [
    { name: 'Obra Social' },
    { name: 'Prepaga' },
    { name: 'Particular' },
    { name: 'Familiar' },
    { name: 'Empleado' },
  ];

  for (const type of admissionTypes) {
    await prisma.admissionType.create({
      data: { name: type.name },
    });
  }

  const professionalTypes = [
    { name: 'PSICOPEDAGOGIA' },
    { name: 'PSICOLOGIA' },
    { name: 'FONOAUDIOLOGIA' },
  ];

  for (const type of professionalTypes) {
    await prisma.professionalType.create({
      data: { name: type.name },
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

  const adminUser = await prisma.user.create({
    data: {
      firebaseUid: "uid-admin-789",
      email: "admin@ejemplo.com",
      role: "ADMIN",
      isActive: true,
    },
  })

  await prisma.admin.create({
    data: {
      firstName: "Laura",
      lastName: "Martínez",
      address: "Calle Admin 123",
      birthday: new Date("1985-09-10"),
      phone: "011-4444-0000",
      isActive: true,
      userId: adminUser.id,
    },
  })

  const rootUser = await prisma.user.create({
    data: {
      firebaseUid: "uid-root-999",
      email: "root@ejemplo.com",
      role: "ROOT",
      isActive: true,
    },
  })

  await prisma.root.create({
    data: {
      firstName: "Pedro",
      lastName: "Fernández",
      address: "Calle Root 456",
      birthday: new Date("1975-04-22"),
      phone: "011-9999-8888",
      isActive: true,
      userId: rootUser.id,
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
