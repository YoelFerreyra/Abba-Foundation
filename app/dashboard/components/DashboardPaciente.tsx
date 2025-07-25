"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { FileText } from "lucide-react"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardStats } from "@/components/dashboard-stats"
import { AppointmentList } from "@/components/appointment-list"

export default function DashboardPaciente() {
  return (
    <div className="flex flex-col gap-5">
      <DashboardHeader
        title="Panel del Paciente"
        description="Bienvenido, consulta tus próximos turnos y trámites"
      />

      <DashboardStats />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">Próximos Turnos</CardTitle>
            <CardDescription>Tus citas programadas para los próximos días</CardDescription>
          </CardHeader>
          <CardContent>
            <AppointmentList />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">Trámites Pendientes</CardTitle>
            <CardDescription>Trámites que requieren tu atención</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <TramiteItem title="Autorización de estudio" vence="en 3 días" />
              <TramiteItem title="Renovación de receta" vence="en 5 días" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function TramiteItem({ title, vence }: { title: string; vence: string }) {
  return (
    <div className="flex items-center gap-4 rounded-md border p-3">
      <FileText className="h-5 w-5 text-teal-500" />
      <div className="flex-1 space-y-1">
        <p className="text-sm font-medium">{title}</p>
        <p className="text-xs text-muted-foreground">Vence {vence}</p>
      </div>
      <div className="rounded-full px-2 py-1 text-xs bg-amber-100 text-amber-800">Pendiente</div>
    </div>
  )
}
