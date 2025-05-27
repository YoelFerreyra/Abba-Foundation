'use server'
import { prisma } from '@/lib/prisma'

type CreateUserData = {
  fistName: string;
  lastName: string;
  email: string;
  password: string;
  firebase_uid: string;
  isActive?: boolean;
  role?: "ROOT" | "ADMIN" | "CLIENT" | "PROFESSIONAL" | "ACCOUNTANT";
};

export async function registerUser(data: { uid: string; email: string }) {
  const user = await prisma.user.create({
    data
  });
}

export async function createUser(data: CreateUserData) {
  const user = await prisma.user.create({
    data: {
      fistName: data.fistName,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
      firebase_uid: data.firebase_uid,
      isActive: data.isActive ?? false,
      role: data.role ?? "CLIENT",
    },
  });

  return user;
}
