import { z } from "zod";

export const healthInsuranceAuthorizationSchema = z.object({
  healthInsuranceProviderId: z
    .number({ invalid_type_error: "Debe seleccionar una obra social" })
    .int()
    .positive({ message: "Debe seleccionar una obra social" }),

  admissionId: z
    .number({ invalid_type_error: "Debe seleccionar una admisión" })
    .int()
    .positive({ message: "Debe seleccionar una admisión" }),

  coverageServiceId: z
    .number({ invalid_type_error: "Debe seleccionar un servicio" })
    .int()
    .positive({ message: "Debe seleccionar un servicio" }),

  periodFrom: z
    .string()
    .nonempty({ message: "Debe ingresar la fecha de inicio" })
    .refine((val) => !isNaN(Date.parse(val)), {
      message: "Fecha de inicio inválida",
    }),

  periodTo: z
    .string()
    .nonempty({ message: "Debe ingresar la fecha de fin" })
    .refine((val) => !isNaN(Date.parse(val)), {
      message: "Fecha de fin inválida",
    }),

  authorizedAt: z
    .string()
    .nonempty({ message: "Debe ingresar la fecha de autorización" })
    .refine((val) => !isNaN(Date.parse(val)), {
      message: "Fecha de autorización inválida",
    }),
});

export type HealthInsuranceAuthorizationFormValues = z.infer<
  typeof healthInsuranceAuthorizationSchema
>;
