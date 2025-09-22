import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DeploiementPlanIntroduction = () => {
  return (
    <Card className="border-french-blue/10 shadow-md">
      <CardHeader>
        <CardTitle className="text-2xl text-french-blue">1. Vision et objectifs</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-gray-700">
          Le Lycée français Jacques Prévert (LFJP) s'engage dans une transformation progressive
          pour devenir un établissement intégralement Section Internationale Américaine (SIA),
          avec une diplomation au Baccalauréat Français International (BFI) en 2029. Cette
          trajectoire vise à structurer un continuum bilingue du CP à la Terminale en s'appuyant
          sur l'homologation AEFE, un environnement international affirmé et un réseau de
          partenariats solides.
        </p>
        <p className="text-gray-700">
          L'objectif est de proposer un parcours inclusif et attractif, conjuguant excellence
          linguistique et exigence académique. Le dispositif permettra à chaque élève de
          bénéficier d'un enseignement renforcé en anglais, de disciplines non linguistiques en
          immersion et d'une préparation progressive vers la diplomation BFI, afin de consolider
          l'attractivité du LFJP sur son territoire.
        </p>
      </CardContent>
    </Card>
  );
};

export default DeploiementPlanIntroduction;
