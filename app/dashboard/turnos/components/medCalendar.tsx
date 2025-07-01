"use client";

import React, { useCallback, useEffect, useState } from "react";
import { Calendar, dateFnsLocalizer, View } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import {
  format,
  parse,
  getDay,
  addDays,
  setHours,
  setMinutes,
  startOfWeek,
  addMinutes,
  eachWeekOfInterval,
  addWeeks,
} from "date-fns";
import { es } from "date-fns/locale/es";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  createEvent,
  deleteCalendarEvent,
  getAllEvents,
  getWeeklySchedule,
} from "@/actions/calendar/profesional-events";
import { useAuth } from "@/context/AuthContext";
import WeeklyScheduleModal from "./WeeklyScheduleModal";
import { getAllProfessionalsAction } from "@/actions/professional";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./calendar.css"; // <- este es tu archivo personalizado
import { toast } from "sonner";

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales: { es },
});

const weekDaysMap: Record<string, number> = {
  sunday: 0,
  monday: 1,
  tuesday: 2,
  wednesday: 3,
  thursday: 4,
  friday: 5,
  saturday: 6,
};

const messagesEs = {
  date: "Fecha",
  time: "Hora",
  event: "Evento",
  allDay: "Todo el día",
  week: "Semana",
  work_week: "Semana laboral",
  day: "Día",
  month: "Mes",
  previous: "Anterior",
  next: "Siguiente",
  yesterday: "Ayer",
  tomorrow: "Mañana",
  today: "Hoy",
  agenda: "Agenda",
  noEventsInRange: "No hay eventos en este rango.",
  showMore: (total: number) => `+ Ver más (${total})`,
};

export type CalendarEvent = {
  id: string | number;
  title: string;
  start: Date;
  end: Date;
  allDay?: boolean;
  description?: string;
};

type EventFormData = {
  title: string;
  description: string;
  date: string;
  time: string;
};

type Professional = {
  id: number;
  firstName: string;
  lastName: string;
};

export default function MedCalendar() {
  const [allEvents, setAllEvents] = useState<CalendarEvent[]>([]);
  const [scheduleEvents, setScheduleEvents] = useState<CalendarEvent[]>([]);
  const [formData, setFormData] = useState<EventFormData>({
    title: "",
    description: "",
    date: "",
    time: "",
  });

  const { user } = useAuth();
  const [dateRange, setDateRange] = useState<{ start: Date; end: Date } | null>(
    null
  );
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(
    null
  );
  const [isEventModalOpen, setIsEventModalOpen] = useState(false);

  const generateEventsFromSchedule = (
    schedule: Record<string, { enabled: boolean; timeRanges: TimeRange[] }>,
    sessionTime: number = 30
  ): CalendarEvent[] => {
    const today = new Date();
    const startDate = startOfWeek(today, { weekStartsOn: 1 });
    const endDate = addWeeks(startDate, 8);
    const weeks = eachWeekOfInterval(
      { start: startDate, end: endDate },
      { weekStartsOn: 1 }
    );
    const events: CalendarEvent[] = [];

    for (const weekStart of weeks) {
      for (const [dayKey, dayValue] of Object.entries(schedule)) {
        if (!dayValue.enabled) continue;

        const dayNumber = weekDaysMap[dayKey.toLowerCase()];
        if (dayNumber === undefined) continue;

        dayValue.timeRanges.forEach(({ startTime, endTime }) => {
          if (!startTime || !endTime) return;

          const baseDate = addDays(weekStart, dayNumber - 1);

          const [startHour, startMinute] = startTime.split(":").map(Number);
          const [endHour, endMinute] = endTime.split(":").map(Number);

          const rangeStart = setMinutes(
            setHours(baseDate, startHour),
            startMinute
          );
          const rangeEnd = setMinutes(setHours(baseDate, endHour), endMinute);

          let current = new Date(rangeStart);
          while (current < rangeEnd) {
            const next = addMinutes(current, sessionTime);
            if (next <= rangeEnd) {
              events.push({
                id: `schedule-${dayKey}-${current.toISOString()}`,
                title: `Turno con el profesional ${professionals.map((p) => {
                  if (p.id === selectedProfessionalId) {
                    return `${p.firstName} ${p.lastName}`;
                  }
                })}`,
                start: current,
                end: next,
                allDay: false,
              });
            }
            current = next;
          }
        });
      }
    }

    return events;
  };

  const [professionals, setProfessionals] = useState<Professional[]>([]);
  const [selectedProfessionalId, setSelectedProfessionalId] = useState<
    number | null
  >(null);

  const loadEvents = async () => {
    try {
      const events = await getAllEvents();
      const formatted: CalendarEvent[] = events.map((event) => ({
        id: event.id,
        title: event.title,
        start: new Date(event.startEvent),
        end: new Date(event.endEvent),
      }));
      setAllEvents(formatted);
    } catch (err) {
      console.error("Error loading events:", err);
    }
  };

  const loadSchedule = async (professionalId: number) => {
    try {
      console.log("Loading schedule for professional ID:", professionalId);

      const scheduleArray = await getWeeklySchedule(professionalId);

      if (scheduleArray) {
        const grouped = scheduleArray.reduce((acc, item) => {
          const dayKey = item.dayOfWeek.toLowerCase();
          if (!acc[dayKey]) {
            acc[dayKey] = { enabled: true, timeRanges: [] };
          }
          acc[dayKey].timeRanges.push({
            startTime: item.startTime,
            endTime: item.endTime,
          });
          return acc;
        }, {} as Record<string, { enabled: boolean; timeRanges: TimeRange[] }>);

        const generatedEvents = generateEventsFromSchedule(grouped);
        setScheduleEvents([]);
        setScheduleEvents(generatedEvents);
      }
    } catch (err) {
      console.error("Error loading weekly schedule:", err);
    }
  };

  useEffect(() => {
    const fetchProfessionals = async () => {
      try {
        const data = await getAllProfessionalsAction();
        setProfessionals(data);
        if (data.length > 0) setSelectedProfessionalId(data[0].id);
      } catch (error) {
        console.error("Error fetching professionals:", error);
      }
    };
    fetchProfessionals();
  }, []);

  const handleAddEvent = async () => {
    try {
      const start = new Date(`${formData.date}T${formData.time}`);
      const end = new Date(start.getTime() + 30 * 60000);

      await createEvent({
        title: formData.title,
        description: formData.description,
        startEvent: start,
        endEvent: end,
        eventType: "CONSULTATION",
        createdById: user?.uid,
        professionalId: selectedProfessionalId,
        patientId: 1,
        status: "SCHEDULED",
      });

      setFormData({ title: "", description: "", date: "", time: "" });
      loadEvents();

      if (selectedProfessionalId !== null) {
        await loadSchedule(selectedProfessionalId);
      }
    } catch (err) {
      console.error("Error al crear evento:", err);
    }
  };

  const [date, setDate] = useState(new Date());
  const [view, setView] = useState<View>("month");

  const onNavigate = useCallback((newDate: Date) => {
    setDate(newDate);
  }, []);

  const onView = useCallback((newView: View) => {
    setView(newView);
  }, []);
  useEffect(() => {
    loadEvents();
  }, []);

  useEffect(() => {
    if (selectedProfessionalId !== null) {
      loadSchedule(selectedProfessionalId);
    }
  }, [selectedProfessionalId]);

  const handleCreateEventFromSelected = async () => {
    if (!selectedEvent || !selectedProfessionalId) return;

    try {
      await createEvent({
        title: selectedEvent.title,
        description: selectedEvent.description ?? "",
        startEvent: selectedEvent.start,
        endEvent: selectedEvent.end,
        eventType: "CONSULTATION",
        createdById: user?.uid,
        professionalId: selectedProfessionalId,
        patientId: 1,
        status: "SCHEDULED",
      });

      setIsEventModalOpen(false);
      toast.success("Evento crear exitosamente");
      await loadEvents();
      await loadSchedule(selectedProfessionalId);
    } catch (err) {
      console.error("Error al crear evento desde evento seleccionado:", err);
    }
  };

  const handleDeleteSelectedEvent = async () => {
    if (!selectedEvent) return;
    try {
      await deleteCalendarEvent(String(selectedEvent.id));
      toast.success("Cita cancelada");
      await loadEvents();

      if (selectedProfessionalId !== null) {
        await loadSchedule(selectedProfessionalId);
      }

      setSelectedEvent(null);
      setIsEventModalOpen(false);
    } catch (error) {
      console.error("Error deleting event:", error);
    }
  };

  return (
    <div style={{ marginBottom: "150px" }}>
      <WeeklyScheduleModal />
      <div className="mb-4">
        <Dialog>
          <DialogTrigger asChild>
            <Button>Agendar cita</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Nueva cita</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <Select
                value={selectedProfessionalId?.toString() ?? ""}
                onValueChange={(value) =>
                  setSelectedProfessionalId(Number(value))
                }
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Seleccionar profesional" />
                </SelectTrigger>
                <SelectContent>
                  {professionals.map((prof) => (
                    <SelectItem key={prof.id} value={prof.id.toString()}>
                      {prof.firstName} {prof.lastName}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Input
                placeholder="Título"
                value={formData.title || ""}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
              />
              <Textarea
                placeholder="Descripción"
                value={formData.description || ""}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
              />
              <Input
                type="date"
                value={formData.date || ""}
                onChange={(e) =>
                  setFormData({ ...formData, date: e.target.value })
                }
              />
              <Input
                type="time"
                value={formData.time || ""}
                onChange={(e) =>
                  setFormData({ ...formData, time: e.target.value })
                }
              />
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button onClick={handleAddEvent}>Confirmar</Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <div className="mb-4 max-w-sm">
        <label className="block mb-1 font-medium">
          Seleccionar profesional
        </label>
        <Select
          value={selectedProfessionalId?.toString() ?? ""}
          onValueChange={(value) => {
            setSelectedProfessionalId(Number(value));
          }}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Seleccionar profesional" />
          </SelectTrigger>
          <SelectContent>
            {professionals.map((prof) => (
              <SelectItem key={prof.id} value={prof.id.toString()}>
                {prof.firstName} {prof.lastName}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Calendar
        localizer={localizer}
        events={[...allEvents, ...scheduleEvents]}
        startAccessor="start"
        endAccessor="end"
        culture="es"
        step={15}
        selectable={true}
        timeslots={2}
        messages={messagesEs}
        onRangeChange={(range) => {
          if (Array.isArray(range)) {
            setDateRange({ start: range[0], end: range[range.length - 1] });
          } else {
            setDateRange(range);
          }
        }}
        eventPropGetter={(event) => {
          let className = "";
          if (
            typeof event.id === "string" &&
            event.id.startsWith("schedule-")
          ) {
            className = "schedule-event";
          } else {
            className = "scheduled-event";
          }

          return {
            className: `rbc-event ${className}`,
            style: {},
          };
        }}
        onSelectEvent={(event) => {
          setSelectedEvent(event);
          setIsEventModalOpen(true);
        }}
        date={date}
        onNavigate={onNavigate}
        view={view}
        onView={onView}
        style={{
          height: 600,
          borderRadius: 8,
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        }}
        onSelectSlot={({ start }) => {
          setDate(start);
          setView("day");
        }}
      />
      <Dialog open={isEventModalOpen} onOpenChange={setIsEventModalOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Detalle del evento</DialogTitle>
          </DialogHeader>
          {selectedEvent && (
            <div className="space-y-2">
              <p>
                <strong>Título:</strong> {selectedEvent.title}
              </p>
              <p>
                <strong>Inicio:</strong>{" "}
                {selectedEvent.start.toLocaleString("es-AR")}
              </p>
              <p>
                <strong>Fin:</strong>{" "}
                {selectedEvent.end.toLocaleString("es-AR")}
              </p>
              {selectedEvent.description && (
                <p>
                  <strong>Descripción:</strong> {selectedEvent.description}
                </p>
              )}
            </div>
          )}
          <DialogFooter className="flex justify-between">
            <DialogClose asChild>
              <Button variant="secondary">Cerrar</Button>
            </DialogClose>

            {selectedEvent &&
            typeof selectedEvent.id === "string" &&
            selectedEvent.id.startsWith("schedule-") ? (
              <Button onClick={handleCreateEventFromSelected}>
                Confirmar cita
              </Button>
            ) : (
              <Button variant="destructive" onClick={handleDeleteSelectedEvent}>
                Cancelar cita
              </Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
