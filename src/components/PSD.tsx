import React from 'react';
import PSDIntroduction from './PSDIntroduction';
import PSDTabs from './PSDTabs';
const PSD = () => {
  return <section id="psd" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-playfair font-bold text-french-blue mb-6 text-center">
            Bienvenue sur le site du plan stratégique de développement du Lycée Français Jacques Prévert de Saly
          </h2>
          <p className="text-lg text-center font-raleway text-gray-700 mb-12">
            <a 
              href="/section-internationale-bfi" 
              className="inline-flex items-center text-french-blue hover:text-blue-700 underline font-medium ml-4"
            >
              → Découvrir le plan de déploiement Section Internationale et BFI
            </a>
          </p>

          <PSDIntroduction />
          <PSDTabs />
        </div>
      </div>
    </section>;
};

export default PSD;
