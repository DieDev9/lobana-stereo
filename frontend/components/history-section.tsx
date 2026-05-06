import Image from "next/image";
import { Radio, Calendar, Users, Award } from "lucide-react";

export function HistorySection() {
  const milestones = [
    {
      icon: Calendar,
      year: "2005",
      title: "Fundación",
      description: "Inicio de transmisiones con el sueño de conectar a la comunidad",
    },
    {
      icon: Radio,
      year: "2010",
      title: "Expansión",
      description: "Ampliación de cobertura a nuevas regiones",
    },
    {
      icon: Users,
      year: "2015",
      title: "Comunidad",
      description: "Más de 50,000 oyentes diarios nos sintonizan",
    },
    {
      icon: Award,
      year: "2020",
      title: "Reconocimiento",
      description: "Premio a la mejor emisora regional",
    },
  ];

  return (
    <section id="historia" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="relative aspect-square max-w-md mx-auto lg:mx-0 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/logo-lobana-stereo.png"
                alt="Historia de Lobana Stereo"
                fill
                className="object-contain bg-white p-8"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#D42B2B]/10 rounded-full -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#D42B2B]/5 rounded-full -z-10" />
          </div>

          {/* Content side */}
          <div className="space-y-8">
            <div>
              <p className="text-sm font-medium text-[#D42B2B] tracking-wide uppercase mb-2">
                Nuestra Historia
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
                Más de una década marcando la diferencia
              </h2>
            </div>

            <div className="prose prose-gray max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                Lobana Stereo 96.8 FM nació con un sueño: conectar a nuestra comunidad 
                a través de la música, las noticias y el entretenimiento de calidad. 
                Desde nuestros humildes comienzos, hemos crecido hasta convertirnos 
                en la emisora preferida de miles de oyentes.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Nuestra misión siempre ha sido clara: ser la voz de nuestra región, 
                llevando información veraz, música variada y programas que educan, 
                entretienen e inspiran. Cada día trabajamos con pasión para seguir 
                <strong className="text-foreground"> marcando la diferencia</strong> en la vida de nuestros oyentes.
              </p>
            </div>

            {/* Milestones */}
            <div className="grid grid-cols-2 gap-4">
              {milestones.map((milestone) => (
                <div
                  key={milestone.year}
                  className="flex items-start gap-3 p-4 rounded-xl bg-background border border-border hover:border-[#D42B2B]/30 transition-colors"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#D42B2B]/10 text-[#D42B2B]">
                    <milestone.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-[#D42B2B] font-semibold">{milestone.year}</p>
                    <p className="font-medium text-sm">{milestone.title}</p>
                    <p className="text-xs text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
