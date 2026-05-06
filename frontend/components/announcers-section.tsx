import { Mic2, Clock } from "lucide-react";
import Image from "next/image";

const locutores = [
  {
    id: 1,
    nombre: "Pacho Rocha",
    rol: "Locutor",
    descripcion: "La voz que arranca el día en Lobana Stereo con las noticias más importantes de la región.",
    horario: "Lunes a Viernes, 7:00 - 8:30 AM",
    foto: "/images/pacho.png",
  },
  {
    id: 2,
    nombre: "Eduardo Cogollo",
    rol: "Locutor",
    descripcion: "Energía y buena música para empezar la mañana con Las Mañanas Superbacanas.",
    horario: "Lunes a Viernes, 9:00 AM - 12:00 PM",
    foto: "/images/eduardo.png",
  },
  {
    id: 3,
    nombre: "Feiber Martinez",
    rol: "Locutor",
    descripcion: "Noticias y la mejor música para acompañar tu mediodía en Lobana Stereo 96.8 FM.",
    horario: "Lunes a Viernes, 12:00 - 3:00 PM",
    foto: "/images/feiber.png",
  },
  {
    id: 4,
    nombre: "Fauner Salas",
    rol: "Locutor",
    descripcion: "La tarde más bacana con la mejor selección musical para cerrar tu jornada.",
    horario: "Lunes a Viernes, 3:00 - 6:00 PM",
    foto: "/images/fauner.png",
  },
];

export function AnnouncersSection() {
  return (
    <section id="locutores" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-sm font-medium text-[#D42B2B] tracking-wide uppercase mb-2">
            Nuestro Equipo
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Conoce a nuestros locutores
          </h2>
          <p className="text-muted-foreground">
            Las voces que te acompañan todos los días con la mejor música,
            noticias y entretenimiento de la región.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {locutores.map((locutor) => (
            <article
              key={locutor.id}
              className="group bg-secondary/50 rounded-2xl p-6 hover:bg-secondary transition-colors border border-transparent hover:border-[#D42B2B]/20"
            >
              {/* Foto */}
              <div className="relative mb-4">
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:scale-105 transition-transform relative">
                  <Image
                    src={locutor.foto}
                    alt={locutor.nombre}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div className="absolute bottom-0 right-1/4 w-8 h-8 bg-background rounded-full flex items-center justify-center border-2 border-[#D42B2B]">
                  <Mic2 className="h-4 w-4 text-[#D42B2B]" />
                </div>
              </div>

              {/* Info */}
              <div className="text-center space-y-3">
                <div>
                  <h3 className="font-bold text-lg text-foreground">{locutor.nombre}</h3>
                  <p className="text-sm text-[#D42B2B] font-medium">{locutor.rol}</p>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {locutor.descripcion}
                </p>
                <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground pt-2">
                  <Clock className="h-3.5 w-3.5" />
                  <span>{locutor.horario}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            ¿Quieres ser parte de nuestro equipo?
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 text-[#D42B2B] font-medium hover:underline"
          >
            Contáctanos
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}