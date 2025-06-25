"use client";

import { useEffect, useState } from "react";
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
import { Switch } from "@/components/ui/switch";
import { Plus } from "lucide-react";
import {
  createWeeklySchedule,
  getWeeklySchedule,
} from "@/actions/calendar/profesional-events";
import { getAllProfessionalsAction } from "@/actions/professional";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";

const weekDays = [
  { label: "Monday", key: "monday" },
  { label: "Tuesday", key: "tuesday" },
  { label: "Wednesday", key: "wednesday" },
  { label: "Thursday", key: "thursday" },
  { label: "Friday", key: "friday" },
];

type TimeRange = { startTime: string; endTime: string };

type WeeklySchedule = {
  [day: string]: {
    enabled: boolean;
    timeRanges: TimeRange[];
  };
};

type Professional = {
  id: number;
  firstName: string;
  lastName: string;
};

export default function WeeklyScheduleModal() {
  const [schedule, setSchedule] = useState<WeeklySchedule>(() =>
    Object.fromEntries(
      weekDays.map(({ key }) => [
        key,
        { enabled: false, timeRanges: [{ startTime: "", endTime: "" }] },
      ])
    )
  );

  const [professionals, setProfessionals] = useState<Professional[]>([]);
  const [selectedProfessionalId, setSelectedProfessionalId] = useState<
    number | null
  >(null);

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

  useEffect(() => {
    if (selectedProfessionalId !== null) {
      fetchWeeklySchedule(selectedProfessionalId);
    }
  }, [selectedProfessionalId]);

  const fetchWeeklySchedule = async (professionalId: number) => {
    try {
      const result = await getWeeklySchedule(professionalId);
      const grouped = weekDays.reduce((acc, { key }) => {
        const daySchedules = result.filter(
          (sch: any) => sch.dayOfWeek.toLowerCase() === key
        );
        acc[key] = {
          enabled: daySchedules.length > 0,
          timeRanges:
            daySchedules.length > 0
              ? daySchedules.map((sch: any) => ({
                  startTime: sch.startTime,
                  endTime: sch.endTime,
                }))
              : [{ startTime: "", endTime: "" }],
        };
        return acc;
      }, {} as WeeklySchedule);
      setSchedule(grouped);
    } catch (error) {
      console.error("Error fetching weekly schedule:", error);
    }
  };

  const handleChange = (
    day: string,
    index: number,
    field: "startTime" | "endTime",
    value: string
  ) => {
    setSchedule((prev) => {
      const updatedRanges = [...prev[day].timeRanges];
      updatedRanges[index][field] = value;
      return {
        ...prev,
        [day]: { ...prev[day], timeRanges: updatedRanges },
      };
    });
  };

  const handleAddRange = (day: string) => {
    setSchedule((prev) => ({
      ...prev,
      [day]: {
        ...prev[day],
        timeRanges: [...prev[day].timeRanges, { startTime: "", endTime: "" }],
      },
    }));
  };

  const handleToggleDay = (day: string, enabled: boolean) => {
    setSchedule((prev) => ({
      ...prev,
      [day]: { ...prev[day], enabled },
    }));
  };

  const handleSubmit = async () => {
    try {
      const result = await createWeeklySchedule({
        professionalId: selectedProfessionalId!,
        availability: schedule,
      });
      console.log("Schedule saved", result);
    } catch (error) {
      console.error("Error saving schedule:", error);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Configure Weekly Schedule</Button>
      </DialogTrigger>
      <DialogContent className="max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Weekly Availability</DialogTitle>
        </DialogHeader>
        <div className="mb-4">
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

        <div className="space-y-6">
          {weekDays.map(({ label, key }) => (
            <div
              key={key}
              className="border p-4 rounded-lg space-y-2 bg-gray-50 dark:bg-gray-900"
            >
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
                        onChange={(e) =>
                          handleChange(key, index, "startTime", e.target.value)
                        }
                      />
                      <span className="text-gray-500">to</span>
                      <Input
                        type="time"
                        value={range.endTime}
                        onChange={(e) =>
                          handleChange(key, index, "endTime", e.target.value)
                        }
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
  );
}
