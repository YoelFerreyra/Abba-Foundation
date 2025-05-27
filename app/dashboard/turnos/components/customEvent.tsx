import { useState } from "react";
import { User, CalendarDays, Clock } from "lucide-react";
import { format } from "date-fns";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface CalendarEvent {
  title: string;
  start: Date;
  end: Date;
  [key: string]: any;
}

export function CustomEvent({ event }: { event: CalendarEvent }) {
  const startTime = format(event.start, "HH:mm");
  const endTime = format(event.end, "HH:mm");

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="cursor-pointer bg-teal-100 rounded px-2 py-1 text-sm text-teal-800 flex items-center gap-2 hover:bg-teal-200 transition">
          <User className="w-4 h-4" />
          <div>
            <strong>{startTime}</strong>
            <div>{event.title}</div>
          </div>
        </div>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <CalendarDays className="w-5 h-5 text-blue-600" />
            Detalles del Turno
          </DialogTitle>
          <DialogDescription className="space-y-2 pt-4">
            <div className="flex items-center gap-2 text-sm">
              <Clock className="w-4 h-4 text-muted-foreground" />
              <span>{startTime} - {endTime}</span>
            </div>
            <div className="text-base font-semibold">{event.title}</div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
