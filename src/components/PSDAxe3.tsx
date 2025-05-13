
import React from 'react';

const PSDAxe3 = () => {
  return (
    <div>
      <h3 className="text-xl font-playfair font-bold text-french-blue mb-4">
        AXE 3 – PARCOURS D'ÉDUCATION ARTISTIQUE ET CULTURELLE
      </h3>
      <p className="text-lg font-medium font-raleway text-gray-800 mb-4">
        Cultiver la sensibilité, la créativité et l'ouverture
      </p>
      
      <div className="mt-6 space-y-4">
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Objectifs</h4>
          <ul className="list-disc pl-5 space-y-1 text-gray-700 font-raleway">
            <li>Favoriser un accès égal à la culture pour tous les élèves</li>
            <li>Renforcer les compétences artistiques, expressives et esthétiques</li>
            <li>Valoriser la diversité culturelle, locale et internationale</li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Actions prioritaires</h4>
          <ul className="list-disc pl-5 space-y-1 text-gray-700 font-raleway">
            <li>Déploiement des trois piliers du PEAC</li>
            <li>Intégration d'artistes sénégalais dans les projets</li>
            <li>Ateliers pluridisciplinaires croisant arts, langues et sciences</li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Indicateurs</h4>
          <ul className="list-disc pl-5 space-y-1 text-gray-700 font-raleway">
            <li>Nombre de projets PEAC par cycle</li>
            <li>Diversité des domaines artistiques abordés</li>
            <li>Taux de participation aux sorties et ateliers culturels</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PSDAxe3;
