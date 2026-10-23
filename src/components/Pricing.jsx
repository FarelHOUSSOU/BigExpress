import React from 'react';
import { Check, ArrowRight, Star, ShieldCheck } from 'lucide-react';

export default function Pricing({ onOpenQuote }) {
  const tiers = [
    {
      name: "Urbain Immédiat",
      badge: "Course Ponctuelle",
      price: "Sur Devis",
      priceSub: "à partir de 1 500 FCFA",
      desc: "Idéal pour les particuliers, commerces et professionnels ayant un besoin d'envoi immédiat à Porto-Novo.",
      features: [
        "Prise en charge sous 15 minutes",
        "Suivi par SMS / WhatsApp",
        "Assurance perte et avarie standard",
        "Paiement Mobile Money ou Espèces",
        "Couverture Porto-Novo intra-muros",
      ],
      highlight: false,
      btnText: "Demander un devis",
      btnClass: "bg-obsidian text-champagne hover:bg-slateCustom",
    },
    {
      name: "Club Performance",
      badge: "Le Plus Demandé",
      price: "Formule Pro",
      priceSub: "Facturation mensuelle consolidée",
      desc: "Pour les cabinets, entreprises, officines et dirigeants exigeant la priorité absolue et un coursier dédié.",
      features: [
        "Priorité d'attribution immédiate",
        "Coursier attitré pour vos courses régulières",
        "Liaison quotidienne Porto-Novo ↔ Cotonou",
        "Disponibilité garantie 24h/24 et 7j/7",
        "Récapitulatif mensuel et facturation unique",
        "Garantie valeur déclarée incluse",
      ],
      highlight: true,
      btnText: "Demander un devis prioritaire",
      btnClass: "bg-champagne text-obsidian hover:bg-champagne-light shadow-lg shadow-champagne/25",
    },
    {
      name: "Entreprise & Sur-Mesure",
      badge: "Haute Sécurité",
      price: "Contrat Dédié",
      priceSub: "Accompagnement personnalisé",
      desc: "Pour banques, administrations, notaires et transferts de plis sensibles nécessitant une discrétion totale.",
      features: [
        "Transport confidentiel sous scellé renforcé",
        "Engagement de confidentialité strict",
        "Régulateur dédié joignable 24h/24",
        "Attribution de coursiers seniors assermentés",
        "Preuve de remise avec décharge contresignée",
      ],
      highlight: false,
      btnText: "Consulter l'équipe",
      btnClass: "bg-obsidian text-champagne hover:bg-slateCustom",
    },
  ];

  return (
    <section id="tarifs" className="py-24 md:py-36 bg-ivory text-obsidian relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-champagne-dark mb-3 block">
            Grille Tarifaire Transparente
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-obsidian">
            Des Formules Adaptées à Vos Exigences.
          </h2>
          <p className="text-slateCustom max-w-xl mx-auto text-sm md:text-base font-light mt-3 leading-relaxed">
            Chaque course fait l'objet d'un tarif transparent sans frais cachés. Choisissez l'offre qui correspond au rythme de votre activité à Porto-Novo.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-3rem transition-all duration-300 flex flex-col justify-between ${
                tier.highlight
                  ? 'bg-obsidian text-ivory border-2 border-champagne shadow-[0_25px_60px_rgba(201,168,76,0.2)] lg:-translate-y-4 p-8 md:p-10'
                  : 'bg-white/90 text-obsidian border border-obsidian/10 shadow-[0_15px_35px_rgba(0,0,0,0.05)] p-8'
              }`}
            >
              <div>
                {/* Badge & Title */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`text-[10px] font-mono tracking-widest uppercase px-3 py-1 rounded-full font-bold ${
                      tier.highlight
                        ? 'bg-champagne text-obsidian'
                        : 'bg-obsidian/5 text-slateCustom border border-obsidian/10'
                    }`}
                  >
                    {tier.badge}
                  </span>
                  {tier.highlight && (
                    <div className="flex items-center gap-1 text-champagne text-xs font-mono">
                      <Star className="w-3.5 h-3.5 fill-champagne" />
                      <span>Recommandé</span>
                    </div>
                  )}
                </div>

                <h3 className="text-2xl font-bold tracking-tight mb-2">
                  {tier.name}
                </h3>
                <p
                  className={`text-xs leading-relaxed mb-6 font-light ${
                    tier.highlight ? 'text-ivory/70' : 'text-slateCustom'
                  }`}
                >
                  {tier.desc}
                </p>

                {/* Price Display */}
                <div className="pb-6 mb-6 border-b border-white/10">
                  <div className="font-serif italic text-3xl md:text-4xl font-bold">
                    {tier.price}
                  </div>
                  <div
                    className={`text-xs font-mono mt-1 ${
                      tier.highlight ? 'text-champagne' : 'text-slateCustom/80'
                    }`}
                  >
                    {tier.priceSub}
                  </div>
                </div>

                {/* Features List */}
                <ul className="space-y-3.5 mb-8">
                  {tier.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3 text-xs sm:text-sm font-light">
                      <div
                        className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                          tier.highlight
                            ? 'bg-champagne/20 text-champagne'
                            : 'bg-obsidian/10 text-obsidian'
                        }`}
                      >
                        <Check className="w-3 h-3" />
                      </div>
                      <span className={tier.highlight ? 'text-ivory/90' : 'text-slateCustom'}>
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onOpenQuote(tier.name)}
                className={`w-full magnetic-btn group py-4 px-6 rounded-full font-semibold text-xs sm:text-sm font-mono tracking-wider uppercase cursor-pointer ${tier.btnClass}`}
              >
                <span className="slide-bg bg-champagne-light opacity-30" />
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <span>{tier.btnText}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </span>
              </button>
            </div>
          ))}
        </div>

        {/* Reassurance banner */}
        <div className="mt-16 bg-white/70 border border-obsidian/10 rounded-2.5rem p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-obsidian text-champagne flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="font-bold text-obsidian text-base tracking-tight">
                Garantie Ponctualité & Sécurité
              </div>
              <div className="text-xs text-slateCustom font-light">
                Tous vos colis transportés à Porto-Novo bénéficient d'un engagement de résultat. En cas d'anomalie, notre service client intervient immédiatement.
              </div>
            </div>
          </div>
          <button
            onClick={() => onOpenQuote('Convention Entreprise')}
            className="w-full sm:w-auto magnetic-btn border border-obsidian px-6 py-3 rounded-full text-xs font-mono font-bold uppercase tracking-wider hover:bg-obsidian hover:text-champagne transition-colors shrink-0 text-center"
          >
            <span>Ouvrir un compte société</span>
          </button>
        </div>

      </div>
    </section>
  );
}
