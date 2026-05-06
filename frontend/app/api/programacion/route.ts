import { NextResponse } from "next/server"

const PROGRAMACION = [
  { hora_inicio: "07:00", hora_fin: "08:30", programa: "Noticiero Regional", locutor: "Pacho Rocha", foto: "/images/pacho.png" },
  { hora_inicio: "09:00", hora_fin: "12:00", programa: "Las Mañanas Superbacanas", locutor: "Eduardo Cogollo", foto: "/images/eduardo.png" },
  { hora_inicio: "12:00", hora_fin: "15:00", programa: "Noticias y Música", locutor: "Feiber Martinez", foto: "/images/feiber.png" },
  { hora_inicio: "15:00", hora_fin: "18:00", programa: "La Tarde Superbacana", locutor: "Fauner Salas", foto: "/images/fauner.png" },
]

export async function GET() {
  const ahora = new Date().toLocaleTimeString("es-CO", {
    timeZone: "America/Bogota",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  })

  const resultado = PROGRAMACION.map(programa => ({
    ...programa,
    activo: ahora >= programa.hora_inicio && ahora < programa.hora_fin
  }))

  return NextResponse.json(resultado)
}