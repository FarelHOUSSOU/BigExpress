import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight, Clock, ShieldCheck, MapPin, Zap } from 'lucide-react';

export default function Hero({ onOpenQuote }) {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-elem', {
        y: 40,
        opacity: 0,
        duration: 1.1,
        stagger: 0.1,
        ease: 'power3.out',
        delay: 0.1,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-full min-h-[100dvh] overflow-hidden flex flex-col justify-end pt-32 sm:pt-40 pb-16 sm:pb-24 bg-obsidian text-ivory"
    >
      {/* Background Image: Delivery Courier on Motorcycle at Night (Local High-Res Asset) */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-courier.jpg"
          alt="Coursier express moto BigExpress de nuit"
          className="w-full h-full object-cover object-center filter contrast-110"
        />
        {/* Layered cinematic gradients preserving visual clarity of the courier & city lights */}
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/65 to-obsidian/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian/85 via-obsidian/50 to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 sm:px-10 md:px-16">
        
        {/* Clean Typographic Header (All generic AI badges eradicated) */}
        <h1 className="max-w-4xl tracking-tight leading-[1.05]">
          <span className="hero-elem block font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-ivory tracking-tight uppercase">
            BigExpress rencontre
          </span>
          <span className="hero-elem block font-serif italic text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-champagne font-normal tracking-tight mt-1 sm:mt-2">
            L'Excellence Immédiate.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="hero-elem mt-6 text-base sm:text-lg md:text-xl text-ivory/85 max-w-2xl font-light leading-relaxed">
          Service privé de coursier express à Porto-Novo. Prise en charge en moins de 10 minutes, transport sécurisé et remise en main propre sous 25 minutes chrono.
        </p>

        {/* Action Controls */}
        <div className="hero-elem mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 max-w-md sm:max-w-none">
          <button
            onClick={() => onOpenQuote()}
            className="magnetic-btn group bg-champagne text-obsidian font-semibold text-sm sm:text-base px-8 py-4 rounded-full shadow-[0_10px_35px_rgba(201,168,76,0.3)] cursor-pointer text-center"
          >
            <span className="slide-bg bg-champagne-light" />
            <span className="relative z-10 flex items-center justify-center gap-2 font-medium tracking-tight">
              <span>Demander un devis</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
            </span>
          </button>

          <a
            href="#protocole"
            className="interactive-lift inline-flex items-center justify-center gap-2 text-ivory/80 hover:text-champagne font-medium text-sm sm:text-base px-5 py-3 transition-colors text-center"
          >
            <span>Découvrir le protocole</span>
            <span className="text-champagne font-mono">→</span>
          </a>
        </div>

        {/* Authentic Telemetry Stats */}
        <div className="hero-elem mt-12 pt-8 border-t border-white/10 grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-3xl">
          <div className="flex flex-col">
            <span className="text-xs font-mono uppercase text-champagne/80 tracking-wider flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-champagne shrink-0" /> Délai Moyen
            </span>
            <span className="text-xl sm:text-2xl font-bold text-ivory font-mono mt-1">18 min</span>
          </div>

          <div className="flex flex-col">
            <span className="text-xs font-mono uppercase text-champagne/80 tracking-wider flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-champagne shrink-0" /> Garantie Sécurité
            </span>
            <span className="text-xl sm:text-2xl font-bold text-ivory font-mono mt-1">100% Intègre</span>
          </div>

          <div className="flex flex-col">
            <span className="text-xs font-mono uppercase text-champagne/80 tracking-wider flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-champagne shrink-0" /> Territoire
            </span>
            <span className="text-xl sm:text-2xl font-bold text-ivory font-mono mt-1">Porto-Novo</span>
          </div>

          <div className="flex flex-col">
            <span className="text-xs font-mono uppercase text-champagne/80 tracking-wider flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-champagne shrink-0" /> Service
            </span>
            <span className="text-xl sm:text-2xl font-bold text-champagne font-mono mt-1">24h / 24</span>
          </div>
        </div>

      </div>
    </section>
  );
}
