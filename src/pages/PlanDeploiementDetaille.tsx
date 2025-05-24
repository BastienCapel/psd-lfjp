
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PlanDeploiementDetailleContent from '../components/PlanDeploiementDetailleContent';

const PlanDeploiementDetaille = () => {
  return (
    <div className="min-h-screen flex flex-col font-raleway">
      <Navbar showLogo={true} />
      <div className="bg-gradient-to-r from-french-blue to-blue-700 text-white py-24 md:py-32">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold mb-6 opacity-0 animate-fade-in">
            PLAN DE DÉPLOIEMENT DÉTAILLÉ
          </h1>
          <p className="text-xl md:text-2xl font-raleway font-light max-w-3xl opacity-0 animate-fade-in-delay-1">
            Section Internationale Américaine et BFI - Lycée français Jacques Prévert de Saly
          </p>
        </div>
      </div>
      <PlanDeploiementDetailleContent />
      <Footer />
    </div>
  );
};

export default PlanDeploiementDetaille;
