import { NextResponse } from "next/server"

const FEED_URL = "https://www.eltiempo.com/rss/colombia.xml"

async function extraerOgImage(url: string): Promise<string | null> {
  try {
    const res = await fetch(url, {
      headers: { "User-Agent": "Mozilla/5.0" },
      next: { revalidate: 86400 }
    })
    const html = await res.text()
    const match = html.match(/<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']/)
      ?? html.match(/<meta[^>]+content=["']([^"']+)["'][^>]+property=["']og:image["']/)
    return match?.[1] ?? null
  } catch {
    return null
  }
}

export async function GET() {
  try {
    const res = await fetch(FEED_URL, {
      headers: { "User-Agent": "Mozilla/5.0" },
      next: { revalidate: 86400 } // caché 24 horas
    })

    const xml = await res.text()

    // Extraer items del RSS manualmente
    const items = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)]

    const noticias = await Promise.all(
      items.slice(0, 6).map(async (item) => {
        const content = item[1]

        const titulo = content.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/)?.[1]
          ?? content.match(/<title>(.*?)<\/title>/)?.[1]
          ?? "Sin título"

        const url = content.match(/<link>(.*?)<\/link>/)?.[1]
          ?? content.match(/<guid[^>]*>(.*?)<\/guid>/)?.[1]
          ?? ""

        const fecha = content.match(/<pubDate>(.*?)<\/pubDate>/)?.[1] ?? null

        const resumen = content.match(/<description><!\[CDATA\[(.*?)\]\]><\/description>/s)?.[1]
          ?? content.match(/<description>(.*?)<\/description>/s)?.[1]
          ?? null

        const imagen = await extraerOgImage(url)

        return {
          titulo,
          url,
          fecha,
          resumen,
          imagen,
          categoria: "eltiempo",
          fuente: "EL TIEMPO"
        }
      })
    )

    return NextResponse.json(noticias, {
      headers: { "Cache-Control": "s-maxage=86400, stale-while-revalidate" }
    })
  } catch (error) {
    return NextResponse.json({ error: "Error obteniendo noticias" }, { status: 500 })
  }
}