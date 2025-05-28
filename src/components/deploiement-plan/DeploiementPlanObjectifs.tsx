
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
          Le plan de déploiement révisé de la Section Internationale Américaine et du BFI poursuit 
          plusieurs objectifs complémentaires :
        </p>
        
        <p className="text-gray-700">
          L'objectif principal est d'assurer une mise en place progressive et maîtrisée de la SI, en 
          commençant par une ouverture intégrale au primaire dès 2026, offrant 4 heures 
          d'anglais hebdomadaires (dont 2h d'EMILE) à tous les élèves du CP au CM2, sans 
          surcoût pour les familles. Cet investissement pédagogique vise une immersion précoce 
          et équitable.
        </p>
        
        <p className="text-gray-700">
          Le plan vise ensuite à étendre la SI au secondaire, en commençant par la classe de 6ème 
          en 2027 et en suivant la cohorte jusqu'à l'ouverture du BFI en 2034. Au secondaire, la SI 
          sera optionnelle et associée à des frais d'inscription spécifiques de 300 000 CFA par 
          an.
        </p>
        
        <p className="text-gray-700">
          Le plan vise également à anticiper et gérer les impacts sur les ressources humaines, en 
          identifiant les besoins en recrutement (un enseignant pour le primaire en 2025, deux 
          pour le secondaire en 2030 et 2033) et en formation, et en proposant des stratégies 
          d'optimisation des ressources existantes.
        </p>
        
        <p className="text-gray-700">
          Sur le plan financier, l'objectif est de distinguer clairement l'investissement 
          pédagogique représenté par le renforcement de l'anglais et l'ouverture de la SI au 
          primaire (financé par l'établissement) de l'équilibre financier recherché pour la SI 
          optionnelle au secondaire (financée par les frais spécifiques).
        </p>
        
        <p className="text-gray-700">
          Enfin, le plan s'attache à garantir la qualité pédagogique de la SI, en veillant à la 
          cohérence des enseignements entre le primaire et le secondaire, et à la stabilité des 
          équipes. Il prévoit des mécanismes de suivi et d'évaluation régulière pour ajuster le 
          dispositif si nécessaire.
        </p>
      </CardContent>
    </Card>
  );
};

export default DeploiementPlanObjectifs;
