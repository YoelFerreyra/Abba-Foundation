"use client"

import { useState, useEffect } from "react"
import { DashboardHeader } from "@/components/dashboard-header"
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import PatientForm from "./components/user-form"
import { createPatientAction, getAllPatientsAction } from "@/actions/patients"
import { PatientFormData } from "./schemas/patient-schema"

export default function PatientsPage() {
  const [patients, setPatients] = useState<PatientFormData[]>([])
  const [editingPatient, setEditingPatient] = useState<PatientFormData | null>(null)
  const [isOpen, setIsOpen] = useState(false)

  const fetchPatients = async () => {
    const data = await getAllPatientsAction()

    // Convertir fechas si vienen como string
    const parsed = data.map((p: any) => ({
      ...p,
      birthday: new Date(p.birthday),
    }))
    setPatients(parsed)
  }

  useEffect(() => {
    fetchPatients()
  }, [])

  const handleCreate = () => {
    setEditingPatient(null)
    setIsOpen(true)
  }

  const handleEdit = (patient: PatientFormData) => {
    setEditingPatient({
      ...patient,
      birthday: new Date(patient.birthday),
    })
    setIsOpen(true)
  }

  const handleSubmit = async (data: PatientFormData) => {
    if (editingPatient) {
      const updatedData = {
        ...editingPatient,
        ...data,
        birthday: data.birthday.toISOString(),
      }
      const result = await createPatientAction(updatedData)
    }
    const result = await createPatientAction(data)
    await fetchPatients()
    setIsOpen(false)
  }

  return (
    <div className="flex flex-col gap-5">
      <DashboardHeader
        title="Gestión de Pacientes"
        description="Administra los pacientes del consultorio"
      />

      <div className="flex justify-end">
        <Button onClick={handleCreate}>Agregar Paciente</Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nombre</TableHead>
            <TableHead>Teléfono</TableHead>
            <TableHead>Dirección</TableHead>
            <TableHead>Fecha de nacimiento</TableHead>
            <TableHead className="text-right">Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {patients.map((p, i) => (
            <TableRow
              key={`${p.dni}-${i}`}
              className="cursor-pointer hover:bg-muted/50"
            >
              <TableCell>{`${p.firstName} ${p.lastName}`}</TableCell>
              <TableCell>{p.phone}</TableCell>
              <TableCell>{p.address}</TableCell>
              <TableCell>{new Date(p.birthday).toLocaleDateString()}</TableCell>
              <TableCell className="text-right">
                <Button variant="outline" size="sm" onClick={() => handleEdit(p)}>Editar</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <PatientForm
        defaultValues={editingPatient || undefined}
        onSubmit={handleSubmit}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </div>
  )
}
