import React from 'react';
import {
  CalendarHeart,
  Globe2,
  Handshake,
  Languages,
  Plane,
  Sprout,
} from 'lucide-react';
import PSDAxeLayout from './PSDAxeLayout';

const PSDAxe2 = () => {
  const summary = {
    objectives: [
      { icon: '🗣️', label: 'Plurilinguisme valorisé' },
      { icon: '🌍', label: 'Ouverture internationale' },
      { icon: '🤝', label: 'Dialogue interculturel' },
    ],
    actions: [
      {
        label: 'Plan Section internationale & BFI',
        icon: Globe2,
        iconClassName: 'text-emerald-600',
        link: '/section-internationale-bfi',
        linkAriaLabel: 'En savoir plus – Section internationale et BFI',
      },
      {
        label: 'Voyages et jumelages',
        icon: Plane,
        iconClassName: 'text-sky-600',
      },
      {
        label: 'Semaine des cultures',
        icon: CalendarHeart,
        iconClassName: 'text-amber-600',
      },
      {
        label: 'Médiation interculturelle',
        icon: Handshake,
        iconClassName: 'text-rose-600',
      },
      {
        label: 'Familles & langues du LFJP',
        icon: Languages,
        iconClassName: 'text-indigo-600',
      },
      {
        label: 'Partenariats E³D',
        icon: Sprout,
        iconClassName: 'text-emerald-700',
      },
    ],
    indicators: [
      { label: 'Sections & certifications actives', value: 'SI & BFI 2026-2033' },
      { label: 'Partenariats locaux et internationaux', value: '≥ 5 actifs' },
      { label: 'Événements interculturels', value: 'Semaine annuelle' },
    ],
  };

  const objectifs = [
    {
      text:
        '<strong>Plurilinguisme et diversité</strong> : Faire de la <strong>diversité linguistique et culturelle</strong> un levier d\'apprentissage et de citoyenneté.',
    },
    {
      text:
        '<strong>Citoyenneté et ouverture</strong> : Former des élèves <strong>ouverts, tolérants et responsables</strong> dans un <strong>monde multipolaire</strong>.',
    },
    {
      text:
        '<strong>Parcours et expériences</strong> : Enrichir les <strong>parcours éducatifs</strong> par des projets et coopérations <strong>interculturels et internationaux</strong>.',
    },
  ];

  const actions = [
    {
      text:
        '<strong>Déploiement du plan « Section Internationale et BFI »</strong> (2026-2028).',
      link: '/section-internationale-bfi',
      linkAriaLabel: 'En savoir plus – Section internationale et BFI',
      linkIcon: Globe2,
    },
    {
      text:
        '<strong>Ouverture internationale</strong> :<br/>• Développer les <strong>voyages scolaires thématiques</strong> (culturels, scientifiques, sportifs) en tant que leviers pédagogiques d\'ouverture au monde.<br/>• Explorer les <strong>jumelages avec d\'autres lycées français</strong> de l\'étranger et les partenariats <strong>Erasmus+/AEFE</strong>.',
    },
    {
      text:
        '<strong>Ouverture locale</strong> :<br/>• Renforcer les <strong>coopérations avec les écoles et établissements voisins</strong> (activités conjointes, projets citoyens, actions artistiques et sportives).<br/>• Organiser une « <strong>Semaine des cultures</strong> » annuelle, durant laquelle les élèves présentent leurs langues, traditions et patrimoines culturels.',
    },
    {
      text:
        '<strong>Vie scolaire et climat interculturel</strong> :<br/>• Favoriser la <strong>médiation et la prévention</strong> des incompréhensions interculturelles.<br/>• Intégrer les <strong>langues et cultures des familles</strong> dans la vie de l\'établissement (journées thématiques, interventions de parents).',
      link: '/mediation-entre-pairs',
      linkAriaLabel: 'Découvrir la médiation entre pairs',
      linkIcon: Handshake,
    },
    {
      text:
        '<strong>Politique E3D</strong> avec maintien des <strong>17 objectifs de développement durable</strong>, demande de <strong>labellisation niveau 3</strong>, et présence d\'<strong>éco-délégués</strong>.',
      link: '/politique-e3d',
      linkAriaLabel: 'En savoir plus – Politique E3D',
      linkIcon: Sprout,
    },
  ];

  const indicators = [
    {
      text:
        'Taux d\'élèves engagés dans des <strong>sections et certifications internationales</strong> (SI, BFI).',
    },
    {
      text:
        'Pourcentage d\'<strong>enseignants de LV et DNL locuteurs natifs</strong> ou certifiés C2.',
    },
    {
      text:
        'Nombre de <strong>partenariats locaux et internationaux</strong> actifs.',
    },
    {
      text:
        'Taux de satisfaction des élèves et familles concernant l\'<strong>ouverture culturelle et linguistique</strong> (enquêtes climats scolaires).',
    },
    {
      text:
        'Participation annuelle des élèves aux projets de la « <strong>Semaine des cultures</strong> » et aux <strong>jumelages</strong>.',
    },
  ];

  return (
    <PSDAxeLayout
      axeId={2}
      title="AXE 2 – PLURILINGUISME, MULTICULTURALITÉ, OUVERTURE INTERNATIONALE ET LOCALE"
      subtitle="Cultiver la diversité linguistique et culturelle comme levier d'apprentissage et d'ouverture au monde"
      summary={summary}
      objectifs={objectifs}
      actions={actions}
      indicators={indicators}
    />
  );
};

export default PSDAxe2;
