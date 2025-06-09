"use client"

import { useState, useEffect } from "react"
import { DashboardHeader } from "@/components/dashboard-header"
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import UserForm from "./components/user-form"
import { getAllPatientsAction } from "@/actions/patients"

type Patient = {
  id: number
  firstName: string
  lastName: string
  phone: string
  address: string
  birthday: string
}

type FormData = {
  firstName: string
  lastName: string
  address: string
  dni: string
  cuil: string
  dniProcessingNumber: string
  birthday: string
  phone: string
  affiliateNumber: string
}


export default function PatientsPage() {
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null)
  const [patients, setPatients] = useState<FormData[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [editingPatient, setEditingPatient] = useState<FormData | null>(null)

  const fetchPacients = async () => {
    const data = await getAllPatientsAction();
    setPatients(data)
  }

  const handleCreate = () => {
    setEditingPatient(null)
    setIsOpen(true)
  }

  const handleEdit = (patient: FormData) => {
    setEditingPatient(patient)
    setIsOpen(true)
  }

  const handleSubmit = (data: FormData) => {
    if (editingPatient) {
      setPatients(prev =>
        prev.map(p =>
          p.firstName === editingPatient.firstName &&
          p.lastName === editingPatient.lastName
            ? { ...p, ...data }
            : p
        )
      )
    } else {
      setPatients(prev => [...prev, data])
    }
  }

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    address: "",
    dni: "",
    cuil: "",
    dniProcessingNumber: "",
    birthday: "", // ISO string format (ej. "2000-01-01")
    phone: "",
    affiliateNumber: ""
  })


  

  useEffect(() => {
    fetchPacients()
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setFormData(prev => ({ ...prev, [id]: value }))
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
              key={`${p.firstName}-${p.lastName}-${i}`}
              onClick={() => handleEdit(p)}
              className="cursor-pointer hover:bg-muted/50"
            >
              <TableCell>{`${p?.firstName} ${p?.lastName}`}</TableCell>
              <TableCell>{p?.phone}</TableCell>
              <TableCell>{p?.address}</TableCell>
              <TableCell className="text-right">
                <Button variant="outline" size="sm">Editar</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <UserForm
        defaultValues={editingPatient || undefined}
        onSubmit={handleSubmit}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </div>
  )
}
