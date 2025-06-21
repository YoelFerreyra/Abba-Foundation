"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Mail, Lock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import { authClient } from "@/lib/firebase/firebase-client";
import { signInWithFirebase } from "@/actions/auth/singin";
import { LoginFormInputs, loginSchema } from "./schemas/login-schema";

export default function LoginPage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormInputs) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        authClient,
        data.email,
        data.password
      );
      
      const user = userCredential.user;

      if (!user?.uid) {
        throw new Error("User UID not found");
      }

      const response = await signInWithFirebase(user.uid);
      
      if (response?.error) {
        throw new Error(response.error);
      }

      await user.getIdToken(true);
      await user.getIdTokenResult();

      router.push("/dashboard");
    } catch (err: any) {
      console.error("Login failed:", err);
      setError("root", { message: err.message || "Error de inicio de sesión" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="hidden md:flex md:w-1/2 bg-blue-600 items-center justify-center">
        <Image
          src="/background2.jpg"
          alt="Login Illustration"
          className="object-cover h-full w-full"
          width={800}
          height={800}
        />
      </div>
      <div className="flex items-center justify-center w-full md:w-1/2 p-6 bg-gray-50">
        <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8">
          <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
            Iniciar sesión
          </h1>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Correo electrónico
              </label>
              <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
                <Mail className="h-5 w-5 text-gray-400 mr-2" />
                <input
                  type="email"
                  placeholder="nombre@correo.com"
                  {...register("email")}
                  className="w-full focus:outline-none"
                />
              </div>
              {errors.email && (
                <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Contraseña
              </label>
              <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
                <Lock className="h-5 w-5 text-gray-400 mr-2" />
                <input
                  type="password"
                  placeholder="••••••••"
                  {...register("password")}
                  className="w-full focus:outline-none"
                />
              </div>
              {errors.password && (
                <p className="text-sm text-red-500 mt-1">{errors.password.message}</p>
              )}
            </div>

            {errors.root && (
              <p className="text-sm text-red-500">{errors.root.message}</p>
            )}

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
            >
              Iniciar sesión
            </button>

            <div className="flex justify-between text-sm mt-4 text-blue-600">
              <Link href="/register" className="hover:underline">
                Crear cuenta
              </Link>
              <Link href="/forgot-password" className="hover:underline">
                ¿Olvidaste tu contraseña?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
