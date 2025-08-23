import React from 'react';
import PSDAxeLayout from './PSDAxeLayout';

const PSDAxe2 = () => {
  const objectifs = [
    { text: 'Développer un environnement scolaire où la <strong>diversité des langues, cultures et nationalités</strong> présentes au LFJP devient un <strong>atout éducatif et citoyen</strong>.' },
    { text: 'Renforcer la <strong>maîtrise des langues vivantes étrangères</strong> et du <strong>français langue de scolarisation</strong>, conformément aux orientations de l\'Éducation nationale et de l\'AEFE.' },
    { text: 'Former des élèves capables de comprendre et d\'évoluer dans un <strong>monde multipolaire</strong>, ouverts à la <strong>pluralité des cultures, religions et visions du monde</strong>.' },
    { text: 'Prévenir les <strong>chocs culturels</strong> en dotant les élèves de repères sociologiques et psychologiques favorisant la <strong>tolérance, le dialogue et l\'intercompréhension</strong>.' },
    { text: 'Consolider les <strong>parcours éducatifs</strong> (Parcours citoyen, Parcours Avenir, PEAC) par des <strong>expériences interculturelles et internationales</strong>.' }
  ];
  
  const actions = [
    { text: '<strong>Sections et certifications internationales</strong> :<br/>• <strong>Déploiement du plan « Section Internationale et BFI »</strong> (2026-2033)<br/>• Recrutement et formation d\'<strong>enseignants locuteurs natifs</strong> ou hautement qualifiés (niveau <strong>C2 CECRL</strong>) pour les disciplines non linguistiques et littéraires.', 
      link: '/section-internationale-bfi' },
    { text: '<strong>Ouverture internationale</strong> :<br/>• Développer les <strong>voyages scolaires thématiques</strong> (culturels, scientifiques, sportifs) en tant que leviers pédagogiques d\'ouverture au monde.<br/>• Explorer les <strong>jumelages avec d\'autres lycées français</strong> de l\'étranger et les partenariats <strong>Erasmus+/AEFE</strong>.' },
    { text: '<strong>Ouverture locale</strong> :<br/>• Renforcer les <strong>coopérations avec les écoles et établissements voisins</strong> (activités conjointes, projets citoyens, actions artistiques et sportives).<br/>• Organiser une « <strong>Semaine des cultures</strong> » annuelle, durant laquelle les élèves présentent leurs langues, traditions et patrimoines culturels.' },
    { text: '<strong>Vie scolaire et climat interculturel</strong> :<br/>• Favoriser la <strong>médiation et la prévention</strong> des incompréhensions interculturelles.<br/>• Intégrer les <strong>langues et cultures des familles</strong> dans la vie de l\'établissement (journées thématiques, interventions de parents).' },
    { text: '<strong>Politique E3D</strong> avec maintien des <strong>17 objectifs de développement durable</strong>, demande de <strong>labellisation niveau 3</strong>, et présence d\'<strong>éco-délégués</strong>' }
  ];
  
  const indicators = [
    { text: 'Taux d\'élèves engagés dans des <strong>sections et certifications internationales</strong> (SI, BFI).' },
    { text: 'Pourcentage d\'<strong>enseignants de LV et DNL locuteurs natifs</strong> ou certifiés C2.' },
    { text: 'Nombre de <strong>partenariats locaux et internationaux</strong> actifs.' },
    { text: 'Taux de satisfaction des élèves et familles concernant l\'<strong>ouverture culturelle et linguistique</strong> (enquêtes climats scolaires).' },
    { text: 'Participation annuelle des élèves aux projets de la « <strong>Semaine des cultures</strong> » et aux <strong>jumelages</strong>.' }
  ];

  return (
    <PSDAxeLayout 
      title="AXE 2 – PLURILINGUISME, MULTICULTURALITÉ, OUVERTURE INTERNATIONALE ET LOCALE"
      subtitle="Cultiver la diversité linguistique et culturelle comme levier d'apprentissage et d'ouverture au monde"
      objectifs={objectifs}
      actions={actions}
      indicators={indicators}
    />
  );
};

export default PSDAxe2;
