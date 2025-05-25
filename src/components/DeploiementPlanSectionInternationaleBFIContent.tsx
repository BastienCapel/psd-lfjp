
import React from 'react';
import DeploiementPlanSommaire from './deploiement-plan/DeploiementPlanSommaire';
import DeploiementPlanIntroduction from './deploiement-plan/DeploiementPlanIntroduction';
import DeploiementPlanObjectifs from './deploiement-plan/DeploiementPlanObjectifs';
import DeploiementPlanCalendrier from './deploiement-plan/DeploiementPlanCalendrier';
import DeploiementPlanRH from './deploiement-plan/DeploiementPlanRH';
import DeploiementPlanFinancier from './deploiement-plan/DeploiementPlanFinancier';
import DeploiementPlanOrganisation from './deploiement-plan/DeploiementPlanOrganisation';
import DeploiementPlanAction from './deploiement-plan/DeploiementPlanAction';
import DeploiementPlanIndicateurs from './deploiement-plan/DeploiementPlanIndicateurs';
import DeploiementPlanConclusion from './deploiement-plan/DeploiementPlanConclusion';

const DeploiementPlanSectionInternationaleBFIContent = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <DeploiementPlanSommaire />
          <DeploiementPlanIntroduction />
          <DeploiementPlanObjectifs />
          <DeploiementPlanCalendrier />
          <DeploiementPlanRH />
          <DeploiementPlanFinancier />
          <DeploiementPlanOrganisation />
          <DeploiementPlanAction />
          <DeploiementPlanIndicateurs />
          <DeploiementPlanConclusion />
        </div>
      </div>
    </section>
  );
};

export default DeploiementPlanSectionInternationaleBFIContent;
