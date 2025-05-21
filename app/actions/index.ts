'use server'

import { prisma } from '@/lib/prisma'

export async function createUser(data: { name: string; email: string }) {
  const user = await prisma.user.create({
    data
  })

  return user
}
