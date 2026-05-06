"use client";

import Link from "next/link";
import Image from "next/image";
import { Radio } from "lucide-react";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo-lobana-stereo.png"
            alt="Lobana Stereo 96.8 FM - Marcando la diferencia"
            width={120}
            height={60}
            className="h-12 w-auto object-contain"
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          <Link href="#" className="text-sm font-medium text-[#D42B2B] hover:text-[#D42B2B]/80 transition-colors">
            Inicio
          </Link>
          <Link href="#historia" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Historia
          </Link>
          <Link href="#locutores" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Locutores
          </Link>
          <Link href="#noticias" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Noticias
          </Link>
          <Link href="#programacion" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Programación
          </Link>
          <Link href="#contacto" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Contacto
          </Link>
        </nav>

        <button className="flex items-center gap-2 rounded-full bg-[#D42B2B] px-4 py-2 text-sm font-medium text-white hover:bg-[#D42B2B]/90 transition-colors">
          <Radio className="h-4 w-4" />
          <span className="hidden sm:inline">En vivo</span>
        </button>
      </div>
    </header>
  );
}
