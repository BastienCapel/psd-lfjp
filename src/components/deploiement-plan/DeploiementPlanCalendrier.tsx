
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DeploiementPlanCalendrier = () => {
  return (
    <Card className="border-french-blue/10 shadow-md">
      <CardHeader>
        <CardTitle className="text-2xl text-french-blue">3. Calendrier de déploiement progressif</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <p className="text-gray-700">
          Le déploiement de la Section Internationale Américaine suivra un calendrier progressif, 
          commençant par le primaire puis s'étendant au secondaire, avec des modalités distinctes.
        </p>

        <div className="grid gap-4">
          <div className="bg-blue-100 p-4 rounded-lg border-l-4 border-blue-500">
            <h4 className="font-semibold text-blue-800 mb-2">Année scolaire 2024-2025 : Diagnostic et préparation</h4>
            <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
              <li>Diagnostic de l'enseignement de l'anglais au primaire : Volume horaire minimal de 1h/classe, capacité d'enseignement de 27h/semaine.</li>
              <li>Préparation du recrutement d'un enseignant supplémentaire pour le primaire.</li>
            </ul>
          </div>
          
          <div className="bg-blue-100 p-4 rounded-lg border-l-4 border-blue-500">
            <h4 className="font-semibold text-blue-800 mb-2">Année scolaire 2025-2026 : Renforcement primaire</h4>
            <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
              <li>Recrutement d'une enseignante supplémentaire pour le primaire.</li>
              <li>Augmentation de la capacité d'enseignement au primaire à 54h/semaine.</li>
              <li>Préparation pédagogique (programmes SI/EMILE, formation) pour l'ouverture au primaire.</li>
              <li>Communication aux familles sur l'ouverture de la SI primaire.</li>
            </ul>
          </div>
          
          <div className="bg-green-100 p-4 rounded-lg border-l-4 border-green-500">
            <h4 className="font-semibold text-green-800 mb-2">Année scolaire 2026-2027 : Ouverture SI Primaire</h4>
            <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
              <li>Ouverture de la SI pour l'ensemble du primaire (CP-CM2).</li>
              <li>Effectif : 230 élèves maximum.</li>
              <li>Volume horaire : 4h/niveau (dont 2h d'EMILE).</li>
              <li>Besoins RH primaire : 20h/semaine (couverts par les 2 enseignants).</li>
              <li>Modalité financière : Aucun surcoût pour les familles.</li>
              <li>Préparation de l'ouverture au secondaire.</li>
            </ul>
          </div>
          
          <div className="bg-gray-100 p-4 rounded-lg">
            <h4 className="font-semibold text-french-blue mb-2">Année scolaire 2027-2028 : Maintien Primaire & Ouverture 6ème SI</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
              <div>
                <p className="font-medium mb-1">Primaire :</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Poursuite de la SI pour tous, sans surcoût.</li>
                </ul>
              </div>
              <div>
                <p className="font-medium mb-1">Secondaire :</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Ouverture de la 6ème SI (optionnelle).</li>
                  <li>Effectifs : 10-20 élèves.</li>
                  <li>Frais spécifiques : 300 000 CFA/an.</li>
                  <li>Besoins RH secondaire : 6h/semaine.</li>
                  <li>Revenus secondaire : 3M à 6M CFA.</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-100 p-4 rounded-lg">
            <h4 className="font-semibold text-french-blue mb-2">Année scolaire 2028-2029 : Maintien Primaire & Extension 5ème SI</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
              <div>
                <p className="font-medium mb-1">Primaire :</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Poursuite de la SI pour tous, sans surcoût.</li>
                </ul>
              </div>
              <div>
                <p className="font-medium mb-1">Secondaire :</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Extension à la 5ème SI (optionnelle, payante).</li>
                  <li>Effectifs cumulés : 20-40 élèves.</li>
                  <li>Besoins RH secondaire : 12h/semaine.</li>
                  <li>Revenus secondaire : 6M à 12M CFA.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg">
            <h4 className="font-semibold text-french-blue mb-2">Année scolaire 2029-2030 : Maintien Primaire & Extension 4ème SI</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
              <div>
                <p className="font-medium mb-1">Primaire :</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Poursuite de la SI pour tous, sans surcoût.</li>
                </ul>
              </div>
              <div>
                <p className="font-medium mb-1">Secondaire :</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Extension à la 4ème SI (optionnelle, payante).</li>
                  <li>Effectifs cumulés : 30-60 élèves.</li>
                  <li>Besoins RH secondaire : 18h/semaine.</li>
                  <li>Revenus secondaire : 9M à 18M CFA.</li>
                  <li>Anticipation du 1er recrutement secondaire.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-green-100 p-4 rounded-lg border-l-4 border-green-500">
            <h4 className="font-semibold text-green-800 mb-2">Année scolaire 2030-2031 : Maintien Primaire & Extension 3ème SI</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
              <div>
                <p className="font-medium mb-1">Primaire :</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Poursuite de la SI pour tous, sans surcoût.</li>
                </ul>
              </div>
              <div>
                <p className="font-medium mb-1">Secondaire :</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Extension à la 3ème SI (optionnelle, payante).</li>
                  <li>Effectifs cumulés : 40-80 élèves.</li>
                  <li>Besoins RH secondaire : 24h/semaine.</li>
                  <li>Revenus secondaire : 12M à 24M CFA.</li>
                  <li><strong>1er recrutement secondaire effectif.</strong></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-green-100 p-4 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-2">Années scolaires 2031-2033 : Poursuite extension lycée</h4>
            <p className="text-sm text-gray-700 mb-2">
              Maintien de la SI gratuite au primaire et extension progressive au lycée (2nde puis 1ère SI optionnelles).
            </p>
            <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
              <li>2031-2032 : Extension 2nde SI (50-100 élèves, 30h/semaine, 15M-30M CFA)</li>
              <li>2032-2033 : Extension 1ère SI (60-120 élèves, 36h/semaine, 18M-36M CFA) + Anticipation 2ème recrutement + Préparation BFI</li>
            </ul>
          </div>

          <div className="bg-green-100 p-4 rounded-lg border-l-4 border-green-500">
            <h4 className="font-semibold text-green-800 mb-2">Année scolaire 2033-2034 : Maintien Primaire & Extension Terminale SI</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
              <div>
                <p className="font-medium mb-1">Primaire :</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Poursuite de la SI pour tous, sans surcoût.</li>
                </ul>
              </div>
              <div>
                <p className="font-medium mb-1">Secondaire :</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Extension à la Terminale SI (optionnelle, payante).</li>
                  <li>Effectifs cumulés : 70-140 élèves.</li>
                  <li>Besoins RH secondaire : 42h/semaine.</li>
                  <li>Revenus secondaire : 21M à 42M CFA.</li>
                  <li><strong>2ème recrutement secondaire effectif.</strong></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-green-100 p-4 rounded-lg border-l-4 border-green-500">
            <h4 className="font-semibold text-green-800 mb-2">Année scolaire 2034-2035 : Maintien Primaire & Ouverture BFI</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
              <div>
                <p className="font-medium mb-1">Primaire :</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Poursuite de la SI pour tous, sans surcoût.</li>
                </ul>
              </div>
              <div>
                <p className="font-medium mb-1">Secondaire :</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Ouverture du BFI (optionnel, payant).</li>
                  <li>Effectifs cumulés : 70-140 élèves.</li>
                  <li>Besoins RH secondaire : 42h/semaine.</li>
                  <li>Revenus secondaire : 21M à 42M CFA.</li>
                  <li><strong>Première session d'examens du BFI.</strong></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <p className="text-gray-700 mt-4">
          Ce calendrier de déploiement progressif permet d'étaler dans le temps les 
          investissements humains et financiers, tout en assurant une montée en charge maîtrisée 
          du dispositif. Il distingue clairement l'investissement au primaire (gratuit) de l'équilibre 
          recherché au secondaire (payant).
        </p>
      </CardContent>
    </Card>
  );
};

export default DeploiementPlanCalendrier;
