
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DeploiementPlanIndicateurs = () => {
  return (
    <Card className="border-french-blue/10 shadow-md">
      <CardHeader>
        <CardTitle className="text-2xl text-french-blue">8. Indicateurs de suivi et gouvernance</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-800 mb-2">Indicateurs quantitatifs</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
              <li>Nombre d'élèves inscrits</li>
              <li>Taux de rétention</li>
              <li>Résultats aux examens</li>
              <li>Rentabilité financière</li>
            </ul>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-2">Indicateurs qualitatifs</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
              <li>Satisfaction des familles</li>
              <li>Qualité pédagogique</li>
              <li>Reconnaissance internationale</li>
              <li>Image de l'établissement</li>
            </ul>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h4 className="font-semibold text-yellow-800 mb-2">Gouvernance</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
              <li>Comité de pilotage trimestriel</li>
              <li>Rapports annuels</li>
              <li>Évaluations externes</li>
              <li>Ajustements stratégiques</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DeploiementPlanIndicateurs;
