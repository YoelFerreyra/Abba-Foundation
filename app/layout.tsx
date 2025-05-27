import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Fundacion Abba',
  description: 'Fundación Abba - Centro de Salud',
  generator: 'Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
