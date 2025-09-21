import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home } from "lucide-react";
import { useNavigate } from 'react-router-dom';

const PlanMaintenanceStrategique = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col font-raleway">
      <Navbar showLogo={true} />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-french-blue to-blue-700 text-white py-24 md:py-32">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-6 opacity-0 animate-fade-in">
            PLAN DE MAINTENANCE STRATÉGIQUE
          </h1>
          <p className="text-xl md:text-2xl font-raleway font-light max-w-3xl opacity-0 animate-fade-in-delay-1">
            Préservation et amélioration du patrimoine immobilier et technologique
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-4 flex gap-2">
        <Button variant="outline" onClick={() => navigate(-1)} className="flex items-center gap-2">
          <ArrowLeft size={16} />
          Retour
        </Button>
        <Button variant="outline" onClick={() => navigate('/')} className="flex items-center gap-2">
          <Home size={16} />
          Accueil
        </Button>
      </div>

      {/* Content Section */}
      <div className="flex-1 bg-white py-16">
        <div className="container mx-auto px-6">
          
          {/* Introduction */}
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl font-playfair font-bold text-french-blue mb-8">
              Qu'est-ce que le Plan de Maintenance Stratégique ?
            </h2>
            <div className="prose prose-lg text-gray-700 space-y-6">
              <p>
                Le Plan de Maintenance Stratégique du Lycée Français Jacques Prévert constitue un outil de pilotage 
                essentiel pour préserver et améliorer notre patrimoine immobilier et technologique sur la période 2025-2030.
              </p>
              <p>
                Ce plan s'articule autour de trois axes majeurs qui garantissent un environnement d'apprentissage 
                optimal et pérenne pour notre communauté éducative :
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>La préservation esthétique et structurelle</strong> des bâtiments</li>
                <li><strong>La modernisation technologique</strong> des équipements pédagogiques</li>
                <li><strong>L'amélioration du confort acoustique</strong> des espaces d'apprentissage</li>
              </ul>
              <p>
                Chaque volet fait l'objet d'une planification rigoureuse, d'un budget dédié et d'indicateurs 
                de suivi permettant d'assurer une mise en œuvre efficace et mesurable.
              </p>
            </div>
          </div>

          {/* Tabs Section */}
          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="peintures" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="peintures" className="text-sm md:text-base">
                  Peintures & Ravalement
                </TabsTrigger>
                <TabsTrigger value="informatique" className="text-sm md:text-base">
                  Renouvellement Informatique
                </TabsTrigger>
                <TabsTrigger value="acoustique" className="text-sm md:text-base">
                  Plafonds Acoustiques
                </TabsTrigger>
              </TabsList>

              <TabsContent value="peintures">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl font-playfair text-french-blue">
                      Plan Pluriannuel de Peinture et Ravalement (2025-2030)
                    </CardTitle>
                    <CardDescription className="text-lg">
                      Préservation et embellissement du patrimoine bâti
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-french-blue mb-3">Introduction</h3>
                      <p className="text-gray-700 mb-4">
                        Afin de garantir un cadre de travail et d'apprentissage soigné, sécurisant, motivant et propice au bien-être de tous les usagers, un plan pluriannuel de rénovation a été établi pour la période 2025-2030. Ce plan vise à maintenir et valoriser le patrimoine immobilier de l'établissement. Il prend spécifiquement en compte la réalité climatique du Sénégal (air salin, chaleur, humidité) et les usages intensifs des locaux scolaires.
                      </p>
                      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                        <h4 className="font-semibold text-yellow-800 mb-2">PEINTURE MURS UNIQUEMENT (AVEC POSE DE FAUX-PLAFONDS ACOUSTIQUES)</h4>
                        <p className="text-yellow-700">
                          Ce scénario part du principe que les plafonds des salles, bureaux et de la salle polyvalente seront équipés de faux-plafonds acoustiques. La pose de ces faux-plafonds constitue un lot de travaux et un budget distincts, non inclus dans la présente note. Par conséquent, ce scénario ne budgétise que la peinture des murs.
                        </p>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-french-blue mb-3">Périmètre Concerné et Détail des Surfaces</h3>
                      
                      <div className="mb-4">
                        <h4 className="font-medium mb-2">Surfaces Intérieures à Peindre (Murs UNIQUEMENT)</h4>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                          <li
