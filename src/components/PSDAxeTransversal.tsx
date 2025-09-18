
import React from 'react';
import PSDAxeLayout from './PSDAxeLayout';

const PSDAxeTransversal = () => {
  const objectifs = [
    { text: 'Garantir une mise en œuvre efficace, évaluée et communiquée du plan' },
    { text: 'Renforcer la cohésion des équipes et la solidarité communautaire' },
    { text: 'Utiliser les enquêtes ELCS comme référence pour piloter le PSD' },
    { text: 'Plan d\'entretien de l\'immobilier' },
    { text: 'Plan d\'entretien et de renouvellement du mobilier' }
  ];
  
  const actions = [
    { text: 'Simulation financière annuelle présentée en conseil d\'établissement' },
    { text: 'Tableaux de bord thématiques et bilans de mi-parcours' },
    { text: 'Développement de supports de communication' },
    { text: 'Organisation d\'espaces d\'échange pour renforcer le sentiment d\'appartenance' },
    { text: 'Plan Pluriannuel de Roulement de Peinture et de Ravalement des Façades (2025-2030)', link: '/plan-peinture-ravalement' },
    { text: 'Plan de maintenance stratégique', link: '/plan-maintenance-strategique' }
  ];
  
  const indicators = [
    { text: 'Taux d\'atteinte des objectifs du plan par axe' },
    { text: 'Participation aux instances de pilotage' },
    { text: 'Indice de sentiment d\'appartenance' },
    { text: 'Évolution des indicateurs issus des enquêtes ELCS' }
  ];

  return (
    <PSDAxeLayout 
      title="AXE TRANSVERSAL – PILOTAGE, GOUVERNANCE ET VIABILITÉ"
      subtitle=""
      objectifs={objectifs}
      actions={actions}
      indicators={indicators}
    />
  );
};

export default PSDAxeTransversal;
