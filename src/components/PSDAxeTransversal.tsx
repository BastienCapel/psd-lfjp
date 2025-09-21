import React from 'react';
import {
  Calculator,
  Megaphone,
  MessageCircle,
  Presentation,
  Wrench,
} from 'lucide-react';
import PSDAxeLayout from './PSDAxeLayout';

const PSDAxeTransversal = () => {
  const summary = {
    objectives: [
      { icon: '📊', label: 'Pilotage agile' },
      { icon: '🤝', label: 'Engagement collectif' },
      { icon: '🏗️', label: 'Maintenance durable' },
    ],
    actions: [
      {
        label: 'Simulation financière annuelle',
        icon: Calculator,
        iconClassName: 'text-cyan-700',
      },
      {
        label: 'Tableaux de bord partagés',
        icon: Presentation,
        iconClassName: 'text-sky-600',
      },
      {
        label: 'Communication continue',
        icon: Megaphone,
        iconClassName: 'text-cyan-600',
      },
      {
        label: 'Espaces d\'échange',
        icon: MessageCircle,
        iconClassName: 'text-cyan-500',
      },
      {
        label: 'Plan maintenance stratégique',
        icon: Wrench,
        iconClassName: 'text-emerald-600',
        link: '/plan-maintenance-strategique',
        linkAriaLabel: 'En savoir plus – Plan de maintenance stratégique',
      },
    ],
    indicators: [
      { label: 'Pilotage du plan', value: 'Bilans semestriels' },
      { label: 'Rencontres communautaires', value: '≥ 4/an' },
      { label: 'Plan maintenance', value: 'Diffusé & suivi' },
    ],
  };

  const objectifs = [
    { text: 'Garantir une mise en œuvre efficace, évaluée et communiquée du plan' },
    { text: 'Renforcer la cohésion des équipes et la solidarité communautaire' },
    { text: 'Utiliser les enquêtes ELCS comme référence pour piloter le PSD' },
    { text: 'Plan d\'entretien de l\'immobilier' },
    { text: 'Plan d\'entretien et de renouvellement du mobilier' },
  ];

  const actions = [
    { text: 'Simulation financière annuelle présentée en conseil d\'établissement' },
    { text: 'Tableaux de bord thématiques et bilans de mi-parcours' },
    { text: 'Développement de supports de communication' },
    { text: 'Organisation d\'espaces d\'échange pour renforcer le sentiment d\'appartenance' },
    {
      text: 'Plan de maintenance stratégique',
      link: '/plan-maintenance-strategique',
      linkAriaLabel: 'En savoir plus – Plan de maintenance stratégique',
      linkIcon: Wrench,
    },
  ];

  const indicators = [
    { text: 'Taux d\'atteinte des objectifs du plan par axe' },
    { text: 'Participation aux instances de pilotage' },
    { text: 'Indice de sentiment d\'appartenance' },
    { text: 'Évolution des indicateurs issus des enquêtes ELCS' },
  ];

  return (
    <PSDAxeLayout
      axeId={5}
      title="AXE TRANSVERSAL – PILOTAGE, GOUVERNANCE ET VIABILITÉ"
      subtitle="" 
      summary={summary}
      objectifs={objectifs}
      actions={actions}
      indicators={indicators}
    />
  );
};

export default PSDAxeTransversal;
