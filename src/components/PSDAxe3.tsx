
import React from 'react';
import PSDAxeLayout from './PSDAxeLayout';

const PSDAxe3 = () => {
  const objectifs = [
    { text: 'Garantir un accès équitable et progressif aux compétences numériques, de la maternelle à la terminale (parcours numérique structuré)' },
    { text: 'Développer des compétences critiques, créatives et éthiques dans un monde numérique en évolution constante' },
    { text: 'Permettre aux élèves de comprendre et maîtriser les outils numériques, y compris l\'intelligence artificielle, pour être acteurs et non consommateurs' },
    { text: 'Promouvoir une culture numérique responsable et citoyenne : cybersécurité, droit à l\'image, identité numérique, gestion du temps d\'écran' },
    { text: 'Renforcer la créativité numérique, l\'entrepreneuriat et les projets interconnectés avec le monde professionnel et les enjeux locaux' }
  ];
  
  const actions = [
    { text: 'Élaboration d\'un curriculum numérique spiralaire de la maternelle à la terminale intégrant le référentiel PIX (cycle 3 à terminale)' },
    { text: 'Introduction progressive du code dès le cycle 2, avec consolidation au collège et projets concrets (robotique, applications, jeux éducatifs)' },
    { text: 'Mise en place d\'un module IA au lycée : « comprendre pour maîtriser » (inspiré du guide IA de l\'Éducation nationale)' },
    { text: 'Déploiement d\'une éducation au numérique citoyen (fake news, cyberharcèlement, comportements en ligne, empreinte numérique)' },
    { text: 'Création d\'un laboratoire numérique avec des projets concrets annuels portés par les élèves (ex : site écoresponsable, app solidaire…)' },
    { text: 'Intégration d\'intervenants extérieurs (volontaires internationaux, partenaires tech, artistes numériques…)' },
    { text: 'Élaboration du plan "Un PC par lycéen"', link: '/pc-par-lyceen' },
    { text: 'Amélioration de la connectivité sur l\'ensemble du site' },
    { text: 'Mise en place d\'un plan de renouvellement pluriannuel du matériel informatique' },
    { text: 'Organisation de sorties pédagogiques et immersions dans des structures technologiques de référence au Sénégal (ou à distance)' },
    { text: 'Développement d\'un fonds de soutien ou mécénat numérique pour l\'équipement et la formation' }
  ];
  
  const indicators = [
    { text: 'Taux d\'élèves certifiés PIX par cycle (cycle 4, lycée)' },
    { text: 'Nombre de projets numériques interdisciplinaires par an' },
    { text: 'Taux d\'élèves ayant participé à un projet IA, coding ou cybersécurité' },
    { text: 'Taux de lycéens équipés en matériel personnel (objectif 1 PC par lycéen)' },
    { text: 'Taux de couverture WiFi / vitesse de connectivité par zone du lycée' },
    { text: 'Taux de satisfaction numérique dans les enquêtes' },
    { text: 'Nombre de partenariats/mécénats liés au numérique éducatif' }
  ];

  return (
    <PSDAxeLayout 
      title="AXE 3 – DIGITAL, NUMÉRIQUE, INNOVATION TECHNOLOGIQUE"
      subtitle="Cultiver la sensibilité, la créativité, la citoyenneté et l'agilité numérique"
      objectifs={objectifs}
      actions={actions}
      indicators={indicators}
    />
  );
};

export default PSDAxe3;
