
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
    { text: '<strong>Plan de modernisation du cadre bâti</strong> : <strong>audit thermique</strong>, <strong>plan de climatisation progressive</strong> (priorité aux salles les plus exposées), rénovation des toilettes et vestiaires, végétalisation et création d\'espaces ombragés ("<strong>cours oasis</strong>")' },
    { text: '<strong>Plan Pluriannuel de Roulement de Peinture et de Ravalement des Façades</strong> (2025-2030)', link: '/plan-peinture-ravalement' },
    { text: 'Poursuite des travaux d\'<strong>amélioration de l\'acoustique</strong>', link: '/amelioration-acoustique' },
    { text: 'Déploiement d\'un <strong>parcours santé-bien-être</strong> : hygiène, alimentation, activité physique, santé mentale, gestion des émotions' },
    { text: 'Mise en place d\'une <strong>cellule de détection et d\'orientation</strong> des <strong>troubles d\'apprentissage</strong> (type GPDS)' },
    { text: 'Poursuite du <strong>plan de prévention du harcèlement</strong> et de la violence, avec <strong>médiateurs élèves</strong>, pratiques restauratives, programme <strong>pHARe</strong>' },
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
