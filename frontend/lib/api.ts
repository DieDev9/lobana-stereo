const API_URL = process.env.NEXT_PUBLIC_API_URL || ""

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
  categoria: string = "eltiempo",
  limite: number = 6
): Promise<Noticia[]> {
  const res = await fetch(`${API_URL}/api/noticias`, {
    next: { revalidate: 86400 }
  })

  if (!res.ok) throw new Error("Error al obtener noticias")
  return res.json()
}

export async function getProgramacion() {
  const res = await fetch(`${API_URL}/api/programacion`, {
    next: { revalidate: 60 }
  })

  if (!res.ok) throw new Error("Error al obtener programación")
  return res.json()
}