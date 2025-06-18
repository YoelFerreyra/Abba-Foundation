import type React from "react";
import type { Metadata } from "next";
import { DashboardSidebar } from "@/components/dashboard-sidebar";
import { ProtectedRoute } from "@/utils/ProtectedRoute";

export const metadata: Metadata = {
  title: "Dashboard Consultorio Médico",
  description: "Sistema de gestión para consultorio médico",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex flex-1">
        <ProtectedRoute>
          <DashboardSidebar />
          <main className="flex-1 overflow-y-auto p-4 md:p-6">{children}</main>
        </ProtectedRoute>
      </div>
    </div>
  );
}
