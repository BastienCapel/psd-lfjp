
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DeploiementPlanConclusion = () => {
  return (
    <Card className="border-french-blue/10 shadow-md">
      <CardHeader>
        <CardTitle className="text-2xl text-french-blue">9. Conclusion</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-gray-700">
          Le déploiement progressif de la Section Internationale Américaine et du BFI au Lycée Français 
          Jacques Prévert de Saly représente un investissement stratégique majeur pour l'avenir de 
          l'établissement. Ce plan détaillé sur 8 ans (2026-2034) permettra :
        </p>
        <div className="bg-blue-50 p-4 rounded-lg">
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li><strong>Une préparation méthodique</strong> : demande DGESCO en 2026, structure prête</li>
            <li><strong>Une croissance maîtrisée</strong> : de 20 élèves en 2027 à 140 élèves en 2034</li>
            <li><strong>Un retour sur investissement positif</strong> dès la 4ème année</li>
            <li><strong>Un positionnement d'excellence</strong> sur le marché éducatif sénégalais</li>
            <li><strong>Une ouverture internationale renforcée</strong> pour tous les élèves</li>
          </ul>
        </div>
        <p className="text-gray-700 font-medium">
          La réussite de ce projet nécessitera un engagement fort de toute la communauté éducative 
          et un suivi rigoureux des indicateurs de performance définis dans ce plan.
        </p>
      </CardContent>
    </Card>
  );
};

export default DeploiementPlanConclusion;
