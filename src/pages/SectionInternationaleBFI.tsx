import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Home } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';

const DATA = {
  heures: {
    anglaisHorsSI: 52,
    si2026: 18,
    si2027: 30,
    si2028: 42,
    besoin2028: 94,
  },
  etp: {
    capacite2026: 80,
    capacite2027: 80,
    capacite2028: 100,
    coutETP: 40_000_000,
  },
  finance: {
    surcoutEleve: 300_000,
    pointMortEleves: 134,
  },
  calendrier: [
    {
      annee: 2026,
      events: ['Primaire + 6e,5e,1re', '18 h SI/BFI', '+1 ETP', 'Capacité 80 h', 'Marge 10 h'],
    },
    {
      annee: 2027,
      events: ['+ 4e, Tle', '30 h SI/BFI', 'Capacité 80 h', 'Déficit absorbé'],
    },
    {
      annee: 2028,
      events: ['+ 3e, 2nde', '42 h SI/BFI', '+1 ETP', 'Capacité 100 h', 'Marge 6 h'],
    },
    {
      annee: 2029,
      events: ['1re cohorte BFI'],
    },
  ],
  niveaux: 7,
  scenarios: [
    'Scénario 15 élèves / niveau (105 élèves) → 31,5 M FCFA de recettes → solde -8,5 M FCFA.',
    'Scénario 20 élèves / niveau (140 élèves) → 42 M FCFA de recettes → solde +2 M FCFA.',
  ],
} as const;

type TimelineState = boolean[];

const TIMELINE_ICON = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    aria-hidden="true"
    className="h-5 w-5 text-[#C2410C]"
    fill="currentColor"
  >
    <path d="M12 2a10 10 0 11-7.07 2.93A10 10 0 0112 2zm0 2a8 8 0 106.32 3.09L12 13l-3.35-3.35a1 1 0 011.41-1.41L12 10.83l4.62-4.62A7.97 7.97 0 0012 4z" />
  </svg>
);

const CARD_ICONS = [
  (
    <svg
      key="primaire"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-10 w-10 text-[#C2410C]"
      fill="currentColor"
    >
      <path d="M4 5h16a1 1 0 011 1v12a1 1 0 01-1.447.894L12 15.118l-7.553 3.776A1 1 0 013 18V6a1 1 0 011-1zm1 2.382v9.237l6.553-3.277a1 1 0 01.894 0L19 16.619V7.382L12 11.118 5 7.382z" />
    </svg>
  ),
  (
    <svg
      key="college"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-10 w-10 text-[#C2410C]"
      fill="currentColor"
    >
      <path d="M4 4h16v2H4V4zm1 4h14a1 1 0 011 1v9a1 1 0 01-1 1H5a1 1 0 01-1-1V9a1 1 0 011-1zm1 2v7h12v-7H6zm3 9h6v2H9v-2z" />
    </svg>
  ),
  (
    <svg
      key="lycee"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-10 w-10 text-[#C2410C]"
      fill="currentColor"
    >
      <path d="M12 2a1 1 0 01.894.553l2.211 4.421 4.882.709a1 1 0 01.554 1.705l-3.53 3.44.833 4.855a1 1 0 01-1.45 1.054L12 16.897l-4.394 2.315a1 1 0 01-1.45-1.054l.833-4.855-3.53-3.44a1 1 0 01.554-1.705l4.882-.709L11.106 2.553A1 1 0 0112 2z" />
    </svg>
  ),
];

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

const formatFCFA = (value: number) =>
  `${new Intl.NumberFormat('fr-FR', { maximumFractionDigits: 0 }).format(Math.round(value))} FCFA`;

const SectionInternationaleBFI: React.FC = () => {
  const navigate = useNavigate();
  const [timelineState, setTimelineState] = useState<TimelineState>(() =>
    DATA.calendrier.map((_, index) => index === 0),
  );
  const [eleves, setEleves] = useState<number>(20);
  const [elevesInput, setElevesInput] = useState<string>('20');
  const [surcoutInput, setSurcoutInput] = useState<string>(DATA.finance.surcoutEleve.toString());
  const [coutETPInput, setCoutETPInput] = useState<string>(DATA.etp.coutETP.toString());

  const MIN_ELEVES = 10;
  const MAX_ELEVES = 28;

  const ensureNonNegative = (value: string, fallback: number) => {
    const parsed = Number.parseInt(value, 10);
    if (Number.isNaN(parsed)) {
      return fallback;
    }
    return Math.max(0, parsed);
  };

  const numericSurcout = ensureNonNegative(surcoutInput, DATA.finance.surcoutEleve);
  const numericCoutETP = ensureNonNegative(coutETPInput, DATA.etp.coutETP);

  const recettes = useMemo(() => eleves * DATA.niveaux * numericSurcout, [eleves, numericSurcout]);
  const solde = useMemo(() => recettes - numericCoutETP, [recettes, numericCoutETP]);
  const soldeEstPositif = solde >= 0;

  const toggleTimelineStep = (index: number) => {
    setTimelineState((prev) => {
      const next = [...prev];
      next[index] = !next[index];
      return next;
    });
  };

  const handleSliderChange = (value: number) => {
    const clampedValue = clamp(value, MIN_ELEVES, MAX_ELEVES);
    setEleves(clampedValue);
    setElevesInput(clampedValue.toString());
  };

  const handleNumberChange = (value: string) => {
    setElevesInput(value);
    const parsed = Number.parseInt(value, 10);
    if (!Number.isNaN(parsed)) {
      setEleves(clamp(parsed, MIN_ELEVES, MAX_ELEVES));
    }
  };

  const normalizeElevesInput = () => {
    const parsed = Number.parseInt(elevesInput, 10);
    const safeValue = clamp(Number.isNaN(parsed) ? eleves : parsed, MIN_ELEVES, MAX_ELEVES);
    setEleves(safeValue);
    setElevesInput(safeValue.toString());
  };

  const normalizeSurcout = () => {
    const safeValue = ensureNonNegative(surcoutInput, DATA.finance.surcoutEleve);
    setSurcoutInput(safeValue.toString());
  };

  const normalizeCoutETP = () => {
    const safeValue = ensureNonNegative(coutETPInput, DATA.etp.coutETP);
    setCoutETPInput(safeValue.toString());
  };

  const heuresRows = [
    {
      poste: 'Anglais hors SI',
      volume: `${DATA.heures.anglaisHorsSI} h / semaine`,
      commentaire: 'Tronc commun existant',
      accent: false,
    },
    {
      poste: 'SI & BFI (2026)',
      volume: `${DATA.heures.si2026} h / semaine`,
      commentaire: 'Renfort RH : +1 ETP',
      accent: true,
    },
    {
      poste: 'SI & BFI (2027)',
      volume: `${DATA.heures.si2027} h / semaine`,
      commentaire: 'Capacité maintenue',
      accent: false,
    },
    {
      poste: 'SI & BFI (2028)',
      volume: `${DATA.heures.si2028} h / semaine`,
      commentaire: 'Renfort RH : +1 ETP',
      accent: true,
    },
    {
      poste: 'Besoin global 2028',
      volume: `${DATA.heures.besoin2028} h / semaine`,
      commentaire: '= 4,7 ETP',
      accent: false,
    },
    {
      poste: 'Capacité 2026',
      volume: `${DATA.etp.capacite2026} h / semaine`,
      commentaire: 'Action RH prioritaire',
      accent: true,
    },
    {
      poste: 'Capacité 2027',
      volume: `${DATA.etp.capacite2027} h / semaine`,
      commentaire: 'Déficit marginal absorbé',
      accent: false,
    },
    {
      poste: 'Capacité 2028',
      volume: `${DATA.etp.capacite2028} h / semaine`,
      commentaire: 'Capacité cible',
      accent: false,
    },
  ];

  const cards = [
    {
      title: 'Primaire (CP–CM2)',
      description:
        "Tous les élèves intégrés en SIA sans surcoût. Projets immersifs en arts, sciences et EPS, correspondances et certifications adaptées.",
    },
    {
      title: 'Collège (6e–3e)',
      description:
        'Langue & Littérature américaines et Histoire-Géographie en anglais (DNL) avec préparation au Diplôme National du Brevet international (DNBi).',
    },
    {
      title: 'Lycée (1re–Terminale, BFI)',
      description:
        'American Civilization & Literature (4h), Contemporary World Studies (2h) et DNL Histoire-Géographie (2h) pour un parcours bilingue certifié.',
    },
  ];

  const faq = [
    {
      question: 'Quels enseignements ?',
      answer:
        'Primaire immersif, collège avec Langue & Littérature américaines et Histoire-Géographie en anglais, lycée avec ACL, CDM et DNL Histoire-Géographie.',
    },
    {
      question: 'Quelle sélection ?',
      answer:
        "Au primaire, tous les élèves sont intégrés. Au secondaire, une procédure SIA permet d'évaluer la motivation et les compétences linguistiques.",
    },
    {
      question: 'Quel diplôme ?',
      answer:
        'La section américaine du Baccalauréat Français International (BFI) en Terminale, gage de reconnaissance internationale.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white font-raleway text-[#334155]">
      <Navbar showLogo />
      <header className="bg-gradient-to-br from-white via-[#F8FAFC] to-[#E2E8F0] py-16 md:py-20">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-[#F1F5F9] px-4 py-2 text-sm font-semibold text-[#C2410C]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-5 w-5"
                fill="currentColor"
              >
                <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3zm0 2.236L6 8v7.764l6 3.375 6-3.375V8l-6-2.764z" />
              </svg>
              Section internationale LFJP
            </span>
            <div className="flex flex-wrap items-center gap-2">
              <Button
                variant="outline"
                onClick={() => navigate('/plan-strategique')}
                className="min-h-[44px] min-w-[44px] border-[#C2410C]/40 text-[#0F172A] hover:bg-[#C2410C] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C2410C]"
              >
                <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
                Retour
              </Button>
              <Button
                variant="outline"
                onClick={() => navigate('/')}
                className="min-h-[44px] min-w-[44px] border-[#C2410C]/40 text-[#0F172A] hover:bg-[#C2410C] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C2410C]"
              >
                <Home className="mr-2 h-4 w-4" aria-hidden="true" />
                Accueil
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h1 className="font-playfair text-3xl font-bold text-[#0F172A] md:text-4xl lg:text-5xl">
              Section Internationale Américaine (SIA) &amp; BFI – LFJP
            </h1>
            <p className="max-w-3xl text-lg leading-relaxed text-[#334155] md:text-xl">
              Un parcours bilingue d&apos;excellence, ouvert dès le primaire et culminant avec le Baccalauréat Français
              International. Une dynamique progressive pour faire éclore la première cohorte diplômée en 2029.
            </p>
            <p className="text-base font-semibold uppercase tracking-wide text-[#0F172A]">
              Parcours bilingue du CP à la Terminale • Première cohorte BFI en 2029
            </p>
            <nav aria-label="Sections principales" className="flex flex-wrap gap-3">
              <a
                href="#nature"
                className="inline-flex min-h-[44px] min-w-[180px] items-center justify-center rounded-full bg-[#C2410C] px-6 py-3 text-base font-semibold text-white shadow-[0_6px_20px_rgba(194,65,12,0.25)] transition duration-200 hover:scale-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F172A]"
              >
                Nature du projet
              </a>
              <a
                href="#calendrier"
                className="inline-flex min-h-[44px] min-w-[180px] items-center justify-center rounded-full bg-[#C2410C] px-6 py-3 text-base font-semibold text-white shadow-[0_6px_20px_rgba(194,65,12,0.25)] transition duration-200 hover:scale-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F172A]"
              >
                Calendrier &amp; ETP
              </a>
              <a
                href="#couts"
                className="inline-flex min-h-[44px] min-w-[180px] items-center justify-center rounded-full bg-[#C2410C] px-6 py-3 text-base font-semibold text-white shadow-[0_6px_20px_rgba(194,65,12,0.25)] transition duration-200 hover:scale-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F172A]"
              >
                Coûts &amp; équilibre
              </a>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-1 bg-[#F8FAFC]">
        <section id="nature" className="py-16">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6">
            <div className="max-w-3xl">
              <h2 className="font-playfair text-2xl font-bold text-[#0F172A] md:text-3xl">Nature du projet pédagogique</h2>
              <p className="mt-4 text-base leading-relaxed md:text-lg">
                La Section Internationale Américaine articule continuité linguistique, projets immersifs et certifications adaptées pour sécuriser le parcours bilingue du CP à la Terminale.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" role="list">
              {cards.map((card, index) => (
                <article
                  key={card.title}
                  role="listitem"
                  className="group flex min-h-[260px] flex-col gap-4 rounded-2xl bg-white p-6 shadow-[0_12px_32px_rgba(15,23,42,0.12)] transition hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(15,23,42,0.18)]"
                >
                  <span aria-hidden="true" className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#FFF7ED] text-[#C2410C]">
                    {CARD_ICONS[index]}
                  </span>
                  <h3 className="text-xl font-semibold text-[#0F172A]">{card.title}</h3>
                  <p className="text-sm leading-relaxed text-[#334155] md:text-base">{card.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="calendrier" className="bg-[#E2E8F0] py-16">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6">
            <div className="max-w-3xl">
              <h2 className="font-playfair text-2xl font-bold text-[#0F172A] md:text-3xl">
                Calendrier de déploiement &amp; besoins horaires
              </h2>
              <p className="mt-4 text-base leading-relaxed md:text-lg">
                Une montée en charge progressive de 2026 à 2029 garantit l&apos;équilibre des ressources humaines et la réussite du premier diplôme BFI.
              </p>
            </div>
            <div className="relative" aria-live="polite">
              <ol
                className="relative grid gap-6 pt-10 sm:grid-cols-2 lg:grid-cols-4 before:pointer-events-none before:absolute before:left-0 before:right-0 before:top-6 before:hidden before:h-px before:bg-gradient-to-r before:from-[#0F172A]/20 before:via-[#334155]/40 before:to-[#C2410C]/50 lg:before:block"
              >
                {DATA.calendrier.map((step, index) => {
                  const isOpen = timelineState[index];
                  const panelId = `timeline-panel-${step.annee}`;
                  const buttonId = `timeline-trigger-${step.annee}`;
                  return (
                    <li key={step.annee} className="relative flex flex-col items-center text-center">
                      <button
                        id={buttonId}
                        type="button"
                        onClick={() => toggleTimelineStep(index)}
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        className="flex min-h-[120px] w-full flex-col items-center justify-between gap-3 rounded-2xl bg-transparent px-4 py-4 text-[#0F172A] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C2410C]"
                      >
                        <span
                          aria-hidden="true"
                          className={`flex h-12 w-12 items-center justify-center rounded-full border-4 border-white bg-[#C2410C] text-white shadow-[0_0_0_4px_rgba(194,65,12,0.25)] transition duration-200 ${
                            isOpen ? 'scale-110' : ''
                          }`}
                        >
                          {step.annee.toString().slice(-2)}
                        </span>
                        <span className="text-lg font-semibold">{step.annee}</span>
                      </button>
                      <div
                        id={panelId}
                        role="region"
                        aria-labelledby={buttonId}
                        className={`mt-4 w-full max-w-xs rounded-2xl bg-white p-4 text-left shadow-[0_12px_32px_rgba(15,23,42,0.12)] transition duration-200 focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-[#C2410C] ${
                          isOpen ? 'block' : 'hidden'
                        }`}
                      >
                        <ul className="flex flex-col gap-3">
                          {step.events.map((event) => (
                            <li key={event} className="flex items-start gap-2 text-sm text-[#334155]">
                              <span aria-hidden="true" className="mt-0.5">
                                {TIMELINE_ICON}
                              </span>
                              <span>{event}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </li>
                  );
                })}
              </ol>
            </div>

            <div className="overflow-hidden rounded-2xl bg-white shadow-[0_12px_32px_rgba(15,23,42,0.12)]">
              <table className="min-w-full divide-y divide-[#E2E8F0]">
                <caption className="px-6 pt-6 text-left text-xl font-semibold text-[#0F172A]">
                  Heures &amp; ETP de référence
                </caption>
                <thead className="bg-[#F1F5F9] text-left text-sm font-semibold uppercase tracking-wide text-[#0F172A]">
                  <tr>
                    <th scope="col" className="px-6 py-4">Poste</th>
                    <th scope="col" className="px-6 py-4">Volume</th>
                    <th scope="col" className="px-6 py-4">Commentaires</th>
                  </tr>
                </thead>
                <tbody className="text-sm text-[#334155]">
                  {heuresRows.map((row) => (
                    <tr
                      key={row.poste}
                      className={`border-b border-[#E2E8F0] last:border-b-0 ${row.accent ? 'bg-[#FFF7ED]' : 'bg-white'}`}
                    >
                      <th scope="row" className="px-6 py-4 text-left text-[#0F172A]">{row.poste}</th>
                      <td className="px-6 py-4">{row.volume}</td>
                      <td className="px-6 py-4 font-medium">{row.commentaire}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section id="couts" className="py-16">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6">
            <div className="max-w-3xl">
              <h2 className="font-playfair text-2xl font-bold text-[#0F172A] md:text-3xl">Coûts &amp; équilibre financier</h2>
              <p className="mt-4 text-base leading-relaxed md:text-lg">
                Les hypothèses ci-dessous intègrent un coût enseignant prudent et un surcoût secondaire par élève. Ajustez le mini-simulateur pour projeter différentes capacités.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { label: "Coût estimatif d'un enseignant (hypothèse haute).", value: formatFCFA(20_000_000) },
                { label: 'Surcoût secondaire par élève et par an.', value: formatFCFA(DATA.finance.surcoutEleve) },
                { label: 'Investissement annuel pour 2 postes dédiés SIA/BFI.', value: formatFCFA(DATA.etp.coutETP) },
                {
                  label: 'Point mort financier, soit environ 19 élèves par niveau.',
                  value: `${DATA.finance.pointMortEleves} élèves`,
                },
              ].map((item) => (
                <article
                  key={item.label}
                  className="flex min-h-[200px] flex-col justify-between gap-3 rounded-2xl bg-white p-6 text-left shadow-[0_12px_32px_rgba(15,23,42,0.12)] transition hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(15,23,42,0.18)]"
                >
                  <strong className="text-2xl font-semibold text-[#0F172A]">{item.value}</strong>
                  <p className="text-sm text-[#334155] md:text-base">{item.label}</p>
                </article>
              ))}
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-[0_12px_32px_rgba(15,23,42,0.12)] md:p-8">
              <div className="flex flex-col gap-4">
                <div>
                  <h3 id="simulateur-title" className="text-xl font-semibold text-[#0F172A] md:text-2xl">
                    Mini-simulateur
                  </h3>
                  <p className="mt-2 text-sm text-[#334155] md:text-base">
                    Testez vos hypothèses d&apos;effectifs et visualisez l&apos;impact sur la soutenabilité financière du projet.
                  </p>
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                  <label className="flex flex-col gap-2 text-sm font-medium text-[#0F172A]" htmlFor="eleves-slider">
                    Élèves par niveau
                    <input
                      id="eleves-slider"
                      type="range"
                      min={MIN_ELEVES}
                      max={MAX_ELEVES}
                      step={1}
                      value={eleves}
                      onChange={(event) => handleSliderChange(Number(event.target.value))}
                      aria-describedby="eleves-value"
                      className="h-3 w-full cursor-pointer rounded-full bg-[#E2E8F0] accent-[#C2410C]"
                    />
                    <div id="eleves-value" className="text-sm text-[#334155]" aria-live="polite">
                      <strong className="text-base text-[#0F172A]">{eleves} élèves</strong> sur {DATA.niveaux} niveaux.
                    </div>
                  </label>
                  <label className="flex flex-col gap-2 text-sm font-medium text-[#0F172A]" htmlFor="eleves-number">
                    Saisie directe (optionnelle)
                    <input
                      id="eleves-number"
                      type="number"
                      min={MIN_ELEVES}
                      max={MAX_ELEVES}
                      value={elevesInput}
                      onChange={(event) => handleNumberChange(event.target.value)}
                      onBlur={normalizeElevesInput}
                      aria-label="Nombre d'élèves par niveau"
                      className="min-h-[44px] rounded-xl border border-[#CBD5F5] px-3 py-2 text-base text-[#0F172A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C2410C]"
                    />
                  </label>
                  <label className="flex flex-col gap-2 text-sm font-medium text-[#0F172A]" htmlFor="surcout">
                    Surcoût / élève (FCFA)
                    <input
                      id="surcout"
                      type="number"
                      min={0}
                      step={5_000}
                      value={surcoutInput}
                      onChange={(event) => setSurcoutInput(event.target.value)}
                      onBlur={normalizeSurcout}
                      className="min-h-[44px] rounded-xl border border-[#CBD5F5] px-3 py-2 text-base text-[#0F172A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C2410C]"
                    />
                  </label>
                  <label className="flex flex-col gap-2 text-sm font-medium text-[#0F172A]" htmlFor="cout-etp">
                    Coût total ETP (FCFA)
                    <input
                      id="cout-etp"
                      type="number"
                      min={0}
                      step={500_000}
                      value={coutETPInput}
                      onChange={(event) => setCoutETPInput(event.target.value)}
                      onBlur={normalizeCoutETP}
                      className="min-h-[44px] rounded-xl border border-[#CBD5F5] px-3 py-2 text-base text-[#0F172A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C2410C]"
                    />
                  </label>
                </div>
                <div className="flex flex-wrap items-center gap-4 text-sm text-[#334155]" aria-live="polite">
                  <div>
                    <strong className="block text-base text-[#0F172A]">Recettes estimées :</strong>
                    <span>{formatFCFA(recettes)}</span>
                  </div>
                  <div>
                    <strong className="block text-base text-[#0F172A]">Solde :</strong>
                    <span>{formatFCFA(solde)}</span>
                  </div>
                  <span
                    role="status"
                    className={`inline-flex min-h-[36px] min-w-[140px] items-center justify-center rounded-full px-4 py-2 text-sm font-semibold ${
                      soldeEstPositif
                        ? 'bg-emerald-100 text-emerald-700'
                        : 'bg-red-100 text-red-700'
                    }`}
                  >
                    {soldeEstPositif ? 'Excédent' : 'Déficit'}
                  </span>
                </div>
                <ul className="list-disc space-y-2 pl-6 text-sm text-[#334155] md:text-base">
                  {DATA.scenarios.map((scenario) => (
                    <li key={scenario}>{scenario}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="bg-[#E2E8F0] py-16">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6">
            <div className="max-w-2xl">
              <h2 className="font-playfair text-2xl font-bold text-[#0F172A] md:text-3xl">FAQ</h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" role="list">
              {faq.map((item, index) => {
                const detailsId = `faq-${index}`;
                return (
                  <details
                    key={item.question}
                    className="group rounded-2xl bg-white p-6 shadow-[0_12px_32px_rgba(15,23,42,0.12)] transition hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(15,23,42,0.18)]"
                  >
                    <summary
                      className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-[#0F172A] focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C2410C]"
                      id={detailsId}
                    >
                      {item.question}
                      <span
                        aria-hidden="true"
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F1F5F9] text-[#C2410C] transition group-open:rotate-45"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                          <path d="M11 5h2v14h-2z" />
                          <path d="M5 11h14v2H5z" />
                        </svg>
                      </span>
                    </summary>
                    <p className="mt-4 text-sm leading-relaxed text-[#334155] md:text-base">{item.answer}</p>
                  </details>
                );
              })}
            </div>
          </div>
        </section>
        <BackToTop />
      </main>

      <Footer />
    </div>
  );
};

export default SectionInternationaleBFI;
