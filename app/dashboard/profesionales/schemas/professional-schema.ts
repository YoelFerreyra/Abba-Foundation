import { z } from "zod";

export const professionalFormSchema = z.object({
  firstName: z.string().min(1, "El nombre es obligatorio"),
  lastName: z.string().min(1, "El apellido es obligatorio"),
  address: z.string().min(1, "La dirección es obligatoria"),
  dni: z
    .string()
    .min(7, { message: "El DNI debe tener al menos 7 dígitos" })
    .max(10, { message: "El DNI no puede tener más de 10 dígitos" }),
  cuil: z.string().min(1, "El CUIL es obligatorio"),
  birthday: z.coerce.date({
    required_error: "La fecha de nacimiento es obligatoria",
  }),
  phone: z.string().min(7, "El teléfono es obligatorio"),
  professionalActivity: z
    .string()
    .min(1, "La actividad profesional es obligatoria"),
  professionalType: z.string().min(1, "El tipo de profesional es obligatorio"), // <-- campo como está en el modelo
  healthInsuranceProviderId: z.coerce.number().optional().nullable(),
  isActive: z.boolean().default(false),
});

export type ProfessionalFormData = z.infer<typeof professionalFormSchema>;
