
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DeploiementPlanAction = () => {
  return (
    <Card className="border-french-blue/10 shadow-md">
      <CardHeader>
        <CardTitle className="text-2xl text-french-blue">7. Plan d'action détaillé</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <p className="text-gray-700">
          Le plan d'action détaillé présente, pour chaque année scolaire, les actions concrètes à 
          mettre en œuvre pour assurer le déploiement réussi de la Section Internationale 
          Américaine et du BFI, en se basant sur le scénario haut à 20 élèves par niveau.
        </p>

        <div className="space-y-6">
          <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
            <h4 className="font-semibold text-yellow-800 mb-3">Année scolaire 2025-2026 : Préparation initiale</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
              <li>Constitution du comité de pilotage de la SI (direction, enseignants, représentants des parents)</li>
              <li>Élaboration détaillée des programmes pédagogiques spécifiques à la SI</li>
              <li>Définition précise du profil de poste pour les futurs enseignants de la SI</li>
              <li>Préparation du plan de communication pour le recrutement des élèves</li>
              <li>Planification détaillée de la formation de l'enseignante américaine déjà en poste</li>
              <li>Étude de marché pour confirmer le potentiel de recrutement de 20 élèves par niveau</li>
            </ul>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-800 mb-3">Année scolaire 2026-2027 : Préparation opérationnelle</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
              <li>Formation de l'enseignante américaine aux spécificités de la SI</li>
              <li>Communication active auprès des familles (réunions d'information, brochures, etc.)</li>
              <li>Recrutement des élèves pour la première cohorte de 6ème SI (objectif : 20 élèves)</li>
              <li>Préparation des supports pédagogiques spécifiques</li>
              <li>Aménagement des espaces dédiés à la SI si nécessaire</li>
              <li>Finalisation de la réorganisation des services pour l'année suivante</li>
              <li>Premiers contacts avec des partenaires potentiels (entreprises américaines, organismes culturels)</li>
            </ul>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-800 mb-3">Année scolaire 2027-2028 : Ouverture 6ème SI</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
              <li>Mise en œuvre effective de la SI en classe de 6ème avec 20 élèves</li>
              <li>Réaffectation partielle de l'enseignante américaine (6 heures hebdomadaires)</li>
              <li>Suivi pédagogique rapproché de la première cohorte</li>
              <li>Évaluation continue du dispositif et ajustements si nécessaire</li>
              <li>Préparation de l'ouverture de la 5ème SI</li>
              <li>Communication sur les premiers résultats pour préparer le recrutement de la nouvelle cohorte</li>
              <li>Acquisition des premières ressources pédagogiques spécifiques</li>
              <li>Organisation d'un premier événement culturel américain</li>
            </ul>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-800 mb-3">Année scolaire 2028-2029 : Extension 5ème SI</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
              <li>Poursuite de la SI en 6ème et ouverture en 5ème, avec 20 élèves par niveau</li>
              <li>Réaffectation accrue de l'enseignante américaine (12 heures hebdomadaires)</li>
              <li>Ajustement de la répartition des services pour les cours d'anglais classiques</li>
              <li>Évaluation approfondie après un an de fonctionnement</li>
              <li>Préparation de l'ouverture de la 4ème SI</li>
              <li>Lancement du processus de recrutement pour l'année suivante</li>
              <li>Développement des ressources pédagogiques spécifiques</li>
              <li>Mise en place des premiers partenariats externes</li>
            </ul>
          </div>

          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-3">Année scolaire 2029-2030 : Extension 4ème SI et premier recrutement</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
              <li>Poursuite de la SI en 6ème et 5ème, ouverture en 4ème, avec 20 élèves par niveau</li>
              <li>Intégration du nouvel enseignant recruté (anticipation du seuil critique)</li>
              <li>Réaffectation quasi-totale de l'enseignante américaine à la SI (18 heures)</li>
              <li>Répartition optimisée des services entre les deux enseignants</li>
              <li>Évaluation de l'impact du premier recrutement sur la qualité pédagogique</li>
              <li>Enrichissement des ressources pédagogiques et des activités culturelles</li>
              <li>Développement des partenariats externes</li>
            </ul>
          </div>

          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-3">Année scolaire 2030-2031 : Extension 3ème SI</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
              <li>Poursuite de la SI au collège, ouverture en 3ème, avec 20 élèves par niveau</li>
              <li>Consolidation de l'équipe pédagogique (deux enseignants)</li>
              <li>Répartition optimisée des services entre les enseignants</li>
              <li>Évaluation approfondie du dispositif après trois ans de fonctionnement</li>
              <li>Préparation de l'extension au lycée (programmes, ressources, formation)</li>
              <li>Développement du centre de ressources américain</li>
              <li>Renforcement des partenariats externes</li>
            </ul>
          </div>

          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-3">Année scolaire 2031-2032 : Extension 2nde SI</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
              <li>Poursuite de la SI au collège, ouverture en 2nde, avec 20 élèves par niveau</li>
              <li>Ajustement de la répartition des services entre les enseignants</li>
              <li>Préparation spécifique pour l'entrée au lycée (orientation, spécialités)</li>
              <li>Lancement du processus de recrutement pour l'année suivante</li>
              <li>Enrichissement continu des ressources et des activités</li>
              <li>Développement des projets collaboratifs avec des établissements américains</li>
            </ul>
          </div>

          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-3">Année scolaire 2032-2033 : Extension 1ère SI et second recrutement</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
              <li>Poursuite de la SI au collège et en 2nde, ouverture en 1ère, avec 20 élèves par niveau</li>
              <li>Intégration du second enseignant recruté (anticipation du seuil critique)</li>
              <li>Répartition optimisée des services entre les trois enseignants</li>
              <li>Préparation spécifique à l'ouverture du BFI (formation, certification)</li>
              <li>Évaluation approfondie du dispositif après 5 ans de fonctionnement</li>
              <li>Consolidation de l'écosystème SI/BFI (ressources, partenariats, activités)</li>
            </ul>
          </div>

          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-3">Année scolaire 2033-2034 : Extension Terminale SI</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
              <li>Poursuite de la SI du collège à la 1ère, ouverture en Terminale, avec 20 élèves par niveau</li>
              <li>Consolidation de l'équipe pédagogique (trois enseignants)</li>
              <li>Préparation intensive à l'ouverture du BFI</li>
              <li>Communication renforcée sur l'aboutissement du projet</li>
              <li>Finalisation des préparatifs pour la première session du BFI</li>
              <li>Évaluation globale du déploiement et ajustements finaux</li>
            </ul>
          </div>

          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-3">Année scolaire 2034-2035 : Ouverture du BFI</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
              <li>Première session du BFI pour la cohorte initiale</li>
              <li>Stabilisation du dispositif en régime de croisière</li>
              <li>Évaluation globale du projet après un cycle complet</li>
              <li>Valorisation des premiers résultats du BFI</li>
              <li>Réflexion sur les perspectives d'évolution du dispositif</li>
            </ul>
          </div>
        </div>

        <p className="text-gray-700 mt-4">
          Ce plan d'action détaillé permet d'anticiper les étapes clés du déploiement et de 
          préparer les décisions stratégiques nécessaires à chaque phase. Il devra être 
          régulièrement actualisé par le comité de pilotage en fonction des réalités rencontrées et 
          des ajustements nécessaires.
        </p>
      </CardContent>
    </Card>
  );
};

export default DeploiementPlanAction;
