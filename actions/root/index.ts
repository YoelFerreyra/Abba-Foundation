import { prisma } from "@/lib/prisma";

export async function getAllRootFuntion() {
  try {
    const roots = await prisma.admin.findMany();
    return roots;
  } catch (error) {
    console.error("Error fetching root users:", error);
    throw error;
  }
}
