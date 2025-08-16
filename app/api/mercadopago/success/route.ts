import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const payment_id = searchParams.get("payment_id")
  const status = searchParams.get("status")
  const external_reference = searchParams.get("external_reference")

  if (status !== "approved") {
    return NextResponse.redirect("/dashboard/turnos?status=error")
  }

  // Buscar datos asociados al appointmentId que guardaste antes (ej: en Redis, BDD temporal o algún JWT)
  // Supongamos que haces un "lookup" de datos
  const appointmentData = await getCachedAppointment(external_reference!) // implementar vos
  if (!appointmentData) {
    return NextResponse.json({ error: "No se encontró la reserva temporal" }, { status: 400 })
  }

  await prisma.event.create({
    data: {
      ...appointmentData,
      createdById: appointmentData.createdById,
      professionalId: appointmentData.professionalId,
      status: "SCHEDULED",
    },
  })

  return NextResponse.redirect("/dashboard/turnos?status=success")
}
