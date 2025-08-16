"use server"
import { MercadoPagoConfig, Preference } from "mercadopago"

const mercadopago = new MercadoPagoConfig({
  accessToken: process.env.MERCADOPAGO_ACCESS_TOKEN!,
})

const preferences = new Preference(mercadopago)

type AppointmentInput = {
  appointmentId: string
  patientName: string
  doctorName: string
  specialty: string
  date: string
  time: string
  price: number
  patientEmail: string
}

export async function createAppointmentPreference(input: AppointmentInput) {
  try {
    const preference = {
      items: [
        {
          id: "1",
          title: `Consulta con ${input.doctorName} (${input.specialty}), Fecha: ${input.date} Hora: ${input.time} - ${"js"}`,
          quantity: 1,
          currency_id: "ARS",
          unit_price: 100,
        },
      ],
      payer: {
        email: "test@gmail.com",
        name: "input.patientName",
      },
      external_reference: input.appointmentId,
      back_urls: {
        success: `${process.env.NEXT_PUBLIC_BASE_URL}/dashboard/turnos?status=success`,
        failure: `${process.env.NEXT_PUBLIC_BASE_URL}/dashboard/turnos?status=failure`,
        pending: `${process.env.NEXT_PUBLIC_BASE_URL}/dashboard/turnos?status=pending`,
      },
      auto_return: "approved",
    }

    const result = await preferences.create({ body: preference })
    return { success: true, init_point: result.init_point }
  } catch (error) {
    console.error("Error al crear preferencia:", error)
    return { ok: false, error: "No se pudo generar la preferencia de pago." }
  }
}
