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
                      <h3 className="text-xl font-semibold text-french-blue mb-3">Objectifs</h3>
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Maintenir l'état esthétique et structurel des façades</li>
                        <li>Préserver la valeur patrimoniale de l'établissement</li>
                        <li>Améliorer l'image de marque du lycée</li>
                        <li>Assurer la protection des structures contre les intempéries</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-french-blue mb-3">Planning prévisionnel</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-semibold mb-2">2025-2026</h4>
                          <p className="text-sm text-gray-600">Bâtiment principal - Façade Est et Sud</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-semibold mb-2">2026-2027</h4>
                          <p className="text-sm text-gray-600">Bâtiment principal - Façade Ouest et Nord</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-semibold mb-2">2027-2028</h4>
                          <p className="text-sm text-gray-600">Bâtiments annexes et espaces communs</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-semibold mb-2">2028-2030</h4>
                          <p className="text-sm text-gray-600">Rénovation intérieure et espaces spécialisés</p>
                        </div>
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
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-french-blue mb-3">Diagnostic acoustique</h3>
                      <p className="text-gray-700 mb-4">
                        Un audit acoustique complet a identifié les zones prioritaires nécessitant 
                        une intervention pour améliorer le confort sonore et les conditions d'apprentissage.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                          <h4 className="font-semibold text-red-800 mb-2">Zones critiques</h4>
                          <ul className="list-disc list-inside text-sm text-red-700 space-y-1">
                            <li>Amphithéâtre principal</li>
                            <li>Salles de classe étage 2</li>
                            <li>Cantine et espaces de restauration</li>
                          </ul>
                        </div>
                        <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg">
                          <h4 className="font-semibold text-orange-800 mb-2">Zones à améliorer</h4>
                          <ul className="list-disc list-inside text-sm text-orange-700 space-y-1">
                            <li>Salles de classe étage 1</li>
                            <li>Laboratoires de sciences</li>
                            <li>Bibliothèque et CDI</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-french-blue mb-3">Solutions techniques</h3>
                      <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-french-blue rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <h4 className="font-semibold">Plafonds suspendus absorbants</h4>
                            <p className="text-gray-600 text-sm">Installation de dalles acoustiques haute performance</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-french-blue rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <h4 className="font-semibold">Panneaux muraux décoratifs</h4>
                            <p className="text-gray-600 text-sm">Éléments acoustiques intégrés au design</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-french-blue rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <h4 className="font-semibold">Traitement des sources sonores</h4>
                            <p className="text-gray-600 text-sm">Isolation des équipements techniques bruyants</p>
                          </div>
                        </div>
                      </div>
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