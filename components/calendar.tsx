"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

// Datos de ejemplo para el calendario
const appointments = [
  { date: new Date(2025, 4, 16), time: "10:30", doctor: "Dr. Martínez", type: "Consulta" },
  { date: new Date(2025, 4, 18), time: "15:00", doctor: "Dra. Gómez", type: "Control" },
  { date: new Date(2025, 4, 22), time: "09:15", doctor: "Dr. Rodríguez", type: "Estudio" },
]

export function Calendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date())

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1))
  }

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1))
  }

  // Obtener el primer día del mes actual
  const firstDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1)
  // Obtener el último día del mes actual
  const lastDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0)

  // Obtener el día de la semana del primer día (0 = Domingo, 1 = Lunes, etc.)
  const firstDayOfWeek = firstDayOfMonth.getDay()

  // Ajustar para que la semana comience en lunes (0 = Lunes, 6 = Domingo)
  const startDay = firstDayOfWeek === 0 ? 6 : firstDayOfWeek - 1

  // Nombres de los meses
  const monthNames = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ]

  // Nombres de los días de la semana
  const weekDays = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"]

  // Verificar si una fecha tiene citas
  const hasAppointment = (date: Date) => {
    return appointments.some(
      (appointment) =>
        appointment.date.getDate() === date.getDate() &&
        appointment.date.getMonth() === date.getMonth() &&
        appointment.date.getFullYear() === date.getFullYear(),
    )
  }

  // Obtener citas para una fecha específica
  const getAppointmentsForDate = (date: Date) => {
    return appointments.filter(
      (appointment) =>
        appointment.date.getDate() === date.getDate() &&
        appointment.date.getMonth() === date.getMonth() &&
        appointment.date.getFullYear() === date.getFullYear(),
    )
  }

  // Generar las celdas del calendario
  const generateCalendarCells = () => {
    const today = new Date()
    const cells = []

    // Agregar celdas vacías para los días anteriores al primer día del mes
    for (let i = 0; i < startDay; i++) {
      cells.push(<div key={`empty-${i}`} className="h-12 border border-transparent p-1"></div>)
    }

    // Agregar celdas para cada día del mes
    for (let day = 1; day <= lastDayOfMonth.getDate(); day++) {
      const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day)
      const isToday =
        date.getDate() === today.getDate() &&
        date.getMonth() === today.getMonth() &&
        date.getFullYear() === today.getFullYear()
      const hasAppt = hasAppointment(date)

      cells.push(
        <div key={`day-${day}`} className={cn("h-12 border border-border p-1 relative", isToday && "bg-muted")}>
          <div className="flex justify-between items-start">
            <span className={cn("text-sm", isToday && "font-bold")}>{day}</span>
            {hasAppt && <span className="h-2 w-2 rounded-full bg-teal-500"></span>}
          </div>
          {hasAppt && (
            <div className="absolute bottom-1 left-1 right-1">
              <div className="text-xs bg-teal-100 text-teal-800 rounded px-1 truncate">
                {getAppointmentsForDate(date)[0].time}
              </div>
            </div>
          )}
        </div>,
      )
    }

    return cells
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">
          {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
        </h2>
        <div className="flex gap-1">
          <Button variant="outline" size="icon" onClick={prevMonth}>
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Mes anterior</span>
          </Button>
          <Button variant="outline" size="icon" onClick={nextMonth}>
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Mes siguiente</span>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-px">
        {weekDays.map((day) => (
          <div key={day} className="h-10 flex items-center justify-center font-medium text-sm">
            {day}
          </div>
        ))}
        {generateCalendarCells()}
      </div>

      <div className="mt-4">
        <h3 className="text-md font-medium mb-2">Próximos turnos</h3>
        <div className="space-y-2">
          {appointments.map((appointment, index) => (
            <Card key={index} className="p-3">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">{appointment.doctor}</p>
                  <p className="text-sm text-muted-foreground">{appointment.type}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">
                    {appointment.date.getDate()}/{appointment.date.getMonth() + 1}
                  </p>
                  <p className="text-sm text-muted-foreground">{appointment.time}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
