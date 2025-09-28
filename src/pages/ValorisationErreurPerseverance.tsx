import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home, Sparkles, Target, BookOpenCheck, UsersRound, Compass } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface TimelinePhase {
  id: string;
  title: string;
  years: string;
  description: string;
  highlights: string[];
}

const phases: TimelinePhase[] = [
  {
    id: 'phase-1',
    title: 'Phase 1 – Installer la culture du rebond',
    years: '2024-2025',
    description:
      'Créer un cadre commun où l’erreur devient un levier de progrès partagé par tous les acteurs.',
    highlights: [
      'Formations croisées enseignants/AE pour structurer les feedbacks et les postures d’accompagnement.',
      'Campagne « Droit à l’essai » auprès des élèves et familles : affiches, capsules vidéos, charte commune.',
      'Outils d’auto-évaluation simplifiés dans chaque cycle pour analyser ses erreurs et planifier un rebond.',
    ],
  },
  {
    id: 'phase-2',
    title: 'Phase 2 – Expérimenter et documenter',
    years: '2025-2026',
    description:
      'Multiplier les situations concrètes de persévérance et capitaliser sur les pratiques inspirantes.',
    highlights: [
      'Lancement des « laboratoires d’essai » en mathématiques, sciences et langues avec séances de remédiation visibles.',
      'Création de journaux de bord du rebond pour suivre les progrès individuels et collectifs.',
      'Diffusion d’un kit pédagogique sur la gestion de l’erreur à destination des personnels éducatifs et périscolaires.',
    ],
  },
  {
    id: 'phase-3',
    title: 'Phase 3 – Généraliser et accompagner',
    years: '2026-2028',
    description:
      'Ancrer la démarche dans tous les parcours et proposer un accompagnement individualisé pour chaque élève.',
    highlights: [
      'Intégration des rituels de métacognition dans toutes les disciplines et les heures de vie de classe.',
      'Parcours de mentorat avec les alumni pour partager des récits de résilience et d’orientation choisie.',
      'Évaluation positive : mise en place de bilans trimestriels valorisant efforts, progrès et initiatives.',
    ],
  },
  {
    id: 'phase-4',
    title: 'Phase 4 – Rayonner et essaimer',
    years: '2028-2029',
    description:
      'Faire du LFJP une référence régionale sur la valorisation de l’erreur et la persévérance éducative.',
    highlights: [
      'Organisation d’un forum annuel « Cultiver l’audace » réunissant élèves, familles, partenaires et réseaux AEFE.',
      'Partage de ressources ouvertes (podcasts, modules, expositions) co-construits avec les élèves ambassadeurs.',
      'Déploiement d’actions solidaires de tutorat vers les écoles partenaires de la Petite Côte.',
    ],
  },
];

const finalObjective = {
  title: 'Objectif 2030 – Une communauté audacieuse et résiliente',
  description:
    'À l’horizon 2030, le LFJP garantit à chaque élève la capacité d’oser, de rebondir et de mener un projet personnel éclairé. La persévérance y est célébrée comme une compétence citoyenne majeure, soutenue par une communauté éducative unie et des partenariats solides.',
  pillars: [
    '100 % des élèves disposent d’un portfolio de persévérance documentant réussites, obstacles et solutions mobilisées.',
    'Les familles et alumni sont intégrés dans un réseau d’accompagnement qui double le nombre d’interventions inspirantes.',
    'Chaque projet pédagogique comporte un volet explicite de gestion de l’erreur et de célébration du rebond.',
  ],
};

const ValorisationErreurPerseverance = () => {
  return (
    <div className="min-h-screen flex flex-col font-raleway bg-gradient-to-b from-slate-50 to-white text-slate-800">
      <Navbar showLogo={true} />

      <header className="bg-gradient-to-r from-french-blue to-blue-700 text-white">
        <div className="container mx-auto px-6 py-20 md:py-28">
          <p className="uppercase tracking-[0.3em] text-xs md:text-sm text-blue-100 mb-4">Axe 4 – Réussites</p>
          <h1 className="text-3xl md:text-5xl font-playfair font-bold mb-4">
            Valorisation de l’erreur et persévérance
          </h1>
          <p className="text-base md:text-xl max-w-3xl font-light text-blue-50">
            Un programme structurant pour faire du LFJP une école de la confiance, du rebond et de l’audace partagée.
          </p>
        </div>
      </header>

      <div className="container mx-auto px-6 py-6 flex flex-wrap gap-3">
        <Button variant="outline" asChild>
          <Link to="/plan-strategique">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour au plan stratégique
          </Link>
        </Button>
        <Button variant="outline" asChild>
          <Link to="/">
            <Home className="mr-2 h-4 w-4" />
            Accueil
          </Link>
        </Button>
      </div>

      <main className="flex-1">
        <section className="container mx-auto px-6 pb-12">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-start">
            <article className="rounded-3xl bg-white/80 backdrop-blur shadow-lg ring-1 ring-blue-100 p-8">
              <header className="mb-6">
                <h2 className="text-2xl font-playfair font-bold text-french-blue mb-3">
                  Pourquoi valoriser l’erreur ?
                </h2>
                <p className="text-gray-700">
                  Au LFJP, la réussite se construit dans la durée, grâce à des élèves capables d’explorer, de se tromper et
                  d’analyser leurs démarches pour rebondir. Cette page propose un cadre commun pour faire de l’erreur un
                  moteur d’apprentissage et de persévérance, en cohérence avec le Plan Stratégique de Développement 2026-2030.
                </p>
              </header>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-blue-100 bg-blue-50/70 p-5 shadow-sm">
                  <div className="flex items-center gap-3 text-french-blue">
                    <Target className="h-6 w-6" aria-hidden="true" />
                    <h3 className="text-lg font-semibold">Alignement stratégique</h3>
                  </div>
                  <p className="mt-3 text-sm text-slate-700">
                    La valorisation de l’erreur irrigue l’Axe 4 et renforce le parcours de réussite citoyenne et
                    environnementale.
                  </p>
                </div>
                <div className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm">
                  <div className="flex items-center gap-3 text-french-blue">
                    <UsersRound className="h-6 w-6" aria-hidden="true" />
                    <h3 className="text-lg font-semibold">Communauté engagée</h3>
                  </div>
                  <p className="mt-3 text-sm text-slate-700">
                    Élèves, personnels, familles et partenaires locaux co-construisent une culture de confiance partagée.
                  </p>
                </div>
              </div>
            </article>

            <aside className="rounded-3xl bg-white/90 backdrop-blur shadow-lg ring-1 ring-blue-100 p-8 space-y-5">
              <header className="flex items-start gap-3">
                <Sparkles className="h-8 w-8 text-french-blue" aria-hidden="true" />
                <div>
                  <h2 className="text-xl font-playfair font-bold text-french-blue">Programme « Cultiver l’audace »</h2>
                  <p className="text-sm text-gray-700 mt-1">
                    Une dynamique collective qui encourage l’initiative, la créativité et la gestion constructive de l’échec.
                  </p>
                </div>
              </header>
              <ul className="space-y-4 text-sm text-slate-700">
                <li className="flex gap-3">
                  <BookOpenCheck className="mt-0.5 h-5 w-5 text-french-blue" aria-hidden="true" />
                  <span>
                    Parcours d’ateliers thématiques (improvisation, design thinking, projets solidaires) pour apprendre à
                    tester, réviser et recommencer.
                  </span>
                </li>
                <li className="flex gap-3">
                  <Compass className="mt-0.5 h-5 w-5 text-french-blue" aria-hidden="true" />
                  <span>
                    Coaching individuel et tutorat entre pairs afin d’accompagner les moments clés : choix d’orientation,
                    examens, concours.
                  </span>
                </li>
                <li className="flex gap-3">
                  <UsersRound className="mt-0.5 h-5 w-5 text-french-blue" aria-hidden="true" />
                  <span>
                    Cérémonies « audace » trimestrielles valorisant les efforts, le courage et les initiatives collectives.
                  </span>
                </li>
              </ul>
              <p className="text-xs text-slate-500">
                Le programme se décline dans tous les cycles et s’articule avec le curriculum Soft Skills &amp; Éloquence.
              </p>
            </aside>
          </div>
        </section>

        <section className="bg-white py-12">
          <div className="container mx-auto px-6">
            <header className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-2xl md:text-3xl font-playfair font-bold text-french-blue mb-3">
                Frise temporelle de la valorisation de l’erreur
              </h2>
              <p className="text-gray-600">
                Un cheminement progressif, structuré autour de quatre phases complémentaires menant à l’ambition 2030.
              </p>
            </header>

            <div className="relative">
              <div
                className="pointer-events-none absolute left-5 top-4 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-french-blue/70 via-french-blue/20 to-transparent lg:block"
                aria-hidden="true"
              />
              <ol className="space-y-8">
                {phases.map((phase, index) => (
                  <li key={phase.id} className="relative pl-10 lg:pl-24">
                    <div
                      className="absolute left-2 top-2 flex h-7 w-7 items-center justify-center rounded-full bg-white shadow ring-4 ring-blue-100 lg:left-16"
                      aria-hidden="true"
                    >
                      <span className="h-3 w-3 rounded-full bg-french-blue" />
                    </div>
                    <article className="rounded-3xl border border-blue-100 bg-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
                      <div className="rounded-t-3xl bg-gradient-to-r from-french-blue/90 to-blue-600/90 p-6 text-white">
                        <div className="flex flex-wrap items-center justify-between gap-3">
                          <Badge variant="secondary" className="bg-white/20 text-white text-xs uppercase tracking-widest">
                            {phase.years}
                          </Badge>
                          <span className="text-sm font-semibold uppercase tracking-wide text-blue-100">
                            Phase {index + 1}
                          </span>
                        </div>
                        <h3 className="mt-4 text-xl font-playfair font-semibold">{phase.title}</h3>
                        <p className="mt-3 text-sm md:text-base text-blue-50/90">{phase.description}</p>
                      </div>
                      <div className="p-6">
                        <ul className="space-y-3 text-sm md:text-base text-slate-700">
                          {phase.highlights.map((item) => (
                            <li key={item} className="flex gap-3">
                              <span className="mt-1 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-french-blue/60" aria-hidden="true" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </article>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-6 py-12">
          <div className="rounded-3xl bg-gradient-to-r from-blue-700 via-french-blue to-blue-600 text-white shadow-xl">
            <div className="p-8 md:p-12">
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <h2 className="text-2xl md:text-3xl font-playfair font-bold">{finalObjective.title}</h2>
                  <p className="mt-4 max-w-2xl text-sm md:text-base text-blue-100">
                    {finalObjective.description}
                  </p>
                </div>
              </div>
              <ul className="mt-8 grid gap-4 md:grid-cols-3">
                {finalObjective.pillars.map((pillar) => (
                  <li
                    key={pillar}
                    className="rounded-2xl bg-white/10 p-4 text-sm md:text-base shadow-inner ring-1 ring-white/20"
                  >
                    {pillar}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ValorisationErreurPerseverance;
