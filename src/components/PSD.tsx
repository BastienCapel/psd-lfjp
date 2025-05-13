
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Target, Users, Sparkles, GraduationCap, LayoutDashboard } from 'lucide-react';

const PSD = () => {
  return (
    <section id="psd" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-playfair font-bold text-french-blue mb-6 text-center">
            PLAN STRATÉGIQUE DE DÉVELOPPEMENT
          </h2>
          <p className="text-lg text-center font-raleway text-gray-700 mb-12">
            Lycée Français Jacques Prévert (2026-2030)
          </p>

          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-12">
            <p className="font-raleway text-gray-700 mb-4">
              Le Lycée Français Jacques Prévert ambitionne de devenir un établissement d'excellence pédagogique, inclusif, 
              innovant, ancré dans son territoire local et ouvert à l'international.
            </p>
            <p className="font-raleway text-gray-700 mb-4">
              Ce plan stratégique s'inscrit dans la vision de l'établissement : former des citoyens du monde avec un profond 
              ancrage local, dans un cadre de vie épanouissant et équitable.
            </p>
            <p className="font-raleway text-gray-700">
              Il s'appuie sur les résultats des enquêtes de climat scolaire menées au LFJP en 2024-2025 et répond aux grandes 
              orientations de l'Éducation nationale française et de l'AEFE, tout en s'ancrant dans les quatre parcours éducatifs 
              obligatoires.
            </p>
          </div>

          <Tabs defaultValue="axe1" className="w-full">
            <TabsList className="grid grid-cols-5 mb-8">
              <TabsTrigger value="axe1" className="flex flex-col items-center py-3 data-[state=active]:text-french-blue">
                <Target size={20} className="mb-1" />
                <span className="text-xs">Axe 1</span>
              </TabsTrigger>
              <TabsTrigger value="axe2" className="flex flex-col items-center py-3 data-[state=active]:text-french-blue">
                <Users size={20} className="mb-1" />
                <span className="text-xs">Axe 2</span>
              </TabsTrigger>
              <TabsTrigger value="axe3" className="flex flex-col items-center py-3 data-[state=active]:text-french-blue">
                <Sparkles size={20} className="mb-1" />
                <span className="text-xs">Axe 3</span>
              </TabsTrigger>
              <TabsTrigger value="axe4" className="flex flex-col items-center py-3 data-[state=active]:text-french-blue">
                <GraduationCap size={20} className="mb-1" />
                <span className="text-xs">Axe 4</span>
              </TabsTrigger>
              <TabsTrigger value="axe5" className="flex flex-col items-center py-3 data-[state=active]:text-french-blue">
                <LayoutDashboard size={20} className="mb-1" />
                <span className="text-xs">Transversal</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="axe1" className="border-2 border-french-blue/10 rounded-lg p-6 bg-white">
              <h3 className="text-xl font-playfair font-bold text-french-blue mb-4">
                AXE 1 – PARCOURS ÉDUCATIF DE SANTÉ
              </h3>
              <p className="text-lg font-medium font-raleway text-gray-800 mb-4">
                Un cadre de vie sain, sûr et bienveillant
              </p>
              
              <div className="mt-6 space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Objectifs</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700 font-raleway">
                    <li>Améliorer les conditions matérielles de santé et d'hygiène</li>
                    <li>Promouvoir une culture de la prévention et du bien-être physique, mental et social</li>
                    <li>Renforcer les compétences psychosociales</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Actions prioritaires</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700 font-raleway">
                    <li>Audit thermique des locaux, plan de climatisation, rénovation des sanitaires</li>
                    <li>Lancement d'un projet de construction d'une cantine scolaire</li>
                    <li>Poursuite des travaux d'amélioration de l'acoustique</li>
                    <li>Programme d'éducation à la santé</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Indicateurs</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700 font-raleway">
                    <li>Taux de satisfaction sanitaire (enquêtes)</li>
                    <li>Taux de satisfaction concernant la restauration scolaire</li>
                    <li>Nombre d'actions de promotion santé menées par cycle</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="axe2" className="border-2 border-french-blue/10 rounded-lg p-6 bg-white">
              <h3 className="text-xl font-playfair font-bold text-french-blue mb-4">
                AXE 2 – PARCOURS CITOYEN
              </h3>
              <p className="text-lg font-medium font-raleway text-gray-800 mb-4">
                Éduquer à une citoyenneté responsable et engagée
              </p>
              
              <div className="mt-6 space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Objectifs</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700 font-raleway">
                    <li>Favoriser l'engagement et la responsabilité citoyenne</li>
                    <li>Renforcer le sentiment d'appartenance et la solidarité</li>
                    <li>Former à l'esprit critique et à l'usage éthique du numérique</li>
                    <li>Promouvoir la diversité et le plurilinguisme comme vecteurs de cohésion</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Actions prioritaires</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700 font-raleway">
                    <li>Généralisation de l'éducation aux médias et à l'intelligence artificielle</li>
                    <li>Elaboration d'un plan : « un ordinateur par élève »</li>
                    <li>Création d'un passeport du jeune citoyen</li>
                    <li>Actions solidaires et intergénérationnelles</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Indicateurs</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700 font-raleway">
                    <li>Nombre d'actions citoyennes menées par niveau</li>
                    <li>Indice de sentiment d'appartenance</li>
                    <li>Implication dans les instances de représentation</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="axe3" className="border-2 border-french-blue/10 rounded-lg p-6 bg-white">
              <h3 className="text-xl font-playfair font-bold text-french-blue mb-4">
                AXE 3 – PARCOURS D'ÉDUCATION ARTISTIQUE ET CULTURELLE
              </h3>
              <p className="text-lg font-medium font-raleway text-gray-800 mb-4">
                Cultiver la sensibilité, la créativité et l'ouverture
              </p>
              
              <div className="mt-6 space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Objectifs</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700 font-raleway">
                    <li>Favoriser un accès égal à la culture pour tous les élèves</li>
                    <li>Renforcer les compétences artistiques, expressives et esthétiques</li>
                    <li>Valoriser la diversité culturelle, locale et internationale</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Actions prioritaires</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700 font-raleway">
                    <li>Déploiement des trois piliers du PEAC</li>
                    <li>Intégration d'artistes sénégalais dans les projets</li>
                    <li>Ateliers pluridisciplinaires croisant arts, langues et sciences</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Indicateurs</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700 font-raleway">
                    <li>Nombre de projets PEAC par cycle</li>
                    <li>Diversité des domaines artistiques abordés</li>
                    <li>Taux de participation aux sorties et ateliers culturels</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="axe4" className="border-2 border-french-blue/10 rounded-lg p-6 bg-white">
              <h3 className="text-xl font-playfair font-bold text-french-blue mb-4">
                AXE 4 – PARCOURS AVENIR
              </h3>
              <p className="text-lg font-medium font-raleway text-gray-800 mb-4">
                Préparer les élèves aux enjeux de demain
              </p>
              
              <div className="mt-6 space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Objectifs</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700 font-raleway">
                    <li>Accompagner l'orientation et la construction du projet personnel</li>
                    <li>Favoriser l'autonomie et la responsabilité des élèves</li>
                    <li>Intégrer les compétences numériques et l'IA comme leviers d'émancipation</li>
                    <li>Valoriser le plurilinguisme comme atout</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Actions prioritaires</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700 font-raleway">
                    <li>Déploiement du plan « Section Internationale et BFI » (2026-2033)</li>
                    <li>Déploiement d'outils de découverte des métiers</li>
                    <li>Modules d'accompagnement à l'autonomie</li>
                    <li>Séances d'orientation coanimées</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Indicateurs</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700 font-raleway">
                    <li>Nombre de candidatures en section internationale</li>
                    <li>Taux de participation aux actions d'orientation</li>
                    <li>Progrès dans l'autonomie (questionnaires d'autoévaluation)</li>
                    <li>Projets multilingues valorisés</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="axe5" className="border-2 border-french-blue/10 rounded-lg p-6 bg-white">
              <h3 className="text-xl font-playfair font-bold text-french-blue mb-4">
                AXE TRANSVERSAL – PILOTAGE, GOUVERNANCE ET VIABILITÉ
              </h3>
              
              <div className="mt-6 space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Objectifs</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700 font-raleway">
                    <li>Garantir une mise en œuvre efficace, évaluée et communiquée du plan</li>
                    <li>Renforcer la cohésion des équipes et la solidarité communautaire</li>
                    <li>Utiliser les enquêtes ELCS comme référence pour piloter le PSD</li>
                    <li>Plan d'entretien de l'immobilier et du mobilier</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Actions prioritaires</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700 font-raleway">
                    <li>Simulation financière annuelle présentée en conseil d'établissement</li>
                    <li>Tableaux de bord thématiques et bilans de mi-parcours</li>
                    <li>Développement de supports de communication</li>
                    <li>Organisation d'espaces d'échange pour renforcer le sentiment d'appartenance</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Indicateurs</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700 font-raleway">
                    <li>Taux d'atteinte des objectifs du plan par axe</li>
                    <li>Participation aux instances de pilotage</li>
                    <li>Indice de sentiment d'appartenance</li>
                    <li>Évolution des indicateurs issus des enquêtes ELCS</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default PSD;
