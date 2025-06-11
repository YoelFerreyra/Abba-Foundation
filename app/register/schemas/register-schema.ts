import { z } from "zod";

export const registerSchema = z
  .object({
    email: z
      .string()
      .email({ message: "Correo electrónico inválido" }),
    password: z
      .string()
      .min(6, { message: "La contraseña debe tener al menos 6 caracteres" }),
    confirmPassword: z.string(),
    dni: z
      .string()
      .min(7, { message: "El DNI debe tener al menos 7 dígitos" })
      .max(10, { message: "El DNI no puede tener más de 10 dígitos" }),
    dniTramite: z
      .string()
      .min(7, { message: "El número de trámite debe tener al menos 7 dígitos" })
      .max(12, { message: "El número de trámite no puede tener más de 12 dígitos" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Las contraseñas no coinciden",
  });

export type RegisterFormInputs = z.infer<typeof registerSchema>;
