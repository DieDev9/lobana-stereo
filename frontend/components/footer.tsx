import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer id="contacto" className="border-t border-border bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-start mb-8">
          {/* Logo and description */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo-lobana-stereo.png"
                alt="Lobana Stereo 96.8 FM"
                width={150}
                height={75}
                className="h-16 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Tu emisora de radio favorita. Marcando la diferencia con la mejor música, 
              noticias y entretenimiento las 24 horas del día.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-bold text-foreground">Enlaces Rápidos</h4>
            <nav className="flex flex-col gap-2">
              <Link href="#historia" className="text-sm text-muted-foreground hover:text-[#D42B2B] transition-colors">
                Nuestra Historia
              </Link>
              <Link href="#locutores" className="text-sm text-muted-foreground hover:text-[#D42B2B] transition-colors">
                Locutores
              </Link>
              <Link href="#noticias" className="text-sm text-muted-foreground hover:text-[#D42B2B] transition-colors">
                Noticias
              </Link>
              <Link href="#programacion" className="text-sm text-muted-foreground hover:text-[#D42B2B] transition-colors">
                Programación
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-bold text-foreground">Contacto</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Frecuencia: 96.8 FM</p>
              <p>Teléfono: +57 301 396 1137</p>
              <p>Email: contacto@lobanastereo.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <Link
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground hover:text-[#D42B2B] hover:border-[#D42B2B] transition-colors"
              aria-label="Facebook"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z" />
              </svg>
            </Link>
            <Link
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground hover:text-[#D42B2B] hover:border-[#D42B2B] transition-colors"
              aria-label="Instagram"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </Link>
            <Link
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground hover:text-[#D42B2B] hover:border-[#D42B2B] transition-colors"
              aria-label="YouTube"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33z" />
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="white" />
              </svg>
            </Link>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © 2026 Lobana Stereo 96.8 FM
          </p>
        </div>
      </div>
    </footer>
  );
}
