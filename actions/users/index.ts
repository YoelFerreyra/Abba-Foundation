import { prisma } from "@/lib/prisma";

export const getAllUsersAction = () => {
  try {
    const users = prisma.user.findMany();
    return users
  } catch (error) {
    console.log(error);
    
  }
};
