"use client"

import { useState, useEffect } from "react"
import { DashboardHeader } from "@/components/dashboard-header"
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import UserForm from "./components/user-form"
import { getAllUsersAction } from "@/actions/users"

type User = {
  id: number
  name: string
  email: string
  phone: string
}

type FormData = {
    name: string
    email: string
    phone: string
  }

export default function UsersPage() {
  const [selectedUser, setSelectedUser] = useState<User | null>(null)
  const [users, setUsers] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const [editingUser, setEditingUser] = useState<FormData | null>(null)

  const fetchAllUser = async () => {
    const users = await getAllUsersAction()
    setUsers(users)
  }

  const handleCreate = () => {
    setEditingUser(null)
    setIsOpen(true)
  }

  const handleEdit = (user: FormData) => {
    setEditingUser(user)
    setIsOpen(true)
  }

  const handleSubmit = (data: FormData) => {
    if (editingUser) {
      setUsers(prev =>
        prev.map(u => (u.email === editingUser.email ? { ...u, ...data } : u))
      )
    } else {
      setUsers(prev => [...prev, data])
    }
  }

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  })

  useEffect(() => {
    fetchAllUser()
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setFormData(prev => ({ ...prev, [id]: value }))
  }

  return (
    <div className="flex flex-col gap-5">
      <DashboardHeader
        title="Gestión de Usuarios"
        description="Administra los usuarios del consultorio"
      />

      <div className="flex justify-end">
        <Button onClick={handleCreate}>Crear Paciente</Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nombre</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Teléfono</TableHead>
            <TableHead className="text-right">Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users?.map(user => (
            <TableRow key={user?.name} onClick={() => handleEdit(user)} className="cursor-pointer hover:bg-muted/50">
              <TableCell>{user?.name}</TableCell>
              <TableCell>{user?.email}</TableCell>
              <TableCell>{user?.phone}</TableCell>
              <TableCell className="text-right">
                <Button variant="outline" size="sm">Editar</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <UserForm
        defaultValues={editingUser || undefined}
        onSubmit={handleSubmit}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </div>
  )
}
