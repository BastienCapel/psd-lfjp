
import React from 'react';
import { GraduationCap, HandCoins, Laptop, Wifi } from 'lucide-react';
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
              <strong>La classe numérique mobile</strong>
            </>
          ),
          link: '/classe-numerique',
          linkAriaLabel: 'Consulter la fiche classe numérique mobile',
          linkIcon: Laptop
        },
        {
          content: (
            <>
              <strong>Plan de renouvellement pluriannuel du matériel informatique</strong>
            </>
          ),
          link: '/plan-maintenance-strategique#informatique',
          linkAriaLabel: 'Découvrir le plan de renouvellement du matériel informatique',
          linkIcon: Laptop
        },
        {
          content: (
            <>
              <strong>Plan 1 PC par lycéen</strong>
            </>
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
              <strong>Curriculum numérique spiralaire</strong>
            </>
          ),
          link: '/curriculum-numerique-spiralaire',
          linkAriaLabel: 'Consulter la page Curriculum numérique spiralaire',
          linkIcon: GraduationCap
        },
        {
          content: <>Introduction au code</>,
          link: '/introduction-au-code',
          linkAriaLabel: 'Découvrir l\'introduction au code',
          linkIcon: GraduationCap
        },
        {
          content: <>Module IA</>,
          link: '/module-ia',
          linkAriaLabel: 'Consulter le module IA',
          linkIcon: GraduationCap
        },
        {
          content: <>Éducation au numérique citoyen</>,
          link: '/education-numerique-citoyen',
          linkAriaLabel: 'Découvrir l\'éducation au numérique citoyen',
          linkIcon: GraduationCap
        }
      ]
    },
    {
      title: 'Établissement digitalisé et partenariats',
      items: [
        {
          content: (
            <>
              <strong>Connectivité 2.0</strong>
            </>
          ),
          link: '/connectivite-2-0',
          linkAriaLabel: 'Consulter la fiche Connectivité 2.0',
          linkIcon: Wifi
        },
        {
          content: <>Profil digital du LFJP</>
        },
        {
          content: <>Laboratoire numérique</>
        },
        {
          content: (
            <>
              <strong>Mécénat numérique</strong>
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
