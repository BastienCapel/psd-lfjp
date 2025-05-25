
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DeploiementPlanObjectifs = () => {
  return (
    <Card className="border-french-blue/10 shadow-md">
      <CardHeader>
        <CardTitle className="text-2xl text-french-blue">2. Objectifs du plan de déploiement</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-2">Objectifs pédagogiques</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
              <li>Développer un bilinguisme français-anglais de haut niveau</li>
              <li>Offrir une ouverture culturelle internationale</li>
              <li>Préparer aux certifications internationales</li>
              <li>Favoriser la mobilité étudiante</li>
            </ul>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-800 mb-2">Objectifs institutionnels</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
              <li>Augmenter les effectifs de l'établissement</li>
              <li>Diversifier l'offre éducative</li>
              <li>Renforcer l'attractivité internationale</li>
              <li>Optimiser la rentabilité financière</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DeploiementPlanObjectifs;
