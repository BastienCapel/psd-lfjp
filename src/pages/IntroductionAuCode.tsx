import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ArrowLeft,
  BookOpenCheck,
  CalendarRange,
  CheckCircle2,
  Code2,
  Cpu,
  GraduationCap,
  Layers3,
  Link as LinkIcon,
  Network,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';

const institutionnel = [
  {
    title: 'Cycle 2 / Cycle 3',
    description: 'Pensée algorithmique, logique, robotique et programmation visuelle (Scratch).',
    points: ['Suite d\'instructions, repérage spatial', 'Débogage simple et mini-projets visuels'],
    icon: Sparkles,
  },
  {
    title: 'Cycle 4',
    description: 'Programmation structurée en mathématiques et technologie, premiers scripts Python.',
    points: ['Variables, boucles, conditions', 'Interactions avec objets et capteurs'],
    icon: Layers3,
  },
  {
    title: 'Lycée',
    description: 'Algorithmique en mathématiques (seconde) puis approfondissements en spécialités.',
    points: ['Python appliqué, données et IA (SNT)', 'Structures de données, réseaux (NSI)'],
    icon: GraduationCap,
  },
];

const objectifs = [
  'Parcours numérique LFJP intégré au parcours citoyen et aux certifications.',
  'Projet continu, adaptatif et interdisciplinaire.',
];

const principes = [
  'Développer la pensée informatique comme compétence citoyenne.',
  'Comprendre, créer et maîtriser des objets numériques.',
  'Ancrer ces compétences dans le socle commun (domaines 2 et 5).',
];

const aefe = [
  'Compétences digitales comme levier d’avenir et d’ouverture internationale.',
  'Initiation dès le primaire : robots pédagogiques, Scratch, projets STEAM.',
  'Montée en compétences des enseignants (IRF ZAO).',
  'Alignement avec les certifications numériques, notamment PIX.',
];

const pixItems = [
  'Écrire et modifier un script simple.',
  'Comprendre les structures de contrôle (boucles, conditions).',
  'Passer d’un pseudocode à un code exécutable.',
  'Manipuler et sécuriser des données.',
];

const progression = [
  {
    title: 'École primaire (cycles 2 et 3)',
    objectifs: 'Pensée logique, algorithmie visuelle et robotique.',
    outils: 'Bee-Bot, Blue-Bot, Scratch Jr, Scratch, robots éducatifs.',
    competences: ['Repérage spatial', 'Suites d\'instructions', 'Débogage simple', 'Mini-projets visuels'],
  },
  {
    title: 'Collège',
    objectifs: 'Algorithmique structurée, initiation Python, robotique et simulation.',
    outils: 'Scratch avancé, cartes Micro:bit, premières lignes de Python.',
    competences: [
      '6e : boucles et conditions avec Scratch avancé',
      '5e : logique informatique et objets connectés simples',
      '4e : Python niveau 1 (variables, tests, boucles)',
      '3e : Python niveau 2 (listes, fichiers, projets PIX)',
    ],
  },
  {
    title: 'Lycée',
    objectifs: 'Culture numérique avancée, algorithmique et projets STEAM.',
    outils: 'Python appliqué, SNT (IA, données, réseaux), NSI, objets connectés.',
    competences: [
      'Seconde : consolidation Python et thématiques SNT',
      'Première/Terminale : approfondissements applicatifs',
      'Spécialité NSI : curriculum national complet',
      'Projets transversaux : data, IA, robotique, IoT',
    ],
  },
];

const timeline = [
  {
    title: '2026-2027 — Phase 1',
    focus: 'Installation des fondamentaux.',
    start: 2026,
    end: 2027,
    items: [
      'Formation initiale des enseignants (IRF ZAO – code & robotique).',
      'Scratch et robotique généralisés en CM1-CM2 et 6e.',
      'Introduction Python en 5e pilote.',
      'Projets robotiques pour la semaine des Lycées Français du Monde.',
    ],
  },
  {
    title: '2027-2028 — Phase 2',
    focus: 'Consolidation collège.',
    start: 2027,
    end: 2028,
    items: [
      'Python généralisé de la 5e à la 3e.',
      'Micro:bit / Arduino en 4e-3e.',
      'Progressions spiralaires école-collège harmonisées.',
      'Préparation PIX renforcée en 3e.',
    ],
  },
  {
    title: '2028-2029 — Phase 3',
    focus: 'Extension lycée.',
    start: 2028,
    end: 2029,
    items: [
      'Seconde SNT : IA, données, objets connectés.',
      'Projets interdisciplinaires Python (maths, sciences, SNT).',
      'Consolidation NSI première/terminale.',
      'Objectif de 95 % de réussite PIX.',
    ],
  },
  {
    title: '2029-2030 — Phase 4',
    focus: 'Maturité du curriculum.',
    start: 2029,
    end: 2030,
    items: [
      'Parcours numérique LFJP totalement structuré.',
      'Création d’un “Lab numérique et robotique” (Axe 3 PSD).',
      'Participation à des projets internationaux (ADN-AEFE, code).',
      'Référentiel interne pour la continuité école-collège-lycée.',
    ],
  },
];

const IntroductionAuCode: React.FC = () => {
  const minYear = Math.min(...timeline.map((phase) => phase.start));
  const maxYear = Math.max(...timeline.map((phase) => phase.end));
  const totalYears = maxYear - minYear;

  return (
    <div className="min-h-screen flex flex-col font-raleway bg-gradient-to-b from-gray-50 to-white">
      <Navbar showLogo={true} />

      <header className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_40%_at_50%_-20%,rgba(59,130,246,0.12),transparent)]" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="inline-flex items-center gap-2 text-sm text-blue-700 bg-blue-50 border border-blue-200 rounded-full px-3 py-1">
            <Code2 className="w-4 h-4" />
            <span>Axe 3 – Digital, numérique, innovation technologique</span>
          </div>
          <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-gray-900">
            Introduction au code
          </h1>
          <p className="mt-4 text-gray-700 max-w-3xl text-base sm:text-lg">
            Un curriculum spiralaire, aligné sur l’Éducation nationale, la stratégie AEFE et la certification PIX,
            pour faire du code une compétence citoyenne et créative du CP à la Terminale.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button
              variant="outline"
              className="bg-white text-french-blue border-french-blue hover:bg-french-blue hover:text-white focus-visible:ring-french-blue"
              asChild
            >
              <Link to="/plan-strategique" state={{ axe: 'axe3' }}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Retour au plan stratégique
              </Link>
            </Button>
            <Button
              variant="outline"
              className="bg-white text-french-blue border-french-blue hover:bg-french-blue hover:text-white focus-visible:ring-french-blue"
              asChild
            >
              <Link to="/curriculum-numerique-spiralaire">
                <BookOpenCheck className="mr-2 h-4 w-4" />
                Curriculum numérique spiralaire
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="shadow-sm border border-blue-100 bg-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                  <GraduationCap className="w-5 h-5 text-french-blue" />
                  Ce que dit l’Éducation nationale
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p className="text-sm leading-relaxed">
                  L’initiation au code est intégrée aux programmes depuis 2016 et renforcée ensuite : pensée
                  algorithmique, logique, robotique et programmation visuelle dès le primaire, puis structuration en
                  collège et lycée.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  {institutionnel.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.title} className="rounded-xl border border-gray-200 bg-gray-50 p-4 space-y-2">
                        <div className="flex items-center gap-2 text-french-blue font-semibold">
                          <Icon className="w-5 h-5" />
                          <span>{item.title}</span>
                        </div>
                        <p className="text-sm text-gray-700 leading-relaxed">{item.description}</p>
                        <ul className="text-sm text-gray-600 list-disc pl-4 space-y-1">
                          {item.points.map((point) => (
                            <li key={point}>{point}</li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
                <div className="rounded-lg bg-blue-50 border border-blue-100 p-4 space-y-2 text-sm text-gray-800">
                  <p className="font-semibold text-french-blue">Principes transversaux</p>
                  <ul className="list-disc pl-5 space-y-1">
                    {principes.map((principe) => (
                      <li key={principe}>{principe}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-sm border border-amber-100 bg-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                  <Network className="w-5 h-5 text-amber-500" />
                  Ce que dit l’AEFE
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p className="text-sm leading-relaxed">
                  L’AEFE place la culture numérique et la programmation au cœur de ses priorités : compétences digitales,
                  interdisciplinarité, formation des équipes et alignement avec les certifications internationales.
                </p>
                <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
                  {aefe.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className="rounded-lg bg-amber-50 border border-amber-100 p-4 text-sm text-gray-800">
                  Vision LFJP : autonomie numérique, créativité, ouverture au monde et adaptation aux innovations.
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 sm:pb-12">
          <div className="grid lg:grid-cols-3 gap-6">
            <Card className="shadow-sm border border-gray-200 bg-white lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                  <ShieldCheck className="w-5 h-5 text-emerald-600" />
                  Certification PIX et compétences visées
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700 text-sm leading-relaxed">
                <p>
                  PIX est obligatoire en fin de collège et de lycée. L’introduction au code contribue directement aux
                  domaines 2, 4, 5, 6 et 7 du référentiel.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="rounded-lg border border-emerald-100 bg-emerald-50 p-4 space-y-2">
                    <p className="font-semibold text-emerald-700">Items PIX travaillés</p>
                    <ul className="list-disc pl-5 space-y-1 text-gray-800">
                      {pixItems.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 space-y-2">
                    <p className="font-semibold text-gray-900">Préparation citoyenne</p>
                    <p>
                      Passage du pseudocode au code réel, documentation, travail collaboratif, tests et sécurité des données
                      pour renforcer l’autonomie numérique.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-sm border border-blue-100 bg-gradient-to-br from-white via-blue-50 to-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                  <Cpu className="w-5 h-5 text-french-blue" />
                  Objectif 2026-2030 au LFJP
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-gray-700 leading-relaxed">
                <p>
                  Construire un curriculum spiralaire cohérent du CP à la Terminale, articulé avec les programmes français,
                  les standards AEFE, les compétences PIX et l’Axe 3 du PSD.
                </p>
                <ul className="space-y-2 text-french-blue">
                  {objectifs.map((objectif) => (
                    <li key={objectif} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" />
                      <span>{objectif}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 sm:pb-12">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Code2 className="w-6 h-6 text-french-blue" />
              <h2 className="text-2xl font-semibold text-gray-900">Progression curriculaire 2026-2030</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {progression.map((step) => (
                <Card key={step.title} className="shadow-sm border border-gray-200 bg-white">
                  <CardHeader>
                    <CardTitle className="text-lg text-gray-900">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm text-gray-700">
                    <div>
                      <p className="font-semibold">Objectifs</p>
                      <p>{step.objectifs}</p>
                    </div>
                    <div>
                      <p className="font-semibold">Outils / supports</p>
                      <p>{step.outils}</p>
                    </div>
                    <div>
                      <p className="font-semibold">Compétences / étapes</p>
                      <ul className="list-disc pl-5 space-y-1">
                        {step.competences.map((comp) => (
                          <li key={comp}>{comp}</li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="flex items-center gap-3 mb-6">
            <CalendarRange className="w-6 h-6 text-french-blue" />
            <h2 className="text-2xl font-semibold text-gray-900">Temporalité de déploiement 2026-2030</h2>
          </div>
          <div className="mb-6 rounded-xl border border-blue-100 bg-gradient-to-r from-blue-50 via-white to-blue-50 p-4 shadow-sm">
            <div className="flex items-center gap-2 text-sm font-semibold text-french-blue mb-3">
              <CalendarRange className="w-4 h-4" />
              <span>Frise temporelle (type Gantt)</span>
            </div>
            <div className="relative w-full border-t border-dashed border-blue-200 pt-6">
              <div className="absolute left-0 top-0 flex w-full justify-between text-xs text-gray-500">
                {Array.from({ length: totalYears + 1 }).map((_, index) => {
                  const year = minYear + index;
                  return (
                    <span key={year} className="-translate-x-1/2">
                      {year}
                    </span>
                  );
                })}
              </div>
              <div className="space-y-3">
                {timeline.map((phase) => {
                  const left = ((phase.start - minYear) / totalYears) * 100;
                  const width = ((phase.end - phase.start) / totalYears) * 100;
                  return (
                    <div key={phase.title} className="relative">
                      <div
                        className="absolute top-1/2 h-4 -translate-y-1/2 rounded-full bg-blue-500/10 border border-blue-200"
                        style={{ left: `${left}%`, width: `${width}%` }}
                      >
                        <div className="absolute inset-0 flex items-center px-3 text-xs font-semibold text-french-blue">
                          {phase.title}
                        </div>
                      </div>
                      <div className="pl-2 text-xs text-gray-600">{phase.focus}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-4">
            {timeline.map((phase) => (
              <Card key={phase.title} className="shadow-sm border border-gray-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-french-blue" />
                    {phase.title}
                  </CardTitle>
                  <p className="text-sm text-gray-600">{phase.focus}</p>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
                    {phase.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3 text-sm text-french-blue">
            <Link to="/curriculum-numerique-spiralaire" className="inline-flex items-center gap-2 hover:underline">
              <LinkIcon className="w-4 h-4" />
              Parcours numérique spiralaire
            </Link>
            <span className="text-gray-400">•</span>
            <Link to="/mecenat-numerique" className="inline-flex items-center gap-2 hover:underline">
              <LinkIcon className="w-4 h-4" />
              Mécénat numérique
            </Link>
            <span className="text-gray-400">•</span>
            <Link to="/pc-par-lyceen" className="inline-flex items-center gap-2 hover:underline">
              <LinkIcon className="w-4 h-4" />
              Plan 1 PC par lycéen
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default IntroductionAuCode;
