
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Users, DollarSign, BookOpen, Target, TrendingUp, CheckCircle, ArrowRight, GraduationCap, Clock } from 'lucide-react';

const SectionInternationaleBFIContent = () => {
  const navigate = useNavigate();

  const keyIndicators = [
    {
      icon: GraduationCap,
      title: "Primaire SI",
      value: "2026",
      description: "Ouverture pour tous, sans surcoût"
    },
    {
      icon: Users,
      title: "Secondaire SI",
      value: "20 élèves/niveau",
      description: "Objectif pour viabilité financière"
    },
    {
      icon: Calendar,
      title: "Durée totale",
      value: "10 ans",
      description: "De 2026 (primaire) à 2035 (BFI)"
    },
    {
      icon: DollarSign,
      title: "Frais secondaire",
      value: "300 000 CFA",
      description: "Par élève et par an (secondaire uniquement)"
    }
  ];

  const deploymentPhases = [
    {
      year: "2025-2026",
      level: "Recrutement primaire",
      students: "Préparation",
      hours: "+1 ETP primaire",
      revenue: "Investissement"
    },
    {
      year: "2026-2027",
      level: "SI Primaire (CP-CM2)",
      students: "230 élèves max",
      hours: "4h/niveau (2h EMILE)",
      revenue: "GRATUIT"
    },
    {
      year: "2027-2028",
      level: "SI Primaire + 6ème SI",
      students: "230 + 10-20 élèves",
      hours: "20h + 6h/semaine",
      revenue: "0 + 3-6M CFA"
    },
    {
      year: "2030-2031",
      level: "SI Primaire + 6ème-3ème SI",
      students: "230 + 40-80 élèves",
      hours: "20h + 24h/semaine",
      revenue: "0 + 12-24M CFA"
    },
    {
      year: "2033-2034",
      level: "SI Primaire + 6ème-Term SI",
      students: "230 + 70-140 élèves",
      hours: "20h + 42h/semaine",
      revenue: "0 + 21-42M CFA"
    },
    {
      year: "2034-2035",
      level: "SI Primaire + BFI ouvert",
      students: "230 + 70-140 élèves",
      hours: "20h + 42h/semaine",
      revenue: "0 + 21-42M CFA"
    }
  ];

  const objectives = [
    "Immersion précoce et équitable au primaire dès 2026",
    "Extension progressive et optionnelle au secondaire",
    "Distinction claire primaire gratuit / secondaire payant",
    "Viabilité financière du dispositif optionnel au secondaire"
  ];

  const criticalThresholds = [
    {
      year: "2025-2026",
      action: "Recrutement enseignant primaire",
      reason: "Investissement pédagogique de 18M CFA/an",
      type: "investment"
    },
    {
      year: "2030-2031",
      action: "Premier recrutement secondaire",
      reason: "24h/semaine SI secondaire nécessitent un ETP supplémentaire",
      type: "critical"
    },
    {
      year: "2033-2034",
      action: "Second recrutement secondaire",
      reason: "42h/semaine SI secondaire nécessitent un troisième ETP",
      type: "critical"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Introduction */}
          <Card className="mb-8 border-french-blue/10 shadow-md">
            <CardHeader>
              <CardTitle className="text-2xl text-french-blue">Introduction et contexte</CardTitle>
              <CardDescription>
                Un projet ambitieux d'immersion précoce et d'ouverture internationale
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Le lycée français Jacques Prévert de Saly s'engage dans un projet ambitieux d'ouverture 
                d'une Section Internationale Américaine (SI) suivie du Baccalauréat Français International (BFI). 
                Ce projet, révisé pour mettre l'accent sur une <strong>immersion précoce</strong>, s'inscrit dans une 
                volonté d'enrichir l'offre pédagogique de l'établissement et de répondre aux attentes des familles 
                en matière d'éducation internationale, <strong>en commençant par le niveau primaire</strong>.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg mb-4">
                <h4 className="font-semibold text-blue-800 mb-2">Approche en deux volets :</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h5 className="font-medium text-blue-700">Primaire (dès 2026)</h5>
                    <p className="text-blue-600">4h d'anglais/semaine (dont 2h EMILE) pour TOUS les élèves, SANS SURCOÛT</p>
                  </div>
                  <div>
                    <h5 className="font-medium text-blue-700">Secondaire (dès 2027)</h5>
                    <p className="text-blue-600">SI optionnelle avec littérature américaine et histoire-géographie en anglais, 300 000 CFA/an</p>
                  </div>
                </div>
              </div>
              <p className="text-gray-700">
                Cette approche permet une immersion précoce équitable au primaire, préparant une poursuite 
                d'excellence optionnelle au secondaire, avec des modalités de financement distinctes.
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
                De l'ouverture primaire en 2026 à l'ouverture BFI en 2034
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
                      <p className={`text-sm ${phase.revenue === 'GRATUIT' || phase.revenue === 'Investissement' ? 'text-blue-600' : 'text-green-600'}`}>
                        {phase.revenue}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Seuils critiques RH */}
          <Card className="mb-8 border-french-blue/10 shadow-md">
            <CardHeader>
              <CardTitle className="text-2xl text-french-blue">Étapes clés - Ressources Humaines</CardTitle>
              <CardDescription>
                Investissements et recrutements nécessaires
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {criticalThresholds.map((threshold, index) => (
                  <div key={index} className={`p-4 border rounded-lg ${
                    threshold.type === 'investment' ? 'bg-blue-50 border-blue-200' : 'bg-amber-50 border-amber-200'
                  }`}>
                    <div className="flex items-start space-x-3">
                      {threshold.type === 'investment' ? 
                        <Clock className={`w-5 h-5 mt-0.5 ${threshold.type === 'investment' ? 'text-blue-600' : 'text-amber-600'}`} /> :
                        <TrendingUp className={`w-5 h-5 mt-0.5 ${threshold.type === 'investment' ? 'text-blue-600' : 'text-amber-600'}`} />
                      }
                      <div>
                        <h4 className={`font-semibold ${threshold.type === 'investment' ? 'text-blue-800' : 'text-amber-800'}`}>
                          {threshold.year}
                        </h4>
                        <p className={`font-medium ${threshold.type === 'investment' ? 'text-blue-700' : 'text-amber-700'}`}>
                          {threshold.action}
                        </p>
                        <p className={`text-sm mt-1 ${threshold.type === 'investment' ? 'text-blue-600' : 'text-amber-600'}`}>
                          {threshold.reason}
                        </p>
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
                Distinction entre investissement primaire et viabilité secondaire
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <div className="flex items-start space-x-3">
                    <GraduationCap className="w-6 h-6 text-blue-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-blue-800 mb-2">Investissement primaire</h4>
                      <p className="text-blue-700 mb-3">
                        <strong>18M CFA/an</strong> d'investissement pédagogique pour la SI gratuite au primaire.
                      </p>
                      <p className="text-sm text-blue-600">
                        Financement par le budget global de l'établissement, sans recettes associées.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-green-800 mb-2">Viabilité secondaire</h4>
                      <p className="text-green-700 mb-3">
                        Équilibre financier atteint avec <strong>20 élèves/niveau</strong> au secondaire.
                      </p>
                      <p className="text-sm text-green-600">
                        Excédent de 6M CFA en régime de croisière avec ce scénario.
                      </p>
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
                    <li>• Comité de pilotage SI/BFI (stratégique, trimestriel)</li>
                    <li>• Équipe pédagogique SI (coordination, mensuelle)</li>
                    <li>• Conseil SI/BFI (concertation, semestrielle)</li>
                    <li>• Coordination intégrée (pilotage quotidien)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-french-blue mb-3">Indicateurs de suivi</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Satisfaction familles/enseignants (primaire)</li>
                    <li>• Effectifs SI par niveau vs cible 20 (secondaire)</li>
                    <li>• Bilan financier SI secondaire</li>
                    <li>• Taux de poursuite primaire → secondaire</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Bouton d'action */}
          <div className="text-center">
            <Link to="/deploiement-plan-section-internationale-bfi">
              <Button className="bg-french-blue hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold">
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
