
import React from 'react';
import PSDAxeLayout from './PSDAxeLayout';

const PSDAxe1 = () => {
  const objectifs = [
    { text: 'Garantir un <strong>environnement scolaire sain, sûr et agréable</strong> pour tous (locaux, climatisation, sanitaires, espaces extérieurs)' },
    { text: 'Développer une <strong>culture du bien-être</strong> physique, mental, social et environnemental au sein de la communauté éducative' },
    { text: 'Détecter et accompagner les <strong>besoins particuliers</strong> des élèves (<strong>troubles d\'apprentissage</strong>, besoins éducatifs spécifiques…)' },
    { text: 'Favoriser les <strong>relations de confiance</strong> et la <strong>coopération</strong> entre élèves, familles et personnels' },
    { text: '<strong>Responsabiliser les élèves</strong> dans la vie de l\'établissement (<strong>écocitoyenneté</strong>, co-gestion, entraide)' },
    { text: 'Améliorer la <strong>qualité des services</strong> (restauration, transport, hygiène), en réponse aux attentes des familles' },
    { text: 'Consolider le <strong>climat scolaire</strong> en rendant visibles les règles, les valeurs et les actions éducatives' },
    { text: 'Pérenniser l\'engagement du LFJP en matière de <strong>développement durable</strong> en renforçant la dynamique <strong>E3D</strong>.' }
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
