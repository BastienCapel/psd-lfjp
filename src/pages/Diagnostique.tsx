
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { AlertTriangle, ArrowUp, ArrowDown, ThumbsUp, ThumbsDown, BarChart4, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const Diagnostique = () => {
  const elcsData = {
    satisfaction: {
      title: "Satisfaction des Infrastructures",
      primary: [
        { name: "Lycée", value: 33, label: "Appréciation positive des bâtiments", average: 75, trend: "down" },
        { name: "Élémentaire", value: 84.8, label: "Appréciation positive des bâtiments", average: 75, trend: "up" },
      ],
      secondary: [
        { name: "Demande de climatisation (Collège)", value: 40, label: "des verbatim", trend: "up" },
        { name: "Demande de climatisation (Lycée)", value: 53, label: "des verbatim", trend: "up" },
        { name: "Demande de cantine", value: "Forte", label: "à tous les niveaux", trend: "up" },
      ]
    },
    relations: {
      title: "Relations Humaines",
      primary: [
        { name: "Relations élèves-enseignants", value: 81.7, label: "de satisfaction au lycée", average: 87.5, trend: "down" },
        { name: "Relations avec autres adultes", value: 97.4, label: "de satisfaction au lycée", average: 90, trend: "up" },
        { name: "Relations avec vie scolaire", value: 90.4, label: "de satisfaction au lycée", average: 85, trend: "up" },
      ],
      secondary: [
        { name: "Violence psychologique", value: "Sup", label: "à la moyenne nationale", trend: "up" },
        { name: "Harcèlement", value: "Fort", label: "besoin de prévention", trend: "up" },
      ]
    },
    travail: {
      title: "Charge de Travail",
      primary: [
        { name: "Intérêt des apprentissages", value: 66.1, label: "au lycée", average: 72, trend: "down" },
        { name: "Encouragement des enseignants", value: "Mitigé", label: "au lycée", trend: "down" },
      ],
      secondary: [
        { name: "Critique des emplois du temps", value: "Forte", label: "au lycée", trend: "up" },
      ]
    },
    securite: {
      title: "Sécurité et Violence",
      primary: [
        { name: "Absentéisme lié à la violence", value: 9.6, label: "des élèves", average: 15, trend: "down" },
        { name: "Multivictimation", value: "Sup", label: "à la moyenne nationale", trend: "up" },
      ],
      secondary: [
        { name: "Perception de la violence (Personnel Élémentaire)", value: 6.3, label: "Plutôt souvent", trend: "down" },
        { name: "Perception de la violence (Personnel Lycée)", value: 23.1, label: "Plutôt souvent", trend: "up" },
      ]
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-raleway">
      <Navbar showLogo={true} />
      
      <div className="bg-gradient-to-r from-french-blue to-blue-700 text-white py-24 md:py-28">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-4 opacity-0 animate-fade-in">
            Diagnostique
          </h1>
          <p className="text-xl md:text-2xl font-raleway font-light max-w-3xl opacity-0 animate-fade-in-delay-1">
            Analyse de la situation actuelle pour orienter le développement
          </p>
        </div>
      </div>

      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <Tabs defaultValue="elcs" className="w-full">
            <TabsList className="mb-8 w-full max-w-md mx-auto grid grid-cols-2">
              <TabsTrigger value="elcs" className="text-sm md:text-base font-medium">
                Diagnostique ELCS
              </TabsTrigger>
              <TabsTrigger value="psd" className="text-sm md:text-base font-medium">
                Diagnostique PSD
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="elcs">
              <div className="max-w-5xl mx-auto">
                <Card className="mb-8 border-french-blue/10 shadow-md">
                  <CardHeader>
                    <CardTitle className="text-2xl text-french-blue">Analyse du Climat Scolaire</CardTitle>
                    <CardDescription>
                      Basée sur les Enquêtes Locales de Climat Scolaire (ELCS) 2024-2025
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">
                      Cette analyse synthétise les perceptions du climat scolaire au LFJP de Saly, 
                      en croisant les données quantitatives issues des questionnaires élèves, parents et personnels 
                      avec les éléments qualitatifs extraits des retours écrits (verbatim).
                    </p>
                  </CardContent>
                </Card>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <Card className="border-french-blue/10 shadow-md h-full">
                    <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100 border-b pb-3">
                      <CardTitle className="text-lg text-french-blue flex items-center">
                        <BarChart4 className="mr-2 h-5 w-5" /> {elcsData.satisfaction.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-4">
                      {elcsData.satisfaction.primary.map((item, idx) => (
                        <div key={`sat-p-${idx}`} className="mb-4">
                          <div className="flex justify-between mb-1 items-center">
                            <div className="text-sm font-medium">{item.name}</div>
                            <div className="flex items-center">
                              <span className={`text-sm font-semibold ${item.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                                {item.value}% 
                              </span>
                              {item.trend === 'up' ? 
                                <ArrowUp className="h-4 w-4 text-green-600 ml-1" /> : 
                                <ArrowDown className="h-4 w-4 text-red-600 ml-1" />
                              }
                            </div>
                          </div>
                          <Progress 
                            value={item.value} 
                            className={`h-2 ${item.value < item.average ? 'bg-red-100' : 'bg-green-100'}`}
                          />
                          <div className="flex justify-between text-xs text-gray-500 mt-1">
                            <span>{item.label}</span>
                            {item.average && <span>Moyenne: {item.average}%</span>}
                          </div>
                        </div>
                      ))}
                      
                      <div className="mt-6 border-t pt-4">
                        <h4 className="text-sm font-medium mb-3">Points d'attention</h4>
                        {elcsData.satisfaction.secondary.map((item, idx) => (
                          <div key={`sat-s-${idx}`} className="flex items-start mb-2">
                            <AlertTriangle className="h-4 w-4 text-amber-500 mr-2 mt-0.5" />
                            <div>
                              <span className="text-sm font-medium">{item.name}: </span>
                              <span className="text-sm">{item.value}% {item.label}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-french-blue/10 shadow-md h-full">
                    <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100 border-b pb-3">
                      <CardTitle className="text-lg text-french-blue flex items-center">
                        <BarChart4 className="mr-2 h-5 w-5" /> {elcsData.relations.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-4">
                      {elcsData.relations.primary.map((item, idx) => (
                        <div key={`rel-p-${idx}`} className="mb-4">
                          <div className="flex justify-between mb-1 items-center">
                            <div className="text-sm font-medium">{item.name}</div>
                            <div className="flex items-center">
                              <span className={`text-sm font-semibold ${item.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                                {item.value}% 
                              </span>
                              {item.trend === 'up' ? 
                                <ThumbsUp className="h-4 w-4 text-green-600 ml-1" /> : 
                                <ThumbsDown className="h-4 w-4 text-red-600 ml-1" />
                              }
                            </div>
                          </div>
                          <Progress 
                            value={item.value} 
                            className={`h-2 ${item.value < item.average ? 'bg-red-100' : 'bg-green-100'}`}
                          />
                          <div className="flex justify-between text-xs text-gray-500 mt-1">
                            <span>{item.label}</span>
                            {item.average && <span>Moyenne: {item.average}%</span>}
                          </div>
                        </div>
                      ))}
                      
                      <div className="mt-6 border-t pt-4">
                        <h4 className="text-sm font-medium mb-3">Points d'attention</h4>
                        {elcsData.relations.secondary.map((item, idx) => (
                          <div key={`rel-s-${idx}`} className="flex items-start mb-2">
                            <AlertTriangle className="h-4 w-4 text-amber-500 mr-2 mt-0.5" />
                            <div>
                              <span className="text-sm font-medium">{item.name}: </span>
                              <span className="text-sm">{item.value} {item.label}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <Card className="border-french-blue/10 shadow-md h-full">
                    <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100 border-b pb-3">
                      <CardTitle className="text-lg text-french-blue flex items-center">
                        <BarChart4 className="mr-2 h-5 w-5" /> {elcsData.travail.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-4">
                      {elcsData.travail.primary.map((item, idx) => (
                        <div key={`trav-p-${idx}`} className="mb-4">
                          <div className="flex justify-between mb-1 items-center">
                            <div className="text-sm font-medium">{item.name}</div>
                            <div className="flex items-center">
                              {typeof item.value === 'number' ? (
                                <>
                                  <span className={`text-sm font-semibold ${item.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                                    {item.value}% 
                                  </span>
                                  {item.trend === 'up' ? 
                                    <ArrowUp className="h-4 w-4 text-green-600 ml-1" /> : 
                                    <ArrowDown className="h-4 w-4 text-red-600 ml-1" />
                                  }
                                </>
                              ) : (
                                <span className="text-sm font-semibold text-amber-500">
                                  {item.value}
                                </span>
                              )}
                            </div>
                          </div>
                          {typeof item.value === 'number' && (
                            <>
                              <Progress 
                                value={item.value} 
                                className={`h-2 ${item.value < (item.average || 70) ? 'bg-red-100' : 'bg-green-100'}`}
                              />
                              <div className="flex justify-between text-xs text-gray-500 mt-1">
                                <span>{item.label}</span>
                                {item.average && <span>Moyenne: {item.average}%</span>}
                              </div>
                            </>
                          )}
                        </div>
                      ))}
                      
                      <div className="mt-6 border-t pt-4">
                        <h4 className="text-sm font-medium mb-3">Points d'attention</h4>
                        {elcsData.travail.secondary.map((item, idx) => (
                          <div key={`trav-s-${idx}`} className="flex items-start mb-2">
                            <AlertTriangle className="h-4 w-4 text-amber-500 mr-2 mt-0.5" />
                            <div>
                              <span className="text-sm font-medium">{item.name}: </span>
                              <span className="text-sm">{item.value} {item.label}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-french-blue/10 shadow-md h-full">
                    <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100 border-b pb-3">
                      <CardTitle className="text-lg text-french-blue flex items-center">
                        <BarChart4 className="mr-2 h-5 w-5" /> {elcsData.securite.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-4">
                      {elcsData.securite.primary.map((item, idx) => (
                        <div key={`sec-p-${idx}`} className="mb-4">
                          <div className="flex justify-between mb-1 items-center">
                            <div className="text-sm font-medium">{item.name}</div>
                            <div className="flex items-center">
                              {typeof item.value === 'number' ? (
                                <>
                                  <span className={`text-sm font-semibold ${item.trend === 'down' ? 'text-green-600' : 'text-red-600'}`}>
                                    {item.value}% 
                                  </span>
                                  {item.trend === 'up' ? 
                                    <ArrowUp className="h-4 w-4 text-red-600 ml-1" /> : 
                                    <ArrowDown className="h-4 w-4 text-green-600 ml-1" />
                                  }
                                </>
                              ) : (
                                <span className={`text-sm font-semibold ${item.trend === 'down' ? 'text-green-600' : 'text-red-600'}`}>
                                  {item.value}
                                </span>
                              )}
                            </div>
                          </div>
                          {typeof item.value === 'number' && (
                            <>
                              <Progress 
                                value={item.value} 
                                className={`h-2 ${item.trend === 'up' ? 'bg-red-100' : 'bg-green-100'}`}
                              />
                              <div className="flex justify-between text-xs text-gray-500 mt-1">
                                <span>{item.label}</span>
                                {item.average && <span>Moyenne: {item.average}%</span>}
                              </div>
                            </>
                          )}
                        </div>
                      ))}
                      
                      <div className="mt-6 border-t pt-4">
                        <h4 className="text-sm font-medium mb-3">Points d'attention</h4>
                        {elcsData.securite.secondary.map((item, idx) => (
                          <div key={`sec-s-${idx}`} className="flex items-start mb-2">
                            <AlertTriangle className="h-4 w-4 text-amber-500 mr-2 mt-0.5" />
                            <div>
                              <span className="text-sm font-medium">{item.name}: </span>
                              <span className="text-sm">{item.value}% {item.label}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <Card className="mb-8 border-french-blue/10 shadow-md bg-gray-50">
                  <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100 border-b">
                    <CardTitle className="text-xl text-french-blue">Bilan Global de l'ELCS</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-lg font-medium text-french-blue mb-3">Points Forts</h3>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <ThumbsUp className="h-4 w-4 text-green-600 mr-2 mt-1" />
                            <span className="text-sm">Relations avec les Adultes et la Vie Scolaire (Lycée)</span>
                          </li>
                          <li className="flex items-start">
                            <ThumbsUp className="h-4 w-4 text-green-600 mr-2 mt-1" />
                            <span className="text-sm">Ambiance entre Élèves (Lycée)</span>
                          </li>
                          <li className="flex items-start">
                            <ThumbsUp className="h-4 w-4 text-green-600 mr-2 mt-1" />
                            <span className="text-sm">Faible Absentéisme lié à la Violence</span>
                          </li>
                          <li className="flex items-start">
                            <ThumbsUp className="h-4 w-4 text-green-600 mr-2 mt-1" />
                            <span className="text-sm">Perception Positive des Relations par les Personnels</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-french-blue mb-3">Axes d'Amélioration</h3>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <AlertTriangle className="h-4 w-4 text-amber-500 mr-2 mt-1" />
                            <span className="text-sm">Confort Matériel (climatisation, cantine, bâtiments)</span>
                          </li>
                          <li className="flex items-start">
                            <AlertTriangle className="h-4 w-4 text-amber-500 mr-2 mt-1" />
                            <span className="text-sm">Prévention du Harcèlement et Violence Psychologique</span>
                          </li>
                          <li className="flex items-start">
                            <AlertTriangle className="h-4 w-4 text-amber-500 mr-2 mt-1" />
                            <span className="text-sm">Sécurité et Surveillance (zones sensibles)</span>
                          </li>
                          <li className="flex items-start">
                            <AlertTriangle className="h-4 w-4 text-amber-500 mr-2 mt-1" />
                            <span className="text-sm">Équilibre Charge de Travail et Organisation Scolaire</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <div className="flex justify-center">
                  <a 
                    href="https://docs.google.com/document/d/1Oc7-swPdjLYQz_Shnm1ZRiqOTVjH0Bbb98kgm7shNVo/edit?usp=sharing" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-french-blue text-white px-5 py-3 rounded-lg font-medium flex items-center hover:bg-blue-700 transition-colors"
                  >
                    Accéder à l'analyse complète <ChevronRight className="ml-1 h-5 w-5" />
                  </a>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="psd">
              <div className="max-w-5xl mx-auto">
                <Card className="mb-8 border-french-blue/10 shadow-md">
                  <CardHeader>
                    <CardTitle className="text-2xl text-french-blue">Diagnostique PSD</CardTitle>
                    <CardDescription>
                      Analyse basée sur les enquêtes questionnaires PSD
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">
                      Contenu du diagnostique PSD à venir. Cette section sera complétée avec les données 
                      issues des enquêtes questionnaires du Plan Stratégique de Développement.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Diagnostique;
