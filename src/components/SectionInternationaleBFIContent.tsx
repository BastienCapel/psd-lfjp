import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Users, DollarSign, BookOpen, Target, TrendingUp, CheckCircle, ArrowRight, ArrowLeft, Home } from 'lucide-react';

const SectionInternationaleBFIContent = () => {
  const navigate = useNavigate();

  const keyIndicators = [
    {
      icon: Users,
      title: "Effectifs cibles",
      value: "20 élèves/niveau",
      description: "Scénario haut recommandé pour la viabilité"
    },
    {
      icon: Calendar,
      title: "Durée du déploiement",
      value: "7 ans",
      description: "De 2027 (6ème) à 2034 (BFI)"
    },
    {
      icon: DollarSign,
      title: "Frais d'inscription",
      value: "300 000 CFA",
      description: "Par élève et par an"
    },
    {
      icon: BookOpen,
      title: "Volume horaire final",
      value: "42h/semaine",
      description: "En régime de croisière"
    }
  ];

  const deploymentPhases = [
    {
      year: "2027-2028",
      level: "6ème SI",
      students: "20 élèves",
      hours: "6h/semaine",
      revenue: "6 000 000 CFA"
    },
    {
      year: "2028-2029",
      level: "6ème-5ème SI",
      students: "40 élèves",
      hours: "12h/semaine",
      revenue: "12 000 000 CFA"
    },
    {
      year: "2029-2030",
      level: "6ème-4ème SI",
      students: "60 élèves",
      hours: "18h/semaine",
      revenue: "18 000 000 CFA"
    },
    {
      year: "2030-2031",
      level: "6ème-3ème SI",
      students: "80 élèves",
      hours: "24h/semaine",
      revenue: "24 000 000 CFA"
    },
    {
      year: "2031-2032",
      level: "6ème-2nde SI",
      students: "100 élèves",
      hours: "30h/semaine",
      revenue: "30 000 000 CFA"
    },
    {
      year: "2032-2033",
      level: "6ème-1ère SI",
      students: "120 élèves",
      hours: "36h/semaine",
      revenue: "36 000 000 CFA"
    },
    {
      year: "2033-2034",
      level: "6ème-Term SI",
      students: "140 élèves",
      hours: "42h/semaine",
      revenue: "42 000 000 CFA"
    },
    {
      year: "2034-2035",
      level: "BFI ouvert",
      students: "140 élèves",
      hours: "42h/semaine",
      revenue: "42 000 000 CFA"
    }
  ];

  const objectives = [
    "Mise en place progressive et maîtrisée de la SI",
    "Gestion optimisée des ressources humaines",
    "Viabilité économique du dispositif",
    "Garantie de la qualité pédagogique"
  ];

  const criticalThresholds = [
    {
      year: "2030-2031",
      action: "Premier recrutement d'enseignant",
      reason: "24h/semaine nécessitent un ETP supplémentaire"
    },
    {
      year: "2033-2034",
      action: "Second recrutement d'enseignant",
      reason: "42h/semaine nécessitent un troisième ETP"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Boutons de navigation en haut */}
          <div className="flex justify-between items-center mb-8">
            <Button 
              variant="outline" 
              onClick={() => navigate('/plan-strategique')}
              className="flex items-center"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour au plan stratégique
            </Button>
            <Button 
              variant="outline" 
              onClick={() => navigate('/')}
              className="flex items-center"
            >
              <Home className="mr-2 h-4 w-4" />
              Accueil
            </Button>
          </div>

          {/* Introduction */}
          <Card className="mb-8 border-french-blue/10 shadow-md">
            <CardHeader>
              <CardTitle className="text-2xl text-french-blue">Introduction et contexte</CardTitle>
              <CardDescription>
                Un projet ambitieux d'ouverture internationale
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Le lycée français Jacques Prévert de Saly s'engage dans un projet ambitieux d'ouverture 
                d'une Section Internationale Américaine (SI) suivie du Baccalauréat Français International (BFI). 
                Ce projet s'inscrit dans une volonté d'enrichir l'offre pédagogique de l'établissement et de 
                répondre aux attentes des familles en matière d'éducation internationale.
              </p>
              <p className="text-gray-700">
                La Section Internationale Américaine représente un parcours d'excellence qui permet aux élèves 
                de développer un bilinguisme approfondi et une compréhension interculturelle, tout en suivant 
                le programme français.
              </p>
            </CardContent>
          </Card>

          {/* Indicateurs clés */}
          <Card className="mb-8 border-french-blue/10 shadow-md">
            <CardHeader>
              <CardTitle className="text-2xl text-french-blue">Indicateurs clés du projet</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {keyIndicators.map((indicator, index) => (
                  <div key={index} className="text-center p-4 bg-white rounded-lg border border-gray-100">
                    <indicator.icon className="w-8 h-8 text-french-blue mx-auto mb-3" />
                    <h3 className="font-semibold text-french-blue mb-1">{indicator.title}</h3>
                    <p className="text-2xl font-bold text-gray-800 mb-1">{indicator.value}</p>
                    <p className="text-sm text-gray-600">{indicator.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Objectifs du plan */}
          <Card className="mb-8 border-french-blue/10 shadow-md">
            <CardHeader>
              <CardTitle className="text-2xl text-french-blue">Objectifs du plan de déploiement</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {objectives.map((objective, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Target className="w-5 h-5 text-french-blue mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{objective}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Calendrier de déploiement */}
          <Card className="mb-8 border-french-blue/10 shadow-md">
            <CardHeader>
              <CardTitle className="text-2xl text-french-blue">Calendrier de déploiement progressif</CardTitle>
              <CardDescription>
                Montée en charge niveau par niveau de 2027 à 2034
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {deploymentPhases.map((phase, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-100">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-french-blue text-white rounded-full flex items-center justify-center font-semibold">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">{phase.year}</h4>
                        <p className="text-sm text-gray-600">{phase.level}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-french-blue">{phase.students}</p>
                      <p className="text-sm text-gray-600">{phase.hours}</p>
                      <p className="text-sm text-green-600">{phase.revenue}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Seuils critiques RH */}
          <Card className="mb-8 border-french-blue/10 shadow-md">
            <CardHeader>
              <CardTitle className="text-2xl text-french-blue">Seuils critiques - Ressources Humaines</CardTitle>
              <CardDescription>
                Points d'attention pour les recrutements d'enseignants
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {criticalThresholds.map((threshold, index) => (
                  <div key={index} className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
                    <div className="flex items-start space-x-3">
                      <TrendingUp className="w-5 h-5 text-amber-600 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-amber-800">{threshold.year}</h4>
                        <p className="text-amber-700 font-medium">{threshold.action}</p>
                        <p className="text-sm text-amber-600 mt-1">{threshold.reason}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Équilibre financier */}
          <Card className="mb-8 border-french-blue/10 shadow-md">
            <CardHeader>
              <CardTitle className="text-2xl text-french-blue">Équilibre financier</CardTitle>
              <CardDescription>
                Analyse de viabilité selon les scénarios d'effectifs
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-green-800 mb-2">Scénario recommandé : 20 élèves par niveau</h4>
                    <p className="text-green-700 mb-3">
                      Ce scénario assure la viabilité économique complète du dispositif avec un excédent 
                      financier variant de 6 à 12 millions de CFA par an.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="font-medium text-green-800">Avantages :</p>
                        <ul className="list-disc list-inside text-green-700 space-y-1">
                          <li>Équilibre financier assuré</li>
                          <li>Marges pour investissements qualitatifs</li>
                          <li>Possibilité d'anticiper les recrutements</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-medium text-green-800">Seuil de viabilité :</p>
                        <p className="text-green-700">17-18 élèves par niveau minimum</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Gouvernance et suivi */}
          <Card className="mb-8 border-french-blue/10 shadow-md">
            <CardHeader>
              <CardTitle className="text-2xl text-french-blue">Gouvernance et indicateurs de suivi</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-french-blue mb-3">Instances de gouvernance</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Comité de pilotage SI/BFI (trimestriel)</li>
                    <li>• Équipe pédagogique SI (mensuel)</li>
                    <li>• Conseil SI/BFI (semestriel)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-french-blue mb-3">Indicateurs de suivi</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Effectifs par niveau</li>
                    <li>• Équilibre financier</li>
                    <li>• Satisfaction élèves/familles</li>
                    <li>• Qualité pédagogique</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Bouton d'action mis à jour */}
          <div className="text-center">
            <Link to="/deploiement-plan-section-internationale-bfi">
              <Button 
                className="bg-french-blue hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold"
              >
                Accéder au plan d'action détaillé
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
