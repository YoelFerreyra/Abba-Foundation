'use client'

import { useEffect, useState } from 'react'
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Switch } from '@/components/ui/switch'
import { Plus } from 'lucide-react'
import { createWeeklySchedule, getWeeklySchedule } from '@/actions/calendar/profesional-events'

const weekDays = [
  { label: 'Monday', key: 'monday' },
  { label: 'Tuesday', key: 'tuesday' },
  { label: 'Wednesday', key: 'wednesday' },
  { label: 'Thursday', key: 'thursday' },
  { label: 'Friday', key: 'friday' }
]

type TimeRange = { startTime: string; endTime: string }

type WeeklySchedule = {
  [day: string]: {
    enabled: boolean
    timeRanges: TimeRange[]
  }
}

export default function WeeklyScheduleModal() {
  const [schedule, setSchedule] = useState<WeeklySchedule>(() =>
    Object.fromEntries(
      weekDays.map(({ key }) => [
        key,
        { enabled: false, timeRanges: [{ startTime: '', endTime: '' }] }
      ])
    )
  )

  const fetchWeeklySchedule = async () => {
    try {
      const result = await getWeeklySchedule(1)
      const grouped = weekDays.reduce((acc, { key }) => {
        const daySchedules = result.filter(
          (sch: any) => sch.dayOfWeek.toLowerCase() === key
        )
        acc[key] = {
          enabled: daySchedules.length > 0,
          timeRanges: daySchedules.length > 0
            ? daySchedules.map((sch: any) => ({
                startTime: sch.startTime,
                endTime: sch.endTime
              }))
            : [{ startTime: '', endTime: '' }]
        }
        return acc
      }, {} as WeeklySchedule)
      setSchedule(grouped)
    } catch (error) {
      console.error('Error fetching weekly schedule:', error)
    }
  }

  useEffect(() => {
    fetchWeeklySchedule()
  }, [])

  const handleChange = (day: string, index: number, field: 'startTime' | 'endTime', value: string) => {
    setSchedule((prev) => {
      const updatedRanges = [...prev[day].timeRanges]
      updatedRanges[index][field] = value
      return {
        ...prev,
        [day]: { ...prev[day], timeRanges: updatedRanges }
      }
    })
  }

  const handleAddRange = (day: string) => {
    setSchedule((prev) => ({
      ...prev,
      [day]: {
        ...prev[day],
        timeRanges: [...prev[day].timeRanges, { startTime: '', endTime: '' }]
      }
    }))
  }

  const handleToggleDay = (day: string, enabled: boolean) => {
    setSchedule((prev) => ({
      ...prev,
      [day]: { ...prev[day], enabled }
    }))
  }

  const handleSubmit = async () => {
    const formatted = Object.entries(schedule)
      .filter(([, val]) => val.enabled)
      .map(([day, val]) => ({
        day,
        ranges: val.timeRanges.filter(r => r.startTime && r.endTime)
      }))
    console.log('Schedule to save:', formatted)

    try {
      const result = await createWeeklySchedule({
        professionalId: 1, // cambiar según profesional logueado
        availability: schedule,  // estado actual
      })
      console.log('Schedule saved', result)
    } catch (error) {
      console.error('Error saving schedule:', error)
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Configure Weekly Schedule</Button>
      </DialogTrigger>
      <DialogContent className="max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Weekly Availability</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {weekDays.map(({ label, key }) => (
            <div key={key} className="border p-4 rounded-lg space-y-2 bg-gray-50 dark:bg-gray-900">
              <div className="flex items-center justify-between">
                <h4 className="text-md font-semibold">{label}</h4>
                <Switch
                  checked={schedule[key].enabled}
                  onCheckedChange={(val) => handleToggleDay(key, val)}
                />
              </div>

              {schedule[key].enabled && (
                <div className="space-y-2">
                  {schedule[key].timeRanges.map((range, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <Input
                        type="time"
                        value={range.startTime}
                        onChange={(e) => handleChange(key, index, 'startTime', e.target.value)}
                      />
                      <span className="text-gray-500">to</span>
                      <Input
                        type="time"
                        value={range.endTime}
                        onChange={(e) => handleChange(key, index, 'endTime', e.target.value)}
                      />
                    </div>
                  ))}
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleAddRange(key)}
                    className="mt-2"
                  >
                    <Plus className="w-4 h-4 mr-1" /> Add range
                  </Button>
                </div>
              )}
            </div>
          ))}
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button onClick={handleSubmit}>Save</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
