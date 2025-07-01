
import React from 'react';
import PSDAxeLayout from './PSDAxeLayout';

const PSDAxe3 = () => {
  const objectifs = [
    { text: 'Favoriser un accès égal à la culture pour tous les élèves' },
    { text: 'Renforcer les compétences artistiques, expressives et esthétiques' },
    { text: 'Valoriser la diversité culturelle, locale et internationale' }
  ];
  
  const actions = [
    { text: 'Déploiement des trois piliers du PEAC' },
    { text: 'Intégration d\'artistes sénégalais dans les projets' },
    { text: 'Ateliers pluridisciplinaires croisant arts, langues et sciences' }
  ];
  
  const indicators = [
    { text: 'Nombre de projets PEAC par cycle' },
    { text: 'Diversité des domaines artistiques abordés' },
    { text: 'Taux de participation aux sorties et ateliers culturels' }
  ];

  return (
    <PSDAxeLayout 
      title="AXE 3 – DIGITAL, NUMÉRIQUE, INNOVATION TECHNOLOGIQUE"
      subtitle="Cultiver la sensibilité, la créativité et l'ouverture"
      objectifs={objectifs}
      actions={actions}
      indicators={indicators}
    />
  );
};

export default PSDAxe3;
