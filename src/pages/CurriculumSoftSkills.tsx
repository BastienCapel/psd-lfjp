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

interface TimelineStage {
  cycle: string;
  title: string;
  subtitle: string;
  pillLabel: string;
  pillWidth: number;
  icon: ({ x, y }: { x: number; y: number }) => React.ReactNode;
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
        cycle: 'PS–GS',
        title: 'Entrer en communication',
        subtitle: 'oser parler • écouter • décrire',
        pillLabel: 'Rituels',
        pillWidth: 76,
        icon: ({ x, y }) => (
          <path
            className="icon"
            d={`M${x - 15} ${y - 10} q0 -18 18 -18 h10 q18 0 18 18 v4 q0 18 -18 18 h-6 l-8 8 v-8 q-14 0 -14 -18z`}
          />
        )
      },
      {
        cycle: 'CP–CE2',
        title: 'Structurer l’expression',
        subtitle: 'lecture à voix haute • avis simple',
        pillLabel: 'Radio',
        pillWidth: 76,
        icon: ({ x, y }) => (
          <>
            <path
              className="icon"
              d={`M${x - 14} ${y - 12} h20 a10 10 0 0 1 10 10 v18 h-20 a10 10 0 0 0 -10 10 v-38 z`}
            />
            <path
              className="icon"
              d={`M${x - 14} ${y - 12} h-8 a10 10 0 0 0 -10 10 v28`}
            />
          </>
        )
      },
      {
        cycle: 'CM1–6e',
        title: 'Confiance et argumentation',
        subtitle: 'exposé • posture • questionner',
        pillLabel: 'Exposés',
        pillWidth: 76,
        icon: ({ x, y }) => (
          <>
            <path
              className="icon"
              d={`M${x - 8} ${y - 8} v-8 a8 8 0 0 1 16 0 v8 a8 8 0 0 1 -16 0 z`}
            />
            <path className="icon" d={`M${x} ${y + 8} v12`} />
            <path className="icon" d={`M${x - 12} ${y + 20} h24`} />
          </>
        )
      },
      {
        cycle: '5e–3e',
        title: 'Argumenter et convaincre',
        subtitle: 'débat • registre • gestion du stress',
        pillLabel: 'Club débat • AAEH',
        pillWidth: 108,
        icon: ({ x, y }) => (
          <path
            className="icon"
            d={`M${x - 14} ${y - 8} h22 a8 8 0 0 1 0 16 h-10 l-6 6 v-6 h-6 a8 8 0 0 1 0 -16 z`}
          />
        )
      },
      {
        cycle: 'Lycée',
        title: 'Maîtriser l’art oratoire',
        subtitle: 'discours nuancé • Q/R jury • esprit critique',
        pillLabel: 'Oral bac • Badges',
        pillWidth: 100,
        icon: ({ x, y }) => (
          <>
            <path className="icon" d={`M${x - 10} ${y - 10} h20 v10 h-20 z`} />
            <path className="icon" d={`M${x} ${y} v20`} />
            <path className="icon" d={`M${x - 8} ${y + 20} h16`} />
          </>
        )
      }
    ],
    []
  );

  const [activeTab, setActiveTab] = useState<string>(cycles[0]?.id ?? 'cycle1');
  const timelineRef = useRef<SVGPathElement | null>(null);
  const [lineLength, setLineLength] = useState(0);
  const [hoveredStage, setHoveredStage] = useState<number | null>(null);
  const [progressRatio, setProgressRatio] = useState(1);

  useEffect(() => {
    const line = timelineRef.current;

    if (!line) {
      return;
    }

    const length = line.getTotalLength();
    setLineLength(length);
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

  const handleStageEnter = (index: number) => {
    setHoveredStage(index);
    setProgressRatio((index + 1) / timelineStages.length);
  };

  const handleStageLeave = () => {
    setHoveredStage(null);
    setProgressRatio(1);
  };

  const TIMELINE_BASE_X = 160;
  const TIMELINE_SPACING = 200;
  const TIMELINE_CY = 180;
  const TIMELINE_TAG_Y = 95;
  const TIMELINE_TITLE_Y = 215;
  const TIMELINE_SUBTITLE_Y = 235;
  const TIMELINE_PILL_Y = 250;
  const TIMELINE_PILL_TEXT_Y = 265;

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
            className="w-full h-auto text-french-blue"
          >
            <style>{`
              .f-line{stroke:currentColor;stroke-opacity:.25;stroke-width:10;fill:none}
              .f-node{fill:#fff;stroke:currentColor;stroke-width:3}
              .f-tag{font:700 16px/1.2 system-ui,Segoe UI,Roboto,Arial}
              .f-cap{font:600 14px/1.35 system-ui,Segoe UI,Roboto,Arial}
              .f-dev{font:400 13px/1.35 system-ui,Segoe UI,Roboto,Arial;opacity:.85}
              .f-pill{fill:#1d4ed8}
              .f-pill-text{font:600 12px/1 system-ui,Segoe UI,Roboto,Arial}
              .icon{fill:none;stroke:currentColor;stroke-width:2}
              .f-line-progress{stroke-opacity:.65}
              @media (max-width:900px){
                svg{height:auto}
                .f-cap{font-size:13px}
                .f-dev{font-size:12px}
              }
            `}</style>

            <path className="f-line" d="M80,180 H1120" ref={timelineRef} />
            {lineLength > 0 && (
              <path
                className="f-line f-line-progress"
                d="M80,180 H1120"
                style={{
                  strokeDasharray: `${lineLength * progressRatio} ${lineLength}`,
                  strokeDashoffset: 0,
                  transition: 'stroke-dasharray 400ms ease'
                }}
              />
            )}

            {timelineStages.map((stage, index) => {
              const x = TIMELINE_BASE_X + index * TIMELINE_SPACING;
              const isActive = hoveredStage === index;
              const circleRadius = isActive ? 26 : 22;
              const pillX = x - stage.pillWidth / 2;

              return (
                <g
                  key={stage.cycle}
                  tabIndex={0}
                  onMouseEnter={() => handleStageEnter(index)}
                  onFocus={() => handleStageEnter(index)}
                  onMouseLeave={handleStageLeave}
                  onBlur={handleStageLeave}
                  className="transition-transform duration-300 ease-out cursor-pointer"
                  style={{
                    color: isActive ? '#1d4ed8' : '#1f2937',
                    transform: isActive ? 'translateY(-6px)' : 'translateY(0)'
                  }}
                >
                  <circle
                    className="f-node"
                    cx={x}
                    cy={TIMELINE_CY}
                    r={circleRadius}
                    style={{
                      fill: isActive ? '#eff6ff' : '#fff',
                      strokeWidth: isActive ? 4 : 3,
                      transition: 'all 300ms ease'
                    }}
                  />
                  <text
                    className="f-tag"
                    x={x}
                    y={TIMELINE_TAG_Y}
                    textAnchor="middle"
                    fill={isActive ? '#1d4ed8' : '#0f172a'}
                  >
                    {stage.cycle}
                  </text>
                  {stage.icon({ x, y: TIMELINE_CY })}
                  <text
                    className="f-cap"
                    x={x}
                    y={TIMELINE_TITLE_Y}
                    textAnchor="middle"
                    fill={isActive ? '#1d4ed8' : '#1e293b'}
                  >
                    {stage.title}
                  </text>
                  <text
                    className="f-dev"
                    x={x}
                    y={TIMELINE_SUBTITLE_Y}
                    textAnchor="middle"
                    fill={isActive ? '#1d4ed8' : '#334155'}
                  >
                    {stage.subtitle}
                  </text>
                  <rect
                    x={pillX}
                    y={TIMELINE_PILL_Y}
                    rx={10}
                    ry={10}
                    width={stage.pillWidth}
                    height={22}
                    className="f-pill"
                    style={{
                      fill: isActive ? '#1d4ed8' : '#1e40af',
                      transition: 'fill 300ms ease'
                    }}
                  />
                  <text
                    x={x}
                    y={TIMELINE_PILL_TEXT_Y}
                    textAnchor="middle"
                    fill="#fff"
                    className="f-pill-text"
                  >
                    {stage.pillLabel}
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
