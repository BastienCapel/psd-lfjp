
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
    { text: 'Elaboration d\'un plan : « un ordinateur par élève »' },
    { text: 'Création d\'un passeport du jeune citoyen' },
    { text: 'Actions solidaires et intergénérationnelles' }
  ];
  
  const indicators = [
    { text: 'Nombre d\'actions citoyennes menées par niveau' },
    { text: 'Indice de sentiment d\'appartenance' },
    { text: 'Implication dans les instances de représentation' }
  ];

  return (
    <PSDAxeLayout 
      title="AXE 2 – PARCOURS CITOYEN"
      subtitle="Éduquer à une citoyenneté responsable et engagée"
      objectifs={objectifs}
      actions={actions}
      indicators={indicators}
    />
  );
};

export default PSDAxe2;
