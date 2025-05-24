
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Users, Target, BookOpen, TrendingUp, CheckCircle, AlertTriangle, DollarSign } from 'lucide-react';

const PlanDeploiementDetailleContent = () => {
  const tableOfContents = [
    "Introduction et contexte",
    "Objectifs du plan de déploiement", 
    "Calendrier de déploiement progressif",
    "Analyse des impacts sur les ressources humaines",
    "Analyse des impacts financiers avec scénarios d'effectifs",
    "Options organisationnelles recommandées",
    "Plan d'action détaillé",
    "Indicateurs de suivi et gouvernance",
    "Conclusion"
  ];

  const deploymentSchedule = [
    { year: "2026-2027", phase: "Préparation opérationnelle", description: "Formation, communication, recrutement" },
    { year: "2027-2028", phase: "Ouverture 6ème SI", description: "20 élèves, 6h/semaine, revenus: 6M CFA" },
    { year: "2028-2029", phase: "Extension 5ème SI", description: "40 élèves, 12h/semaine, revenus: 12M CFA" },
    { year: "2029-2030", phase: "Extension 4ème SI + 1er recrutement", description: "60 élèves, 18h/semaine, revenus: 18M CFA" },
    { year: "2030-2031", phase: "Extension 3ème SI", description: "80 élèves, 24h/semaine, revenus: 24M CFA" },
    { year: "2031-2032", phase: "Extension 2nde SI", description: "100 élèves, 30h/semaine, revenus: 30M CFA" },
    { year: "2032-2033", phase: "Extension 1ère SI + 2ème recrutement", description: "120 élèves, 36h/semaine, revenus: 36M CFA" },
    { year: "2033-2034", phase: "Extension Terminale SI", description: "140 élèves, 42h/semaine, revenus: 42M CFA" },
    { year: "2034-2035", phase: "Ouverture du BFI", description: "Régime de croisière atteint" }
  ];

  const financialScenarios = [
    { scenario: "Scénario bas (10 élèves/niveau)", viability: "Non viable à terme", deficit: "-15M CFA en régime de croisière" },
    { scenario: "Scénario moyen (15 élèves/niveau)", viability: "Équilibre fragile", deficit: "-4,5M CFA en régime de croisière" },
    { scenario: "Scénario haut (20 élèves/niveau)", viability: "Viable et excédentaire", surplus: "+6M CFA en régime de croisière" }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Sommaire */}
          <Card className="mb-8 border-french-blue/10 shadow-md">
            <CardHeader>
              <CardTitle className="text-2xl text-french-blue">Sommaire</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="space-y-2">
                {tableOfContents.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="font-semibold text-french-blue min-w-[1.5rem]">{index + 1}.</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>

          {/* 1. Introduction et contexte */}
          <Card className="mb-8 border-french-blue/10 shadow-md">
            <CardHeader>
              <CardTitle className="text-2xl text-french-blue flex items-center">
                <BookOpen className="mr-3" />
                1. Introduction et contexte
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Le lycée français Jacques Prévert de Saly s'engage dans un projet ambitieux d'ouverture 
                d'une Section Internationale Américaine (SI) suivie du Baccalauréat Français International (BFI). 
                Ce projet s'inscrit dans une volonté d'enrichir l'offre pédagogique de l'établissement et de 
                répondre aux attentes des familles en matière d'éducation internationale.
              </p>
              <p className="text-gray-700">
                La Section Internationale Américaine représente un parcours d'excellence qui permet aux élèves 
                de développer un bilinguisme approfondi et une compréhension interculturelle, tout en suivant 
                le programme français. Elle se caractérise par un enseignement renforcé en langue anglaise, 
                notamment à travers des cours de littérature américaine et d'histoire-géographie dispensés en anglais.
              </p>
              <p className="text-gray-700">
                Le présent plan de déploiement vise à organiser la mise en place progressive de cette section, 
                en tenant compte des contraintes pédagogiques, humaines et financières. Il s'appuie sur une 
                analyse détaillée des besoins et des ressources, et propose des stratégies adaptées pour assurer 
                la réussite du projet.
              </p>
            </CardContent>
          </Card>

          {/* 2. Objectifs du plan de déploiement */}
          <Card className="mb-8 border-french-blue/10 shadow-md">
            <CardHeader>
              <CardTitle className="text-2xl text-french-blue flex items-center">
                <Target className="mr-3" />
                2. Objectifs du plan de déploiement
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-french-blue mb-2">Mise en place progressive</h4>
                  <p className="text-gray-700 text-sm">
                    Assurer une mise en place progressive et maîtrisée de la SI, en commençant par la 6ème en 2027 
                    jusqu'à l'ouverture du BFI en 2034.
                  </p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <h4 className="font-semibold text-french-blue mb-2">Gestion des ressources humaines</h4>
                  <p className="text-gray-700 text-sm">
                    Anticiper les besoins en recrutement et formation, optimiser les ressources existantes 
                    avec l'enseignante américaine déjà en poste.
                  </p>
                </div>
                <div className="p-4 bg-yellow-50 rounded-lg">
                  <h4 className="font-semibold text-french-blue mb-2">Viabilité économique</h4>
                  <p className="text-gray-700 text-sm">
                    Équilibrer les coûts supplémentaires avec les revenus des frais d'inscription 
                    (300 000 CFA par élève et par an).
                  </p>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg">
                  <h4 className="font-semibold text-french-blue mb-2">Qualité pédagogique</h4>
                  <p className="text-gray-700 text-sm">
                    Garantir la cohérence des enseignements et la stabilité des équipes avec des 
                    mécanismes de suivi et d'évaluation.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 3. Calendrier de déploiement progressif */}
          <Card className="mb-8 border-french-blue/10 shadow-md">
            <CardHeader>
              <CardTitle className="text-2xl text-french-blue flex items-center">
                <Calendar className="mr-3" />
                3. Calendrier de déploiement progressif
              </CardTitle>
              <CardDescription>
                Ouverture niveau par niveau de 2027 à 2034
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {deploymentSchedule.map((phase, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-white rounded-lg border border-gray-100">
                    <div className="w-12 h-12 bg-french-blue text-white rounded-full flex items-center justify-center font-semibold text-sm">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800">{phase.year}</h4>
                      <p className="text-french-blue font-medium">{phase.phase}</p>
                      <p className="text-sm text-gray-600 mt-1">{phase.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* 4. Analyse des impacts sur les ressources humaines */}
          <Card className="mb-8 border-french-blue/10 shadow-md">
            <CardHeader>
              <CardTitle className="text-2xl text-french-blue flex items-center">
                <Users className="mr-3" />
                4. Analyse des impacts sur les ressources humaines
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-french-blue mb-2">Situation actuelle</h4>
                <p className="text-gray-700 text-sm mb-2">
                  L'enseignement de l'anglais au secondaire représente 64 heures hebdomadaires, 
                  dont 12 heures de soutien et LCE qui peuvent être réaffectées à la SI.
                </p>
                <p className="text-gray-700 text-sm">
                  Ressources actuelles : 3 enseignants (60 heures) + 1 enseignante américaine 
                  qui basculera progressivement sur la SI.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-amber-800">Premier seuil critique</h4>
                      <p className="text-amber-700 font-medium">2030-2031</p>
                      <p className="text-sm text-amber-600 mt-1">
                        24h/semaine nécessitent un premier recrutement d'enseignant
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-red-800">Second seuil critique</h4>
                      <p className="text-red-700 font-medium">2033-2034</p>
                      <p className="text-sm text-red-600 mt-1">
                        42h/semaine nécessitent un troisième enseignant
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Stratégie recommandée : Option B</h4>
                <p className="text-green-700 text-sm mb-2">
                  Anticipation des recrutements avec profils polyvalents pour constituer une équipe stable.
                </p>
                <ul className="list-disc list-inside text-green-700 text-sm space-y-1">
                  <li>Premier recrutement anticipé en 2029-2030</li>
                  <li>Second recrutement en 2032-2033</li>
                  <li>Répartition optimisée des services entre enseignants</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* 5. Analyse des impacts financiers */}
          <Card className="mb-8 border-french-blue/10 shadow-md">
            <CardHeader>
              <CardTitle className="text-2xl text-french-blue flex items-center">
                <DollarSign className="mr-3" />
                5. Analyse des impacts financiers avec scénarios d'effectifs
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Frais d'inscription SI</h4>
                <p className="text-gray-700 text-sm">
                  300 000 CFA par élève et par an à partir de la 6ème
                </p>
              </div>

              <div className="space-y-4">
                {financialScenarios.map((scenario, index) => (
                  <div key={index} className={`p-4 rounded-lg border ${
                    index === 0 ? 'bg-red-50 border-red-200' : 
                    index === 1 ? 'bg-yellow-50 border-yellow-200' : 
                    'bg-green-50 border-green-200'
                  }`}>
                    <div className="flex items-start space-x-3">
                      {index === 2 ? (
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      ) : (
                        <AlertTriangle className={`w-5 h-5 mt-0.5 ${
                          index === 0 ? 'text-red-600' : 'text-yellow-600'
                        }`} />
                      )}
                      <div className="flex-1">
                        <h4 className={`font-semibold ${
                          index === 0 ? 'text-red-800' : 
                          index === 1 ? 'text-yellow-800' : 
                          'text-green-800'
                        }`}>
                          {scenario.scenario}
                        </h4>
                        <p className={`font-medium ${
                          index === 0 ? 'text-red-700' : 
                          index === 1 ? 'text-yellow-700' : 
                          'text-green-700'
                        }`}>
                          {scenario.viability}
                        </p>
                        <p className={`text-sm mt-1 ${
                          index === 0 ? 'text-red-600' : 
                          index === 1 ? 'text-yellow-600' : 
                          'text-green-600'
                        }`}>
                          {scenario.deficit || scenario.surplus}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Seuil de viabilité économique</h4>
                <p className="text-blue-700 text-sm">
                  17-18 élèves par niveau minimum pour assurer l'équilibre financier à terme.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* 6-9. Sections abrégées */}
          <Card className="mb-8 border-french-blue/10 shadow-md">
            <CardHeader>
              <CardTitle className="text-2xl text-french-blue">6-9. Sections détaillées</CardTitle>
              <CardDescription>
                Options organisationnelles, plan d'action, indicateurs et conclusion
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-french-blue mb-2">6. Options organisationnelles recommandées</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Anticipation des recrutements (Option B)</li>
                    <li>• Maintien des frais à 300 000 CFA</li>
                    <li>• Investissements qualitatifs ciblés</li>
                    <li>• Développement d'un écosystème SI/BFI</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-green-50 rounded-lg">
                  <h4 className="font-semibold text-french-blue mb-2">7. Plan d'action détaillé</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Actions concrètes par année scolaire</li>
                    <li>• Jalons et échéances clés</li>
                    <li>• Ressources et responsabilités</li>
                    <li>• Mécanismes d'ajustement</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-yellow-50 rounded-lg">
                  <h4 className="font-semibold text-french-blue mb-2">8. Indicateurs de suivi et gouvernance</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Comité de pilotage SI/BFI (trimestriel)</li>
                    <li>• Équipe pédagogique SI (mensuel)</li>
                    <li>• Conseil SI/BFI (semestriel)</li>
                    <li>• Indicateurs quantitatifs et qualitatifs</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-purple-50 rounded-lg">
                  <h4 className="font-semibold text-french-blue mb-2">9. Conclusion</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Projet ambitieux et structurant</li>
                    <li>• Approche progressive maîtrisée</li>
                    <li>• Facteurs clés de réussite identifiés</li>
                    <li>• Feuille de route adaptative</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Conclusion générale */}
          <Card className="mb-8 border-french-blue/10 shadow-md">
            <CardHeader>
              <CardTitle className="text-2xl text-french-blue">Conclusion générale</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Le plan de déploiement de la Section Internationale Américaine et du BFI représente un projet 
                ambitieux et structurant pour l'établissement. L'approche progressive retenue permet de maîtriser 
                les impacts et d'ajuster la stratégie en fonction des réalités rencontrées.
              </p>
              <p className="text-gray-700">
                Le scénario haut (20 élèves par niveau) offre une perspective particulièrement favorable, 
                avec un excédent financier tout au long du déploiement et la possibilité d'anticiper 
                certains recrutements pour assurer une meilleure stabilité pédagogique.
              </p>
              <div className="bg-french-blue/10 p-4 rounded-lg">
                <h4 className="font-semibold text-french-blue mb-2">Facteurs clés de réussite</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Capacité à attirer et fidéliser 20 élèves par niveau</li>
                  <li>• Qualité et stabilité de l'équipe pédagogique</li>
                  <li>• Implication de la communauté éducative</li>
                  <li>• Gouvernance efficace et participative</li>
                  <li>• Enrichissement continu de l'offre pédagogique</li>
                </ul>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  );
};

export default PlanDeploiementDetailleContent;
