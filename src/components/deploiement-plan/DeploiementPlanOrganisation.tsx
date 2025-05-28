
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DeploiementPlanOrganisation = () => {
  return (
    <Card className="border-french-blue/10 shadow-md">
      <CardHeader>
        <CardTitle className="text-2xl text-french-blue">6. Options organisationnelles recommandées</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <p className="text-gray-700">
          Sur la base des analyses précédentes et des validations, nous recommandons les 
          options organisationnelles suivantes :
        </p>

        <div>
          <h4 className="font-semibold text-lg mb-3">Pour le primaire</h4>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h5 className="font-semibold text-blue-800 mb-2">Option B : Organisation avec identité SI distincte</h5>
            <p className="text-sm text-blue-700">
              Valoriser l'investissement pédagogique en créant une identité SI visible (labellisation, 
              communication, événements) pour tous les élèves du primaire, afin de renforcer 
              l'attractivité et préparer la continuité avec le secondaire.
            </p>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-lg mb-3">Pour le secondaire</h4>
          <div className="bg-green-50 p-4 rounded-lg">
            <h5 className="font-semibold text-green-800 mb-2">Option B : Anticipation des recrutements avec profils polyvalents</h5>
            <p className="text-sm text-green-700">
              Anticiper les deux recrutements nécessaires au secondaire (en 2029 pour 2030, et en 
              2032 pour 2033) pour assurer la stabilité pédagogique, faciliter l'intégration et constituer 
              une équipe SI cohérente. Cette option est rendue possible par l'équilibre financier 
              atteignable avec 20 élèves par niveau.
            </p>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-lg mb-3">Pour l'équilibre financier</h4>
          
          <div className="bg-amber-50 p-4 rounded-lg mb-3">
            <h5 className="font-semibold text-amber-800 mb-2">Viser le scénario haut (20 élèves/niveau) au secondaire</h5>
            <p className="text-sm text-amber-700">
              Concentrer les efforts sur le recrutement et la fidélisation des élèves en SI au secondaire 
              pour atteindre l'objectif de 20 élèves par niveau. Cela permettra d'assurer l'équilibre 
              financier du volet optionnel et payant, et de dégager potentiellement des marges pour 
              des investissements qualitatifs supplémentaires dans ce volet.
            </p>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg">
            <h5 className="font-semibold text-blue-800 mb-2">Assumer l'investissement primaire</h5>
            <p className="text-sm text-blue-700">
              Considérer le coût du renforcement au primaire (18M CFA/an) comme un investissement 
              stratégique distinct, financé par le budget global de l'établissement, et non comme un 
              déficit à compenser par le secondaire.
            </p>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-lg mb-3">Pour la coordination</h4>
          <div className="bg-purple-50 p-4 rounded-lg">
            <h5 className="font-semibold text-purple-800 mb-2">Option B : Coordination intégrée</h5>
            <p className="text-sm text-purple-700">
              Mettre en place une coordination unique pour l'ensemble du dispositif SI (primaire et 
              secondaire) afin d'assurer la continuité pédagogique, la cohérence globale et une 
              gestion simplifiée.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DeploiementPlanOrganisation;
