import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu, X, Phone, ShieldCheck, Sparkles } from 'lucide-react';

export default function Navbar({ onOpenQuote }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-4 sm:top-5 left-1/2 -translate-x-1/2 z-50 w-[94%] max-w-5xl">
      <div
        className={`w-full transition-all duration-500 rounded-full px-4 sm:px-6 py-2.5 sm:py-3.5 flex items-center justify-between gap-2 sm:gap-4 ${
          scrolled
            ? 'bg-[#0D0D12]/90 backdrop-blur-xl border border-champagne/30 shadow-[0_12px_40px_rgba(0,0,0,0.65)] text-ivory'
            : 'bg-[#0D0D12]/50 backdrop-blur-md border border-white/10 text-ivory'
        }`}
      >
        {/* Brand Logo with clear breathing space */}
        <a href="#" className="flex items-center gap-2 group shrink-0">
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-champagne/20 border border-champagne flex items-center justify-center text-champagne group-hover:scale-105 transition-transform duration-300">
            <span className="font-serif italic font-bold text-sm sm:text-base">B</span>
          </div>
          <span className="font-bold tracking-tight text-base sm:text-lg text-ivory">
            Big<span className="text-champagne font-light italic font-serif">Express</span>
          </span>
          <span className="hidden lg:inline-block text-[10px] font-mono tracking-widest uppercase bg-champagne/10 text-champagne px-2 py-0.5 rounded-full border border-champagne/20">
            Porto-Novo
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-7 text-xs sm:text-sm font-medium text-ivory/80">
          <a href="#services" className="interactive-lift hover:text-champagne transition-colors">
            Services
          </a>
          <a href="#philosophie" className="interactive-lift hover:text-champagne transition-colors">
            Philosophie
          </a>
          <a href="#protocole" className="interactive-lift hover:text-champagne transition-colors">
            Protocole
          </a>
          <a href="#tarifs" className="interactive-lift hover:text-champagne transition-colors">
            Tarifs
          </a>
        </nav>

        {/* Right Action Area */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* CTA Button: adapts label on mobile so it never collides with logo */}
          <button
            onClick={() => onOpenQuote()}
            className="magnetic-btn group bg-champagne hover:bg-champagne-light text-obsidian font-semibold text-xs sm:text-sm px-3.5 py-2 sm:px-5 sm:py-2.5 rounded-full shadow-lg shadow-champagne/20 cursor-pointer"
          >
            <span className="slide-bg bg-champagne-light" />
            <span className="relative z-10 flex items-center gap-1.5 font-medium tracking-tight">
              <span className="inline sm:hidden">Devis</span>
              <span className="hidden sm:inline">Demander un devis</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </button>

          {/* Mobile menu toggle button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full bg-white/5 hover:bg-white/10 text-ivory hover:text-champagne transition-colors"
            aria-label="Menu de navigation"
          >
            {mobileMenuOpen ? <X className="w-4 h-4 text-champagne" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Refined & Compact Mobile Dropdown Card (Fixes the excessive empty space issue) */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full mt-2.5 left-0 right-0 bg-[#0D0D12]/95 backdrop-blur-2xl border border-champagne/30 rounded-3xl p-5 shadow-[0_20px_50px_rgba(0,0,0,0.8)] text-ivory flex flex-col gap-3 animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs font-mono text-champagne">
            <span>MENU RAPIDE // BIGEXPRESS</span>
            <span>PORTO-NOVO 24/7</span>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs font-medium">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-xl bg-white/5 hover:bg-champagne hover:text-obsidian transition-colors text-center"
            >
              Services
            </a>
            <a
              href="#philosophie"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-xl bg-white/5 hover:bg-champagne hover:text-obsidian transition-colors text-center"
            >
              Philosophie
            </a>
            <a
              href="#protocole"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-xl bg-white/5 hover:bg-champagne hover:text-obsidian transition-colors text-center"
            >
              Protocole
            </a>
            <a
              href="#tarifs"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-xl bg-white/5 hover:bg-champagne hover:text-obsidian transition-colors text-center"
            >
              Tarifs
            </a>
          </div>

          <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-ivory/60">
            <div className="flex items-center gap-1.5 text-champagne">
              <Phone className="w-3.5 h-3.5" />
              <span>Assistance : +229 01 XX XX XX</span>
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="text-xs font-bold text-champagne underline"
            >
              Faire un devis →
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
