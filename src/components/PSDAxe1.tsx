
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Building,
  BusFront,
  GraduationCap,
  Hammer,
  Handshake,
  HeartHandshake,
  HeartPulse,
  Leaf,
  ShieldCheck,
  Utensils,
  Bike,
  LifeBuoy,
  Users2,
  Sun,
} from 'lucide-react';

const PSDAxe1 = () => {
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

  const timelineYears = Array.from({ length: 7 }, (_, index) => 2025 + index);
  const startYear = timelineYears[0];
  const totalYears = timelineYears[timelineYears.length - 1] - startYear + 1;

  const [isTimelineExpanded, setIsTimelineExpanded] = useState(false);

  const timelineActions = [
    {
      title: 'Programmes bien-être & participation',
      description:
        'Médiation entre pairs, Savoir nager / Savoir rouler, expression & participation, parentalité-coéducation',
      start: 2025,
      end: 2031,
      color: 'from-purple-400/80 to-purple-500'
    },
    {
      title: 'Climatisation durable',
      description: 'Prototype 2025, étude des offres et déploiement progressif à partir de 2026',
      start: 2025,
      end: 2027,
      color: 'from-sky-400/80 to-sky-500'
    },
    {
      title: 'Cantine scolaire',
      description: 'Études, consultation des prestataires et mise en service prévue à partir de 2027',
      start: 2027,
      end: 2028,
      color: 'from-orange-300/80 to-orange-500'
    },
    {
      title: 'Plan peinture & ravalement',
      description: 'Programme de maintenance intérieure/extérieure sur 5 années',
      start: 2026,
      end: 2030,
      color: 'from-amber-300/80 to-amber-500'
    },
    {
      title: 'Plafonds acoustiques',
      description: 'Priorités collège (2026-2027), lycée (2028) et laboratoires/primaires (2029-2030)',
      start: 2026,
      end: 2030,
      color: 'from-emerald-300/80 to-emerald-500'
    },
    {
      title: 'Renouvellement vidéoprojecteurs',
      description: 'Phases annuelles de 2026 à 2031 pour homogénéiser le parc',
      start: 2026,
      end: 2031,
      color: 'from-french-blue/70 to-french-blue'
    }
  ];

  const actions = [
    {
      title: 'Cadre de vie & infrastructures',
      items: [
        {
          content: <strong>Climatisation durable</strong>,
          link: '/climatisation-durable',
          linkAriaLabel: 'En savoir plus – Climatisation durable',
          linkIcon: Sun
        },
        {
          content: <strong>Restauration scolaire</strong>,
          link: '/construction-cantine',
          linkAriaLabel: 'En savoir plus – Restauration scolaire',
          linkIcon: Utensils
        },
        {
          content: <strong>Maintenance stratégique</strong>,
          link: '/plan-maintenance-strategique',
          linkAriaLabel: 'En savoir plus – Maintenance stratégique',
          linkIcon: Hammer
        },
        {
          content: <strong>Politique E³D</strong>,
          link: '/politique-e3d',
          linkAriaLabel: 'En savoir plus – Politique E3D',
          linkIcon: Leaf
        },
        {
          content: <strong>Couverture terrain de sport</strong>,
          link: '/couverture-terrain-sport',
          linkAriaLabel: 'En savoir plus – Couverture terrain de sport',
          linkIcon: Building
        },
        {
          content: <strong>Transport scolaire</strong>,
          link: '/transport-scolaire',
          linkAriaLabel: 'En savoir plus – Transport scolaire',
          linkIcon: BusFront
        }
      ]
    },
    {
      title: 'Cadre scolaire & santé',
      items: [
        {
          content: <strong>Parcours Santé</strong>,
          link: '/parcours-sante',
          linkAriaLabel: 'Découvrir le Parcours Santé',
          linkIcon: HeartPulse
        },
        {
          content: <strong>Prévention du harcèlement</strong>,
          link: '/protocole-phare',
          linkAriaLabel: 'En savoir plus – Prévention du harcèlement',
          linkIcon: ShieldCheck
        },
        {
          content: <strong>Médiation entre pairs</strong>,
          link: '/mediation-entre-pairs',
          linkAriaLabel: 'En savoir plus – Médiation entre pairs',
          linkIcon: Handshake
        },
        {
          content: <strong>Savoir rouler</strong>,
          link: '/savoir-rouler',
          linkAriaLabel: 'En savoir plus – Savoir rouler',
          linkIcon: Bike
        },
        {
          content: <strong>Savoir nager</strong>,
          link: '/savoir-nager',
          linkAriaLabel: 'En savoir plus – Savoir nager',
          linkIcon: LifeBuoy
        }
      ]
    },
    {
      title: 'Dialogue & implication',
      items: [
        {
          content: <strong>Parentalité & coéducation</strong>,
          link: '/parentalite-coeducation',
          linkAriaLabel: 'En savoir plus – Parentalité & co-éducation',
          linkIcon: HeartHandshake
        },
        {
          content: <strong>Expression & participation</strong>,
          link: '/expression-participation',
          linkAriaLabel: 'En savoir plus – Expression & participation',
          linkIcon: Users2
        }
      ]
    }
  ];
  
  const indicators = [
    {
      content: (
        <>
          <strong>Taux d'élèves</strong> se sentant <strong>bien au LFJP</strong>
        </>
      )
    },
    {
      content: (
        <>
          <strong>Nombre de familles accompagnées</strong> pour le <strong>soutien à la parentalité</strong>
        </>
      )
    },
    {
      content: (
        <>
          <strong>Taux de satisfaction globale</strong> du <strong>climat scolaire</strong>
        </>
      )
    },
    {
      content: (
        <>
          <strong>Nombre de projets</strong> intégrant la <strong>politique E3D</strong>
        </>
      )
    }
  ];

  const timelineContentId = 'axe1-timeline-content';

  return (
    <div>
      <h3 className="text-xl font-playfair font-bold text-french-blue mb-4">
        AXE 1 – BIEN-ÊTRE ET EXPÉRIENCE DE LA COMMUNAUTÉ ÉDUCATIVE
      </h3>
      <p className="text-lg font-medium font-raleway text-gray-800 mb-8">
        Renforcer un cadre scolaire propice à l'épanouissement, à l'inclusion et à la cohésion
      </p>

      <section className="mt-12 space-y-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-2 mb-6">
            <h4 className="text-lg font-semibold text-slate-900">
              Frise temporelle des actions structurantes (2025-2031)
            </h4>
            <p className="text-sm text-slate-600">
              Visualisation synthétique des principaux chantiers prévus pour l'axe 1 : la barre colorée indique
              la période estimée de préparation, de déploiement ou de suivi pour chaque action.
            </p>
          </div>
          <div className="overflow-x-auto">
            <div className="relative">
              <div
                id={timelineContentId}
                className={`transition-[max-height] duration-500 ease-in-out ${
                  isTimelineExpanded ? 'max-h-[1200px]' : 'max-h-[320px] overflow-hidden'
                }`}
              >
                <div className="min-w-[720px] space-y-4">
                  <div className="grid grid-cols-[200px_1fr] items-center gap-4 text-sm font-semibold text-slate-500 uppercase tracking-wide">
                    <span>Périmètre</span>
                    <div className="grid grid-cols-7 text-center">
                      {timelineYears.map((year) => (
                        <span key={year}>{year}</span>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-3">
                    {timelineActions.map((item) => {
                      const offset = ((item.start - startYear) / totalYears) * 100;
                      const width = ((item.end - item.start + 1) / totalYears) * 100;

                      return (
                        <div
                          key={item.title}
                          className="grid grid-cols-[200px_1fr] items-center gap-4 rounded-xl border border-slate-100 bg-slate-50/60 p-3"
                        >
                          <div>
                            <p className="font-semibold text-slate-900">{item.title}</p>
                            <p className="text-xs text-slate-600">{item.description}</p>
                          </div>
                          <div className="relative h-10 rounded-full bg-white/80">
                            <div
                              className={`absolute inset-y-1 rounded-full bg-gradient-to-r ${item.color} shadow-sm`}
                              style={{
                                left: `${offset}%`,
                                width: `${width}%`
                              }}
                            />
                            <div className="absolute inset-0 grid grid-cols-7 text-[10px] text-slate-400">
                              {timelineYears.map((year) => (
                                <div key={year} className="border-l border-dashed border-slate-200 first:border-l-0" />
                              ))}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              {!isTimelineExpanded && (
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white via-white/95 to-transparent"
                />
              )}
            </div>
          </div>
          <div className="mt-4 flex justify-center">
            <Button
              variant="outline"
              onClick={() => setIsTimelineExpanded((prev) => !prev)}
              aria-expanded={isTimelineExpanded}
              aria-controls={timelineContentId}
            >
              {isTimelineExpanded ? 'Réduire la frise' : 'Afficher la frise complète'}
            </Button>
          </div>
        </div>

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
                <h5 className="text-base font-semibold text-french-blue">{section.title}</h5>
                <ul className="space-y-2 list-disc list-outside pl-6 marker:text-slate-400">
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
