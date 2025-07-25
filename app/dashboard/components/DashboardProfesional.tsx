"use client"

import {
  CalendarDays,
  CreditCard,
  FileText,
} from "lucide-react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"
import { DashboardHeader } from "@/components/dashboard-header"

export default function DashboardProfesional() {
  return (
    <div className="flex flex-col gap-5">
      <DashboardHeader
        title="Panel del Profesional"
        description="Resumen de tu actividad reciente en el consultorio"
      />

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-medium">Actividad Reciente</CardTitle>
          <CardDescription>Últimas actividades en tu cuenta</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <ActividadItem
              icon={<CalendarDays className="h-4 w-4 text-teal-600" />}
              bg="bg-teal-100"
              title="Turno confirmado con Dr. Martínez"
              fecha="Hoy a las 10:30"
            />
            <ActividadItem
              icon={<CreditCard className="h-4 w-4 text-blue-600" />}
              bg="bg-blue-100"
              title="Pago procesado"
              fecha="Ayer a las 15:45"
            />
            <ActividadItem
              icon={<FileText className="h-4 w-4 text-purple-600" />}
              bg="bg-purple-100"
              title="Resultados de laboratorio disponibles"
              fecha="Hace 2 días"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function ActividadItem({
  icon,
  bg,
  title,
  fecha,
}: {
  icon: React.ReactNode
  bg: string
  title: string
  fecha: string
}) {
  return (
    <div className="flex items-center gap-4">
      <div className={`rounded-full p-2 ${bg}`}>{icon}</div>
      <div className="flex-1">
        <p className="text-sm font-medium">{title}</p>
        <p className="text-xs text-muted-foreground">{fecha}</p>
      </div>
    </div>
  )
}
