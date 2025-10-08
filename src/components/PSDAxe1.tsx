
import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart3, GraduationCap, Leaf, ListChecks, ShieldCheck, Target, Utensils } from 'lucide-react';

const PSDAxe1 = () => {
  const summaryCards = [
    {
      id: 'details-objectifs',
      title: 'Objectifs',
      icon: Target,
      items: [
        { icon: '🌱', label: 'Bien-être & accompagnement' },
        { icon: '🤝', label: 'Climat & coopération' },
        { icon: '🍽️', label: 'Services durables' }
      ]
    },
    {
      id: 'details-actions',
      title: 'Rubriques',
      icon: ListChecks,
      items: [
        { icon: '🏫', label: 'Cadre de vie & infrastructures' },
        { icon: '🩺', label: 'Cadre scolaire & santé' },
        { icon: '🤝', label: 'Dialogue & implication' }
      ]
    },
    {
      id: 'details-indicateurs',
      title: 'Indicateurs',
      icon: BarChart3,
      items: [
        { icon: '📈', label: '+15 pts satisfaction' },
        { icon: '🌡️', label: '≥ 80% salles confort' },
        { icon: '🌿', label: 'Plan annuel E³D' }
      ]
    }
  ];

  const objectifs = [
    {
      content: (
        <>
          <strong>Bien-être et accompagnement des élèves</strong> : Garantir un{' '}
          <strong>environnement scolaire sain, climatisé et agréable</strong>, développer une{' '}
          <strong>culture du bien-être physique, mental, social et environnemental</strong> et répondre aux{' '}
          <strong>besoins particuliers des élèves</strong>.
        </>
      )
    },
    {
      content: (
        <>
          <strong>Climat scolaire et coopération éducative</strong> : Renforcer la{' '}
          <strong>confiance et la coopération</strong> entre élèves, familles et personnels,{' '}
          <strong>responsabiliser les élèves</strong> dans la vie de l'établissement et consolider un{' '}
          <strong>climat scolaire</strong> fondé sur des règles et des valeurs partagées.
        </>
      )
    },
    {
      content: (
        <>
          <strong>Qualité et durabilité des services</strong> : Améliorer la{' '}
          <strong>qualité des services</strong> (restauration, transport, hygiène) et pérenniser l'engagement du LFJP en matière
          de <strong>développement durable</strong> dans la dynamique <strong>E³D</strong>.
        </>
      )
    }
  ];

  const actions = [
    {
      title: 'Cadre de vie & infrastructures',
      items: [
        {
          content: 'Climatisation durable'
        },
        {
          content: 'Restauration scolaire',
          link: '/construction-cantine',
          linkAriaLabel: 'En savoir plus – Restauration scolaire',
          linkIcon: Utensils
        },
        {
          content: 'Maintenance stratégique',
          link: '/plan-maintenance-strategique',
          linkAriaLabel: 'En savoir plus – Maintenance stratégique'
        },
        {
          content: 'Politique E³D',
          link: '/politique-e3d',
          linkAriaLabel: 'En savoir plus – Politique E3D',
          linkIcon: Leaf
        },
        {
          content: 'Couverture terrain de sport'
        },
        {
          content: 'Transport scolaire'
        }
      ]
    },
    {
      title: 'Cadre scolaire & santé',
      items: [
        {
          content: 'Parcours Santé'
        },
        {
          content: 'Prévention du harcèlement',
          link: '/protocole-phare',
          linkAriaLabel: 'En savoir plus – Prévention du harcèlement',
          linkIcon: ShieldCheck
        },
        {
          content: 'Médiation entre pairs',
          link: '/mediation-entre-pairs',
          linkAriaLabel: 'En savoir plus – Médiation entre pairs'
        },
        {
          content: 'Savoir rouler'
        },
        {
          content: 'Savoir nager'
        }
      ]
    },
    {
      title: 'Dialogue & implication',
      items: [
        {
          content: 'Parentalité & coéducation'
        },
        {
          content: 'Expression & participation'
        }
      ]
    }
  ];
  
  const indicators = [
    {
      content: (
        <>
          <strong>Taux d'élèves</strong> se déclarant « <strong>bien au LFJP</strong> » (objectif :{' '}
          <strong>+15 pts</strong> au lycée)
        </>
      )
    },
    {
      content: (
        <>
          <strong>Taux de satisfaction</strong> sur la climatisation, les sanitaires, la cantine (élèves et parents)
        </>
      )
    },
    {
      content: (
        <>
          <strong>Nombre de familles accompagnées</strong> dans le cadre de dispositifs de soutien à la parentalité
        </>
      )
    },
    {
      content: (
        <>
          <strong>Taux d'élèves</strong> bénéficiant d'un <strong>aménagement</strong> ou d'un{' '}
          <strong>accompagnement pédagogique</strong>
        </>
      )
    },
    {
      content: (
        <>
          <strong>Avancement du plan de restauration scolaire</strong> (étapes validées)
        </>
      )
    },
    {
      content: (
        <>
          <strong>Taux de satisfaction global</strong> sur le <strong>climat scolaire</strong> (par enquête ELCS)
        </>
      )
    },
    {
      content: (
        <>
          <strong>Nombre de projets E3D</strong> portés par cycle
        </>
      )
    },
    {
      content: (
        <>Maintien du <strong>label EFE3D niveau 3</strong> à chaque renouvellement triennal</>
      )
    }
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
              <li key={index}>{item.content}</li>
            ))}
          </ul>
        </div>

        <div id="details-actions" className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h4 className="mb-3 text-lg font-semibold text-slate-900">Rubriques détaillées</h4>
          <ul className="space-y-6 font-raleway">
            {actions.map((section, sectionIndex) => (
              <li key={sectionIndex} className="space-y-2">
                <h5 className="text-base font-semibold text-slate-900">{section.title}</h5>
                <ul className="space-y-2">
                  {section.items.map((item, itemIndex) => {
                    if (!item.link) {
                      return (
                        <li key={itemIndex} className="text-gray-700">
                          {item.content}
                        </li>
                      );
                    }

                    const IconComponent = item.linkIcon ?? GraduationCap;

                    return (
                      <li key={itemIndex}>
                        <div className="flex flex-wrap items-center gap-3 sm:flex-nowrap">
                          <div className="flex min-w-0 flex-1 items-center gap-3">
                            <span className="text-gray-700">{item.content}</span>
                            <span
                              aria-hidden="true"
                              className="hidden h-px flex-1 border-b border-dashed border-slate-300 sm:block"
                            />
                          </div>
                          <Link
                            to={item.link}
                            className="ml-auto inline-flex shrink-0 items-center gap-2 rounded-lg border border-slate-300 px-3 py-1.5 text-xs font-semibold text-slate-800 transition hover:bg-slate-50 hover:shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-french-blue sm:ml-0 sm:self-center"
                            aria-label={item.linkAriaLabel ?? 'En savoir plus'}
                          >
                            <IconComponent className="h-4 w-4" aria-hidden="true" />
                            <span>En savoir plus</span>
                          </Link>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </li>
            ))}
          </ul>
        </div>

        <div
          id="details-indicateurs"
          className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          <h4 className="mb-3 text-lg font-semibold text-slate-900">Indicateurs détaillés</h4>
          <ul className="list-disc space-y-2 pl-5 text-gray-700 font-raleway">
            {indicators.map((item, index) => (
              <li key={index}>{item.content}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default PSDAxe1;
