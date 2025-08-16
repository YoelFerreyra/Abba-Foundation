"use client"
import { useAuth } from "@/context/AuthContext"
import DashboardProfesional from "./components/DashboardProfesional"
import DashboardPatient from "./components/DashboardPaciente"

export default function DashboardPage() {
  const { user } = useAuth()

  if (!user) return null

  return (
    <>
    {
      user?.claims?.role === "PROFESSIONAL"
        ? <DashboardProfesional />
        : user?.claims?.role === "CLIENT"
          ? <DashboardPatient />
          : user?.claims?.role === "ROOT" || user?.claims?.role === "ADMIN"
            ? <DashboardProfesional />
            : <DashboardPatient />
    }
    </>
  )
}
