
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DeploiementPlanRH = () => {
  return (
    <Card className="border-french-blue/10 shadow-md">
      <CardHeader>
        <CardTitle className="text-2xl text-french-blue">4. Analyse des impacts sur les ressources humaines</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <p className="text-gray-700">
          Le déploiement de la SI aura un impact structurant sur les ressources humaines, 
          nécessitant des recrutements et une réorganisation.
        </p>

        <div>
          <h4 className="font-semibold text-lg mb-3">Renforcement au primaire (2025-2026)</h4>
          <p className="text-gray-700 mb-3">
            Le recrutement d'une enseignante supplémentaire pour le primaire est la première 
            étape clé. Il permet de doubler la capacité d'enseignement de l'anglais (passant de 27h à 
            54h/semaine), rendant possible l'offre de 4h hebdomadaires (dont 2h d'EMILE) à tous les 
            élèves du primaire dès 2026. Ce recrutement représente un ETP supplémentaire dédié 
            au primaire.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-lg mb-3">Montée en charge au secondaire (2027-2034)</h4>
          <p className="text-gray-700 mb-3">
            L'extension progressive de la SI optionnelle au secondaire nécessitera une augmentation 
            des ressources dédiées. L'analyse des besoins horaires (passant de 6h en 2027 à 42h en 
            2033) justifie deux recrutements supplémentaires spécifiques au secondaire :
          </p>

          <div className="space-y-3">
            <div className="bg-amber-50 p-4 rounded-lg">
              <h5 className="font-semibold text-amber-800 mb-2">1er recrutement secondaire :</h5>
              <p className="text-sm text-amber-700">
                Anticipé en 2029-2030 pour une prise de fonction en 2030-2031 (passage à 24h SI secondaire).
              </p>
            </div>

            <div className="bg-amber-50 p-4 rounded-lg">
              <h5 className="font-semibold text-amber-800 mb-2">2ème recrutement secondaire :</h5>
              <p className="text-sm text-amber-700">
                Anticipé en 2032-2033 pour une prise de fonction en 2033-2034 (passage à 42h SI secondaire).
              </p>
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-lg mb-3">Bilan global des recrutements</h4>
          <p className="text-gray-700 mb-3">
            Au total, le projet SI/BFI nécessitera 3 recrutements supplémentaires par rapport à la 
            situation initiale :
          </p>
          
          <div className="bg-blue-50 p-4 rounded-lg mb-3">
            <ul className="text-sm text-blue-700 space-y-1 list-disc list-inside">
              <li>1 ETP pour le primaire (dès 2025)</li>
              <li>2 ETP pour le secondaire (en 2030 et 2033)</li>
            </ul>
          </div>
          
          <p className="text-gray-700">
            L'équipe d'anglais passera ainsi de 4,35 ETP (1,35 primaire + 3 secondaire) à 7,4 ETP (2,7 
            primaire + 4,7 secondaire) en régime de croisière.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default DeploiementPlanRH;
