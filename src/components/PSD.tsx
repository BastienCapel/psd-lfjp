
import React from 'react';
import { Link } from 'react-router-dom';
import PSDIntroduction from './PSDIntroduction';
import PSDTabs from './PSDTabs';

const PSD = () => {
  return <section id="psd" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-playfair font-bold text-french-blue mb-6 text-center">
            Bienvenue sur le site du plan stratégique de développement du Lycée Français Jacques Prévert de Saly
          </h2>
          
          <div className="text-center mb-12">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Actions prioritaires</h3>
            <p className="text-lg font-raleway text-gray-700 mb-2">
              Déploiement du plan « Section Internationale et BFI » (2026-2033)
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
              <Link 
                to="/section-internationale-bfi" 
                className="inline-flex items-center text-french-blue hover:text-blue-700 underline font-medium"
              >
                → Découvrir le plan de déploiement Section Internationale et BFI
              </Link>
              <Link 
                to="/plan-deploiement-detaille" 
                className="inline-flex items-center text-french-blue hover:text-blue-700 underline font-medium"
              >
                → Accéder au plan d'action détaillé
              </Link>
            </div>
            <div className="flex justify-center">
              <Link 
                to="/deploiement-plan-section-internationale-bfi" 
                className="inline-flex items-center text-french-blue hover:text-blue-700 underline font-medium"
              >
                → Déploiement du plan « Section Internationale et BFI » (2026-2033)
              </Link>
            </div>
          </div>

          <PSDIntroduction />
          <PSDTabs />
        </div>
      </div>
    </section>;
};

export default PSD;
