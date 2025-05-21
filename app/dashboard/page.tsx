'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '@/lib/firebaseClient'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarDays, FileText, CreditCard } from "lucide-react"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardStats } from "@/components/dashboard-stats"
import { AppointmentList } from "@/components/appointment-list"

export default function DashboardPage() {
  const router = useRouter()
  const [user, setUser] = useState(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (!currentUser) {
        router.push('/login')
        return
      }

      setUser(currentUser)

      try {
        const res = await fetch(`/api/users?id=${currentUser.uid}`)
        if (!res.ok) throw new Error('Error verificando existencia del usuario')

        const data = await res.json()
        const userExists = !!data?.user

        if (!userExists) {
          await fetch('/api/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              firebase_id: currentUser.uid,
              email: currentUser.email,
              display_name: currentUser.displayName ?? '',
              photo_url: currentUser.photoURL ?? '',
              phone_number: currentUser.phoneNumber ?? ''
            })
          })
        }
      } catch (err) {
        console.error('Error al verificar o crear el usuario:', err)
      }
    })

    return () => unsubscribe()
  }, [router])

  if (!user) return null

  return (
    <div className="flex flex-col gap-5">
      <DashboardHeader
        title="Panel Principal"
        description={`Bienvenido al sistema de gestión del consultorio médico`}
      />

      <DashboardStats />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">Próximos Turnos</CardTitle>
            <CardDescription>Tus citas programadas para los próximos días</CardDescription>
          </CardHeader>
          <CardContent>
            <AppointmentList />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">Trámites Pendientes</CardTitle>
            <CardDescription>Trámites que requieren tu atención</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-4 rounded-md border p-3">
                <FileText className="h-5 w-5 text-teal-500" />
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium">Autorización de estudio</p>
                  <p className="text-xs text-muted-foreground">Vence en 3 días</p>
                </div>
                <div className="rounded-full px-2 py-1 text-xs bg-amber-100 text-amber-800">Pendiente</div>
              </div>
              <div className="flex items-center gap-4 rounded-md border p-3">
                <FileText className="h-5 w-5 text-teal-500" />
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium">Renovación de receta</p>
                  <p className="text-xs text-muted-foreground">Vence en 5 días</p>
                </div>
                <div className="rounded-full px-2 py-1 text-xs bg-amber-100 text-amber-800">Pendiente</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-medium">Actividad Reciente</CardTitle>
          <CardDescription>Últimas actividades en tu cuenta</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-teal-100 p-2">
                <CalendarDays className="h-4 w-4 text-teal-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">Turno confirmado con Dr. Martínez</p>
                <p className="text-xs text-muted-foreground">Hoy a las 10:30</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-blue-100 p-2">
                <CreditCard className="h-4 w-4 text-blue-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">Pago procesado</p>
                <p className="text-xs text-muted-foreground">Ayer a las 15:45</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-purple-100 p-2">
                <FileText className="h-4 w-4 text-purple-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">Resultados de laboratorio disponibles</p>
                <p className="text-xs text-muted-foreground">Hace 2 días</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
