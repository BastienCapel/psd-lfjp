
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Diagnostique = () => {
  return (
    <div className="min-h-screen flex flex-col font-raleway">
      <Navbar showLogo={true} />
      
      <div className="bg-gradient-to-r from-french-blue to-blue-700 text-white py-24 md:py-32">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-6 opacity-0 animate-fade-in">
            DIAGNOSTIQUE
          </h1>
          <p className="text-xl md:text-2xl font-raleway font-light max-w-3xl opacity-0 animate-fade-in-delay-1">
            Analyses et enquêtes pour le Lycée Français Jacques Prévert
          </p>
        </div>
      </div>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="elcs" className="w-full">
              <TabsList className="grid grid-cols-2 mb-8">
                <TabsTrigger value="elcs" className="text-sm md:text-base">
                  Diagnostique ELCS
                </TabsTrigger>
                <TabsTrigger value="psd" className="text-sm md:text-base">
                  Diagnostique PSD
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="elcs" className="border-2 border-french-blue/10 rounded-lg p-6 bg-white">
                <h2 className="text-2xl font-playfair font-bold text-french-blue mb-6">
                  Analyse du Climat Scolaire au Lycée Français Jacques Prévert de Saly
                </h2>
                <h3 className="text-lg font-medium text-gray-700 mb-8 italic">
                  Basée sur les Enquêtes Locales de Climat Scolaire (ELCS) 2024-2025
                </h3>
                
                <div className="prose prose-lg max-w-none">
                  <h4 className="text-xl font-semibold text-french-blue">Introduction</h4>
                  <p className="mb-6">
                    Cette analyse synthétise les perceptions du climat scolaire au LFJP de Saly, en croisant les données quantitatives issues des questionnaires élèves, parents et personnels avec les éléments qualitatifs extraits des retours écrits (verbatim). L'objectif est d'identifier les points forts et les axes d'amélioration prioritaires pour le bien-être et l'épanouissement de tous les membres de la communauté éducative.
                  </p>

                  <h4 className="text-xl font-semibold text-french-blue mt-8">I. Satisfaction concernant les Infrastructures et le Confort Matériel</h4>
                  
                  <h5 className="text-lg font-medium mt-6">Bâtiments et Cadre de Vie Général :</h5>
                  <p className="font-semibold">Élèves :</p>
                  <ul className="list-disc pl-5 mb-4 space-y-1">
                    <li><strong>Données quantitatives (Lycée) :</strong> Seulement 33% des élèves apprécient positivement les bâtiments (contre 75% au niveau national).</li>
                    <li><strong>Données quantitatives (Élémentaire) :</strong> 84.8% des élèves de l'élémentaire ont une appréciation positive des bâtiments (jolis ou très jolis). C'est un contraste notable avec le lycée.</li>
                  </ul>
                  
                  <p className="font-semibold">Retours qualitatifs des élèves (verbatim) :</p>
                  <ul className="list-disc pl-5 mb-4 space-y-1">
                    <li><strong>Élémentaire :</strong> Demande d'amélioration des espaces extérieurs (8 occurrences), agrandir la cour, installer une piscine. Propreté des toilettes (5 occurrences).</li>
                    <li><strong>Collège :</strong> Demandes d'équipements (casiers, miroirs dans les toilettes) (14 occurrences).</li>
                    <li><strong>Lycée :</strong> Demandes de casiers, fontaines à eau fraîche.</li>
                  </ul>
                  
                  <p className="font-semibold">Retours des Parents :</p>
                  <ul className="list-disc pl-5 mb-4 space-y-1">
                    <li><strong>Verbatim :</strong> Les infrastructures sont un "enjeu central".</li>
                    <li><strong>Primaire :</strong> Espaces de récréation mieux adaptés, jeux variés, espaces verts ombragés.</li>
                    <li><strong>Collège :</strong> Rénovation des toilettes, vestiaires, CDI, insonorisation des salles.</li>
                    <li><strong>Lycée :</strong> Renouvellement du mobilier, amélioration des conditions dans les salles (température, acoustique, confort).</li>
                  </ul>
                  
                  <p className="font-semibold">Retours des Personnels :</p>
                  <ul className="list-disc pl-5 mb-4 space-y-1">
                    <li><strong>Données quantitatives (Élémentaire) :</strong> La proposition "des locaux plus adaptés" est classée avec une pertinence moyenne (rang 5.9 sur 16, où un rang plus bas indique une plus grande pertinence) pour améliorer le climat scolaire.</li>
                    <li><strong>Données quantitatives (Lycée) :</strong> La proposition "des locaux plus adaptés" a un rang de pertinence de 7.7 (sur 16).</li>
                  </ul>
                  
                  <h5 className="text-lg font-medium mt-6">Climatisation :</h5>
                  <p className="font-semibold">Retours des Élèves :</p>
                  <ul className="list-disc pl-5 mb-4 space-y-1">
                    <li><strong>Verbatim Collège :</strong> Très forte demande avec 53 occurrences (sur 132 réponses). <span className="bg-yellow-100 px-1">Statistique clé : Environ 40% des verbatim du collège mentionnent la climatisation.</span></li>
                    <li><strong>Verbatim Lycée :</strong> Demande prépondérante avec 47 occurrences (sur 89 réponses). <span className="bg-yellow-100 px-1">Statistique clé : Environ 53% des verbatim du lycée mentionnent la climatisation.</span></li>
                    <li><strong>Verbatim Élémentaire :</strong> Non mentionné comme priorité, les élèves se concentrent sur les jeux et activités.</li>
                  </ul>
                  
                  <p className="font-semibold">Retours des Parents :</p>
                  <ul className="list-disc pl-5 mb-4">
                    <li><strong>Verbatim :</strong> "La problématique de la chaleur revient régulièrement, à tous les niveaux." Souhait de mesures pour améliorer la ventilation ou installer une climatisation efficace.</li>
                  </ul>
                  
                  <p className="font-semibold">Retours des Personnels :</p>
                  <ul className="list-disc pl-5 mb-4">
                    <li>Bien que non explicitement demandé sous "climatisation", la demande pour "des locaux plus adaptés" (voir ci-dessus) inclut probablement le confort thermique.</li>
                  </ul>
                  
                  <h5 className="text-lg font-medium mt-6">Cantine Scolaire :</h5>
                  <p className="font-semibold">Retours des Élèves :</p>
                  <ul className="list-disc pl-5 mb-4 space-y-1">
                    <li><strong>Verbatim Lycée :</strong> Demande de services de restauration adaptés (11 occurrences).</li>
                    <li><strong>Verbatim Élémentaire & Collège :</strong> Moins prégnant dans les synthèses verbatim élèves, mais l'absence est notée.</li>
                  </ul>
                  
                  <p className="font-semibold">Retours des Parents :</p>
                  <ul className="list-disc pl-5 mb-4">
                    <li><strong>Verbatim :</strong> "La mise en place d'une cantine scolaire est une demande très fréquente, avec l'attente d'un espace propre, agréable et proposant une alimentation équilibrée et variée. Cette attente est particulièrement forte et uniforme dans les trois niveaux."</li>
                  </ul>
                  
                  <p className="font-semibold">Retours des Personnels :</p>
                  <ul className="list-disc pl-5 mb-4">
                    <li><strong>Données quantitatives (Élémentaire) :</strong> L'absence de préoccupation des personnels pour la sécurité à la cantine (100% se déclarant "pas concernés") indique son absence physique.</li>
                  </ul>
                  
                  <h5 className="text-lg font-medium mt-6">Uniformes Scolaires :</h5>
                  <p className="font-semibold">Retours des Élèves :</p>
                  <ul className="list-disc pl-5 mb-4 space-y-1">
                    <li><strong>Verbatim Élémentaire :</strong> Vêtements plus confortables ou changement (6 occurrences).</li>
                    <li><strong>Verbatim Collège :</strong> Demande de suppression ou modification (7 occurrences).</li>
                    <li><strong>Verbatim Lycée :</strong> Plusieurs commentaires sur l'inconfort, demande de suppression ou assouplissement (8 occurrences).</li>
                    <li><strong>Général :</strong> Question récurrente à tous les niveaux, davantage marquée au collège et lycée.</li>
                  </ul>
                  <p>Parents et Personnels : Moins d'informations directes sur ce point dans les synthèses fournies.</p>
                  
                  <h4 className="text-xl font-semibold text-french-blue mt-8">II. Relations Humaines et Climat Relationnel</h4>
                  <p className="font-semibold">Élèves :</p>
                  <ul className="list-disc pl-5 mb-4 space-y-1">
                    <li><strong>Données quantitatives (Lycée) :</strong> Relations avec les enseignants (81,7%) légèrement inférieures à la moyenne nationale (87,5%). Climat de violence psychologique (surnoms, mises à l'écart) nettement supérieur à la moyenne nationale.</li>
                    <li><strong>Points forts (Lycée) :</strong> Très forte satisfaction concernant les relations avec les autres adultes de l'établissement (97,4%) et avec la vie scolaire (90,4%, au-dessus de la moyenne nationale). Bonne ambiance entre élèves légèrement supérieure à la moyenne nationale (88,7%).</li>
                  </ul>
                  
                  <p className="font-semibold">Retours qualitatifs des élèves (verbatim) :</p>
                  <ul className="list-disc pl-5 mb-4 space-y-1">
                    <li><strong>Élémentaire :</strong> Meilleure écoute et moins de cris des enseignants (8 occurrences).</li>
                    <li><strong>Collège :</strong> Améliorer communication et respect mutuel (12 occurrences). Rôle des surveillants pour encadrer les comportements (10 occurrences). Violence et harcèlement (9 occurrences).</li>
                    <li><strong>Lycée :</strong> Signalement de comportements déplacés/démotivants de certains enseignants. Témoignages de moqueries fréquentes et harcèlement non pris en compte. Demande forte pour campagnes de sensibilisation, présence psychologique accrue, meilleur accompagnement.</li>
                  </ul>
                  
                  <p className="font-semibold">Retours des Parents :</p>
                  <ul className="list-disc pl-5 mb-4">
                    <li><strong>Verbatim :</strong> Souhait d'une vigilance accrue et actions concrètes contre le harcèlement (particulièrement souligné au primaire). Appel à davantage d'écoute et de bienveillance de la part des adultes.</li>
                  </ul>
                  
                  <p className="font-semibold">Retours des Personnels :</p>
                  <ul className="list-disc pl-5 mb-4 space-y-1">
                    <li><strong>Données quantitatives (Élémentaire) :</strong> Perception majoritairement "Bonne" ou "Très bonne" des relations entre élèves (100%), entre élèves et enseignants (100%), et entre adultes (87.6% Bonne ou Très Bonne).</li>
                    <li><strong>Données quantitatives (Lycée) :</strong> Relations entre élèves "Très bonnes" (38.5%) ou "Bonnes" (61.5%). Relations entre élèves et enseignants "Très bonnes" (69.2%) ou "Bonnes" (30.8%).</li>
                  </ul>
                  
                  <h4 className="text-xl font-semibold text-french-blue mt-8">III. Charge de Travail et Organisation Scolaire</h4>
                  <p className="font-semibold">Élèves :</p>
                  <ul className="list-disc pl-5 mb-4 space-y-1">
                    <li><strong>Données quantitatives (Lycée) :</strong> Intérêt des apprentissages perçu comme inférieur (66,1% vs 72% national). Avis mitigé sur l'encouragement et le soutien des enseignants.</li>
                    <li><strong>Retours qualitatifs des élèves (verbatim Lycée) :</strong> Multiples critiques sur les emplois du temps (journées longues, permanences excessives). Charge de travail excessive, coefficients importants.</li>
                  </ul>
                  
                  <p className="font-semibold">Retours des Parents :</p>
                  <ul className="list-disc pl-5 mb-4">
                    <li><strong>Verbatim (Collège et Lycée) :</strong> Souhait d'une meilleure gestion des emplois du temps (moins de "trous"). Maintien de classes à taille humaine.</li>
                  </ul>
                  
                  <p className="font-semibold">Retours des Personnels :</p>
                  <ul className="list-disc pl-5 mb-4">
                    <li>Peu de données directes sur ce point dans les synthèses, mais la charge de travail des élèves peut impacter leur relation avec les enseignants.</li>
                  </ul>
                  
                  <h4 className="text-xl font-semibold text-french-blue mt-8">IV. Sécurité et Violences</h4>
                  <p className="font-semibold">Élèves :</p>
                  <ul className="list-disc pl-5 mb-4 space-y-1">
                    <li><strong>Données quantitatives (Lycée) :</strong> Taux élevé de victimations (violences psychologiques et physiques). Indice de multivictimation significativement supérieur à la moyenne nationale.</li>
                    <li><strong>Point fort (Lycée) :</strong> 90,4% des élèves déclarent n'avoir jamais manqué l'école en raison de faits de violence.</li>
                  </ul>
                  
                  <p className="font-semibold">Retours qualitatifs des élèves (verbatim) :</p>
                  <ul className="list-disc pl-5 mb-4 space-y-1">
                    <li><strong>Élémentaire :</strong> Renforcer la sécurité contre les agressions extérieures (5 occurrences).</li>
                    <li><strong>Collège :</strong> Renforcer la prévention et les sanctions contre violence et harcèlement (9 occurrences). Rôle accru des surveillants (10 occurrences).</li>
                    <li><strong>Lycée :</strong> Appels à meilleure surveillance (toilettes, vestiaires). Témoignages de trafic de substances, comportements agressifs. Besoin de séances sur le harcèlement.</li>
                  </ul>
                  
                  <p className="font-semibold">Retours des Parents :</p>
                  <ul className="list-disc pl-5 mb-4">
                    <li><strong>Verbatim :</strong> Questions de sécurité importantes (accès à l'établissement, parking). Mise en place d'un transport scolaire. Vigilance accrue contre le harcèlement.</li>
                  </ul>
                  
                  <p className="font-semibold">Retours des Personnels :</p>
                  <ul className="list-disc pl-5 mb-4 space-y-1">
                    <li><strong>Données quantitatives (Élémentaire) :</strong> 93.8% des personnels estiment qu'il y a "Pas très souvent" de la violence, 6.3% "Plutôt souvent".</li>
                    <li><strong>Données quantitatives (Lycée) :</strong> 76.9% estiment qu'il y a "Pas très souvent" de la violence, 23.1% "Plutôt souvent".</li>
                  </ul>
                  
                  <h4 className="text-xl font-semibold text-french-blue mt-8">Bilan Global de l'ELCS pour le Diagnostic Stratégique</h4>
                  <p>
                    Le Lycée Français Jacques Prévert de Saly présente un climat scolaire contrasté, marqué par des points forts relationnels mais aussi par d'importantes attentes matérielles et des préoccupations liées au bien-être et à la sécurité.
                  </p>
                  
                  <h5 className="text-lg font-medium mt-6">Points Forts :</h5>
                  <ul className="list-disc pl-5 mb-4 space-y-1">
                    <li><strong>Relations avec les Adultes (hors enseignants) et la Vie Scolaire (Lycée) :</strong> Les élèves du lycée expriment une satisfaction élevée, constituant un atout.</li>
                    <li><strong>Ambiance entre Élèves (Lycée) :</strong> Globalement positive, malgré des tensions signalées.</li>
                    <li><strong>Faible Absentéisme lié à la Violence (Lycée) :</strong> Indicateur rassurant sur la sécurité globale ressentie pour venir à l'école.</li>
                    <li><strong>Perception Positive des Relations par les Personnels :</strong> Les personnels, tant à l'élémentaire qu'au lycée, ont une vision globalement positive des relations au sein de l'établissement.</li>
                    <li><strong>Accueil des Parents :</strong> Les parents se sentent majoritairement bien ou très bien accueillis.</li>
                  </ul>
                  
                  <h5 className="text-lg font-medium mt-6">Axes d'Amélioration Prioritaires et Enjeux Clés :</h5>
                  <p className="font-semibold">Confort Matériel et Infrastructures (Tous Niveaux) :</p>
                  <ul className="list-disc pl-5 mb-4 space-y-1">
                    <li><strong>Problématique Majeure :</strong> La demande de climatisation est massive et urgente pour les collégiens (40% des verbatim) et lycéens (53% des verbatim), et soulignée par les parents.</li>
                    <li><strong>Cantine :</strong> Demande très forte et uniforme des parents pour tous les niveaux, et exprimée par les lycéens (11 occurrences).</li>
                    <li><strong>État et Équipement des Bâtiments :</strong> Faible appréciation des bâtiments par les lycéens (33%). Besoins spécifiques à chaque niveau (espaces de jeux au primaire, rénovations au collège, mobilier au lycée, casiers, fontaines à eau). La perception des élèves de l'élémentaire est plus positive (84.8% d'appréciation positive).</li>
                    <li><strong>Uniformes :</strong> Source d'inconfort régulièrement mentionnée par les élèves à tous les niveaux.</li>
                  </ul>
                  
                  <p className="font-semibold">Climat Relationnel et Prise en Charge du Harcèlement (Tous Niveaux) :</p>
                  <ul className="list-disc pl-5 mb-4 space-y-1">
                    <li><strong>Élèves-Enseignants (Lycée) :</strong> Relations perçues comme inférieures à la moyenne nationale, avec des signalements de comportements démotivants.</li>
                    <li><strong>Violence Psychologique et Harcèlement :</strong> Nettement supérieur à la moyenne nationale au lycée. Les retours qualitatifs des élèves et des parents (tous niveaux) convergent sur la nécessité d'une meilleure prise en compte, de prévention et de sanctions. Demande d'écoute et de campagnes de sensibilisation.</li>
                    <li><strong>Soutien Psychologique :</strong> Forte demande des lycéens et collégiens, corroborée par les parents.</li>
                  </ul>
                  
                  <p className="font-semibold">Sécurité et Surveillance (Tous Niveaux) :</p>
                  <ul className="list-disc pl-5 mb-4 space-y-1">
                    <li><strong>Perception d'Insécurité :</strong> Malgré un faible absentéisme lié à la violence, les retours qualitatifs des élèves (notamment lycée) font état de zones (toilettes, vestiaires) et de comportements (agressivité, trafic) générant de l'insécurité.</li>
                    <li><strong>Demandes Parentales :</strong> Sécurisation des accès, parking, transport scolaire.</li>
                  </ul>
                  
                  <p className="font-semibold">Charge de Travail et Organisation Pédagogique (Lycée Principalement) :</p>
                  <ul className="list-disc pl-5 mb-4 space-y-1">
                    <li><strong>Surcharge Ressentie :</strong> Les lycéens critiquent des emplois du temps lourds et une charge de travail excessive, impactant leur intérêt pour les apprentissages. Les parents relaient des préoccupations sur les emplois du temps.</li>
                    <li><strong>Attentes Élevées :</strong> Le public exigeant de l'établissement exprime un fort besoin d'équilibre entre performance et bien-être.</li>
                  </ul>
                  
                  <p className="font-semibold">Écart de Perception :</p>
                  <p>Il existe un écart notable entre la perception globalement positive des relations par les personnels et les difficultés exprimées par les élèves et les parents, notamment concernant le harcèlement et la relation enseignant-élève au lycée.</p>
                  
                  <h4 className="text-xl font-semibold text-french-blue mt-8">Conclusion pour le Plan Stratégique de Développement</h4>
                  <p>
                    Le diagnostic du climat scolaire au LFJP révèle que si l'établissement bénéficie d'un engagement fort de ses personnels non-enseignants et d'une certaine convivialité entre élèves, des investissements et des actions ciblées sont impératifs. Les attentes élevées du public de l'établissement exigent une attention particulière.
                  </p>
                  
                  <p className="mt-4">Les priorités pour le plan stratégique devraient inclure :</p>
                  <ol className="list-decimal pl-5 mb-4 space-y-2">
                    <li><strong>Amélioration Drastique du Cadre de Vie :</strong> Investissement prioritaire dans la climatisation (collège/lycée), la création d'une cantine, la rénovation et l'équipement des locaux (casiers, fontaines, mobilier, espaces extérieurs), et une réflexion sur le confort des uniformes.</li>
                    <li><strong>Renforcement de la Lutte contre le Harcèlement et les Violences :</strong> Mise en place d'un plan d'action concret incluant surveillance accrue dans les zones identifiées, formation des personnels, campagnes de sensibilisation régulières pour élèves et adultes, et un protocole clair de prise en charge des victimes et des auteurs.</li>
                    <li><strong>Amélioration du Soutien et de l'Écoute :</strong> Accroître la présence et l'accessibilité du soutien psychologique, former les enseignants à une communication plus positive et à l'écoute active, notamment pour désamorcer les tensions et répondre aux attentes relationnelles élevées.</li>
                    <li><strong>Optimisation de l'Organisation Scolaire et Pédagogique :</strong> Réflexion sur l'équilibre de la charge de travail, l'aménagement des emplois du temps (surtout au lycée), et les pratiques pédagogiques pour maintenir l'engagement et l'intérêt des élèves, en adéquation avec leurs fortes attentes académiques et de bien-être.</li>
                    <li><strong>Sécurisation de l'Établissement :</strong> Répondre aux demandes des parents concernant la sécurité des accès et envisager des solutions de transport scolaire.</li>
                  </ol>
                  
                  <p>
                    Agir sur ces leviers permettra de répondre aux besoins concrets exprimés par la communauté scolaire et d'améliorer significativement le climat scolaire, condition essentielle à la réussite et à l'épanouissement de chaque élève.
                  </p>
                </div>
                
                <div className="flex justify-center mt-10">
                  <a 
                    href="https://docs.google.com/document/d/1Oc7-swPdjLYQz_Shnm1ZRiqOTVjH0Bbb98kgm7shNVo/edit?usp=sharing" 
                    className="bg-french-blue text-white px-5 py-3 rounded-lg font-medium flex items-center hover:bg-blue-700 transition-colors"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Accéder à la note complète
                  </a>
                </div>
              </TabsContent>
              
              <TabsContent value="psd" className="border-2 border-french-blue/10 rounded-lg p-6 bg-white">
                <h2 className="text-2xl font-playfair font-bold text-french-blue mb-6">
                  Diagnostique PSD
                </h2>
                <p className="text-gray-500 italic">
                  Contenu à venir - Enquête questionnaires PSD
                </p>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Diagnostique;
