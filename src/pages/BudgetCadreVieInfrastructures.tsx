import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BudgetCadreVieInfrastructures from '../components/BudgetCadreVieInfrastructures';
import { Button } from '../components/ui/button';
import { ArrowLeft, Home, BarChart3 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BudgetCadreVieInfrastructuresPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50 font-raleway">
      <Navbar showLogo={true} />

      <header className="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-900 py-14 text-white shadow-lg md:py-20">
        <div className="container mx-auto flex max-w-6xl flex-col gap-6 px-6 lg:px-10" aria-label="Fil d'Ariane">
          <nav className="flex flex-wrap items-center gap-3 text-sm text-slate-200/90" aria-label="Navigation secondaire">
            <Button
              variant="ghost"
              className="px-0 text-slate-200 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              onClick={() => navigate(-1)}
            >
              <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
              Retour
            </Button>
            <span className="text-slate-400" aria-hidden="true">
              •
            </span>
            <Button
              variant="ghost"
              className="px-0 text-slate-200 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              onClick={() => navigate('/')}
            >
              <Home className="mr-2 h-4 w-4" aria-hidden="true" />
              Accueil
            </Button>
          </nav>

          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between" role="presentation">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-slate-300">Axe 1 · Cadre de vie & infrastructures</p>
              <h1 className="text-3xl font-playfair font-bold md:text-4xl">Budget d’amélioration</h1>
              <p className="max-w-3xl text-lg text-slate-200/90">
                Tableau de bord financier et projection 2026–2030 pour les investissements de l’axe
                « Cadre de vie & infrastructures ».
              </p>
            </div>
            <div className="flex items-center gap-3" aria-label="Période budgétaire">
              <div className="flex items-center gap-3 rounded-xl border border-white/20 bg-white/10 px-4 py-3 backdrop-blur">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10" aria-hidden="true">
                  <BarChart3 className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-200">Période</p>
                  <p className="text-lg font-semibold">2026 – 2030</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main id="budget-cadre-vie" className="flex-1" role="main">
        <div className="container mx-auto max-w-6xl px-6 py-10 lg:px-10 md:py-14">
          <div className="rounded-[28px] border border-slate-200/70 bg-white px-4 pb-6 pt-2 shadow-lg shadow-slate-200/40 md:px-6 md:pb-8 md:pt-4">
            <BudgetCadreVieInfrastructures />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BudgetCadreVieInfrastructuresPage;
