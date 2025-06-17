"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from "@/components/ui/sheet"
import { PatientFormData, patientFormSchema } from "../schemas/patient-schema"

export default function PatientForm({
  defaultValues,
  onSubmit,
  isOpen,
  setIsOpen,
}: {
  defaultValues?: PatientFormData
  onSubmit: (data: PatientFormData) => void
  isOpen: boolean
  setIsOpen: (open: boolean) => void
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
  })

  const submitHandler = (data: PatientFormData) => {
    onSubmit(data)
    reset()
    setIsOpen(false)
  }

  const isActive = watch("isActive")

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent side="right" className="h-screen max-w-xl w-full overflow-y-auto">
        <SheetHeader>
          <SheetTitle>{defaultValues ? "Editar Paciente" : "Crear Paciente"}</SheetTitle>
          <SheetDescription>
            {defaultValues
              ? "Modifica la información del paciente."
              : "Ingresa la información para crear un nuevo paciente."}
          </SheetDescription>
        </SheetHeader>

        <form onSubmit={handleSubmit(submitHandler)} className="flex flex-col gap-4 mt-4">
          <div>
            <Label htmlFor="firstName">Nombre</Label>
            <Input id="firstName" {...register("firstName")} />
            {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
          </div>

          <div>
            <Label htmlFor="lastName">Apellido</Label>
            <Input id="lastName" {...register("lastName")} />
            {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}
          </div>

          <div>
            <Label htmlFor="address">Dirección</Label>
            <Input id="address" {...register("address")} />
            {errors.address && <p className="text-red-500 text-sm">{errors.address.message}</p>}
          </div>

          <div>
            <Label htmlFor="dni">DNI</Label>
            <Input id="dni" {...register("dni")} />
            {errors.dni && <p className="text-red-500 text-sm">{errors.dni.message}</p>}
          </div>

          <div>
            <Label htmlFor="cuil">CUIL</Label>
            <Input id="cuil" {...register("cuil")} />
            {errors.cuil && <p className="text-red-500 text-sm">{errors.cuil.message}</p>}
          </div>

          <div>
            <Label htmlFor="dniProcessingNumber">Nº de trámite</Label>
            <Input id="dniProcessingNumber" {...register("dniProcessingNumber")} />
            {errors.dniProcessingNumber && <p className="text-red-500 text-sm">{errors.dniProcessingNumber.message}</p>}
          </div>

          <div>
            <Label htmlFor="birthday">Fecha de nacimiento</Label>
            <Input id="birthday" type="date" {...register("birthday", { valueAsDate: true })} />
            {errors.birthday && <p className="text-red-500 text-sm">{errors.birthday.message}</p>}
          </div>

          <div>
            <Label htmlFor="phone">Teléfono</Label>
            <Input id="phone" {...register("phone")} />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
          </div>

          <div>
            <Label htmlFor="affiliateNumber">Nº de afiliado</Label>
            <Input id="affiliateNumber" {...register("affiliateNumber")} />
            {errors.affiliateNumber && <p className="text-red-500 text-sm">{errors.affiliateNumber.message}</p>}
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="isActive"
              checked={isActive}
              onCheckedChange={(checked) => setValue("isActive", Boolean(checked))}
            />
            <Label htmlFor="isActive">Paciente activo</Label>
          </div>

          <div className="mt-6 flex justify-end gap-2">
            <SheetClose asChild>
              <Button type="button" variant="outline">Cancelar</Button>
            </SheetClose>
            <Button type="submit">{defaultValues ? "Guardar" : "Crear"}</Button>
          </div>
        </form>
      </SheetContent>
    </Sheet>
  )
}
