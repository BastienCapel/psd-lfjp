import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';

const steps = [
  {
    title: '1. Validation des besoins',
    subtitle: 'Rapports ELCS',
    description:
      'Identification des priorités et des attentes exprimées dans les rapports ELCS ainsi que les premiers constats partagés.',
    duration: '12 à 18 mois',
  },
  {
    title: '2. Analyse du diagnostic',
    subtitle: 'Étapes suivantes',
    description:
      'Consolidation des données issues des enquêtes, des ateliers et des observations de terrain pour cerner les enjeux clés.',
    duration: '12 à 18 mois',
  },
  {
    title: '3. Réalisation d’un diagnostic',
    subtitle: 'Projets structurants',
    description:
      'Formulation des axes majeurs en croisant besoins pédagogiques, investissements prioritaires et retours de la communauté.',
    duration: '12 à 18 mois',
  },
  {
    title: '4. Échanges & ajustements des axes',
    subtitle: 'Validation des axes',
    description:
      'Organisation de séances de travail pour confronter les propositions aux contraintes opérationnelles et budgétaires.',
    duration: '12 à 18 mois',
  },
  {
    title: '5. Pivot des axes et des actions',
    subtitle: 'Ajustements',
    description:
      'Affinement des actions, des indicateurs et du calendrier afin de sécuriser la cohérence d’ensemble du plan.',
    duration: '12 à 18 mois',
  },
  {
    title: '6. Suivi et validation des actions',
    subtitle: 'Validation des axes',
    description:
      'Boucles de validation successives pour engager les ressources, cadrer la gouvernance et préparer la mise en œuvre.',
    duration: '12 à 18 mois',
  },
  {
    title: '7. Validation du PSD',
    subtitle: 'Plan de continuité',
    description:
      'Validation finale du plan stratégique et projection des chantiers futurs afin d’assurer la continuité des actions.',
    duration: '12 à 18 mois',
  },
];

const participativeSteps = [
  {
    title: 'Travaux de la commission PSD',
    description:
      'Une commission dédiée mène les travaux de fond et prépare les éléments soumis aux instances. Elle coordonne les analyses, synthétise les propositions et structure les priorités du plan.',
  },
  {
    title: 'Recueil des idées et sondage',
    description:
      'Les parents, élèves et personnels sont mobilisés via des sondages et ateliers pour partager leurs besoins et suggestions. Ces contributions alimentent directement les pistes d’actions.',
  },
  {
    title: 'Proposition d’axes et validation',
    description:
      'Les axes et actions issus des consultations sont présentés au groupe de travail puis partagés à la direction et à l’APE. Des itérations sont conduites jusqu’à obtention d’un accord clair.',
  },
];

const Methode = () => {
  return (
    <div className="min-h-screen flex flex-col font-raleway">
      <Navbar showLogo={true} />
      <Hero
        title="NOTRE MÉTHODE"
        subtitle="Une démarche structurée et participative pour bâtir le PSD du LFJP"
      />

      <section className="bg-french-blue/5 py-16 md:py-24">
        <div className="container mx-auto px-6 space-y-12">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.2em] text-french-blue font-semibold">Démarche</p>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900 mt-4">
              7 étapes pour construire et valider le plan stratégique
            </h2>
            <p className="text-lg text-gray-700 mt-6 leading-relaxed">
              Le PSD du LFJP repose sur un enchaînement d’étapes qui sécurisent la qualité des analyses, la
              pertinence des choix et la continuité de la mise en œuvre. Chaque phase fait l’objet d’un suivi
              rigoureux et s’étend sur 12 à 18 mois afin de laisser le temps aux échanges et aux ajustements.
            </p>
          </div>

          <div className="grid gap-6 lg:gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            {steps.map((step) => (
              <div
                key={step.title}
                className="bg-white shadow-lg rounded-2xl p-6 border border-french-blue/10 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-xs uppercase tracking-wide text-french-blue font-semibold">{step.subtitle}</p>
                    <h3 className="text-xl font-bold text-gray-900 mt-1">{step.title}</h3>
                  </div>
                  <span className="text-sm font-semibold text-french-blue bg-white border border-french-blue/20 px-3 py-1 rounded-full">
                    {step.duration}
                  </span>
                </div>
                <p className="text-gray-700 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 space-y-10">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.2em] text-french-blue font-semibold">Participation</p>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900 mt-4">
              Une approche participative et inclusive
            </h2>
            <p className="text-lg text-gray-700 mt-6 leading-relaxed">
              Le succès du plan tient à la mobilisation de toute la communauté éducative. Les propositions sont
              enrichies par les retours des familles, des élèves et des personnels, puis validées avec la direction
              et l’APE avant d’être présentées officiellement.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {participativeSteps.map((item) => (
              <div
                key={item.title}
                className="bg-white shadow-lg rounded-2xl p-6 border border-blue-100 hover:border-french-blue/50 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-french-blue text-white rounded-3xl p-8 md:p-10 shadow-lg">
            <h3 className="text-2xl font-playfair font-bold mb-4">Boucles de validation continues</h3>
            <p className="text-lg leading-relaxed text-white/90">
              Chaque axe fait l’objet d’allers-retours entre le groupe de travail, la direction et l’APE. En cas
              d’ajustements nécessaires, les échanges se poursuivent jusqu’à ce qu’un consensus soit trouvé, garantissant
              une validation transparente et partagée du PSD.
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default Methode;
