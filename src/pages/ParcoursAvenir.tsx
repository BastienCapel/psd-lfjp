import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Home, Construction } from 'lucide-react';

const ParcoursAvenir = () => {
  return (
    <div className="min-h-screen flex flex-col font-raleway bg-slate-50">
      <Navbar showLogo={true} />

      <header className="bg-gradient-to-r from-blue-700 to-french-blue text-white py-20 md:py-28">
        <div className="container mx-auto px-6">
          <p className="uppercase tracking-[0.35em] text-xs md:text-sm text-white/80">
            Plan stratégique 2026-2030 · Axe 4
          </p>
          <h1 className="mt-4 text-3xl md:text-5xl font-playfair font-bold">Parcours Avenir</h1>
          <p className="mt-4 max-w-3xl text-base md:text-lg text-white/80">
            Cette page sera prochainement enrichie pour présenter en détail le Parcours Avenir au LFJP.
          </p>
        </div>
      </header>

      <div className="container mx-auto px-6 py-6 flex flex-wrap gap-3">
        <Button variant="outline" asChild>
          <Link to="/plan-strategique" state={{ axe: 'axe4' }}>
            <ArrowLeft className="mr-2 h-4 w-4" aria-hidden />
            Retour au plan stratégique
          </Link>
        </Button>
        <Button variant="outline" asChild>
          <Link to="/">
            <Home className="mr-2 h-4 w-4" aria-hidden />
            Accueil
          </Link>
        </Button>
      </div>

      <main className="flex-1">
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="rounded-3xl border border-dashed border-blue-200 bg-white/70 px-8 py-16 text-center shadow-sm">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                <Construction className="h-8 w-8" aria-hidden />
              </div>
              <h2 className="mt-6 text-2xl font-playfair font-bold text-french-blue">Page en construction</h2>
              <p className="mt-4 text-base text-slate-600">
                Merci de votre patience. Les contenus liés à l&apos;orientation et aux dispositifs du Parcours Avenir
                seront bientôt disponibles.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ParcoursAvenir;
