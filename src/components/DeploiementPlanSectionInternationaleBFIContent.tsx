
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const DeploiementPlanSectionInternationaleBFIContent = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          
          {/* Sommaire */}
          <Card className="border-french-blue/10 shadow-md">
            <CardHeader>
              <CardTitle className="text-2xl text-french-blue">Sommaire</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="space-y-2">
                <li className="font-medium">1. Introduction et contexte</li>
                <li className="font-medium">2. Objectifs du plan de déploiement</li>
                <li className="font-medium">3. Calendrier de déploiement progressif</li>
                <li className="font-medium">4. Analyse des impacts sur les ressources humaines</li>
                <li className="font-medium">5. Analyse des impacts financiers</li>
                <li className="font-medium">6. Options organisationnelles recommandées</li>
                <li className="font-medium">7. Plan d'action détaillé</li>
                <li className="font-medium">8. Indicateurs de suivi et gouvernance</li>
                <li className="font-medium">9. Conclusion</li>
              </ol>
            </CardContent>
          </Card>

          {/* 1. Introduction et contexte */}
          <Card className="border-french-blue/10 shadow-md">
            <CardHeader>
              <CardTitle className="text-2xl text-french-blue">1. Introduction et contexte</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Le Lycée Français Jacques Prévert de Saly s'engage dans une démarche ambitieuse de développement 
                d'une Section Internationale Américaine et d'un programme de Baccalauréat Français International (BFI). 
                Cette initiative s'inscrit dans le cadre du Plan Stratégique de Développement 2026-2030 et vise à 
                renforcer l'attractivité et l'excellence de l'établissement.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-french-blue mb-2">Contexte stratégique</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                  <li>Demande croissante pour un enseignement bilingue de qualité</li>
                  <li>Positionnement concurrentiel sur le marché éducatif sénégalais</li>
                  <li>Réponse aux attentes des familles internationales</li>
                  <li>Valorisation du projet pédagogique de l'établissement</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* 2. Objectifs du plan de déploiement */}
          <Card className="border-french-blue/10 shadow-md">
            <CardHeader>
              <CardTitle className="text-2xl text-french-blue">2. Objectifs du plan de déploiement</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Objectifs pédagogiques</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                    <li>Développer un bilinguisme français-anglais de haut niveau</li>
                    <li>Offrir une ouverture culturelle internationale</li>
                    <li>Préparer aux certifications internationales</li>
                    <li>Favoriser la mobilité étudiante</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Objectifs institutionnels</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                    <li>Augmenter les effectifs de l'établissement</li>
                    <li>Diversifier l'offre éducative</li>
                    <li>Renforcer l'attractivité internationale</li>
                    <li>Optimiser la rentabilité financière</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 3. Calendrier de déploiement progressif */}
          <Card className="border-french-blue/10 shadow-md">
            <CardHeader>
              <CardTitle className="text-2xl text-french-blue">3. Calendrier de déploiement progressif</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4">
                <div className="bg-gray-100 p-4 rounded-lg">
                  <h4 className="font-semibold text-french-blue mb-2">2026-2027 : Phase de lancement</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                    <li>Ouverture de la Section Internationale en 6ème (20 élèves)</li>
                    <li>Recrutement des enseignants spécialisés</li>
                    <li>Mise en place des infrastructures nécessaires</li>
                    <li>Formation des équipes pédagogiques</li>
                  </ul>
                </div>
                
                <div className="bg-gray-100 p-4 rounded-lg">
                  <h4 className="font-semibold text-french-blue mb-2">2027-2028 : Extension au collège</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                    <li>Ouverture de la 5ème Section Internationale (40 élèves total)</li>
                    <li>Renforcement de l'équipe pédagogique</li>
                    <li>Développement des partenariats internationaux</li>
                  </ul>
                </div>
                
                <div className="bg-gray-100 p-4 rounded-lg">
                  <h4 className="font-semibold text-french-blue mb-2">2028-2029 : Consolidation collège</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                    <li>Ouverture de la 4ème Section Internationale (60 élèves total)</li>
                    <li>Préparation de l'extension au lycée</li>
                    <li>Évaluation et ajustements pédagogiques</li>
                  </ul>
                </div>
                
                <div className="bg-gray-100 p-4 rounded-lg">
                  <h4 className="font-semibold text-french-blue mb-2">2029-2030 : Finalisation collège</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                    <li>Ouverture de la 3ème Section Internationale (80 élèves total)</li>
                    <li>Premiers diplômes nationaux du brevet avec mention internationale</li>
                  </ul>
                </div>
                
                <div className="bg-green-100 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">2030-2031 : Extension lycée</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                    <li>Ouverture de la 2nde Section Internationale et BFI (100 élèves total)</li>
                    <li>Mise en place du programme BFI</li>
                  </ul>
                </div>
                
                <div className="bg-green-100 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">2031-2032 : Développement lycée</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                    <li>Ouverture de la 1ère Section Internationale et BFI (120 élèves total)</li>
                    <li>Préparation aux certifications internationales</li>
                  </ul>
                </div>
                
                <div className="bg-green-100 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">2032-2033 : Maturité complète</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                    <li>Ouverture de la Terminale Section Internationale et BFI (140 élèves total)</li>
                    <li>Premiers baccalauréats avec OIB et BFI</li>
                    <li>Évaluation complète du dispositif</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 4. Analyse des impacts sur les ressources humaines */}
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
                    <TableCell>2026-2027</TableCell>
                    <TableCell>2 ETP</TableCell>
                    <TableCell>Anglais natif + Histoire-Géo bilingue</TableCell>
                    <TableCell>Formation SI/BFI</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>2027-2028</TableCell>
                    <TableCell>1 ETP</TableCell>
                    <TableCell>Anglais littérature</TableCell>
                    <TableCell>Accompagnement pédagogique</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>2028-2029</TableCell>
                    <TableCell>1 ETP</TableCell>
                    <TableCell>Sciences en anglais</TableCell>
                    <TableCell>Formation continue</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>2030-2031</TableCell>
                    <TableCell>2 ETP</TableCell>
                    <TableCell>Enseignants lycée spécialisés</TableCell>
                    <TableCell>Certification BFI</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* 5. Analyse des impacts financiers */}
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
                      <TableCell>2026-2027</TableCell>
                      <TableCell>45 k€</TableCell>
                      <TableCell>55 k€</TableCell>
                      <TableCell>65 k€</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>2027-2028</TableCell>
                      <TableCell>95 k€</TableCell>
                      <TableCell>115 k€</TableCell>
                      <TableCell>135 k€</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>2028-2029</TableCell>
                      <TableCell>145 k€</TableCell>
                      <TableCell>175 k€</TableCell>
                      <TableCell>205 k€</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>2029-2030</TableCell>
                      <TableCell>195 k€</TableCell>
                      <TableCell>235 k€</TableCell>
                      <TableCell>275 k€</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>2030-2031</TableCell>
                      <TableCell>245 k€</TableCell>
                      <TableCell>295 k€</TableCell>
                      <TableCell>345 k€</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>2031-2032</TableCell>
                      <TableCell>295 k€</TableCell>
                      <TableCell>355 k€</TableCell>
                      <TableCell>415 k€</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>2032-2033</TableCell>
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
                      <TableCell>2026-2027</TableCell>
                      <TableCell>55 k€</TableCell>
                      <TableCell>75 k€</TableCell>
                      <TableCell className="text-red-600">-20 k€</TableCell>
                      <TableCell className="text-red-600">-20 k€</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>2027-2028</TableCell>
                      <TableCell>115 k€</TableCell>
                      <TableCell>95 k€</TableCell>
                      <TableCell className="text-green-600">+20 k€</TableCell>
                      <TableCell className="text-black">0 k€</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>2028-2029</TableCell>
                      <TableCell>175 k€</TableCell>
                      <TableCell>115 k€</TableCell>
                      <TableCell className="text-green-600">+60 k€</TableCell>
                      <TableCell className="text-green-600">+60 k€</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>2029-2030</TableCell>
                      <TableCell>235 k€</TableCell>
                      <TableCell>135 k€</TableCell>
                      <TableCell className="text-green-600">+100 k€</TableCell>
                      <TableCell className="text-green-600">+160 k€</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>2030-2031</TableCell>
                      <TableCell>295 k€</TableCell>
                      <TableCell>175 k€</TableCell>
                      <TableCell className="text-green-600">+120 k€</TableCell>
                      <TableCell className="text-green-600">+280 k€</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>2031-2032</TableCell>
                      <TableCell>355 k€</TableCell>
                      <TableCell>195 k€</TableCell>
                      <TableCell className="text-green-600">+160 k€</TableCell>
                      <TableCell className="text-green-600">+440 k€</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>2032-2033</TableCell>
                      <TableCell>415 k€</TableCell>
                      <TableCell>215 k€</TableCell>
                      <TableCell className="text-green-600">+200 k€</TableCell>
                      <TableCell className="text-green-600">+640 k€</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>

          {/* 6. Options organisationnelles recommandées */}
          <Card className="border-french-blue/10 shadow-md">
            <CardHeader>
              <CardTitle className="text-2xl text-french-blue">6. Options organisationnelles recommandées</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Structure pédagogique</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                    <li>Classes dédiées Section Internationale</li>
                    <li>Enseignements spécifiques en anglais</li>
                    <li>Coordination avec les enseignements classiques</li>
                    <li>Suivi individualisé des élèves</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Gouvernance</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                    <li>Comité de pilotage dédié</li>
                    <li>Coordinateur Section Internationale</li>
                    <li>Liaison avec les instances de l'AEFE</li>
                    <li>Partenariats institutionnels</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 7. Plan d'action détaillé */}
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
                    <TableCell>Validation du projet par l'AEFE</TableCell>
                    <TableCell>Direction</TableCell>
                    <TableCell>Mars 2026</TableCell>
                    <TableCell>Accord officiel</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Recrutement enseignants</TableCell>
                    <TableCell>RH + Direction</TableCell>
                    <TableCell>Juin 2026</TableCell>
                    <TableCell>Postes pourvus</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Formation des équipes</TableCell>
                    <TableCell>Direction pédagogique</TableCell>
                    <TableCell>Août 2026</TableCell>
                    <TableCell>Certification obtenue</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Aménagement des locaux</TableCell>
                    <TableCell>Direction administrative</TableCell>
                    <TableCell>Août 2026</TableCell>
                    <TableCell>Locaux opérationnels</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Lancement communication</TableCell>
                    <TableCell>Direction + Communication</TableCell>
                    <TableCell>Janvier 2026</TableCell>
                    <TableCell>Campagne déployée</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* 8. Indicateurs de suivi et gouvernance */}
          <Card className="border-french-blue/10 shadow-md">
            <CardHeader>
              <CardTitle className="text-2xl text-french-blue">8. Indicateurs de suivi et gouvernance</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Indicateurs quantitatifs</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                    <li>Nombre d'élèves inscrits</li>
                    <li>Taux de rétention</li>
                    <li>Résultats aux examens</li>
                    <li>Rentabilité financière</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Indicateurs qualitatifs</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                    <li>Satisfaction des familles</li>
                    <li>Qualité pédagogique</li>
                    <li>Reconnaissance internationale</li>
                    <li>Image de l'établissement</li>
                  </ul>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2">Gouvernance</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                    <li>Comité de pilotage trimestriel</li>
                    <li>Rapports annuels</li>
                    <li>Évaluations externes</li>
                    <li>Ajustements stratégiques</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 9. Conclusion */}
          <Card className="border-french-blue/10 shadow-md">
            <CardHeader>
              <CardTitle className="text-2xl text-french-blue">9. Conclusion</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Le déploiement progressif de la Section Internationale Américaine et du BFI au Lycée Français 
                Jacques Prévert de Saly représente un investissement stratégique majeur pour l'avenir de 
                l'établissement. Ce plan détaillé sur 7 ans (2026-2033) permettra :
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li><strong>Une croissance maîtrisée</strong> : de 20 élèves en 2026 à 140 élèves en 2033</li>
                  <li><strong>Un retour sur investissement positif</strong> dès la 3ème année</li>
                  <li><strong>Un positionnement d'excellence</strong> sur le marché éducatif sénégalais</li>
                  <li><strong>Une ouverture internationale renforcée</strong> pour tous les élèves</li>
                </ul>
              </div>
              <p className="text-gray-700 font-medium">
                La réussite de ce projet nécessitera un engagement fort de toute la communauté éducative 
                et un suivi rigoureux des indicateurs de performance définis dans ce plan.
              </p>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  );
};

export default DeploiementPlanSectionInternationaleBFIContent;
