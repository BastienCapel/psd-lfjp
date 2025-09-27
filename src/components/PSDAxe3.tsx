
import React from 'react';
import PSDAxeLayout from './PSDAxeLayout';

const PSDAxe3 = () => {
  const objectifs = [
    { text: "Structurer un parcours numérique continu et équitable, de l’élémentaire à la terminale." },
    { text: "Développer l’esprit critique, la créativité et la responsabilité citoyenne dans l’usage du numérique et de l’intelligence artificielle." },
    { text: "Favoriser l’innovation, l’entrepreneuriat et les projets numériques connectés au monde professionnel et aux enjeux locaux." }
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
    {
      text: 'Développement d\'un <strong>fonds de soutien ou mécénat numérique</strong> pour l\'équipement et la formation',
      link: '/mecenat-numerique',
      linkAriaLabel: 'Consulter la fiche-action Mécénat numérique'
    }
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
