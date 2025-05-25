
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const DeploiementPlanRH = () => {
  return (
    <Card className="border-french-blue/10 shadow-md">
      <CardHeader>
        <CardTitle className="text-2xl text-french-blue">4. Analyse des impacts sur les ressources humaines</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Année</TableHead>
              <TableHead>Enseignants à recruter</TableHead>
              <TableHead>Profils recherchés</TableHead>
              <TableHead>Formation nécessaire</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>2026</TableCell>
              <TableCell>0</TableCell>
              <TableCell>Ouverture SI sur tout le primaire</TableCell>
              <TableCell>Demande DGESCO</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>2027-2028</TableCell>
              <TableCell>0</TableCell>
              <TableCell>Moyens constants</TableCell>
              <TableCell>Formation SI/BFI</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>2028-2029</TableCell>
              <TableCell>0</TableCell>
              <TableCell>Moyens constants</TableCell>
              <TableCell>Accompagnement pédagogique</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>2029-2030</TableCell>
              <TableCell>0</TableCell>
              <TableCell>Moyens constants</TableCell>
              <TableCell>Formation continue</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>2030-2031</TableCell>
              <TableCell>1 ETP</TableCell>
              <TableCell>Anglais natif + Histoire-Géo bilingue</TableCell>
              <TableCell>Formation SI/BFI</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>2031-2032</TableCell>
              <TableCell>0</TableCell>
              <TableCell>Consolidation équipe</TableCell>
              <TableCell>Certification BFI</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>2032-2033</TableCell>
              <TableCell>0</TableCell>
              <TableCell>Équipe stabilisée</TableCell>
              <TableCell>Formation continue</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>2033-2034</TableCell>
              <TableCell>1 ETP</TableCell>
              <TableCell>Enseignant lycée spécialisé</TableCell>
              <TableCell>Certification BFI</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default DeploiementPlanRH;
