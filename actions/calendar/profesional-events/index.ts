'use server'

import { prisma } from '@/lib/prisma'

export async function getAllEvents() {
  try {
    const events = await prisma.event.findMany({
      include: {
        professional: true,
        patient: true,
        createdBy: true,
      },
      orderBy: {
        startEvent: 'asc',
      },
    })
    return events
  } catch (error) {
    console.error('Error fetching events:', error)
    throw error
  }
}

export async function deleteEvent(id: number) {
  try {
    await prisma.event.delete({ where: { id } })
    return { success: true }
  } catch (error) {
    console.error('Error deleting event:', error)
    throw error
  }
}

export async function createEvent(data: {
    title: string
    description?: string
    startEvent: Date
    endEvent: Date
    eventType: string
    createdById: 2
    professionalId: 1
    patientId: 1
    status?: 'SCHEDULED' | 'CANCELLED' | 'COMPLETED'
  }) {
    console.log(data);
    
    return await prisma.event.create({ data })
  }
  
  export async function updateEvent(id: number, data: Partial<{
    title: string
    description: string
    startEvent: Date
    endEvent: Date
    eventType: string
    status: 'SCHEDULED' | 'CANCELLED' | 'COMPLETED'
    professionalId: number
    patientId: number
  }>) {
    return prisma.event.update({
      where: { id },
      data,
    })
  }
  