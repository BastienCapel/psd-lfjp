
import React from 'react';
import { HandCoins, Laptop } from 'lucide-react';
import PSDAxeLayout from './PSDAxeLayout';

const PSDAxe3 = () => {
  const objectifs = [
    {
      content: <>Structurer un parcours numérique continu et équitable, de l’élémentaire à la terminale.</>
    },
    {
      content: (
        <>Développer l’esprit critique, la créativité et la responsabilité citoyenne dans l’usage du numérique et de l’intelligence artificielle.</>
      )
    },
    {
      content: (
        <>Favoriser l’innovation, l’entrepreneuriat et les projets numériques connectés au monde professionnel et aux enjeux locaux.</>
      )
    }
  ];
  
  const actionSections = [
    {
      title: 'Infrastructures et équipements',
      items: [
        {
          content: (
            <>
              Déploiement de la <strong>classe numérique</strong> (<em>équipements mobiles, tableaux interactifs, espaces modulables</em>)
            </>
          )
        },
        {
          content: (
            <>Mise en place d'un <strong>plan de renouvellement</strong> pluriannuel du matériel informatique</>
          )
        },
        {
          content: (
            <>Plan « <strong>1 PC par lycéen</strong> »</>
          ),
          link: '/pc-par-lyceen',
          linkAriaLabel: 'En savoir plus – Un PC par lycéen',
          linkIcon: Laptop
        }
      ]
    },
    {
      title: 'Pédagogie et compétences',
      items: [
        {
          content: (
            <>
              Élaboration d'un <strong>curriculum numérique spiralaire</strong> de l'élémentaire à la terminale intégrant le{' '}
              <strong>référentiel PIX</strong> (<em>cycle 3 à terminale</em>)
            </>
          )
        },
        {
          content: (
            <>
              Introduction progressive du <strong>code</strong> dès le cycle 2, avec consolidation au collège et projets concrets{' '}
              (<em>robotique, applications, jeux éducatifs</em>)
            </>
          )
        },
        {
          content: (
            <>
              Mise en place d'un <strong>module IA</strong> au lycée : « <em>comprendre pour maîtriser</em> » (<em>inspiré du guide
              IA de l'Éducation nationale</em>)
            </>
          )
        },
        {
          content: (
            <>
              Déploiement d'une <strong>éducation au numérique citoyen</strong> (<em>fake news, cyberharcèlement, comportements en
              ligne, empreinte numérique</em>)
            </>
          )
        },
        {
          content: (
            <>
              Organisation de <strong>sorties pédagogiques</strong> et d'immersions dans des <strong>structures technologiques de référence</strong>
            </>
          )
        }
      ]
    },
    {
      title: 'Établissement digitalisé et partenariats',
      items: [
        {
          content: (
            <>
              Programme <strong>Connectivité 2.0</strong> pour une couverture Wi-Fi haut débit sur l'ensemble du campus
            </>
          )
        },
        {
          content: (
            <>
              Construction du <strong>profil digital du LFJP</strong> (<em>communication, identité et présence en ligne</em>)
            </>
          )
        },
        {
          content: (
            <>
              Création d'un <strong>laboratoire numérique</strong> avec des <strong>projets concrets annuels</strong> portés par les élèves
            </>
          )
        },
        {
          content: (
            <>
              <strong>Fonds de mécénat numérique</strong> pour l'équipement et la formation
            </>
          ),
          link: '/mecenat-numerique',
          linkAriaLabel: 'Consulter la fiche-action Mécénat numérique',
          linkIcon: HandCoins
        }
      ]
    }
  ];
  
  const indicators = [
    {
      content: (
        <>Taux d'élèves <strong>certifiés PIX</strong> par cycle (<em>cycle 4, lycée</em>)</>
      )
    },
    {
      content: <>Nombre de <strong>projets numériques interdisciplinaires</strong> par an</>
    },
    {
      content: (
        <>Taux d'élèves ayant participé à un projet <strong>IA, coding</strong> ou <strong>cybersécurité</strong></>
      )
    },
    {
      content: (
        <>Taux de <strong>lycéens équipés en matériel personnel</strong> (<em>objectif 1 PC par lycéen</em>)</>
      )
    },
    {
      content: (
        <>Taux de <strong>couverture WiFi / vitesse de connectivité</strong> par zone du lycée</>
      )
    },
    {
      content: <>Taux de <strong>satisfaction numérique</strong> dans les enquêtes</>
    },
    {
      content: (
        <>Nombre de <strong>partenariats/mécénats</strong> liés au <strong>numérique éducatif</strong></>
      )
    }
  ];

  return (
    <PSDAxeLayout 
      title="AXE 3 – DIGITAL, NUMÉRIQUE, INNOVATION TECHNOLOGIQUE"
      subtitle="Cultiver la sensibilité, la créativité, la citoyenneté et l'agilité numérique"
      objectifs={objectifs}
      actionSections={actionSections}
      indicators={indicators}
    />
  );
};

export default PSDAxe3;
