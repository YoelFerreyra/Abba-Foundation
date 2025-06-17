"use server"
import { prisma } from "@/lib/prisma";

export const getAllUsersAction = async() => {
  try {
    const users = await prisma.user.findMany();
    console.log(users);
    return users
  } catch (error) {
    console.log(error);
  }
};
