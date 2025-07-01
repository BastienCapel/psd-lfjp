
import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import PSDAxeLayout from './PSDAxeLayout';

const PSDAxe4 = () => {
  const objectifs = [
    { text: 'Accompagner l\'orientation et la construction du projet personnel' },
    { text: 'Favoriser l\'autonomie et la responsabilité des élèves' },
    { text: 'Intégrer les compétences numériques et l\'IA comme leviers d\'émancipation' },
    { text: 'Valoriser le plurilinguisme comme atout' }
  ];
  
  const actions = [
    { 
      text: 'Déploiement du plan « Section Internationale et BFI » (2026-2033)',
      link: '/section-internationale-bfi'
    },
    { text: 'Déploiement d\'outils de découverte des métiers' },
    { text: 'Modules d\'accompagnement à l\'autonomie' },
    { text: 'Séances d\'orientation coanimées' }
  ];
  
  const indicators = [
    { text: 'Nombre de candidatures en section internationale' },
    { text: 'Taux de participation aux actions d\'orientation' },
    { text: 'Progrès dans l\'autonomie (questionnaires d\'autoévaluation)' },
    { text: 'Projets multilingues valorisés' }
  ];

  return (
    <PSDAxeLayout 
      title="AXE 4 – FORGER LES RÉUSSITES"
      subtitle="Préparer les élèves aux enjeux de demain"
      objectifs={objectifs}
      actions={actions}
      indicators={indicators}
    />
  );
};

export default PSDAxe4;
