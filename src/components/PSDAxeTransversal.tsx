
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, LayoutDashboard } from 'lucide-react';

const PSDAxeTransversal = () => {
  const focusAreas = [
    {
      title: 'Préservation du patrimoine bâti',
      description:
        'Programme pluriannuel de rénovation des façades et espaces intérieurs pour garantir des lieux d\'apprentissage durables.'
    },
    {
      title: 'Modernisation des équipements numériques',
      description:
        'Renouvellement planifié du parc informatique et des infrastructures réseau pour soutenir les usages pédagogiques.'
    },
    {
      title: 'Confort acoustique et bien-être',
      description:
        'Installation progressive de solutions acoustiques afin d\'offrir un environnement serein et propice aux apprentissages.'
    }
  ];

  const roadmap = [
    {
      period: '2025',
      detail: 'Lancement opérationnel du plan et programmation budgétaire des premiers travaux structurants.'
    },
    {
      period: '2026-2028',
      detail: 'Déploiement coordonné des trois volets (bâti, numérique, acoustique) avec suivi trimestriel.'
    },
    {
      period: '2029-2030',
      detail: 'Évaluations d\'impact, ajustements et pérennisation des investissements réalisés.'
    }
  ];

  return (
    <section className="space-y-10">
      <header className="space-y-3">
        <h3 className="text-xl font-playfair font-bold text-french-blue md:text-2xl">
          AXE TRANSVERSAL – PLAN DE MAINTENANCE STRATEGIQUE
        </h3>
        <p className="text-lg font-medium font-raleway text-gray-800">
          Concentration des efforts sur le Plan de maintenance stratégique 2025-2030 pour sécuriser la trajectoire du PSD.
        </p>
      </header>

      <div className="grid gap-6 lg:grid-cols-[1.2fr,1fr]">
        <article className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-french-blue via-blue-600 to-blue-800 p-8 text-white shadow-lg">
          <div className="absolute inset-y-0 right-0 w-40 opacity-20 blur-3xl bg-blue-200" aria-hidden="true"></div>
          <div className="relative flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-white/10 p-3">
                <LayoutDashboard className="h-7 w-7" aria-hidden="true" />
              </span>
              <div>
                <h4 className="text-2xl font-playfair font-semibold">Plan de maintenance stratégique</h4>
              </div>
            </div>

            <p className="text-base md:text-lg font-raleway text-white/90">
              Un dispositif global qui articule les investissements immobiliers, numériques et acoustiques afin d\'assurer la pérennité du lycée et la qualité d\'accueil de toute la communauté éducative.
            </p>

            <ul className="space-y-4">
              {focusAreas.map((item) => (
                <li key={item.title} className="flex gap-3">
                  <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-white/15">
                    <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-semibold text-white">{item.title}</p>
                    <p className="text-sm text-white/80">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div>
              <Link
                to="/plan-maintenance-strategique"
                className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 font-semibold text-french-blue shadow-md transition hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-french-blue focus-visible:ring-white"
                aria-label="Découvrir le Plan de maintenance stratégique"
              >
                <span>Découvrir le plan complet</span>
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </article>

        <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h4 className="text-lg font-semibold text-slate-900">Feuille de route 2025-2030</h4>
          <p className="mt-2 text-sm text-slate-600">
            Un pilotage rigoureux du plan garantit une mise en œuvre progressive, évaluée et partagée avec l\'ensemble des parties prenantes.
          </p>

          <ol className="mt-6 space-y-4">
            {roadmap.map((item) => (
              <li key={item.period} className="relative rounded-2xl bg-slate-50 p-4">
                <span className="text-xs font-semibold uppercase tracking-wide text-french-blue">{item.period}</span>
                <p className="mt-2 text-sm text-slate-700">{item.detail}</p>
              </li>
            ))}
          </ol>

          <div className="mt-6 rounded-2xl border border-dashed border-french-blue/40 bg-french-blue/5 p-5 text-sm text-slate-700">
            <p className="font-semibold text-french-blue">Pilotage et évaluation continue</p>
            <p className="mt-2">
              Des points d\'avancement réguliers sont partagés avec le conseil d\'établissement afin de mesurer l\'impact des travaux et d\'ajuster la trajectoire si nécessaire.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default PSDAxeTransversal;
