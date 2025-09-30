import { z } from "zod";

export const legalGuardianFormSchema = z.object({
  firstName: z.string().min(1, "El nombre es obligatorio"),
  lastName: z.string().min(1, "El apellido es obligatorio"),
  address: z.string().min(1, "La dirección es obligatoria"),
  dni: z
    .string()
    .min(7, { message: "El DNI debe tener al menos 7 dígitos" })
    .max(10, { message: "El DNI no puede tener más de 10 dígitos" }),
  dniProcessingNumber: z
    .string()
    .min(7, { message: "El número de trámite debe tener al menos 7 dígitos" })
    .max(12, {
      message: "El número de trámite no puede tener más de 12 dígitos",
    }),
  birthday: z.coerce.date({
    required_error: "La fecha de nacimiento es obligatoria",
  }),
  cuil: z.string().min(1, "El CUIL es obligatorio"),
  phone: z.string().min(7, "El teléfono es obligatorio"),
  professionalActivity: z
    .string()
    .min(1, "La actividad profesional es obligatoria")
});

export const admissionSchema = z.object({
  admissionDate: z.coerce.date({
    required_error: "La fecha de ingreso es obligatoria",
  }),
  admissionTypeId: z.coerce
    .number()
    .int()
    .positive("Seleccione un tipo de ingreso"),
  isSchoolEnrolled: z.boolean().default(false),
  schoolShift: z.enum(["MORNING", "AFTERNOON", "EVENING", "FULL_DAY"]),
  schoolStartTime: z.string().optional(),
  schoolEndTime: z.string().optional(),
  cud: z.string().optional(),
  cudExpirationDate: z.coerce.date().optional(),
});

export const patientFormSchema = z.object({
  id: z.number().optional(),
  firstName: z.string().min(1, "El nombre es obligatorio"),
  lastName: z.string().min(1, "El apellido es obligatorio"),
  address: z.string().min(1, "La dirección es obligatoria"),
  clinicId: z.coerce.number().int().positive("Seleccione una clínica").optional(),
  dni: z
    .string()
    .min(7, { message: "El DNI debe tener al menos 7 dígitos" })
    .max(10, { message: "El DNI no puede tener más de 10 dígitos" }),
  cuil: z.string().min(1, "El CUIL es obligatorio"),
  dniProcessingNumber: z
    .string()
    .min(7, { message: "El número de trámite debe tener al menos 7 dígitos" })
    .max(12, {
      message: "El número de trámite no puede tener más de 12 dígitos",
    }),
  birthday: z.coerce.date({
    required_error: "La fecha de nacimiento es obligatoria",
  }),
  phone: z.string().min(7, "El teléfono es obligatorio"),
  affiliateNumber: z.string().min(1, "El número de afiliado es obligatorio"),
  isActive: z.boolean().default(false),

  hasAdmission: z.boolean().default(false),
  admission: admissionSchema.optional(),

  hasLegalGuardian: z.boolean().default(false),
  legalGuardian: legalGuardianFormSchema.optional(),
});

export type PatientFormData = z.infer<typeof patientFormSchema>;
