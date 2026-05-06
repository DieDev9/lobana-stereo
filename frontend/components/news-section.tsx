import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { getNoticias, Noticia } from "@/lib/api";

function formatFecha(fecha: string | null): string {
  if (!fecha) return "Reciente"
  try {
    return new Date(fecha).toLocaleDateString("es-CO", {
      day: "numeric",
      month: "short",
      hour: "2-digit",
      minute: "2-digit",
    })
  } catch {
    return fecha
  }
}

function categoriaLabel(categoria: string | null): string {
  const map: Record<string, string> = {
    eltiempo: "NACIONAL",
    colombia: "NACIONAL",
    bucaramanga: "REGIONAL",
    entretenimiento: "ENTRETENIMIENTO",
    rcn: "NACIONAL",
  }
  return map[categoria ?? ""] ?? "GENERAL"
}

export async function NewsSection() {
  let noticias: Noticia[] = []

  try {
    noticias = await getNoticias("eltiempo", 6)
  } catch (error) {
    console.error("Error cargando noticias:", error)
  }

  return (
    <section id="noticias" className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-xs text-muted-foreground font-medium tracking-wide mb-1">
              LO ÚLTIMO
            </p>
            <h2 className="text-2xl md:text-3xl font-bold">Noticias</h2>
          </div>
          <Link
            href="#"
            className="flex items-center gap-1 text-sm text-[#D42B2B] hover:text-[#D42B2B]/80 font-medium"
          >
            Ver todas
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {noticias.length === 0 ? (
          <p className="text-muted-foreground text-sm text-center py-12">
            No se pudieron cargar las noticias. Intenta más tarde.
          </p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {noticias.map((noticia, index) => (
              <article
                key={index}
                className="group cursor-pointer overflow-hidden rounded-xl border border-border bg-card hover:shadow-lg transition-shadow"
              >
                <div className="aspect-video bg-secondary relative overflow-hidden">
                  {noticia.imagen ? (
                    <Image
                      src={noticia.imagen}
                      alt={noticia.titulo}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-secondary">
                      <div className="space-y-2 w-3/4">
                        <div className="h-2 w-full bg-muted-foreground/20 rounded" />
                        <div className="h-2 w-2/3 bg-muted-foreground/20 rounded" />
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-4 space-y-2">
                  <span className="text-xs font-semibold text-[#D42B2B] tracking-wide">
                    {categoriaLabel(noticia.categoria)}
                  </span>
                  <h3 className="font-semibold text-foreground group-hover:text-[#D42B2B] transition-colors line-clamp-2">
                    <Link href={noticia.url} target="_blank" rel="noopener noreferrer">
                      {noticia.titulo}
                    </Link>
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {formatFecha(noticia.fecha)}
                  </p>
                  {noticia.fuente && (
                    <p className="text-xs text-muted-foreground/60 italic">
                      {noticia.fuente}
                    </p>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}