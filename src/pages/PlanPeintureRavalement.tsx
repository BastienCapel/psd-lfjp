
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ChartContainer, 
  ChartTooltip, 
  ChartTooltipContent
} from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home } from "lucide-react";
import { Link } from 'react-router-dom';

const PlanPeintureRavalement = () => {
  // Données pour les graphiques
  const scenarioAData = [
    { year: 'Année 1', cout: 7862250, surfaces: 1375, percentage: 0.82 },
    { year: 'Année 2', cout: 6745750, surfaces: 1085, percentage: 0.70 },
    { year: 'Année 3', cout: 7015250, surfaces: 1155, percentage: 0.73 },
    { year: 'Année 4', cout: 7015250, surfaces: 1155, percentage: 0.73 },
    { year: 'Année 5', cout: 7568000, surfaces: 1300, percentage: 0.79 },
  ];

  const scenarioBData = [
    { year: 'Année 1', cout: 5760150, surfaces: 829, percentage: 0.60 },
    { year: 'Année 2', cout: 5105650, surfaces: 659, percentage: 0.53 },
    { year: 'Année 3', cout: 5298150, surfaces: 709, percentage: 0.55 },
    { year: 'Année 4', cout: 5298150, surfaces: 709, percentage: 0.55 },
    { year: 'Année 5', cout: 5627600, surfaces: 796, percentage: 0.59 },
  ];

  return (
    <div className="min-h-screen flex flex-col font-raleway">
      <Navbar showLogo={true} />
      
      <div className="bg-gradient-to-r from-french-blue to-blue-700 text-white py-24 md:py-32">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-6 opacity-0 animate-fade-in">
            PLAN PLURIANNUEL DE ROULEMENT DE PEINTURE
          </h1>
          <p className="text-xl md:text-2xl font-raleway font-light max-w-3xl opacity-0 animate-fade-in-delay-1">
            ET DE RAVALEMENT DES FAÇADES (2025-2030)
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-4 flex gap-2">
        <Button variant="outline" asChild>
          <Link to="/plan-strategique" className="flex items-center gap-2">
            <ArrowLeft size={16} /> Retour
          </Link>
        </Button>
        <Button variant="outline" asChild>
          <Link to="/" className="flex items-center gap-2">
            <Home size={16} /> Accueil
          </Link>
        </Button>
      </div>

      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md mb-8">
              <h2 className="text-2xl font-playfair font-bold text-french-blue mb-6">Introduction</h2>
              <p className="text-gray-700 mb-4">
                Afin de garantir un cadre de travail et d'apprentissage soigné, sécurisant, motivant et propice au bien-être de tous les usagers, un plan pluriannuel de rénovation a été établi pour la période 2025-2030. Ce plan vise à maintenir et valoriser le patrimoine immobilier de l'établissement. Il prend spécifiquement en compte la réalité climatique du Sénégal (air salin, chaleur, humidité) et les usages intensifs des locaux scolaires.
              </p>
              <p className="text-gray-700">
                Deux scénarios sont présentés ci-dessous, différant principalement par le traitement des plafonds intérieurs. Les estimations de surface se basent sur des relevés et calculs détaillés.
              </p>
            </div>

            <Tabs defaultValue="scenario-a" className="w-full">
              <TabsList className="grid grid-cols-2 mb-8">
                <TabsTrigger value="scenario-a" className="text-sm md:text-base">
                  Scénario A (Murs et Plafonds)
                </TabsTrigger>
                <TabsTrigger value="scenario-b" className="text-sm md:text-base">
                  Scénario B (Murs uniquement)
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="scenario-a" className="border-2 border-french-blue/10 rounded-lg p-6 bg-white">
                <h3 className="text-xl font-bold text-french-blue mb-4">SCÉNARIO A : PEINTURE MURS ET PLAFONDS</h3>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-lg mb-2">1. Périmètre Concerné et Détail des Surfaces</h4>
                  <h5 className="font-medium mb-1">A.1. Surfaces Intérieures à Peindre (Murs ET Plafonds)</h5>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>
                      <strong>Espaces Pédagogiques:</strong> 36 salles (classes, BCD, CDI)
                      <ul className="list-disc pl-5 mt-1">
                        <li>Surface Murs à peindre par salle type (60m² au sol): 87 m²</li>
                        <li>Surface Plafond à peindre par salle type: 58 m²</li>
                        <li>Total peinture par salle type: 87 m² + 58 m² = 145 m²</li>
                      </ul>
                    </li>
                    <li>
                      <strong>Espaces Administratifs:</strong> 8 bureaux
                      <ul className="list-disc pl-5 mt-1">
                        <li>Surface Murs à peindre par bureau type (20m² au sol): 50 m²</li>
                        <li>Surface Plafond à peindre par bureau type: 20 m²</li>
                        <li>Total peinture par bureau type: 50 m² + 20 m² = 70 m²</li>
                      </ul>
                    </li>
                    <li>
                      <strong>Espace Commun:</strong> 1 salle polyvalente (120 m² au sol)
                      <ul className="list-disc pl-5 mt-1">
                        <li>Surface Murs à peindre: estimée à 170 m²</li>
                        <li>Surface Plafond à peindre: 120 m²</li>
                        <li>Total peinture salle polyvalente: 170 m² + 120 m² = 290 m²</li>
                      </ul>
                    </li>
                  </ul>

                  <h5 className="font-medium mt-4 mb-1">A.2. Surfaces Extérieures à Ravaler (Façades)</h5>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Bâtiment Administratif: 564 m²</li>
                    <li>Bâtiment Collège: 560 m²</li>
                    <li>Bâtiment Laboratoires ("Lab"): 352 m²</li>
                    <li>Bâtiment Primaire: 480 m²</li>
                    <li>Bâtiment Lycée: 378 m²</li>
                    <li><strong>Total Façades Extérieures estimées:</strong> 2 334 m²</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-lg mb-2">2. Spécifications Techniques et Types de Travaux Envisagés</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li><strong>Peinture Intérieure:</strong> Inclut la préparation des supports (lessivage, rebouchage, ponçage, sous-couche) et l'application de deux couches de peinture sur les murs et les plafonds.</li>
                    <li><strong>Ravalement de Façade:</strong> Inclut la préparation des supports (nettoyage, traitements, réparations, primaire) et l'application d'un revêtement de façade adapté.</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-lg mb-2">3. Cadence Retenue et Critères de Priorisation</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li><strong>Peinture Intérieure (Murs et Plafonds):</strong> Roulement intégral sur 5 ans.</li>
                    <li><strong>Ravalement de Façade:</strong> Fractionné en 5 zones/bâtiments, environ 467 m² traités chaque année.</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-lg mb-2">4. Hypothèses Budgétaires</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Coût unitaire peinture intérieure (murs et plafonds): 3 500 FCFA/m²</li>
                    <li>Coût unitaire ravalement de façade: 5 000 FCFA/m²</li>
                    <li>Provision pour Imprévus et Ajustements: Marge de 10% ajoutée au budget annuel.</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-lg mb-2">5. Synthèse Budgétaire Annuelle Prévisionnelle</h4>
                  <div className="overflow-x-auto">
                    <table className="min-w-full border-collapse border border-gray-300 mb-4">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 px-4 py-2">Année</th>
                          <th className="border border-gray-300 px-4 py-2">Salles</th>
                          <th className="border border-gray-300 px-4 py-2">Bureaux</th>
                          <th className="border border-gray-300 px-4 py-2">Salle Poly</th>
                          <th className="border border-gray-300 px-4 py-2">Surface peinte (m²)</th>
                          <th className="border border-gray-300 px-4 py-2">Coût peinture (FCFA)</th>
                          <th className="border border-gray-300 px-4 py-2">Surface ravalée (m²)</th>
                          <th className="border border-gray-300 px-4 py-2">Coût ravalement (FCFA)</th>
                          <th className="border border-gray-300 px-4 py-2">Coût total annuel (FCFA)</th>
                          <th className="border border-gray-300 px-4 py-2">Coût total avec 10% imprévus (FCFA)</th>
                          <th className="border border-gray-300 px-4 py-2">% des écolages</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">Année 1</td>
                          <td className="border border-gray-300 px-4 py-2">7</td>
                          <td className="border border-gray-300 px-4 py-2">1</td>
                          <td className="border border-gray-300 px-4 py-2">1</td>
                          <td className="border border-gray-300 px-4 py-2">1375</td>
                          <td className="border border-gray-300 px-4 py-2">4 812 500</td>
                          <td className="border border-gray-300 px-4 py-2">467</td>
                          <td className="border border-gray-300 px-4 py-2">2 335 000</td>
                          <td className="border border-gray-300 px-4 py-2">7 147 500</td>
                          <td className="border border-gray-300 px-4 py-2">7 862 250</td>
                          <td className="border border-gray-300 px-4 py-2 font-medium text-french-blue">0,82 %</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">Année 2</td>
                          <td className="border border-gray-300 px-4 py-2">7</td>
                          <td className="border border-gray-300 px-4 py-2">1</td>
                          <td className="border border-gray-300 px-4 py-2">0</td>
                          <td className="border border-gray-300 px-4 py-2">1085</td>
                          <td className="border border-gray-300 px-4 py-2">3 797 500</td>
                          <td className="border border-gray-300 px-4 py-2">467</td>
                          <td className="border border-gray-300 px-4 py-2">2 335 000</td>
                          <td className="border border-gray-300 px-4 py-2">6 132 500</td>
                          <td className="border border-gray-300 px-4 py-2">6 745 750</td>
                          <td className="border border-gray-300 px-4 py-2 font-medium text-french-blue">0,70 %</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">Année 3</td>
                          <td className="border border-gray-300 px-4 py-2">7</td>
                          <td className="border border-gray-300 px-4 py-2">2</td>
                          <td className="border border-gray-300 px-4 py-2">0</td>
                          <td className="border border-gray-300 px-4 py-2">1155</td>
                          <td className="border border-gray-300 px-4 py-2">4 042 500</td>
                          <td className="border border-gray-300 px-4 py-2">467</td>
                          <td className="border border-gray-300 px-4 py-2">2 335 000</td>
                          <td className="border border-gray-300 px-4 py-2">6 377 500</td>
                          <td className="border border-gray-300 px-4 py-2">7 015 250</td>
                          <td className="border border-gray-300 px-4 py-2 font-medium text-french-blue">0,73 %</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">Année 4</td>
                          <td className="border border-gray-300 px-4 py-2">7</td>
                          <td className="border border-gray-300 px-4 py-2">2</td>
                          <td className="border border-gray-300 px-4 py-2">0</td>
                          <td className="border border-gray-300 px-4 py-2">1155</td>
                          <td className="border border-gray-300 px-4 py-2">4 042 500</td>
                          <td className="border border-gray-300 px-4 py-2">467</td>
                          <td className="border border-gray-300 px-4 py-2">2 335 000</td>
                          <td className="border border-gray-300 px-4 py-2">6 377 500</td>
                          <td className="border border-gray-300 px-4 py-2">7 015 250</td>
                          <td className="border border-gray-300 px-4 py-2 font-medium text-french-blue">0,73 %</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">Année 5</td>
                          <td className="border border-gray-300 px-4 py-2">8</td>
                          <td className="border border-gray-300 px-4 py-2">2</td>
                          <td className="border border-gray-300 px-4 py-2">0</td>
                          <td className="border border-gray-300 px-4 py-2">1300</td>
                          <td className="border border-gray-300 px-4 py-2">4 550 000</td>
                          <td className="border border-gray-300 px-4 py-2">466</td>
                          <td className="border border-gray-300 px-4 py-2">2 330 000</td>
                          <td className="border border-gray-300 px-4 py-2">6 880 000</td>
                          <td className="border border-gray-300 px-4 py-2">7 568 000</td>
                          <td className="border border-gray-300 px-4 py-2 font-medium text-french-blue">0,79 %</td>
                        </tr>
                        <tr className="bg-gray-100 font-bold">
                          <td className="border border-gray-300 px-4 py-2">TOTAL</td>
                          <td className="border border-gray-300 px-4 py-2">36</td>
                          <td className="border border-gray-300 px-4 py-2">8</td>
                          <td className="border border-gray-300 px-4 py-2">1</td>
                          <td className="border border-gray-300 px-4 py-2">6070</td>
                          <td className="border border-gray-300 px-4 py-2">21 245 000</td>
                          <td className="border border-gray-300 px-4 py-2">2334</td>
                          <td className="border border-gray-300 px-4 py-2">11 670 000</td>
                          <td className="border border-gray-300 px-4 py-2">32 915 000</td>
                          <td className="border border-gray-300 px-4 py-2">36 206 500</td>
                          <td className="border border-gray-300 px-4 py-2 font-medium text-french-blue">0,75 % moy.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="h-96 mt-8">
                    <ChartContainer
                      config={{
                        cout: { color: "#2563eb" },
                        surfaces: { color: "#10b981" },
                        percentage: { color: "#f59e0b" }
                      }}
                    >
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={scenarioAData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="year" />
                          <YAxis yAxisId="left" orientation="left" />
                          <YAxis yAxisId="right" orientation="right" />
                          <YAxis yAxisId="percentage" orientation="right" tickFormatter={(value) => `${value}%`} domain={[0, 1]} tickCount={6} />
                          <ChartTooltip
                            content={
                              <ChartTooltipContent
                                formatter={(value, name) => {
                                  if (name === "cout") 
                                    return [`${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} FCFA`, "Coût total"];
                                  if (name === "percentage")
                                    return [`${(value * 100).toFixed(2)}%`, "% des écolages"];
                                  return [`${value.toString()} m²`, "Surface"];
                                }}
                              />
                            }
                          />
                          <Legend />
                          <Bar dataKey="cout" name="Coût total" yAxisId="left" fill="var(--color-cout)" />
                          <Bar dataKey="surfaces" name="Surface peinte (m²)" yAxisId="right" fill="var(--color-surfaces)" />
                          <Bar dataKey="percentage" name="% des écolages" yAxisId="percentage" fill="var(--color-percentage)" />
                        </BarChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="scenario-b" className="border-2 border-french-blue/10 rounded-lg p-6 bg-white">
                <h3 className="text-xl font-bold text-french-blue mb-4">SCÉNARIO B : PEINTURE MURS UNIQUEMENT (AVEC POSE DE FAUX-PLAFONDS ACOUSTIQUES)</h3>
                
                <p className="text-gray-700 mb-4 italic">
                  <strong>Précision pour le Scénario B :</strong> Ce scénario part du principe que les plafonds des salles, bureaux et de la salle polyvalente seront équipés de faux-plafonds acoustiques. La pose de ces faux-plafonds constitue un lot de travaux et un budget distincts, non inclus dans la présente note. Par conséquent, ce scénario ne budgétise que la peinture des murs.
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-lg mb-2">1. Périmètre Concerné et Détail des Surfaces</h4>
                  <h5 className="font-medium mb-1">B.1. Surfaces Intérieures à Peindre (Murs UNIQUEMENT)</h5>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>
                      <strong>Espaces Pédagogiques:</strong> 36 salles
                      <ul className="list-disc pl-5 mt-1">
                        <li>Surface Murs à peindre par salle type (60m² au sol): 87 m²</li>
                      </ul>
                    </li>
                    <li>
                      <strong>Espaces Administratifs:</strong> 8 bureaux
                      <ul className="list-disc pl-5 mt-1">
                        <li>Surface Murs à peindre par bureau type (20m² au sol): 50 m²</li>
                      </ul>
                    </li>
                    <li>
                      <strong>Espace Commun:</strong> 1 salle polyvalente (120 m² au sol)
                      <ul className="list-disc pl-5 mt-1">
                        <li>Surface Murs à peindre: estimée à 170 m²</li>
                      </ul>
                    </li>
                  </ul>

                  <h5 className="font-medium mt-4 mb-1">B.2. Surfaces Extérieures à Ravaler (Façades)</h5>
                  <p className="text-gray-700">Identique au Scénario A : Total 2 334 m²</p>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-lg mb-2">2. Spécifications Techniques et Types de Travaux Envisagés</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li><strong>Peinture Intérieure:</strong> Inclut la préparation des supports (lessivage, rebouchage, ponçage, sous-couche) et l'application de deux couches de peinture sur les murs uniquement. Les plafonds ne sont pas peints.</li>
                    <li><strong>Ravalement de Façade:</strong> Identique au Scénario A.</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-lg mb-2">3. Cadence Retenue et Critères de Priorisation</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li><strong>Peinture Intérieure (Murs Uniquement):</strong> Roulement intégral sur 5 ans.</li>
                    <li><strong>Ravalement de Façade:</strong> Fractionné en 5 zones/bâtiments, environ 467 m² traités chaque année.</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-lg mb-2">4. Hypothèses Budgétaires</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Coût unitaire peinture intérieure (murs uniquement): 3 500 FCFA/m²</li>
                    <li>Coût unitaire ravalement de façade: 5 000 FCFA/m²</li>
                    <li>Provision pour Imprévus et Ajustements: Marge de 10% ajoutée au budget annuel.</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-lg mb-2">5. Synthèse Budgétaire Annuelle Prévisionnelle</h4>
                  <div className="overflow-x-auto">
                    <table className="min-w-full border-collapse border border-gray-300 mb-4">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 px-4 py-2">Année</th>
                          <th className="border border-gray-300 px-4 py-2">Salles</th>
                          <th className="border border-gray-300 px-4 py-2">Bureaux</th>
                          <th className="border border-gray-300 px-4 py-2">Salle Poly</th>
                          <th className="border border-gray-300 px-4 py-2">Surface peinte (m²)</th>
                          <th className="border border-gray-300 px-4 py-2">Coût peinture (FCFA)</th>
                          <th className="border border-gray-300 px-4 py-2">Surface ravalée (m²)</th>
                          <th className="border border-gray-300 px-4 py-2">Coût ravalement (FCFA)</th>
                          <th className="border border-gray-300 px-4 py-2">Coût total annuel (FCFA)</th>
                          <th className="border border-gray-300 px-4 py-2">Coût total avec 10% imprévus (FCFA)</th>
                          <th className="border border-gray-300 px-4 py-2">% des écolages</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">Année 1</td>
                          <td className="border border-gray-300 px-4 py-2">7</td>
                          <td className="border border-gray-300 px-4 py-2">1</td>
                          <td className="border border-gray-300 px-4 py-2">1</td>
                          <td className="border border-gray-300 px-4 py-2">829</td>
                          <td className="border border-gray-300 px-4 py-2">2 901 500</td>
                          <td className="border border-gray-300 px-4 py-2">467</td>
                          <td className="border border-gray-300 px-4 py-2">2 335 000</td>
                          <td className="border border-gray-300 px-4 py-2">5 236 500</td>
                          <td className="border border-gray-300 px-4 py-2">5 760 150</td>
                          <td className="border border-gray-300 px-4 py-2 font-medium text-french-blue">0,60 %</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">Année 2</td>
                          <td className="border border-gray-300 px-4 py-2">7</td>
                          <td className="border border-gray-300 px-4 py-2">1</td>
                          <td className="border border-gray-300 px-4 py-2">0</td>
                          <td className="border border-gray-300 px-4 py-2">659</td>
                          <td className="border border-gray-300 px-4 py-2">2 306 500</td>
                          <td className="border border-gray-300 px-4 py-2">467</td>
                          <td className="border border-gray-300 px-4 py-2">2 335 000</td>
                          <td className="border border-gray-300 px-4 py-2">4 641 500</td>
                          <td className="border border-gray-300 px-4 py-2">5 105 650</td>
                          <td className="border border-gray-300 px-4 py-2 font-medium text-french-blue">0,53 %</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">Année 3</td>
                          <td className="border border-gray-300 px-4 py-2">7</td>
                          <td className="border border-gray-300 px-4 py-2">2</td>
                          <td className="border border-gray-300 px-4 py-2">0</td>
                          <td className="border border-gray-300 px-4 py-2">709</td>
                          <td className="border border-gray-300 px-4 py-2">2 481 500</td>
                          <td className="border border-gray-300 px-4 py-2">467</td>
                          <td className="border border-gray-300 px-4 py-2">2 335 000</td>
                          <td className="border border-gray-300 px-4 py-2">4 816 500</td>
                          <td className="border border-gray-300 px-4 py-2">5 298 150</td>
                          <td className="border border-gray-300 px-4 py-2 font-medium text-french-blue">0,55 %</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">Année 4</td>
                          <td className="border border-gray-300 px-4 py-2">7</td>
                          <td className="border border-gray-300 px-4 py-2">2</td>
                          <td className="border border-gray-300 px-4 py-2">0</td>
                          <td className="border border-gray-300 px-4 py-2">709</td>
                          <td className="border border-gray-300 px-4 py-2">2 481 500</td>
                          <td className="border border-gray-300 px-4 py-2">467</td>
                          <td className="border border-gray-300 px-4 py-2">2 335 000</td>
                          <td className="border border-gray-300 px-4 py-2">4 816 500</td>
                          <td className="border border-gray-300 px-4 py-2">5 298 150</td>
                          <td className="border border-gray-300 px-4 py-2 font-medium text-french-blue">0,55 %</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">Année 5</td>
                          <td className="border border-gray-300 px-4 py-2">8</td>
                          <td className="border border-gray-300 px-4 py-2">2</td>
                          <td className="border border-gray-300 px-4 py-2">0</td>
                          <td className="border border-gray-300 px-4 py-2">796</td>
                          <td className="border border-gray-300 px-4 py-2">2 786 000</td>
                          <td className="border border-gray-300 px-4 py-2">466</td>
                          <td className="border border-gray-300 px-4 py-2">2 330 000</td>
                          <td className="border border-gray-300 px-4 py-2">5 116 000</td>
                          <td className="border border-gray-300 px-4 py-2">5 627 600</td>
                          <td className="border border-gray-300 px-4 py-2 font-medium text-french-blue">0,59 %</td>
                        </tr>
                        <tr className="bg-gray-100 font-bold">
                          <td className="border border-gray-300 px-4 py-2">TOTAL</td>
                          <td className="border border-gray-300 px-4 py-2">36</td>
                          <td className="border border-gray-300 px-4 py-2">8</td>
                          <td className="border border-gray-300 px-4 py-2">1</td>
                          <td className="border border-gray-300 px-4 py-2">3702</td>
                          <td className="border border-gray-300 px-4 py-2">12 957 000</td>
                          <td className="border border-gray-300 px-4 py-2">2334</td>
                          <td className="border border-gray-300 px-4 py-2">11 670 000</td>
                          <td className="border border-gray-300 px-4 py-2">24 627 000</td>
                          <td className="border border-gray-300 px-4 py-2">27 089 700</td>
                          <td className="border border-gray-300 px-4 py-2 font-medium text-french-blue">0,56 % moy.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="h-96 mt-8">
                    <ChartContainer
                      config={{
                        cout: { color: "#2563eb" },
                        surfaces: { color: "#10b981" },
                        percentage: { color: "#f59e0b" }
                      }}
                    >
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={scenarioBData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="year" />
                          <YAxis yAxisId="left" orientation="left" />
                          <YAxis yAxisId="right" orientation="right" />
                          <YAxis yAxisId="percentage" orientation="right" tickFormatter={(value) => `${value}%`} domain={[0, 1]} tickCount={6} />
                          <ChartTooltip
                            content={
                              <ChartTooltipContent
                                formatter={(value, name) => {
                                  if (name === "cout") 
                                    return [`${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} FCFA`, "Coût total"];
                                  if (name === "percentage")
                                    return [`${(value * 100).toFixed(2)}%`, "% des écolages"];
                                  return [`${value.toString()} m²`, "Surface"];
                                }}
                              />
                            }
                          />
                          <Legend />
                          <Bar dataKey="cout" name="Coût total" yAxisId="left" fill="var(--color-cout)" />
                          <Bar dataKey="surfaces" name="Surface peinte (m²)" yAxisId="right" fill="var(--color-surfaces)" />
                          <Bar dataKey="percentage" name="% des écolages" yAxisId="percentage" fill="var(--color-percentage)" />
                        </BarChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            <div className="bg-white p-8 rounded-lg shadow-md mt-8">
              <h2 className="text-2xl font-playfair font-bold text-french-blue mb-6">Sections Communes aux Deux Scénarios</h2>
              
              <div className="mb-6">
                <h4 className="font-semibold text-lg mb-2">6. Planification des Interventions et Suivi</h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>
                    <strong>Périodes d'intervention :</strong> Pour minimiser les perturbations, les travaux seront majoritairement planifiés durant les périodes de vacances scolaires.
                  </li>
                  <li>
                    <strong>Suivi et Contrôle Qualité :</strong> Un comité de pilotage (Direction, Gestionnaire, représentant du personnel) assurera le suivi. La réception des travaux sera effectuée par une personne qualifiée, potentiellement assistée d'un expert externe si besoin, pour garantir la conformité.
                  </li>
                  <li>
                    <strong>Durabilité :</strong> Le cycle de rénovation de 5 ans, associé au choix de matériaux durables et adaptés, vise à maximiser la longévité des travaux.
                  </li>
                </ul>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-lg mb-2">Conclusion</h4>
                <p className="text-gray-700">
                  Ce plan pluriannuel de rénovation représente un investissement stratégique. La présentation de ces deux scénarios permet d'évaluer les options en fonction des priorités (traitement acoustique des plafonds vs. peinture intégrale) et des contraintes budgétaires. Dans les deux cas, sa mise en œuvre méthodique améliorera significativement le cadre de vie et de travail, préservera le patrimoine et optimisera les coûts de maintenance à long terme. Le choix du scénario conditionnera le budget global et l'articulation avec d'éventuels autres projets (comme la pose de faux-plafonds acoustiques pour le Scénario B).
                </p>
              </div>
            </div>

            <div className="flex justify-center mt-10">
              <a 
                href="https://docs.google.com/document/d/19e9WmdweCl0i7VrPrL2oX4QkM9KxgIgMgnSIKnd7Llg/edit?tab=t.0" 
                className="bg-french-blue text-white px-5 py-3 rounded-lg font-medium flex items-center hover:bg-blue-700 transition-colors"
                target="_blank" 
                rel="noopener noreferrer"
              >
                Accéder à la note complète
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PlanPeintureRavalement;
