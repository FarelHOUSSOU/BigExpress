import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShieldCheck, MapPin, CheckCircle, Navigation } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Protocol() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.protocol-card');

      cards.forEach((card, index) => {
        if (index < cards.length - 1) {
          ScrollTrigger.create({
            trigger: cards[index + 1],
            start: 'top 85%',
            end: 'top 20%',
            scrub: true,
            onUpdate: (self) => {
              const progress = self.progress;
              gsap.to(card, {
                scale: 1 - progress * 0.1,
                opacity: 1 - progress * 0.5,
                filter: `blur(${progress * 20}px)`,
                ease: 'power2.out',
                overwrite: 'auto',
              });
            },
          });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="protocole"
      ref={containerRef}
      className="relative bg-obsidian text-ivory py-24 md:py-32 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 mb-16">
        <span className="text-xs font-mono font-bold tracking-widest uppercase text-champagne mb-3 block">
          Notre Méthodologie
        </span>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-ivory">
          Le Protocole de Livraison.
        </h2>
        <p className="text-ivory/60 max-w-xl text-sm md:text-base font-light mt-3">
          Une succession rigoureuse de trois étapes pour garantir la sécurité et la ponctualité de vos envois à Porto-Novo.
        </p>
      </div>

      {/* Stacked Cards Container */}
      <div className="max-w-5xl mx-auto px-6 md:px-12 relative flex flex-col gap-12 md:gap-24">
        
        {/* CARTE 01 */}
        <div className="protocol-card sticky top-28 bg-[#13131A] border border-champagne/30 rounded-3rem p-8 md:p-12 shadow-[0_25px_60px_rgba(0,0,0,0.6)] backdrop-blur-2xl transition-all duration-300">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="font-mono text-xs text-champagne tracking-widest uppercase mb-3 font-semibold">
                Étape 01 // Prise en Charge
              </div>
              <h3 className="text-2xl sm:text-4xl font-serif font-bold text-ivory tracking-tight mb-4">
                Conditionnement & Scellé Sécurisé
              </h3>
              <p className="text-ivory/70 text-sm md:text-base font-light leading-relaxed mb-6">
                Chaque pli ou marchandise est emballé sous scellé de sécurité à numéro unique. Le coursier prend en charge le colis directement à votre porte avec confirmation immédiate.
              </p>
              <div className="flex flex-wrap gap-3 font-mono text-xs text-champagne/90">
                <span className="px-3 py-1.5 rounded-full bg-champagne/10 border border-champagne/20">
                  Enveloppe inviolable
                </span>
                <span className="px-3 py-1.5 rounded-full bg-champagne/10 border border-champagne/20">
                  Numérotation unique
                </span>
              </div>
            </div>

            {/* SVG Animation 1: Concentric Rings & Gears */}
            <div className="flex items-center justify-center py-6">
              <div className="relative w-64 h-64 flex items-center justify-center">
                <svg className="absolute inset-0 w-full h-full animate-[spin_30s_linear_infinite]" viewBox="0 0 200 200">
                  <circle cx="100" cy="100" r="90" fill="none" stroke="#C9A84C" strokeWidth="1" strokeDasharray="4 6" opacity="0.4" />
                  <circle cx="100" cy="100" r="75" fill="none" stroke="#C9A84C" strokeWidth="1.5" strokeDasharray="1 8" opacity="0.6" />
                </svg>

                <svg className="absolute w-44 h-44 animate-[spin_18s_linear_infinite_reverse]" viewBox="0 0 160 160">
                  <circle cx="80" cy="80" r="65" fill="none" stroke="#FAF8F5" strokeWidth="1" opacity="0.3" />
                  {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
                    <line
                      key={deg}
                      x1="80"
                      y1="10"
                      x2="80"
                      y2="18"
                      stroke="#C9A84C"
                      strokeWidth="2"
                      transform={`rotate(${deg} 80 80)`}
                    />
                  ))}
                </svg>

                <div className="relative z-10 w-24 h-24 rounded-full bg-obsidian border border-champagne flex flex-col items-center justify-center text-center shadow-[0_0_30px_rgba(201,168,76,0.25)]">
                  <span className="text-[10px] font-mono text-champagne/70 uppercase">Scellé</span>
                  <span className="font-serif italic font-bold text-lg text-champagne">N° 01</span>
                  <span className="text-[9px] font-mono text-ivory/60">CONTRÔLÉ</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CARTE 02 */}
        <div className="protocol-card sticky top-28 bg-[#13131A] border border-champagne/30 rounded-3rem p-8 md:p-12 shadow-[0_25px_60px_rgba(0,0,0,0.6)] backdrop-blur-2xl transition-all duration-300">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="font-mono text-xs text-champagne tracking-widest uppercase mb-3 font-semibold">
                Étape 02 // Acheminement
              </div>
              <h3 className="text-2xl sm:text-4xl font-serif font-bold text-ivory tracking-tight mb-4">
                Trajet Direct & Surveillance d'Itinéraire
              </h3>
              <p className="text-ivory/70 text-sm md:text-base font-light leading-relaxed mb-6">
                Le coursier emprunte les axes les plus fluides de Porto-Novo (Boulevard Lagunaire, Ouando, Tokpota). Vous êtes informé de l'avancement jusqu'au point d'arrivée.
              </p>
              <div className="flex flex-wrap gap-3 font-mono text-xs text-champagne/90">
                <span className="px-3 py-1.5 rounded-full bg-champagne/10 border border-champagne/20">
                  Itinéraire sans détour
                </span>
                <span className="px-3 py-1.5 rounded-full bg-champagne/10 border border-champagne/20">
                  Départ immédiat
                </span>
              </div>
            </div>

            {/* SVG Animation 2: Laser Scan Line */}
            <div className="flex items-center justify-center py-6">
              <div className="relative w-64 h-64 bg-black/60 rounded-2xl border border-champagne/20 p-4 overflow-hidden shadow-inner flex flex-col justify-between">
                <div className="absolute inset-0 p-4 grid grid-cols-8 grid-rows-8 gap-3 opacity-25">
                  {Array.from({ length: 64 }).map((_, i) => (
                    <div key={i} className="w-1.5 h-1.5 rounded-full bg-champagne" />
                  ))}
                </div>

                <div className="absolute left-0 right-0 h-[2px] bg-champagne shadow-[0_0_12px_#C9A84C] animate-[bounce_4s_infinite_ease-in-out]" />

                <div className="relative z-10 flex justify-between text-[10px] font-mono text-champagne">
                  <span>TRANSIT MOTO</span>
                  <span>EN COURS</span>
                </div>

                <div className="relative z-10 flex flex-col items-center justify-center py-8">
                  <div className="w-12 h-12 rounded-full bg-champagne/10 border border-champagne flex items-center justify-center text-champagne animate-pulse">
                    <Navigation className="w-6 h-6" />
                  </div>
                  <span className="mt-2 text-[11px] font-mono text-ivory/80">AXE OUANDO → CENTRE</span>
                </div>

                <div className="relative z-10 flex justify-between text-[10px] font-mono text-ivory/50">
                  <span>Porto-Novo</span>
                  <span>Direct</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CARTE 03 */}
        <div className="protocol-card sticky top-28 bg-[#13131A] border border-champagne/30 rounded-3rem p-8 md:p-12 shadow-[0_25px_60px_rgba(0,0,0,0.6)] backdrop-blur-2xl transition-all duration-300">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="font-mono text-xs text-champagne tracking-widest uppercase mb-3 font-semibold">
                Étape 03 // Remise
              </div>
              <h3 className="text-2xl sm:text-4xl font-serif font-bold text-ivory tracking-tight mb-4">
                Remise en Main Propre & Décharge
              </h3>
              <p className="text-ivory/70 text-sm md:text-base font-light leading-relaxed mb-6">
                Le colis est remis exclusivement à la personne désignée après vérification. Une preuve de livraison est transmise à l'expéditeur pour clôturer la mission en toute sérénité.
              </p>
              <div className="flex flex-wrap gap-3 font-mono text-xs text-champagne/90">
                <span className="px-3 py-1.5 rounded-full bg-champagne/10 border border-champagne/20">
                  Preuve de remise
                </span>
                <span className="px-3 py-1.5 rounded-full bg-champagne/10 border border-champagne/20">
                  Confirmation SMS / WhatsApp
                </span>
              </div>
            </div>

            {/* SVG Animation 3: ECG waveform */}
            <div className="flex items-center justify-center py-6">
              <div className="relative w-64 h-64 bg-black/60 rounded-2xl border border-champagne/20 p-5 flex flex-col justify-between overflow-hidden shadow-inner">
                <div className="flex items-center justify-between text-[10px] font-mono text-champagne">
                  <span>POINT D'ARRIVÉE</span>
                  <span className="text-emerald-400">DESTINATAIRE JOINT</span>
                </div>

                <div className="relative w-full h-24 my-auto flex items-center justify-center">
                  <svg className="w-full h-full" viewBox="0 0 240 80">
                    <path
                      d="M0,40 L40,40 L50,15 L60,65 L70,30 L80,45 L90,40 L150,40 L160,10 L170,70 L180,25 L190,50 L200,40 L240,40"
                      fill="none"
                      stroke="rgba(201, 168, 76, 0.2)"
                      strokeWidth="2"
                    />
                    <path
                      d="M0,40 L40,40 L50,15 L60,65 L70,30 L80,45 L90,40 L150,40 L160,10 L170,70 L180,25 L190,50 L200,40 L240,40"
                      fill="none"
                      stroke="#C9A84C"
                      strokeWidth="2.5"
                      strokeDasharray="80 200"
                      className="animate-[dash_3s_linear_infinite]"
                      style={{
                        filter: 'drop-shadow(0 0 6px #C9A84C)',
                      }}
                    />
                  </svg>
                </div>

                <div className="flex items-center justify-between text-[10px] font-mono text-ivory/50">
                  <span>DÉCHARGE NUMÉRIQUE</span>
                  <span className="text-champagne font-bold">100% VALIDE</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
