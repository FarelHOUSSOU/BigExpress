import React, { useState, useEffect } from 'react';
import { Layers, Terminal, Calendar, CheckCircle2 } from 'lucide-react';

export default function Features() {
  /* =====================================================================
     CARTE 1 : "Mélangeur Diagnostique" (Argument : Livraison Rapide)
     ===================================================================== */
  const [shufflerCards, setShufflerCards] = useState([
    {
      id: 1,
      title: "Course Éclair Porto-Novo",
      time: "< 20 MIN",
      desc: "Prise en charge prioritaire pour plis urgents, documents juridiques et petits colis partout en ville.",
      tag: "INTRA-MUROS",
    },
    {
      id: 2,
      title: "Navette Dédiée Cotonou ↔ Porto-Novo",
      time: "40 MIN DIRECT",
      desc: "Liaison expresse directe entre les deux capitales sans groupage ni arrêts intermédiaires.",
      tag: "INTER-URBAIN",
    },
    {
      id: 3,
      title: "Départ Immédiat d'Urgence",
      time: "DÉPART < 5 MIN",
      desc: "Affectation instantanée du coursier le plus proche de votre adresse d'enlèvement.",
      tag: "URGENCE ABSOLUE",
    },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setShufflerCards((prev) => {
        const copy = [...prev];
        const last = copy.pop();
        copy.unshift(last);
        return copy;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  /* =====================================================================
     CARTE 2 : "Machine à Écrire Télémétrie" (Argument : Service Professionnel)
     ===================================================================== */
  const telemetryLogs = [
    "[14:12] Prise en charge confirmée au quartier Ouando",
    "[14:15] Pli conditionné sous scellé de sécurité numéroté #BX-481",
    "[14:21] En transit moto vers Carrefour Cinquantenaire",
    "[14:29] Arrivée sur site à Porto-Novo Centre",
    "[14:32] Remise en main propre effectuée avec décharge numérique",
    "[STATUT] Mission terminée avec succès — Zéro retard"
  ];

  const [activeLogIndex, setActiveLogIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullText = telemetryLogs[activeLogIndex];
    let timer;

    if (!isDeleting) {
      if (displayedText.length < currentFullText.length) {
        timer = setTimeout(() => {
          setDisplayedText(currentFullText.slice(0, displayedText.length + 1));
        }, 30);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2400);
      }
    } else {
      if (displayedText.length > 0) {
        timer = setTimeout(() => {
          setDisplayedText(currentFullText.slice(0, displayedText.length - 2));
        }, 15);
      } else {
        setIsDeleting(false);
        setActiveLogIndex((prev) => (prev + 1) % telemetryLogs.length);
      }
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, activeLogIndex]);

  /* =====================================================================
     CARTE 3 : "Planificateur Protocole Curseur" (Argument : Disponible 24/24)
     ===================================================================== */
  const daysOfWeek = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
  const fullDays = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
  const [selectedDayIndex, setSelectedDayIndex] = useState(1);
  const [cursorPos, setCursorPos] = useState({ x: 30, y: 40 });
  const [isClicking, setIsClicking] = useState(false);
  const [savedStatus, setSavedStatus] = useState(false);

  useEffect(() => {
    const sequence = () => {
      const targetIdx = Math.floor(Math.random() * 7);
      const stepX = 14 + targetIdx * 12;
      setCursorPos({ x: stepX, y: 38 });

      setTimeout(() => {
        setIsClicking(true);
        setSelectedDayIndex(targetIdx);

        setTimeout(() => {
          setIsClicking(false);

          setTimeout(() => {
            setCursorPos({ x: 82, y: 76 });

            setTimeout(() => {
              setIsClicking(true);
              setSavedStatus(true);

              setTimeout(() => {
                setIsClicking(false);
                setTimeout(() => setSavedStatus(false), 1200);
              }, 400);
            }, 600);
          }, 500);
        }, 300);
      }, 700);
    };

    const loop = setInterval(sequence, 4000);
    sequence();
    return () => clearInterval(loop);
  }, []);

  return (
    <section id="services" className="py-24 md:py-32 bg-ivory text-obsidian relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-champagne-dark mb-3 block">
              Nos Piliers de Service
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-obsidian">
              La Précision en Trois Actes.
            </h2>
          </div>
          <p className="text-slateCustom max-w-md text-sm md:text-base font-light leading-relaxed">
            Une infrastructure pensée pour les entreprises et particuliers qui ne peuvent pas se permettre d'attendre à Porto-Novo.
          </p>
        </div>

        {/* 3 Interactive Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* CARTE 1 : Le Mélangeur Diagnostique */}
          <div className="bg-white/90 backdrop-blur-md border border-obsidian/10 rounded-2rem p-7 md:p-8 shadow-[0_15px_35px_rgba(13,13,18,0.06)] flex flex-col justify-between min-h-[460px]">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-2xl bg-obsidian text-champagne flex items-center justify-center shadow-md">
                  <Layers className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono tracking-wider uppercase text-slateCustom font-semibold">
                  Temps Réel
                </span>
              </div>
              <h3 className="text-xl font-bold text-obsidian tracking-tight">
                Livraison Ultra-Rapide
              </h3>
              <p className="text-xs text-slateCustom/80 mt-1 mb-6">
                Chaque type de course est orienté vers l'itinéraire le plus direct dans la ville.
              </p>
            </div>

            {/* Shuffler Stack */}
            <div className="relative h-60 w-full overflow-hidden flex items-center justify-center">
              {shufflerCards.map((card, index) => {
                const isTop = index === 0;
                const isSecond = index === 1;

                return (
                  <div
                    key={card.id}
                    className="absolute w-full rounded-2xl p-5 border transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
                    style={{
                      transform: isTop
                        ? 'translateY(0) scale(1)'
                        : isSecond
                        ? 'translateY(22px) scale(0.94)'
                        : 'translateY(44px) scale(0.88)',
                      zIndex: 30 - index * 10,
                      opacity: isTop ? 1 : isSecond ? 0.75 : 0.45,
                      backgroundColor: isTop ? '#0D0D12' : '#1A1A24',
                      color: '#FAF8F5',
                      borderColor: isTop ? '#C9A84C' : 'rgba(255,255,255,0.08)',
                      boxShadow: isTop ? '0 12px 30px rgba(0,0,0,0.3)' : 'none',
                    }}
                  >
                    <div className="flex items-center justify-between text-xs font-mono mb-2">
                      <span className="text-champagne font-bold">{card.tag}</span>
                      <span className="text-ivory/70">{card.time}</span>
                    </div>
                    <div className="font-semibold text-sm text-ivory tracking-tight">
                      {card.title}
                    </div>
                    <p className="text-[11px] text-ivory/70 mt-1.5 leading-snug">
                      {card.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="flex items-center justify-between text-[11px] font-mono text-slateCustom/70 pt-4 border-t border-obsidian/5">
              <span>Prise en charge</span>
              <span className="text-champagne-dark font-semibold">&lt; 10 min après appel</span>
            </div>
          </div>

          {/* CARTE 2 : Machine à Écrire Télémétrie */}
          <div className="bg-obsidian text-ivory border border-champagne/25 rounded-2rem p-7 md:p-8 shadow-[0_20px_45px_rgba(0,0,0,0.35)] flex flex-col justify-between min-h-[460px] relative overflow-hidden">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-2xl bg-champagne/20 text-champagne border border-champagne/40 flex items-center justify-center">
                  <Terminal className="w-5 h-5" />
                </div>
                <div className="flex items-center gap-2 text-emerald-400 text-[11px] font-mono uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Traçabilité Active</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-ivory tracking-tight">
                Service Professionnel & Scellé
              </h3>
              <p className="text-xs text-ivory/60 mt-1 mb-6">
                Coursiers identifiés, respect des consignes et confirmation de livraison à chaque étape.
              </p>
            </div>

            {/* Typewriter Window */}
            <div className="bg-black/60 rounded-xl p-4 border border-white/10 font-mono text-xs flex-1 flex flex-col justify-between min-h-[180px] shadow-inner">
              <div className="flex items-center justify-between text-[10px] text-ivory/40 pb-2 border-b border-white/5">
                <span>JOURNAL DE BORD // EN DIRECT</span>
                <span className="text-champagne">PORTO-NOVO</span>
              </div>

              <div className="py-3 flex-1">
                <p className="text-champagne-light leading-relaxed font-mono text-[11px] sm:text-xs break-all sm:break-words">
                  {displayedText}
                  <span className="inline-block w-2 h-4 bg-champagne ml-1 animate-pulse align-middle" />
                </p>
              </div>

              <div className="pt-2 border-t border-white/5 text-[10px] text-ivory/50 flex items-center justify-between">
                <span>Agent assermenté</span>
                <span className="text-emerald-400">100% Intégrité</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-[11px] font-mono text-ivory/50 pt-4 border-t border-white/10 mt-4">
              <span>Liaison régulation</span>
              <span className="text-champagne">Directe</span>
            </div>
          </div>

          {/* CARTE 3 : Planificateur Protocole Curseur */}
          <div className="bg-white/90 backdrop-blur-md border border-obsidian/10 rounded-2rem p-7 md:p-8 shadow-[0_15px_35px_rgba(13,13,18,0.06)] flex flex-col justify-between min-h-[460px] relative">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-2xl bg-obsidian text-champagne flex items-center justify-center shadow-md">
                  <Calendar className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono tracking-wider uppercase text-slateCustom font-semibold">
                  7 Jours / 7
                </span>
              </div>
              <h3 className="text-xl font-bold text-obsidian tracking-tight">
                Disponibilité 24h/24
              </h3>
              <p className="text-xs text-slateCustom/80 mt-1 mb-6">
                Réservation immédiate ou programmation de courses régulières de jour comme de nuit.
              </p>
            </div>

            {/* Scheduler Grid */}
            <div className="relative bg-ivory rounded-2xl p-5 border border-obsidian/10 shadow-inner h-56 flex flex-col justify-between overflow-hidden">
              <div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-slateCustom/70 mb-2 flex justify-between">
                  <span>Journée :</span>
                  <span className="font-bold text-obsidian font-mono">
                    {fullDays[selectedDayIndex]} • 24h/24
                  </span>
                </div>

                <div className="grid grid-cols-7 gap-1.5">
                  {daysOfWeek.map((day, idx) => {
                    const isSelected = selectedDayIndex === idx;
                    return (
                      <div
                        key={idx}
                        className={`py-2 rounded-xl text-center text-xs font-mono font-bold transition-all duration-200 border ${
                          isSelected
                            ? 'bg-champagne text-obsidian border-champagne shadow-sm scale-105'
                            : 'bg-white text-slateCustom border-obsidian/10'
                        }`}
                      >
                        {day}
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="flex items-center justify-between gap-3 pt-3 border-t border-obsidian/10">
                <div className="flex flex-col">
                  <span className="text-[9px] font-mono text-slateCustom/70 uppercase">Créneau</span>
                  <span className="text-xs font-bold text-obsidian font-mono">Jour & Nuit</span>
                </div>

                <div
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold font-mono flex items-center gap-1.5 transition-all duration-300 ${
                    savedStatus
                      ? 'bg-emerald-600 text-white scale-105 shadow-md'
                      : 'bg-obsidian text-champagne'
                  }`}
                >
                  {savedStatus ? (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Confirmé</span>
                    </>
                  ) : (
                    <span>Programmer</span>
                  )}
                </div>
              </div>

              {/* Cursor */}
              <div
                className="absolute pointer-events-none transition-all duration-500 ease-out z-30"
                style={{
                  left: `${cursorPos.x}%`,
                  top: `${cursorPos.y}%`,
                  transform: `translate(-2px, -2px) scale(${isClicking ? 0.9 : 1})`,
                }}
              >
                <svg
                  className="w-6 h-6 text-obsidian drop-shadow-md"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z"
                    fill="#C9A84C"
                    stroke="#0D0D12"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            <div className="flex items-center justify-between text-[11px] font-mono text-slateCustom/70 pt-4 border-t border-obsidian/5">
              <span>Permanence téléphonique</span>
              <span className="text-champagne-dark font-semibold">Ininterrompue</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
