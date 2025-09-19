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
    { year: 'Année 1', cout: 5336100, surfaces: 710, percentage: 0.43 },
    { year: 'Année 2', cout: 4647500, surfaces: 540, percentage: 0.38 },
    { year: 'Année 3', cout: 4840000, surfaces: 590, percentage: 0.39 },
    { year: 'Année 4', cout: 4840000, surfaces: 590, percentage: 0.39 },
    { year: 'Année 5', cout: 5627600, surfaces: 660, percentage: 0.46 },
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
          <Link to="/plan-maintenance-strategique" className="flex items-center gap-2">
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
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
                  <h4 className="font-semibold text-yellow-800 mb-2">PEINTURE MURS UNIQUEMENT (AVEC POSE DE FAUX-PLAFONDS ACOUSTIQUES)</h4>
                  <p className="text-yellow-700">
                    Ce scénario part du principe que les plafonds des salles, bureaux et de la salle polyvalente seront équipés de faux-plafonds acoustiques. La pose de ces faux-plafonds constitue un lot de travaux et un budget distincts, non inclus dans la présente note. Par conséquent, ce scénario ne budgétise que la peinture des murs.
                  </p>
                </div>
            </div>

            <div className="border-2 border-french-blue/10 rounded-lg p-6 bg-white">
              <h3 className="text-xl font-bold text-french-blue mb-4">PEINTURE MURS UNIQUEMENT</h3>
              
              <div className="mb-6">
                <h4 className="font-semibold text-lg mb-2">1. Périmètre Concerné et Détail des Surfaces</h4>
                <h5 className="font-medium mb-1">B.1. Surfaces Intérieures à Peindre (Murs UNIQUEMENT)</h5>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>
                    <strong>Espaces Pédagogiques:</strong> 36 salles
                    <ul className="list-disc pl-5 mt-1">
                      <li>Surface Murs à peindre par salle type (60m² au sol): 70 m²</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Espaces Administratifs:</strong> 8 bureaux
                    <ul className="list-disc pl-5 mt-1">
                      <li>Surface Murs à peindre par bureau type (20m² au sol): 50 m²</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Espace Commun:</strong> 1 salle polyvalente (100 m² au sol)
                    <ul className="list-disc pl-5 mt-1">
                      <li>Surface Murs à peindre: estimée à 120 m²</li>
                    </ul>
                  </li>
                </ul>

                <h5 className="font-medium mt-4 mb-1">B.2. Surfaces Extérieures à Ravaler (Façades)</h5>
                <p className="text-gray-700 mb-2">Identique au Scénario A : Total 2 334 m²</p>
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
                  <li>Recette Annuelle Écolages (Référence): 1 231 445 000 FCFA</li>
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-lg mb-2">5. Synthèse Budgétaire Annuelle Prévisionnelle (Peinture Murs UNIQUEMENT)</h4>
                <p className="text-gray-600 mb-4">
                  <strong>Calcul des surfaces peintes annuelles (Murs Uniquement) :</strong><br/>
                  Salle type : 70 m² | Bureau type : 50 m² | Salle Polyvalente : 120 m²
                </p>
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
                        <td className="border border-gray-300 px-4 py-2">710</td>
                        <td className="border border-gray-300 px-4 py-2">2 516 000</td>
                        <td className="border border-gray-300 px-4 py-2">467</td>
                        <td className="border border-gray-300 px-4 py-2">2 335 000</td>
                        <td className="border border-gray-300 px-4 py-2">4 851 000</td>
                        <td className="border border-gray-300 px-4 py-2">5 336 100</td>
                        <td className="border border-gray-300 px-4 py-2 font-medium text-french-blue">0,43 %</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Année 2</td>
                        <td className="border border-gray-300 px-4 py-2">7</td>
                        <td className="border border-gray-300 px-4 py-2">1</td>
                        <td className="border border-gray-300 px-4 py-2">0</td>
                        <td className="border border-gray-300 px-4 py-2">540</td>
                        <td className="border border-gray-300 px-4 py-2">1 890 000</td>
                        <td className="border border-gray-300 px-4 py-2">467</td>
                        <td className="border border-gray-300 px-4 py-2">2 335 000</td>
                        <td className="border border-gray-300 px-4 py-2">4 225 000</td>
                        <td className="border border-gray-300 px-4 py-2">4 647 500</td>
                        <td className="border border-gray-300 px-4 py-2 font-medium text-french-blue">0,38 %</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Année 3</td>
                        <td className="border border-gray-300 px-4 py-2">7</td>
                        <td className="border border-gray-300 px-4 py-2">2</td>
                        <td className="border border-gray-300 px-4 py-2">0</td>
                        <td className="border border-gray-300 px-4 py-2">590</td>
                        <td className="border border-gray-300 px-4 py-2">2 065 000</td>
                        <td className="border border-gray-300 px-4 py-2">467</td>
                        <td className="border border-gray-300 px-4 py-2">2 335 000</td>
                        <td className="border border-gray-300 px-4 py-2">4 400 000</td>
                        <td className="border border-gray-300 px-4 py-2">4 840 000</td>
                        <td className="border border-gray-300 px-4 py-2 font-medium text-french-blue">0,39 %</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Année 4</td>
                        <td className="border border-gray-300 px-4 py-2">7</td>
                        <td className="border border-gray-300 px-4 py-2">2</td>
                        <td className="border border-gray-300 px-4 py-2">0</td>
                        <td className="border border-gray-300 px-4 py-2">590</td>
                        <td className="border border-gray-300 px-4 py-2">2 065 000</td>
                        <td className="border border-gray-300 px-4 py-2">467</td>
                        <td className="border border-gray-300 px-4 py-2">2 335 000</td>
                        <td className="border border-gray-300 px-4 py-2">4 400 000</td>
                        <td className="border border-gray-300 px-4 py-2">4 840 000</td>
                        <td className="border border-gray-300 px-4 py-2 font-medium text-french-blue">0,39 %</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Année 5</td>
                        <td className="border border-gray-300 px-4 py-2">8</td>
                        <td className="border border-gray-300 px-4 py-2">2</td>
                        <td className="border border-gray-300 px-4 py-2">0</td>
                        <td className="border border-gray-300 px-4 py-2">660</td>
                        <td className="border border-gray-300 px-4 py-2">2 786 000</td>
                        <td className="border border-gray-300 px-4 py-2">466</td>
                        <td className="border border-gray-300 px-4 py-2">2 330 000</td>
                        <td className="border border-gray-300 px-4 py-2">5 116 000</td>
                        <td className="border border-gray-300 px-4 py-2">5 627 600</td>
                        <td className="border border-gray-300 px-4 py-2 font-medium text-french-blue">0,46 %</td>
                      </tr>
                      <tr className="bg-gray-100 font-bold">
                        <td className="border border-gray-300 px-4 py-2">TOTAL</td>
                        <td className="border border-gray-300 px-4 py-2">36</td>
                        <td className="border border-gray-300 px-4 py-2">8</td>
                        <td className="border border-gray-300 px-4 py-2">1</td>
                        <td className="border border-gray-300 px-4 py-2">3090</td>
                        <td className="border border-gray-300 px-4 py-2">11 322 000</td>
                        <td className="border border-gray-300 px-4 py-2">2334</td>
                        <td className="border border-gray-300 px-4 py-2">11 670 000</td>
                        <td className="border border-gray-300 px-4 py-2">22 992 000</td>
                        <td className="border border-gray-300 px-4 py-2">25 291 200</td>
                        <td className="border border-gray-300 px-4 py-2 font-medium text-french-blue">2,05 %</td>
                      </tr>
                    </tbody>
                  </table>
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
                <p className="text-gray-700 mb-4">
                  Ce plan de renouvellement sur six ans permet :
                </p>
                <ul className="list-disc pl-5 space-y-1 text-gray-700 mb-4">
                  <li>De maintenir un parc homogène et performant</li>
                  <li>De lisser les dépenses d'investissement sur la durée</li>
                  <li>De répondre aux contraintes climatiques locales en anticipant l'usure accélérée du matériel</li>
                  <li>D'assurer la continuité des apprentissages dans des conditions de projection optimales</li>
                </ul>
                <p className="text-gray-700 mb-2">
                  Ce plan pluriannuel de peinture et ravalement représente un investissement stratégique de <strong>25,3 millions de FCFA sur 5 ans</strong>, soit un impact relatif de <strong>2,05% des recettes totales</strong>.
                </p>
                <p className="text-gray-700">
                  À l'issue de ce cycle, il conviendra probablement de relancer un plan similaire afin de remplacer progressivement les éléments traités lors de la première année. Cela permettra de maintenir une logique de roulement permanent, garantissant la pérennité et la performance du patrimoine immobilier.
                </p>
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