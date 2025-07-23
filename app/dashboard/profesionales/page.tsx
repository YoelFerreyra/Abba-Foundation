"use client"

import { useState, useEffect } from "react"
import { DashboardHeader } from "@/components/dashboard-header"
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import ProfessionalForm from "./components/user-form"
import { createProfessionalAction, getAllProfessionalsAction } from "@/actions/professional"
import { ProfessionalFormData } from "./schemas/professional-schema"

export default function ProfessionalPage() {
  const [professional, setProfessional] = useState<ProfessionalFormData[]>([])
  const [editingPatient, setEditingPatient] = useState<ProfessionalFormData | null>(null)
  const [isOpen, setIsOpen] = useState(false)

  const fetchPatients = async () => {
    const data = await getAllProfessionalsAction()

    setProfessional(data || [])
  }

  useEffect(() => {
    fetchPatients()
  }, [])

  const handleCreate = () => {
    setEditingPatient(null)
    setIsOpen(true)
  }

  const handleEdit = (patient: ProfessionalFormData) => {
    setEditingPatient({
      ...patient,
      birthday: new Date(patient.birthday),
    })
    setIsOpen(true)
  }

  const handleSubmit = async (data: ProfessionalFormData) => {
    const result = await createProfessionalAction(data)
    console.log(result);
    await fetchPatients()
    setIsOpen(false)
  }

  return (
    <div className="flex flex-col gap-5">
      <DashboardHeader
        title="Gestión de Profesionales"
        description="Administra los profesionales del consultorio"
      />

      <div className="flex justify-end">
        <Button onClick={handleCreate}>Agregar Profesional</Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nombre</TableHead>
            <TableHead>Teléfono</TableHead>
            <TableHead>Dirección</TableHead>
            <TableHead>Fecha de nacimiento</TableHead>
            <TableHead>Actividad profesional</TableHead>
            <TableHead>Activo</TableHead>
            <TableHead className="text-right">Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {professional.map((p, i) => (
            <TableRow
              key={`${p.dni}-${i}`}
              className="cursor-pointer hover:bg-muted/50"
            >
              <TableCell>{`${p.firstName} ${p.lastName}`}</TableCell>
              <TableCell>{p.phone}</TableCell>
              <TableCell>{p.address}</TableCell>
              <TableCell>{new Date(p.birthday).toLocaleDateString()}</TableCell>
              <TableCell>{p.professionalActivity}</TableCell>
              <TableCell>{p.isActive ? "🟢 activo": "🔴 inactivo"}</TableCell>
              <TableCell className="text-right">
                <Button variant="outline" size="sm" onClick={() => handleEdit(p)}>Editar</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <ProfessionalForm
        defaultValues={editingPatient || undefined}
        onSubmit={handleSubmit}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </div>
  )
}
