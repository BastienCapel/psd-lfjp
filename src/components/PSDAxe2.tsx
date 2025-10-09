import React from 'react';
import { Globe2, Handshake, Sprout } from 'lucide-react';
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

  const actions = [
    {
      content: (
        <>
          <strong>Déploiement du plan « Section Internationale et BFI »</strong> (2026-2028).
        </>
      ),
      link: '/section-internationale-bfi',
      linkAriaLabel: 'En savoir plus – Section internationale et BFI',
      linkIcon: Globe2,
    },
    {
      content: (
        <>
          <strong>Ouverture internationale</strong> :
          <br />• Développer les <strong>voyages scolaires thématiques</strong> (culturels, scientifiques, sportifs) en tant que
          leviers pédagogiques d'ouverture au monde.
          <br />• Explorer les <strong>jumelages avec d'autres lycées français</strong> de l'étranger et les partenariats{' '}
          <strong>Erasmus+/AEFE</strong>.
        </>
      ),
    },
    {
      content: (
        <>
          <strong>Ouverture locale</strong> :
          <br />• Renforcer les <strong>coopérations avec les écoles et établissements voisins</strong> (activités conjointes,
          projets citoyens, actions artistiques et sportives).
          <br />• Organiser une « <strong>Semaine des cultures</strong> » annuelle, durant laquelle les élèves présentent leurs
          langues, traditions et patrimoines culturels.
        </>
      ),
    },
    {
      content: (
        <>
          <strong>Vie scolaire et climat interculturel</strong> :
          <br />• Favoriser la <strong>médiation et la prévention</strong> des incompréhensions interculturelles.
          <br />• Intégrer les <strong>langues et cultures des familles</strong> dans la vie de l'établissement (journées
          thématiques, interventions de parents).
        </>
      ),
      link: '/mediation-entre-pairs',
      linkAriaLabel: 'Découvrir la médiation entre pairs',
      linkIcon: Handshake,
    },
    {
      content: (
        <>
          <strong>Politique E3D</strong> avec maintien des{' '}
          <strong>17 objectifs de développement durable</strong>, demande de <strong>labellisation niveau 3</strong>, et
          présence d'<strong>éco-délégués</strong>.
        </>
      ),
      link: '/politique-e3d',
      linkAriaLabel: 'En savoir plus – Politique E3D',
      linkIcon: Sprout,
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
      actions={actions}
      indicators={indicators}
    />
  );
};

export default PSDAxe2;
