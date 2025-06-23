import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, "Este campo es requerido")
    .refine(
      (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val) || /^\d{6,}$/.test(val),
      {
        message: "Debe ser un correo electrónico válido o un DNI numérico",
      }
    ),
  password: z.string().min(1, "Contraseña requerida"),
});

export type LoginFormInputs = z.infer<typeof loginSchema>;
