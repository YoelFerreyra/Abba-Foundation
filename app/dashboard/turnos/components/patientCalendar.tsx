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
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  deleteCalendarEvent,
  getAllEvents,
  getWeeklySchedule,
} from "@/actions/calendar/profesional-events";
import { useAuth } from "@/context/AuthContext";
import {
  getAllProfessionalsAction,
  getAllProfessionalType,
} from "@/actions/professional";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./calendar.css";
import { toast } from "sonner";
import { createAppointmentPreference } from "@/actions/appointment";
import { log } from "console";

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

type ProfessionalType = {
  id: number;
  name: string;
  description: string | null;
};

type Professional = {
  id: number;
  firstName: string;
  lastName: string;
  professionalTypes: ProfessionalType[];
};

export default function PatientCalendar() {
  const [allEvents, setAllEvents] = useState<CalendarEvent[]>([]);
  const [scheduleEvents, setScheduleEvents] = useState<CalendarEvent[]>([]);

  const { user } = useAuth();
  const [dateRange, setDateRange] = useState<{ start: Date; end: Date } | null>(
    null
  );
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(
    null
  );
  const [isEventModalOpen, setIsEventModalOpen] = useState(false);

  const [openSelectProfessionalModal, setOpenSelectProfessionalModal] =
    useState(false);

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
  const [professionalTypes, setProfessionalTypes] = useState<any[]>([]);
  const [selectedProfessionalId, setSelectedProfessionalId] = useState<
    number | null
  >(null);
  const [paymentLink, setPaymentLink] = useState<string | null>(null);
  const [isGeneratingPayment, setIsGeneratingPayment] = useState(false);
  const [selectedSpecialtyId, setSelectedSpecialtyId] = useState<number | null>(
    null
  );
  const [step, setStep] = useState<1 | 2>(1);

  const loadEvents = async () => {
    try {
      const events = await getAllEvents(selectedProfessionalId);
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

  const [date, setDate] = useState(new Date());
  const [view, setView] = useState<View>("month");

  const onNavigate = useCallback((newDate: Date) => {
    setDate(newDate);
  }, []);

  const onView = useCallback((newView: View) => {
    setView(newView);
  }, []);

    useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const [profs, types] = await Promise.all([
          getAllProfessionalsAction(),
          getAllProfessionalType(),
        ]);
        setProfessionals(profs);
        setProfessionalTypes(types);
        if (profs.length > 0) setSelectedProfessionalId(profs[0].id);
      } catch (error) {
        console.error("Error fetching initial data:", error);
      }
    };
    fetchInitialData();
  }, []);

   const fetchEventsByProfessionalId = async (professionalId: number) => {
    try {
      const events = await getAllEvents(professionalId); // ajustá según API
      const formatted: CalendarEvent[] = events.map((event) => ({
        id: event.id,
        title: event.title,
        start: new Date(event.startEvent),
        end: new Date(event.endEvent),
      }));
      setAllEvents(formatted);
    } catch (error) {
      console.error("Error fetching events by professional:", error);
    }
  };

  // Función que carga schedule para un profesional
  const loadSchedule = async (professionalId: number) => {
    try {
      const {schedule, sessionTime} = await getWeeklySchedule(professionalId);
      if (schedule) {
        const grouped = schedule.reduce((acc, item) => {
          const dayKey = item.dayOfWeek.toLowerCase();
          if (!acc[dayKey]) acc[dayKey] = { enabled: true, timeRanges: [] };
          acc[dayKey].timeRanges.push({
            startTime: item.startTime,
            endTime: item.endTime,
          });
          return acc;
        }, {} as Record<string, { enabled: boolean; timeRanges: TimeRange[] }>);

        const generatedEvents = generateEventsFromSchedule(grouped, sessionTime);
        setScheduleEvents(generatedEvents);
      }
    } catch (err) {
      console.error("Error loading weekly schedule:", err);
    }
  };

  // NUEVA función para confirmar profesional y disparar fetch
  const handleConfirmProfessional = async () => {
    if (selectedProfessionalId === null) return;
    setOpenSelectProfessionalModal(false);

    // Cargar eventos y schedule para profesional seleccionado
    await fetchEventsByProfessionalId(selectedProfessionalId);
    await loadSchedule(selectedProfessionalId);
  };

  return (
    <div style={{ marginBottom: "150px" }}>
      <Button
        className="mb-4"
        onClick={() => setOpenSelectProfessionalModal(true)}
      >
        Seleccionar profesional
      </Button>

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

          // Solo si es un evento libre (schedule-*), generamos el link de pago
          if (
            typeof event.id === "string" &&
            event.id.startsWith("schedule-")
          ) {
            setIsGeneratingPayment(true); // activa loading si querés
            const specialty = professionalTypes.find(
              (type) => type.id === selectedSpecialtyId
            )?.name || "Especialidad no definida";
            
            const appointmentInput = {
              appointmentId: "ID_TEMPORAL",
              doctorName: `${professionals.find((p) => p.id === selectedProfessionalId)?.firstName} ${professionals.find((p) => p.id === selectedProfessionalId)?.lastName}`,
              specialty: specialty,
              patientName: user?.displayName || "Paciente",
              date: event.start.toISOString().split("T")[0],
              time: event.start.toTimeString().split(" ")[0].slice(0, 5),
            };

            createAppointmentPreference(appointmentInput)
              .then((res) => {
                if (res.success) {
                    console.log("Link de pago generado:", res.init_point);
                    
                  setPaymentLink(res.init_point);
                } else {
                  toast.error("Error al generar el link de pago");
                }
              })
              .catch((err) => {
                console.error("Error al generar la preferencia:", err);
                toast.error("Fallo al generar link de pago");
              })
              .finally(() => {
                setIsGeneratingPayment(false);
              });
          } else {
            setPaymentLink(null);
          }
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
      <Dialog
        open={isEventModalOpen}
        onOpenChange={(open) => {
          setIsEventModalOpen(open);
          if (!open) {
            setSelectedEvent(null);
            setPaymentLink(null);
            setIsGeneratingPayment(false);
          }
        }}
      >
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
          <DialogFooter className="flex justify-between flex-wrap gap-2">
            <DialogClose asChild>
              <Button variant="secondary">Cerrar</Button>
            </DialogClose>
            {selectedEvent &&
            typeof selectedEvent.id === "string" &&
            selectedEvent.id.startsWith("schedule-") ? (
              paymentLink && (
                <Button
                  onClick={() => {
                    window.open(paymentLink, "_blank");
                    setIsEventModalOpen(false);
                  }}
                >
                  {isGeneratingPayment ? "Generando..." : "Confirmar cita"}
                </Button>
              )
            ) : (
              <Button variant="destructive">
                Cancelar cita
              </Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Dialog open={openSelectProfessionalModal}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>
              {step === 1
                ? "Seleccioná una especialidad"
                : "Seleccioná un profesional"}
            </DialogTitle>
          </DialogHeader>

          {step === 1 && (
            <div>
              <Select
                value={selectedSpecialtyId?.toString() ?? ""}
                onValueChange={(value) => {
                  setSelectedSpecialtyId(Number(value));
                }}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Elegí una especialidad" />
                </SelectTrigger>
                <SelectContent>
                  {professionalTypes?.map((type) => (
                    <SelectItem key={type.id} value={type.id.toString()}>
                      {type.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Button
                className="mt-4 w-full"
                disabled={!selectedSpecialtyId}
                onClick={() => setStep(2)}
              >
                Siguiente
              </Button>
            </div>
          )}

          {step === 2 && (
            <div>
              <Select
                value={selectedProfessionalId?.toString() ?? ""}
                onValueChange={(value) => {
                  setSelectedProfessionalId(Number(value));
                }}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Elegí un profesional" />
                </SelectTrigger>
                <SelectContent>
                  {professionals
                    .filter((p) =>
                      p.professionalTypes.some(
                        (type) => type.id === selectedSpecialtyId
                      )
                    )
                    .map((prof) => (
                      <SelectItem key={prof.id} value={prof.id.toString()}>
                        {prof.firstName} {prof.lastName}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>

              <div className="flex justify-between gap-2 mt-4">
                <Button variant="secondary" onClick={() => setStep(1)}>
                  Volver
                </Button>
                <Button
                  onClick={handleConfirmProfessional}
                  disabled={!selectedProfessionalId}
                >
                  Confirmar
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
