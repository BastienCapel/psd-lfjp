
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DeploiementPlanIndicateurs = () => {
  return (
    <Card className="border-french-blue/10 shadow-md">
      <CardHeader>
        <CardTitle className="text-2xl text-french-blue">8. Indicateurs de suivi et gouvernance</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <p className="text-gray-700">
          Pour assurer le pilotage efficace du déploiement de la Section Internationale Américaine 
          et du BFI, il est essentiel de mettre en place des indicateurs de suivi précis et une 
          gouvernance adaptée.
        </p>

        <div>
          <h4 className="font-semibold text-lg mb-3">Indicateurs de suivi</h4>
          <p className="text-gray-700 mb-3">
            Nous recommandons de suivre régulièrement les indicateurs suivants :
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h5 className="font-semibold text-blue-800 mb-2">Indicateurs quantitatifs :</h5>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                <li>Effectifs par niveau (réel vs cible de 20 élèves)</li>
                <li>Taux de remplissage des classes SI</li>
                <li>Volume horaire hebdomadaire par enseignant</li>
                <li>Coût salarial supplémentaire lié à la SI</li>
                <li>Revenus générés par les frais d'inscription SI</li>
                <li>Bilan financier annuel de la SI (revenus - coûts)</li>
                <li>Montant des investissements qualitatifs réalisés</li>
                <li>Nombre de partenariats formalisés</li>
              </ul>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <h5 className="font-semibold text-green-800 mb-2">Indicateurs qualitatifs :</h5>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                <li>Satisfaction des élèves et des familles (enquête annuelle)</li>
                <li>Satisfaction des enseignants impliqués dans la SI</li>
                <li>Qualité des productions des élèves</li>
                <li>Rayonnement de la SI dans l'environnement local</li>
                <li>Impact sur l'attractivité globale de l'établissement</li>
              </ul>
            </div>
          </div>

          <p className="text-gray-700 mt-3">
            Ces indicateurs seront suivis par le comité de pilotage et analysés régulièrement pour 
            identifier les points forts et les axes d'amélioration du dispositif.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-lg mb-3">Gouvernance du projet</h4>
          <p className="text-gray-700 mb-3">
            La gouvernance du projet reposera sur plusieurs instances complémentaires :
          </p>

          <div className="space-y-4">
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h5 className="font-semibold text-yellow-800 mb-2">Le comité de pilotage SI/BFI :</h5>
              <p className="text-sm text-gray-700 mb-2">
                - Composition : direction, coordinateur SI, représentants des enseignants, représentants des parents
              </p>
              <p className="text-sm text-gray-700 mb-2">
                - Rôle : suivi stratégique du déploiement, prise de décisions structurantes, évaluation globale du dispositif
              </p>
              <p className="text-sm text-gray-700">
                - Fréquence : réunion trimestrielle (début d'année, mi-parcours, bilan annuel)
              </p>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg">
              <h5 className="font-semibold text-purple-800 mb-2">L'équipe pédagogique SI :</h5>
              <p className="text-sm text-gray-700 mb-2">
                - Composition : enseignants intervenant dans la SI, coordinateur SI
              </p>
              <p className="text-sm text-gray-700 mb-2">
                - Rôle : coordination pédagogique, harmonisation des pratiques, élaboration des projets interdisciplinaires
              </p>
              <p className="text-sm text-gray-700">
                - Fréquence : réunion mensuelle
              </p>
            </div>

            <div className="bg-orange-50 p-4 rounded-lg">
              <h5 className="font-semibold text-orange-800 mb-2">Le conseil SI/BFI :</h5>
              <p className="text-sm text-gray-700 mb-2">
                - Composition : direction, coordinateur SI, enseignants SI, délégués des élèves SI, représentants des parents d'élèves SI
              </p>
              <p className="text-sm text-gray-700 mb-2">
                - Rôle : concertation sur le fonctionnement quotidien, remontée des besoins, proposition d'améliorations
              </p>
              <p className="text-sm text-gray-700">
                - Fréquence : réunion semestrielle
              </p>
            </div>
          </div>

          <p className="text-gray-700 mt-3">
            Cette organisation permettra d'assurer un pilotage à la fois stratégique et opérationnel 
            du dispositif, en impliquant l'ensemble des parties prenantes dans une démarche 
            d'amélioration continue.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default DeploiementPlanIndicateurs;
