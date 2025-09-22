import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DeploiementPlanConclusion = () => {
  return (
    <Card className="border-french-blue/10 shadow-md">
      <CardHeader>
        <CardTitle className="text-2xl text-french-blue">6. Conclusion stratégique</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-gray-700">
          Le plan de déploiement consolide un parcours bilingue complet, du primaire au BFI,
          combinant inclusion, excellence et reconnaissance internationale. L'adossement aux
          standards de la Section Internationale Américaine et du Baccalauréat Français
          International positionne le LFJP comme un établissement de référence dans la sous-région.
        </p>

        <div className="bg-blue-50 p-4 rounded-lg space-y-2">
          <h4 className="font-semibold text-blue-800">Atouts clés</h4>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
            <li>Parcours bilingue continu et structuré pour tous les élèves.</li>
            <li>Modèle de financement lisible reposant sur un supplément unique de 300&nbsp;000&nbsp;FCFA au secondaire.</li>
            <li>Accompagnement RH planifié pour soutenir la qualité pédagogique.</li>
          </ul>
        </div>

        <div className="bg-amber-50 p-4 rounded-lg space-y-2">
          <h4 className="font-semibold text-amber-800">Point de vigilance</h4>
          <p className="text-sm text-gray-700">
            L'équilibre économique du dispositif dépendra des arbitrages entre le Scénario&nbsp;1,
            financièrement soutenable, et les Scénarios&nbsp;2 et 3, plus protecteurs pour les équipes
            mais exigeant un financement complémentaire (subventions, appui de l'APE ou
            redéploiements budgétaires).
          </p>
        </div>

        <p className="text-gray-700 font-medium">
          En combinant attractivité, maîtrise financière et pilotage RH anticipé, le LFJP se dote des
          leviers nécessaires pour réussir la généralisation de la SIA et garantir la diplomation
          BFI dès 2029.
        </p>
      </CardContent>
    </Card>
  );
};

export default DeploiementPlanConclusion;
