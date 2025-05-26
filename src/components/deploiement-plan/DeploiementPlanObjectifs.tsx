
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DeploiementPlanObjectifs = () => {
  return (
    <Card className="border-french-blue/10 shadow-md">
      <CardHeader>
        <CardTitle className="text-2xl text-french-blue">2. Objectifs du plan de déploiement</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-gray-700">
          Le plan de déploiement de la Section Internationale Américaine et du BFI poursuit 
          plusieurs objectifs complémentaires :
        </p>
        
        <p className="text-gray-700">
          L'objectif principal est d'assurer une mise en place progressive et maîtrisée de la SI, en 
          commençant par la classe de 6ème en 2027 et en suivant la cohorte jusqu'à l'ouverture 
          du BFI en 2034. Cette approche par paliers permet d'adapter les ressources et 
          l'organisation au fur et à mesure de la montée en charge.
        </p>
        
        <p className="text-gray-700">
          Le plan vise également à anticiper et gérer les impacts sur les ressources humaines, en 
          identifiant les besoins en recrutement et en formation, et en proposant des stratégies 
          d'optimisation des ressources existantes. L'établissement dispose déjà d'une 
          enseignante américaine qui pourra progressivement basculer sur la SI, ce qui constitue 
          un atout majeur pour le démarrage du projet.
        </p>
        
        <p className="text-gray-700">
          Sur le plan financier, l'objectif est d'assurer la viabilité économique du dispositif, en 
          équilibrant les coûts supplémentaires générés par la SI (principalement salariaux) avec 
          les revenus issus des frais d'inscription spécifiques (300 000 CFA par élève et par an). Le 
          plan propose des stratégies pour atteindre cet équilibre à moyen terme, avec différents 
          scénarios d'effectifs.
        </p>
        
        <p className="text-gray-700">
          Enfin, le plan s'attache à garantir la qualité pédagogique de la SI, en veillant à la 
          cohérence des enseignements et à la stabilité des équipes. Il prévoit des mécanismes de 
          suivi et d'évaluation régulière pour ajuster le dispositif si nécessaire.
        </p>
      </CardContent>
    </Card>
  );
};

export default DeploiementPlanObjectifs;
