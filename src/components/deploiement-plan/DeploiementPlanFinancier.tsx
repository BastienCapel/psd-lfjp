
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const DeploiementPlanFinancier = () => {
  return (
    <Card className="border-french-blue/10 shadow-md">
      <CardHeader>
        <CardTitle className="text-2xl text-french-blue">5. Analyse des impacts financiers</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h4 className="font-semibold text-lg mb-3">Scénarios de revenus additionnels (en k€)</h4>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Année</TableHead>
                <TableHead>Scénario conservateur</TableHead>
                <TableHead>Scénario médian</TableHead>
                <TableHead>Scénario optimiste</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>2026</TableCell>
                <TableCell>0 k€</TableCell>
                <TableCell>0 k€</TableCell>
                <TableCell>0 k€</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2027-2028</TableCell>
                <TableCell>45 k€</TableCell>
                <TableCell>55 k€</TableCell>
                <TableCell>65 k€</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2028-2029</TableCell>
                <TableCell>95 k€</TableCell>
                <TableCell>115 k€</TableCell>
                <TableCell>135 k€</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2029-2030</TableCell>
                <TableCell>145 k€</TableCell>
                <TableCell>175 k€</TableCell>
                <TableCell>205 k€</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2030-2031</TableCell>
                <TableCell>195 k€</TableCell>
                <TableCell>235 k€</TableCell>
                <TableCell>275 k€</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2031-2032</TableCell>
                <TableCell>245 k€</TableCell>
                <TableCell>295 k€</TableCell>
                <TableCell>345 k€</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2032-2033</TableCell>
                <TableCell>295 k€</TableCell>
                <TableCell>355 k€</TableCell>
                <TableCell>415 k€</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2033-2034</TableCell>
                <TableCell>345 k€</TableCell>
                <TableCell>415 k€</TableCell>
                <TableCell>485 k€</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <div>
          <h4 className="font-semibold text-lg mb-3">Bilan financier prévisionnel (scénario médian)</h4>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Année</TableHead>
                <TableHead>Revenus additionnels</TableHead>
                <TableHead>Coûts supplémentaires</TableHead>
                <TableHead>Résultat net</TableHead>
                <TableHead>Résultat cumulé</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>2026</TableCell>
                <TableCell>0 k€</TableCell>
                <TableCell>5 k€</TableCell>
                <TableCell className="text-red-600">-5 k€</TableCell>
                <TableCell className="text-red-600">-5 k€</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2027-2028</TableCell>
                <TableCell>55 k€</TableCell>
                <TableCell>75 k€</TableCell>
                <TableCell className="text-red-600">-20 k€</TableCell>
                <TableCell className="text-red-600">-25 k€</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2028-2029</TableCell>
                <TableCell>115 k€</TableCell>
                <TableCell>95 k€</TableCell>
                <TableCell className="text-green-600">+20 k€</TableCell>
                <TableCell className="text-red-600">-5 k€</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2029-2030</TableCell>
                <TableCell>175 k€</TableCell>
                <TableCell>115 k€</TableCell>
                <TableCell className="text-green-600">+60 k€</TableCell>
                <TableCell className="text-green-600">+55 k€</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2030-2031</TableCell>
                <TableCell>235 k€</TableCell>
                <TableCell>135 k€</TableCell>
                <TableCell className="text-green-600">+100 k€</TableCell>
                <TableCell className="text-green-600">+155 k€</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2031-2032</TableCell>
                <TableCell>295 k€</TableCell>
                <TableCell>175 k€</TableCell>
                <TableCell className="text-green-600">+120 k€</TableCell>
                <TableCell className="text-green-600">+275 k€</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2032-2033</TableCell>
                <TableCell>355 k€</TableCell>
                <TableCell>195 k€</TableCell>
                <TableCell className="text-green-600">+160 k€</TableCell>
                <TableCell className="text-green-600">+435 k€</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2033-2034</TableCell>
                <TableCell>415 k€</TableCell>
                <TableCell>215 k€</TableCell>
                <TableCell className="text-green-600">+200 k€</TableCell>
                <TableCell className="text-green-600">+635 k€</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};

export default DeploiementPlanFinancier;
