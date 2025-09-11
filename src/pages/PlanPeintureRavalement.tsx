import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
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
  const scenarioData = [
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
                Le plan prévoit une approche de traitement des murs uniquement, avec des faux plafonds acoustiques. Les estimations de surface se basent sur des relevés et calculs détaillés.
              </p>
            </div>

            <div className="border-2 border-french-blue/10 rounded-lg p-6 bg-white">
              <h3 className="text-xl font-bold text-french-blue mb-4">PEINTURE MURS UNIQUEMENT</h3>
              
              <div className="mb-6">
                <h4 className="font-semibold text-lg mb-2">1. Périmètre Concerné et Détail des Surfaces</h4>
                <h5 className="font-medium mb-1">A.1. Surfaces Intérieures à Peindre (Murs uniquement)</h5>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>
                    <strong>Espaces Pédagogiques:</strong> 36 salles (classes, BCD, CDI)
                    <ul className="list-disc pl-5 mt-1">
                      <li>Surface Murs à peindre par salle type (60m² au sol): 87 m²</li>
                      <li>Total peinture par salle type: 87 m²</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Espaces Administratifs:</strong> 8 bureaux
                    <ul className="list-disc pl-5 mt-1">
                      <li>Surface Murs à peindre par bureau type (20m² au sol): 50 m²</li>
                      <li>Total peinture par bureau type: 50 m²</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Espace Commun:</strong> 1 salle polyvalente (120 m² au sol)
                    <ul className="list-disc pl-5 mt-1">
                      <li>Surface Murs à peindre: estimée à 170 m²</li>
                      <li>Total peinture salle polyvalente: 170 m²</li>
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
                  <li><strong>Peinture Intérieure:</strong> Inclut la préparation des supports (lessivage, rebouchage, ponçage, sous-couche) et l'application de deux couches de peinture sur les murs. Les plafonds seront équipés de faux plafonds acoustiques.</li>
                  <li><strong>Ravalement de Façade:</strong> Inclut la préparation des supports (nettoyage, traitements, réparations, primaire) et l'application d'un revêtement de façade adapté.</li>
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-lg mb-2">3. Cadence Retenue et Critères de Priorisation</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li><strong>Peinture Intérieure (Murs uniquement):</strong> Roulement intégral sur 5 ans.</li>
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
                      cout: { 
                        label: "Coût total",
                        color: "hsl(var(--chart-1))" 
                      },
                      surfaces: { 
                        label: "Surface totale",
                        color: "hsl(var(--chart-2))" 
                      },
                      percentage: { 
                        label: "% des écolages",
                        color: "hsl(var(--chart-3))" 
                      }
                    }}
                  >
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={scenarioData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="year" />
                        <YAxis 
                          yAxisId="left" 
                          orientation="left" 
                          label={{ value: 'Coût (FCFA)', angle: -90, position: 'insideLeft' }}
                          tickFormatter={(value) => `${(value / 1000000).toFixed(1)}M`}
                        />
                        <YAxis 
                          yAxisId="right" 
                          orientation="right" 
                          label={{ value: 'Surface (m²)', angle: 90, position: 'insideRight' }}
                        />
                        <Tooltip
                          content={({ active, payload, label }) => {
                            if (active && payload && payload.length) {
                              return (
                                <div className="bg-white p-3 border border-gray-300 rounded-lg shadow-lg">
                                  <p className="font-semibold mb-2">{`${label}`}</p>
                                  {payload.map((pld, index) => (
                                    <div key={index} className="flex items-center gap-2">
                                      <div 
                                        className="w-3 h-3 rounded"
                                        style={{ backgroundColor: pld.color }}
                                      />
                                      <span className="text-sm">
                                        {pld.dataKey === 'cout' && `Coût total: ${pld.value?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} FCFA`}
                                        {pld.dataKey === 'surfaces' && `Surface totale: ${pld.value} m²`}
                                        {pld.dataKey === 'percentage' && `% des écolages: ${((pld.value as number) * 100).toFixed(2)}%`}
                                      </span>
                                    </div>
                                  ))}
                                </div>
                              );
                            }
                            return null;
                          }}
                        />
                        <Legend 
                          formatter={(value) => {
                            if (value === 'cout') return 'Coût total (FCFA)';
                            if (value === 'surfaces') return 'Surface totale (m²)';
                            if (value === 'percentage') return '% des écolages';
                            return value;
                          }}
                        />
                        <Bar yAxisId="left" dataKey="cout" fill="hsl(var(--chart-1))" name="cout" />
                        <Bar yAxisId="right" dataKey="surfaces" fill="hsl(var(--chart-2))" name="surfaces" />
                        <Bar yAxisId="left" dataKey="percentage" fill="hsl(var(--chart-3))" name="percentage" />
                      </BarChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </div>

                <div className="mt-8 bg-blue-50 p-4 rounded-lg">
                  <h5 className="font-bold mb-2 text-french-blue">Analyse Graphique :</h5>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Le coût annuel varie entre 5,1 M et 5,8 M FCFA, représentant 0,53% à 0,60% des écolages</li>
                    <li>Les surfaces traitées varient entre 659 m² et 829 m² selon les années</li>
                    <li>L'investissement reste maîtrisé, avec une moyenne de 0,56% des écolages sur 5 ans</li>
                  </ul>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-lg mb-2">6. Planification des Interventions et Contrôle Qualité</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium mb-2">Planification Annuelle :</h5>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Interventions programmées pendant les congés scolaires (avril, juillet-août, décembre)</li>
                      <li>Coordination avec les autres travaux d'entretien et maintenance</li>
                      <li>Planning détaillé communiqué en début d'année scolaire</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium mb-2">Contrôle Qualité :</h5>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
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
                <p className="text-gray-700 mb-2">
                  Ce plan pluriannuel de peinture et ravalement représente un investissement stratégique de <strong>27,1 millions de FCFA sur 5 ans</strong>, soit une moyenne de <strong>0,56% des écolages annuels</strong>.
                </p>
                <p className="text-gray-700">
                  L'approche "murs uniquement" avec faux plafonds acoustiques offre un excellent rapport qualité-prix, garantissant un environnement éducatif soigné et fonctionnel pour l'ensemble de la communauté scolaire.
                </p>
              </div>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600 mb-2">
                  <strong>Pour accéder à la note détaillée complète :</strong>
                </p>
                <Button variant="outline" className="text-french-blue border-french-blue hover:bg-french-blue hover:text-white">
                  Consulter le document technique complet
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PlanPeintureRavalement;