import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Home } from 'lucide-react';
import RenouvellementInformatiqueTabs from '../components/RenouvellementInformatiqueTabs';

const RenouvellementMaterielInformatique = () => {
  return (
    <div className="min-h-screen flex flex-col font-raleway">
      <Navbar showLogo={true} />
      
      <div className="bg-gradient-to-r from-french-blue to-blue-700 text-white py-16 md:py-24">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold mb-6 opacity-0 animate-fade-in">
            FICHE D'INVESTISSEMENT PLURIANNUELLE
          </h1>
          <p className="text-lg md:text-xl font-raleway font-light max-w-3xl opacity-0 animate-fade-in-delay-1">
            Renouvellement du matériel informatique
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-6 py-12">
        <div className="flex space-x-4 mb-8">
          <Button variant="outline" asChild>
            <Link to="/plan-strategique">
              <ArrowLeft className="mr-2" />
              Retour au plan stratégique
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/">
              <Home className="mr-2" />
              Accueil
            </Link>
          </Button>
        </div>
        
        <RenouvellementInformatiqueTabs />
      </div>
      
      <Footer />
    </div>
  );
};

export default RenouvellementMaterielInformatique;
