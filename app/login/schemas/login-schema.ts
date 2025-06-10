// schemas/register-schema.ts
import { z } from "zod";

export const registerSchema = z
  .object({
    email: z.string().email("Correo inválido"),
    password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
    confirmPassword: z.string(),
    dni: z.string().min(7, "DNI inválido").max(10),
    dniTramite: z.string().min(7, "Número de trámite inválido").max(12),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Las contraseñas no coinciden",
    path: ["confirmPassword"],
  });

export type RegisterFormInputs = z.infer<typeof registerSchema>;
