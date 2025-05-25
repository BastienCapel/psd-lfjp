
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DeploiementPlanIntroduction = () => {
  return (
    <Card className="border-french-blue/10 shadow-md">
      <CardHeader>
        <CardTitle className="text-2xl text-french-blue">1. Introduction et contexte</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-gray-700">
          Le Lycée Français Jacques Prévert de Saly s'engage dans une démarche ambitieuse de développement 
          d'une Section Internationale Américaine et d'un programme de Baccalauréat Français International (BFI). 
          Cette initiative s'inscrit dans le cadre du Plan Stratégique de Développement 2026-2030 et vise à 
          renforcer l'attractivité et l'excellence de l'établissement.
        </p>
        <div className="bg-blue-50 p-4 rounded-lg">
          <h4 className="font-semibold text-french-blue mb-2">Contexte stratégique et point de départ</h4>
          <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
            <li><strong>2026 :</strong> Demande d'autorisation à la DGESCO pour la Section Internationale sur tout le primaire</li>
            <li>La structure est déjà prête, seule l'autorisation officielle est requise</li>
            <li>Demande croissante pour un enseignement bilingue de qualité</li>
            <li>Positionnement concurrentiel sur le marché éducatif sénégalais</li>
            <li>Réponse aux attentes des familles internationales</li>
            <li>Valorisation du projet pédagogique de l'établissement</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default DeploiementPlanIntroduction;
