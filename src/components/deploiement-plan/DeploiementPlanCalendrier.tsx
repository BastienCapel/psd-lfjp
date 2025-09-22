import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DeploiementPlanCalendrier = () => {
  return (
    <Card className="border-french-blue/10 shadow-md">
      <CardHeader>
        <CardTitle className="text-2xl text-french-blue">2. Déploiement progressif</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <p className="text-gray-700">
          La montée en charge du parcours SIA/BFI est structurée en quatre étapes majeures,
          garantissant une généralisation maîtrisée du dispositif sur l'ensemble des niveaux.
        </p>

        <div className="grid gap-4">
          <div className="bg-blue-100 p-4 rounded-lg border-l-4 border-blue-500">
            <h4 className="font-semibold text-blue-800 mb-2">2026 – Ancrage de la SIA et lancement du BFI</h4>
            <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
              <li>Généralisation de la Section Internationale Américaine pour tous les élèves du CP au CM2.</li>
              <li>Ouverture du parcours SIA au collège avec la 6<sup>e</sup> et la 5<sup>e</sup>.</li>
              <li>Démarrage de la voie BFI au lycée avec l'ouverture d'une classe de Première.</li>
            </ul>
          </div>

          <div className="bg-indigo-100 p-4 rounded-lg border-l-4 border-indigo-500">
            <h4 className="font-semibold text-indigo-800 mb-2">2027 – Extension collège et Terminale BFI</h4>
            <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
              <li>Ouverture de la 4<sup>e</sup> SIA pour consolider le continuum collège.</li>
              <li>Création de la Terminale BFI pour sécuriser la diplomation en 2029.</li>
              <li>Recrutement d'un enseignant supplémentaire au secondaire pour absorber la hausse horaire.</li>
            </ul>
          </div>

          <div className="bg-green-100 p-4 rounded-lg border-l-4 border-green-500">
            <h4 className="font-semibold text-green-800 mb-2">2028 – Consolidation des cycles</h4>
            <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
              <li>Ouverture de la 3<sup>e</sup> SIA pour compléter l'offre collège.</li>
              <li>Lancement de la Seconde SIA afin de proposer un parcours complet au lycée.</li>
              <li>Recrutement anticipé d'un second enseignant du secondaire pour sécuriser l'offre.</li>
            </ul>
          </div>

          <div className="bg-emerald-100 p-4 rounded-lg border-l-4 border-emerald-500">
            <h4 className="font-semibold text-emerald-800 mb-2">2029 – Couverture intégrale et première diplomation</h4>
            <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
              <li>Achèvement de la mise en place de la SIA sur l'ensemble des niveaux de l'établissement.</li>
              <li>Première promotion diplômée du Baccalauréat Français International.</li>
              <li>Stabilisation du dispositif et évaluation globale pour préparer les ajustements futurs.</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DeploiementPlanCalendrier;
