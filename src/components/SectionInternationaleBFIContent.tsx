import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  BookOpen,
  Calendar,
  CheckCircle,
  DollarSign,
  GraduationCap,
  Layers,
  Target,
  TrendingUp,
  Users
} from 'lucide-react';

const keyIndicators = [
  {
    icon: Target,
    title: "Vision 2029",
    value: "Établissement 100% SIA",
    description: "Première diplomation BFI prévue en 2029"
  },
  {
    icon: Users,
    title: "Effectifs cibles",
    value: "15 élèves/groupe",
    description: "De la 6e à la Terminale, soit 105 élèves"
  },
  {
    icon: DollarSign,
    title: "Supplément secondaire",
    value: "300 000 FCFA/an",
    description: "Financement du dispositif renforcé"
  },
  {
    icon: BookOpen,
    title: "Horaire primaire",
    value: "3 à 4h/sem",
    description: "Anglais & EMILE pour tous les élèves"
  }
];

const deploymentTimeline = [
  {
    year: "2026",
    focus: "Généralisation primaire",
    details: "Tous les élèves du CP au CM2 en SIA, ouverture 6e-5e et Première BFI",
    hr: "Consolidation des équipes primaires"
  },
  {
    year: "2027",
    focus: "Extension collège & lycée",
    details: "Ouverture 4e et Terminale BFI",
    hr: "Recrutement d'un enseignant secondaire supplémentaire"
  },
  {
    year: "2028",
    focus: "Achèvement du collège",
    details: "Ouverture 3e et Seconde SIA",
    hr: "Anticipation d'un second recrutement secondaire"
  },
  {
    year: "2029",
    focus: "Couverture intégrale",
    details: "Établissement entièrement en SIA et première promotion BFI",
    hr: "Stabilisation de l'équipe (4,7 ETP)"
  }
];

const pedagogicalTracks = [
  {
    level: "Primaire",
    icon: GraduationCap,
    highlight: "Immersion bilingue pour tous",
    description: "3 à 4 heures hebdomadaires d'anglais et d'EMILE intégrées sans surcoût",
    bullets: [
      "Progressivité des apprentissages linguistiques",
      "Inclusion de l'ensemble des élèves",
      "Adossement aux standards AEFE"
    ]
  },
  {
    level: "Collège",
    icon: Layers,
    highlight: "Parcours structuré",
    description: "7 heures spécifiques : anglais LV1, langue & littérature, DNL Histoire-Géographie",
    bullets: [
      "Constitution de groupes de 15 élèves",
      "Renforcement des compétences académiques",
      "Préparation aux exigences du BFI"
    ]
  },
  {
    level: "Lycée",
    icon: BookOpen,
    highlight: "Préparation BFI",
    description: "ACL, CDM et DNL alignés sur les standards internationaux",
    bullets: [
      "Accompagnement personnalisé",
      "Ouverture culturelle et partenariats",
      "Diplomation BFI à partir de 2029"
    ]
  }
];

const financialScenarios = [
  {
    name: "Scénario 1",
    cost: "26 970 752 FCFA/an",
    description: "1 recrutement + HSA, équilibre quasi atteint avec le supplément de 300 000 FCFA"
  },
  {
    name: "Scénario 2",
    cost: "39 731 633 FCFA/an",
    description: "2 recrutements et moins de HSA, besoin d'un complément de financement"
  },
  {
    name: "Scénario 3",
    cost: "36 893 653 FCFA/an",
    description: "2 recrutements et très peu de HSA, compromis qualité/finances"
  }
];

const resourcePlan = [
  {
    year: "2026",
    need: "60h couvertes par 3 enseignants",
    detail: "Organisation actuelle avant extension"
  },
  {
    year: "2027",
    need: "94h hebdomadaires",
    detail: "Recrutement d'un 4e enseignant pour la 4e et la Terminale"
  },
  {
    year: "2028",
    need: "Anticipation du 5e enseignant",
    detail: "Ouverture de la Seconde SIA et de la 3e"
  }
];

const conclusionPoints = [
  "Un parcours bilingue complet, inclusif et attractif du CP à la Terminale",
  "Un modèle financier clair basé sur un supplément de 300 000 FCFA au secondaire",
  "Un équilibre à arbitrer entre sobriété budgétaire et confort organisationnel",
  "Un calendrier de recrutements anticipé pour sécuriser la qualité pédagogique"
];

const SectionInternationaleBFIContent = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-8">
          <Card className="border-french-blue/10 shadow-md">
            <CardHeader>
              <CardTitle className="text-2xl text-french-blue">Vision et objectifs</CardTitle>
              <CardDescription>
                Transformation progressive du LFJP en établissement intégralement Section Internationale Américaine menant au BFI en 2029.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-gray-700 space-y-4">
              <p>
                Le plan 2026-2029 engage l'établissement sur une trajectoire ambitieuse : généraliser la Section Internationale Américaine du primaire au lycée, garantir un parcours bilingue structuré et préparer la première promotion du Baccalauréat Français International en 2029.
              </p>
              <p>
                Ce projet s'appuie sur l'homologation AEFE, un environnement international riche et des partenariats solides pour offrir aux élèves un cadre d'apprentissage exigeant et inclusif.
              </p>
            </CardContent>
          </Card>

          <Card className="border-french-blue/10 shadow-md">
            <CardHeader>
              <CardTitle className="text-2xl text-french-blue">Indicateurs clés</CardTitle>
              <CardDescription>Repères structurants pour piloter le déploiement 2026-2029.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {keyIndicators.map((indicator, index) => (
                  <div key={index} className="p-6 border border-french-blue/10 rounded-lg bg-white shadow-sm">
                    <indicator.icon className="w-6 h-6 text-french-blue mb-4" />
                    <p className="text-sm uppercase tracking-wide text-slate-500">{indicator.title}</p>
                    <p className="text-2xl font-semibold text-french-blue mt-1">{indicator.value}</p>
                    <p className="text-sm text-gray-600 mt-2">{indicator.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-french-blue/10 shadow-md">
            <CardHeader>
              <CardTitle className="text-2xl text-french-blue">Déploiement progressif</CardTitle>
              <CardDescription>Feuille de route annuelle jusqu'à la première diplomation BFI.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {deploymentTimeline.map((step, index) => (
                  <div key={index} className="p-6 border rounded-lg bg-white border-french-blue/10 shadow-sm">
                    <div className="flex items-center justify-between mb-3">
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-french-blue/10 text-french-blue text-sm font-semibold">
                        <Calendar className="w-4 h-4 mr-2" />
                        {step.year}
                      </span>
                      <span className="text-sm text-gray-500">{step.focus}</span>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">{step.details}</p>
                    <p className="text-sm text-french-blue mt-3 font-medium">{step.hr}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-french-blue/10 shadow-md">
            <CardHeader>
              <CardTitle className="text-2xl text-french-blue">Organisation pédagogique</CardTitle>
              <CardDescription>Un continuum d'apprentissage bilingue du CP à la Terminale.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {pedagogicalTracks.map((track, index) => (
                  <div key={index} className="p-6 border rounded-lg bg-white border-french-blue/10 shadow-sm">
                    <track.icon className="w-6 h-6 text-french-blue mb-3" />
                    <h3 className="text-lg font-semibold text-french-blue">{track.level}</h3>
                    <p className="text-sm text-slate-500 mb-2">{track.highlight}</p>
                    <p className="text-sm text-gray-700 mb-4">{track.description}</p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      {track.bullets.map((item, bulletIndex) => (
                        <li key={bulletIndex} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 mr-2" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-french-blue/10 shadow-md">
            <CardHeader>
              <CardTitle className="text-2xl text-french-blue">Modèle financier</CardTitle>
              <CardDescription>Suppositions de revenus et scénarios de coûts au secondaire.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 text-gray-700">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 border rounded-lg bg-blue-50 border-blue-200">
                  <h3 className="text-lg font-semibold text-blue-800 mb-2">Recettes prévisionnelles</h3>
                  <p className="text-sm text-blue-700 mb-2">
                    105 élèves concernés (15 élèves × 7 niveaux) avec un supplément de <strong>300 000 FCFA/an</strong> par élève.
                  </p>
                  <p className="text-sm text-blue-700 font-semibold">Recettes annuelles attendues : 31 500 000 FCFA.</p>
                </div>
                <div className="p-6 border rounded-lg bg-emerald-50 border-emerald-200">
                  <h3 className="text-lg font-semibold text-emerald-800 mb-2">Gratuité au primaire</h3>
                  <p className="text-sm text-emerald-700">
                    L'intégration de tous les élèves en SIA au primaire se fait sans surcoût pour les familles grâce à un financement interne.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {financialScenarios.map((scenario, index) => (
                  <div key={index} className="p-6 border rounded-lg bg-white border-french-blue/10 shadow-sm">
                    <p className="text-sm uppercase tracking-wide text-slate-500">{scenario.name}</p>
                    <p className="text-xl font-semibold text-french-blue mt-1">{scenario.cost}</p>
                    <p className="text-sm text-gray-600 mt-2 leading-relaxed">{scenario.description}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-600">
                Selon le scénario retenu, le coût par élève varie entre <strong>257 000</strong> et <strong>379 000 FCFA</strong>. Le supplément facturé de 300 000 FCFA assure l'équilibre du scénario 1 et contribue au financement des scénarios 2 et 3 via des compléments (subventions, APE, ajustements budgétaires).
              </p>
            </CardContent>
          </Card>

          <Card className="border-french-blue/10 shadow-md">
            <CardHeader>
              <CardTitle className="text-2xl text-french-blue">Ressources humaines</CardTitle>
              <CardDescription>Anticiper les recrutements pour soutenir l'offre pédagogique.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {resourcePlan.map((resource, index) => (
                  <div key={index} className="p-6 border rounded-lg bg-white border-french-blue/10 shadow-sm">
                    <TrendingUp className="w-6 h-6 text-french-blue mb-3" />
                    <p className="text-sm uppercase tracking-wide text-slate-500">{resource.year}</p>
                    <p className="text-lg font-semibold text-french-blue mt-1">{resource.need}</p>
                    <p className="text-sm text-gray-600 mt-2">{resource.detail}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-600 mt-6">
                L'objectif est d'atteindre 94 heures hebdomadaires d'enseignement, soit 4,7 ETP, pour couvrir l'ensemble des besoins au secondaire dès 2028.
              </p>
            </CardContent>
          </Card>

          <Card className="border-french-blue/10 shadow-md">
            <CardHeader>
              <CardTitle className="text-2xl text-french-blue">Conclusion stratégique</CardTitle>
              <CardDescription>Points de vigilance et leviers de réussite.</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-gray-700">
                {conclusionPoints.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 mr-3" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <div className="text-center pt-4">
            <Link to="/deploiement-plan-section-internationale-bfi">
              <Button className="bg-french-blue hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold">
                Découvrir le plan de déploiement
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionInternationaleBFIContent;
