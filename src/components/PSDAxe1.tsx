
import React from 'react';
import PSDAxeLayout from './PSDAxeLayout';

const PSDAxe1 = () => {
  const objectifs = [
    {
      text:
        '<strong>Bien-être et accompagnement des élèves</strong> : Garantir un <strong>environnement scolaire sain, climatisé et agréable</strong>, développer une <strong>culture du bien-être physique, mental, social et environnemental</strong> et répondre aux <strong>besoins particuliers des élèves</strong>.'
    },
    {
      text:
        '<strong>Climat scolaire et coopération éducative</strong> : Renforcer la <strong>confiance et la coopération</strong> entre élèves, familles et personnels, <strong>responsabiliser les élèves</strong> dans la vie de l\'établissement et consolider un <strong>climat scolaire</strong> fondé sur des règles et des valeurs partagées.'
    },
    {
      text:
        '<strong>Qualité et durabilité des services</strong> : Améliorer la <strong>qualité des services</strong> (restauration, transport, hygiène) et pérenniser l\'engagement du LFJP en matière de <strong>développement durable</strong> dans la dynamique <strong>E³D</strong>.'
    }
  ];
  
  const actions = [
    { text: '<strong>Rafraîchissement durable des salles</strong> : <strong>plan de climatisation progressive</strong> et solutions écologiques (ombrages, végétalisation, rénovation)' },
    { text: '<strong>Parcours santé-bien-être</strong> : hygiène, alimentation, activité physique et <strong>équilibre mental</strong>' },
    { text: '<strong>Prévention du harcèlement</strong> : <strong>médiateurs élèves</strong>, pratiques restauratives, programme <strong>pHARe</strong>', link: '/protocole-phare' },
    { text: '<strong>Expression et participation</strong> : conseils de vie, <strong>budgets participatifs</strong>, comités mixtes' },
    { text: '<strong>Parentalité et coéducation</strong> : rencontres et ateliers pour mieux suivre la scolarité' },
    { text: '<strong>Restauration scolaire</strong> : audit, consultation des usagers, mise en œuvre 2026-2027', link: '/construction-cantine' },
    { text: 'Politique <strong>E³D</strong> consolidée : <strong>référents</strong> et <strong>éco-délégués</strong>, comité de pilotage, projets interdisciplinaires, plan d\'action annuel aligné <strong>EFE³D</strong>' }
  ];
  
  const indicators = [
    { text: '<strong>Taux d\'élèves</strong> se déclarant « <strong>bien au LFJP</strong> » (objectif : <strong>+15 pts</strong> au lycée)' },
    { text: '<strong>Taux de satisfaction</strong> sur la climatisation, les sanitaires, la cantine (élèves et parents)' },
    { text: '<strong>Nombre de familles accompagnées</strong> dans le cadre de dispositifs de soutien à la parentalité' },
    { text: '<strong>Taux d\'élèves</strong> bénéficiant d\'un <strong>aménagement</strong> ou d\'un <strong>accompagnement pédagogique</strong>' },
    { text: '<strong>Avancement du plan de restauration scolaire</strong> (étapes validées)' },
    { text: '<strong>Taux de satisfaction global</strong> sur le <strong>climat scolaire</strong> (par enquête ELCS)' },
    { text: '<strong>Nombre de projets E3D</strong> portés par cycle' },
    { text: 'Maintien du <strong>label EFE3D niveau 3</strong> à chaque renouvellement triennal' }
  ];

  return (
    <PSDAxeLayout 
      title="AXE 1 – BIEN-ÊTRE ET EXPÉRIENCE DE LA COMMUNAUTÉ ÉDUCATIVE"
      subtitle="Renforcer un cadre scolaire propice à l'épanouissement, à l'inclusion et à la cohésion"
      objectifs={objectifs}
      actions={actions}
      indicators={indicators}
    />
  );
};

export default PSDAxe1;
