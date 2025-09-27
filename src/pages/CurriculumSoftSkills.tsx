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
              .f-line{stroke:currentColor;stroke-opacity:.25;stroke-width:10;fill:none}
              .f-node{fill:#fff;stroke:currentColor;stroke-width:3}
              .f-tag{font:700 16px/1.2 system-ui,Segoe UI,Roboto,Arial}
              .f-cap{font:600 14px/1.35 system-ui,Segoe UI,Roboto,Arial}
              .f-dev{font:400 13px/1.35 system-ui,Segoe UI,Roboto,Arial;opacity:.85}
              .f-pill{fill:#1d4ed8}
              .f-pill text{fill:#fff;font:600 12px/1 system-ui,Segoe UI,Roboto,Arial}
              .icon{fill:none;stroke:currentColor;stroke-width:2}
              @media (max-width:900px){
                svg{height:auto}
                .f-cap{font-size:13px}
                .f-dev{font-size:12px}
              }
            `}</style>

            <path className="f-line" d="M80,180 H1120" ref={timelineRef} />

            <circle className="f-node" cx="160" cy="180" r="22" />
            <text className="f-tag" x="160" y="95" textAnchor="middle">PS–GS</text>
            <path className="icon" d="M145 170 q0 -18 18 -18 h10 q18 0 18 18 v4 q0 18 -18 18 h-6 l-8 8 v-8 q-14 0 -14 -18z" />
            <text className="f-cap" x="160" y="215" textAnchor="middle">Entrer en communication</text>
            <text className="f-dev" x="160" y="235" textAnchor="middle">oser parler • écouter • décrire</text>
            <rect x="122" y="250" rx="10" ry="10" width="76" height="22" className="f-pill" />
            <text x="160" y="265" textAnchor="middle" fill="#fff">Rituels</text>

            <circle className="f-node" cx="360" cy="180" r="22" />
            <text className="f-tag" x="360" y="95" textAnchor="middle">CP–CE2</text>
            <path className="icon" d="M346 168 h20 a10 10 0 0 1 10 10 v18 h-20 a10 10 0 0 0 -10 10 v-38 z" />
            <path className="icon" d="M346 168 h-8 a10 10 0 0 0 -10 10 v28" />
            <text className="f-cap" x="360" y="215" textAnchor="middle">Structurer l’expression</text>
            <text className="f-dev" x="360" y="235" textAnchor="middle">lecture à voix haute • avis simple</text>
            <rect x="322" y="250" rx="10" ry="10" width="76" height="22" className="f-pill" />
            <text x="360" y="265" textAnchor="middle" fill="#fff">Radio</text>

            <circle className="f-node" cx="560" cy="180" r="22" />
            <text className="f-tag" x="560" y="95" textAnchor="middle">CM1–6e</text>
            <path className="icon" d="M552 172 v-8 a8 8 0 0 1 16 0 v8 a8 8 0 0 1 -16 0 z" />
            <path className="icon" d="M560 188 v12" />
            <path className="icon" d="M548 200 h24" />
            <text className="f-cap" x="560" y="215" textAnchor="middle">Confiance et argumentation</text>
            <text className="f-dev" x="560" y="235" textAnchor="middle">exposé • posture • questionner</text>
            <rect x="522" y="250" rx="10" ry="10" width="76" height="22" className="f-pill" />
            <text x="560" y="265" textAnchor="middle" fill="#fff">Exposés</text>

            <circle className="f-node" cx="760" cy="180" r="22" />
            <text className="f-tag" x="760" y="95" textAnchor="middle">5e–3e</text>
            <path className="icon" d="M746 172 h22 a8 8 0 0 1 0 16 h-10 l-6 6 v-6 h-6 a8 8 0 0 1 0 -16 z" />
            <text className="f-cap" x="760" y="215" textAnchor="middle">Argumenter et convaincre</text>
            <text className="f-dev" x="760" y="235" textAnchor="middle">débat • registre • gestion du stress</text>
            <rect x="706" y="250" rx="10" ry="10" width="108" height="22" className="f-pill" />
            <text x="760" y="265" textAnchor="middle" fill="#fff">Club débat • AAEH</text>

            <circle className="f-node" cx="960" cy="180" r="22" />
            <text className="f-tag" x="960" y="95" textAnchor="middle">Lycée</text>
            <path className="icon" d="M950 170 h20 v10 h-20 z" />
            <path className="icon" d="M960 180 v20" />
            <path className="icon" d="M952 200 h16" />
            <text className="f-cap" x="960" y="215" textAnchor="middle">Maîtriser l’art oratoire</text>
            <text className="f-dev" x="960" y="235" textAnchor="middle">discours nuancé • Q/R jury • esprit critique</text>
            <rect x="910" y="250" rx="10" ry="10" width="100" height="22" className="f-pill" />
            <text x="960" y="265" textAnchor="middle" fill="#fff">Oral bac • Badges</text>
          </svg>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CurriculumSoftSkills;
