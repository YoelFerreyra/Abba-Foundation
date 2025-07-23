"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from "@/components/ui/sheet";
import { PatientFormData, patientFormSchema } from "../schemas/patient-schema";
import { useEffect } from "react";

export default function PatientForm({
  defaultValues,
  onSubmit,
  isOpen,
  setIsOpen,
}: {
  defaultValues?: PatientFormData;
  onSubmit: (data: PatientFormData) => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm<PatientFormData>({
    resolver: zodResolver(patientFormSchema),
    defaultValues: defaultValues || {
      firstName: "",
      lastName: "",
      address: "",
      dni: "",
      cuil: "",
      dniProcessingNumber: "",
      birthday: new Date(),
      phone: "",
      affiliateNumber: "",
      isActive: false,
    },
  });

  useEffect(() => {
    if (defaultValues) {
      reset(defaultValues);
    }
  }, [defaultValues, reset]);

  const submitHandler = (data: PatientFormData) => {
    onSubmit(data);
    reset();
    setIsOpen(false);
  };

  const isActive = watch("isActive");
  const hasLegalGuardian = watch("hasLegalGuardian");
  const hasAdmission = watch("hasAdmission");

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent
        side="right"
        className="h-screen max-w-xl w-full overflow-y-auto"
      >
        <SheetHeader>
          <SheetTitle>
            {defaultValues ? "Editar Paciente" : "Crear Paciente"}
          </SheetTitle>
          <SheetDescription>
            {defaultValues
              ? "Modifica la información del paciente."
              : "Ingresa la información para crear un nuevo paciente."}
          </SheetDescription>
        </SheetHeader>

        <form
          onSubmit={handleSubmit(submitHandler)}
          className="flex flex-col gap-4 mt-4"
        >
          <div>
            <Label htmlFor="firstName">Nombre</Label>
            <Input id="firstName" {...register("firstName")} />
            {errors.firstName && (
              <p className="text-red-500 text-sm">{errors.firstName.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="lastName">Apellido</Label>
            <Input id="lastName" {...register("lastName")} />
            {errors.lastName && (
              <p className="text-red-500 text-sm">{errors.lastName.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="address">Dirección</Label>
            <Input id="address" {...register("address")} />
            {errors.address && (
              <p className="text-red-500 text-sm">{errors.address.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="dni">DNI</Label>
            <Input id="dni" {...register("dni")} />
            {errors.dni && (
              <p className="text-red-500 text-sm">{errors.dni.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="cuil">CUIL</Label>
            <Input id="cuil" {...register("cuil")} />
            {errors.cuil && (
              <p className="text-red-500 text-sm">{errors.cuil.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="dniProcessingNumber">Nº de trámite</Label>
            <Input
              id="dniProcessingNumber"
              {...register("dniProcessingNumber")}
            />
            {errors.dniProcessingNumber && (
              <p className="text-red-500 text-sm">
                {errors.dniProcessingNumber.message}
              </p>
            )}
          </div>

          <div>
            <Label htmlFor="birthday">Fecha de nacimiento</Label>
            <Input
              id="birthday"
              type="date"
              {...register("birthday", { valueAsDate: true })}
            />
            {errors.birthday && (
              <p className="text-red-500 text-sm">{errors.birthday.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="phone">Teléfono</Label>
            <Input id="phone" {...register("phone")} />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="affiliateNumber">Nº de afiliado</Label>
            <Input id="affiliateNumber" {...register("affiliateNumber")} />
            {errors.affiliateNumber && (
              <p className="text-red-500 text-sm">
                {errors.affiliateNumber.message}
              </p>
            )}
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="isActive"
              checked={isActive}
              onCheckedChange={(checked) =>
                setValue("isActive", Boolean(checked))
              }
            />
            <Label htmlFor="isActive">Paciente activo</Label>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="hasAdmission"
              checked={hasAdmission}
              onCheckedChange={(checked) =>
                setValue("hasAdmission", Boolean(checked))
              }
            />
            <Label htmlFor="hasAdmission">¿Agregar datos de ingreso?</Label>
          </div>

          {hasAdmission && (
            <div className="space-y-4 border p-4 rounded-lg bg-gray-50">
              <h3 className="text-lg font-semibold">Datos de Ingreso</h3>

              <div>
                <Label htmlFor="admission.admissionDate">
                  Fecha de ingreso
                </Label>
                <Input
                  id="admission.admissionDate"
                  type="date"
                  {...register("admission.admissionDate", {
                    valueAsDate: true,
                  })}
                />
                {errors.admission?.admissionDate && (
                  <p className="text-red-500 text-sm">
                    {errors.admission.admissionDate.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="admission.admissionTypeId">
                  Tipo de ingreso
                </Label>
                <select
                  id="admission.admissionTypeId"
                  {...register("admission.admissionTypeId")}
                  className="w-full border p-2 rounded"
                >
                  <option value="">Seleccionar</option>
                  <option value="1">Obra Social</option>
                  <option value="2">Particular</option>
                  <option value="3">Empleado</option>
                  <option value="4">Familiar</option>
                </select>
                {errors.admission?.admissionTypeId && (
                  <p className="text-red-500 text-sm">
                    {errors.admission.admissionTypeId.message}
                  </p>
                )}
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="admission.isSchoolEnrolled"
                  checked={watch("admission.isSchoolEnrolled")}
                  onCheckedChange={(checked) =>
                    setValue("admission.isSchoolEnrolled", Boolean(checked))
                  }
                />
                <Label htmlFor="admission.isSchoolEnrolled">
                  ¿Está escolarizado?
                </Label>
              </div>

              <div>
                <Label htmlFor="admission.schoolShift">Turno colegio</Label>
                <select
                  id="admission.schoolShift"
                  {...register("admission.schoolShift")}
                  className="w-full border p-2 rounded"
                >
                  <option value="">Seleccionar</option>
                  <option value="MORNING">Mañana</option>
                  <option value="AFTERNOON">Tarde</option>
                  <option value="FULL_DAY">Jornada Completa</option>
                </select>
              </div>

              <div>
                <Label htmlFor="admission.cud">Diagnóstico / CUD</Label>
                <Input id="admission.cud" {...register("admission.cud")} />
              </div>

              <div>
                <Label htmlFor="admission.cudExpirationDate">
                  Vencimiento del CUD
                </Label>
                <Input
                  id="admission.cudExpirationDate"
                  type="date"
                  {...register("admission.cudExpirationDate", {
                    valueAsDate: true,
                  })}
                />
              </div>
            </div>
          )}

          <div className="flex items-center space-x-2">
            <Checkbox
              id="hasLegalGuardian"
              checked={hasLegalGuardian}
              onCheckedChange={(checked) =>
                setValue("hasLegalGuardian", Boolean(checked))
              }
            />
            <Label htmlFor="hasLegalGuardian">¿Tiene tutor?</Label>
          </div>
          {hasLegalGuardian && (
            <div className="space-y-4 border p-4 rounded-lg bg-gray-50">
              <h3 className="text-lg font-semibold">Datos del Tutor</h3>

              <div>
                <Label htmlFor="legalGuardian.firstName">Nombre</Label>
                <Input
                  id="legalGuardian.firstName"
                  {...register("legalGuardian.firstName")}
                />
                {errors.legalGuardian?.firstName && (
                  <p className="text-red-500 text-sm">
                    {errors.legalGuardian.firstName.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="legalGuardian.lastName">Apellido</Label>
                <Input
                  id="legalGuardian.lastName"
                  {...register("legalGuardian.lastName")}
                />
                {errors.legalGuardian?.lastName && (
                  <p className="text-red-500 text-sm">
                    {errors.legalGuardian.lastName.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="legalGuardian.address">Dirección</Label>
                <Input
                  id="legalGuardian.address"
                  {...register("legalGuardian.address")}
                />
                {errors.legalGuardian?.address && (
                  <p className="text-red-500 text-sm">
                    {errors.legalGuardian.address.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="legalGuardian.dni">DNI</Label>
                <Input
                  id="legalGuardian.dni"
                  {...register("legalGuardian.dni")}
                />
                {errors.legalGuardian?.dni && (
                  <p className="text-red-500 text-sm">
                    {errors.legalGuardian.dni.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="legalGuardian.birthday">
                  Fecha de nacimiento
                </Label>
                <Input
                  id="birthday"
                  type="date"
                  {...register("legalGuardian.birthday", { valueAsDate: true })}
                />
                {errors.legalGuardian?.birthday && (
                  <p className="text-red-500 text-sm">
                    {errors.legalGuardian.birthday.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="legalGuardian.dniProcessingNumber">
                  Nº de trámite
                </Label>
                <Input
                  id="legalGuardian.dniProcessingNumber"
                  {...register("legalGuardian.dniProcessingNumber")}
                />
                {errors.legalGuardian?.dniProcessingNumber && (
                  <p className="text-red-500 text-sm">
                    {errors.legalGuardian.dniProcessingNumber.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="legalGuardian.cuil">CUIL</Label>
                <Input
                  id="legalGuardian.cuil"
                  {...register("legalGuardian.cuil")}
                />
                {errors.legalGuardian?.cuil && (
                  <p className="text-red-500 text-sm">
                    {errors.legalGuardian.cuil.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="legalGuardian.phone">Teléfono</Label>
                <Input
                  id="legalGuardian.phone"
                  {...register("legalGuardian.phone")}
                />
                {errors.legalGuardian?.phone && (
                  <p className="text-red-500 text-sm">
                    {errors.legalGuardian.phone.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="legalGuardian.professionalActivity">
                  Actividad Profesional
                </Label>
                <Input
                  id="legalGuardian.professionalActivity"
                  {...register("legalGuardian.professionalActivity")}
                />
              </div>
            </div>
          )}

          <div className="mt-6 flex justify-end gap-2">
            <SheetClose asChild>
              <Button type="button" variant="outline">
                Cancelar
              </Button>
            </SheetClose>
            <Button type="submit">{defaultValues ? "Guardar" : "Crear"}</Button>
          </div>
        </form>
      </SheetContent>
    </Sheet>
  );
}
