
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DeploiementPlanSectionInternationaleBFIContent from '../components/DeploiementPlanSectionInternationaleBFIContent';

const DeploiementPlanSectionInternationaleBFI = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col font-raleway">
      <Navbar showLogo={true} />
      <div className="bg-gradient-to-r from-french-blue to-blue-700 text-white py-24 md:py-32">
        <div className="container mx-auto px-6">
          {/* Boutons de navigation en haut */}
          <div className="flex justify-between items-center mb-8">
            <Button 
              variant="outline" 
              onClick={() => navigate('/plan-strategique')}
              className="flex items-center bg-white/10 border-white/20 text-white hover:bg-white/20"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour au plan stratégique
            </Button>
            <Button 
              variant="outline" 
              onClick={() => navigate('/')}
              className="flex items-center bg-white/10 border-white/20 text-white hover:bg-white/20"
            >
              <Home className="mr-2 h-4 w-4" />
              Accueil
            </Button>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold mb-6 opacity-0 animate-fade-in">
            DÉPLOIEMENT DU PLAN « SECTION INTERNATIONALE ET BFI »
          </h1>
          <p className="text-xl md:text-2xl font-raleway font-light max-w-3xl opacity-0 animate-fade-in-delay-1">
            Plan détaillé de déploiement progressif (2026-2033)
          </p>
        </div>
      </div>
      <DeploiementPlanSectionInternationaleBFIContent />
      <Footer />
    </div>
  );
};

export default DeploiementPlanSectionInternationaleBFI;
