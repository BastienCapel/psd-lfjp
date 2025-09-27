import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Home } from 'lucide-react';

interface CycleData {
  id: string;
  label: string;
  emoji: string;
  title: string;
  competenciesTitle: string;
  competencies: string[];
  dispositifsTitle: string;
  dispositifs: string[];
}

interface OverviewRow {
  cycle: string;
  competences: string;
  dispositifs: string;
}

type TimelineShape = 'circle' | 'rounded' | 'diamond' | 'hexagon';

interface TimelinePattern {
  id: string;
  size: number;
  background: string;
  color: string;
  strokeWidth: number;
}

interface TimelineIconPath {
  d: (cx: number, cy: number) => string;
  stroke?: string;
  fill?: string;
  strokeWidth?: number;
}

interface TimelineStage {
  id: string;
  label: string;
  x: number;
  title: string;
  summary: string;
  highlight: {
    label: string;
    width: number;
    fill: string;
    textColor: string;
  };
  node: {
    shape: TimelineShape;
    size: number;
    stroke: string;
    fill: string;
    strokeWidth?: number;
    pattern?: TimelinePattern;
  };
  icon: {
    ariaLabel: string;
    paths: TimelineIconPath[];
  };
  ariaLabel: string;
}

const CurriculumSoftSkills = () => {
  const cycles: CycleData[] = useMemo(
    () => [
      {
        id: 'cycle1',
        label: 'Cycle 1 (PS–GS)',
        emoji: '🎈',
        title: 'Cycle 1 – Entrer en communication',
        competenciesTitle: 'Compétences attendues fin GS',
        competencies: [
          'Oser prendre la parole devant le groupe.',
          'Décrire une image ou un vécu avec un vocabulaire simple.',
          'Respecter la parole d’autrui (écoute, tour de parole).'
        ],
        dispositifsTitle: 'Dispositifs',
        dispositifs: [
          'Rituel « présenter un objet » hebdomadaire.',
          'Jeux de rôle et théâtre de marionnettes.',
          'Cercle de parole quotidien.',
          'Valorisation par petites vidéos partagées en classe.'
        ]
      },
      {
        id: 'cycle2',
        label: 'Cycle 2 (CP–CE2)',
        emoji: '📚',
        title: 'Cycle 2 – Structurer l’expression',
        competenciesTitle: 'Compétences attendues fin CE2',
        competencies: [
          'Lire un texte court avec fluidité et intonation.',
          'Exprimer un avis simple avec arguments.',
          'Se présenter clairement à l’oral.'
        ],
        dispositifsTitle: 'Dispositifs',
        dispositifs: [
          'Lectures à voix haute (coin lecture, bibliothèque).',
          'Débats philo adaptés autour de questions simples.',
          '« Radio de classe » enregistrée une fois par mois.',
          'Jeux de scène courts pour restituer des contes.'
        ]
      },
      {
        id: 'cycle3',
        label: 'Cycle 3 (CM1–6e)',
        emoji: '🎭',
        title: 'Cycle 3 – Confiance et argumentation',
        competenciesTitle: 'Compétences attendues fin 6e',
        competencies: [
          'Conduire un exposé structuré (introduction, développement, conclusion).',
          'Utiliser une voix audible et une posture adaptée.',
          'Poser des questions pertinentes à un pair.'
        ],
        dispositifsTitle: 'Dispositifs',
        dispositifs: [
          'Exposés oraux réguliers (sciences, histoire).',
          'Débat réglé une fois par trimestre.',
          'Journal scolaire ou blog collaboratif.',
          'Théâtre d’improvisation en atelier péri-éducatif.'
        ]
      },
      {
        id: 'cycle4',
        label: 'Cycle 4 (5e–3e)',
        emoji: '💬',
        title: 'Cycle 4 – Argumenter et convaincre',
        competenciesTitle: 'Compétences attendues fin 3e',
        competencies: [
          'Argumenter dans un débat contradictoire.',
          'Adapter son registre de langue à la situation.',
          'Gérer ses émotions et son stress lors d’une prise de parole.'
        ],
        dispositifsTitle: 'Dispositifs',
        dispositifs: [
          'Club débat avec motions mensuelles.',
          'Concours d’éloquence collège.',
          'Méthodes de gestion du stress intégrées aux heures de vie de classe.',
          'Participation au projet Ambassadeurs en Herbe (AAEH) – sélections collège.'
        ]
      },
      {
        id: 'lycee',
        label: 'Lycée (2nde–Tle)',
        emoji: '🎤',
        title: 'Lycée – Maîtriser l’art oratoire',
        competenciesTitle: 'Compétences attendues fin Terminale',
        competencies: [
          'Produire un discours construit, nuancé et convaincant.',
          'Maîtriser les techniques oratoires (regard, gestes, voix).',
          'Répondre à un jury dans un temps limité.',
          'Développer une pensée critique face à un sujet complexe.'
        ],
        dispositifsTitle: 'Dispositifs',
        dispositifs: [
          'Ateliers « oral du bac » dès la Seconde (coaching posture et structure).',
          'Concours d’éloquence lycée et participation AAEH (niveau lycée).',
          'Clubs journalistiques et projets vidéo (interviews, reportages).',
          'Leadership : organisation d’événements par les élèves (forums, semaines thématiques).',
          'Certification interne « Badge Compétences Oratoires » (bronze/argent/or).'
        ]
      }
    ],
    []
  );

  const overview: OverviewRow[] = useMemo(
    () => [
      { cycle: 'PS–GS', competences: 'Oser parler, écouter', dispositifs: 'Objets à présenter, marionnettes, rituels' },
      { cycle: 'CP–CE2', competences: 'Lire et s’exprimer', dispositifs: 'Lectures, débats philo, radio de classe' },
      { cycle: 'CM1–6e', competences: 'Structurer un discours', dispositifs: 'Exposés, débats réglés, journal scolaire' },
      { cycle: '5e–3e', competences: 'Argumenter, gérer stress', dispositifs: 'Club débat, concours, gestion stress, AAEH' },
      { cycle: 'Lycée', competences: 'Convaincre, esprit critique', dispositifs: 'Oral bac, concours, leadership, badges' }
    ],
    []
  );

  const timelineStages: TimelineStage[] = useMemo(
    () => [
      {
        id: 'timeline-psgs',
        label: 'PS–GS',
        x: 160,
        title: 'Entrer en communication',
        summary: 'oser parler • écouter • décrire',
        highlight: {
          label: 'Rituels',
          width: 92,
          fill: '#1d4ed8',
          textColor: '#ffffff'
        },
        node: {
          shape: 'circle',
          size: 24,
          stroke: '#1d4ed8',
          fill: '#DBEAFE',
          strokeWidth: 4
        },
        icon: {
          ariaLabel: 'Bulles de dialogue illustrant les premiers échanges oraux',
          paths: [
            {
              d: (cx, cy) =>
                `M${cx - 15} ${cy - 10} q0 -18 18 -18 h10 q18 0 18 18 v4 q0 18 -18 18 h-6 l-8 8 v-8 q-14 0 -14 -18z`,
              strokeWidth: 2.2
            }
          ]
        },
        ariaLabel: 'Cycle PS–GS : entrer en communication, mots-clés oser parler, écouter, décrire. Dispositif phare : rituels.'
      },
      {
        id: 'timeline-cpce2',
        label: 'CP–CE2',
        x: 360,
        title: 'Structurer l’expression',
        summary: 'lecture à voix haute • avis simple',
        highlight: {
          label: 'Radio',
          width: 96,
          fill: '#0f766e',
          textColor: '#ffffff'
        },
        node: {
          shape: 'rounded',
          size: 24,
          stroke: '#0f766e',
          fill: '#CCFBF1',
          strokeWidth: 4
        },
        icon: {
          ariaLabel: 'Livre ouvert représentant la structuration du langage',
          paths: [
            {
              d: (cx, cy) =>
                `M${cx - 14} ${cy - 12} h20 a10 10 0 0 1 10 10 v18 h-20 a10 10 0 0 0 -10 10 v-38 z`,
              strokeWidth: 2
            },
            {
              d: (cx, cy) => `M${cx - 14} ${cy - 12} h-8 a10 10 0 0 0 -10 10 v28`,
              strokeWidth: 2
            }
          ]
        },
        ariaLabel: 'Cycle CP–CE2 : structurer l’expression, mots-clés lecture à voix haute, avis simple. Dispositif phare : radio.'
      },
      {
        id: 'timeline-cm16e',
        label: 'CM1–6e',
        x: 560,
        title: 'Confiance et argumentation',
        summary: 'exposé structuré • posture • questionner',
        highlight: {
          label: 'Exposés',
          width: 110,
          fill: '#7c3aed',
          textColor: '#ffffff'
        },
        node: {
          shape: 'diamond',
          size: 26,
          stroke: '#7c3aed',
          fill: '#F3E8FF',
          strokeWidth: 4
        },
        icon: {
          ariaLabel: 'Microphone stylisé pour symboliser la prise de parole',
          paths: [
            {
              d: (cx, cy) => `M${cx - 8} ${cy - 8} v-8 a8 8 0 0 1 16 0 v8 a8 8 0 0 1 -16 0 z`,
              strokeWidth: 2
            },
            {
              d: (cx, cy) => `M${cx} ${cy + 8} v12`,
              strokeWidth: 2
            },
            {
              d: (cx, cy) => `M${cx - 12} ${cy + 20} h24`,
              strokeWidth: 2
            }
          ]
        },
        ariaLabel: 'Cycle CM1–6e : confiance et argumentation, mots-clés exposé structuré, posture, questionner. Dispositif phare : exposés.'
      },
      {
        id: 'timeline-5e3e',
        label: '5e–3e',
        x: 760,
        title: 'Argumenter et convaincre',
        summary: 'débat • registre • gestion du stress',
        highlight: {
          label: 'Club débat • AAEH',
          width: 154,
          fill: '#ea580c',
          textColor: '#111827'
        },
        node: {
          shape: 'hexagon',
          size: 26,
          stroke: '#ea580c',
          fill: '#FFEFE7',
          strokeWidth: 4,
          pattern: {
            id: 'pattern-debat',
            size: 10,
            background: '#FFEFE7',
            color: '#fb923c',
            strokeWidth: 1.2
          }
        },
        icon: {
          ariaLabel: 'Bulles imbriquées rappelant un débat',
          paths: [
            {
              d: (cx, cy) =>
                `M${cx - 14} ${cy - 8} h22 a8 8 0 0 1 0 16 h-10 l-6 6 v-6 h-6 a8 8 0 0 1 0 -16 z`,
              strokeWidth: 2
            }
          ]
        },
        ariaLabel: 'Cycle 5e–3e : argumenter et convaincre, mots-clés débat, registre, gestion du stress. Dispositif phare : club débat et AAEH.'
      },
      {
        id: 'timeline-lycee',
        label: 'Lycée',
        x: 960,
        title: 'Maîtriser l’art oratoire',
        summary: 'discours nuancé • Q/R jury • esprit critique',
        highlight: {
          label: 'Oral bac • Badges',
          width: 168,
          fill: '#0f172a',
          textColor: '#ffffff'
        },
        node: {
          shape: 'rounded',
          size: 26,
          stroke: '#0f172a',
          fill: '#E2E8F0',
          strokeWidth: 4
        },
        icon: {
          ariaLabel: 'Pupitre et micro symbolisant la maîtrise oratoire',
          paths: [
            {
              d: (cx, cy) => `M${cx - 10} ${cy - 10} h20 v10 h-20 z`,
              strokeWidth: 2
            },
            {
              d: (cx, cy) => `M${cx} ${cy} v20`,
              strokeWidth: 2
            },
            {
              d: (cx, cy) => `M${cx - 8} ${cy + 20} h16`,
              strokeWidth: 2
            }
          ]
        },
        ariaLabel: 'Cycle Lycée : maîtriser l’art oratoire, mots-clés discours nuancé, questions-réponses jury, esprit critique. Dispositif phare : oral du bac et badges.'
      }
    ],
    []
  );

  const [activeTab, setActiveTab] = useState<string>(cycles[0]?.id ?? 'cycle1');
  const timelineRef = useRef<SVGPathElement | null>(null);

  useEffect(() => {
    const line = timelineRef.current;

    if (!line) {
      return;
    }

    const length = line.getTotalLength();
    line.style.strokeDasharray = `${length}`;
    line.style.strokeDashoffset = `${length}`;

    const animationFrame = requestAnimationFrame(() => {
      line.style.transition = 'stroke-dashoffset 900ms ease';
      line.style.strokeDashoffset = '0';
    });

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-raleway">
      <Navbar showLogo={true} />

      <div className="bg-gradient-to-r from-french-blue to-blue-700 text-white py-20 md:py-28">
        <div className="container mx-auto px-6">
          <p className="uppercase tracking-[0.3em] text-sm md:text-base opacity-80 mb-4">Curriculum vertical</p>
          <h1 className="text-3xl md:text-5xl font-playfair font-bold mb-4">Soft Skills &amp; Éloquence</h1>
          <p className="text-lg md:text-xl max-w-3xl font-light">
            De la petite section à la terminale, un parcours progressif pour former des élèves confiants,
            responsables et éloquents.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-6 flex flex-wrap gap-3">
        <Button variant="outline" asChild>
          <Link to="/plan-strategique">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour au plan stratégique
          </Link>
        </Button>
        <Button variant="outline" asChild>
          <Link to="/">
            <Home className="mr-2 h-4 w-4" />
            Accueil
          </Link>
        </Button>
      </div>

      <main className="flex-1 bg-gray-50">
        <section className="softskills" aria-labelledby="softskills-title">
          <div className="max-w-5xl mx-auto">
            <header className="text-center mb-10">
              <h2 id="softskills-title" className="text-2xl md:text-3xl font-playfair font-bold text-french-blue mb-4">
                Curriculum des compétences transversales et de l’éloquence
              </h2>
              <p className="text-gray-600">
                Une progression verticale PS → Terminale articulée autour des compétences oratoires, de l’écoute active
                et de la pensée critique.
              </p>
            </header>

            <div className="tabs" role="tablist" aria-label="Cycles du curriculum Soft Skills">
              {cycles.map((cycle) => (
                <button
                  key={cycle.id}
                  type="button"
                  className={`tab${activeTab === cycle.id ? ' active' : ''}`}
                  onClick={() => setActiveTab(cycle.id)}
                  role="tab"
                  id={`${cycle.id}-tab`}
                  aria-selected={activeTab === cycle.id}
                  aria-controls={`${cycle.id}-panel`}
                >
                  {cycle.label}
                </button>
              ))}
            </div>

            {cycles.map((cycle) => (
              <article
                key={cycle.id}
                id={`${cycle.id}-panel`}
                role="tabpanel"
                aria-labelledby={`${cycle.id}-tab`}
                className={`tab-content${activeTab === cycle.id ? ' active' : ''}`}
              >
                <h3 className="text-xl font-playfair font-semibold text-french-blue mb-4">
                  <span role="img" aria-label={cycle.label} className="mr-2">
                    {cycle.emoji}
                  </span>
                  {cycle.title}
                </h3>
                <div className="space-y-6 text-gray-700">
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-2">{cycle.competenciesTitle}</h4>
                    <ul className="list-disc pl-5 space-y-2">
                      {cycle.competencies.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-2">{cycle.dispositifsTitle}</h4>
                    <ul className="list-disc pl-5 space-y-2">
                      {cycle.dispositifs.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-6">
            <header className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-playfair font-bold text-french-blue mb-3">
                Vue d’ensemble de la progression verticale
              </h2>
              <p className="text-gray-600">
                Les compétences et dispositifs clés se renforcent tout au long du parcours.
              </p>
            </header>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-slate-200 bg-white shadow-sm rounded-xl">
                <thead className="bg-slate-50">
                  <tr>
                    <th scope="col" className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-600">
                      Cycle
                    </th>
                    <th scope="col" className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-600">
                      Compétences finales
                    </th>
                    <th scope="col" className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-600">
                      Dispositifs clés
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-sm text-slate-700">
                  {overview.map((row) => (
                    <tr key={row.cycle}>
                      <td className="px-4 py-3 font-semibold text-french-blue">{row.cycle}</td>
                      <td className="px-4 py-3">{row.competences}</td>
                      <td className="px-4 py-3">{row.dispositifs}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="frise-softskills" aria-labelledby="frise-title">
          <h2 id="frise-title" className="text-center text-2xl font-playfair font-bold mb-8">
            Frise du curriculum Soft Skills &amp; Éloquence (PS → Terminale)
          </h2>

          <svg
            viewBox="0 0 1200 360"
            role="img"
            aria-labelledby="frise-title"
            preserveAspectRatio="xMidYMid meet"
          >
            <style>{`
              .timeline-line{stroke:#0f172a;stroke-opacity:.18;stroke-width:10;stroke-linecap:round;fill:none}
              .timeline-label{font:700 16px/1.2 'Inter',system-ui,Segoe UI,Roboto,Arial;color:#0f172a}
              .timeline-title{font:600 14px/1.35 'Inter',system-ui,Segoe UI,Roboto,Arial;color:#1e293b}
              .timeline-summary{font:400 13px/1.35 'Inter',system-ui,Segoe UI,Roboto,Arial;color:#334155}
              .timeline-pill{font:600 12px/1 'Inter',system-ui,Segoe UI,Roboto,Arial}
              @media (max-width:900px){
                svg{height:auto}
                .timeline-title{font-size:13px}
                .timeline-summary{font-size:12px}
              }
            `}</style>

            <defs>
              {timelineStages
                .filter((stage) => stage.node.pattern)
                .map((stage) => (
                  <pattern
                    key={stage.node.pattern?.id}
                    id={stage.node.pattern?.id}
                    patternUnits="userSpaceOnUse"
                    width={stage.node.pattern?.size}
                    height={stage.node.pattern?.size}
                  >
                    <rect
                      width={stage.node.pattern?.size}
                      height={stage.node.pattern?.size}
                      fill={stage.node.pattern?.background}
                    />
                    <path
                      d={`M0 ${stage.node.pattern?.size} L ${stage.node.pattern?.size} 0`}
                      stroke={stage.node.pattern?.color}
                      strokeWidth={stage.node.pattern?.strokeWidth}
                    />
                    <path
                      d={`M-${stage.node.pattern?.size / 2} ${stage.node.pattern?.size} L ${stage.node.pattern?.size / 2} 0`}
                      stroke={stage.node.pattern?.color}
                      strokeWidth={stage.node.pattern?.strokeWidth}
                    />
                    <path
                      d={`M${stage.node.pattern?.size / 2} ${stage.node.pattern?.size} L ${stage.node.pattern?.size * 1.5} 0`}
                      stroke={stage.node.pattern?.color}
                      strokeWidth={stage.node.pattern?.strokeWidth}
                    />
                  </pattern>
                ))}
            </defs>

            <path className="timeline-line" d="M80,180 H1120" ref={timelineRef} />

            {timelineStages.map((stage) => {
              const nodeFill = stage.node.pattern ? `url(#${stage.node.pattern.id})` : stage.node.fill;
              const nodeStrokeWidth = stage.node.strokeWidth ?? 3;
              const highlightX = stage.x - stage.highlight.width / 2;
              const cx = stage.x;
              const cy = 180;

              const renderNode = () => {
                switch (stage.node.shape) {
                  case 'rounded':
                    return (
                      <rect
                        x={cx - stage.node.size}
                        y={cy - stage.node.size}
                        width={stage.node.size * 2}
                        height={stage.node.size * 2}
                        rx={stage.node.size * 0.55}
                        ry={stage.node.size * 0.55}
                        fill={nodeFill}
                        stroke={stage.node.stroke}
                        strokeWidth={nodeStrokeWidth}
                      />
                    );
                  case 'diamond': {
                    const size = stage.node.size;
                    const points = [
                      [cx, cy - size],
                      [cx + size, cy],
                      [cx, cy + size],
                      [cx - size, cy]
                    ]
                      .map((point) => point.join(','))
                      .join(' ');
                    return (
                      <polygon
                        points={points}
                        fill={nodeFill}
                        stroke={stage.node.stroke}
                        strokeWidth={nodeStrokeWidth}
                      />
                    );
                  }
                  case 'hexagon': {
                    const size = stage.node.size;
                    const horizontal = size * Math.sin(Math.PI / 3);
                    const points = [
                      [cx, cy - size],
                      [cx + horizontal, cy - size / 2],
                      [cx + horizontal, cy + size / 2],
                      [cx, cy + size],
                      [cx - horizontal, cy + size / 2],
                      [cx - horizontal, cy - size / 2]
                    ]
                      .map((point) => point.join(','))
                      .join(' ');
                    return (
                      <polygon
                        points={points}
                        fill={nodeFill}
                        stroke={stage.node.stroke}
                        strokeWidth={nodeStrokeWidth}
                      />
                    );
                  }
                  default:
                    return (
                      <circle
                        cx={cx}
                        cy={cy}
                        r={stage.node.size}
                        fill={nodeFill}
                        stroke={stage.node.stroke}
                        strokeWidth={nodeStrokeWidth}
                      />
                    );
                }
              };

              return (
                <g
                  key={stage.id}
                  role="group"
                  aria-label={stage.ariaLabel}
                  aria-labelledby={`${stage.id}-label ${stage.id}-title`}
                >
                  <title id={`${stage.id}-title`}>{stage.title}</title>
                  <desc>{`${stage.summary}. ${stage.icon.ariaLabel}. Dispositif phare : ${stage.highlight.label}.`}</desc>
                  {renderNode()}
                  <text
                    id={`${stage.id}-label`}
                    className="timeline-label"
                    x={stage.x}
                    y={95}
                    textAnchor="middle"
                    fill="#0f172a"
                  >
                    {stage.label}
                  </text>
                  {stage.icon.paths.map((iconPath, index) => (
                    <path
                      key={`${stage.id}-icon-${index}`}
                      d={iconPath.d(cx, cy)}
                      fill={iconPath.fill ?? 'none'}
                      stroke={iconPath.stroke ?? stage.node.stroke}
                      strokeWidth={iconPath.strokeWidth ?? 1.8}
                      aria-hidden="true"
                    />
                  ))}
                  <text
                    className="timeline-title"
                    x={stage.x}
                    y={215}
                    textAnchor="middle"
                    fill="#1e293b"
                  >
                    {stage.title}
                  </text>
                  <text
                    className="timeline-summary"
                    x={stage.x}
                    y={235}
                    textAnchor="middle"
                    fill="#334155"
                  >
                    {stage.summary}
                  </text>
                  <rect
                    x={highlightX}
                    y={250}
                    width={stage.highlight.width}
                    height={26}
                    rx={12}
                    ry={12}
                    fill={stage.highlight.fill}
                    aria-hidden="true"
                  />
                  <text
                    className="timeline-pill"
                    x={stage.x}
                    y={267}
                    textAnchor="middle"
                    fill={stage.highlight.textColor}
                  >
                    {stage.highlight.label}
                  </text>
                </g>
              );
            })}
          </svg>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CurriculumSoftSkills;
