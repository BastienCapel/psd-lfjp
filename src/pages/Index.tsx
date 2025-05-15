
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col font-raleway">
      <Navbar showLogo={true} />
      <Hero title="Lycée Français Jacques Prévert" subtitle="Excellence, Respect, Créativité, Persévérance, Civisme" />
      
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-playfair font-bold text-french-blue mb-12 text-center animate-fade-in">
            Bienvenue sur le site du plan stratégique de développement du Lycée Français Jacques Prévert
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-delay-1">
              <CardContent className="p-8">
                <h3 className="text-2xl font-playfair font-bold mb-4 text-french-blue">Vision, Missions et Valeurs</h3>
                <p className="text-gray-600 mb-6">
                  Découvrez notre vision, nos missions éducatives et les valeurs qui guident quotidiennement notre 
                  établissement dans la formation des citoyens du monde.
                </p>
                <Link to="/vision-missions-valeurs" className="inline-flex items-center text-french-blue font-medium hover:underline group">
                  Découvrir 
                  <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-delay-2">
              <CardContent className="p-8">
                <h3 className="text-2xl font-playfair font-bold mb-4 text-french-blue">Plan Stratégique de Développement</h3>
                <p className="text-gray-600 mb-6">
                  Consultez notre Plan Stratégique de Développement 2026-2030 qui détaille nos objectifs, 
                  actions et indicateurs pour les années à venir.
                </p>
                <Link to="/plan-strategique" className="inline-flex items-center text-french-blue font-medium hover:underline group">
                  Consulter 
                  <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;
