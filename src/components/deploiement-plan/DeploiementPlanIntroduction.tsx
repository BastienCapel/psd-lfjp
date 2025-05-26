
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
          Le lycée français Jacques Prévert de Saly s'engage dans un projet ambitieux d'ouverture 
          d'une Section Internationale Américaine (SI) suivie du Baccalauréat Français 
          International (BFI). Ce projet s'inscrit dans une volonté d'enrichir l'offre pédagogique de 
          l'établissement et de répondre aux attentes des familles en matière d'éducation 
          internationale.
        </p>
        <p className="text-gray-700">
          La Section Internationale Américaine représente un parcours d'excellence qui permet 
          aux élèves de développer un bilinguisme approfondi et une compréhension 
          interculturelle, tout en suivant le programme français. Elle se caractérise par un 
          enseignement renforcé en langue anglaise, notamment à travers des cours de littérature 
          américaine et d'histoire-géographie dispensés en anglais.
        </p>
        <p className="text-gray-700">
          Le présent plan de déploiement vise à organiser la mise en place progressive de cette 
          section, en tenant compte des contraintes pédagogiques, humaines et financières. Il 
          s'appuie sur une analyse détaillée des besoins et des ressources, et propose des 
          stratégies adaptées pour assurer la réussite du projet.
        </p>
      </CardContent>
    </Card>
  );
};

export default DeploiementPlanIntroduction;
