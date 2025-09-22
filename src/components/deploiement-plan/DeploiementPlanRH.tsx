import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DeploiementPlanRH = () => {
  return (
    <Card className="border-french-blue/10 shadow-md">
      <CardHeader>
        <CardTitle className="text-2xl text-french-blue">5. Ressources humaines</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <p className="text-gray-700">
          La généralisation du parcours SIA/BFI modifie significativement les besoins horaires.
          L'établissement dispose aujourd'hui de trois enseignants d'anglais au secondaire qui
          couvrent 60&nbsp;heures hebdomadaires. L'objectif 2029 impose un volume de 94&nbsp;heures,
          soit 4,7 équivalents temps plein (ETP).
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-800 mb-2">Renforcements programmés</h4>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
              <li><strong>2027 :</strong> recrutement d'un 4<sup>e</sup> enseignant du secondaire pour accompagner l'ouverture de la 4<sup>e</sup> SIA et de la Terminale BFI.</li>
              <li><strong>2028 :</strong> anticipation du 5<sup>e</sup> enseignant du secondaire afin d'absorber l'extension à la 3<sup>e</sup> et à la Seconde SIA.</li>
            </ul>
          </div>

          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-2">Gestion des services</h4>
            <p className="text-sm text-gray-700">
              Le calibrage progressif des recrutements vise à limiter le recours aux heures
              supplémentaires, stabiliser les équipes et garantir la qualité des enseignements en
              DNL et en littérature. La montée en puissance des effectifs SIA/BFI sera accompagnée
              d'un suivi fin des emplois du temps et des formations ciblées.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DeploiementPlanRH;
