"use client";
import { User } from "lucide-react";
import { format } from "date-fns";
import {
  Sheet,
  SheetTrigger,
} from "@/components/ui/sheet";
import { EventDescription } from "./event-description";

interface CalendarEvent {
  title: string;
  start: Date;
  end: Date;
  [key: string]: any;
  description: string;
}

export function CustomEvent({ event }: { event: CalendarEvent }) {
  const startTime = format(event.start, "HH:mm");
  const endTime = format(event.end, "HH:mm");

  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="cursor-pointer bg-teal-100 px-2 py-1 text-sm text-teal-800 flex items-center gap-2 hover:bg-teal-200 transition">
          <div>
            <strong>{startTime}</strong>
            <div>{event.title}</div>
            <p>{event.description}</p>
          </div>
        </div>
      </SheetTrigger>

      <EventDescription event={event} />
    </Sheet>
  );
}
