
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
    { text: '<strong>Plan de modernisation du cadre bâti</strong> : <strong>audit thermique</strong>, <strong>plan de climatisation progressive</strong> (priorité aux salles les plus exposées), rénovation des toilettes et vestiaires, végétalisation et création d\'espaces ombragés ("<strong>cours oasis</strong>")' },
    { text: 'Déploiement d\'un <strong>parcours santé-bien-être</strong> : hygiène, alimentation, activité physique, santé mentale, gestion des émotions' },
    { text: 'Poursuite du <strong>plan de prévention du harcèlement</strong> et de la violence, avec <strong>médiateurs élèves</strong>, pratiques restauratives, programme <strong>pHARe</strong>', link: '/protocole-phare' },
    { text: 'Renforcement de <strong>dispositifs d\'expression et de participation</strong> : conseils de vie lycéenne et collégienne renforcés, <strong>budgets participatifs</strong> d\'embellissement, boîtes à idées, comités mixtes' },
    { text: 'Accompagnement à la <strong>parentalité et coéducation</strong> : temps de rencontre informels, ateliers pour mieux suivre la scolarité' },
    { text: 'Lancement progressif d\'un <strong>service de restauration scolaire</strong>, avec audit qualitatif, étude d\'impact économique, consultation des usagers, et mise en œuvre en 2026-2027', link: '/construction-cantine' },
    { text: 'Structuration d\'une <strong>politique E3D consolidée</strong>, incluant :<br/>• des <strong>référents E3D</strong> par cycle et des <strong>éco-délégués actifs</strong><br/>• un <strong>comité de pilotage E3D</strong> ouvert à tous les acteurs (élèves, parents, personnels, partenaires locaux)<br/>• des <strong>projets pédagogiques interdisciplinaires</strong> intégrant les <strong>ODD</strong> (Objectifs de Développement Durable)<br/>• la formalisation d\'un <strong>plan d\'action annuel E3D</strong> aligné avec le référentiel <strong>EFE3D</strong>' }
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
