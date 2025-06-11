
import React from 'react';
import DiagnosticCard from './DiagnosticCard';

const DiagnosticPsdParentsContent = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <DiagnosticCard 
        title="Sondage Parents" 
        description="Enquête auprès des familles - Analyse des résultats"
        className="mb-8"
      >
        <p className="text-gray-700">
          Le contenu du sondage parents sera prochainement disponible. Cette section présentera 
          les résultats de l'enquête menée auprès des familles du LFJP concernant leur perception 
          de l'établissement, leurs attentes et leurs suggestions d'amélioration.
        </p>
        
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <h4 className="font-semibold text-blue-800 mb-2">Informations sur l'enquête parents :</h4>
          <ul className="text-sm text-blue-700 space-y-1">
            <li>• Période prévue : Avril 2024</li>
            <li>• Population cible : Toutes les familles du LFJP</li>
            <li>• Objectif : Recueillir les perceptions et attentes des parents</li>
            <li>• Format : Questionnaire en ligne et support papier</li>
          </ul>
        </div>
      </DiagnosticCard>
    </div>
  );
};

export default DiagnosticPsdParentsContent;
