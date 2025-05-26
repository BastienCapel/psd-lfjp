
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DeploiementPlanCalendrier = () => {
  return (
    <Card className="border-french-blue/10 shadow-md">
      <CardHeader>
        <CardTitle className="text-2xl text-french-blue">3. Calendrier de déploiement progressif</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <p className="text-gray-700">
          Le déploiement de la Section Internationale Américaine suivra un calendrier progressif, 
          avec une ouverture niveau par niveau, en commençant par la classe de 6ème en 2027. 
          Cette approche permet d'accompagner la cohorte initiale jusqu'à l'obtention du BFI, 
          tout en maîtrisant l'impact sur l'organisation et les ressources de l'établissement.
        </p>

        <div className="grid gap-4">
          <div className="bg-yellow-100 p-4 rounded-lg border-l-4 border-yellow-500">
            <h4 className="font-semibold text-yellow-800 mb-2">Année scolaire 2026-2027</h4>
            <p className="text-sm text-gray-700 mb-2">
              Cette année sera consacrée à la préparation de l'ouverture de la SI au secondaire. Les 
              actions principales comprendront la formation de l'enseignante américaine déjà en 
              poste, la finalisation des programmes pédagogiques spécifiques à la SI, et la 
              communication auprès des familles pour préparer le recrutement des élèves. Aucune 
              heure d'enseignement SI n'est prévue durant cette phase préparatoire.
            </p>
          </div>
          
          <div className="bg-gray-100 p-4 rounded-lg">
            <h4 className="font-semibold text-french-blue mb-2">Année scolaire 2027-2028</h4>
            <p className="text-sm text-gray-700 mb-2">
              L'ouverture effective de la SI débutera avec la classe de 6ème, accueillant entre 10 et 20 
              élèves selon le scénario d'effectifs. Le volume horaire hebdomadaire spécifique à la SI 
              sera de 6 heures, réparties entre la littérature américaine (4 heures) et l'histoire-
              géographie en anglais (2 heures). Ces heures pourront être assurées par l'enseignante 
              américaine déjà en poste, qui basculera partiellement sur la SI. Les revenus estimés pour 
              cette première année se situeront entre 3 000 000 et 6 000 000 CFA, selon le nombre 
              d'élèves effectivement recrutés.
            </p>
          </div>
          
          <div className="bg-gray-100 p-4 rounded-lg">
            <h4 className="font-semibold text-french-blue mb-2">Année scolaire 2028-2029</h4>
            <p className="text-sm text-gray-700 mb-2">
              La SI s'étendra à la classe de 5ème, tout en maintenant la 6ème, pour un total de deux 
              niveaux. Les effectifs cumulés atteindront entre 20 et 40 élèves selon le scénario. Le 
              volume horaire hebdomadaire de la SI doublera pour atteindre 12 heures (8 heures de 
              littérature américaine et 4 heures d'histoire-géographie). L'enseignante américaine 
              pourra encore absorber ces heures si elle est dédiée majoritairement à la SI, avec une 
              réorganisation des services pour les cours d'anglais classiques. Les revenus estimés se 
              situeront entre 6 000 000 et 12 000 000 CFA.
            </p>
          </div>
          
          <div className="bg-gray-100 p-4 rounded-lg">
            <h4 className="font-semibold text-french-blue mb-2">Année scolaire 2029-2030</h4>
            <p className="text-sm text-gray-700 mb-2">
              La SI couvrira trois niveaux (6ème, 5ème et 4ème), avec des effectifs cumulés entre 30 et 
              60 élèves selon le scénario. Le volume horaire hebdomadaire atteindra 18 heures, 
              approchant la capacité maximale d'un enseignant à temps plein (20 heures). Cette 
              année marquera un premier point d'attention en termes de ressources humaines, avec 
              la nécessité d'envisager des heures supplémentaires ou un recrutement à temps partiel. 
              Les revenus estimés se situeront entre 9 000 000 et 18 000 000 CFA.
            </p>
          </div>
          
          <div className="bg-green-100 p-4 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-2">Année scolaire 2030-2031</h4>
            <p className="text-sm text-gray-700 mb-2">
              La SI s'étendra à la classe de 3ème, couvrant ainsi l'ensemble du collège. Les effectifs 
              cumulés atteindront entre 40 et 80 élèves selon le scénario, et le volume horaire 
              hebdomadaire sera de 24 heures. Cette année constituera un premier seuil critique en 
              termes de ressources humaines, nécessitant le recrutement d'un enseignant 
              supplémentaire. Les revenus estimés se situeront entre 12 000 000 et 24 000 000 CFA, ce 
              qui permettra de couvrir partiellement ou totalement (selon les effectifs) le coût de ce 
              recrutement.
            </p>
          </div>

          <div className="bg-green-100 p-4 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-2">Année scolaire 2031-2032</h4>
            <p className="text-sm text-gray-700 mb-2">
              La SI s'étendra à la classe de 2nde, entamant ainsi son déploiement au lycée. Les 
              effectifs cumulés atteindront entre 50 et 100 élèves selon le scénario, et le volume 
              horaire hebdomadaire sera de 30 heures. Les revenus estimés se situeront entre 15 000 
              000 et 30 000 000 CFA.
            </p>
          </div>

          <div className="bg-green-100 p-4 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-2">Année scolaire 2032-2033</h4>
            <p className="text-sm text-gray-700 mb-2">
              La SI couvrira six niveaux, de la 6ème à la 1ère. Les effectifs cumulés atteindront entre 60 
              et 120 élèves selon le scénario, et le volume horaire hebdomadaire sera de 36 heures. 
              Cette année marquera un deuxième point d'attention en termes de ressources 
              humaines, avec la nécessité d'envisager un recrutement supplémentaire à temps partiel. 
              Les revenus estimés se situeront entre 18 000 000 et 36 000 000 CFA. Cette année sera 
              également consacrée à la préparation de l'ouverture du BFI.
            </p>
          </div>

          <div className="bg-green-100 p-4 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-2">Année scolaire 2033-2034</h4>
            <p className="text-sm text-gray-700 mb-2">
              La SI couvrira l'ensemble des niveaux du secondaire, de la 6ème à la Terminale. Les 
              effectifs cumulés atteindront entre 70 et 140 élèves selon le scénario, et le volume 
              horaire hebdomadaire atteindra son maximum de 42 heures. Cette année constituera un 
              second seuil critique en termes de ressources humaines, nécessitant un troisième 
              recrutement. Les revenus estimés se situeront entre 21 000 000 et 42 000 000 CFA.
            </p>
          </div>

          <div className="bg-green-100 p-4 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-2">Année scolaire 2034-2035</h4>
            <p className="text-sm text-gray-700 mb-2">
              Cette année marquera l'ouverture du BFI, avec la première promotion complète de la SI. 
              Le dispositif atteindra son régime de croisière, avec un volume horaire stable de 42 
              heures hebdomadaires et des effectifs entre 70 et 140 élèves selon le scénario. Les 
              revenus estimés resteront entre 21 000 000 et 42 000 000 CFA.
            </p>
          </div>
        </div>

        <p className="text-gray-700 mt-4">
          Ce calendrier de déploiement progressif permet d'étaler dans le temps les 
          investissements humains et financiers, tout en assurant une montée en charge maîtrisée 
          du dispositif. Il offre également la possibilité d'ajuster la stratégie en fonction des 
          réalités rencontrées, notamment en termes d'effectifs et de ressources disponibles.
        </p>
      </CardContent>
    </Card>
  );
};

export default DeploiementPlanCalendrier;
