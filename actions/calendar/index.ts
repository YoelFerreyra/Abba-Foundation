"use server"
import { prisma } from "@/lib/prisma";

export const getAllEventsAction = async() => {
  try {
    const events = await prisma.event.findMany();
    console.log(events);
    return events;
  } catch (error) {
    console.log(error);
  }
};
