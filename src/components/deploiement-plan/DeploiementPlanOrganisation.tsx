
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
          Sur la base des analyses précédentes et en tenant compte particulièrement du scénario 
          haut à 20 élèves par niveau, nous recommandons les options organisationnelles 
          suivantes pour le déploiement de la Section Internationale Américaine et du BFI.
        </p>

        <div>
          <h4 className="font-semibold text-lg mb-3">Gestion des ressources humaines</h4>
          <p className="text-gray-700 mb-3">
            Pour la gestion des ressources humaines, nous recommandons l'option B (anticipation 
            des recrutements avec profils polyvalents), qui permet de constituer progressivement 
            une équipe stable et cohérente. Cette approche est particulièrement adaptée au 
            scénario haut, qui génère suffisamment de revenus pour absorber le surcoût initial des 
            recrutements anticipés.
          </p>
          
          <div className="bg-blue-50 p-4 rounded-lg mb-3">
            <p className="text-sm text-gray-700">
              Concrètement, cela se traduira par : - Une réaffectation progressive de l'enseignante 
              américaine déjà en poste vers la SI, jusqu'à un service complet (20 heures) dédié à la SI à 
              partir de 2029-2030 - Un premier recrutement dès 2029-2030, anticipant légèrement le 
              seuil critique de 2030-2031, pour assurer une transition fluide et permettre une 
              intégration progressive du nouvel enseignant - Un second recrutement en 2032-2033, 
              anticipant également le seuil critique de 2033-2034, pour les mêmes raisons - Une 
              répartition optimisée des services entre les enseignants, favorisant la spécialisation 
              progressive sur la SI tout en maintenant une certaine polyvalence
            </p>
          </div>
          
          <p className="text-gray-700">
            Cette approche permet d'assurer une stabilité pédagogique et une cohérence des 
            enseignements, éléments essentiels pour la qualité de la SI et sa réputation. Elle facilite 
            également la constitution progressive d'une équipe dédiée, avec une identité et une 
            culture communes.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-lg mb-3">Équilibre financier et investissements qualitatifs</h4>
          <p className="text-gray-700 mb-3">
            Dans le cadre du scénario haut à 20 élèves par niveau, nous recommandons de 
            maintenir les frais d'inscription à 300 000 CFA tout au long du déploiement, sans 
            augmentation. Cette stabilité tarifaire contribuera à l'attractivité de la SI et facilitera la 
            projection financière à long terme pour les familles.
          </p>
          
          <p className="text-gray-700 mb-3">
            L'excédent financier généré par ce scénario (entre 6 et 12 millions de CFA par an) 
            permettra de financer non seulement les recrutements anticipés, mais aussi des
          </p>
          
          <div className="bg-green-50 p-4 rounded-lg">
            <h5 className="font-semibold text-green-800 mb-2">investissements qualitatifs pour enrichir l'offre pédagogique de la SI. Nous recommandons de prioriser les investissements suivants :</h5>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
              <li>Des ressources pédagogiques spécifiques (bibliothèque américaine, outils numériques, manuels spécialisés)</li>
              <li>Des activités culturelles et des échanges avec les États-Unis (conférences, visites virtuelles, projets collaboratifs)</li>
              <li>Des équipements dédiés pour la SI (aménagement d'espaces spécifiques, matériel audiovisuel)</li>
              <li>La formation continue des enseignants (participation à des réseaux de sections internationales, certifications spécifiques)</li>
            </ul>
          </div>
          
          <p className="text-gray-700 mt-3">
            Ces investissements contribueront à renforcer la qualité et l'attractivité de la SI, créant 
            ainsi un cercle vertueux pour maintenir des effectifs élevés.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-lg mb-3">Développement d'un écosystème SI/BFI enrichi</h4>
          <p className="text-gray-700 mb-3">
            Au-delà des aspects organisationnels et financiers, nous recommandons de développer 
            progressivement un véritable écosystème autour de la SI et du BFI, pour en faire un pôle 
            d'excellence et d'ouverture internationale au sein de l'établissement.
          </p>
          
          <div className="bg-yellow-50 p-4 rounded-lg mb-3">
            <p className="text-sm text-gray-700">
              Cet écosystème pourrait inclure : - Un centre de ressources américain, accessible à 
              l'ensemble de la communauté éducative - Des événements culturels réguliers (semaine 
              américaine, célébrations de fêtes traditionnelles) - Des partenariats avec des entreprises 
              américaines implantées localement, pour des interventions professionnelles ou des 
              visites - Des projets collaboratifs avec des établissements américains ou proposant des 
              sections internationales similaires
            </p>
          </div>
          
          <p className="text-gray-700">
            Cette approche permettra de renforcer l'ancrage et le rayonnement de la SI dans son 
            environnement, tout en enrichissant l'expérience des élèves au-delà du cadre scolaire 
            traditionnel.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-lg mb-3">Gouvernance du projet</h4>
          <p className="text-gray-700 mb-3">
            Pour assurer le succès du déploiement, nous recommandons la mise en place d'un 
            comité de pilotage dédié à la SI, associant direction, enseignants et représentants des 
            parents. Ce comité sera chargé de : - Suivre régulièrement l'évolution du déploiement 
            (effectifs, équilibre financier, qualité pédagogique) - Ajuster les stratégies en fonction des 
            réalités rencontrées - Communiquer auprès de la communauté éducative sur 
            l'avancement du projet - Prendre les décisions stratégiques aux moments clés du 
            déploiement (recrutements, investissements, etc.)
          </p>
          
          <p className="text-gray-700">
            Ce comité se réunira au moins trois fois par an (début d'année, mi-parcours, bilan 
            annuel) et produira un rapport annuel d'évaluation du dispositif.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default DeploiementPlanOrganisation;
