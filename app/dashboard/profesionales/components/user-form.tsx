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
import { ProfessionalFormData, professionalFormSchema } from "../schemas/professional-schema"

export default function ProfessionalForm({
  defaultValues,
  onSubmit,
  isOpen,
  setIsOpen,
}: {
  defaultValues?: ProfessionalFormData
  onSubmit: (data: ProfessionalFormData) => void
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
  } = useForm<ProfessionalFormData>({
    resolver: zodResolver(professionalFormSchema),
    defaultValues: defaultValues || {
      firstName: "",
      lastName: "",
      address: "",
      dni: "",
      cuil: "",
      birthday: new Date(),
      phone: "",
      professionalActivity: "",
      profecionalType: "",
      healthInsuranceProviderId: null,
      isActive: false,
    },
  })

  const submitHandler = (data: ProfessionalFormData) => {
    onSubmit(data)
    reset()
    setIsOpen(false)
  }

  const isActive = watch("isActive")

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent side="right" className="h-screen max-w-xl w-full overflow-y-auto">
        <SheetHeader>
          <SheetTitle>{defaultValues ? "Editar Profesional" : "Crear Profesional"}</SheetTitle>
          <SheetDescription>
            {defaultValues
              ? "Modifica la información del profesional."
              : "Ingresa la información para crear un nuevo profesional."}
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
            <Label htmlFor="professionalActivity">Actividad profesional</Label>
            <Input id="professionalActivity" {...register("professionalActivity")} />
            {errors.professionalActivity && (
              <p className="text-red-500 text-sm">{errors.professionalActivity.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="profecionalType">Tipo de profesional</Label>
            <Input id="profecionalType" {...register("profecionalType")} />
            {errors.profecionalType && (
              <p className="text-red-500 text-sm">{errors.profecionalType.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="healthInsuranceProviderId">ID de obra social</Label>
            <Input
              id="healthInsuranceProviderId"
              type="number"
              {...register("healthInsuranceProviderId", { valueAsNumber: true })}
            />
            {errors.healthInsuranceProviderId && (
              <p className="text-red-500 text-sm">{errors.healthInsuranceProviderId.message}</p>
            )}
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="isActive"
              checked={isActive}
              onCheckedChange={(checked) => setValue("isActive", Boolean(checked))}
            />
            <Label htmlFor="isActive">Profesional activo</Label>
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
