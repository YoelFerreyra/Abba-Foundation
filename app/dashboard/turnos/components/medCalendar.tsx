'use client'

import React, { useEffect, useState } from 'react'
import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { format, parse, getDay } from 'date-fns'
import { es } from 'date-fns/locale/es'
import { CustomEvent } from './customEvent'
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { createEvent, getAllEvents, getWeeklySchedule } from '@/actions/calendar/profesional-events'
import { useAuth } from '@/context/AuthContext'
import WeeklyScheduleModal from './WeeklyScheduleModal'

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales: { es },
})
import { addDays, setHours, setMinutes, startOfWeek, addMinutes } from 'date-fns'
const weekDaysMap: Record<string, number> = {
  sunday: 0,
  monday: 1,
  tuesday: 2,
  wednesday: 3,
  thursday: 4,
  friday: 5,
  saturday: 6,
}

export default function MedCalendar() {
  const [allEvents, setAllEvents] = useState([])
  const [scheduleEvents, setScheduleEvents] = useState([])
  const [formData, setFormData] = useState({})
  const { user } = useAuth()

  const generateEventsFromSchedule = (
    schedule: Record<string, { enabled: boolean; timeRanges: TimeRange[] }>,
    sessionTime: number = 30 // por defecto
  ) => {
    const startWeek = startOfWeek(new Date(), { weekStartsOn: 1 }) // lunes como inicio
    const events = []
  
    for (const [dayKey, dayValue] of Object.entries(schedule)) {
      if (!dayValue.enabled) continue
  
      const dayNumber = weekDaysMap[dayKey.toLowerCase()]
      if (dayNumber === undefined) continue
  
      dayValue.timeRanges.forEach(({ startTime, endTime }) => {
        if (!startTime || !endTime) return
  
        const baseDate = addDays(startWeek, dayNumber - 1)
  
        const [startHour, startMinute] = startTime.split(':').map(Number)
        const [endHour, endMinute] = endTime.split(':').map(Number)
  
        const rangeStart = setMinutes(setHours(baseDate, startHour), startMinute)
        const rangeEnd = setMinutes(setHours(baseDate, endHour), endMinute)
  
        // Dividir en bloques según sessionTime
        let current = new Date(rangeStart)
        while (current < rangeEnd) {
          const next = addMinutes(current, sessionTime)
  
          // Solo agregamos si el siguiente bloque no se pasa del final
          if (next <= rangeEnd) {
            events.push({
              id: `schedule-${dayKey}-${current.toISOString()}`,
              title: 'Disponible (Horario semanal)',
              start: current,
              end: next,
              allDay: false,
            })
          }
  
          current = next
        }
      })
    }
  
    return events
  }

  const loadEvents = async () => {
    try {
      const events = await getAllEvents()
      const formatted = events.map((event) => ({
        id: event.id,
        title: event.title,
        description: event.description,
        start: new Date(event.startEvent),
        end: new Date(event.endEvent),
      }))
      console.log('Eventos cargados:', formatted);
      
      setAllEvents(formatted)
    } catch (err) {
      console.error('Error loading events:', err)
    }
  }

  const loadSchedule = async () => {
    try {
      const scheduleArray = await getWeeklySchedule(1)
  
      if (scheduleArray) {
        // Agrupar el schedule por día
        const grouped = scheduleArray.reduce((acc, item) => {
          const dayKey = item.dayOfWeek.toLowerCase()
          if (!acc[dayKey]) {
            acc[dayKey] = { enabled: true, timeRanges: [] }
          }
          acc[dayKey].timeRanges.push({
            startTime: item.startTime,
            endTime: item.endTime,
          })
          return acc
        }, {} as Record<string, { enabled: boolean; timeRanges: TimeRange[] }>)
  
        const generatedEvents = generateEventsFromSchedule(grouped)        
  
        setScheduleEvents(generatedEvents) // ← esto es un array de eventos para el calendario
      }
    } catch (err) {
      console.error('Error loading weekly schedule:', err)
    }
  }
  

  useEffect(() => {
    loadEvents()
    loadSchedule()
  }, [])

  const handleAddEvent = async () => {
    try {
      const start = new Date(`${formData.date}T${formData.time}`)
      const end = new Date(start.getTime() + 30 * 60000)

      await createEvent({
        title: formData.title,
        description: formData.description,
        startEvent: start,
        endEvent: end,
        eventType: 'CONSULTATION',
        createdById: user?.id ?? 1,
        professionalId: user?.id ?? 1,
        patientId: 1,
        status: 'SCHEDULED',
      })

      setFormData({ title: '', description: '', date: '', time: '' })
      loadEvents()
      loadSchedule()
    } catch (err) {
      console.error('Error al crear evento:', err)
    }
  }

  return (
    <div style={{ margin: '50px' }}>
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
                value={formData.title || ''}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              />
              <Textarea
                placeholder="Descripción"
                value={formData.description || ''}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              />
              <Input
                type="date"
                value={formData.date || ''}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              />
              <Input
                type="time"
                value={formData.time || ''}
                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
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

      <Calendar
        localizer={localizer}
        events={[...allEvents, ...scheduleEvents]} // combinamos eventos reales + schedule
        startAccessor="start"
        endAccessor="end"
        culture="es"
        defaultView="day"
        views={['month', 'week', 'day']}
        step={15}
        timeslots={2}
        components={{ event: CustomEvent }}
        style={{ height: 600, borderRadius: 8, boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}
      />

      <WeeklyScheduleModal />
    </div>
  )
}
