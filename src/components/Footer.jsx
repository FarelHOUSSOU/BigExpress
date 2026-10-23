import React from 'react';
import { ArrowUp, MapPin, Phone, Clock, FileText, Lock, ShieldCheck } from 'lucide-react';

export default function Footer({ onOpenQuote, onOpenLegal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-obsidian text-ivory rounded-t-[2.5rem] sm:rounded-t-[4rem] pt-14 sm:pt-20 pb-16 sm:pb-12 border-t border-champagne/20 relative overflow-hidden">
      {/* Decorative radial champagne glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-champagne/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 relative z-10">
        
        {/* Main Grid: 2 columns on mobile, 4 columns on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 sm:gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Col - Full width on mobile for maximum impact */}
          <div className="col-span-2 lg:col-span-2 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-8 h-8 rounded-full bg-champagne/20 border border-champagne flex items-center justify-center text-champagne">
                  <span className="font-serif italic font-bold text-base">B</span>
                </div>
                <span className="font-bold tracking-tight text-2xl text-ivory">
                  Big<span className="text-champagne font-light italic font-serif">Express</span>
                </span>
              </div>
              <p className="text-ivory/70 text-xs sm:text-sm max-w-sm font-light leading-relaxed mb-5">
                Service de livraison d'élite et transport express urbain à Porto-Novo. Célérité, intégrité matérielle et disponibilité continue 24h/24.
              </p>
            </div>

            {/* Operational Status Dot */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-black/60 border border-emerald-500/30 text-xs font-mono text-ivory/80 w-fit mb-4 sm:mb-0">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-emerald-400 font-semibold text-[11px] sm:text-xs">Système Opérationnel</span>
              <span className="text-ivory/40">|</span>
              <span className="text-ivory/60 text-[11px] sm:text-xs">Porto-Novo 24/7</span>
            </div>
          </div>

          {/* Navigation Col */}
          <div className="col-span-1">
            <h4 className="font-mono text-xs text-champagne uppercase tracking-widest mb-3 sm:mb-4 font-semibold">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-light text-ivory/75">
              <li>
                <a href="#services" className="interactive-lift hover:text-champagne transition-colors block">Services</a>
              </li>
              <li>
                <a href="#philosophie" className="interactive-lift hover:text-champagne transition-colors block">Philosophie</a>
              </li>
              <li>
                <a href="#protocole" className="interactive-lift hover:text-champagne transition-colors block">Protocole</a>
              </li>
              <li>
                <a href="#tarifs" className="interactive-lift hover:text-champagne transition-colors block">Tarifs</a>
              </li>
            </ul>
          </div>

          {/* Dedicated Legal & Confidentiality Column - Clearly visible on mobile! */}
          <div className="col-span-1">
            <h4 className="font-mono text-xs text-champagne uppercase tracking-widest mb-3 sm:mb-4 font-semibold">
              Légal & Sécurité
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-light text-ivory/75">
              <li>
                <button
                  type="button"
                  onClick={() => onOpenLegal('cgv')}
                  className="interactive-lift hover:text-champagne text-left transition-colors flex items-center gap-1.5 text-ivory/85 hover:underline cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5 text-champagne shrink-0" />
                  <span>Conditions Générales</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenLegal('privacy')}
                  className="interactive-lift hover:text-champagne text-left transition-colors flex items-center gap-1.5 text-ivory/85 hover:underline cursor-pointer"
                >
                  <Lock className="w-3.5 h-3.5 text-champagne shrink-0" />
                  <span>Charte Confidentialité</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenQuote()}
                  className="interactive-lift hover:text-champagne text-left transition-colors flex items-center gap-1.5 text-champagne cursor-pointer"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-champagne shrink-0" />
                  <span>Demander un devis</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Zones & Contact Col (Combined or grid aligned) */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-1">
            <h4 className="font-mono text-xs text-champagne uppercase tracking-widest mb-3 sm:mb-4 font-semibold">
              Contact & Permanence
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm font-light text-ivory/75">
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-champagne shrink-0" />
                <span>Porto-Novo, Bénin</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-champagne shrink-0" />
                <span>24h/24 — 7j/7</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-champagne shrink-0" />
                <span className="font-mono text-champagne font-semibold">+229 01 XX XX XX</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Mobile Dedicated Legal Quick-Access Card */}
        <div className="my-6 p-4 rounded-2xl bg-white/5 border border-champagne/25 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-5 h-5 text-champagne shrink-0" />
            <div className="text-xs text-ivory/85">
              <span className="font-semibold text-ivory">Transparence & Protection : </span>
              Consultez nos engagements de transport et de confidentialité des envois.
            </div>
          </div>
          <div className="flex items-center gap-2.5 shrink-0 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => onOpenLegal('cgv')}
              className="flex-1 sm:flex-none px-3.5 py-2 rounded-xl bg-champagne/15 hover:bg-champagne hover:text-obsidian text-champagne text-xs font-mono font-medium border border-champagne/30 transition-all cursor-pointer text-center"
            >
              Conditions Générales
            </button>
            <button
              type="button"
              onClick={() => onOpenLegal('privacy')}
              className="flex-1 sm:flex-none px-3.5 py-2 rounded-xl bg-champagne/15 hover:bg-champagne hover:text-obsidian text-champagne text-xs font-mono font-medium border border-champagne/30 transition-all cursor-pointer text-center"
            >
              Charte Confidentialité
            </button>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Scroll to Top */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-ivory/60">
          <div className="text-center sm:text-left text-[11px] sm:text-xs">
            © {new Date().getFullYear()} BigExpress SARL. Tous droits réservés. Livraison rapide à Porto-Novo.
          </div>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-white/10 hover:bg-champagne hover:text-obsidian text-ivory transition-all duration-300 flex items-center gap-1.5 text-xs font-mono cursor-pointer"
              aria-label="Retour en haut"
            >
              <ArrowUp className="w-4 h-4" />
              <span className="text-[11px]">Haut de page</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
