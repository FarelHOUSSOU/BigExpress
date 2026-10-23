import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Philosophy() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.manifesto-line-1', {
        scrollTrigger: {
          trigger: '.manifesto-container',
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
        y: 35,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
      });

      gsap.from('.manifesto-word', {
        scrollTrigger: {
          trigger: '.manifesto-main',
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
        y: 40,
        opacity: 0,
        duration: 1.1,
        stagger: 0.04,
        ease: 'power3.out',
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const statementWords = "Nous nous concentrons sur : la distinction suprême, la rigueur d'un atelier horloger suisse et la promesse inviolable d'une livraison parfaite à Porto-Novo.".split(" ");

  return (
    <section
      id="philosophie"
      ref={containerRef}
      className="relative w-full py-28 md:py-40 bg-obsidian text-ivory overflow-hidden"
    >
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 manifesto-container">
        
        {/* Clean Editorial Eyebrow */}
        <span className="text-xs font-mono tracking-widest text-champagne uppercase block mb-10 font-semibold">
          Notre Différence
        </span>

        {/* Contrasting Statement 1 */}
        <div className="manifesto-line-1 max-w-3xl border-l-2 border-white/20 pl-6 md:pl-8 mb-16">
          <p className="text-xs md:text-sm font-mono uppercase tracking-wider text-ivory/50 mb-2">
            La plupart des services de transport se concentrent sur :
          </p>
          <p className="text-lg md:text-2xl text-ivory/70 font-light leading-relaxed">
            le volume de masse indistinct, la tolérance des retards imprévus et la banalisation des biens qui leur sont confiés.
          </p>
        </div>

        {/* Contrasting Statement 2 */}
        <div className="manifesto-main pt-4">
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif leading-[1.15] tracking-tight">
            {statementWords.map((word, i) => {
              const isAccent =
                word.includes("distinction") ||
                word.includes("suprême") ||
                word.includes("horloger") ||
                word.includes("parfaite") ||
                word.includes("Porto-Novo");

              return (
                <span
                  key={i}
                  className={`manifesto-word inline-block mr-2.5 sm:mr-3.5 my-1 ${
                    isAccent
                      ? 'text-champagne italic font-normal'
                      : 'text-ivory font-light'
                  }`}
                >
                  {word}
                </span>
              );
            })}
          </h2>
        </div>

        {/* Footnote */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-ivory/50">
          <span className="uppercase tracking-wider text-champagne">
            Charte de Célérité & de Discrétion
          </span>
          <span>Opérationnel sur l'ensemble de la commune de Porto-Novo</span>
        </div>
      </div>
    </section>
  );
}
