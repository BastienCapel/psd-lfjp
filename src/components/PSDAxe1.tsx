
import React from 'react';
import PSDAxeLayout from './PSDAxeLayout';

const PSDAxe1 = () => {
  const objectifs = [
    { text: 'Garantir un environnement scolaire sain, sûr et agréable pour tous (locaux, climatisation, sanitaires, espaces extérieurs)' },
    { text: 'Développer une culture du bien-être physique, mental, social et environnemental au sein de la communauté éducative' },
    { text: 'Détecter et accompagner les besoins particuliers des élèves (troubles d\'apprentissage, besoins éducatifs spécifiques…)' },
    { text: 'Favoriser les relations de confiance et la coopération entre élèves, familles et personnels' },
    { text: 'Responsabiliser les élèves dans la vie de l\'établissement (écocitoyenneté, co-gestion, entraide)' },
    { text: 'Améliorer la qualité des services (restauration, transport, hygiène), en réponse aux attentes des familles' },
    { text: 'Consolider le climat scolaire en rendant visibles les règles, les valeurs et les actions éducatives' },
    { text: 'Pérenniser l\'engagement du LFJP en matière de développement durable en renforçant la dynamique E3D.' }
  ];
  
  const actions = [
    { text: 'Plan de modernisation du cadre bâti : audit thermique, plan de climatisation progressive (priorité aux salles les plus exposées), rénovation des toilettes et vestiaires, végétalisation et création d\'espaces ombragés ("cours oasis")' },
    { text: 'Plan Pluriannuel de Roulement de Peinture et de Ravalement des Façades (2025-2030)', link: '/plan-peinture-ravalement' },
    { text: 'Poursuite des travaux d\'amélioration de l\'acoustique', link: '/amelioration-acoustique' },
    { text: 'Déploiement d\'un parcours santé-bien-être : hygiène, alimentation, activité physique, santé mentale, gestion des émotions' },
    { text: 'Mise en place d\'une cellule de détection et d\'orientation des troubles d\'apprentissage (type GPDS)' },
    { text: 'Poursuite du plan de prévention du harcèlement et de la violence, avec médiateurs élèves, pratiques restauratives, programme pHARe' },
    { text: 'Renforcement de dispositifs d\'expression et de participation : conseils de vie lycéenne et collégienne renforcés, budgets participatifs d\'embellissement, boîtes à idées, comités mixtes' },
    { text: 'Accompagnement à la parentalité et coéducation : temps de rencontre informels, ateliers pour mieux suivre la scolarité' },
    { text: 'Lancement progressif d\'un service de restauration scolaire, avec audit qualitatif, étude d\'impact économique, consultation des usagers, et mise en œuvre en 2026-2027' },
    { text: 'Structuration d\'une politique E3D consolidée, incluant :<br/>• des référents E3D par cycle et des éco-délégués actifs<br/>• un comité de pilotage E3D ouvert à tous les acteurs (élèves, parents, personnels, partenaires locaux)<br/>• des projets pédagogiques interdisciplinaires intégrant les ODD (Objectifs de Développement Durable)<br/>• la formalisation d\'un plan d\'action annuel E3D aligné avec le référentiel EFE3D' }
  ];
  
  const indicators = [
    { text: 'Taux d\'élèves se déclarant « bien au LFJP » (objectif : +15 pts au lycée)' },
    { text: 'Taux de satisfaction sur la climatisation, les sanitaires, la cantine (élèves et parents)' },
    { text: 'Nombre de familles accompagnées dans le cadre de dispositifs de soutien à la parentalité' },
    { text: 'Taux d\'élèves bénéficiant d\'un aménagement ou d\'un accompagnement pédagogique' },
    { text: 'Avancement du plan de restauration scolaire (étapes validées)' },
    { text: 'Taux de satisfaction global sur le climat scolaire (par enquête ELCS)' },
    { text: 'Nombre de projets E3D portés par cycle' },
    { text: 'Maintien du label EFE3D niveau 3 à chaque renouvellement triennal' }
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
