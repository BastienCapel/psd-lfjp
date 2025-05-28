
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
          mettre en oeuvre, en distinguant les actions primaires et secondaires.
        </p>

        <div className="space-y-6">
          <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
            <h4 className="font-semibold text-yellow-800 mb-3">Année scolaire 2024-2025 : Préparation initiale</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
              <li><strong>Primaire :</strong> Diagnostic enseignement anglais, définition identité SI primaire, préparation recrutement.</li>
              <li><strong>Général :</strong> Constitution comité pilotage SI, communication initiale.</li>
            </ul>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
            <h4 className="font-semibold text-blue-800 mb-3">Année scolaire 2025-2026 : Renforcement primaire</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
              <li><strong>Primaire :</strong> Intégration nouvel enseignant, formation équipe, élaboration programmes EMILE.</li>
              <li><strong>Général :</strong> Communication sur ouverture SI primaire (gratuite).</li>
            </ul>
          </div>

          <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
            <h4 className="font-semibold text-green-800 mb-3">Année scolaire 2026-2027 : Ouverture SI Primaire</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
              <li><strong>Primaire :</strong> Mise en oeuvre SI (4h/niveau), événements culturels SI, évaluation.</li>
              <li><strong>Secondaire :</strong> Préparation ouverture 6ème SI (optionnelle, payante).</li>
              <li><strong>Général :</strong> Coordination intégrée, communication différenciée.</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-french-blue mb-3">Année scolaire 2027-2028 : Maintien Primaire & Ouverture 6ème SI</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
              <li><strong>Primaire :</strong> Poursuite SI gratuite, ajustements pédagogiques.</li>
              <li><strong>Secondaire :</strong> Ouverture 6ème SI optionnelle, suivi spécifique, communication ciblée (objectif 20 élèves).</li>
              <li><strong>Général :</strong> Première évaluation de la coordination intégrée.</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-french-blue mb-3">Année scolaire 2028-2029 : Maintien Primaire & Extension 5ème SI</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
              <li><strong>Primaire :</strong> Poursuite SI gratuite.</li>
              <li><strong>Secondaire :</strong> Extension 5ème SI optionnelle, stratégie de recrutement active.</li>
              <li><strong>Général :</strong> Lancement processus 1er recrutement secondaire (anticipé).</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-french-blue mb-3">Année scolaire 2029-2030 : Maintien Primaire & Extension 4ème SI</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
              <li><strong>Primaire :</strong> Poursuite SI gratuite.</li>
              <li><strong>Secondaire :</strong> Extension 4ème SI optionnelle, intégration 1er enseignant recruté.</li>
              <li><strong>Général :</strong> Consolidation équipe SI secondaire, évaluation financière secondaire.</li>
            </ul>
          </div>

          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-3">Années suivantes (2030-2035) :</h4>
            <div className="space-y-2 text-sm text-gray-700">
              <p><strong>Primaire :</strong> Maintien SI gratuite, amélioration continue.</p>
              <p><strong>Secondaire :</strong> Poursuite extension SI optionnelle, 2ème recrutement anticipé (2032 
              pour 2033), ouverture BFI (2034), suivi financier rigoureux (objectif 20 élèves/niveau).</p>
              <p><strong>Général :</strong> Renforcement coordination, évaluation impact global, développement 
              écosystème SI.</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DeploiementPlanAction;
