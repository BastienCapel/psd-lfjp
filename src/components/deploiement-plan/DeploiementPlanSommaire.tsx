import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DeploiementPlanSommaire = () => {
  return (
    <Card className="border-french-blue/10 shadow-md">
      <CardHeader>
        <CardTitle className="text-2xl text-french-blue">Sommaire</CardTitle>
      </CardHeader>
      <CardContent>
        <ol className="space-y-2">
          <li className="font-medium">1. Vision et objectifs</li>
          <li className="font-medium">2. Déploiement progressif</li>
          <li className="font-medium">3. Organisation pédagogique</li>
          <li className="font-medium">4. Coût et financement</li>
          <li className="font-medium">5. Ressources humaines</li>
          <li className="font-medium">6. Conclusion stratégique</li>
        </ol>
      </CardContent>
    </Card>
  );
};

export default DeploiementPlanSommaire;
