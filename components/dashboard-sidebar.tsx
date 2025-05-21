"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { CalendarDays, FileText, Home, User, CreditCard, ClipboardList, Menu, X, LogOut, Settings, User2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useState } from "react"
import { signOut } from 'firebase/auth'
import { auth } from "@/lib/firebaseClient"

export function DashboardSidebar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const routes = [
    {
      label: "Panel Principal",
      icon: Home,
      href: "/dashboard",
      active: pathname === "/dashboard",
    },
    {
      label: "Turnos",
      icon: CalendarDays,
      href: "/dashboard/turnos",
      active: pathname === "/dashboard/turnos",
    },
    {
      label: "Mis Trámites",
      icon: FileText,
      href: "/dashboard/tramites",
      active: pathname === "/dashboard/tramites",
    },
    {
      label: "Perfil",
      icon: User,
      href: "/dashboard/perfil",
      active: pathname === "/dashboard/perfil",
    },
    {
      label: "Pagos",
      icon: CreditCard,
      href: "/dashboard/pagos",
      active: pathname === "/dashboard/pagos",
    },
    {
      label: "Historial Médico",
      icon: ClipboardList,
      href: "/dashboard/historial",
      active: pathname === "/dashboard/historial",
    },
    {
      label: "Usuarios",
      icon: User2,
      href: "/dashboard/users",
      active: pathname === "/dashboard/historial",
    },
  ]
  const logout = async () => {
    await signOut(auth)
    console.log("User signed out");
    
  }

  return (
    <>
      <div className="hidden md:flex h-screen w-64 flex-col border-r bg-muted/40">
        <div className="flex h-14 items-center border-b px-4">
          <Link href="/dashboard" className="flex items-center gap-2 font-semibold">
            <span className="text-teal-600">Consultorio Médico</span>
          </Link>
        </div>
        <div className="flex-1 overflow-auto py-2">
          <nav className="grid items-start px-2 text-sm font-medium">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${
                  route.active
                    ? "bg-teal-100 text-teal-900"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                <route.icon className={`h-4 w-4 ${route.active ? "text-teal-900" : ""}`} />
                {route.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-auto p-4 border-t">
          <div className="flex items-center gap-2">
            <Avatar className="h-9 w-9">
              <AvatarImage src="/placeholder-user.jpg" alt="Avatar" />
              <AvatarFallback>MP</AvatarFallback>
            </Avatar>
            <div className="grid gap-0.5 text-xs">
              <div className="font-medium">María Pérez</div>
              <div className="text-muted-foreground">Paciente</div>
            </div>
            <Button variant="ghost" size="icon" className="ml-auto h-8 w-8" onClick={() => logout()} >
              <LogOut className="h-4 w-4" />
              <span className="sr-only">Cerrar sesión</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div className="flex h-14 items-center border-b md:hidden px-4">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="mr-2">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64 p-0">
            <div className="flex h-14 items-center border-b px-4">
              <Link href="/dashboard" className="flex items-center gap-2 font-semibold">
                <span className="text-teal-600">Consultorio Médico</span>
              </Link>
              <Button variant="ghost" size="icon" className="ml-auto" onClick={() => setOpen(false)}>
                <X className="h-4 w-4" />
                <span className="sr-only">Cerrar menú</span>
              </Button>
            </div>
            <nav className="grid gap-1 p-2 text-sm font-medium">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${
                    route.active
                      ? "bg-teal-100 text-teal-900"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                >
                  <route.icon className={`h-4 w-4 ${route.active ? "text-teal-900" : ""}`} />
                  {route.label}
                </Link>
              ))}
            </nav>
            <div className="mt-auto p-4 border-t">
              <div className="flex items-center gap-2">
                <Avatar className="h-9 w-9">
                  <AvatarImage src="/placeholder-user.jpg" alt="Avatar" />
                  <AvatarFallback>MP</AvatarFallback>
                </Avatar>
                <div className="grid gap-0.5 text-xs">
                  <div className="font-medium">María Pérez</div>
                  <div className="text-muted-foreground">Paciente</div>
                </div>
                <Button variant="ghost" size="icon" className="ml-auto h-8 w-8">
                  <LogOut className="h-4 w-4" />
                  <span className="sr-only">Cerrar sesión</span>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
        <Link href="/dashboard" className="flex items-center gap-2 font-semibold">
          <span className="text-teal-600">Consultorio Médico</span>
        </Link>
        <div className="ml-auto flex items-center gap-2">
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Settings className="h-4 w-4" />
            <span className="sr-only">Configuración</span>
          </Button>
          <Avatar className="h-8 w-8">
            <AvatarImage src="/placeholder-user.jpg" alt="Avatar" />
            <AvatarFallback>MP</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </>
  )
}
