"use client";
import { format } from "date-fns";
import { es } from "date-fns/locale/es";
import { useState } from "react"

export default function AppointmentList() {
      const [events, setEvents] = useState([
        {
          id: '1',
          title: 'Turno con Dr. García',
          start: new Date().toISOString().slice(0, 10) + 'T10:00:00',
          end: new Date().toISOString().slice(0, 10) + 'T10:30:00',
        },
        {
          id: '2',
          title: 'Consulta pediátrica',
          start: new Date().toISOString().slice(0, 10) + 'T11:00:00',
          end: new Date().toISOString().slice(0, 10) + 'T11:45:00',
        },
      ])
    return (
        <div className="w-full md:w-1/3 bg-gray-100 p-4 rounded shadow">
        <h2 className="text-lg font-semibold mb-4">Lista de Turnos</h2>
        <ul className="space-y-3">
          {events.map((event) => (
            <li
              key={event.id}
              className="bg-white p-3 rounded border border-gray-200 shadow-sm"
            >
              <div className="text-sm text-gray-500">
                {format(new Date(event.start), 'PPPPp', { locale: es })}
              </div>
              <div className="font-medium text-gray-800">{event.title}</div>
            </li>
          ))}
        </ul>
      </div>
    )
}