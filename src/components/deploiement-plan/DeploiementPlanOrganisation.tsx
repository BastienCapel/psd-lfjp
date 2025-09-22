import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DeploiementPlanOrganisation = () => {
  return (
    <Card className="border-french-blue/10 shadow-md">
      <CardHeader>
        <CardTitle className="text-2xl text-french-blue">3. Organisation pédagogique</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <p className="text-gray-700">
          L'organisation pédagogique du parcours SIA/BFI assure la cohérence des apprentissages
          et la continuité des exigences linguistiques et disciplinaires sur l'ensemble des cycles.
        </p>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-800 mb-2">Primaire</h4>
            <p className="text-sm text-gray-700">
              Tous les élèves bénéficient de 3 à 4&nbsp;heures hebdomadaires d'anglais et d'EMILE,
              intégrées au temps scolaire sans surcoût pour les familles. Cette immersion précoce
              instaure un socle bilingue partagé par l'ensemble des cohortes.
            </p>
          </div>

          <div className="bg-indigo-50 p-4 rounded-lg">
            <h4 className="font-semibold text-indigo-800 mb-2">Collège</h4>
            <p className="text-sm text-gray-700">
              De la 6<sup>e</sup> à la 3<sup>e</sup>, le parcours SIA prévoit 7&nbsp;heures spécifiques
              articulant anglais LV1, langue et littérature ainsi qu'une DNL histoire-géographie.
              Ce dispositif consolide les compétences linguistiques tout en développant une
              culture internationale.
            </p>
          </div>

          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-2">Lycée</h4>
            <p className="text-sm text-gray-700">
              La préparation au BFI repose sur les enseignements d'Approfondissement Culturel et
              Linguistique (ACL), de Complément Disciplinaire en Mobilité (CDM) et sur les DNL.
              L'adossement aux standards internationaux garantit la reconnaissance du diplôme et
              l'ouverture vers l'enseignement supérieur mondial.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DeploiementPlanOrganisation;
