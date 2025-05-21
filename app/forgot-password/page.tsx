'use client';

import { useState } from 'react';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '@/lib/firebaseClient';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { MailIcon } from 'lucide-react';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setMessage('');

    try {
      await sendPasswordResetEmail(auth, email);
      setMessage('Se envió un correo para restablecer la contraseña.');
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Imagen lateral (escondida en móviles) */}
      <div className="hidden md:flex md:w-1/2 bg-blue-600 items-center justify-center">
        <img
          src="/background.jpg"
          alt="Forgot Password Illustration"
          className="object-cover object-left h-full w-full"
        />
      </div>

      {/* Formulario */}
      <div className="flex w-full md:w-1/2 items-center justify-center p-6">
        <div className="w-full max-w-md space-y-6 bg-white shadow-xl rounded-xl p-8">
          <h2 className="text-2xl font-bold text-center text-gray-800">¿Olvidaste tu contraseña?</h2>
          <p className="text-sm text-gray-600 text-center">
            Te enviaremos un correo para restablecerla.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <MailIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="email"
                placeholder="Correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="pl-10 pr-4 py-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            {message && <p className="text-green-600 text-sm">{message}</p>}
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white w-full py-2 rounded"
            >
              Enviar correo
            </button>
          </form>

          <div className="text-center text-sm mt-4">
            <Link href="/login" className="text-blue-600 hover:underline">
              Volver al login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
