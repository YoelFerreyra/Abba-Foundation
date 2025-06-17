import { NextResponse } from "next/server";
import admin from "firebase-admin";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const uid = "user_test_001";

    const user = await prisma.user.findMany()

    const developerClaims = {
      role: "tester",
      accessLevel: 1,
      email: "test@gmail.com",
    };


    const customToken = await admin.auth().createCustomToken(uid, developerClaims);
    return NextResponse.json({ token: customToken });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
