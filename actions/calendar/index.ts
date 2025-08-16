"use server"
import { prisma } from "@/lib/prisma";

export const getAllEventsAction = async() => {
  try {
    const events = await prisma.event.findMany();

    return events;
  } catch (error) {
    console.log(error);
  }
};


export const getAllSitesAction = async() => {
  try {
    //const sites = await prisma.site.findMany();

    //return sites
  } catch (error) {
    console.log(error);
  }
}