
import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart3, ListChecks, Target, ShieldCheck, Utensils } from 'lucide-react';

const PSDAxe1 = () => {
  const summaryCards = [
    {
      id: 'details-objectifs',
      title: 'Objectifs',
      icon: Target,
      ariaLabel: 'Voir le détail des objectifs',
      items: [
        { icon: '🌱', label: 'Bien-être & accompagnement' },
        { icon: '🤝', label: 'Climat & coopération' },
        { icon: '🍽️', label: 'Services durables' }
      ]
    },
    {
      id: 'details-actions',
      title: 'Actions prioritaires',
      icon: ListChecks,
      ariaLabel: 'Voir le détail des actions prioritaires',
      items: [
        { icon: '❄️', label: 'Rafraîchissement durable' },
        { icon: '🛡️', label: 'Prévention du harcèlement' },
        { icon: '🗣️', label: 'Participation & expression' },
        { icon: '🍽️', label: 'Restauration scolaire' }
      ]
    },
    {
      id: 'details-indicateurs',
      title: 'Indicateurs',
      icon: BarChart3,
      ariaLabel: 'Voir le détail des indicateurs',
      items: [
        { icon: '📈', label: '+15 pts satisfaction' },
        { icon: '🌡️', label: '≥ 80% salles confort' },
        { icon: '🌿', label: 'Plan annuel E³D' }
      ]
    }
  ];

  const objectifs = [
    {
      text:
        '<strong>Bien-être et accompagnement des élèves</strong> : Garantir un <strong>environnement scolaire sain, climatisé et agréable</strong>, développer une <strong>culture du bien-être physique, mental, social et environnemental</strong> et répondre aux <strong>besoins particuliers des élèves</strong>.'
    },
    {
      text:
        '<strong>Climat scolaire et coopération éducative</strong> : Renforcer la <strong>confiance et la coopération</strong> entre élèves, familles et personnels, <strong>responsabiliser les élèves</strong> dans la vie de l\'établissement et consolider un <strong>climat scolaire</strong> fondé sur des règles et des valeurs partagées.'
    },
    {
      text:
        '<strong>Qualité et durabilité des services</strong> : Améliorer la <strong>qualité des services</strong> (restauration, transport, hygiène) et pérenniser l\'engagement du LFJP en matière de <strong>développement durable</strong> dans la dynamique <strong>E³D</strong>.'
    }
  ];

  const actions = [
    { text: '<strong>Rafraîchissement durable des salles</strong> : <strong>plan de climatisation progressive</strong> et solutions écologiques (ombrages, végétalisation, rénovation)' },
    { text: '<strong>Parcours santé-bien-être</strong> : hygiène, alimentation, activité physique et <strong>équilibre mental</strong>' },
    { text: '<strong>Prévention du harcèlement</strong> : <strong>médiateurs élèves</strong>, pratiques restauratives, programme <strong>pHARe</strong>', link: '/protocole-phare' },
    { text: '<strong>Expression et participation</strong> : conseils de vie, <strong>budgets participatifs</strong>, comités mixtes' },
    { text: '<strong>Parentalité et coéducation</strong> : rencontres et ateliers pour mieux suivre la scolarité' },
    { text: '<strong>Restauration scolaire</strong> : audit, consultation des usagers, mise en œuvre 2026-2027', link: '/construction-cantine' },
    { text: 'Politique <strong>E³D</strong> consolidée : <strong>référents</strong> et <strong>éco-délégués</strong>, comité de pilotage, projets interdisciplinaires, plan d\'action annuel aligné <strong>EFE³D</strong>' }
  ];
  
  const indicators = [
    { text: '<strong>Taux d\'élèves</strong> se déclarant « <strong>bien au LFJP</strong> » (objectif : <strong>+15 pts</strong> au lycée)' },
    { text: '<strong>Taux de satisfaction</strong> sur la climatisation, les sanitaires, la cantine (élèves et parents)' },
    { text: '<strong>Nombre de familles accompagnées</strong> dans le cadre de dispositifs de soutien à la parentalité' },
    { text: '<strong>Taux d\'élèves</strong> bénéficiant d\'un <strong>aménagement</strong> ou d\'un <strong>accompagnement pédagogique</strong>' },
    { text: '<strong>Avancement du plan de restauration scolaire</strong> (étapes validées)' },
    { text: '<strong>Taux de satisfaction global</strong> sur le <strong>climat scolaire</strong> (par enquête ELCS)' },
    { text: '<strong>Nombre de projets E3D</strong> portés par cycle' },
    { text: 'Maintien du <strong>label EFE3D niveau 3</strong> à chaque renouvellement triennal' }
  ];

  return (
    <div>
      <h3 className="text-xl font-playfair font-bold text-french-blue mb-4">
        AXE 1 – BIEN-ÊTRE ET EXPÉRIENCE DE LA COMMUNAUTÉ ÉDUCATIVE
      </h3>
      <p className="text-lg font-medium font-raleway text-gray-800 mb-8">
        Renforcer un cadre scolaire propice à l'épanouissement, à l'inclusion et à la cohésion
      </p>

      <section className="grid gap-6 md:grid-cols-3">
        {summaryCards.map((card) => {
          const Icon = card.icon;

          return (
            <article
              key={card.id}
              className="flex flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-french-blue/10"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="rounded-full bg-french-blue/10 p-2 text-french-blue">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h4 className="text-lg font-semibold text-slate-900">{card.title}</h4>
              </div>
              <ul className="grid gap-2">
                {card.items.map((item) => (
                  <li
                    key={item.label}
                    className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700"
                  >
                    <span aria-hidden="true">{item.icon}</span>
                    <span>{item.label}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <a
                  href={`#${card.id}`}
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-800 transition hover:bg-slate-50 hover:shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-french-blue"
                  aria-label={card.ariaLabel}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    className="h-4 w-4"
                    aria-hidden="true"
                  >
                    <path d="M14 3h7v7" strokeWidth="1.5" />
                    <path d="M21 3 10 14" strokeWidth="1.5" />
                    <rect x="3" y="7" width="10" height="14" rx="2" ry="2" strokeWidth="1.5" />
                  </svg>
                  <span>Voir le détail</span>
                </a>
              </div>
            </article>
          );
        })}
      </section>

      <section className="mt-12 space-y-8">
        <div
          id="details-objectifs"
          className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          <h4 className="mb-3 text-lg font-semibold text-slate-900">Objectifs détaillés</h4>
          <ul className="list-disc space-y-2 pl-5 text-gray-700 font-raleway">
            {objectifs.map((item, index) => (
              <li key={index} dangerouslySetInnerHTML={{ __html: item.text }}></li>
            ))}
          </ul>
        </div>

        <div id="details-actions" className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h4 className="mb-3 text-lg font-semibold text-slate-900">Actions prioritaires détaillées</h4>
          <ul className="list-disc space-y-3 pl-5 text-gray-700 font-raleway">
            {actions.map((item, index) => {
              const hasLink = Boolean(item.link);
              const textContent = item.text.toLowerCase();
              const iconType = textContent.includes('harcèlement')
                ? 'harcelement'
                : textContent.includes('restauration')
                ? 'restauration'
                : null;
              const IconComponent = iconType === 'harcelement' ? ShieldCheck : iconType === 'restauration' ? Utensils : null;
              const ariaLabelSuffix = iconType === 'harcelement'
                ? 'Prévention du harcèlement'
                : iconType === 'restauration'
                ? 'Restauration scolaire'
                : '';

              if (!hasLink || !IconComponent || !item.link) {
                return (
                  <li key={index} dangerouslySetInnerHTML={{ __html: item.text }}></li>
                );
              }

              return (
                <li key={index} className="flex flex-wrap items-center gap-2">
                  <span dangerouslySetInnerHTML={{ __html: item.text }}></span>
                  <Link
                    to={item.link}
                    className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-3 py-1.5 text-xs font-semibold text-slate-800 transition hover:bg-slate-50 hover:shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-french-blue"
                    aria-label={`En savoir plus – ${ariaLabelSuffix}`}
                  >
                    <IconComponent className="h-4 w-4" aria-hidden="true" />
                    <span>En savoir plus</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div
          id="details-indicateurs"
          className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          <h4 className="mb-3 text-lg font-semibold text-slate-900">Indicateurs détaillés</h4>
          <ul className="list-disc space-y-2 pl-5 text-gray-700 font-raleway">
            {indicators.map((item, index) => (
              <li key={index} dangerouslySetInnerHTML={{ __html: item.text }}></li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default PSDAxe1;
