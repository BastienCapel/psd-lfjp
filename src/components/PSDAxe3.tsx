
import React from 'react';
import PSDAxeLayout from './PSDAxeLayout';

const PSDAxe3 = () => {
  const objectifs = [
    { text: 'Garantir un accès équitable et progressif aux <strong>compétences numériques</strong>, de l\'élémentaire à la terminale (<em>parcours numérique structuré</em>)' },
    { text: 'Développer des <strong>compétences critiques, créatives et éthiques</strong> dans un monde numérique en évolution constante' },
    { text: 'Permettre aux élèves de <strong>comprendre et maîtriser les outils numériques</strong>, y compris l\'<strong>intelligence artificielle</strong>, pour être <strong>acteurs et non consommateurs</strong>' },
    { text: 'Promouvoir une <strong>culture numérique responsable et citoyenne</strong> : <em>cybersécurité, droit à l\'image, identité numérique, gestion du temps d\'écran</em>' },
    { text: 'Renforcer la <strong>créativité numérique</strong>, l\'<strong>entrepreneuriat</strong> et les <strong>projets interconnectés avec le monde professionnel</strong> et les <strong>enjeux locaux</strong>' }
  ];
  
  const actions = [
    { text: 'Élaboration d\'un <strong>curriculum numérique spiralaire</strong> de l\'élémentaire à la terminale intégrant le <strong>référentiel PIX</strong> (<em>cycle 3 à terminale</em>)' },
    { text: 'Introduction progressive du <strong>code</strong> dès le cycle 2, avec consolidation au collège et projets concrets (<em>robotique, applications, jeux éducatifs</em>)' },
    { text: 'Mise en place d\'un <strong>module IA</strong> au lycée : « <em>comprendre pour maîtriser</em> » (<em>inspiré du guide IA de l\'Éducation nationale</em>)' },
    { text: 'Déploiement d\'une <strong>éducation au numérique citoyen</strong> (<em>fake news, cyberharcèlement, comportements en ligne, empreinte numérique</em>)' },
    { text: 'Création d\'un <strong>laboratoire numérique</strong> avec des <strong>projets concrets annuels</strong> portés par les élèves (<em>ex : site écoresponsable, app solidaire…</em>)' },
    { text: 'Intégration d\'<strong>intervenants extérieurs</strong> (<em>volontaires internationaux, partenaires tech, artistes numériques…</em>)' },
    { text: 'Élaboration du plan "<strong>Un PC par lycéen</strong>"', link: '/pc-par-lyceen' },
    { text: '<strong>Amélioration de la connectivité</strong> sur l\'ensemble du site' },
    { text: 'Mise en place d\'un <strong>plan de renouvellement</strong> pluriannuel du matériel informatique' },
    { text: 'Organisation de <strong>sorties pédagogiques</strong> et immersions dans des <strong>structures technologiques de référence au Sénégal</strong> (<em>ou à distance</em>)' },
    { text: 'Développement d\'un <strong>fonds de soutien ou mécénat numérique</strong> pour l\'équipement et la formation' }
  ];
  
  const indicators = [
    { text: 'Taux d\'élèves <strong>certifiés PIX</strong> par cycle (<em>cycle 4, lycée</em>)' },
    { text: 'Nombre de <strong>projets numériques interdisciplinaires</strong> par an' },
    { text: 'Taux d\'élèves ayant participé à un projet <strong>IA, coding</strong> ou <strong>cybersécurité</strong>' },
    { text: 'Taux de <strong>lycéens équipés en matériel personnel</strong> (<em>objectif 1 PC par lycéen</em>)' },
    { text: 'Taux de <strong>couverture WiFi / vitesse de connectivité</strong> par zone du lycée' },
    { text: 'Taux de <strong>satisfaction numérique</strong> dans les enquêtes' },
    { text: 'Nombre de <strong>partenariats/mécénats</strong> liés au <strong>numérique éducatif</strong>' }
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
