
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const DeploiementPlanAction = () => {
  return (
    <Card className="border-french-blue/10 shadow-md">
      <CardHeader>
        <CardTitle className="text-2xl text-french-blue">7. Plan d'action détaillé</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Action</TableHead>
              <TableHead>Responsable</TableHead>
              <TableHead>Échéance</TableHead>
              <TableHead>Indicateur</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Demande d'autorisation DGESCO</TableCell>
              <TableCell>Direction</TableCell>
              <TableCell>2026</TableCell>
              <TableCell>Dossier déposé</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Validation du projet par l'AEFE</TableCell>
              <TableCell>Direction</TableCell>
              <TableCell>Mars 2027</TableCell>
              <TableCell>Accord officiel</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Recrutement enseignants</TableCell>
              <TableCell>RH + Direction</TableCell>
              <TableCell>Juin 2027</TableCell>
              <TableCell>Postes pourvus</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Formation des équipes</TableCell>
              <TableCell>Direction pédagogique</TableCell>
              <TableCell>Août 2027</TableCell>
              <TableCell>Certification obtenue</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Aménagement des locaux</TableCell>
              <TableCell>Direction administrative</TableCell>
              <TableCell>Août 2027</TableCell>
              <TableCell>Locaux opérationnels</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Lancement communication</TableCell>
              <TableCell>Direction + Communication</TableCell>
              <TableCell>Janvier 2027</TableCell>
              <TableCell>Campagne déployée</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default DeploiementPlanAction;
