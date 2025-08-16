"use client";
import { DashboardHeader } from "@/components/dashboard-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ProfessionalCalendar from "./components/medCalendar"
import AppointmentList from "./components/turnos-list";
import { useAuth } from "@/context/AuthContext";
import PatientCalendar from "./components/patientCalendar";
import AdminCalendar from "./components/adminCalendar";

export default function TurnosPage() {
  const { user, loading } = useAuth();
  return (
    <div className="flex flex-col gap-5">
      <DashboardHeader title="Gestión de Turnos" description="Administra tus citas médicas y reserva nuevos turnos" />

      <Tabs defaultValue="calendario" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-4">
          <TabsTrigger value="calendario">Calendario</TabsTrigger>
          <TabsTrigger value="lista">Lista de Turnos</TabsTrigger>
        </TabsList>

        <TabsContent value="calendario" className="mt-0">
          <Card>
            <CardHeader>
              <CardTitle>Calendario de Turnos</CardTitle>
              <CardDescription>Visualiza y gestiona tus citas en el calendario</CardDescription>
            </CardHeader>
            <CardContent>
              {
                user?.claims?.role === "CLIENT" && <ProfessionalCalendar />
              }
              {
                user?.claims?.role === "PROFESSIONAL" && <PatientCalendar />
              }
              {
                user?.claims?.role === "ADMIN" && <AdminCalendar />
              }
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="lista" className="mt-0">
          <Card>
            <CardHeader>
              <CardTitle>Listado de Turnos</CardTitle>
              <CardDescription>Todos tus turnos programados</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-5">
                <AppointmentList />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
