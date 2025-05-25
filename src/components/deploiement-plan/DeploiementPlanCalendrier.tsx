
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DeploiementPlanCalendrier = () => {
  return (
    <Card className="border-french-blue/10 shadow-md">
      <CardHeader>
        <CardTitle className="text-2xl text-french-blue">3. Calendrier de déploiement progressif</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid gap-4">
          <div className="bg-yellow-100 p-4 rounded-lg border-l-4 border-yellow-500">
            <h4 className="font-semibold text-yellow-800 mb-2">2026 : Phase de préparation</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
              <li>Demande d'autorisation à la DGESCO pour la Section Internationale sur tout le primaire</li>
              <li>La structure est prête, attente de l'autorisation officielle</li>
              <li>Préparation des équipes et des outils pédagogiques</li>
              <li>Communication auprès des familles</li>
              <li>Ouverture de la Section Internationale sur tout le primaire</li>
            </ul>
          </div>
          
          <div className="bg-gray-100 p-4 rounded-lg">
            <h4 className="font-semibold text-french-blue mb-2">2027-2028 : Phase de lancement</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
              <li>Ouverture de la Section Internationale en 6ème (20 élèves)</li>
              <li>Fonctionnement à moyens constants</li>
              <li>Mise en place des infrastructures nécessaires</li>
              <li>Formation des équipes pédagogiques</li>
            </ul>
          </div>
          
          <div className="bg-gray-100 p-4 rounded-lg">
            <h4 className="font-semibold text-french-blue mb-2">2028-2029 : Extension au collège</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
              <li>Ouverture de la 5ème Section Internationale (40 élèves total)</li>
              <li>Consolidation des moyens existants</li>
              <li>Développement des partenariats internationaux</li>
            </ul>
          </div>
          
          <div className="bg-gray-100 p-4 rounded-lg">
            <h4 className="font-semibold text-french-blue mb-2">2029-2030 : Consolidation collège</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
              <li>Ouverture de la 4ème Section Internationale (60 élèves total)</li>
              <li>Préparation de l'extension au lycée</li>
              <li>Évaluation et ajustements pédagogiques</li>
            </ul>
          </div>
          
          <div className="bg-gray-100 p-4 rounded-lg">
            <h4 className="font-semibold text-french-blue mb-2">2030-2031 : Finalisation collège et premier recrutement</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
              <li>Ouverture de la 3ème Section Internationale (80 élèves total)</li>
              <li>Premier recrutement d'enseignant (seuil de 24h/semaine atteint)</li>
              <li>Premiers diplômes nationaux du brevet avec mention internationale</li>
            </ul>
          </div>
          
          <div className="bg-green-100 p-4 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-2">2031-2032 : Extension lycée</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
              <li>Ouverture de la 2nde Section Internationale et BFI (100 élèves total)</li>
              <li>Mise en place du programme BFI</li>
            </ul>
          </div>
          
          <div className="bg-green-100 p-4 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-2">2032-2033 : Développement lycée</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
              <li>Ouverture de la 1ère Section Internationale et BFI (120 élèves total)</li>
              <li>Préparation aux certifications internationales</li>
            </ul>
          </div>
          
          <div className="bg-green-100 p-4 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-2">2033-2034 : Maturité complète et second recrutement</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
              <li>Ouverture de la Terminale Section Internationale et BFI (140 élèves total)</li>
              <li>Second recrutement d'enseignant (seuil de 42h/semaine atteint)</li>
              <li>Premiers baccalauréats avec OIB et BFI</li>
              <li>Évaluation complète du dispositif</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DeploiementPlanCalendrier;
