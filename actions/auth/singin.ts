'use server'
import admin, { authServer } from "@/lib/firebase/firebase-server";
import { prisma } from "@/lib/prisma";
import { ERROR_CODES } from "@/lib/responses/errors";
import { CODES_SUCCESS } from "@/lib/responses/success";

export async function signInWithFirebase(uid: string) {
  try {
    const user = await prisma.user.findFirst({
      where: {
        firebaseUid: uid,
      },
      include: {
        patient: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
          },
        }
      },
    });
    
    if (!user) {
      throw new Error("User not found");
    }

    const customClaims = {
      role: user?.role,
      name: `${user?.patient?.firstName} ${user?.patient?.lastName}`,
      patientId: user?.patient?.id,
    };

    const currentUser = await authServer.getUserByEmail(user?.email || "");

    /*
    if (!currentUser.emailVerified) {
      throw new Error("Correo no verificado");
    }
    */
    
    await admin.auth().setCustomUserClaims(uid, customClaims);

    return CODES_SUCCESS.QUERY_OK;
  } catch (error: any) {
    return { error: error.message, ...ERROR_CODES.BAD_REQUEST };
  }
}
