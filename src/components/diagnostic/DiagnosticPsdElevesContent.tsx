
import React from 'react';
import DiagnosticCard from './DiagnosticCard';
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, AlertTriangle, Users, BookOpen, Heart, TrendingUp, TrendingDown } from 'lucide-react';

const DiagnosticPsdElevesContent = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <DiagnosticCard 
        title="La voix des élèves du LFJP" 
        description="Sondage sur la satisfaction et les priorités - Analyse des résultats"
        className="bg-french-blue/5 border-french-blue/20"
      >
        <div className="space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-french-blue mb-2">Échantillon et barème</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• <strong>98 réponses</strong> au total</li>
                <li>• Classes les mieux représentées :</li>
                <li className="ml-4">- 1ʳᵉ : 24%</li>
                <li className="ml-4">- 2ⁿᵈᵉ : 21%</li>
                <li className="ml-4">- 6ᵉ : 19%</li>
                <li>• Échelle : 1 = très insatisfaisant → 5 = très satisfaisant</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-french-blue mb-2">Indicateur général de recommandation</h4>
              <div className="space-y-3">
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600 mb-1">59%</div>
                  <p className="text-sm text-gray-600">recommandent le LFJP</p>
                  <p className="text-xs text-amber-600 mt-1">Taux modéré - Marge d'amélioration</p>
                </div>
                <Progress value={59} className="h-3" />
              </div>
            </div>
          </div>
        </div>
      </DiagnosticCard>

      {/* Qualité de l'information */}
      <DiagnosticCard title="Qualité de l'information fournie aux élèves" className="border-red-200">
        <div className="space-y-6">
          <p className="text-gray-700 mb-4">Moyennes sur 5 - Communication perçue comme insuffisante :</p>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg border-l-4 border-red-400">
              <div className="flex items-center gap-3">
                <AlertTriangle className="h-5 w-5 text-red-600" />
                <span className="font-medium">Sorties & voyages</span>
              </div>
              <div className="text-right">
                <span className="text-red-600 font-semibold">2,05/5</span>
                <p className="text-xs text-red-500">Maillon le plus faible</p>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
              <span className="font-medium">Décisions budgétaires de l'AP</span>
              <span className="text-red-600 font-semibold">2,16/5</span>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-amber-50 rounded-lg">
              <span className="font-medium">Projets & activités pédagogiques</span>
              <span className="text-amber-600 font-semibold">2,41/5</span>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-amber-50 rounded-lg">
              <span className="font-medium">Paiement des écolages</span>
              <span className="text-amber-600 font-semibold">2,45/5</span>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border-l-4 border-green-400">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="font-medium">Pronote</span>
              </div>
              <div className="text-right">
                <span className="text-green-600 font-semibold">3,18/5</span>
                <p className="text-xs text-green-500">Seul canal satisfaisant</p>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 p-4 rounded-lg">
            <h5 className="font-medium text-amber-800 mb-2">Constat :</h5>
            <p className="text-sm text-amber-700">
              Besoin de communication proactive et régulière sur les projets, voyages et gestion financière.
            </p>
          </div>
        </div>
      </DiagnosticCard>

      {/* Installations & équipements */}
      <DiagnosticCard title="Installations & équipements" className="border-red-200">
        <div className="space-y-6">
          <p className="text-gray-700 mb-4">Moyennes sur 5 - Équipements jugés insuffisants :</p>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg border-l-4 border-red-500">
              <div className="flex items-center gap-3">
                <AlertTriangle className="h-5 w-5 text-red-600" />
                <span className="font-medium">Sanitaires</span>
              </div>
              <div className="text-right">
                <span className="text-red-600 font-semibold">1,98/5</span>
                <p className="text-xs text-red-500">Sujet le plus critique</p>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
              <span className="font-medium">Salles de classe</span>
              <span className="text-red-600 font-semibold">2,17/5</span>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
              <span className="font-medium">Vestiaires & équipements sportifs</span>
              <span className="text-red-600 font-semibold">2,26/5</span>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border-l-4 border-green-400">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="font-medium">CDI-BCD</span>
              </div>
              <div className="text-right">
                <span className="text-green-600 font-semibold">3,49/5</span>
                <p className="text-xs text-green-500">Point fort reconnu</p>
              </div>
            </div>
          </div>

          <div className="bg-red-50 p-4 rounded-lg">
            <h5 className="font-medium text-red-800 mb-2">Mots-clés les plus cités :</h5>
            <div className="flex flex-wrap gap-2">
              <Badge variant="destructive">clim/climatisation (25 occurrences)</Badge>
              <Badge variant="destructive">chaud (13)</Badge>
              <Badge variant="destructive">sanitaires (réparations)</Badge>
              <Badge variant="destructive">foot (espaces de jeu)</Badge>
            </div>
          </div>
        </div>
      </DiagnosticCard>

      {/* Offre scolaire */}
      <DiagnosticCard title="Offre scolaire et enseignements" className="border-amber-200">
        <div className="space-y-6">
          <p className="text-gray-700 mb-4">Moyennes sur 5 - Satisfaction mitigée :</p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                <span className="font-medium">Offre linguistique</span>
                <span className="text-red-600 font-semibold">2,60/5</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                <span className="font-medium">Options payantes / périscolaire</span>
                <span className="text-red-600 font-semibold">2,66/5</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                <span className="font-medium">Ouverture culturelle</span>
                <span className="text-red-600 font-semibold">2,57/5</span>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                <span className="font-medium">Offre sportive</span>
                <span className="text-green-600 font-semibold">3,05/5</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                <span className="font-medium">Enseignement du français</span>
                <span className="text-green-600 font-semibold">3,11/5</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                <span className="font-medium">Maths & sciences</span>
                <span className="text-green-600 font-semibold">3,34/5</span>
              </div>
            </div>
          </div>
        </div>
      </DiagnosticCard>

      {/* Accompagnement */}
      <DiagnosticCard title="Accompagnement des élèves" className="border-green-200">
        <div className="space-y-6">
          <p className="text-gray-700 mb-4">Moyennes sur 5 - Satisfaction globalement positive :</p>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border-l-4 border-green-400">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="font-medium">Professeur principal</span>
              </div>
              <div className="text-right">
                <span className="text-green-600 font-semibold">3,83/5</span>
                <p className="text-xs text-green-500">Relation très favorable</p>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <span className="font-medium">Surveillants</span>
              <span className="text-green-600 font-semibold">3,28/5</span>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <span className="font-medium">Vie scolaire</span>
              <span className="text-green-600 font-semibold">3,22/5</span>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <span className="font-medium">Professeurs du secondaire</span>
              <span className="text-green-600 font-semibold">3,08/5</span>
            </div>
          </div>
        </div>
      </DiagnosticCard>

      {/* Points forts perçus */}
      <DiagnosticCard title="Points forts perçus" className="border-green-200">
        <div className="space-y-6">
          <p className="text-gray-700 mb-4">Classement de 1 (faible) à 5 (fort) :</p>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border-l-4 border-green-400">
              <div className="flex items-center gap-3">
                <TrendingUp className="h-5 w-5 text-green-600" />
                <span className="font-medium">Sport</span>
              </div>
              <div className="text-right">
                <span className="text-green-600 font-semibold">3,31/5</span>
                <p className="text-xs text-green-500">Dynamisme et implication</p>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <span className="font-medium">Sciences</span>
              <span className="text-green-600 font-semibold">2,97/5</span>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <span className="font-medium">Inclusion & ouverture culturelle</span>
              <span className="text-green-600 font-semibold">~2,8/5</span>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-amber-50 rounded-lg">
              <span className="font-medium">Numérique</span>
              <span className="text-amber-600 font-semibold">2,44/5</span>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-amber-50 rounded-lg">
              <span className="font-medium">Plurilinguisme</span>
              <span className="text-amber-600 font-semibold">2,36/5</span>
            </div>
          </div>

          <div className="bg-amber-50 p-4 rounded-lg">
            <p className="text-sm text-amber-700">
              Le plurilinguisme et le numérique ne sont pas encore identifiés comme de véritables atouts.
            </p>
          </div>
        </div>
      </DiagnosticCard>

      {/* Priorités */}
      <DiagnosticCard title="Priorités pour les prochaines années" className="border-blue-200">
        <div className="space-y-4">
          <p className="text-gray-700 mb-4">Priorités hautes (notes > 3/5) selon les élèves :</p>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
              <div className="flex items-center gap-3">
                <Badge variant="default" className="bg-blue-600">1</Badge>
                <span className="font-medium">Développer les voyages scolaires</span>
              </div>
              <span className="text-blue-600 font-semibold">4,02/5</span>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
              <div className="flex items-center gap-3">
                <Badge variant="default" className="bg-blue-600">2</Badge>
                <span className="font-medium">Climatisation des salles</span>
              </div>
              <span className="text-blue-600 font-semibold">3,92/5</span>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
              <div className="flex items-center gap-3">
                <Badge variant="default" className="bg-blue-600">3</Badge>
                <span className="font-medium">Restauration scolaire</span>
              </div>
              <span className="text-blue-600 font-semibold">3,81/5</span>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
              <div className="flex items-center gap-3">
                <Badge variant="default" className="bg-blue-600">4</Badge>
                <span className="font-medium">Équipements sportifs</span>
              </div>
              <span className="text-blue-600 font-semibold">3,47/5</span>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
              <div className="flex items-center gap-3">
                <Badge variant="default" className="bg-blue-600">5</Badge>
                <span className="font-medium">Développement du plurilinguisme</span>
              </div>
              <span className="text-blue-600 font-semibold">3,40/5</span>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
              <div className="flex items-center gap-3">
                <Badge variant="default" className="bg-blue-600">6</Badge>
                <span className="font-medium">Numérique éducatif</span>
              </div>
              <span className="text-blue-600 font-semibold">3,29/5</span>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600">
              Transport scolaire et garderie matinale restent secondaires (≤ 2,9/5)
            </p>
          </div>
        </div>
      </DiagnosticCard>

      {/* Commentaires libres */}
      <DiagnosticCard title="Analyse des commentaires libres" className="border-amber-200">
        <div className="space-y-4">
          <p className="text-gray-700 mb-4">Thèmes récurrents dans les verbatims :</p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg">
                <h5 className="font-medium text-red-800 mb-2">Chaleur / climatisation (≈ 30 mentions)</h5>
                <div className="text-sm text-red-700 space-y-1">
                  <p>• "Il fait trop chaud l'après-midi"</p>
                  <p>• "Mettre des climatiseurs"</p>
                </div>
              </div>
              
              <div className="bg-amber-50 p-4 rounded-lg">
                <h5 className="font-medium text-amber-800 mb-2">Manque de sorties / voyages</h5>
                <div className="text-sm text-amber-700">
                  <p>• "Plus de voyages, surtout en 3ᵉ"</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-amber-50 p-4 rounded-lg">
                <h5 className="font-medium text-amber-800 mb-2">Emploi du temps très chargé</h5>
                <div className="text-sm text-amber-700">
                  <p>• Journées jusqu'à 18h</p>
                  <p>• Longues permanences</p>
                </div>
              </div>
              
              <div className="bg-red-50 p-4 rounded-lg">
                <h5 className="font-medium text-red-800 mb-2">Sanitaires & hygiène</h5>
                <div className="text-sm text-red-700">
                  <p>• Absence de miroirs, savon manquant</p>
                </div>
              </div>
              
              <div className="bg-amber-50 p-4 rounded-lg">
                <h5 className="font-medium text-amber-800 mb-2">Équipements sportifs</h5>
                <div className="text-sm text-amber-700">
                  <p>• Terrain, vestiaires, propreté des chasubles</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DiagnosticCard>

      {/* Synthèse et urgences */}
      <DiagnosticCard title="Synthèse et pistes d'action" className="bg-french-blue/5 border-french-blue/20">
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold text-french-blue mb-4">Trois urgences identifiées par les élèves :</h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                <h5 className="font-medium text-red-800 mb-2">1. Confort & Sécurité</h5>
                <ul className="text-sm text-red-700 space-y-1">
                  <li>• Confort thermique (clim/ventilation)</li>
                  <li>• Rénovation des sanitaires</li>
                </ul>
              </div>
              
              <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-400">
                <h5 className="font-medium text-amber-800 mb-2">2. Ouverture & Expérience</h5>
                <ul className="text-sm text-amber-700 space-y-1">
                  <li>• Relance des voyages scolaires</li>
                  <li>• Sorties pédagogiques</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                <h5 className="font-medium text-blue-800 mb-2">3. Restauration</h5>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Offre équilibrée</li>
                  <li>• Tarifs abordables</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-french-blue mb-3">Communication à améliorer :</h4>
            <div className="bg-gray-50 p-4 rounded-lg">
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Clarifier régulièrement les décisions budgétaires de l'AP</li>
                <li>• Informer en amont sur les activités et options</li>
                <li>• Communiquer l'avancement des projets</li>
              </ul>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-french-blue mb-3">Points forts à valoriser :</h4>
            <div className="bg-green-50 p-4 rounded-lg">
              <ul className="text-sm text-green-700 space-y-1">
                <li>• Le "capital sport" (bon encadrement, dynamisme)</li>
                <li>• Le CDI comme vitrine</li>
                <li>• Réussites en mathématiques-sciences</li>
                <li>• Qualité de l'accompagnement personnalisé</li>
              </ul>
            </div>
          </div>

          <div className="bg-french-blue/5 p-4 rounded-lg">
            <h5 className="font-medium text-french-blue mb-2">Proposition de restitution :</h5>
            <p className="text-sm text-gray-700">
              Présenter ces résultats au conseil d'établissement sous forme d'infodashboard avec 
              un plan d'action organisé autour de 3 axes. Communiquer clairement les constats et 
              un calendrier d'améliorations pour consolider la confiance de la communauté éducative.
            </p>
          </div>
        </div>
      </DiagnosticCard>
    </div>
  );
};

export default DiagnosticPsdElevesContent;
