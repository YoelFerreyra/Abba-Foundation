import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, MapPin, Clock } from "lucide-react"

interface AppointmentListProps {
  extended?: boolean
}

export function AppointmentList({ extended = false }: AppointmentListProps) {
  const appointments = [
    {
      id: 1,
      doctor: "Dr. Martínez",
      specialty: "Clínica Médica",
      date: "16/05/2025",
      time: "10:30",
      location: "Consultorio 3, Piso 2",
      status: "Confirmado",
    },
    {
      id: 2,
      doctor: "Dra. Gómez",
      specialty: "Endocrinología",
      date: "18/05/2025",
      time: "15:00",
      location: "Consultorio 5, Piso 1",
      status: "Pendiente",
    },
    {
      id: 3,
      doctor: "Dr. Rodríguez",
      specialty: "Cardiología",
      date: "22/05/2025",
      time: "09:15",
      location: "Consultorio 2, Piso 3",
      status: "Confirmado",
    },
  ]

  if (extended) {
    return (
      <div className="space-y-4">
        {appointments.map((appointment) => (
          <div
            key={appointment.id}
            className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between border rounded-lg p-4"
          >
            <div className="flex gap-4 items-start">
              <div className="rounded-full bg-teal-100 p-2 hidden md:flex">
                <CalendarDays className="h-5 w-5 text-teal-600" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-medium">{appointment.doctor}</h3>
                  <Badge variant={appointment.status === "Confirmado" ? "default" : "outline"}>
                    {appointment.status}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">{appointment.specialty}</p>
                <div className="flex flex-col sm:flex-row sm:gap-4 mt-1">
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    <span>
                      {appointment.date} - {appointment.time}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <MapPin className="h-3 w-3" />
                    <span>{appointment.location}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <Button variant="outline" size="sm" className="flex-1 md:flex-none">
                Reprogramar
              </Button>
              <Button size="sm" className="flex-1 md:flex-none">
                Ver Detalles
              </Button>
            </div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {appointments.slice(0, 3).map((appointment) => (
        <div key={appointment.id} className="flex items-center gap-4">
          <div className="rounded-full bg-teal-100 p-2">
            <CalendarDays className="h-4 w-4 text-teal-600" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium">{appointment.doctor}</p>
            <p className="text-xs text-muted-foreground">
              {appointment.date} - {appointment.time}
            </p>
          </div>
          <Badge variant={appointment.status === "Confirmado" ? "default" : "outline"}>{appointment.status}</Badge>
        </div>
      ))}
    </div>
  )
}
