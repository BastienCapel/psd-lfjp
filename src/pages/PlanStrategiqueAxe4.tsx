import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PSDAxe4 from '../components/PSDAxe4';
import BackToTop from '../components/BackToTop';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Home, LayoutDashboard } from 'lucide-react';

const PAGE_TITLE = 'Axe 4 – Façonner les réussites | PSD LFJP';

const PlanStrategiqueAxe4 = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = PAGE_TITLE;
  }, []);

  return (
    <div className="flex min-h-screen flex-col font-raleway bg-slate-50 text-slate-900">
      <Navbar showLogo />

      <main className="flex-1">
        <section className="bg-gradient-to-br from-french-blue via-blue-700 to-blue-900 py-16 text-white md:py-24">
          <div className="container mx-auto px-6">
            <p className="text-sm uppercase tracking-[0.35em] text-white/80">Plan stratégique 2026-2030</p>
            <h1 className="mt-4 text-3xl font-playfair font-bold leading-tight md:text-5xl">
              Axe 4 – Façonner les réussites
            </h1>
            <p className="mt-6 max-w-3xl text-base text-white/80 md:text-lg">
              Accompagner chaque élève dans son développement personnel, scolaire et citoyen pour une réussite complète,
              durable et équilibrée.
            </p>
          </div>
        </section>

        <div className="container mx-auto flex gap-2 px-6 py-4">
          <Button variant="outline" onClick={() => navigate('/plan-strategique')}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Plan stratégique
          </Button>
          <Button variant="outline" onClick={() => navigate('/')}>
            <Home className="mr-2 h-4 w-4" />
            Accueil
          </Button>
        </div>

        <section className="py-12 md:py-16">
          <div className="container mx-auto px-6">
            <div className="rounded-2xl border border-blue-100 bg-white p-8 shadow-sm">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <h2 className="text-2xl font-playfair font-bold text-french-blue">Une vision structurée</h2>
                  <p className="mt-3 max-w-3xl text-sm text-slate-700 md:text-base">
                    L&apos;axe 4 fédère les projets dédiés à la réussite personnelle et collective des élèves, de la maternelle à la
                    terminale. Retrouvez ci-dessous les objectifs, les actions phares et les indicateurs qui guident ce
                    parcours.
                  </p>
                </div>
                <div className="flex items-center gap-3 rounded-xl bg-blue-50 px-4 py-3 text-blue-900">
                  <LayoutDashboard className="h-6 w-6" aria-hidden="true" />
                  <span className="text-sm font-semibold uppercase tracking-wide">Parcours structurant</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-16">
          <div className="container mx-auto px-6">
            <div className="rounded-2xl border border-blue-100 bg-white p-8 shadow-sm">
              <PSDAxe4 />
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default PlanStrategiqueAxe4;
