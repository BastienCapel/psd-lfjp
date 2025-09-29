import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowLeft, Home, Construction } from 'lucide-react';

const ReseauAlumniMentorat = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col font-raleway bg-slate-50">
      <Navbar showLogo={true} />

      <main className="flex-1">
        <div className="bg-gradient-to-br from-french-blue via-blue-700 to-indigo-700 text-white py-16 md:py-24">
          <div className="container mx-auto px-6 text-center md:text-left">
            <p className="uppercase tracking-[0.35em] text-xs md:text-sm opacity-90">
              Plan stratégique 2026-2030 · Axe 4
            </p>
            <h1 className="mt-4 text-3xl md:text-5xl font-playfair font-bold">
              Réseau d'alumni et mentorat
            </h1>
            <p className="mt-4 max-w-2xl text-base md:text-lg text-blue-100">
              Cette rubrique est en cours de construction. Revenez prochainement pour découvrir le détail du dispositif.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-6 py-12 md:py-16">
          <div className="flex flex-wrap gap-3">
            <Button
              variant="outline"
              className="bg-white/80"
              onClick={() => navigate(-1)}
            >
              <ArrowLeft className="mr-2 h-4 w-4" aria-hidden /> Retour
            </Button>
            <Button variant="outline" asChild className="bg-white/80">
              <Link to="/">
                <Home className="mr-2 h-4 w-4" aria-hidden /> Accueil
              </Link>
            </Button>
          </div>

          <div className="mt-12 flex flex-col items-center justify-center rounded-3xl border border-dashed border-french-blue/40 bg-white/70 p-10 text-center shadow-sm">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-french-blue/10 text-french-blue">
              <Construction className="h-8 w-8" aria-hidden />
            </div>
            <h2 className="mt-6 text-2xl font-playfair font-semibold text-slate-900">
              Page en construction
            </h2>
            <p className="mt-3 max-w-xl text-sm md:text-base text-slate-600">
              Nos équipes travaillent à la mise en place du réseau d'alumni et du programme de mentorat. Cette page sera bientôt mise à jour avec les informations complètes.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ReseauAlumniMentorat;
