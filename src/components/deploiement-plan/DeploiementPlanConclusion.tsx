
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
          Le plan de déploiement révisé de la Section Internationale Américaine et du BFI au lycée 
          français Jacques Prévert de Saly adopte une approche ambitieuse et structurante, 
          débutant par une immersion précoce et équitable au primaire.
        </p>

        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="text-gray-700 mb-3">
            L'ouverture de la SI pour tous les élèves du primaire dès 2026, sans surcoût, constitue un 
            investissement pédagogique stratégique de 18M CFA annuels, visant à renforcer 
            l'attractivité et la qualité de l'offre éducative de l'établissement.
          </p>

          <p className="text-gray-700 mb-3">
            L'extension progressive au secondaire, sous un format optionnel et payant, vise un 
            équilibre financier propre, conditionné par la capacité à attirer et fidéliser environ 20 
            élèves par niveau. L'anticipation des recrutements et la mise en place d'une 
            coordination intégrée sont recommandées pour assurer la qualité et la cohérence du 
            dispositif.
          </p>
        </div>

        <p className="text-gray-700">
          La réussite de ce projet repose sur la capacité à :
        </p>
        
        <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
          <li>Assumer l'investissement au primaire et en valoriser les bénéfices.</li>
          <li>Atteindre les objectifs d'effectifs au secondaire.</li>
          <li>Maintenir une haute qualité pédagogique et une forte cohérence entre les niveaux.</li>
          <li>Piloter le dispositif de manière rigoureuse et adaptative.</li>
        </ul>

        <p className="text-gray-700 font-medium">
          Ce plan offre une feuille de route claire pour faire de la SI/BFI un véritable pôle 
          d'excellence bilingue et biculturel, contribuant significativement au rayonnement et à 
          l'attractivité du lycée français Jacques Prévert de Saly.
        </p>
      </CardContent>
    </Card>
  );
};

export default DeploiementPlanConclusion;
