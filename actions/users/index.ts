"use server"
import { prisma } from "@/lib/prisma";

export const getAllUsersAction = async() => {
  try {
    const users = await prisma.user.findMany();

    return users
  } catch (error) {
    console.log(error);
  }
};

export const getAllHealthInsuranceAuthorizationAction = async ()=> {
  try {
    const data = await prisma.healthInsuranceAuthorization.findMany()

    return data
    
  } catch (error) {
    console.log("Error getting health insurance authorization"); 
  }
}

export const createHealthInsuranceAuthorizationAction = async (data: any)=> {
  try {
    const data = await prisma.healthInsuranceAuthorization.create({data})

    return {success: true, data: "Authorization created successfully"}
  } catch (error) {
    console.log("Error creating health insurance authorization");
  }
}
