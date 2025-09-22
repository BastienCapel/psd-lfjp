import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const DeploiementPlanFinancier = () => {
  return (
    <Card className="border-french-blue/10 shadow-md">
      <CardHeader>
        <CardTitle className="text-2xl text-french-blue">4. Coût et financement</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <p className="text-gray-700">
          Le modèle économique distingue clairement l'investissement pédagogique offert au
          primaire et le financement spécifique demandé pour le secondaire, afin de garantir un
          déploiement soutenable du dispositif SIA/BFI.
        </p>

        <div className="bg-blue-50 p-4 rounded-lg">
          <h4 className="font-semibold text-blue-800 mb-2">Primaire – Un accès inclusif</h4>
          <p className="text-sm text-gray-700">
            Tous les élèves du CP au CM2 sont intégrés à la Section Internationale Américaine sans
            facturation additionnelle. La gratuité constitue un investissement stratégique de
            l'établissement pour diffuser le bilinguisme et alimenter le vivier du secondaire.
          </p>
        </div>

        <div className="bg-amber-50 p-4 rounded-lg space-y-3">
          <h4 className="font-semibold text-amber-800">Secondaire – Contribution dédiée</h4>
          <p className="text-sm text-gray-700">
            De la 6<sup>e</sup> à la Terminale, la participation des familles est fixée à <strong>300&nbsp;000&nbsp;FCFA</strong>
            par élève et par an. En régime complet, avec une moyenne de 15 élèves par groupe sur
            sept niveaux, 105 élèves sont concernés, générant <strong>31&nbsp;500&nbsp;000&nbsp;FCFA</strong> de
            recettes brutes annuelles.
          </p>
        </div>

        <div className="space-y-3">
          <h4 className="font-semibold text-lg text-french-blue">Scénarios de coûts supplémentaires</h4>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Scénario</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Coût annuel</TableHead>
                <TableHead>Coût par élève (15 élèves/groupe)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Scénario 1</TableCell>
                <TableCell>1 recrutement + heures supplémentaires (HSA)</TableCell>
                <TableCell>26&nbsp;970&nbsp;752&nbsp;FCFA</TableCell>
                <TableCell>≈ 257&nbsp;000&nbsp;FCFA</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Scénario 2</TableCell>
                <TableCell>2 recrutements + réduction des HSA</TableCell>
                <TableCell>39&nbsp;731&nbsp;633&nbsp;FCFA</TableCell>
                <TableCell>≈ 379&nbsp;000&nbsp;FCFA</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Scénario 3</TableCell>
                <TableCell>2 recrutements + HSA très limitées</TableCell>
                <TableCell>36&nbsp;893&nbsp;653&nbsp;FCFA</TableCell>
                <TableCell>≈ 351&nbsp;000&nbsp;FCFA</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <div className="bg-green-50 p-4 rounded-lg space-y-2">
          <h4 className="font-semibold text-green-800">Lecture de l'équilibre financier</h4>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
            <li>Le supplément de 300&nbsp;000&nbsp;FCFA couvre quasiment le Scénario&nbsp;1 (excédent d'environ 43&nbsp;000&nbsp;FCFA par élève).</li>
            <li>Les Scénarios&nbsp;2 et 3 nécessitent un apport complémentaire (subventions, soutien de l'APE ou arbitrages budgétaires).</li>
            <li>Le calibrage à 15 élèves par groupe demeure la référence pour sécuriser la viabilité du modèle.</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default DeploiementPlanFinancier;
