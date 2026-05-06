"use client";

import Image from "next/image";
import { Play, Pause, Volume2, VolumeX, Radio, MapPin, Signal } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export function Hero() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(80);
  const [bars, setBars] = useState<number[]>([]);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Initialize bars on client side only
    setBars(Array.from({ length: 30 }, () => 20 + Math.random() * 30));
  }, []);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setBars(Array.from({ length: 30 }, () => 15 + Math.random() * 85));
    }, 150);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = Number(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume / 100;
    }
  };

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#D42B2B] via-[#B82424] to-[#8B1A1A]" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      {/* Decorative circles */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-black/10 rounded-full blur-3xl" />

      <div className="container relative mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left side - Content */}
          <div className="space-y-8 text-white">
            {/* Location Badge */}
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-4 py-2 text-sm">
              <MapPin className="h-4 w-4" />
              <span>San Martín de Loba, Bolívar</span>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <Signal className="h-4 w-4 text-white/80" />
                  <span className="text-sm font-medium tracking-widest text-white/80">
                    96.8 FM
                  </span>
                </div>
                <span className="w-px h-4 bg-white/30" />
                <span className="text-sm text-white/80">En vivo 24/7</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-balance">
                Marcando
                <br />
                la diferencia
              </h1>
            </div>
            
            <p className="text-lg text-white/90 max-w-md leading-relaxed">
              La voz de nuestra región. Conectando a San Martín de Loba y el sur de Bolívar 
              con la mejor música, noticias y entretenimiento.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-2">
              <div>
                <p className="text-3xl font-bold">10+</p>
                <p className="text-sm text-white/70">Años al aire</p>
              </div>
              <div>
                <p className="text-3xl font-bold">50K+</p>
                <p className="text-sm text-white/70">Oyentes diarios</p>
              </div>
              <div>
                <p className="text-3xl font-bold">24/7</p>
                <p className="text-sm text-white/70">Transmisión</p>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <button 
                onClick={togglePlay}
                className="group flex items-center gap-3 rounded-full bg-white px-8 py-4 text-[#D42B2B] font-semibold hover:bg-white/90 transition-all shadow-lg hover:shadow-xl hover:scale-105"
              >
                <span className={`flex h-10 w-10 items-center justify-center rounded-full bg-[#D42B2B] text-white transition-transform ${isPlaying ? '' : 'group-hover:scale-110'}`}>
                  {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 fill-current ml-0.5" />}
                </span>
                {isPlaying ? 'Pausar' : 'Escuchar en vivo'}
              </button>
              
              <a 
                href="#programacion"
                className="flex items-center gap-2 rounded-full border-2 border-white/30 px-6 py-4 text-white font-medium hover:bg-white/10 transition-colors"
              >
                <Radio className="h-5 w-5" />
                Ver programación
              </a>
            </div>
          </div>

          {/* Right side - Player Card */}
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute -inset-4 bg-white/20 rounded-3xl blur-2xl" />
            
            <div className="relative bg-white rounded-3xl p-6 md:p-8 shadow-2xl">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="relative h-16 w-16 rounded-2xl overflow-hidden bg-gradient-to-br from-[#D42B2B]/10 to-[#D42B2B]/5 p-2">
                    <Image
                      src="/images/logo-lobana-stereo.png"
                      alt="Lobana Stereo"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground">Lobana Stereo</h3>
                    <p className="text-sm text-muted-foreground">96.8 FM</p>
                  </div>
                </div>
                
                {/* Live indicator */}
                <div className="flex items-center gap-2 bg-[#D42B2B]/10 rounded-full px-3 py-1.5">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D42B2B] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#D42B2B]"></span>
                  </span>
                  <span className="text-xs font-semibold text-[#D42B2B] uppercase tracking-wide">En vivo</span>
                </div>
              </div>

              {/* Now Playing Info */}
              <div className="bg-gradient-to-r from-muted/80 to-muted/40 rounded-2xl p-4 mb-6">
                <p className="text-xs text-muted-foreground font-medium tracking-wider mb-1">AL AIRE AHORA</p>
                <p className="font-semibold text-foreground">Transmisión en vivo</p>
                <p className="text-sm text-muted-foreground mt-1">La mejor música del Caribe colombiano</p>
              </div>

              {/* Audio Visualization */}
              <div className="flex items-end justify-center gap-[3px] h-20 mb-6 px-2">
                {bars.map((height, i) => (
                  <div
                    key={i}
                    className="flex-1 max-w-[8px] bg-gradient-to-t from-[#D42B2B] to-[#FF6B6B] rounded-full transition-all duration-150"
                    style={{
                      height: `${height}%`,
                    }}
                  />
                ))}
              </div>

              {/* Main Play Button */}
              <div className="flex justify-center mb-6">
                <button
                  onClick={togglePlay}
                  className={`flex h-20 w-20 items-center justify-center rounded-full text-white transition-all shadow-xl hover:shadow-2xl hover:scale-105 ${
                    isPlaying 
                      ? 'bg-gradient-to-br from-[#D42B2B] to-[#8B1A1A]' 
                      : 'bg-gradient-to-br from-[#D42B2B] to-[#FF4444]'
                  }`}
                  aria-label={isPlaying ? 'Pausar transmisión' : 'Reproducir transmisión'}
                >
                  {isPlaying ? (
                    <Pause className="h-8 w-8" />
                  ) : (
                    <Play className="h-8 w-8 fill-current ml-1" />
                  )}
                </button>
              </div>

              {/* Volume Control */}
              <div className="flex items-center gap-4 bg-muted/50 rounded-xl p-3">
                <button 
                  onClick={() => {
                    const newVol = volume > 0 ? 0 : 80;
                    setVolume(newVol);
                    if (audioRef.current) audioRef.current.volume = newVol / 100;
                  }}
                  className="text-muted-foreground hover:text-[#D42B2B] transition-colors"
                  aria-label={volume > 0 ? 'Silenciar' : 'Activar sonido'}
                >
                  {volume > 0 ? <Volume2 className="h-5 w-5" /> : <VolumeX className="h-5 w-5" />}
                </button>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={volume}
                  onChange={handleVolumeChange}
                  className="flex-1 h-2 bg-border rounded-full appearance-none cursor-pointer accent-[#D42B2B]"
                  aria-label="Control de volumen"
                />
                <span className="text-xs font-medium text-muted-foreground w-8 text-right">{volume}%</span>
              </div>

              {/* Footer info */}
              <div className="flex items-center justify-center gap-2 mt-6 pt-4 border-t border-border">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">
                  Transmitiendo desde San Martín de Loba, Bolívar
                </span>
              </div>

              {/* Hidden Audio Element */}
              <audio
                ref={audioRef}
                src="https://radiohd.streaminghd.co:2199/proxy/lobanastereo/stream"
                preload="none"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
