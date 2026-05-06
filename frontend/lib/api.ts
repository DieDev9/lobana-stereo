const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000"

export interface Noticia {
  titulo: string
  resumen: string | null
  url: string
  fecha: string | null
  imagen: string | null
  categoria: string | null
  fuente: string | null
}

export async function getNoticias(
   categoria: string = "rcn",
  limite: number = 3
): Promise<Noticia[]> {
  const res = await fetch(
    `${API_URL}/noticias?categoria=${categoria}&limite=${limite}`,
    { next: { revalidate: 300 } } // refresca cada 5 minutos
  )

  if (!res.ok) {
    throw new Error("Error al obtener noticias")
  }

  return res.json()
}

export async function getProgramacion() {
  const res = await fetch(`${API_URL}/programacion`, {
    next: { revalidate: 86400 } // refresca cada minuto
  })

  if (!res.ok) {
    throw new Error("Error al obtener programación")
  }

  return res.json()
}