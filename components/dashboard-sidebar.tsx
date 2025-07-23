"use client";

import Link from "next/link";
import { redirect, usePathname } from "next/navigation";
import {
  CalendarDays,
  FileText,
  Home,
  User,
  ClipboardList,
  Menu,
  X,
  LogOut,
  Settings,
  User2,
  ChartColumn,
  Smile,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { authClient } from "@/lib/firebase/firebase-client";
import { useAuth } from "@/context/AuthContext";

export function DashboardSidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { user, loading: isLoading } = useAuth();
  const [filteredRoutes, setFilteredRoutes] = useState<any>([]);

  const routes = [
    {
      label: "Principal",
      icon: Home,
      href: "/dashboard",
      active: pathname === "/dashboard",
      roles: ["admin", "player", "superadmin", "doctor", "CLIENT"],
    },
    {
      label: "Turnos",
      icon: CalendarDays,
      href: "/dashboard/turnos",
      active: pathname === "/dashboard/turnos",
      roles: ["player", "admin", "doctor", "CLIENT"],
    },
    {
      label: "Mis Trámites",
      icon: FileText,
      href: "/dashboard/tramites",
      active: pathname === "/dashboard/tramites",
      roles: ["player", "CLIENT"],
    },
    {
      label: "Perfil",
      icon: User,
      href: "/dashboard/perfil",
      active: pathname === "/dashboard/perfil",
      roles: ["player", "admin", "doctor", "superadmin", "CLIENT"],
    },
    {
      label: "Finanzas",
      icon: ChartColumn,
      href: "/dashboard/finanzas",
      active: pathname === "/dashboard/finanzas",
      roles: ["admin", "superadmin", "CLIENT"],
    },
    {
      label: "Historial Médico",
      icon: ClipboardList,
      href: "/dashboard/historial",
      active: pathname === "/dashboard/historial",
      roles: ["player", "doctor", "CLIENT"],
    },
    {
      label: "Usuarios",
      icon: User2,
      href: "/dashboard/usuarios",
      active: pathname === "/dashboard/usuarios",
      roles: ["admin", "superadmin", "CLIENT"],
    },
    {
      label: "Pacientes",
      icon: Smile,
      href: "/dashboard/pacientes",
      active: pathname === "/dashboard/pacientes",
      roles: ["doctor", "admin", "CLIENT"],
    },
    {
      label: "Profesionales",
      icon: Smile,
      href: "/dashboard/profesionales",
      active: pathname === "/dashboard/profesionales",
      roles: ["admin", "superadmin", "CLIENT"],
    },
  ];

  useEffect(() => {
    if (isLoading) return;
    if (user?.claims?.role) {
      setFilteredRoutes(
        routes.filter((route) =>
          route.roles.includes(user?.claims?.role)
        )
      );
    }
  }, [user, isLoading]);


  const logout = async () => {
    await signOut(authClient);
    redirect("/login");
  };

  return (
    <>
      <div className="hidden md:flex sticky top-0 h-screen w-64 flex-col border-r bg-muted/40">
        <div className="flex h-14 items-center border-b px-4">
          <Link
            href="/dashboard"
            className="flex items-center gap-2 font-semibold"
          >
            <span className="text-teal-600">Consultorio Médico</span>
          </Link>
        </div>
        <div className="flex-1 overflow-auto py-2">
          <nav className="grid items-start px-2 text-sm font-medium">
            {filteredRoutes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${
                  route.active
                    ? "bg-teal-100 text-teal-900"
                    : " hover:bg-muted hover:text-foreground"
                }`}
              >
                <route.icon
                  className={`h-4 w-4 ${route.active ? "text-teal-900" : ""}`}
                />
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
              <div className="font-medium">
                {user?.displayName || user?.claims?.name}
              </div>
              <div className="text-muted-foreground">{user?.claims?.role}</div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="ml-auto h-8 w-8"
              onClick={() => logout()}
            >
              <LogOut className="h-4 w-4" />
              <span className="sr-only">Cerrar sesión</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div className="flex h-14 items-center border-b md:hidden px-4 fixed top-0 left-0 w-full bg-white z-40">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="mr-2">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64 p-0">
            <div className="flex h-14 items-center border-b px-4">
              <Link
                href="/dashboard"
                className="flex items-center gap-2 font-semibold"
              >
                <span className="text-teal-600">Consultorio Médico</span>
              </Link>
              <Button
                variant="ghost"
                size="icon"
                className="ml-auto"
                onClick={() => setOpen(false)}
              >
                <span className="sr-only">Cerrar menú</span>
              </Button>
            </div>
            <nav className="grid gap-1 p-2 text-sm font-medium">
              {filteredRoutes.map((route) => (
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
                  <route.icon
                    className={`h-4 w-4 ${route.active ? "text-teal-900" : ""}`}
                  />
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
                  <div className="font-medium">
                    {user?.displayName || user?.claims?.name}
                  </div>
                  <div className="text-muted-foreground">
                    {user?.claims?.role}
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="ml-auto h-8 w-8"
                  onClick={() => logout()}
                >
                  <LogOut className="h-4 w-4" />
                  <span className="sr-only">Cerrar sesión</span>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
        <Link
          href="/dashboard"
          className="flex items-center gap-2 font-semibold"
        >
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
  );
}
