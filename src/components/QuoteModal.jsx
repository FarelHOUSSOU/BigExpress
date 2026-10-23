import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Send, MapPin, Shield, ArrowLeft } from 'lucide-react';

export default function QuoteModal({ isOpen, onClose, defaultPlan }) {
  const [serviceType, setServiceType] = useState(defaultPlan || 'Urbain Immédiat');
  const [departure, setDeparture] = useState('Porto-Novo Centre / Catchi');
  const [arrival, setArrival] = useState('Ouando / Carrefour Cinquantenaire');
  const [packageType, setPackageType] = useState('Documents & Plis Importants');
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Lock background scroll when modal is open & listen to Escape key
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = 'auto';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-hidden">
      {/* Dark overlay backdrop - tapping anywhere outside closes the modal */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-obsidian/90 backdrop-blur-xl transition-opacity cursor-pointer"
        aria-hidden="true"
      />

      {/* Modal Dialog Window: flex flex-col with max-h-[92vh] so header is ALWAYS visible on mobile */}
      <div className="relative w-full max-w-xl bg-obsidian border border-champagne/40 rounded-[2rem] sm:rounded-3rem shadow-[0_25px_80px_rgba(0,0,0,0.9)] text-ivory z-10 flex flex-col max-h-[92vh] overflow-hidden">
        
        {/* Sticky Top Header Bar - ALWAYS VISIBLE on all mobile & desktop screens */}
        <div className="shrink-0 flex items-center justify-between px-5 sm:px-8 py-4 sm:py-5 border-b border-white/10 bg-obsidian/95 backdrop-blur-md">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-champagne animate-pulse" />
            <span className="text-xs sm:text-sm font-mono text-champagne font-bold uppercase tracking-wider">
              {submitted ? "Confirmation" : "Demande de Devis"}
            </span>
          </div>

          {/* Prominent High-Contrast Close Button for Mobile & Desktop */}
          <button
            type="button"
            onClick={onClose}
            className="flex items-center gap-1.5 px-3 py-1.5 sm:px-3 sm:py-1.5 rounded-full bg-white/10 hover:bg-champagne hover:text-obsidian text-ivory border border-white/20 transition-all duration-200 cursor-pointer text-xs font-mono font-semibold"
            aria-label="Fermer la fenêtre"
          >
            <X className="w-4 h-4" />
            <span className="text-xs">Fermer</span>
          </button>
        </div>

        {/* Scrollable Modal Body */}
        <div className="overflow-y-auto px-5 sm:px-8 py-5 sm:py-6 flex-1 custom-scrollbar">
          {!submitted ? (
            <div>
              {/* Header Title */}
              <div className="mb-6">
                <h3 className="text-xl sm:text-3xl font-serif font-bold text-ivory tracking-tight">
                  Estimation Immédiate à Porto-Novo
                </h3>
                <p className="text-xs sm:text-sm text-ivory/70 mt-1 font-light">
                  Renseignez vos adresses. Un coursier assermenté est mobilisé dès réception.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                {/* Service Selection */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-champagne mb-2">
                    1. Formule de Transport
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {['Urbain Immédiat', 'Club Performance', 'Entreprise Sur-Mesure'].map((name) => (
                      <button
                        type="button"
                        key={name}
                        onClick={() => setServiceType(name)}
                        className={`py-2 px-1 sm:px-3 rounded-xl sm:rounded-2xl text-[11px] sm:text-xs font-semibold text-center transition-all duration-200 border ${
                          serviceType === name
                            ? 'bg-champagne text-obsidian border-champagne shadow-md'
                            : 'bg-white/5 text-ivory/75 border-white/10 hover:border-white/20'
                        }`}
                      >
                        {name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Locations Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-ivory/70 mb-1.5 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-champagne shrink-0" /> Point d'Enlèvement
                    </label>
                    <select
                      value={departure}
                      onChange={(e) => setDeparture(e.target.value)}
                      className="w-full bg-[#181822] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-ivory focus:border-champagne focus:outline-none"
                    >
                      <option value="Porto-Novo Centre / Catchi">Porto-Novo Centre / Catchi</option>
                      <option value="Ouando / Marché & Carrefour">Ouando / Marché</option>
                      <option value="Djassin / Boulevard Lagunaire">Djassin / Boulevard Lagunaire</option>
                      <option value="Avakpa / Carrefour Cinquantenaire">Avakpa / Cinquantenaire</option>
                      <option value="Tokpota 1, 2, 3">Tokpota 1, 2, 3</option>
                      <option value="Liaison Cotonou (Départ Porto-Novo)">Liaison Cotonou</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-ivory/70 mb-1.5 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-champagne shrink-0" /> Destination de Remise
                    </label>
                    <select
                      value={arrival}
                      onChange={(e) => setArrival(e.target.value)}
                      className="w-full bg-[#181822] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-ivory focus:border-champagne focus:outline-none"
                    >
                      <option value="Ouando / Carrefour Cinquantenaire">Ouando / Cinquantenaire</option>
                      <option value="Porto-Novo Centre / Catchi">Porto-Novo Centre / Catchi</option>
                      <option value="Djassin / Boulevard Lagunaire">Djassin / Boulevard Lagunaire</option>
                      <option value="Avakpa">Avakpa</option>
                      <option value="Tokpota 1, 2, 3">Tokpota 1, 2, 3</option>
                      <option value="Liaison Cotonou (Arrivée Cotonou)">Liaison Cotonou</option>
                    </select>
                  </div>
                </div>

                {/* Package Type */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-ivory/70 mb-1.5 flex items-center gap-1.5">
                    <Shield className="w-3.5 h-3.5 text-champagne shrink-0" /> Nature de l'envoi
                  </label>
                  <select
                    value={packageType}
                    onChange={(e) => setPackageType(e.target.value)}
                    className="w-full bg-[#181822] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-ivory focus:border-champagne focus:outline-none"
                  >
                    <option value="Documents & Plis Importants">Documents & Plis Importants</option>
                    <option value="Colis Délicat ou Objet de Valeur">Colis Délicat ou Objet de Valeur</option>
                    <option value="Médicaments & Produits de Santé">Médicaments & Produits de Santé</option>
                    <option value="Colis E-commerce ou Marchandises">Colis E-commerce ou Marchandises</option>
                    <option value="Autre envoi urgent">Autre envoi urgent</option>
                  </select>
                </div>

                {/* Client Contacts */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-ivory/70 mb-1">
                      Votre Nom ou Société
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Nom complet ou entreprise"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      className="w-full bg-[#181822] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-ivory focus:border-champagne focus:outline-none placeholder:text-ivory/30"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-ivory/70 mb-1">
                      Téléphone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+229 01 XX XX XX"
                      value={clientPhone}
                      onChange={(e) => setClientPhone(e.target.value)}
                      className="w-full bg-[#181822] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-ivory focus:border-champagne focus:outline-none placeholder:text-ivory/30"
                    />
                  </div>
                </div>

                {/* Estimate Preview */}
                <div className="p-3 rounded-xl bg-white/5 border border-champagne/20 flex items-center justify-between text-xs font-mono">
                  <span className="text-ivory/70">Délai indicatif :</span>
                  <span className="text-champagne font-bold">&lt; 25 minutes</span>
                </div>

                {/* Submit & Secondary Close Buttons */}
                <div className="pt-2 flex flex-col gap-2.5">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full magnetic-btn group bg-champagne text-obsidian font-bold py-3.5 sm:py-4 rounded-full shadow-[0_10px_30px_rgba(201,168,76,0.25)] cursor-pointer"
                  >
                    <span className="slide-bg bg-champagne-light" />
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <span>Envoi en cours...</span>
                      ) : (
                        <>
                          <span>Valider la demande de devis</span>
                          <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={onClose}
                    className="w-full text-center py-2 text-xs font-mono text-ivory/60 hover:text-champagne transition-colors cursor-pointer"
                  >
                    Annuler et fermer
                  </button>
                </div>
              </form>
            </div>
          ) : (
            /* Confirmation State */
            <div className="py-6 sm:py-8 text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-champagne/20 border border-champagne flex items-center justify-center text-champagne mb-5">
                <CheckCircle className="w-8 h-8" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-ivory tracking-tight mb-2">
                Demande bien reçue
              </h3>

              <p className="text-xs sm:text-sm text-ivory/75 max-w-md font-light leading-relaxed mb-6">
                Merci <span className="text-champagne font-semibold">{clientName || 'cher client'}</span>. Notre équipe à Porto-Novo a bien enregistré votre itinéraire ({departure} → {arrival}). Nous vous contactons immédiatement sur le <span className="font-mono text-champagne font-semibold">{clientPhone}</span>.
              </p>

              <button
                type="button"
                onClick={handleReset}
                className="bg-champagne text-obsidian font-semibold px-8 py-3 rounded-full text-xs font-mono tracking-wider uppercase cursor-pointer"
              >
                Fermer la fenêtre
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
