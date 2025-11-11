"use client"

import Image from "next/image"

interface GameCardProps {
  nombre: string
  estudiantes: string
  thumbnail: string
}

export function GameCard({ nombre, estudiantes, thumbnail }: GameCardProps) {
  return (
    <div
      className="group relative overflow-hidden rounded-lg cursor-pointer transition-transform duration-300 hover:scale-105"
      style={{
        backgroundColor: "#278AAB",
        borderColor: "#34C9E2",
        borderWidth: "2px",
      }}
    >
      <div className="aspect-[3/2] relative overflow-hidden">
        <Image src={thumbnail || "/placeholder.svg?height=400&width=600"} alt={nombre} fill className="object-cover" />

        <div
          className="absolute inset-0 opacity-10 group-hover:opacity-100 transition-opacity duration-300"
          style={{ backgroundColor: "rgba(39, 138, 171, 0.85)" }}
        />

        <div className="absolute inset-0 flex flex-col justify-end p-6">
          <h3 className="text-2xl font-bold mb-1 text-balance" style={{ color: "#FEFEFE" }}>
            {nombre}
          </h3>
          <p className="text-sm font-light" style={{ color: "#FEFEFE" }}>
            {estudiantes}
          </p>
        </div>
      </div>
    </div>
  )
}
