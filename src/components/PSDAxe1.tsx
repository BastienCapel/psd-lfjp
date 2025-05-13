
import React from 'react';

const PSDAxe1 = () => {
  return (
    <div>
      <h3 className="text-xl font-playfair font-bold text-french-blue mb-4">
        AXE 1 – PARCOURS ÉDUCATIF DE SANTÉ
      </h3>
      <p className="text-lg font-medium font-raleway text-gray-800 mb-4">
        Un cadre de vie sain, sûr et bienveillant
      </p>
      
      <div className="mt-6 space-y-4">
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Objectifs</h4>
          <ul className="list-disc pl-5 space-y-1 text-gray-700 font-raleway">
            <li>Améliorer les conditions matérielles de santé et d'hygiène</li>
            <li>Promouvoir une culture de la prévention et du bien-être physique, mental et social</li>
            <li>Renforcer les compétences psychosociales</li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Actions prioritaires</h4>
          <ul className="list-disc pl-5 space-y-1 text-gray-700 font-raleway">
            <li>Audit thermique des locaux, plan de climatisation, rénovation des sanitaires</li>
            <li>Lancement d'un projet de construction d'une cantine scolaire</li>
            <li>Poursuite des travaux d'amélioration de l'acoustique</li>
            <li>Programme d'éducation à la santé</li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Indicateurs</h4>
          <ul className="list-disc pl-5 space-y-1 text-gray-700 font-raleway">
            <li>Taux de satisfaction sanitaire (enquêtes)</li>
            <li>Taux de satisfaction concernant la restauration scolaire</li>
            <li>Nombre d'actions de promotion santé menées par cycle</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PSDAxe1;
