
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const DeploiementPlanFinancier = () => {
  return (
    <Card className="border-french-blue/10 shadow-md">
      <CardHeader>
        <CardTitle className="text-2xl text-french-blue">5. Analyse des impacts financiers avec scénarios d'effectifs</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <p className="text-gray-700">
          L'ouverture de la Section Internationale Américaine aura également un impact 
          significatif sur les finances de l'établissement, avec à la fois des revenus 
          supplémentaires générés par les frais d'inscription spécifiques et des coûts additionnels 
          liés principalement aux recrutements d'enseignants.
        </p>

        <div>
          <h4 className="font-semibold text-lg mb-3">Revenus générés par la SI selon trois scénarios d'effectifs</h4>
          <p className="text-gray-700 mb-3">
            Les frais d'inscription en filière SI sont fixés à 300 000 CFA par élève et par an à partir de 
            la 6ème. Pour évaluer précisément l'impact financier du projet, nous avons élaboré trois 
            scénarios d'effectifs :
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="bg-red-50 p-3 rounded-lg text-center">
              <h5 className="font-semibold text-red-800">Scénario bas : 10 élèves par niveau</h5>
            </div>
            <div className="bg-yellow-50 p-3 rounded-lg text-center">
              <h5 className="font-semibold text-yellow-800">Scénario moyen : 15 élèves par niveau</h5>
            </div>
            <div className="bg-green-50 p-3 rounded-lg text-center">
              <h5 className="font-semibold text-green-800">Scénario haut : 20 élèves par niveau</h5>
            </div>
          </div>

          <p className="text-gray-700 mb-3">
            Le tableau suivant présente l'évolution des revenus générés selon ces trois scénarios :
          </p>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Année scolaire</TableHead>
                <TableHead>Niveaux SI</TableHead>
                <TableHead>Revenus (10 élèves)</TableHead>
                <TableHead>Revenus (15 élèves)</TableHead>
                <TableHead>Revenus (20 élèves)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>2027-2028</TableCell>
                <TableCell>6ème</TableCell>
                <TableCell>3 000 000 CFA</TableCell>
                <TableCell>4 500 000 CFA</TableCell>
                <TableCell>6 000 000 CFA</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2028-2029</TableCell>
                <TableCell>6ème-5ème</TableCell>
                <TableCell>6 000 000 CFA</TableCell>
                <TableCell>9 000 000 CFA</TableCell>
                <TableCell>12 000 000 CFA</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2029-2030</TableCell>
                <TableCell>6ème-4ème</TableCell>
                <TableCell>9 000 000 CFA</TableCell>
                <TableCell>13 500 000 CFA</TableCell>
                <TableCell>18 000 000 CFA</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2030-2031</TableCell>
                <TableCell>6ème-3ème</TableCell>
                <TableCell>12 000 000 CFA</TableCell>
                <TableCell>18 000 000 CFA</TableCell>
                <TableCell>24 000 000 CFA</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2031-2032</TableCell>
                <TableCell>6ème-2nde</TableCell>
                <TableCell>15 000 000 CFA</TableCell>
                <TableCell>22 500 000 CFA</TableCell>
                <TableCell>30 000 000 CFA</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2032-2033</TableCell>
                <TableCell>6ème-1ère</TableCell>
                <TableCell>18 000 000 CFA</TableCell>
                <TableCell>27 000 000 CFA</TableCell>
                <TableCell>36 000 000 CFA</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2033-2034</TableCell>
                <TableCell>6ème-Term</TableCell>
                <TableCell>21 000 000 CFA</TableCell>
                <TableCell>31 500 000 CFA</TableCell>
                <TableCell>42 000 000 CFA</TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <p className="text-gray-700 mt-3">
            Cette progression régulière des revenus permettra d'absorber progressivement les coûts 
            supplémentaires générés par la SI, notamment en termes de ressources humaines.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-lg mb-3">Coûts supplémentaires liés aux recrutements</h4>
          <p className="text-gray-700 mb-3">
            Avec un salaire moyen de 18 000 000 CFA annuels par enseignant d'anglais, les coûts 
            supplémentaires liés aux recrutements progressifs représenteront une charge 
            significative pour l'établissement.
          </p>
          
          <p className="text-gray-700 mb-3">
            Les deux premières années (2027-2029), aucun recrutement n'étant nécessaire, les coûts 
            supplémentaires seront nuls. À partir de la troisième année (2029-2030), des coûts 
            commenceront à apparaître, d'abord modérés (équivalent à 0,5 ETP, soit environ 9 000 
            000 CFA), puis plus conséquents avec les recrutements successifs.
          </p>
          
          <p className="text-gray-700 mb-3">
            En régime de croisière (2033-2034), avec l'équivalent de 2 ETP supplémentaires, les 
            coûts additionnels atteindront 36 000 000 CFA par an.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-lg mb-3">Bilan financier prévisionnel selon les trois scénarios</h4>
          <p className="text-gray-700 mb-3">
            La comparaison des revenus générés par les frais d'inscription à la SI et des coûts 
            supplémentaires liés aux recrutements révèle des situations contrastées selon le 
            scénario d'effectifs retenu :
          </p>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Année scolaire</TableHead>
                <TableHead>Bilan (10 élèves)</TableHead>
                <TableHead>Bilan (15 élèves)</TableHead>
                <TableHead>Bilan (20 élèves)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>2027-2028</TableCell>
                <TableCell className="text-green-600">+3 000 000 CFA</TableCell>
                <TableCell className="text-green-600">+4 500 000 CFA</TableCell>
                <TableCell className="text-green-600">+6 000 000 CFA</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2028-2029</TableCell>
                <TableCell className="text-green-600">+6 000 000 CFA</TableCell>
                <TableCell className="text-green-600">+9 000 000 CFA</TableCell>
                <TableCell className="text-green-600">+12 000 000 CFA</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2029-2030</TableCell>
                <TableCell>0 CFA</TableCell>
                <TableCell className="text-green-600">+4 500 000 CFA</TableCell>
                <TableCell className="text-green-600">+9 000 000 CFA</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2030-2031</TableCell>
                <TableCell className="text-red-600">-6 000 000 CFA</TableCell>
                <TableCell>0 CFA</TableCell>
                <TableCell className="text-green-600">+6 000 000 CFA</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2031-2032</TableCell>
                <TableCell className="text-red-600">-3 000 000 CFA</TableCell>
                <TableCell className="text-green-600">+4 500 000 CFA</TableCell>
                <TableCell className="text-green-600">+12 000 000 CFA</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2032-2033</TableCell>
                <TableCell className="text-red-600">-9 000 000 CFA</TableCell>
                <TableCell>0 CFA</TableCell>
                <TableCell className="text-green-600">+9 000 000 CFA</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2033-2034</TableCell>
                <TableCell className="text-red-600">-15 000 000 CFA</TableCell>
                <TableCell className="text-red-600">-4 500 000 CFA</TableCell>
                <TableCell className="text-green-600">+6 000 000 CFA</TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <div className="mt-4 space-y-3">
            <div className="bg-red-50 p-4 rounded-lg">
              <h5 className="font-semibold text-red-800 mb-2">1. Scénario bas (10 élèves par niveau)</h5>
              <p className="text-sm text-red-700">
                Ce scénario est excédentaire les deux premières années, à l'équilibre la troisième année, 
                puis devient déficitaire de manière croissante. À plein régime, le déficit atteint 15 000 000 CFA par an, 
                ce qui n'est pas soutenable à long terme sans ajustements.
              </p>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg">
              <h5 className="font-semibold text-yellow-800 mb-2">2. Scénario moyen (15 élèves par niveau)</h5>
              <p className="text-sm text-yellow-700">
                Ce scénario est excédentaire les premières années, oscille autour de l'équilibre en phase 
                intermédiaire, puis devient légèrement déficitaire en régime de croisière (-4 500 000 CFA). 
                Des ajustements mineurs seraient nécessaires pour assurer la pérennité.
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <h5 className="font-semibold text-green-800 mb-2">3. Scénario haut (20 élèves par niveau)</h5>
              <p className="text-sm text-green-700">
                Ce scénario est excédentaire tout au long du déploiement, avec un bilan positif variant de 
                6 000 000 à 12 000 000 CFA selon les années. Il assure la viabilité économique complète du dispositif 
                et permet même de dégager des marges pour des investissements qualitatifs.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-lg mb-3">Analyse de l'équilibre financier et implications</h4>
          <p className="text-gray-700 mb-3">
            L'analyse des trois scénarios d'effectifs révèle que le seuil de viabilité économique se 
            situe autour de 17-18 élèves par niveau. En dessous de ce seuil, des ajustements seraient 
            nécessaires pour assurer l'équilibre financier à terme.
          </p>
          
          <p className="text-gray-700 mb-3">
            Le scénario haut (20 élèves par niveau) apparaît comme particulièrement favorable, car 
            il permet non seulement d'assurer l'équilibre financier, mais aussi de dégager des 
            marges pour investir dans la qualité du dispositif. Ce scénario offre également une plus 
            grande souplesse dans la gestion des ressources humaines, avec la possibilité 
            d'anticiper certains recrutements pour assurer une meilleure stabilité pédagogique.
          </p>
          
          <p className="text-gray-700">
            Toutefois, ce scénario repose sur la capacité à attirer et fidéliser 20 élèves par niveau, ce 
            qui nécessitera une stratégie de communication efficace et une offre pédagogique 
            attractive. La qualité de l'enseignement et la valeur ajoutée perçue de la SI seront des 
            facteurs déterminants pour atteindre et maintenir ce niveau d'effectifs.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default DeploiementPlanFinancier;
