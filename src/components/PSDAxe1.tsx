
import React from 'react';
import PSDAxeLayout from './PSDAxeLayout';

const PSDAxe1 = () => {
  const objectifs = [
    { text: 'Améliorer les conditions matérielles de santé et d\'hygiène' },
    { text: 'Promouvoir une culture de la prévention et du bien-être physique, mental et social' },
    { text: 'Renforcer les compétences psychosociales' }
  ];
  
  const actions = [
    { text: 'Audit thermique des locaux, plan de climatisation, rénovation des sanitaires' },
    { text: 'Lancement d\'un projet de construction d\'une cantine scolaire' },
    { text: 'Poursuite des travaux d\'amélioration de l\'acoustique', link: '/amelioration-acoustique' },
    { text: 'Programme d\'éducation à la santé' }
  ];
  
  const indicators = [
    { text: 'Taux de satisfaction sanitaire (enquêtes)' },
    { text: 'Taux de satisfaction concernant la restauration scolaire' },
    { text: 'Nombre d\'actions de promotion santé menées par cycle' }
  ];

  return (
    <PSDAxeLayout 
      title="AXE 1 – PARCOURS SANTÉ"
      subtitle="Un cadre de vie sain, sûr et bienveillant"
      objectifs={objectifs}
      actions={actions}
      indicators={indicators}
    />
  );
};

export default PSDAxe1;
