import React, { useEffect } from 'react';
import { X, ShieldCheck } from 'lucide-react';

export default function LegalModal({ isOpen, onClose, type }) {
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

  const isCGV = type === 'cgv';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-hidden">
      {/* Backdrop - tapping anywhere outside closes the modal */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-obsidian/90 backdrop-blur-xl transition-opacity cursor-pointer"
        aria-hidden="true"
      />

      {/* Modal Dialog Window: flex flex-col with max-h-[92vh] so header is ALWAYS visible on mobile */}
      <div className="relative w-full max-w-2xl bg-[#0D0D12] border border-champagne/40 rounded-[2rem] sm:rounded-3rem shadow-[0_25px_80px_rgba(0,0,0,0.9)] text-ivory z-10 flex flex-col max-h-[92vh] overflow-hidden">
        
        {/* Sticky Top Header Bar - ALWAYS VISIBLE on all mobile & desktop screens */}
        <div className="shrink-0 flex items-center justify-between px-5 sm:px-8 py-4 sm:py-5 border-b border-white/10 bg-obsidian/95 backdrop-blur-md">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-champagne" />
            <span className="text-xs sm:text-sm font-mono text-champagne font-bold uppercase tracking-wider">
              {isCGV ? "Conditions Générales" : "Charte Confidentialité"}
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

        {/* Modal Title Banner */}
        <div className="px-5 sm:px-8 pt-4 pb-3 shrink-0 border-b border-white/5">
          <h3 className="text-lg sm:text-2xl font-serif font-bold text-ivory tracking-tight">
            {isCGV ? "Conditions Générales de Transport & Service" : "Charte de Confidentialité & Données"}
          </h3>
          <p className="text-xs text-ivory/60 mt-0.5 font-mono">
            BigExpress SARL • Porto-Novo, République du Bénin
          </p>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto px-5 sm:px-8 py-5 space-y-5 text-xs sm:text-sm font-light text-ivory/80 leading-relaxed custom-scrollbar flex-1">
          {isCGV ? (
            <>
              <div>
                <h4 className="text-xs sm:text-sm font-mono font-bold text-champagne uppercase tracking-wider mb-1.5">
                  Article 1 — Objet & Champ d'Application
                </h4>
                <p>
                  Les présentes conditions régissent les services de transport express de courriers, colis, plis et marchandises légères opérés par <strong>BigExpress</strong> dans la ville de Porto-Novo et ses environs (arrondissements d'Ouando, Djassin, Avakpa, Catchi, Tokpota et liaison directe avec Cotonou).
                </p>
              </div>

              <div>
                <h4 className="text-xs sm:text-sm font-mono font-bold text-champagne uppercase tracking-wider mb-1.5">
                  Article 2 — Délais & Engagements de Livraison
                </h4>
                <p>
                  BigExpress met tout en œuvre pour assurer une prise en charge rapide dès réception de l'appel ou de la réservation, avec un délai moyen de remise inférieur à 25 minutes pour les trajets intra-muros, sous réserve des conditions météorologiques et de circulation.
                </p>
              </div>

              <div>
                <h4 className="text-xs sm:text-sm font-mono font-bold text-champagne uppercase tracking-wider mb-1.5">
                  Article 3 — Conditionnement & Produits Autorisés
                </h4>
                <p>
                  L'expéditeur s'assure que le contenu est convenablement emballé. Les produits dangereux, illicites, armes ou substances prohibées par la législation béninoise sont formellement exclus du transport.
                </p>
              </div>

              <div>
                <h4 className="text-xs sm:text-sm font-mono font-bold text-champagne uppercase tracking-wider mb-1.5">
                  Article 4 — Tarification & Règlements
                </h4>
                <p>
                  Le prix de chaque prestation est communiqué en amont. Les règlements s'effectuent par Mobile Money (MTN / Moov), espèces lors de la prise en charge ou remise, ou par virement pour les contrats professionnels.
                </p>
              </div>

              <div>
                <h4 className="text-xs sm:text-sm font-mono font-bold text-champagne uppercase tracking-wider mb-1.5">
                  Article 5 — Responsabilité & Garantie Intégrité
                </h4>
                <p>
                  BigExpress assume l'entière responsabilité des objets transportés entre le moment de la prise en charge et celui de la remise au destinataire. En cas d'avarie constatée, une indemnisation rapide est instruite.
                </p>
              </div>
            </>
          ) : (
            <>
              <div>
                <h4 className="text-xs sm:text-sm font-mono font-bold text-champagne uppercase tracking-wider mb-1.5">
                  Article 1 — Informations Collectées
                </h4>
                <p>
                  Pour l'exécution des livraisons, BigExpress recueille uniquement les données strictement nécessaires : noms des contacts, adresses d'enlèvement et de livraison, et numéros de téléphone pour la coordination des coursiers.
                </p>
              </div>

              <div>
                <h4 className="text-xs sm:text-sm font-mono font-bold text-champagne uppercase tracking-wider mb-1.5">
                  Article 2 — Secret des Correspondances & Discrétion
                </h4>
                <p>
                  Tous les coursiers sont tenus au respect strict de la confidentialité. Le contenu des plis fermés et colis ne fait l'objet d'aucune inspection.
                </p>
              </div>

              <div>
                <h4 className="text-xs sm:text-sm font-mono font-bold text-champagne uppercase tracking-wider mb-1.5">
                  Article 3 — Protection & Non-Cession des Données
                </h4>
                <p>
                  Vos coordonnées ne sont jamais vendues, cédées ou transmises à des régies publicitaires. Elles servent exclusivement au suivi logistique de vos courses.
                </p>
              </div>

              <div>
                <h4 className="text-xs sm:text-sm font-mono font-bold text-champagne uppercase tracking-wider mb-1.5">
                  Article 4 — Vos Droits
                </h4>
                <p>
                  Vous pouvez demander la modification ou la suppression de vos coordonnées de notre carnet de livraison sur simple demande téléphonique ou par message au service client.
                </p>
              </div>
            </>
          )}
        </div>

        {/* Bottom Persistent Bar */}
        <div className="shrink-0 px-5 sm:px-8 py-3.5 sm:py-4 border-t border-white/10 bg-[#0D0D12] flex items-center justify-between gap-3">
          <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-mono text-champagne">
            <ShieldCheck className="w-3.5 h-3.5 text-champagne shrink-0" />
            <span className="truncate">BigExpress SARL • Service Client</span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="magnetic-btn bg-champagne text-obsidian font-bold text-xs font-mono uppercase tracking-wider px-5 py-2 sm:px-6 sm:py-2.5 rounded-full cursor-pointer hover:bg-champagne-light transition-colors shrink-0"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
}
