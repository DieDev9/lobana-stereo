import { getProgramacion } from "@/lib/api"

export async function ScheduleSection() {
  let programas: any[] = []

  try {
    programas = await getProgramacion()
  } catch (error) {
    console.error("Error cargando programación:", error)
  }

  return (
    <section id="programacion" className="py-12 md:py-16 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <p className="text-xs text-muted-foreground font-medium tracking-wide mb-1">
            HOY EN LOBANA
          </p>
          <h2 className="text-2xl md:text-3xl font-bold">Programación</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {programas.map((item, index) => (
            <div
              key={index}
              className={`rounded-xl p-4 transition-all ${
                item.activo
                  ? "bg-white border-2 border-[#D42B2B] shadow-md"
                  : "bg-white border border-border hover:shadow-md"
              }`}
            >
              <p className={`text-xs font-medium mb-2 ${
                item.activo ? "text-[#D42B2B]" : "text-muted-foreground"
              }`}>
                {item.hora_inicio} - {item.hora_fin}
              </p>
              <h3 className="font-bold text-lg mb-1">{item.programa}</h3>
              <p className="text-sm text-muted-foreground">{item.locutor}</p>
              {item.activo && (
                <span className="inline-flex items-center gap-1 mt-3 px-2 py-1 rounded bg-[#D42B2B] text-white text-xs font-medium">
                  <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                  Al aire
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}