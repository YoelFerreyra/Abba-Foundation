"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "@/lib/firebaseClient";
import { Mail, Lock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { getAuth, signInWithCustomToken } from "firebase/auth";
import { getClientToken } from "@/lib/clientToken";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const login = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const res = await fetch("/api/generate-token", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          uid: "user_test_001",
          claims: {
            role: "tester",
            accessLevel: 1,
          },
        }),
      });
  
      if (!res.ok) throw new Error("No se pudo generar el token");
  
      const data = await res.json();
      console.log("Custom token:", data.token);
  
      const auth = getAuth();

      try {
        const userCredential = await signInWithCustomToken(auth, data.token);
        console.log("Usuario logueado:", userCredential.user);
        await getClientToken()
      } catch (error) {
        console.error("Error al iniciar sesión con custom token:", error);
      }

    } catch (err) {
      setError(err.message || "Error desconocido");
    }
  };
  
  const signInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      //await registerUser(user);
  
      router.push("/dashboard");
    } catch (err) {
      setError(err.message);
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
          <form onSubmit={login} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Correo electrónico
              </label>
              <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
                <Mail className="h-5 w-5 text-gray-400 mr-2" />
                <input
                  type="email"
                  placeholder="nombre@correo.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full focus:outline-none"
                />
              </div>
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full focus:outline-none"
                />
              </div>
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
            >
              Iniciar sesión
            </button>

            <button
              type="button"
              onClick={signInWithGoogle}
              className="w-full flex items-center justify-center bg-white border border-gray-300 hover:bg-gray-100 text-gray-700 font-semibold py-2 px-4 rounded-lg transition duration-200"
            >
              <Image
                src="/google-brands.svg"
                alt="Google"
                className="w-5 h-5 mr-2"
                width={20}
                height={20}
              />
              Iniciar con Google
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
