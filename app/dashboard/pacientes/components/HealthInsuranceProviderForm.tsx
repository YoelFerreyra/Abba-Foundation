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
  healthInsuranceProviderSchema,
  HealthInsuranceProviderFormValues,
} from "../schemas/healthInsuranceProviderSchema";
import { useEffect } from "react";

export default function HealthInsuranceProviderForm({
  defaultValues,
  onSubmit,
  isOpen,
  setIsOpen,
}: {
  defaultValues?: Partial<HealthInsuranceProviderFormValues>;
  onSubmit: (data: HealthInsuranceProviderFormValues) => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<HealthInsuranceProviderFormValues>({
    resolver: zodResolver(healthInsuranceProviderSchema),
    defaultValues: defaultValues || {
      name: "",
      description: "",
      contractor: "",
      subcontractor: "",
      cuit: "",
      address: "",
      email: "",
      phone: "",
      contact: "",
    },
  });

  useEffect(() => {
    if (defaultValues) {
      reset(defaultValues);
    }
  }, [defaultValues, reset]);

  const submitHandler = (data: HealthInsuranceProviderFormValues) => {
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
            {defaultValues ? "Editar Obra Social" : "Crear Obra Social"}
          </SheetTitle>
          <SheetDescription>
            {defaultValues
              ? "Modifica la información de la obra social."
              : "Ingresa la información para crear una nueva obra social."}
          </SheetDescription>
        </SheetHeader>

        <form
          onSubmit={handleSubmit(submitHandler)}
          className="flex flex-col gap-4 mt-4"
        >
          <div>
            <Label htmlFor="name">Nombre</Label>
            <Input id="name" {...register("name")} />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="description">Descripción</Label>
            <Input id="description" {...register("description")} />
            {errors.description && (
              <p className="text-red-500 text-sm">{errors.description.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="contractor">Contratante</Label>
            <Input id="contractor" {...register("contractor")} />
            {errors.contractor && (
              <p className="text-red-500 text-sm">{errors.contractor.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="subcontractor">Subcontratante</Label>
            <Input id="subcontractor" {...register("subcontractor")} />
            {errors.subcontractor && (
              <p className="text-red-500 text-sm">{errors.subcontractor.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="cuit">CUIT</Label>
            <Input id="cuit" {...register("cuit")} />
            {errors.cuit && (
              <p className="text-red-500 text-sm">{errors.cuit.message}</p>
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
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" {...register("email")} />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
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
            <Label htmlFor="contact">Persona de contacto</Label>
            <Input id="contact" {...register("contact")} />
            {errors.contact && (
              <p className="text-red-500 text-sm">{errors.contact.message}</p>
            )}
          </div>

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
