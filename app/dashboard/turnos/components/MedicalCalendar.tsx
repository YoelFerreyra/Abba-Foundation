'use client'

import { useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import esLocale from '@fullcalendar/core/locales/es'
import { User } from 'lucide-react'

export default function MedicalCalendar() {
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

  const handleDateSelect = (selectInfo: any) => {
    const title = prompt('Nombre del paciente:')
    const calendarApi = selectInfo.view.calendar
    calendarApi.unselect()

    if (title) {
      const newEvent = {
        id: String(events.length + 1),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
      }
      setEvents([...events, newEvent])
    }
  }

  const handleEventDrop = (info: any) => {
    const updatedEvents = events.map((event) =>
      event.id === info.event.id
        ? {
            ...event,
            start: info.event.startStr,
            end: info.event.endStr,
          }
        : event
    )
    setEvents(updatedEvents)
  }

  return (
    <div className="p-4">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="timeGridWeek"
        locale={esLocale}
        editable={true}
        selectable={true}
        selectMirror={true}
        select={handleDateSelect}
        events={events}
        eventDrop={handleEventDrop}
        eventContent={(eventInfo) => (
          <div className="bg-teal-100 rounded px-2 py-1 text-sm text-teal-800">
            <User />
            <strong>{eventInfo.timeText}</strong>
            <div>{eventInfo.event.title}</div>
          </div>
        )}
        
        height="auto"
        themeSystem='standard'
        slotMinTime="08:00:00"
        slotMaxTime="20:00:00"
        allDaySlot={false}
        headerToolbar={{
          start: 'prev,next today',
          center: 'title',
          end: 'dayGridMonth,timeGridWeek,timeGridDay',
        }}
      />
    </div>
  )
}
