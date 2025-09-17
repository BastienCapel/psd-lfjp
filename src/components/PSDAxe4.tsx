
import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import PSDAxeLayout from './PSDAxeLayout';

const PSDAxe4 = () => {
  const objectifs = [
    { text: 'Maintenir le <strong>niveau d\'excellence</strong> et poursuivre la montée en puissance de la <strong>réussite aux examens</strong>' },
    { text: 'Développer les <strong>compétences psychosociales et humaines</strong> des élèves (<strong>soft skills</strong>) : prise de parole, coopération, gestion de l\'échec, résilience, esprit critique, engagement citoyen' },
    { text: 'Encourager l\'<strong>autonomie</strong>, la <strong>persévérance</strong> et la capacité à s\'orienter de manière éclairée' },
    { text: 'Valoriser toutes les formes de <strong>réussite</strong> : scolaire, artistique, humaine, citoyenne, collective' },
    { text: 'Faire du <strong>LFJP une école de la confiance et du rebond</strong> : apprendre à apprendre, à s\'adapter, à se relever' },
    { text: 'Renforcer les liens avec les <strong>anciens élèves (alumni)</strong> et créer une <strong>communauté intergénérationnelle</strong> inspirante' },
    { text: 'Impliquer pleinement les <strong>familles</strong> dans les parcours de réussite des élèves' }
  ];
  
  const actions = [
    { text: '<strong>Développement des compétences transversales (soft skills)</strong> :<br/>• Modules sur l\'<strong>expression orale</strong>, l\'<strong>estime de soi</strong>, la <strong>gestion du stress</strong>, la <strong>pensée critique</strong><br/>• <strong>Clubs théâtre, débat, journalisme, leadership</strong><br/>• Pratique de l\'<strong>éloquence au collège et au lycée</strong>' },
    { text: '<strong>Valorisation de l\'erreur et de la persévérance</strong> :<br/>• <strong>Pédagogies explicites</strong> sur l\'erreur constructive<br/>• <strong>Interventions d\'anciens élèves</strong> autour de leurs parcours<br/>• Programme « <strong>Cultiver l\'audace</strong> » valorisant les initiatives étudiantes' },
    { text: '<strong>Parcours de la Réussite citoyenne</strong> :<br/>• <strong>Projets solidaires et participatifs</strong> (ex. budgets participatifs)<br/>• Modules de formation à l\'<strong>engagement citoyen</strong>' },
    { text: '<strong>Éducation financière et à la vie autonome</strong> :<br/>• Ateliers sur la <strong>gestion budgétaire</strong> et la <strong>vie étudiante post-bac</strong><br/>• Interventions de <strong>professionnels et parents volontaires</strong>' },
    { text: '<strong>Réseau d\'alumni et mentorat</strong> :<br/>• Constitution d\'une <strong>base de données d\'anciens élèves</strong><br/>• <strong>Mentorat lycéens / alumni</strong><br/>• Rubrique « <strong>Les Oiseaux de Passage</strong> » valorisée dans la communication interne' },
    { text: '<strong>Soutien à l\'orientation</strong> :<br/>• <strong>Accompagnement personnalisé</strong> dans le cadre du Parcours Avenir<br/>• <strong>Stages, forums métiers, espace orientation</strong>' }
  ];
  
  const indicators = [
    { text: '<strong>% des élèves participant</strong> à un <strong>club citoyen, débat, théâtre, journal</strong> (≥ <strong>80 % collège/lycée</strong>)' },
    { text: '<strong>% d\'élèves déclarant</strong> « <strong>savoir rebondir après un échec</strong> » (via enquête climat) (<strong>+15 pts</strong> par rapport à 2024)' },
    { text: '<strong>% d\'élèves impliqués</strong> dans un <strong>projet citoyen ou solidaire</strong> (<strong>100 % cycle 4 et lycée</strong>)' },
    { text: '<strong>% d\'élèves accompagnés individuellement</strong> en terminale (<strong>100 %</strong>)' },
    { text: '<strong>Nombre d\'alumni mobilisés</strong> par an (≥ <strong>30 dès 2027</strong>)' },
    { text: '<strong>Taux de satisfaction</strong> sur l\'accompagnement à la réussite (enquêtes) (≥ <strong>90 %</strong>)' }
  ];

  return (
    <PSDAxeLayout 
      title="AXE 4 – FAÇONNER LES RÉUSSITES"
      subtitle="Accompagner chaque élève dans son développement personnel, scolaire et citoyen, pour une réussite complète, durable et équilibrée"
      objectifs={objectifs}
      actions={actions}
      indicators={indicators}
    />
  );
};

export default PSDAxe4;
