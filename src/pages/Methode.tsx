import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

const steps = [
  {
    number: 1,
    title: 'Réunion de lancement',
    description: 'Présentation de la démarche, cadrage et mobilisation des parties prenantes.',
    duration: 'Lancement',
  },
  {
    number: 2,
    title: 'Enquêtes V1',
    description: 'Première campagne d’écoute auprès des familles, élèves et personnels.',
  },
  {
    number: 3,
    title: 'Enquête V2',
    description: 'Approfondissement des constats et validation des tendances clés.',
  },
  {
    number: 4,
    title: 'Définition du projet et des axes',
    description: 'Structuration des orientations stratégiques issues de la consultation.',
  },
  {
    number: 5,
    title: "Proposition d'un plan d'actions",
    description: 'Traduction des axes en actions concrètes et mesurables.',
  },
  {
    number: 6,
    title: 'Validation du CG + CA',
    description: 'Arbitrage et priorisation des actions par les instances.',
  },
  {
    number: 7,
    title: 'Publication du PSD et pilotage continu',
    description: 'Diffusion, suivi et amélioration continue sur la période 2025 – 2035.',
  },
];

const Methode = () => {
  return (
    <div className="min-h-screen flex flex-col font-raleway bg-white">
      <Navbar showLogo />
      <Hero title="Démarche et méthode" subtitle="Une approche participative pour construire le PSD du LFJP" />

      <main className="flex-1">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mb-12">
              <h2 className="text-3xl font-playfair font-bold text-french-blue mb-4">Une démarche éprouvée en 7 étapes</h2>
              <p className="text-gray-700 leading-relaxed">
                Le Lycée Français Jacques Prévert suit une méthode structurée et inclusive pour élaborer son Plan
                Stratégique de Développement. Elle combine des temps d’écoute, de co-construction et de validation
                institutionnelle afin de garantir l’adhésion de toute la communauté éducative.
              </p>
            </div>

            <div className="grid gap-6">
              <div className="relative grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {steps.map((step) => (
                  <div
                    key={step.number}
                    className="group relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-french-blue text-white font-semibold">
                          {step.number}
                        </div>
                        <p className="text-sm font-semibold uppercase tracking-wide text-french-blue/80">
                          {step.duration || 'Étape clé'}
                        </p>
                      </div>
                      {step.number <= 5 && (
                        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-french-blue">12 à 18 mois</span>
                      )}
                      {step.number > 5 && step.number < 7 && (
                        <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-600">3 à 6 mois</span>
                      )}
                      {step.number === 7 && (
                        <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">10 ans</span>
                      )}
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{step.description}</p>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl border border-blue-100 bg-gradient-to-r from-blue-50 via-white to-french-blue/5 p-6 md:p-8 shadow-inner">
                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <h3 className="text-xl font-semibold text-french-blue">Deux tempos complémentaires</h3>
                  <div className="flex flex-wrap gap-3">
                    <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-french-blue">12 à 18 mois : co-construction</span>
                    <span className="rounded-full bg-amber-100 px-4 py-2 text-sm font-medium text-amber-700">3 à 6 mois : validation</span>
                    <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-700">10 ans : pilotage</span>
                  </div>
                </div>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  Les premières étapes privilégient l’écoute et la co-construction (12 à 18 mois) avant une phase de
                  consolidation et de validation institutionnelle (3 à 6 mois). La publication du PSD ouvre un cycle de
                  pilotage sur dix ans avec des ajustements réguliers.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-french-blue/5">
          <div className="container mx-auto px-6 grid gap-10 lg:grid-cols-2 lg:items-start">
            <div className="space-y-5">
              <div>
                <p className="text-sm uppercase tracking-wide text-french-blue font-semibold">Une approche participative</p>
                <h3 className="text-3xl font-playfair font-bold text-french-blue mt-2">Un processus porté par la communauté</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                La commission PSD agit au service de l’APE. La collaboration entre les parents, les élèves et les
                personnels constitue un facteur clé de réussite : chaque étape repose sur des temps d’échanges, des
                sondages et des ajustements partagés.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Avant chaque arbitrage, les propositions sont soumises pour avis, idées et suggestions. Après chaque
                validation, l’APE est sollicitée pour confirmer les décisions et préparer la mise en œuvre.
              </p>
              <div className="rounded-2xl border border-french-blue/20 bg-white p-6 shadow-sm">
                <h4 className="text-lg font-semibold text-french-blue mb-3">Rôle de la commission</h4>
                <ul className="space-y-2 text-gray-700 leading-relaxed list-disc list-inside">
                  <li>Recueillir les besoins et idées des parties prenantes.</li>
                  <li>Prioriser et structurer les contributions en propositions actionnables.</li>
                  <li>Soumettre chaque proposition à la validation de l’APE et des instances.</li>
                  <li>Assurer le suivi des décisions et la transparence du calendrier.</li>
                </ul>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Le cycle de validation</h4>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 h-10 w-10 flex items-center justify-center rounded-full bg-french-blue text-white font-semibold">A</div>
                  <div>
                    <p className="text-sm uppercase tracking-wide text-gray-500 font-semibold">Tour de table de la commission</p>
                    <p className="text-gray-700">Recueil initial des attentes et partage des retours terrain.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 h-10 w-10 flex items-center justify-center rounded-full bg-french-blue text-white font-semibold">B</div>
                  <div>
                    <p className="text-sm uppercase tracking-wide text-gray-500 font-semibold">Recueil des idées / Sondage</p>
                    <p className="text-gray-700">Consultations ciblées pour affiner les priorités.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 h-10 w-10 flex items-center justify-center rounded-full bg-french-blue text-white font-semibold">C</div>
                  <div>
                    <p className="text-sm uppercase tracking-wide text-gray-500 font-semibold">Proposition à l’APE pour validation</p>
                    <p className="text-gray-700">Synthèse des contributions et formulation des options.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 h-10 w-10 flex items-center justify-center rounded-full bg-emerald-600 text-white font-semibold">OK</div>
                  <div>
                    <p className="text-sm uppercase tracking-wide text-gray-500 font-semibold">Validation</p>
                    <p className="text-gray-700">Partage avec la communauté et préparation du déploiement.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 h-10 w-10 flex items-center justify-center rounded-full bg-amber-500 text-white font-semibold">?</div>
                  <div>
                    <p className="text-sm uppercase tracking-wide text-gray-500 font-semibold">Ajustements</p>
                    <p className="text-gray-700">Si nécessaire, retour vers la commission pour clarifier, tester ou préciser.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Methode;
