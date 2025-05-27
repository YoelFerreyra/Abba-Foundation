"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
} from "firebase/auth";
import { auth } from "@/lib/firebaseClient";
import Image from "next/image";
import { registerUser } from "@/actions";

export default function RegisterPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [dni, setDni] = useState("");
  const [dniTramite, setDniTramite] = useState("");
  const [error, setError] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user && user.emailVerified) {
        router.push("/dashboard");
      }
    });
    return () => unsubscribe();
  }, [router]);

  const register = async (e) => {
    e.preventDefault();
    setError(null);
    setMessage("");

    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      await sendEmailVerification(user);
      setMessage(
        "Registro exitoso. Revisa tu correo para verificar tu cuenta."
      );

      await registerUser({
        uid: user.uid,
        email: user.email,
        dni,
        dniTramite,
      });
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="hidden md:flex md:w-1/2 bg-green-600 items-center justify-center">
        <Image
          src="/background2.jpg"
          alt="Login Illustration"
          className="object-cover h-full w-full"
          width={800}
          height={800}
        />
      </div>

      {/* Lado derecho: Formulario */}
      <div className="flex items-center justify-center w-full md:w-1/2 p-6 bg-gray-50">
        <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8">
          <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
            Crear cuenta
          </h1>
          <form onSubmit={register} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Correo electrónico
              </label>
              <input
                type="email"
                placeholder="nombre@correo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Contraseña
              </label>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Repetir contraseña
              </label>
              <input
                type="password"
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Número de DNI
              </label>
              <input
                type="text"
                placeholder="12345678"
                value={dni}
                onChange={(e) => setDni(e.target.value)}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Número de trámite de DNI
              </label>
              <input
                type="text"
                placeholder="123456789"
                value={dniTramite}
                onChange={(e) => setDniTramite(e.target.value)}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}
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
