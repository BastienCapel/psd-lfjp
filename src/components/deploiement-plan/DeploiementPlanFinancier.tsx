
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const DeploiementPlanFinancier = () => {
  return (
    <Card className="border-french-blue/10 shadow-md">
      <CardHeader>
        <CardTitle className="text-2xl text-french-blue">5. Analyse des impacts financiers : distinction primaire / secondaire</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <p className="text-gray-700">
          L'analyse financière doit impérativement distinguer l'investissement réalisé au primaire 
          de l'équilibre recherché pour le dispositif optionnel au secondaire.
        </p>

        <div>
          <h4 className="font-semibold text-lg mb-3">Investissement pédagogique au primaire</h4>
          <div className="bg-blue-50 p-4 rounded-lg mb-3">
            <p className="text-blue-700 mb-3">
              Le renforcement de l'enseignement de l'anglais et l'ouverture de la SI pour tous les 
              élèves du primaire représentent un investissement pédagogique stratégique de 
              l'établissement.
            </p>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-medium text-blue-800">Coût :</p>
                <p className="text-blue-700">Le recrutement de l'enseignante supplémentaire pour le 
                primaire représente un coût annuel récurrent de <strong>18 000 000 CFA</strong> à partir de 2025-2026.</p>
              </div>
              <div>
                <p className="font-medium text-blue-800">Recettes associées :</p>
                <p className="text-blue-700">Aucune. La SI au primaire est intégrée à l'offre standard sans 
                surcoût pour les familles.</p>
              </div>
            </div>
          </div>
          <p className="text-gray-700">
            Ce coût de 18M CFA doit être considéré comme un investissement dans la qualité de 
            l'offre éducative du primaire, visant à renforcer l'attractivité de l'établissement et à 
            préparer au mieux les élèves à la poursuite de leurs études, notamment en SI au 
            secondaire.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-lg mb-3">Équilibre financier de la SI optionnelle au secondaire</h4>
          <p className="text-gray-700 mb-3">
            Le dispositif SI au secondaire, étant optionnel et payant (300 000 CFA/an), doit viser un 
            équilibre financier propre, en comparant ses recettes aux coûts RH supplémentaires qu'il 
            engendre au secondaire.
          </p>

          <div className="bg-amber-50 p-4 rounded-lg mb-4">
            <h5 className="font-semibold text-amber-800 mb-2">Coûts RH spécifiques au secondaire :</h5>
            <ul className="text-sm text-amber-700 space-y-1 list-disc list-inside">
              <li>1er recrutement secondaire (2030-2031) : +18 000 000 CFA/an</li>
              <li>2ème recrutement secondaire (2033-2034) : +18 000 000 CFA/an</li>
              <li><strong>Coût total RH secondaire en régime de croisière : 36 000 000 CFA/an</strong></li>
            </ul>
          </div>

          <div className="mb-4">
            <h5 className="font-semibold text-lg mb-3">Revenus générés par la SI secondaire (selon scénarios d'effectifs) :</h5>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Année scolaire</TableHead>
                  <TableHead>Revenus (10 élèves)</TableHead>
                  <TableHead>Revenus (15 élèves)</TableHead>
                  <TableHead>Revenus (20 élèves)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>2027-2028</TableCell>
                  <TableCell>3 000 000 CFA</TableCell>
                  <TableCell>4 500 000 CFA</TableCell>
                  <TableCell>6 000 000 CFA</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2028-2029</TableCell>
                  <TableCell>6 000 000 CFA</TableCell>
                  <TableCell>9 000 000 CFA</TableCell>
                  <TableCell>12 000 000 CFA</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2029-2030</TableCell>
                  <TableCell>9 000 000 CFA</TableCell>
                  <TableCell>13 500 000 CFA</TableCell>
                  <TableCell>18 000 000 CFA</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2030-2031</TableCell>
                  <TableCell>12 000 000 CFA</TableCell>
                  <TableCell>18 000 000 CFA</TableCell>
                  <TableCell>24 000 000 CFA</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2031-2032</TableCell>
                  <TableCell>15 000 000 CFA</TableCell>
                  <TableCell>22 500 000 CFA</TableCell>
                  <TableCell>30 000 000 CFA</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2032-2033</TableCell>
                  <TableCell>18 000 000 CFA</TableCell>
                  <TableCell>27 000 000 CFA</TableCell>
                  <TableCell>36 000 000 CFA</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2033-2034</TableCell>
                  <TableCell>21 000 000 CFA</TableCell>
                  <TableCell>31 500 000 CFA</TableCell>
                  <TableCell>42 000 000 CFA</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <div className="mb-4">
            <h5 className="font-semibold text-lg mb-3">Bilan financier prévisionnel de la SI secondaire (Revenus secondaire - Coûts RH secondaire) :</h5>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Année scolaire</TableHead>
                  <TableHead>Coûts RH secondaire</TableHead>
                  <TableHead>Bilan (10 élèves)</TableHead>
                  <TableHead>Bilan (15 élèves)</TableHead>
                  <TableHead>Bilan (20 élèves)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>2027-2030</TableCell>
                  <TableCell>0 CFA</TableCell>
                  <TableCell className="text-green-600">+3M à +9M CFA</TableCell>
                  <TableCell className="text-green-600">+4.5M à +13.5M CFA</TableCell>
                  <TableCell className="text-green-600">+6M à +18M CFA</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2030-2033</TableCell>
                  <TableCell>18 000 000 CFA</TableCell>
                  <TableCell className="text-red-600">-6M à 0 CFA</TableCell>
                  <TableCell className="text-green-600">0 à +9M CFA</TableCell>
                  <TableCell className="text-green-600">+6M à +18M CFA</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2033-2034</TableCell>
                  <TableCell>36 000 000 CFA</TableCell>
                  <TableCell className="text-red-600">-15 000 000 CFA</TableCell>
                  <TableCell className="text-red-600">-4 500 000 CFA</TableCell>
                  <TableCell className="text-green-600">+6 000 000 CFA</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <div className="space-y-3">
            <p className="text-gray-700 mb-3">
              <strong>Analyse de l'équilibre secondaire :</strong>
            </p>
            <ul className="text-gray-700 space-y-2 list-disc list-inside">
              <li>Le dispositif SI secondaire est excédentaire dans les premières années, quel que soit le scénario.</li>
              <li>Après le premier recrutement secondaire (2030), l'équilibre dépend des effectifs : déficitaire à 10 élèves, équilibré ou excédentaire à 15 et 20 élèves.</li>
              <li>Après le second recrutement secondaire (2033), l'équilibre n'est atteint qu'avec 20 élèves par niveau (scénario haut), générant un excédent de 6M CFA. Les scénarios à 10 et 15 élèves sont déficitaires.</li>
            </ul>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-lg mb-3">Conclusion financière</h4>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h5 className="font-semibold text-blue-800 mb-2">Investissement primaire</h5>
              <p className="text-sm text-blue-700">
                L'établissement réalise un investissement pédagogique annuel de <strong>18M CFA</strong> pour 
                la SI au primaire.
              </p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h5 className="font-semibold text-green-800 mb-2">Viabilité secondaire</h5>
              <p className="text-sm text-green-700">
                Le dispositif SI optionnel au secondaire peut atteindre l'équilibre financier propre 
                (voire générer un excédent) à condition d'atteindre et de maintenir des effectifs 
                d'environ <strong>20 élèves par niveau</strong>.
              </p>
            </div>
          </div>
          <p className="text-gray-700 mt-3">
            Il est crucial de viser cet objectif d'effectifs au secondaire pour assurer la viabilité 
            du volet optionnel et payant.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default DeploiementPlanFinancier;
