import React from 'react';
import { Globe2, Handshake, Palette } from 'lucide-react';
import PSDAxeLayout from './PSDAxeLayout';

const PSDAxe2 = () => {
  const objectifs = [
    {
      content: (
        <>
          <strong>Plurilinguisme et diversité</strong> : Faire de la{' '}
          <strong>diversité linguistique et culturelle</strong> un levier d'apprentissage et de citoyenneté.
        </>
      ),
    },
    {
      content: (
        <>
          <strong>Citoyenneté et ouverture</strong> : Former des élèves{' '}
          <strong>ouverts, tolérants et responsables</strong> dans un{' '}
          <strong>monde multipolaire</strong>.
        </>
      ),
    },
    {
      content: (
        <>
          <strong>Parcours et expériences</strong> : Enrichir les{' '}
          <strong>parcours éducatifs</strong> par des projets et coopérations{' '}
          <strong>interculturels et internationaux</strong>.
        </>
      ),
    },
  ];

  const actionSections = [
    {
      title: 'Pédagogie des langues',
      items: [
        {
          content: (
            <span>
              <strong>SI primaire</strong>
            </span>
          ),
          link: '/section-internationale-bfi',
          linkAriaLabel: 'Découvrir la section internationale primaire',
          linkIcon: Globe2,
        },
        {
          content: (
            <span>
              <strong>DNBi – SIA collège</strong>
            </span>
          ),
          link: '/dnbi',
          linkAriaLabel: 'Découvrir l\'extension DNBi au collège',
          linkIcon: Globe2,
        },
        {
          content: (
            <span>
              <strong>BFI – Lycée</strong>
            </span>
          ),
          link: '/bfi',
          linkAriaLabel: "Découvrir le déploiement du parcours BFI",
          linkIcon: Globe2,
        },
      ],
    },
    {
      title: 'Éducation interculturelle',
      items: [
        {
          content: (
            <span>
              <strong>Médiation interculturelle</strong>
            </span>
          ),
          link: 'https://psd-lfjp.netlify.app/mediation-entre-pairs',
          linkAriaLabel: 'Découvrir la médiation interculturelle',
          linkIcon: Handshake,
        },
        {
          content: (
            <span>
              <strong>Parcours d'Éducation Artistique et Culturelle</strong>
            </span>
          ),
          link: '/parcours-education-artistique-culturelle',
          linkAriaLabel: 'Explorer le Parcours d\'Éducation Artistique et Culturelle',
          linkIcon: Palette,
        },
        {
          content: (
            <span>
              <strong>Semaine des cultures</strong>
            </span>
          ),
          link: '/semaine-des-cultures',
          linkAriaLabel: 'Découvrir la Semaine des cultures',
          linkIcon: Palette,
        },
      ],
    },
    {
      title: 'Ouverture internationale et locale',
      items: [
        {
          content: <span>Voyages scolaires internationaux et séjours locaux</span>,
        },
        {
          content: (
            <span>
              Jumelages, partages, projets collaboratifs locaux et internationaux
            </span>
          ),
        },
        {
          content: <span>Échanges scolaires ADN AEFE</span>,
        },
      ],
    },
  ];

  const indicators = [
    {
      content: (
        <>Taux d'élèves engagés dans des <strong>sections et certifications internationales</strong> (SI, BFI).</>
      ),
    },
    {
      content: (
        <>Pourcentage d'<strong>enseignants de LV et DNL locuteurs natifs</strong> ou certifiés C2.</>
      ),
    },
    {
      content: (
        <>Nombre de <strong>partenariats locaux et internationaux</strong> actifs.</>
      ),
    },
    {
      content: (
        <>Taux de satisfaction des élèves et familles concernant l'<strong>ouverture culturelle et linguistique</strong> (enquêtes climats scolaires).</>
      ),
    },
    {
      content: (
        <>Participation annuelle des élèves aux projets de la « <strong>Semaine des cultures</strong> » et aux <strong>jumelages</strong>.</>
      ),
    },
  ];

  return (
    <PSDAxeLayout
      axeId={2}
      title="AXE 2 – PLURILINGUISME, MULTICULTURALITÉ, OUVERTURE INTERNATIONALE ET LOCALE"
      subtitle="Cultiver la diversité linguistique et culturelle comme levier d'apprentissage et d'ouverture au monde"
      objectifs={objectifs}
      actionSections={actionSections}
      indicators={indicators}
    />
  );
};

export default PSDAxe2;
