"use client"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from "@/components/ui/sheet"

const formSchema = z.object({
  name: z.string().min(1, "El nombre es obligatorio"),
  email: z.string().email("Email inválido"),
  phone: z.string().min(7, "Teléfono inválido"),
})

type FormData = z.infer<typeof formSchema>

export default function UserForm({
  defaultValues,
  onSubmit,
  isOpen,
  setIsOpen,
}: {
  defaultValues?: FormData
  onSubmit: (data: FormData) => void
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValues || {
      name: "",
      email: "",
      phone: "",
    },
  })

  const submitHandler = (data: FormData) => {
    onSubmit(data)
    reset()
    setIsOpen(false)
  }

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent side="right" className="h-screen max-w-xl w-full overflow-y-auto">
        <SheetHeader>
          <SheetTitle>{defaultValues ? "Editar Usuario" : "Crear Usuario"}</SheetTitle>
          <SheetDescription>
            {defaultValues
              ? "Modifica la información del usuario."
              : "Ingresa la información para crear un nuevo usuario."}
          </SheetDescription>
        </SheetHeader>

        <form onSubmit={handleSubmit(submitHandler)} className="flex flex-col gap-4 mt-4">
          <div>
            <Label htmlFor="name">Nombre</Label>
            <Input id="name" {...register("name")} />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>

          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" {...register("email")} />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          <div>
            <Label htmlFor="phone">Teléfono</Label>
            <Input id="phone" {...register("phone")} />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
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
