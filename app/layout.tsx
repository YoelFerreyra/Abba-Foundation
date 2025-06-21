import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";
import { unstable_ViewTransition as ViewTransition } from "react";

export const metadata: Metadata = {
  title: "Fundacion Abba",
  description: "Fundación Abba - Centro de Salud",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <AuthProvider>
        <ViewTransition>
        <body>{children}</body>
        </ViewTransition>
      </AuthProvider>
    </html>
  );
}
