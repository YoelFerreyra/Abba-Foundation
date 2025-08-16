"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from "@/components/ui/sheet";

import {
  healthInsuranceAuthorizationSchema,
  HealthInsuranceAuthorizationFormValues,
} from "../schemas/healthInsuranceAuthorization";
import { useEffect } from "react";

export default function HealthInsuranceAuthorizationForm({
  defaultValues,
  onSubmit,
  isOpen,
  setIsOpen,
}: {
  defaultValues?: Partial<HealthInsuranceAuthorizationFormValues>;
  onSubmit: (data: HealthInsuranceAuthorizationFormValues) => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<HealthInsuranceAuthorizationFormValues>({
    resolver: zodResolver(healthInsuranceAuthorizationSchema),
    defaultValues: defaultValues || {
      healthInsuranceProviderId: 0,
      admissionId: 0,
      coverageServiceId: 0,
      periodFrom: "",
      periodTo: "",
      authorizedAt: "",
    },
  });

  useEffect(() => {
    if (defaultValues) {
      reset(defaultValues);
    }
  }, [defaultValues, reset]);

  const submitHandler = (data: HealthInsuranceAuthorizationFormValues) => {
    onSubmit(data);
    reset();
    setIsOpen(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent
        side="right"
        className="h-screen max-w-xl w-full overflow-y-auto"
      >
        <SheetHeader>
          <SheetTitle>
            {defaultValues ? "Editar Autorización" : "Crear Autorización"}
          </SheetTitle>
          <SheetDescription>
            {defaultValues
              ? "Modifica los datos de la autorización."
              : "Completa la información para crear una nueva autorización."}
          </SheetDescription>
        </SheetHeader>

        <form
          onSubmit={handleSubmit(submitHandler)}
          className="flex flex-col gap-4 mt-4"
        >
          {/* Obra social */}
          <div>
            <Label htmlFor="healthInsuranceProviderId">Obra Social</Label>
            <Input
              id="healthInsuranceProviderId"
              type="number"
              {...register("healthInsuranceProviderId", { valueAsNumber: true })}
            />
            {errors.healthInsuranceProviderId && (
              <p className="text-red-500 text-sm">
                {errors.healthInsuranceProviderId.message}
              </p>
            )}
          </div>

          {/* Admisión */}
          <div>
            <Label htmlFor="admissionId">Admisión</Label>
            <Input
              id="admissionId"
              type="number"
              {...register("admissionId", { valueAsNumber: true })}
            />
            {errors.admissionId && (
              <p className="text-red-500 text-sm">
                {errors.admissionId.message}
              </p>
            )}
          </div>

          {/* Servicio */}
          <div>
            <Label htmlFor="coverageServiceId">Servicio</Label>
            <Input
              id="coverageServiceId"
              type="number"
              {...register("coverageServiceId", { valueAsNumber: true })}
            />
            {errors.coverageServiceId && (
              <p className="text-red-500 text-sm">
                {errors.coverageServiceId.message}
              </p>
            )}
          </div>

          {/* Fecha desde */}
          <div>
            <Label htmlFor="periodFrom">Periodo Desde</Label>
            <Input id="periodFrom" type="date" {...register("periodFrom")} />
            {errors.periodFrom && (
              <p className="text-red-500 text-sm">{errors.periodFrom.message}</p>
            )}
          </div>

          {/* Fecha hasta */}
          <div>
            <Label htmlFor="periodTo">Periodo Hasta</Label>
            <Input id="periodTo" type="date" {...register("periodTo")} />
            {errors.periodTo && (
              <p className="text-red-500 text-sm">{errors.periodTo.message}</p>
            )}
          </div>

          {/* Fecha de autorización */}
          <div>
            <Label htmlFor="authorizedAt">Fecha de Autorización</Label>
            <Input id="authorizedAt" type="date" {...register("authorizedAt")} />
            {errors.authorizedAt && (
              <p className="text-red-500 text-sm">
                {errors.authorizedAt.message}
              </p>
            )}
          </div>

          <div className="mt-6 flex justify-end gap-2">
            <SheetClose asChild>
              <Button type="button" variant="outline">
                Cancelar
              </Button>
            </SheetClose>
            <Button type="submit">
              {defaultValues ? "Guardar" : "Crear"}
            </Button>
          </div>
        </form>
      </SheetContent>
    </Sheet>
  );
}
