
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
          Le plan de déploiement de la Section Internationale Américaine et du BFI au lycée 
          français Jacques Prévert de Saly représente un projet ambitieux et structurant pour 
          l'établissement. Il s'inscrit dans une démarche d'enrichissement de l'offre pédagogique 
          et d'ouverture internationale, répondant aux attentes des familles et aux enjeux 
          éducatifs contemporains.
        </p>

        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="text-gray-700 mb-3">
            L'approche progressive retenue, avec une ouverture niveau par niveau à partir de la 
            6ème en 2027, permet de maîtriser les impacts organisationnels, humains et financiers 
            du projet. Elle offre également la possibilité d'ajuster la stratégie au fur et à mesure du 
            déploiement, en fonction des réalités rencontrées et des retours d'expérience.
          </p>

          <p className="text-gray-700 mb-3">
            L'analyse des différents scénarios d'effectifs a mis en évidence l'importance d'atteindre 
            un objectif de 20 élèves par niveau pour assurer la viabilité économique complète du 
            dispositif et permettre des investissements qualitatifs. Ce scénario haut offre une 
            perspective particulièrement favorable, avec un excédent financier tout au long du 
            déploiement et la possibilité d'anticiper certains recrutements pour assurer une 
            meilleure stabilité pédagogique.
          </p>

          <p className="text-gray-700">
            Les options organisationnelles recommandées visent à tirer pleinement parti de cette 
            situation favorable, en combinant anticipation des recrutements, maintien des frais 
            d'inscription à 300 000 CFA, et investissements ciblés dans la qualité et le rayonnement 
            du dispositif. Cette approche centrée sur l'excellence et la pérennité permettra de 
            développer progressivement un véritable écosystème autour de la SI et du BFI.
          </p>
        </div>

        <p className="text-gray-700">
          La réussite de ce projet reposera sur plusieurs facteurs clés : - La capacité à attirer et 
          fidéliser 20 élèves par niveau, grâce à une communication efficace et une offre 
          pédagogique distinctive - La qualité et la stabilité de l'équipe pédagogique dédiée à la SI 
          - L'implication et l'adhésion de l'ensemble de la communauté éducative - La mise en 
          place d'une gouvernance efficace et participative - L'enrichissement progressif de l'offre 
          pédagogique et des activités culturelles
        </p>

        <p className="text-gray-700">
          Le comité de pilotage jouera un rôle essentiel dans le suivi du déploiement et 
          l'ajustement continu du dispositif. Les indicateurs de suivi proposés permettront 
          d'évaluer régulièrement la pertinence des choix effectués et d'identifier les axes 
          d'amélioration.
        </p>

        <p className="text-gray-700">
          Au-delà des aspects organisationnels et financiers, ce projet porte une ambition 
          pédagogique forte : offrir aux élèves un parcours d'excellence bilingue et biculturel, les 
          préparant aux défis d'un monde globalisé. C'est dans cette perspective que s'inscrit 
          l'aboutissement du projet avec l'ouverture du BFI en 2034, couronnement d'un cycle 
          complet de formation internationale.
        </p>

        <p className="text-gray-700 font-medium">
          Le présent plan de déploiement constitue une feuille de route structurée mais 
          adaptative, qui devra vivre et évoluer au fil des années, en conservant toujours comme 
          boussole la réussite des élèves et la qualité de l'enseignement dispensé.
        </p>
      </CardContent>
    </Card>
  );
};

export default DeploiementPlanConclusion;
