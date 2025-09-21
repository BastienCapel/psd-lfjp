import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const PlanMaintenanceStrategique = () => {
  return (
    <div className="min-h-screen flex flex-col font-raleway">
      <Navbar showLogo={true} />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-french-blue to-blue-700 text-white py-24 md:py-32">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-6 opacity-0 animate-fade-in">
            PLAN DE MAINTENANCE STRATÉGIQUE
          </h1>
          <p className="text-xl md:text-2xl font-raleway font-light max-w-3xl opacity-0 animate-fade-in-delay-1">
            Préservation et amélioration du patrimoine immobilier et technologique
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex-1 bg-white py-16">
        <div className="container mx-auto px-6">
          
          {/* Introduction */}
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl font-playfair font-bold text-french-blue mb-8">
              Qu'est-ce que le Plan de Maintenance Stratégique ?
            </h2>
            <div className="prose prose-lg text-gray-700 space-y-6">
              <p>
                Le Plan de Maintenance Stratégique du Lycée Français Jacques Prévert constitue un outil de pilotage 
                essentiel pour préserver et améliorer notre patrimoine immobilier et technologique sur la période 2025-2030.
              </p>
              <p>
                Ce plan s'articule autour de trois axes majeurs qui garantissent un environnement d'apprentissage 
                optimal et pérenne pour notre communauté éducative :
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>La préservation esthétique et structurelle</strong> des bâtiments</li>
                <li><strong>La modernisation technologique</strong> des équipements pédagogiques</li>
                <li><strong>L'amélioration du confort acoustique</strong> des espaces d'apprentissage</li>
              </ul>
              <p>
                Chaque volet fait l'objet d'une planification rigoureuse, d'un budget dédié et d'indicateurs 
                de suivi permettant d'assurer une mise en œuvre efficace et mesurable.
              </p>
            </div>
          </div>

          {/* Tabs Section */}
          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="peintures" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="peintures" className="text-sm md:text-base">
                  Peintures & Ravalement
                </TabsTrigger>
                <TabsTrigger value="informatique" className="text-sm md:text-base">
                  Renouvellement Informatique
                </TabsTrigger>
                <TabsTrigger value="acoustique" className="text-sm md:text-base">
                  Plafonds Acoustiques
                </TabsTrigger>
              </TabsList>

              <TabsContent value="peintures">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl font-playfair text-french-blue">
                      Plan Pluriannuel de Peinture et Ravalement (2025-2030)
                    </CardTitle>
                    <CardDescription className="text-lg">
                      Préservation et embellissement du patrimoine bâti
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-french-blue mb-3">Introduction</h3>
                      <p className="text-gray-700 mb-4">
                        Afin de garantir un cadre de travail et d'apprentissage soigné, sécurisant, motivant et propice au bien-être de tous les usagers, un plan pluriannuel de rénovation a été établi pour la période 2025-2030. Ce plan vise à maintenir et valoriser le patrimoine immobilier de l'établissement. Il prend spécifiquement en compte la réalité climatique du Sénégal (air salin, chaleur, humidité) et les usages intensifs des locaux scolaires.
                      </p>
                      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                        <h4 className="font-semibold text-yellow-800 mb-2">PEINTURE MURS UNIQUEMENT (AVEC POSE DE FAUX-PLAFONDS ACOUSTIQUES)</h4>
                        <p className="text-yellow-700">
                          Ce scénario part du principe que les plafonds des salles, bureaux et de la salle polyvalente seront équipés de faux-plafonds acoustiques. La pose de ces faux-plafonds constitue un lot de travaux et un budget distincts, non inclus dans la présente note. Par conséquent, ce scénario ne budgétise que la peinture des murs.
                        </p>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-french-blue mb-3">Périmètre Concerné et Détail des Surfaces</h3>
                      
                      <div className="mb-4">
                        <h4 className="font-medium mb-2">Surfaces Intérieures à Peindre (Murs UNIQUEMENT)</h4>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                          <li>
                            <strong>Espaces Pédagogiques:</strong> 36 salles
                            <ul className="list-disc list-inside ml-4 mt-1">
                              <li>Surface Murs à peindre par salle type (60m² au sol): 70 m²</li>
                            </ul>
                          </li>
                          <li>
                            <strong>Espaces Administratifs:</strong> 8 bureaux
                            <ul className="list-disc list-inside ml-4 mt-1">
                              <li>Surface Murs à peindre par bureau type (20m² au sol): 50 m²</li>
                            </ul>
                          </li>
                          <li>
                            <strong>Espace Commun:</strong> 1 salle polyvalente (100 m² au sol)
                            <ul className="list-disc list-inside ml-4 mt-1">
                              <li>Surface Murs à peindre: estimée à 120 m²</li>
                            </ul>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-medium mb-2">Surfaces Extérieures à Ravaler (Façades)</h4>
                        <p className="text-gray-700">Total : 2 334 m²</p>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-french-blue mb-3">Spécifications Techniques</h3>
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li><strong>Peinture Intérieure:</strong> Inclut la préparation des supports (lessivage, rebouchage, ponçage, sous-couche) et l'application de deux couches de peinture sur les murs uniquement. Les plafonds ne sont pas peints.</li>
                        <li><strong>Ravalement de Façade:</strong> Traitement complet des façades extérieures adaptées au climat local.</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-french-blue mb-3">Cadence et Critères de Priorisation</h3>
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li><strong>Peinture Intérieure (Murs uniquement):</strong> Roulement intégral sur 5 ans.</li>
                        <li><strong>Ravalement de Façade:</strong> Fractionné en 5 zones/bâtiments, environ 467 m² traités chaque année.</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-french-blue mb-3">Hypothèses Budgétaires</h3>
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Coût unitaire peinture intérieure (murs uniquement): 3 500 FCFA/m²</li>
                        <li>Coût unitaire ravalement de façade: 5 000 FCFA/m²</li>
                        <li>Provision pour Imprévus et Ajustements: Marge de 10% ajoutée au budget annuel.</li>
                        <li>Recette Annuelle Écolages (Référence): 1 231 445 000 FCFA</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-french-blue mb-3">Synthèse Budgétaire sur 5 ans</h3>
                      <div className="overflow-x-auto">
                        <table className="min-w-full border-collapse border border-gray-300 text-sm">
                          <thead>
                            <tr className="bg-gray-100">
                              <th className="border border-gray-300 px-2 py-2">Année</th>
                              <th className="border border-gray-300 px-2 py-2">Surface peinte (m²)</th>
                              <th className="border border-gray-300 px-2 py-2">Surface ravalée (m²)</th>
                              <th className="border border-gray-300 px-2 py-2">Coût total avec 10% imprévus (FCFA)</th>
                              <th className="border border-gray-300 px-2 py-2">% des écolages</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="border border-gray-300 px-2 py-2">Année 1</td>
                              <td className="border border-gray-300 px-2 py-2">710</td>
                              <td className="border border-gray-300 px-2 py-2">467</td>
                              <td className="border border-gray-300 px-2 py-2">5 336 100</td>
                              <td className="border border-gray-300 px-2 py-2 font-medium text-french-blue">0,43 %</td>
                            </tr>
                            <tr>
                              <td className="border border-gray-300 px-2 py-2">Année 2</td>
                              <td className="border border-gray-300 px-2 py-2">540</td>
                              <td className="border border-gray-300 px-2 py-2">467</td>
                              <td className="border border-gray-300 px-2 py-2">4 647 500</td>
                              <td className="border border-gray-300 px-2 py-2 font-medium text-french-blue">0,38 %</td>
                            </tr>
                            <tr>
                              <td className="border border-gray-300 px-2 py-2">Année 3</td>
                              <td className="border border-gray-300 px-2 py-2">590</td>
                              <td className="border border-gray-300 px-2 py-2">467</td>
                              <td className="border border-gray-300 px-2 py-2">4 840 000</td>
                              <td className="border border-gray-300 px-2 py-2 font-medium text-french-blue">0,39 %</td>
                            </tr>
                            <tr>
                              <td className="border border-gray-300 px-2 py-2">Année 4</td>
                              <td className="border border-gray-300 px-2 py-2">590</td>
                              <td className="border border-gray-300 px-2 py-2">467</td>
                              <td className="border border-gray-300 px-2 py-2">4 840 000</td>
                              <td className="border border-gray-300 px-2 py-2 font-medium text-french-blue">0,39 %</td>
                            </tr>
                            <tr>
                              <td className="border border-gray-300 px-2 py-2">Année 5</td>
                              <td className="border border-gray-300 px-2 py-2">660</td>
                              <td className="border border-gray-300 px-2 py-2">466</td>
                              <td className="border border-gray-300 px-2 py-2">5 627 600</td>
                              <td className="border border-gray-300 px-2 py-2 font-medium text-french-blue">0,46 %</td>
                            </tr>
                            <tr className="bg-gray-100 font-bold">
                              <td className="border border-gray-300 px-2 py-2">TOTAL</td>
                              <td className="border border-gray-300 px-2 py-2">3 090</td>
                              <td className="border border-gray-300 px-2 py-2">2 334</td>
                              <td className="border border-gray-300 px-2 py-2">25 291 200</td>
                              <td className="border border-gray-300 px-2 py-2 font-medium text-french-blue">2,05 %</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-french-blue mb-3">Planification et Contrôle Qualité</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-medium mb-2">Planification Annuelle</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>Interventions programmées pendant les congés scolaires (avril, juillet-août, décembre)</li>
                            <li>Coordination avec les autres travaux d'entretien et maintenance</li>
                            <li>Planning détaillé communiqué en début d'année scolaire</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium mb-2">Contrôle Qualité</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>Sélection rigoureuse des prestataires (minimum 3 devis)</li>
                            <li>Cahier des charges précis avec spécifications techniques</li>
                            <li>Contrôle qualité systématique en fin de travaux</li>
                            <li>Garantie décennale exigée pour les travaux de façade</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-french-blue/10 to-blue-100 p-6 rounded-lg">
                      <h4 className="font-semibold text-lg mb-3 text-french-blue">Conclusion</h4>
                      <p className="text-gray-700 mb-4">
                        Ce plan pluriannuel de peinture et ravalement représente un investissement stratégique de <strong>25,3 millions de FCFA sur 5 ans</strong>, soit un impact relatif de <strong>2,05% des recettes totales</strong>.
                      </p>
                      <p className="text-gray-700 mb-4">
                        À l'issue de ce cycle, il conviendra probablement de relancer un plan similaire afin de maintenir une logique de roulement permanent, garantissant la pérennité et la performance du patrimoine immobilier.
                      </p>
                      <div className="text-center">
                        <a 
                          href="/plan-peinture-ravalement" 
                          className="inline-flex items-center px-6 py-3 bg-french-blue text-white rounded-lg hover:bg-french-blue/90 transition-colors font-medium"
                        >
                          Consulter le plan détaillé
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="informatique">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl font-playfair text-french-blue">
                      Renouvellement du Matériel Informatique
                    </CardTitle>
                    <CardDescription className="text-lg">
                      Modernisation des équipements pédagogiques numériques
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-french-blue mb-3">Stratégie de renouvellement</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-3">Ordinateurs (PC)</h4>
                          <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>Cycle de renouvellement : 4-5 ans</li>
                            <li>Priorité aux salles informatiques</li>
                            <li>Déploiement progressif par étage</li>
                            <li>Configuration adaptée aux besoins pédagogiques</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-3">Vidéoprojecteurs</h4>
                          <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>Cycle de renouvellement : 6-7 ans</li>
                            <li>Remplacement par technologie LED</li>
                            <li>Installation de supports fixes</li>
                            <li>Système de gestion centralisée</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-french-blue mb-3">Budget et planification</h3>
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <div className="grid md:grid-cols-3 gap-4 text-center">
                          <div>
                            <div className="text-2xl font-bold text-french-blue">30%</div>
                            <div className="text-sm text-gray-600">du parc renouvelé chaque année</div>
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-french-blue">€150K</div>
                            <div className="text-sm text-gray-600">budget annuel moyen</div>
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-french-blue">100%</div>
                            <div className="text-sm text-gray-600">du parc modernisé d'ici 2030</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="acoustique">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl font-playfair text-french-blue">
                      Amélioration des Plafonds Acoustiques
                    </CardTitle>
                    <CardDescription className="text-lg">
                      Optimisation du confort sonore des espaces d'apprentissage
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-10">
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-french-blue">Diagnostic et objectifs</h3>
                      <p className="text-gray-700">
                        Un audit détaillé a révélé que 25 salles pédagogiques, l'amphithéâtre et plusieurs espaces communs
                        souffrent d'un temps de réverbération trop élevé, nuisant à la compréhension orale et à la
                        concentration. L'objectif est de ramener le niveau sonore moyen à &lt; 45 dB en installant des
                        plafonds acoustiques performants, tout en améliorant la qualité architecturale des espaces.
                      </p>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="bg-french-blue/10 border border-french-blue/20 p-4 rounded-lg">
                          <p className="text-sm uppercase tracking-wide text-french-blue font-semibold mb-1">Périmètre</p>
                          <p className="text-2xl font-bold text-french-blue">25 salles</p>
                          <p className="text-sm text-gray-600">Interventions prioritaires sur les salles de classe du 1er et 2e étage</p>
                        </div>
                        <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-lg">
                          <p className="text-sm uppercase tracking-wide text-emerald-700 font-semibold mb-1">Coût total</p>
                          <p className="text-2xl font-bold text-emerald-700">30 M FCFA</p>
                          <p className="text-sm text-gray-600">1 200 000 FCFA par salle, matériaux et pose inclus</p>
                        </div>
                        <div className="bg-purple-50 border border-purple-200 p-4 rounded-lg">
                          <p className="text-sm uppercase tracking-wide text-purple-700 font-semibold mb-1">Impact</p>
                          <p className="text-2xl font-bold text-purple-700">-6 dB</p>
                          <p className="text-sm text-gray-600">Gain acoustique attendu sur le temps de réverbération</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-french-blue">Analyse budgétaire</h3>
                      <p className="text-gray-700">
                        Sur la base des effectifs prévisionnels 2025-2026 (614 élèves) et des recettes d'écolage estimées à
                        <strong> 1&nbsp;231&nbsp;445&nbsp;000 FCFA</strong>, l'investissement représente une charge maîtrisée
                        pour l'établissement. Deux scénarios d'amortissement sont proposés pour garantir la soutenabilité du
                        projet.
                      </p>
                      <div className="overflow-x-auto">
                        <table className="min-w-full border border-gray-200 text-sm">
                          <thead className="bg-gray-50">
                            <tr>
                              <th className="px-4 py-2 border border-gray-200 text-left">Scénario</th>
                              <th className="px-4 py-2 border border-gray-200 text-left">Coût annuel</th>
                              <th className="px-4 py-2 border border-gray-200 text-left">Impact sur les recettes</th>
                              <th className="px-4 py-2 border border-gray-200 text-left">Effort par élève/mois</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="px-4 py-3 border border-gray-200 font-medium">Amortissement 1 an</td>
                              <td className="px-4 py-3 border border-gray-200">30&nbsp;000&nbsp;000 FCFA</td>
                              <td className="px-4 py-3 border border-gray-200">2,44&nbsp;% des recettes annuelles</td>
                              <td className="px-4 py-3 border border-gray-200">4&nbsp;887 FCFA</td>
                            </tr>
                            <tr className="bg-gray-50">
                              <td className="px-4 py-3 border border-gray-200 font-medium">Amortissement 5 ans</td>
                              <td className="px-4 py-3 border border-gray-200">6&nbsp;000&nbsp;000 FCFA</td>
                              <td className="px-4 py-3 border border-gray-200">0,49&nbsp;% des recettes annuelles</td>
                              <td className="px-4 py-3 border border-gray-200">977 FCFA</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-french-blue">Plan d'étalement recommandé</h3>
                      <p className="text-gray-700">
                        La stratégie privilégiée consiste à répartir l'investissement sur la durée du plan 2026-2030 afin de
                        minimiser l'impact financier sur les familles et d'assurer une montée en gamme progressive des salles
                        d'apprentissage.
                      </p>
                      <div className="grid md:grid-cols-5 gap-4">
                        {[1, 2, 3, 4, 5].map((annee) => (
                          <div key={annee} className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                            <p className="text-xs uppercase tracking-wide text-gray-500">Année {annee}</p>
                            <p className="text-lg font-semibold text-french-blue">5 salles rénovées</p>
                            <p className="text-sm text-gray-600">Suivi acoustique post-travaux &amp; ajustements</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-french-blue">Solutions techniques complémentaires</h3>
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li><strong>Plafonds suspendus absorbants :</strong> dalles haute densité avec coefficient αw ≥ 0,80.</li>
                        <li><strong>Panneaux muraux décoratifs :</strong> bandes verticales micro-perforées pour limiter les réflexions latérales.</li>
                        <li><strong>Traitement des sources sonores :</strong> capotage des climatiseurs et optimisation du mobilier pour éviter les résonances.</li>
                        <li><strong>Suivi de performance :</strong> mesures annuelles du temps de réverbération et enquêtes de satisfaction des usagers.</li>
                      </ul>
                    </div>

                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PlanMaintenanceStrategique;