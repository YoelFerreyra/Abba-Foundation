import { z } from "zod"

export const legalGuardianFormSchema = z.object({
  firstName: z.string().min(1, "El nombre es obligatorio"),
  lastName: z.string().min(1, "El apellido es obligatorio"),
  address: z.string().min(1, "La dirección es obligatoria"),
  dni: z.string().min(1, "El DNI es obligatorio"),
  dniProcessingNumber: z.string().min(1, "El tramite del DNI es obligatorio"),
  birthday: z.coerce.date({ required_error: "La fecha de nacimiento es obligatoria" }),
  cuil: z.string().min(1, "El CUIL es obligatorio"),
  phone: z.string().min(7, "El teléfono es obligatorio"),
  professionalActivity: z.string().optional(),
});

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

  // Admission
  admissionDate: z.coerce.date({ required_error: "La fecha de ingreso es obligatoria" }),
  admissionTypeId: z.coerce.number().int().positive("Seleccione un tipo de ingreso"),
  isSchoolEnrolled: z.boolean().default(false),
  schoolShift: z.enum(["MORNING", "AFTERNOON", "FULL_DAY"]).optional(),
  cud: z.string().optional(),
  cudExpirationDate: z.coerce.date().optional(),

  // Tutor (opcional)
  legalGuardian: legalGuardianFormSchema.optional(),
  hasLegalGuardian: z.boolean().default(false), // checkbox
});


export type PatientFormData = z.infer<typeof patientFormSchema>;
