import { NextResponse } from "next/server";
import admin from "firebase-admin";
import path from "path";
import { readFileSync } from "fs";
import { prisma } from "@/lib/prisma";

if (!admin.apps.length) {
  const serviceAccount = JSON.parse(
    readFileSync(path.resolve("abba.json"), "utf8")
  );
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

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
