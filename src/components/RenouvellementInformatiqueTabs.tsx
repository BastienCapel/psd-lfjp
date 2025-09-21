import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertTriangle, Check, CheckCircle, Clock } from 'lucide-react';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const RenouvellementInformatiqueTabs: React.FC = () => {
  return (
    <Tabs defaultValue="pc" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="pc">PC</TabsTrigger>
        <TabsTrigger value="videoprojecteurs">Vidéoprojecteurs</TabsTrigger>
      </TabsList>

      <TabsContent value="pc" className="mt-8">
        <Card className="mb-10">
          <CardHeader>
            <CardTitle className="text-2xl text-french-blue">Objectif</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg">
              Assurer le renouvellement progressif du parc informatique obsolescent du Lycée Français Jacques Prévert,
              sur la base d'une stratégie triennale priorisant les besoins par degré d'urgence.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-10">
          <CardHeader>
            <CardTitle className="text-2xl text-french-blue">Contexte</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Le diagnostic réalisé en 2025 met en évidence l'état vieillissant ou défectueux d'une partie importante des ordinateurs fixes utilisés dans les salles disciplinaires, les espaces communs et les classes du primaire.
              Certains postes présentent une lenteur excessive, une incompatibilité avec les logiciels récents, voire une inutilisabilité.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-10">
          <CardHeader>
            <CardTitle className="text-2xl text-french-blue">Critères de priorité</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start">
                <AlertTriangle size={24} className="text-red-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-red-700">Urgence 3</h3>
                  <p>Processeurs très anciens, ordinateurs inutilisables ou trop obsolètes.</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock size={24} className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-orange-700">Urgence 2</h3>
                  <p>Fonctionnements dégradés (lenteurs, incompatibilités, blocages réguliers).</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle size={24} className="text-green-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-green-700">Urgence 1</h3>
                  <p>Matériel fonctionnel mais à surveiller.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Périmètre</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg">
                Le recensement cible <strong className="text-french-blue">32 postes</strong> à renouveler prioritairement.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Coût de référence</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p><strong>Offre Burotic</strong> (22 mai 2025)</p>
                <p>Devis pour 30 postes complets :</p>
                <ul className="ml-4 space-y-1 text-sm">
                  <li>• Unité centrale</li>
                  <li>• Écran 24"</li>
                  <li>• Clavier, souris</li>
                  <li>• Onduleur</li>
                  <li>• Windows 11 Pro installé</li>
                </ul>
                <p className="text-lg font-semibold text-french-blue">
                  14 834 070 FCFA
                </p>
                <p className="text-sm">
                  Soit un coût unitaire moyen estimé à <strong>494 469 FCFA</strong>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-10">
          <CardHeader>
            <CardTitle>Déploiement prévisionnel</CardTitle>
            <CardDescription>Planification sur 3 ans par ordre de priorité</CardDescription>
          </CardHeader>
          <CardContent className="overflow-x-auto">
            <Table>
              <TableCaption>Répartition du renouvellement par année et par urgence</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Année</TableHead>
                  <TableHead>Secteur/Classe</TableHead>
                  <TableHead>Nombre de postes</TableHead>
                  <TableHead>Urgence</TableHead>
                  <TableHead>Montant estimé (FCFA)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="bg-red-50">
                  <TableCell rowSpan={3} className="font-medium align-top">2026</TableCell>
                  <TableCell>Technologie</TableCell>
                  <TableCell>10</TableCell>
                  <TableCell>
                    <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">Urgence 3</span>
                  </TableCell>
                  <TableCell rowSpan={3} className="font-medium align-top">5 933 628</TableCell>
                </TableRow>
                <TableRow className="bg-red-50">
                  <TableCell>CM2A</TableCell>
                  <TableCell>2</TableCell>
                  <TableCell>
                    <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs">Urgence 2</span>
                  </TableCell>
                </TableRow>
                <TableRow className="bg-red-50">
                  <TableCell className="font-semibold">Total année</TableCell>
                  <TableCell className="font-semibold">12</TableCell>
                  <TableCell></TableCell>
                </TableRow>

                <TableRow className="bg-orange-50">
                  <TableCell rowSpan={4} className="font-medium align-top">2027</TableCell>
                  <TableCell>CM1A</TableCell>
                  <TableCell>2</TableCell>
                  <TableCell>
                    <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs">Urgence 2</span>
                  </TableCell>
                  <TableCell rowSpan={4} className="font-medium align-top">5 933 628</TableCell>
                </TableRow>
                <TableRow className="bg-orange-50">
                  <TableCell>CM1B</TableCell>
                  <TableCell>2</TableCell>
                  <TableCell>
                    <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs">Urgence 2</span>
                  </TableCell>
                </TableRow>
                <TableRow className="bg-orange-50">
                  <TableCell>CDI</TableCell>
                  <TableCell>8</TableCell>
                  <TableCell>
                    <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs">Urgence 2</span>
                  </TableCell>
                </TableRow>
                <TableRow className="bg-orange-50">
                  <TableCell className="font-semibold">Total année</TableCell>
                  <TableCell className="font-semibold">12</TableCell>
                  <TableCell></TableCell>
                </TableRow>

                <TableRow className="bg-yellow-50">
                  <TableCell rowSpan={2} className="font-medium align-top">2028</TableCell>
                  <TableCell>Physique/Chimie</TableCell>
                  <TableCell>8</TableCell>
                  <TableCell>
                    <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs">Urgence 2</span>
                  </TableCell>
                  <TableCell rowSpan={2} className="font-medium align-top">3 955 752</TableCell>
                </TableRow>
                <TableRow className="bg-yellow-50">
                  <TableCell className="font-semibold">Total année</TableCell>
                  <TableCell className="font-semibold">8</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card className="mb-10">
          <CardHeader>
            <CardTitle className="text-2xl text-french-blue">Synthèse</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-french-blue mb-2">32</div>
                <p className="text-sm text-gray-600">Postes à renouveler</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-french-blue mb-2">15 823 008</div>
                <p className="text-sm text-gray-600">FCFA - Coût total estimé</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-french-blue mb-2">3</div>
                <p className="text-sm text-gray-600">Années (2026 à 2028)</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-10">
          <CardHeader>
            <CardTitle className="text-2xl text-french-blue">Remarques</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Check size={20} className="text-green-600 mr-3 mt-1 flex-shrink-0" />
                <span>L'offre Burotic inclut la livraison, l'installation, et les licences Windows 11 officielles.</span>
              </li>
              <li className="flex items-start">
                <Check size={20} className="text-green-600 mr-3 mt-1 flex-shrink-0" />
                <span>La durée d'amortissement comptable retenue est de 3 ans, compatible avec le cycle de renouvellement.</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <div className="bg-soft-purple p-6 rounded-lg mb-8">
          <h3 className="text-xl font-medium text-french-blue mb-3">Recommandations</h3>
          <p className="mb-2">
            Ce plan de renouvellement échelonné permet d'optimiser l'allocation budgétaire tout en priorisant les besoins les plus urgents.
          </p>
          <p className="mb-0">
            La stratégie triennale garantit une modernisation progressive du parc informatique et améliore significativement les conditions d'apprentissage numérique.
          </p>
        </div>
      </TabsContent>

      <TabsContent value="videoprojecteurs" className="mt-8">
        <Card className="mb-10">
          <CardHeader>
            <CardTitle className="text-2xl text-french-blue">Contexte</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p>
                Les vidéoprojecteurs actuellement en service au Lycée Français Jacques Prévert présentent une durée de vie moyenne de 6 à 8 ans selon l'usage. Cette longévité est principalement déterminée par :
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>La durée de vie des lampes (environ 6 000 h en mode normal et jusqu'à 12 000 h en mode éco),</li>
                <li>L'usure des panneaux LCD et des composants électroniques,</li>
                <li>Les conditions climatiques et atmosphériques du Sénégal, marquées par une chaleur élevée, une humidité fréquente et des poussières, qui réduisent la performance et la durée de vie effective des équipements.</li>
              </ul>
              <p>
                Dans un contexte d'utilisation scolaire intensive (en moyenne 1 000 heures de projection par an), un cycle de remplacement régulier est nécessaire afin de garantir la qualité des projections pédagogiques et la continuité du service.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-10">
          <CardHeader>
            <CardTitle className="text-2xl text-french-blue">Plan de remplacement sur six ans</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p>Le plan proposé répartit le renouvellement de l'ensemble du parc de vidéoprojecteurs sur 6 ans. Il repose sur :</p>
              <ul className="list-disc ml-6 space-y-2">
                <li><strong>32 vidéoprojecteurs Epson EB-W51</strong> (WXGA, 4 000 lumens) pour équiper les classes,</li>
                <li><strong>2 vidéoprojecteurs Epson EB-FH06</strong> (Full HD, 3 500 lumens) pour les besoins spécifiques : bureau du proviseur (année 1) et salle polyvalente (année 6).</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-10">
          <CardHeader>
            <CardTitle className="text-2xl text-french-blue">Répartition annuelle (2026-2031)</CardTitle>
          </CardHeader>
          <CardContent className="overflow-x-auto">
            <Table>
              <TableCaption>Plan de remplacement des vidéoprojecteurs sur 6 ans</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Année</TableHead>
                  <TableHead>Épson EB-W51</TableHead>
                  <TableHead>Épson EB-FH06</TableHead>
                  <TableHead>Lieu spécifique</TableHead>
                  <TableHead>Montant (FCFA)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">2026 (Année 1)</TableCell>
                  <TableCell>4</TableCell>
                  <TableCell>1</TableCell>
                  <TableCell>Bureau du proviseur</TableCell>
                  <TableCell className="font-medium">2 230 000</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">2027 (Année 2)</TableCell>
                  <TableCell>6</TableCell>
                  <TableCell>0</TableCell>
                  <TableCell>-</TableCell>
                  <TableCell className="font-medium">2 520 000</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">2028 (Année 3)</TableCell>
                  <TableCell>6</TableCell>
                  <TableCell>0</TableCell>
                  <TableCell>-</TableCell>
                  <TableCell className="font-medium">2 520 000</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">2029 (Année 4)</TableCell>
                  <TableCell>6</TableCell>
                  <TableCell>0</TableCell>
                  <TableCell>-</TableCell>
                  <TableCell className="font-medium">2 520 000</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">2030 (Année 5)</TableCell>
                  <TableCell>6</TableCell>
                  <TableCell>0</TableCell>
                  <TableCell>-</TableCell>
                  <TableCell className="font-medium">2 520 000</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">2031 (Année 6)</TableCell>
                  <TableCell>4</TableCell>
                  <TableCell>1</TableCell>
                  <TableCell>Salle polyvalente</TableCell>
                  <TableCell className="font-medium">2 230 000</TableCell>
                </TableRow>
                <TableRow className="bg-gray-100 font-bold">
                  <TableCell>TOTAL</TableCell>
                  <TableCell>32</TableCell>
                  <TableCell>2</TableCell>
                  <TableCell>-</TableCell>
                  <TableCell>14 540 000</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card className="mb-10">
          <CardHeader>
            <CardTitle className="text-2xl text-french-blue">Gestion des anciens vidéoprojecteurs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold mb-2 text-french-blue">Réserve en cas de panne</h4>
                <p className="text-sm">Certains vidéoprojecteurs en état de marche seront conservés comme solutions de secours temporaires en cas de défaillance d'un appareil en service.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-french-blue">Flotte mobile</h4>
                <p className="text-sm">Une partie pourra être réaffectée en vidéoprojecteurs mobiles pour des besoins ponctuels (conférences, événements, projections hors salle de classe).</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-french-blue">Don ou recyclage</h4>
                <p className="text-sm">Les équipements devenus obsolètes ou trop usés pourront être donnés à des structures partenaires ou recyclés dans le respect des normes environnementales.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-10">
          <CardHeader>
            <CardTitle className="text-2xl text-french-blue">Synthèse budgétaire</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-french-blue mb-2">14 540 000</div>
                <p className="text-sm text-gray-600">FCFA - Montant total sur 6 ans</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-french-blue mb-2">≈ 2 423 000</div>
                <p className="text-sm text-gray-600">FCFA - Montant moyen annuel</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-french-blue mb-2">≈ 0,2 %</div>
                <p className="text-sm text-gray-600">des recettes annuelles</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-10">
          <CardHeader>
            <CardTitle className="text-2xl text-french-blue">Impact relatif sur les recettes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <p>Les recettes prévisionnelles du LFJP s'élèvent à <strong>1 273 701 956 FCFA</strong>.</p>
              <p>Si le plan était exécuté en une seule année, il représenterait environ <strong>1,1 % des recettes annuelles</strong>.</p>
              <p>Avec l'exécution étalée sur six ans, l'effort annuel moyen est de <strong>≈ 0,2 % des recettes annuelles</strong>.</p>
              <p>Écart maximum par rapport à la moyenne : <strong>≈ 193 000 FCFA</strong>, garantissant une bonne régularité budgétaire.</p>
            </div>
          </CardContent>
        </Card>

        <div className="bg-soft-purple p-6 rounded-lg mb-8">
          <h3 className="text-xl font-medium text-french-blue mb-3">Conclusion</h3>
          <p className="mb-4">Ce plan de renouvellement sur six ans permet :</p>
          <ul className="list-disc ml-6 space-y-2 mb-4">
            <li>De maintenir un parc homogène et performant,</li>
            <li>De lisser les dépenses d'investissement sur la durée,</li>
            <li>De répondre aux contraintes climatiques locales en anticipant l'usure accélérée du matériel,</li>
            <li>D'assurer la continuité des apprentissages dans des conditions de projection optimales.</li>
          </ul>
          <p className="mb-2">
            À l'issue de ce cycle, il conviendra probablement de relancer un plan similaire afin de remplacer progressivement les vidéoprojecteurs installés lors de la première année. Cela permettra de maintenir une logique de roulement permanent, garantissant la pérennité et la performance du parc matériel.
          </p>
          <p>
            Ce dispositif constitue un cadre de gestion pérenne et prévisible, adapté aux besoins pédagogiques et à l'environnement du lycée.
          </p>
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default RenouvellementInformatiqueTabs;
