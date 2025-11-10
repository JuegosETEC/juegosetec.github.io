import type React from "react"
import type { Metadata } from "next"
import { Bitter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const bitter = Bitter({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-bitter",
})

export const metadata: Metadata = {
  title: "Galería de Videojuegos",
  description: "Colección de videojuegos jugables en el navegador",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es-AR">
      <body className={`${bitter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
