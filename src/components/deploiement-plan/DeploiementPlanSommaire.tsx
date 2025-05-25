
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
          <li className="font-medium">1. Introduction et contexte</li>
          <li className="font-medium">2. Objectifs du plan de déploiement</li>
          <li className="font-medium">3. Calendrier de déploiement progressif</li>
          <li className="font-medium">4. Analyse des impacts sur les ressources humaines</li>
          <li className="font-medium">5. Analyse des impacts financiers</li>
          <li className="font-medium">6. Options organisationnelles recommandées</li>
          <li className="font-medium">7. Plan d'action détaillé</li>
          <li className="font-medium">8. Indicateurs de suivi et gouvernance</li>
          <li className="font-medium">9. Conclusion</li>
        </ol>
      </CardContent>
    </Card>
  );
};

export default DeploiementPlanSommaire;
