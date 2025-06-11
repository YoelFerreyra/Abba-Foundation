"use server";
import { authServer } from "@/lib/firebase/firebase-server";
import { prisma } from "@/lib/prisma";

type RegisterUserData = {
  email: string;
  password: string;
  confirmPassword: string;
  dni: string;
  dniTramite: string;
};

export async function registerUserAction(data: RegisterUserData) {
  try {
    if (data.password !== data.confirmPassword)
      throw new Error("The passwords are not equals");

    const patient = await prisma.patient.findFirst({
      where: {
        dni: data.dni,
        isActive: true,
        patientStatus: "ACTIVE",
        dniProcessingNumber: data.dniTramite,
      },
    });

    if (!patient) throw new Error("Patient not found");

    const firebaseUser = await authServer.createUser({
      email: data.email,
      password: data.password,
      //displayName: data.name,
    });

    /*
    const actionCodeSettings = {
      url: "https://tusitio.com/verificacion-completada",
      handleCodeInApp: true,
    };

    const verificationLink = await authServer.generateEmailVerificationLink(
      data.email,
      actionCodeSettings
    );
    
    console.log(verificationLink);
    */

    const user = await prisma.user.create({
      data: {
        firebaseUid: firebaseUser.uid,
        email: data.email,
        //name: data.name,
        role: "CLIENT",
        patient: {
          connect: { id: patient.id }
        },
        //image: "https://avatar.iran.liara.run/public/2",
      },
    });    

    return { ok: true };
  } catch (error: any) {
    console.error("Error registering user:", error);
    return { ok: false, error: error.message };
  }
}
