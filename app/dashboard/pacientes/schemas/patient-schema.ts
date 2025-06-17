import { z } from "zod"

export const patientFormSchema = z.object({
  firstName: z.string().min(1, "El nombre es obligatorio"),
  lastName: z.string().min(1, "El apellido es obligatorio"),
  address: z.string().min(1, "La dirección es obligatoria"),
  dni: z.string().min(1, "El DNI es obligatorio"),
  cuil: z.string().min(1, "El CUIL es obligatorio"),
  dniProcessingNumber: z.string().min(1, "El número de trámite es obligatorio"),
  birthday: z.coerce.date({ required_error: "La fecha de nacimiento es obligatoria" }),
  phone: z.string().min(7, "El teléfono es obligatorio"),
  affiliateNumber: z.string().min(1, "El número de afiliado es obligatorio"),
  isActive: z.boolean().default(false),
})

export type PatientFormData = z.infer<typeof patientFormSchema>