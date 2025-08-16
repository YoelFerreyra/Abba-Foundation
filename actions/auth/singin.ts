"use server";
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
        },
        professional: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
          },
        },
        admin: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
          },
        },
        root: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
          },
        },
      },
    });

    if (!user) {
      throw new Error("User not found");
    }

    const roleData =
      user.patient || user.professional || user.admin || user.root;

    const customClaims = {
      role: user.role,
      name: roleData
        ? `${roleData.firstName} ${roleData.lastName}`
        : null,
    };

    const currentUser = await authServer.getUserByEmail(user?.email || "");

    /*
    if (!currentUser.emailVerified) {
      throw new Error("Correo no verificado");
    }
    */

    await admin.auth().setCustomUserClaims(uid, customClaims);

    return { ...CODES_SUCCESS.QUERY_OK, success: true };
  } catch (error: any) {
    return { error: error.message, ...ERROR_CODES.BAD_REQUEST, success: false };
  }
}

type LoginDNIParams = {
  dniOrCuil: string;
  password: string;
};

export async function loginWithDniOrCuil({
  dniOrCuil,
  password,
}: LoginDNIParams) {
  if (!dniOrCuil || !password) {
    return { error: "DNI, CUIL y contraseña son requeridos" };
  }

  try {
    const user = await prisma.user.findFirst({
      where: {
        OR: [{ patient: { dni: dniOrCuil } }, { patient: { cuil: dniOrCuil } }],
      },
      select: {
        email: true,
        firebaseUid: true,
        role: true,
        patient: { select: { id: true, firstName: true, lastName: true } },
      },
    });

    if (!user?.email) {
      return { error: "Usuario no encontrado" };
    }

    const firebaseResp = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.FIREBASE_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: user.email,
          password,
          returnSecureToken: true,
        }),
      }
    );

    const firebaseData = await firebaseResp.json();

    if (!firebaseResp.ok) {
      return {
        error: firebaseData.error?.message || "Credenciales incorrectas",
      };
    }
    const customClaims = {
      role: user?.role,
      name: `${user?.patient?.firstName} ${user?.patient?.lastName}`,
      patientId: user?.patient?.id,
    };

    const customToken = await admin
      .auth()
      .createCustomToken(user.firebaseUid, customClaims);

    return { token: customToken, success: true };
  } catch (err: any) {
    console.error("Login error:", err);
    return { error: "Error interno al iniciar sesión", success: false };
  }
}
