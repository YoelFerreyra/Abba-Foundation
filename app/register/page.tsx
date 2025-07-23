"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerUserAction } from "@/actions/auth/signup";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import Image from "next/image";
import {
  RegisterFormInputs,
  registerSchema,
} from "./schemas/register-schema";
import { authClient } from "@/lib/firebase/firebase-client";

export default function RegisterPage() {
  const router = useRouter();
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormInputs>({
    resolver: zodResolver(registerSchema),
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(authClient, (user) => {
      if (user && user.emailVerified) {
        router.push("/dashboard");
      }
    });
    return () => unsubscribe();
  }, [router]);

  const onSubmit = async (data: RegisterFormInputs) => {
    setIsLoading(true);
    setMessage("");
    try {
      const response = await registerUserAction({
        email: data.email,
        password: data.password,
        confirmPassword: data.confirmPassword,
        dni: data.dni,
        dniProcessingNumber: data.dniProcessingNumber
      });

      if (response?.error) {
        throw new Error(response.error);
      }
      
      setMessage("Registro exitoso. Redirigiendo al login...");
      router.push("/login");
    } catch (err: any) {
      console.error("Error en registro:", err);
      setMessage(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="hidden md:flex md:w-1/2 bg-green-600 items-center justify-center">
        <Image
          src="/background3.png"
          alt="Login Illustration"
          className="object-cover h-full w-full"
          width={800}
          height={800}
        />
      </div>

      <div className="flex items-center justify-center w-full md:w-1/2 p-6 bg-gray-50">
        <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8">
          <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
            Crear cuenta
          </h1>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Correo electrónico
              </label>
              <input
                type="email"
                placeholder="nombre@correo.com"
                {...register("email")}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Contraseña
              </label>
              <input
                type="password"
                placeholder="••••••••"
                {...register("password")}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Repetir contraseña
              </label>
              <input
                type="password"
                placeholder="••••••••"
                {...register("confirmPassword")}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Número de DNI
              </label>
              <input
                type="text"
                placeholder="12345678"
                {...register("dni")}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              {errors.dni && (
                <p className="text-red-500 text-sm">{errors.dni.message}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Número de trámite de DNI
              </label>
              <input
                type="text"
                placeholder="123456789"
                {...register("dniProcessingNumber")}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              {errors.dniProcessingNumber && (
                <p className="text-red-500 text-sm">
                  {errors.dniProcessingNumber.message}
                </p>
              )}
            </div>

            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}

            {message && <p className="text-green-600 text-sm">{message}</p>}

            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
            >
              Registrarse
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
