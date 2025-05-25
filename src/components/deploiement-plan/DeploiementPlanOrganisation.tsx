
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DeploiementPlanOrganisation = () => {
  return (
    <Card className="border-french-blue/10 shadow-md">
      <CardHeader>
        <CardTitle className="text-2xl text-french-blue">6. Options organisationnelles recommandées</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-800 mb-2">Structure pédagogique</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
              <li>Classes dédiées Section Internationale</li>
              <li>Enseignements spécifiques en anglais</li>
              <li>Coordination avec les enseignements classiques</li>
              <li>Suivi individualisé des élèves</li>
            </ul>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-2">Gouvernance</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
              <li>Comité de pilotage dédié</li>
              <li>Coordinateur Section Internationale</li>
              <li>Liaison avec les instances de l'AEFE</li>
              <li>Partenariats institutionnels</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DeploiementPlanOrganisation;
