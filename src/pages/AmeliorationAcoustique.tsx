
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Home } from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { ChartContainer, ChartTooltipContent } from '@/components/ui/chart';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const AmeliorationAcoustique = () => {
  const costData = [
    { name: 'Coût total', value: 30000000 },
    { name: 'Coût par salle', value: 1200000 }
  ];

  const COLORS = ['#6E59A5', '#9b87f5'];
  
  const impactData = [
    { name: 'Amortissement 1 an', value: 4887 },
    { name: 'Amortissement 5 ans', value: 977 }
  ];
  
  const budgetData = [
    { name: 'Impact financier', value: 2.44, fill: '#6E59A5' },
    { name: 'Autres dépenses', value: 97.56, fill: '#E5DEFF' }
  ];

  return (
    <div className="min-h-screen flex flex-col font-raleway">
      <Navbar showLogo={true} />
      
      <div className="bg-gradient-to-r from-french-blue to-blue-700 text-white py-16 md:py-24">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold mb-6 opacity-0 animate-fade-in">
            AMÉLIORATION DE L'ACOUSTIQUE
          </h1>
          <p className="text-lg md:text-xl font-raleway font-light max-w-3xl opacity-0 animate-fade-in-delay-1">
            Estimation budgétaire et impact financier
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Estimation budgétaire</CardTitle>
              <CardDescription>Coût total et ventilation par salle</CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <AspectRatio ratio={16/9} className="bg-muted/20">
                <ChartContainer 
                  config={{ 
                    cost: { theme: { light: '#6E59A5', dark: '#9b87f5' } }
                  }}
                  className="p-4"
                >
                  <BarChart data={costData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="value" name="FCFA" fill="#6E59A5" />
                  </BarChart>
                </ChartContainer>
              </AspectRatio>
              <div className="mt-4 text-sm">
                <p>Nombre de salles à rénover: <strong>25</strong></p>
                <p>Coût total: <strong>30 000 000 FCFA</strong></p>
                <p>Coût par salle: <strong>1 200 000 FCFA</strong></p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Impact sur le budget</CardTitle>
              <CardDescription>Pourcentage des recettes d'écolage</CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <AspectRatio ratio={16/9} className="bg-muted/20">
                <ChartContainer 
                  config={{ 
                    impact: { theme: { light: '#6E59A5', dark: '#8A7AC2' } }
                  }}
                  className="p-4"
                >
                  <PieChart>
                    <Pie
                      data={budgetData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({name, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    >
                      {budgetData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ChartContainer>
              </AspectRatio>
              <div className="mt-4 text-sm">
                <p>Effectifs prévisionnels 2025-2026: <strong>614 élèves</strong></p>
                <p>Revenus d'écolages estimés: <strong>1 231 445 000 FCFA</strong></p>
                <p>Impact financier: <strong>2,44 % des recettes</strong></p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Comparaison des options d'amortissement</CardTitle>
            <CardDescription>Impact financier mensuel par élève</CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            <AspectRatio ratio={21/9} className="bg-muted/20">
              <ChartContainer 
                config={{ 
                  amortissement: { theme: { light: '#6E59A5', dark: '#A499D1' } }
                }}
                className="p-4"
              >
                <BarChart data={impactData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip content={<ChartTooltipContent />} />
                  <Legend />
                  <Bar dataKey="value" name="FCFA par élève/mois" fill="#9b87f5" />
                </BarChart>
              </ChartContainer>
            </AspectRatio>
          </CardContent>
        </Card>
        
        <div className="prose lg:prose-xl max-w-none">
          <h2 className="font-playfair text-2xl text-french-blue">Analyse et plan d'étalement</h2>
          
          <p>Le coût total estimé pour l'amélioration de l'acoustique de 25 salles pédagogiques s'élève à <strong>30 000 000 FCFA</strong>, soit <strong>1 200 000 FCFA par salle</strong>.</p>
          
          <p>Sur la base des effectifs prévisionnels pour l'année scolaire 2025-2026 (614 élèves) et des revenus d'écolages estimés à 1 231 445 000 FCFA (paiement sur 10 mois), ce montant représente environ <strong>2,44 % des recettes d'écolage annuelles</strong>.</p>
          
          <p>Si cet investissement devait être amorti sur une seule année scolaire, l'impact financier correspondrait à une augmentation mensuelle moyenne de <strong>4 887 FCFA par élève</strong>.</p>
          
          <p>Cependant, il est possible de lisser cette dépense sur la durée du plan stratégique 2026-2030, soit sur 5 années scolaires. Dans ce cas, le coût annuel de l'investissement serait réduit à <strong>6 000 000 FCFA par an</strong>, ce qui représenterait une augmentation mensuelle moyenne de seulement <strong>977 FCFA par élève</strong>, rendant ainsi le projet plus soutenable pour les familles et compatible avec une stratégie d'amélioration progressive du cadre d'apprentissage.</p>
          
          <div className="bg-soft-purple p-6 rounded-lg mt-8">
            <h3 className="text-xl font-medium text-french-blue">Recommandation</h3>
            <p className="mb-0">Il est recommandé d'adopter un plan d'étalement sur 5 ans pour minimiser l'impact financier sur les familles tout en garantissant une amélioration constante du cadre d'apprentissage.</p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default AmeliorationAcoustique;
