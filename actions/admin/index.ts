import { prisma } from "@/lib/prisma";

export async function getAllAdminAction() {
  try {
    const admins = await prisma.admin.findMany();
    return admins;
  } catch (error) {
    console.error("Error fetching admin users:", error);
    throw error;
  }
}
