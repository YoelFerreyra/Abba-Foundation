import React from 'react'
import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import {format} from 'date-fns/format'
import {parse} from 'date-fns/parse'
import {startOfWeek} from 'date-fns/startOfWeek'
import {getDay} from 'date-fns/getDay'
import {es} from 'date-fns/locale/es'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { CustomEvent } from './customEvent'

const locales = {
  es,
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})

const events = [
  {
    id: 0,
    title: 'Consulta Dr. Pérez',
    start: new Date(2025, 4, 21, 10, 30),
    end: new Date(2025, 4, 21, 11, 0),
  },
  {
    id: 1,
    title: 'Control Cardiológico',
    start: new Date(2025, 4, 22, 13, 0),
    end: new Date(2025, 4, 22, 13, 30),
  },
]

export default function MedCalendar() {
  const [allEvents, setAllEvents] = React.useState(events)

  return (
    <div style={{ height: 600, margin: '50px' }}>
      <Calendar
        localizer={localizer}
        events={allEvents}
        startAccessor="start"
        endAccessor="end"
        culture="es"
        defaultView="week"
        views={["month",'week', 'day', 'agenda']}
        step={15}
        timeslots={2}
        components={{
          event: CustomEvent,
        }}
        style={{ borderRadius: 8, boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}
      />
    </div>
  )
}
