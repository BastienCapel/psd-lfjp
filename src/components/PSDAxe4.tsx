
import React from 'react';
import PSDAxeLayout from './PSDAxeLayout';

const PSDAxe4 = () => {
  const objectifs = [
    {
      content: (
        <>Maintenir le <strong>niveau d'excellence</strong> et poursuivre la montée en puissance de la{' '}
        <strong>réussite aux examens</strong></>
      )
    },
    {
      content: (
        <>
          Développer les <strong>compétences psychosociales et humaines</strong> des élèves (<strong>soft skills</strong>) :
          prise de parole, coopération, gestion de l'échec, résilience, esprit critique, engagement citoyen
        </>
      )
    },
    {
      content: (
        <>Encourager l'<strong>autonomie</strong>, la <strong>persévérance</strong> et la capacité à s'orienter de manière éclairée</>
      )
    },
    {
      content: (
        <>Valoriser toutes les formes de <strong>réussite</strong> : scolaire, artistique, humaine, citoyenne, collective</>
      )
    },
    {
      content: (
        <>Faire du <strong>LFJP une école de la confiance et du rebond</strong> : apprendre à apprendre, à s'adapter, à se relever</>
      )
    },
    {
      content: (
        <>
          Renforcer les liens avec les <strong>anciens élèves (alumni)</strong> et créer une{' '}
          <strong>communauté intergénérationnelle</strong> inspirante
        </>
      )
    },
    {
      content: (
        <>Impliquer pleinement les <strong>familles</strong> dans les parcours de réussite des élèves</>
      )
    }
  ];
  
  const actions = [
    {
      content: (
        <>
          <strong>Curriculum vertical « Soft Skills & Éloquence »</strong>
        </>
      ),
      link: '/curriculum-soft-skills',
      linkAriaLabel: 'Découvrir le curriculum Soft Skills & Éloquence',
    },
    {
      content: (
        <>
          <strong>Valorisation de l'erreur et de la persévérance</strong>
        </>
      ),
      link: '/valorisation-erreur-perseverance',
      linkAriaLabel:
        "Découvrir la feuille de route du programme Valorisation de l'erreur et de la persévérance",
    },
    {
      content: <strong>Parcours de la Réussite citoyenne</strong>,
      link: '/plan-strategique/reussite-citoyenne',
      linkAriaLabel: 'Découvrir le parcours Réussite citoyenne',
    },
    {
      content: <strong>Éducation financière et à la vie autonome</strong>,
      link: '/education-financiere-vie-autonome',
      linkAriaLabel: "En savoir plus sur l'éducation financière et la vie autonome",
    },
    {
      content: (
        <>
          <strong>Réseau d'alumni et mentorat</strong> :
          <br />• Constitution d'une <strong>base de données d'anciens élèves</strong>
          <br />• <strong>Mentorat lycéens / alumni</strong>
          <br />• Rubrique « <strong>Les Oiseaux de Passage</strong> » valorisée dans la communication interne
        </>
      ),
    },
    {
      content: (
        <>
          <strong>Soutien à l'orientation</strong> :
          <br />• <strong>Accompagnement personnalisé</strong> dans le cadre du Parcours Avenir
          <br />• <strong>Stages, forums métiers, espace orientation</strong>
        </>
      ),
    },
  ];
  
  const indicators = [
    {
      content: (
        <>
          <strong>% des élèves participant</strong> à un <strong>club citoyen, débat, théâtre, journal</strong> (≥{' '}
          <strong>80 % collège/lycée</strong>)
        </>
      )
    },
    {
      content: (
        <>
          <strong>% d'élèves déclarant</strong> « <strong>savoir rebondir après un échec</strong> » (via enquête climat) ({' '}
          <strong>+15 pts</strong> par rapport à 2024)
        </>
      )
    },
    {
      content: (
        <>
          <strong>% d'élèves impliqués</strong> dans un <strong>projet citoyen ou solidaire</strong> ({' '}
          <strong>100 % cycle 4 et lycée</strong>)
        </>
      )
    },
    {
      content: (
        <>
          <strong>% d'élèves accompagnés individuellement</strong> en terminale (<strong>100 %</strong>)
        </>
      )
    },
    {
      content: (
        <>
          <strong>Nombre d'alumni mobilisés</strong> par an (≥ <strong>30 dès 2027</strong>)
        </>
      )
    },
    {
      content: (
        <>
          <strong>Taux de satisfaction</strong> sur l'accompagnement à la réussite (enquêtes) (≥{' '}
          <strong>90 %</strong>)
        </>
      )
    }
  ];

  return (
    <PSDAxeLayout 
      title="AXE 4 – FAÇONNER LES RÉUSSITES"
      subtitle="Accompagner chaque élève dans son développement personnel, scolaire et citoyen, pour une réussite complète, durable et équilibrée"
      objectifs={objectifs}
      actions={actions}
      indicators={indicators}
    />
  );
};

export default PSDAxe4;
