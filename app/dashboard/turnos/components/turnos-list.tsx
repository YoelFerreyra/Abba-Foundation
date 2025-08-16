"use client";
import { getAllEventsByPatientId } from "@/actions/calendar/profesional-events";
import { useAuth } from "@/context/AuthContext";
import { format } from "date-fns";
import { es } from "date-fns/locale/es";
import { useState, useEffect } from "react";

export default function AppointmentList() {
  const {user, loading} = useAuth();
  const [events, setEvents] = useState<
    {
      id: number | string;
      title: string;
      start: string;
      end: string;
    }[]
  >([]);

  useEffect(() => {
    async function loadEvents() {
      try {
        if (loading || !user?.claims?.patientId) return;
        const data = await getAllEventsByPatientId(user?.claims?.patientId);
        const formattedEvents = data.map((ev: any) => ({
          id: ev.id,
          title: ev.title,
          start: new Date(ev.startEvent).toISOString(),
          end: new Date(ev.endEvent).toISOString(),
        }));
        setEvents(formattedEvents);
      } catch (error) {
        console.error("Error cargando eventos:", error);
      }
    }

    loadEvents();
  }, [loading, user?.claims?.patientId]);

  return (
    <div className="w-full md:w-1/3 bg-gray-100 p-4 rounded shadow">
      <h2 className="text-lg font-semibold mb-4">Lista de Turnos</h2>
      <ul className="space-y-3">
        {events.length === 0 && (
          <li className="text-gray-500">No hay turnos programados.</li>
        )}
        {events.map((event) => (
          <li
            key={event.id}
            className="bg-white p-3 rounded border border-gray-200 shadow-sm"
          >
            <div className="text-sm text-gray-500">
              {format(new Date(event.start), "PPPPp", { locale: es })}
            </div>
            <div className="font-medium text-gray-800">{event.title}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
