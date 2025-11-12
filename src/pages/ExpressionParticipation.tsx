import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { ArrowLeft, Home, Megaphone, Target, ClipboardList, LineChart } from 'lucide-react';

const PAGE_TITLE = 'Expression et participation des élèves | PSD LFJP';

const operationalObjectives = [
  'Donner une visibilité accrue aux actions et décisions des conseils d’élèves.',
  'Encourager la continuité école-collège-lycée dans la culture de l’engagement.',
  'Structurer l’évaluation et la valorisation des projets menés par les élèves.',
  'Développer la formation à la prise de parole, à la médiation et à la gestion de projets.',
];

const keyActions = [
  {
    volet: 'Consolidation des instances',
    actions: [
      'Poursuivre le fonctionnement du CVEP (premier degré) et renforcer les liens avec le CVC et le CVL via un comité inter-degrés de la vie collégienne et lycéenne.',
      'Formaliser les mandats et les calendriers de réunions dans un document unique publié sur le site du PSD.',
    ],
    periodicite: 'Annuel / continu',
    responsables: 'Vie scolaire, Direction, Mme Maginot-France',
  },
  {
    volet: 'Communication et visibilité',
    actions: [
      'Créer une rubrique “Voix des élèves” sur le site du LFJP : comptes rendus, interviews, présentations de projets.',
      'Mettre en place un mur d’expression physique et numérique (QR code, affichage, boîte à idées).',
      'Créer une rubrique dans le Petit Prévert dédiée aux élèves avec un comité de rédaction hebdomadaire.',
    ],
    periodicite: 'Continu',
    responsables: 'CPE, responsables communication, délégués',
  },
  {
    volet: 'Valorisation de l’engagement',
    actions: [
      'Instituer un Label “Engagement LFJP” pour récompenser les projets menés par les élèves (bals, journées à thème, actions solidaires, etc.).',
      'Présenter ces initiatives lors de la journée de la vie lycéenne et collégienne.',
    ],
    periodicite: 'Annuel',
    responsables: 'CVL, CVC, CVEP, Direction',
  },
  {
    volet: 'Formation et accompagnement',
    actions: [
      'Mettre en place un parcours de formation des élus (prise de parole, médiation, organisation d’événements).',
      'Intégrer des modules courts dans la formation continue des personnels pour l’accompagnement à la participation.',
    ],
    periodicite: '2 sessions/an',
    responsables: 'Vie scolaire, Direction',
  },
  {
    volet: 'Évaluation de l’impact',
    actions: [
      'Créer un tableau de bord de la participation dans le cadre du PSD : nombre d’élèves impliqués, type de projets, impact perçu sur le climat scolaire.',
      'Intégrer ces données au rapport annuel du CESCE.',
    ],
    periodicite: 'Semestriel',
    responsables: 'Direction, Vie scolaire',
  },
];

const deliverables = [
  'Calendrier consolidé des instances d’élèves.',
  'Page “Voix des élèves” en ligne.',
  'Label “Engagement LFJP” délivré chaque année.',
  'Tableau de bord PSD sur la participation.',
  'Rapport de synthèse annuel présenté en CESCE et au conseil d’établissement.',
];

const budgetItems = [
  {
    poste: 'Communication (supports, site, affiches)',
    detail: 'Charte graphique, maintenance, diffusion',
    montant: '200 000',
    financement: 'Budget communication',
  },
  {
    poste: 'Budget participatif élèves (petits projets)',
    detail: 'Financement symbolique d’initiatives portées par les conseils',
    montant: '400 000',
    financement: 'Budget projet / vie scolaire',
  },
  {
    poste: 'Formation délégués',
    detail: 'Intervenants, supports, ateliers pratiques',
    montant: '250 000',
    financement: 'Budget formation',
  },
  {
    poste: 'Événement annuel “Vie lycéenne et collégienne”',
    detail: 'Logistique, supports, valorisation',
    montant: '250 000',
    financement: 'Budget établissement',
  },
];

const totalBudget = '1 100 000 FCFA/an';

const risks = [
  {
    risque: 'Essoufflement de l’implication',
    mesure:
      'Reconnaissance officielle par le Label Engagement LFJP et diffusion dans la communication institutionnelle.',
  },
  {
    risque: 'Disparité d’engagement entre cycles',
    mesure: 'Comité inter-degrés et accompagnement des enseignants référents.',
  },
  {
    risque: 'Invisibilité des réalisations',
    mesure: 'Publication régulière sur les supports numériques et affichages.',
  },
  {
    risque: 'Confusion entre vie scolaire et animation',
    mesure: 'Formation ciblée des personnels accompagnateurs.',
  },
];

const indicators = [
  'Nombre de réunions et taux de participation aux conseils.',
  'Nombre de projets initiés et menés à terme par les élèves.',
  'Taux de satisfaction des élèves sur leur possibilité d’expression (baromètre climat scolaire).',
  'Pourcentage d’élèves engagés dans un projet collectif.',
  'Indice de visibilité des actions élèves (mentions sur site, réseaux, affichages).',
];

const ExpressionParticipation = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = PAGE_TITLE;
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 font-raleway text-slate-900">
      <Navbar showLogo />

      <main className="flex-1">
        <section className="bg-gradient-to-br from-french-blue via-blue-700 to-blue-900 py-16 text-white md:py-24">
          <div className="container mx-auto px-6">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-3xl space-y-6">
                <Badge className="w-fit bg-white/10 text-white backdrop-blur">
                  Axe 1 · Bien-être et climat scolaire
                </Badge>
                <h1 className="text-3xl font-playfair font-bold leading-tight md:text-5xl">
                  Expression et participation des élèves
                </h1>
                <p className="text-base text-white/80 md:text-lg">
                  Consolider et valoriser les espaces d’expression déjà en place pour renforcer l’impact éducatif de la
                  participation des élèves sur le climat scolaire, la citoyenneté et la cohésion de la communauté.
                </p>
              </div>
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white/15 text-white md:h-32 md:w-32">
                <Megaphone className="h-12 w-12 md:h-16 md:w-16" aria-hidden="true" />
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto flex gap-2 px-6 py-4">
          <Button variant="outline" onClick={() => navigate('/plan-strategique')}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour
          </Button>
          <Button variant="outline" onClick={() => navigate('/')}>
            <Home className="mr-2 h-4 w-4" />
            Accueil
          </Button>
        </div>

        <section className="bg-white py-12 md:py-16">
          <div className="container mx-auto px-6">
            <Card className="border-blue-100 shadow-sm">
              <CardHeader className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-3 text-french-blue">
                  <Target className="h-8 w-8" aria-hidden="true" />
                  <CardTitle className="text-2xl font-semibold">Objectif stratégique</CardTitle>
                </div>
                <Badge variant="secondary" className="bg-blue-50 text-french-blue">
                  Acte 1 – PSD 2026-2030
                </Badge>
              </CardHeader>
              <CardContent className="text-base leading-relaxed text-slate-700">
                Consolider et valoriser les espaces d’expression déjà en place au LFJP (CVEP, CVC, CVL), afin de renforcer
                l’impact éducatif de la participation des élèves sur le climat scolaire, la citoyenneté et la cohésion de la
                communauté.
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="bg-slate-50 py-12 md:py-16">
          <div className="container mx-auto px-6 space-y-8">
            <div className="flex flex-col gap-3 text-center">
              <h2 className="text-2xl font-playfair font-bold text-french-blue md:text-3xl">
                Objectifs opérationnels
              </h2>
              <p className="text-base text-slate-600 md:text-lg">
                Quatre priorités pour animer la culture de l’engagement et structurer la participation élève.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {operationalObjectives.map((objective, index) => (
                <Card key={objective} className="border border-blue-100 bg-white/80 shadow-sm">
                  <CardContent className="flex gap-4 p-6">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 font-semibold text-french-blue">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <p className="flex-1 text-base text-slate-700">{objective}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-12 md:py-16">
          <div className="container mx-auto px-6 space-y-8">
            <div className="flex flex-col gap-3 text-center">
              <h2 className="text-2xl font-playfair font-bold text-french-blue md:text-3xl">Actions clés</h2>
              <p className="text-base text-slate-600 md:text-lg">
                Un plan d’action structuré autour de cinq volets complémentaires.
              </p>
            </div>
            <div className="overflow-x-auto">
              <Table className="min-w-full">
                <TableHeader className="bg-blue-50/70">
                  <TableRow>
                    <TableHead className="text-slate-600">Volet</TableHead>
                    <TableHead className="text-slate-600">Actions principales</TableHead>
                    <TableHead className="text-slate-600">Périodicité</TableHead>
                    <TableHead className="text-slate-600">Responsables</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {keyActions.map((row) => (
                    <TableRow key={row.volet} className="align-top">
                      <TableCell className="font-semibold text-french-blue">{row.volet}</TableCell>
                      <TableCell>
                        <ul className="list-disc space-y-2 pl-5 text-sm text-slate-700 md:text-base">
                          {row.actions.map((action) => (
                            <li key={action}>{action}</li>
                          ))}
                        </ul>
                      </TableCell>
                      <TableCell className="text-sm text-slate-600 md:text-base">{row.periodicite}</TableCell>
                      <TableCell className="text-sm text-slate-600 md:text-base">{row.responsables}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-12 md:py-16">
          <div className="container mx-auto px-6">
            <Card className="border-blue-100 shadow-sm">
              <CardHeader className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-3 text-french-blue">
                  <ClipboardList className="h-8 w-8" aria-hidden="true" />
                  <CardTitle className="text-2xl font-semibold">Livrables attendus</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="grid gap-3 text-base text-slate-700 md:grid-cols-2">
                  {deliverables.map((deliverable) => (
                    <li key={deliverable} className="flex items-start gap-3">
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-french-blue" aria-hidden="true" />
                      <span>{deliverable}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="bg-white py-12 md:py-16">
          <div className="container mx-auto px-6 space-y-8">
            <div className="flex flex-col gap-3 text-center">
              <h2 className="text-2xl font-playfair font-bold text-french-blue md:text-3xl">
                Moyens et budget indicatif
              </h2>
              <p className="text-base text-slate-600 md:text-lg">
                Des ressources ciblées pour soutenir l’animation et la valorisation de la participation.
              </p>
            </div>
            <div className="overflow-x-auto">
              <Table className="min-w-full">
                <TableHeader className="bg-blue-50/70">
                  <TableRow>
                    <TableHead className="text-slate-600">Poste</TableHead>
                    <TableHead className="text-slate-600">Détail</TableHead>
                    <TableHead className="text-slate-600">Montant estimé (FCFA)</TableHead>
                    <TableHead className="text-slate-600">Financement</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {budgetItems.map((item) => (
                    <TableRow key={item.poste}>
                      <TableCell className="font-semibold text-french-blue">{item.poste}</TableCell>
                      <TableCell className="text-sm text-slate-700 md:text-base">{item.detail}</TableCell>
                      <TableCell className="text-sm text-slate-700 md:text-base">{item.montant}</TableCell>
                      <TableCell className="text-sm text-slate-700 md:text-base">{item.financement}</TableCell>
                    </TableRow>
                  ))}
                  <TableRow className="bg-blue-50/60 font-semibold text-french-blue">
                    <TableCell>Total estimé</TableCell>
                    <TableCell />
                    <TableCell>{totalBudget}</TableCell>
                    <TableCell />
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-12 md:py-16">
          <div className="container mx-auto px-6 space-y-8">
            <div className="flex flex-col gap-3 text-center">
              <h2 className="text-2xl font-playfair font-bold text-french-blue md:text-3xl">
                Risques identifiés et leviers
              </h2>
              <p className="text-base text-slate-600 md:text-lg">
                Anticiper les freins et sécuriser la réussite du dispositif.
              </p>
            </div>
            <div className="overflow-x-auto">
              <Table className="min-w-full">
                <TableHeader className="bg-blue-50/70">
                  <TableRow>
                    <TableHead className="text-slate-600">Risque</TableHead>
                    <TableHead className="text-slate-600">Mesure préventive</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {risks.map((item) => (
                    <TableRow key={item.risque}>
                      <TableCell className="font-semibold text-french-blue">{item.risque}</TableCell>
                      <TableCell className="text-sm text-slate-700 md:text-base">{item.mesure}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </section>

        <section className="bg-white py-12 md:py-16">
          <div className="container mx-auto px-6">
            <Card className="border-blue-100 shadow-sm">
              <CardHeader className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-3 text-french-blue">
                  <LineChart className="h-8 w-8" aria-hidden="true" />
                  <CardTitle className="text-2xl font-semibold">Indicateurs de suivi</CardTitle>
                </div>
                <Badge variant="secondary" className="bg-blue-50 text-french-blue">
                  Tableaux de bord PSD
                </Badge>
              </CardHeader>
              <CardContent>
                <ul className="grid gap-3 text-base text-slate-700 md:grid-cols-2">
                  {indicators.map((indicator) => (
                    <li key={indicator} className="flex items-start gap-3">
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-french-blue" aria-hidden="true" />
                      <span>{indicator}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ExpressionParticipation;
