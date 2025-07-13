import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Home, Check, Clock, AlertTriangle, CheckCircle } from 'lucide-react';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const RenouvellementMaterielInformatique = () => {
  return (
    <div className="min-h-screen flex flex-col font-raleway">
      <Navbar showLogo={true} />
      
      <div className="bg-gradient-to-r from-french-blue to-blue-700 text-white py-16 md:py-24">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold mb-6 opacity-0 animate-fade-in">
            FICHE D'INVESTISSEMENT PLURIANNUELLE
          </h1>
          <p className="text-lg md:text-xl font-raleway font-light max-w-3xl opacity-0 animate-fade-in-delay-1">
            Renouvellement des ordinateurs fixes (2026-2028)
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-6 py-12">
        <div className="flex space-x-4 mb-8">
          <Button variant="outline" asChild>
            <Link to="/plan-strategique">
              <ArrowLeft className="mr-2" />
              Retour au plan stratégique
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/">
              <Home className="mr-2" />
              Accueil
            </Link>
          </Button>
        </div>
        
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
              Le diagnostic réalisé en 2025 met en évidence l'état vieillissant ou défectueux d'une partie importante 
              des ordinateurs fixes utilisés dans les salles disciplinaires, les espaces communs et les classes du primaire. 
              Certains postes présentent une lenteur excessive, une incompatibilité avec les logiciels récents, 
              voire une inutilisabilité.
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
            Ce plan de renouvellement échelonné permet d'optimiser l'allocation budgétaire tout en priorisant 
            les besoins les plus urgents.
          </p>
          <p className="mb-0">
            La stratégie triennale garantit une modernisation progressive du parc informatique 
            et améliore significativement les conditions d'apprentissage numérique.
          </p>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default RenouvellementMaterielInformatique;