// schemas/healthInsuranceProviderSchema.ts
import { z } from "zod";

export const healthInsuranceProviderSchema = z.object({
  name: z.string().min(1, "El nombre es obligatorio"),
  description: z.string().optional(),
  contractor: z.string().optional(),
  subcontractor: z.string().optional(),
  cuit: z.string().min(11, "CUIT inválido").max(13),
  address: z.string().min(1, "La dirección es obligatoria"),
  email: z.string().email("Correo inválido"),
  phone: z.string().min(1, "Teléfono requerido"),
  contact: z.string().min(1, "Contacto requerido"),
});

export type HealthInsuranceProviderFormValues = z.infer<typeof healthInsuranceProviderSchema>;
