'use client'

import React, { useEffect, useState } from 'react'
import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { format, parse, startOfWeek, getDay } from 'date-fns'
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
import { createEvent, getAllEvents } from '@/actions/calendar/profesional-events'
import { useAuth } from '@/context/AuthContext'

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales: { es },
})

export default function MedCalendar() {
  const [allEvents, setAllEvents] = useState([])
  const [formData, setFormData] = useState([])
  const { user } = useAuth();
  
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
      setAllEvents(formatted)
    } catch (err) {
      console.error('Error loading events:', err)
    }
  }

  useEffect(() => {
  
    loadEvents()
  }, [])

  const handleAddEvent = async () => {
    try {
      console.log(user);
      const start = new Date(`${formData.date}T${formData.time}`)
      const end = new Date(start.getTime() + 30 * 60000)
  
      const newEvent = await createEvent({
        title: formData.title,
        description: formData.description,
        startEvent: start,
        endEvent: end,
        eventType: 'CONSULTA', // Podés hacerlo dinámico si querés
        createdById: 2,        // Reemplazá con el userId real
        professionalId: 1,     // Id real del profesional
        patientId: 1,          // Id real del paciente
        status: 'SCHEDULED',
      })
  
      setFormData({ title: '', description: '', date: '', time: '' })
      loadEvents()
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
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              />
              <Textarea
                placeholder="Descripción"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              />
              <Input
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              />
              <Input
                type="time"
                value={formData.time}
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
        events={allEvents}
        startAccessor="start"
        endAccessor="end"
        culture="es"
        defaultView="month"
        views={['month', 'week', 'day']}
        step={15}
        timeslots={2}
        components={{ event: CustomEvent }}
        style={{ height: 600, borderRadius: 8, boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}
      />
    </div>
  )
}
