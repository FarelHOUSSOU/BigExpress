import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Philosophy from './components/Philosophy';
import Protocol from './components/Protocol';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';
import LegalModal from './components/LegalModal';

export default function App() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('Urbain Immédiat');
  const [isLegalOpen, setIsLegalOpen] = useState(false);
  const [legalType, setLegalType] = useState('cgv'); // 'cgv' | 'privacy'

  const handleOpenQuote = (plan = 'Urbain Immédiat') => {
    setSelectedPlan(plan);
    setIsQuoteOpen(true);
  };

  const handleCloseQuote = () => {
    setIsQuoteOpen(false);
  };

  const handleOpenLegal = (type) => {
    setLegalType(type);
    setIsLegalOpen(true);
  };

  const handleCloseLegal = () => {
    setIsLegalOpen(false);
  };

  return (
    <div className="relative min-h-screen bg-ivory text-obsidian selection:bg-champagne selection:text-obsidian overflow-x-hidden">
      {/* Floating Island Navigation */}
      <Navbar onOpenQuote={() => handleOpenQuote('Urbain Immédiat')} />

      {/* Main Sections */}
      <main>
        {/* Section B: Hero "Le Plan d'Ouverture" */}
        <Hero onOpenQuote={() => handleOpenQuote('Urbain Immédiat')} />

        {/* Section C: Fonctionnalités "Artefacts Fonctionnels Interactifs" */}
        <Features />

        {/* Section D: Philosophie "Le Manifeste" */}
        <Philosophy />

        {/* Section E: Protocole "Archive Empilée Sticky" */}
        <Protocol />

        {/* Section F: Adhésion / Tarification */}
        <Pricing onOpenQuote={handleOpenQuote} />
      </main>

      {/* Section G: Pied de page */}
      <Footer
        onOpenQuote={() => handleOpenQuote('Urbain Immédiat')}
        onOpenLegal={handleOpenLegal}
      />

      {/* Interactive Quote Modal Dialog */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={handleCloseQuote}
        defaultPlan={selectedPlan}
      />

      {/* Interactive Legal Modals (CGV & Charte de Confidentialité) */}
      <LegalModal
        isOpen={isLegalOpen}
        onClose={handleCloseLegal}
        type={legalType}
      />
    </div>
  );
}
