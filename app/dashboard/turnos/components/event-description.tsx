import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { CalendarDays, Clock } from "lucide-react";
import { format } from "date-fns";

interface CalendarEvent {
    title: string;
    start: Date;
    end: Date;
    [key: string]: any;
    description: string;
  }

export const EventDescription = ({ event }: {event: CalendarEvent}) => {
  const startTime = format(event.start, "HH:mm");
  const endTime = format(event.end, "HH:mm");

  return (
    <SheetContent side="right" className="w-[300px] sm:w-[400px] rounded-l-xl">
      <SheetHeader>
        <SheetTitle className="flex items-center gap-2">
          <CalendarDays className="w-5 h-5 text-blue-600" />
          Detalles del Turno
        </SheetTitle>
        <SheetDescription className="space-y-2 pt-4">
          <div className="flex items-center gap-2 text-sm">
            <Clock className="w-4 h-4 text-muted-foreground" />
            <span>
              {startTime} - {endTime}
            </span>
          </div>
          <div className="text-base font-semibold">{event.title}</div>
          <p>{event.description}</p>
        </SheetDescription>
      </SheetHeader>
    </SheetContent>
  );
};
