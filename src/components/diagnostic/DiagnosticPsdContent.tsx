
import React from 'react';
import DiagnosticCard from './DiagnosticCard';

const DiagnosticPsdContent = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <DiagnosticCard 
        title="Diagnostic PSD" 
        description="Analyse basée sur les enquêtes questionnaires PSD"
        className="mb-8"
      >
        <p className="text-gray-700">
          Contenu du diagnostic PSD à venir. Cette section sera complétée avec les données 
          issues des enquêtes questionnaires du Plan Stratégique de Développement.
        </p>
      </DiagnosticCard>
    </div>
  );
};

export default DiagnosticPsdContent;
