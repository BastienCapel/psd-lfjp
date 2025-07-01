import React from 'react';
import PSDAxeLayout from './PSDAxeLayout';

const PSDAxe2 = () => {
  const objectifs = [
    { text: 'Favoriser l\'engagement et la responsabilité citoyenne' },
    { text: 'Renforcer le sentiment d\'appartenance et la solidarité' },
    { text: 'Former à l\'esprit critique et à l\'usage éthique du numérique' },
    { text: 'Promouvoir la diversité et le plurilinguisme comme vecteurs de cohésion' }
  ];
  
  const actions = [
    { text: 'Généralisation de l\'éducation aux médias et à l\'intelligence artificielle' },
    { 
      text: 'Déploiement du plan « Section Internationale et BFI » (2026-2033)',
      link: '/section-internationale-bfi'
    },
    { text: 'Création d\'un passeport du jeune citoyen' },
    { text: 'Actions solidaires et intergénérationnelles' },
    { text: 'Politique E3D avec maintien des 17 objectifs de développement durable, demande de labellisation niveau 3, et présence d\'éco-délégués' }
  ];
  
  const indicators = [
    { text: 'Nombre d\'actions citoyennes menées par niveau' },
    { text: 'Indice de sentiment d\'appartenance' },
    { text: 'Implication dans les instances de représentation' }
  ];

  return (
    <PSDAxeLayout 
      title="AXE 2 – PLURILINGUISME, MULTICULTURALITÉ, OUVERTURE INTERNATIONALE ET LOCALE"
      subtitle="Éduquer à une citoyenneté responsable et engagée"
      objectifs={objectifs}
      actions={actions}
      indicators={indicators}
    />
  );
};

export default PSDAxe2;
