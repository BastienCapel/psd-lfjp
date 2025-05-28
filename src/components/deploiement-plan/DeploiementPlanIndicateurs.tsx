
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DeploiementPlanIndicateurs = () => {
  return (
    <Card className="border-french-blue/10 shadow-md">
      <CardHeader>
        <CardTitle className="text-2xl text-french-blue">8. Indicateurs de suivi et gouvernance</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h4 className="font-semibold text-lg mb-3">Indicateurs de suivi</h4>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h5 className="font-semibold text-blue-800 mb-2">Primaire :</h5>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                <li>Satisfaction familles/enseignants</li>
                <li>Qualité EMILE</li>
                <li>Niveau d'anglais des élèves</li>
              </ul>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <h5 className="font-semibold text-green-800 mb-2">Secondaire :</h5>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                <li>Effectifs SI par niveau (vs cible 20)</li>
                <li>Taux de poursuite primaire → secondaire</li>
                <li>Bilan financier SI secondaire</li>
                <li>Résultats BFI</li>
              </ul>
            </div>
          </div>

          <div className="bg-purple-50 p-4 rounded-lg mt-4">
            <h5 className="font-semibold text-purple-800 mb-2">Général :</h5>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
              <li>Attractivité globale établissement</li>
              <li>Coût total investissement SI</li>
            </ul>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-lg mb-3">Gouvernance</h4>
          
          <div className="space-y-4">
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h5 className="font-semibold text-yellow-800 mb-2">Comité de pilotage SI/BFI (stratégique, trimestriel)</h5>
              <p className="text-sm text-gray-700">
                Suivi stratégique du déploiement, prise de décisions structurantes, évaluation globale du dispositif.
              </p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h5 className="font-semibold text-blue-800 mb-2">Équipe pédagogique SI (coordination opérationnelle, mensuelle)</h5>
              <p className="text-sm text-gray-700">
                Coordination pédagogique, harmonisation des pratiques, élaboration des projets interdisciplinaires.
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <h5 className="font-semibold text-green-800 mb-2">Conseil SI/BFI (concertation, semestrielle)</h5>
              <p className="text-sm text-gray-700">
                Concertation sur le fonctionnement quotidien, remontée des besoins, proposition d'améliorations.
              </p>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg">
              <h5 className="font-semibold text-purple-800 mb-2">Coordination intégrée (pilotage quotidien, lien primaire/secondaire)</h5>
              <p className="text-sm text-gray-700">
                Assurer la continuité pédagogique, la cohérence globale et une gestion simplifiée entre primaire et secondaire.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DeploiementPlanIndicateurs;
