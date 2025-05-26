
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
          L'ouverture de la Section Internationale Américaine aura un impact significatif sur les 
          ressources humaines de l'établissement, avec une augmentation progressive des 
          besoins en enseignement spécifique à la SI.
        </p>

        <div>
          <h4 className="font-semibold text-lg mb-3">Situation actuelle des ressources humaines</h4>
          <p className="text-gray-700 mb-3">
            Actuellement, l'enseignement de l'anglais au secondaire représente un besoin 
            hebdomadaire de 64 heures, dont 12 heures sont allouées au soutien et à la LCE (de la 
            6ème à la 1ère). Dans le cadre de l'ouverture de la SI, ces 12 heures pourraient être 
            réaffectées, ramenant le besoin résiduel pour les cours d'anglais classiques à 52 heures 
            hebdomadaires.
          </p>
          <p className="text-gray-700 mb-3">
            Ces besoins sont actuellement couverts par 3 enseignants à 20 heures chacun, soit 60 
            heures disponibles. L'établissement dispose également d'une enseignante américaine 
            qui pourra progressivement basculer sur la SI, ce qui constitue un atout majeur pour le 
            démarrage du projet.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-lg mb-3">Évolution des besoins en ressources humaines</h4>
          <p className="text-gray-700 mb-3">
            L'analyse année par année des besoins en ressources humaines montre une 
            augmentation progressive qui nécessitera des ajustements dans l'organisation et des 
            recrutements ciblés.
          </p>

          <div className="space-y-3">
            <p className="text-gray-700">
              Lors des deux premières années (2027-2029), l'enseignante américaine déjà en poste 
              pourra absorber les heures de la SI (6 heures puis 12 heures), moyennant une 
              réorganisation des services pour les cours d'anglais classiques. Le besoin total (anglais 
              classique + SI) passera de 58 heures en 2027-2028 à 64 heures en 2028-2029, ce qui reste 
              proche des 60 heures actuellement disponibles. Des heures supplémentaires ou des 
              vacations ponctuelles pourront combler l'écart.
            </p>

            <p className="text-gray-700">
              La troisième année (2029-2030) marquera un premier point d'attention, avec un besoin 
              total de 70 heures (52 heures d'anglais classique + 18 heures de SI). L'enseignante 
              américaine atteindra presque sa capacité maximale (20 heures), et il faudra envisager 
              des solutions pour couvrir les 10 heures supplémentaires nécessaires.
            </p>

            <p className="text-gray-700">
              La quatrième année (2030-2031) constituera un premier seuil critique, avec un besoin 
              total de 76 heures (52 heures d'anglais classique + 24 heures de SI). Ce seuil justifiera le 
              recrutement d'un enseignant supplémentaire, idéalement avec un profil adapté à la SI.
            </p>

            <p className="text-gray-700">
              Les années suivantes verront une augmentation continue des besoins, jusqu'à atteindre 
              94 heures hebdomadaires en 2033-2034 (52 heures d'anglais classique + 42 heures de 
              SI). Ce second seuil critique nécessitera un troisième recrutement pour atteindre 
              l'équivalent de 4,7 ETP.
            </p>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-lg mb-3">Stratégie de gestion des ressources humaines</h4>
          <p className="text-gray-700 mb-3">
            Face à cette évolution des besoins, deux options principales se dégagent pour la gestion 
            des ressources humaines :
          </p>

          <div className="bg-blue-50 p-4 rounded-lg mb-3">
            <h5 className="font-semibold text-blue-800 mb-2">L'option A</h5>
            <p className="text-sm text-gray-700">
              consiste à suivre strictement les seuils de recrutement identifiés, avec deux 
              recrutements principaux : un premier en 2030-2031 et un second en 2033-2034. Entre ces 
              seuils, des solutions intermédiaires (heures supplémentaires, ajustements de service) 
              seraient mises en place. Cette approche permet de limiter les coûts salariaux dans les 
              premières années, mais implique une réorganisation fréquente des services et une 
              grande flexibilité de la part des enseignants existants.
            </p>
          </div>

          <div className="bg-green-50 p-4 rounded-lg mb-3">
            <h5 className="font-semibold text-green-800 mb-2">L'option B</h5>
            <p className="text-sm text-gray-700">
              propose d'anticiper les recrutements par rapport aux seuils critiques, en 
              privilégiant des profils polyvalents capables d'intervenir à la fois dans la SI et dans les 
              cours d'anglais classiques. Concrètement, cela signifierait un premier recrutement dès 
              2029-2030 et un second en 2032-2033. Cette approche offre une plus grande stabilité à 
              l'équipe pédagogique et facilite la constitution progressive d'une équipe dédiée à la SI, 
              mais entraîne un surcoût financier dans les premières années.
            </p>
          </div>

          <p className="text-gray-700">
            Le choix entre ces deux options dépendra en grande partie du scénario d'effectifs retenu, 
            comme nous le verrons dans l'analyse financière.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default DeploiementPlanRH;
