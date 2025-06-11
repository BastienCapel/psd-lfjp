
import React from 'react';
import DiagnosticCard from './DiagnosticCard';
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, Target, Users, BookOpen, Heart } from 'lucide-react';

const DiagnosticPsdElevesContent = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <DiagnosticCard 
        title="La voix des élèves du LFJP" 
        description="Enquête sur la vie scolaire et les perspectives d'avenir - Analyse des résultats"
        className="bg-french-blue/5 border-french-blue/20"
      >
        <div className="space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-french-blue mb-2">Méthodologie</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Période : Mars 2024</li>
                <li>• Population : Élèves du CP à la Terminale</li>
                <li>• Participation : 85% des élèves</li>
                <li>• Format : Questionnaire anonyme adapté par niveau</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-french-blue mb-2">Objectifs</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Recueillir les perceptions des élèves</li>
                <li>• Identifier les points d'amélioration</li>
                <li>• Orienter les actions du PSD</li>
                <li>• Renforcer la qualité de vie scolaire</li>
              </ul>
            </div>
          </div>
        </div>
      </DiagnosticCard>

      {/* Points forts */}
      <DiagnosticCard title="Points forts identifiés" className="border-green-200">
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-3">
                <BookOpen className="h-5 w-5 text-green-600" />
                <h4 className="font-semibold text-green-700">Qualité pédagogique</h4>
              </div>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Satisfaction cours</span>
                    <span className="font-medium">87%</span>
                  </div>
                  <Progress value={87} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Relation enseignants</span>
                    <span className="font-medium">82%</span>
                  </div>
                  <Progress value={82} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Préparation orientation</span>
                    <span className="font-medium">78%</span>
                  </div>
                  <Progress value={78} className="h-2" />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-3">
                <Users className="h-5 w-5 text-green-600" />
                <h4 className="font-semibold text-green-700">Vie scolaire</h4>
              </div>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Ambiance générale</span>
                    <span className="font-medium">79%</span>
                  </div>
                  <Progress value={79} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Relations élèves</span>
                    <span className="font-medium">84%</span>
                  </div>
                  <Progress value={84} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Activités extrascolaires</span>
                    <span className="font-medium">71%</span>
                  </div>
                  <Progress value={71} className="h-2" />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-green-50 p-4 rounded-lg">
            <h5 className="font-medium text-green-800 mb-2">Commentaires positifs récurrents :</h5>
            <div className="grid md:grid-cols-2 gap-3 text-sm text-green-700">
              <div>• "Les professeurs sont à l'écoute"</div>
              <div>• "Bonne préparation au baccalauréat"</div>
              <div>• "Esprit de solidarité entre élèves"</div>
              <div>• "Ouverture internationale valorisante"</div>
            </div>
          </div>
        </div>
      </DiagnosticCard>

      {/* Points d'amélioration */}
      <DiagnosticCard title="Points d'amélioration prioritaires" className="border-amber-200">
        <div className="space-y-6">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-amber-50 p-4 rounded-lg">
              <h4 className="font-semibold text-amber-800 mb-2">Infrastructure</h4>
              <div className="space-y-2 text-sm text-amber-700">
                <div>• Confort acoustique : 68% insatisfaits</div>
                <div>• Équipements informatiques : 61% insatisfaits</div>
                <div>• Espaces de détente : 59% insatisfaits</div>
              </div>
            </div>
            
            <div className="bg-amber-50 p-4 rounded-lg">
              <h4 className="font-semibold text-amber-800 mb-2">Restauration</h4>
              <div className="space-y-2 text-sm text-amber-700">
                <div>• Qualité des repas : 52% insatisfaits</div>
                <div>• Variété des menus : 48% insatisfaits</div>
                <div>• Temps de service : 44% insatisfaits</div>
              </div>
            </div>

            <div className="bg-amber-50 p-4 rounded-lg">
              <h4 className="font-semibold text-amber-800 mb-2">Communication</h4>
              <div className="space-y-2 text-sm text-amber-700">
                <div>• Information orientation : 43% insatisfaits</div>
                <div>• Écoute administration : 38% insatisfaits</div>
                <div>• Transparence décisions : 35% insatisfaits</div>
              </div>
            </div>
          </div>
        </div>
      </DiagnosticCard>

      {/* Priorités pour l'avenir */}
      <DiagnosticCard title="Priorités exprimées pour l'avenir" className="border-blue-200">
        <div className="space-y-4">
          <p className="text-gray-700 mb-4">Classement des priorités selon les élèves (sur 5 points) :</p>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
              <div className="flex items-center gap-3">
                <Badge variant="default" className="bg-blue-600">1</Badge>
                <span className="font-medium">Amélioration de l'infrastructure numérique</span>
              </div>
              <span className="text-blue-600 font-semibold">4.2/5</span>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
              <div className="flex items-center gap-3">
                <Badge variant="default" className="bg-blue-600">2</Badge>
                <span className="font-medium">Renforcement de l'accompagnement à l'orientation</span>
              </div>
              <span className="text-blue-600 font-semibold">4.0/5</span>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
              <div className="flex items-center gap-3">
                <Badge variant="default" className="bg-blue-600">3</Badge>
                <span className="font-medium">Développement des activités extrascolaires</span>
              </div>
              <span className="text-blue-600 font-semibold">3.8/5</span>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
              <div className="flex items-center gap-3">
                <Badge variant="default" className="bg-blue-600">4</Badge>
                <span className="font-medium">Amélioration de la restauration scolaire</span>
              </div>
              <span className="text-blue-600 font-semibold">3.6/5</span>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
              <div className="flex items-center gap-3">
                <Badge variant="default" className="bg-blue-600">5</Badge>
                <span className="font-medium">Création d'espaces de détente modernes</span>
              </div>
              <span className="text-blue-600 font-semibold">3.4/5</span>
            </div>
          </div>
        </div>
      </DiagnosticCard>

      {/* Plan d'action proposé */}
      <DiagnosticCard title="Plan d'action proposé" className="border-french-blue/20">
        <div className="space-y-6">
          <p className="text-gray-700">Suite aux retours des élèves, trois axes d'amélioration prioritaires :</p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Target className="h-5 w-5 text-french-blue" />
                <h4 className="font-semibold text-french-blue">Axe 1 : Infrastructure</h4>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <ul className="text-sm space-y-2">
                  <li>• Amélioration acoustique des salles</li>
                  <li>• Renouvellement du parc informatique</li>
                  <li>• Création d'espaces collaboratifs</li>
                </ul>
                <div className="mt-3">
                  <Badge variant="outline" className="text-xs">Priorité haute</Badge>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-french-blue" />
                <h4 className="font-semibold text-french-blue">Axe 2 : Pédagogie</h4>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <ul className="text-sm space-y-2">
                  <li>• Renforcement orientation</li>
                  <li>• Développement des langues</li>
                  <li>• Activités extrascolaires</li>
                </ul>
                <div className="mt-3">
                  <Badge variant="outline" className="text-xs">Priorité moyenne</Badge>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-french-blue" />
                <h4 className="font-semibold text-french-blue">Axe 3 : Vie scolaire</h4>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <ul className="text-sm space-y-2">
                  <li>• Amélioration restauration</li>
                  <li>• Espaces de détente</li>
                  <li>• Communication élèves</li>
                </ul>
                <div className="mt-3">
                  <Badge variant="outline" className="text-xs">Priorité moyenne</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DiagnosticCard>

      {/* Satisfaction globale */}
      <DiagnosticCard title="Satisfaction globale" className="border-green-200">
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="mb-4">
                <div className="text-4xl font-bold text-green-600 mb-2">76%</div>
                <p className="text-lg font-medium text-gray-700">Satisfaction générale</p>
                <p className="text-sm text-gray-500">des élèves recommandent le LFJP</p>
              </div>
              <Progress value={76} className="h-3" />
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-green-700">Répartition par niveau :</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Primaire (CP-CM2)</span>
                  <span className="font-medium text-green-600">82%</span>
                </div>
                <div className="flex justify-between">
                  <span>Collège (6ème-3ème)</span>
                  <span className="font-medium text-green-600">75%</span>
                </div>
                <div className="flex justify-between">
                  <span>Lycée (2nde-Term)</span>
                  <span className="font-medium text-green-600">71%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-green-50 p-4 rounded-lg">
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
              <div>
                <h5 className="font-medium text-green-800 mb-1">Point positif</h5>
                <p className="text-sm text-green-700">
                  Malgré les points d'amélioration identifiés, les élèves expriment globalement 
                  leur satisfaction et recommandent l'établissement, témoignant d'un attachement fort au LFJP.
                </p>
              </div>
            </div>
          </div>
        </div>
      </DiagnosticCard>

      {/* Conclusion */}
      <DiagnosticCard title="Conclusion et prochaines étapes" className="bg-french-blue/5 border-french-blue/20">
        <div className="space-y-4">
          <p className="text-gray-700">
            Cette enquête révèle un niveau de satisfaction globalement positif (76%), avec des forces 
            reconnues dans la qualité pédagogique et les relations humaines. Les axes d'amélioration 
            identifiés guideront les actions du Plan Stratégique de Développement.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-french-blue mb-3">Actions immédiates (2024-2025)</h4>
              <ul className="text-sm space-y-1 text-gray-700">
                <li>• Lancement du plan d'amélioration acoustique</li>
                <li>• Renouvellement progressif du matériel informatique</li>
                <li>• Renforcement de l'accompagnement à l'orientation</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-french-blue mb-3">Suivi et évaluation</h4>
              <ul className="text-sm space-y-1 text-gray-700">
                <li>• Nouvelle enquête prévue en mars 2025</li>
                <li>• Tableaux de bord trimestriels</li>
                <li>• Comité de suivi élèves-administration</li>
              </ul>
            </div>
          </div>
        </div>
      </DiagnosticCard>
    </div>
  );
};

export default DiagnosticPsdElevesContent;
