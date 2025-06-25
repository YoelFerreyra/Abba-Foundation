"use client";

import React, { useCallback, useEffect, useState } from "react";
import { Calendar, dateFnsLocalizer, View } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { format, parse, getDay, addDays, setHours, setMinutes, startOfWeek, addMinutes, eachWeekOfInterval, addWeeks } from "date-fns";
import { es } from "date-fns/locale/es";
import { CustomEvent } from "./customEvent";
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
  getAllEvents,
  getWeeklySchedule,
} from "@/actions/calendar/profesional-events";
import { useAuth } from "@/context/AuthContext";
import WeeklyScheduleModal from "./WeeklyScheduleModal";

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
  date: string;  // ejemplo: "2023-06-25"
  time: string;  // ejemplo: "14:30"
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
  const [dateRange, setDateRange] = useState<{ start: Date; end: Date } | null>(null);

  const generateEventsFromSchedule = (
    schedule: Record<string, { enabled: boolean; timeRanges: TimeRange[] }>,
    sessionTime: number = 30
  ): CalendarEvent[] => {
    const today = new Date();
    const startDate = startOfWeek(today, { weekStartsOn: 1 });
    const endDate = addWeeks(startDate, 8);
    const weeks = eachWeekOfInterval({ start: startDate, end: endDate }, { weekStartsOn: 1 });
    const events: CalendarEvent[] = [];

    for (const weekStart of weeks) {
      for (const [dayKey, dayValue] of Object.entries(schedule)) {
        if (!dayValue.enabled) continue;

        const dayNumber = weekDaysMap[dayKey.toLowerCase()];
        if (dayNumber === undefined) continue;

        dayValue.timeRanges.forEach(({ startTime, endTime }) => {
          if (!startTime || !endTime) return;

          const baseDate = addDays(weekStart, dayNumber - 1);

          const [startHour, startMinute] = startTime.split(":" ).map(Number);
          const [endHour, endMinute] = endTime.split(":" ).map(Number);

          const rangeStart = setMinutes(setHours(baseDate, startHour), startMinute);
          const rangeEnd = setMinutes(setHours(baseDate, endHour), endMinute);

          let current = new Date(rangeStart);
          while (current < rangeEnd) {
            const next = addMinutes(current, sessionTime);
            if (next <= rangeEnd) {
              events.push({
                id: `schedule-${dayKey}-${current.toISOString()}`,
                title: "Disponible (Horario semanal)",
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

  const loadSchedule = async (profesionalId: number) => {
    try {
      const scheduleArray = await getWeeklySchedule(profesionalId || 1);

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
        setScheduleEvents(generatedEvents);
      }
    } catch (err) {
      console.error("Error loading weekly schedule:", err);
    }
  };

  useEffect(() => {
    loadEvents();
    loadSchedule();
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
        createdById: user?.id ?? 1,
        professionalId: user?.id ?? 1,
        patientId: 1,
        status: "SCHEDULED",
      });

      setFormData({ title: "", description: "", date: "", time: "" });
      loadEvents();
      loadSchedule();
    } catch (err) {
      console.error("Error al crear evento:", err);
    }
  };

 const [date, setDate] = useState(new Date())
 const [view, setView] = useState<View>('month')

 const onNavigate = useCallback((newDate: Date) => {
   setDate(newDate)
 }, [])

 const onView = useCallback((newView: View) => {
   setView(newView)
 }, [])

  return (
    <div style={{ margin: "50px" }}>
      <Calendar
        localizer={localizer}
        events={[...allEvents, ...scheduleEvents]}
        startAccessor="start"
        endAccessor="end"
        culture="es"
        step={15}
        selectable= {true}
        timeslots={2}
        onRangeChange={(range) => {
          console.log("Selected range:", range);
          if (Array.isArray(range)) {
            setDateRange({ start: range[0], end: range[range.length - 1] });
          } else {
            setDateRange(range);
          }
        }}
        //components={{ event: CustomEvent }}
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
    </div>
  );
}