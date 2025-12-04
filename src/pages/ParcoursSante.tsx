import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge, badgeVariants } from '../components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { Tooltip, TooltipContent, TooltipTrigger } from '../components/ui/tooltip';
import { cn } from '../lib/utils';
import {
  Activity,
  ArrowLeft,
  Ban,
  Droplets,
  HeartHandshake,
  HeartPulse,
  Home,
  ShieldCheck,
  Utensils,
} from 'lucide-react';

const PAGE_TITLE = 'Parcours Santé | PSD LFJP';

type DomainKey = 'addictions' | 'alimentation' | 'physique' | 'affectif' | 'protection' | 'hygiene';

type TimelineEntry = {
  level: string;
  focus: string;
  details: string[];
};

type Reference = {
  label: string;
  href?: string;
};

type Domain = {
  key: DomainKey;
  title: string;
  icon: React.ElementType;
  tone: string;
  description: string;
  timeline: TimelineEntry[];
  references: Reference[];
};

const domains: Domain[] = [
  {
    key: 'addictions',
    title: 'Prévention des conduites addictives',
    icon: Ban,
    tone: 'from-emerald-500/20 via-emerald-500/10 to-emerald-500/0',
    description:
      "Sensibiliser progressivement aux risques liés aux écrans, au tabac, à l'alcool ou aux substances, en associant les familles et les partenaires de prévention.",
    timeline: [
      {
        level: 'Cycle 2 (CP–CE2)',
        focus: 'Usage raisonné du numérique',
        details: [
          "Sensibilisation aux dangers de l'utilisation excessive des écrans (mallette École Territoires Numériques éducatifs).",
          'Organisation de la semaine sans écran avec les familles (CESCE) pour ancrer les bonnes pratiques.',
        ],
      },
      {
        level: 'Cycle 3 (CM1–6e)',
        focus: 'Prévenir les dépendances',
        details: [
          "Sensibilisation prolongée aux usages numériques (RS, jeux vidéo) et semaine sans écran avec les familles (CESCE).",
          'Appui sur la mallette École Territoires Numériques éducatifs pour travailler les bonnes pratiques.',
        ],
      },
      {
        level: 'Cycle 4 (5e–3e)',
        focus: 'Usages numériques responsables et prévention tabac/alcool',
        details: [
          'Utilisation des écrans, réseaux sociaux et jeux vidéo : mallette Collège TNE, module « Dangers des écrans et des réseaux sociaux », fiche Eduscol 47567, ressource CRIPS.',
          "Sensibilisation aux dangers du tabac (APS youth harms) et de l'alcool (binge drinking, comas éthyliques) avec intervention de l'infirmière.",
        ],
      },
      {
        level: 'Lycée',
        focus: 'Prévenir les conduites à risques',
        details: [
          'Sensibilisation aux dangers des substances stupéfiantes et rappel des risques juridiques et sanitaires.',
          'Intervention du commissariat de police pour contextualiser les enjeux et les recours.',
        ],
      },
    ],
    references: [
      {
        label: 'Mallette École et Collège Territoires Numériques éducatifs (TNE).',
        href: 'https://tne.trousseaprojets.fr/professionnel-education-nationale',
      },
      {
        label: 'Fiche Eduscol – Dangers des écrans et des réseaux sociaux (47567).',
        href: 'https://eduscol.education.fr/document/47567/download',
      },
      {
        label: 'Ressource CRIPS – Prévention des usages numériques.',
        href: 'https://www.lecrips-idf.net/prevention-ecrans-des-solutions-pour-accompagner-et-sensibiliser-les-jeunes-aux-bonnes-pratiques/',
      },
      {
        label: 'Documentation tabac/alcool – APS youth harms.',
        href: 'https://assets.tobaccofreekids.org/global/pdfs/fr/APS_youth_harms_fr.pdf',
      },
      { label: 'Interventions infirmière, CESCE et commissariat de police pour ancrer la prévention.' },
    ],
  },
  {
    key: 'alimentation',
    title: "Éducation à l'alimentation et au goût",
    icon: Utensils,
    tone: 'from-amber-500/20 via-amber-500/10 to-amber-500/0',
    description:
      "Découvrir le goût, promouvoir l'équilibre alimentaire et relier nutrition, santé et activité physique à chaque étape de la scolarité.",
    timeline: [
      {
        level: 'Cycle 1 (PS–GS)',
        focus: 'Découvrir et goûter',
        details: [
          'Semaine du goût et participation aux commissions restauration.',
          "Sensibilisation à l'importance du petit-déjeuner.",
          'Ressources : outils éducatifs du ministère de l’agriculture.',
        ],
      },
      {
        level: 'Cycle 2 (CP–CE2)',
        focus: 'Construire l’équilibre alimentaire',
        details: [
          "CP : repérer les familles d'aliments et prévenir les consommations excessives en sucre, sel et gras.",
          'Lien alimentation / activité physique, goûter matinal sain (CVE) et semaine du goût.',
          'Ressources : “Manger, Bouger pour ma santé” et vademecum Eduscol.',
        ],
      },
      {
        level: 'Cycle 3 (CM1–6e)',
        focus: 'Comprendre le corps et la nutrition',
        details: [
          '6° : sensibilisation aux troubles alimentaires (anorexie, boulimie, orthorexie).',
          'Éducation aux bonnes pratiques : programme “J’aime manger, j’aime bouger”.',
          'Interventions infirmières en classes de 5° et 2nde.',
        ],
      },
      {
        level: 'Cycle 4 (5e–3e)',
        focus: 'Approfondir et débattre',
        details: ['Ateliers à poursuivre autour de la nutrition et de la santé des adolescents.'],
      },
      {
        level: 'Lycée',
        focus: 'Autonomie alimentaire',
        details: ['2nde : rappels des bonnes pratiques et liens rythmes de vie / alimentation.'],
      },
    ],
    references: [
      { label: 'Ressources “Manger, Bouger pour ma santé”.' },
      { label: 'Vademecum Eduscol – équilibre alimentaire et prévention.' },
    ],
  },
  {
    key: 'physique',
    title: "Promotion de l'activité physique",
    icon: Activity,
    tone: 'from-sky-500/20 via-sky-500/10 to-sky-500/0',
    description:
      'Encourager le mouvement quotidien, relier EPS et santé et valoriser les projets sportifs collectifs du LFJP.',
    timeline: [
      {
        level: 'Cycle 1 (PS–GS)',
        focus: 'Bouger pour grandir',
        details: [
          "Comprendre ce qu'est l'activité physique et ses bénéfices.",
          'Ressource : projet “Manger, Bouger pour ma santé”.',
        ],
      },
      {
        level: 'Cycle 2 (CP–CE2)',
        focus: 'Habitudes actives',
        details: [
          "CP : promotion de l'activité physique (liée aux découvertes du monde).",
          'Mise en place des 30 minutes d’APQ et ressources APQ.',
        ],
      },
      {
        level: 'Cycle 3 (CM1–6e)',
        focus: 'Tests et pratiques régulières',
        details: [
          'CM1 : respiration, digestion et circulation sanguine ; cross du LFJP.',
          '6° : tests d’aptitude physique – stratégie sport-santé 2025-2030.',
        ],
      },
      {
        level: 'Cycle 4 (5e–3e)',
        focus: 'Projets et sections sportives',
        details: [
          'Participation aux JOJ de Dakar (octobre 2026).',
          'Sections et associations sportives (football, boxe, judo) ; événements sportifs AEFE.',
        ],
      },
      {
        level: 'Lycée',
        focus: 'Perspectives sport-santé',
        details: ['Accompagnement des lycéens vers un rythme sportif autonome.'],
      },
    ],
    references: [
      { label: 'Stratégie sport-santé 2025-2030.' },
      { label: 'Ressources APQ et “Manger, Bouger pour ma santé”.' },
    ],
  },
  {
    key: 'affectif',
    title: 'Éducation à la vie affective, relationnelle et sexuelle',
    icon: HeartHandshake,
    tone: 'from-rose-500/20 via-rose-500/10 to-rose-500/0',
    description:
      'Construire l’estime de soi, le respect de l’autre et des relations égalitaires ; aborder la sexualité dans une approche globale et respectueuse.',
    timeline: [
      {
        level: 'Cycle 1 (PS–GS)',
        focus: 'Grandir avec son corps et les autres',
        details: [
          'Se connaître, vivre et grandir avec son corps ; relations épanouissantes.',
          'Respect de soi et des autres, programme ministériel EVAS maternelle.',
        ],
      },
      {
        level: 'Cycle 2 (CP–CE2)',
        focus: 'Emotions et intimité',
        details: [
          "CP : comprendre ce qu'est l'intime et la diversité des émotions.",
          "CE1 : estime de soi, protection de l'intimité et repérage des discriminations.",
          'CE2 : consentement, savoir solliciter ou exprimer un refus.',
        ],
      },
      {
        level: 'Cycle 3 (CM1–6e)',
        focus: 'Relations respectueuses',
        details: [
          'CM1 : changements du corps, repérage du harcèlement, lutte contre les stéréotypes.',
          'CM2 : se protéger des violences sexistes et sexuelles ; prévention des risques liés au numérique.',
          '6° : vivre les changements corporels et trouver sa place dans le groupe.',
        ],
      },
      {
        level: 'Cycle 4 (5e–3e)',
        focus: 'Choix responsables et égalité',
        details: [
          '5° : développer librement sa personnalité et choisir ses relations.',
          '4° : sexualité comme réalité complexe ; faire des choix responsables en santé sexuelle.',
          '3° : relation réciproque et égalitaire ; inscrire la sexualité dans les droits humains.',
        ],
      },
      {
        level: 'Lycée',
        focus: 'Autonomie et respect',
        details: [
          '2nde : image positive de soi, protection de l’intimité à l’ère numérique.',
          '1ère : consentir ou refuser librement, respecter les libertés des autres.',
          'Terminale : être libre d’être soi parmi les autres et reconnaître ses émotions.',
        ],
      },
    ],
    references: [
      { label: 'Programme EVAS – Education à la vie affective et sexuelle.' },
      { label: 'Séances réglementaires de prévention et d’écoute infirmière.' },
    ],
  },
  {
    key: 'protection',
    title: "Protection de l'enfance",
    icon: ShieldCheck,
    tone: 'from-indigo-500/20 via-indigo-500/10 to-indigo-500/0',
    description:
      "Garantir la sécurité des élèves, détecter et signaler les situations préoccupantes et rappeler les droits de l'enfant.",
    timeline: [
      {
        level: 'Cycle 1 (PS–GS)',
        focus: 'Sensibilisation précoce',
        details: [
          "Séance annuelle sur la protection de l'enfance et les violences intrafamiliales (circulaire du 7 février 2022).",
          'Détection et signalement systématiques ; participation à la journée mondiale des droits de l’enfant (20 novembre).',
        ],
      },
      {
        level: 'Cycle 2 (CP–CE2)',
        focus: 'Repères et vigilance',
        details: ['Actions à consolider pour renforcer les réflexes de protection et de signalement.'],
      },
      {
        level: 'Cycle 3 (CM1–6e)',
        focus: 'Savoir alerter',
        details: ['Séances de rappel pour identifier un adulte référent et demander de l’aide.'],
      },
      {
        level: 'Cycle 4 (5e–3e)',
        focus: 'Prévenir les violences',
        details: ['Rappels ciblés sur les violences sexistes et sexuelles et les ressources d’écoute.'],
      },
      {
        level: 'Lycée',
        focus: 'Rendre l’élève acteur de sa protection',
        details: ['Sensibilisation aux droits, au consentement et aux recours disponibles en cas de danger.'],
      },
    ],
    references: [
      { label: 'Circulaire du 7 février 2022 – protection de l’enfance.' },
      { label: 'Journée mondiale des droits de l’enfant.' },
    ],
  },
  {
    key: 'hygiene',
    title: 'Vaccination · Environnement · Hygiène',
    icon: Droplets,
    tone: 'from-cyan-500/20 via-cyan-500/10 to-cyan-500/0',
    description:
      "Développer les réflexes d'hygiène, le suivi vaccinal et la vigilance environnementale pour protéger la santé au quotidien.",
    timeline: [
      {
        level: 'Cycle 1 (PS–GS)',
        focus: 'Gestes essentiels',
        details: [
          'Lavage des mains, brossage des dents et protection solaire ; ressource “Vivre avec le soleil”.',
          'Contrôle infirmier des 6 ans.',
        ],
      },
      {
        level: 'Cycle 2 (CP–CE2)',
        focus: 'Hygiène corporelle et sommeil',
        details: [
          "CP : hygiène corporelle et bucco-dentaire (perte des dents de lait), intervention de l'infirmière ou d'un dentiste.",
          'Protection solaire et contrôle infirmier des 11 ans.',
        ],
      },
      {
        level: 'Cycle 3 (CM1–6e)',
        focus: 'Sommeil et santé mentale',
        details: [
          "6° : importance du sommeil pour la croissance, la mémorisation et l'attention ; contrôle infirmier des 15 ans.",
          'Cellules d’écoute infirmière autour de la santé mentale des adolescents.',
        ],
      },
      {
        level: 'Cycle 4 (5e–3e)',
        focus: 'Rappels sanitaires',
        details: ['Focus périodiques sur vaccination, hygiène et prévention des risques quotidiens.'],
      },
      {
        level: 'Lycée',
        focus: 'Prévention ciblée',
        details: ['2nde : sensibilisation aux IST – journée mondiale de lutte contre le SIDA (1er décembre).'],
      },
    ],
    references: [
      { label: 'Programmes vaccination / hygiène AEFE.' },
      { label: 'Ressource “Vivre avec le soleil”.' },
    ],
  },
];

const domainLookup = domains.reduce<Record<DomainKey, Domain>>((acc, domain) => {
  acc[domain.key] = domain;
  return acc;
}, {} as Record<DomainKey, Domain>);

const levelCycleMap: Record<string, string> = {
  PS: 'Cycle 1',
  MS: 'Cycle 1',
  GS: 'Cycle 1',
  CP: 'Cycle 2',
  CE1: 'Cycle 2',
  CE2: 'Cycle 2',
  CM1: 'Cycle 3',
  CM2: 'Cycle 3',
  '6e': 'Cycle 3',
  '5e': 'Cycle 4',
  '4e': 'Cycle 4',
  '3e': 'Cycle 4',
  '2nde': 'Lycée',
  "1ère": 'Lycée',
  Tle: 'Lycée',
};

const getTimelineEntry = (domain: Domain, level: string) => {
  const cycle = levelCycleMap[level];
  if (!cycle) return undefined;

  return domain.timeline.find((entry) => entry.level.includes(cycle));
};

const progressionGrid: { level: string; domains: Partial<Record<DomainKey, boolean>> }[] = [
  { level: 'PS', domains: { addictions: false, alimentation: true, physique: true, affectif: true, protection: true, hygiene: true } },
  { level: 'MS', domains: { addictions: false, alimentation: true, physique: true, affectif: true, protection: true, hygiene: true } },
  { level: 'GS', domains: { addictions: false, alimentation: true, physique: true, affectif: true, protection: true, hygiene: true } },
  { level: 'CP', domains: { addictions: true, alimentation: true, physique: true, affectif: true, protection: true, hygiene: true } },
  { level: 'CE1', domains: { addictions: true, alimentation: true, physique: true, affectif: true, protection: true, hygiene: true } },
  { level: 'CE2', domains: { addictions: true, alimentation: true, physique: true, affectif: true, protection: true, hygiene: true } },
  { level: 'CM1', domains: { addictions: true, alimentation: true, physique: true, affectif: true, protection: true, hygiene: true } },
  { level: 'CM2', domains: { addictions: true, alimentation: true, physique: true, affectif: true, protection: true, hygiene: true } },
  { level: '6e', domains: { addictions: true, alimentation: true, physique: true, affectif: true, protection: true, hygiene: true } },
  { level: '5e', domains: { addictions: true, alimentation: true, physique: true, affectif: true, protection: true, hygiene: true } },
  { level: '4e', domains: { addictions: true, alimentation: true, physique: true, affectif: true, protection: true, hygiene: true } },
  { level: '3e', domains: { addictions: true, alimentation: true, physique: true, affectif: true, protection: true, hygiene: true } },
  { level: '2nde', domains: { addictions: true, alimentation: true, physique: true, affectif: true, protection: true, hygiene: true } },
  { level: '1ère', domains: { addictions: true, alimentation: true, physique: true, affectif: true, protection: true, hygiene: true } },
  { level: 'Tle', domains: { addictions: true, alimentation: true, physique: true, affectif: true, protection: true, hygiene: true } },
];

const ParcoursSante = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = PAGE_TITLE;
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-raleway text-slate-900">
      <Navbar showLogo={true} />

      <header className="bg-gradient-to-r from-emerald-700 via-teal-600 to-sky-700 text-white py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4">
              <HeartPulse className="h-14 w-14" />
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-white/70">Cadre scolaire & santé</p>
                <h1 className="text-3xl md:text-5xl font-playfair font-bold">Parcours Santé</h1>
                <p className="text-lg md:text-2xl text-white/90 mt-2">
                  Bien-être, prévention et accompagnement des élèves du LFJP
                </p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 text-center text-sm font-semibold text-white/90 md:w-1/2">
              <div className="rounded-2xl bg-white/10 px-3 py-2 shadow-sm">🛑 Addictions</div>
              <div className="rounded-2xl bg-white/10 px-3 py-2 shadow-sm">🍽️ Alimentation</div>
              <div className="rounded-2xl bg-white/10 px-3 py-2 shadow-sm">🏃 Activité</div>
              <div className="rounded-2xl bg-white/10 px-3 py-2 shadow-sm">💬 Vie affective</div>
              <div className="rounded-2xl bg-white/10 px-3 py-2 shadow-sm">🛡️ Protection</div>
              <div className="rounded-2xl bg-white/10 px-3 py-2 shadow-sm">🧪 Hygiène</div>
            </div>
          </div>
          <p className="mt-6 max-w-4xl text-base md:text-lg text-white/80">
            Une vision synthétique et progressive : six domaines, des contenus harmonisés du cycle 1 à la Terminale, une
            navigation fluide pour accéder rapidement aux actions et ressources clés.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button
              variant="secondary"
              onClick={() => scrollToSection('introduction')}
              className="bg-white text-emerald-900 hover:bg-emerald-50"
            >
              Découvrir la vision
            </Button>
            <Button variant="outline" onClick={() => scrollToSection('frise')} className="border-white/60 text-white">
              Voir la frise PS → Terminale
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto flex flex-wrap gap-3 px-6 py-6">
        <Button variant="outline" onClick={() => navigate(-1)} className="flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" />
          Retour
        </Button>
        <Button variant="outline" onClick={() => navigate('/')} className="flex items-center gap-2">
          <Home className="h-4 w-4" />
          Accueil
        </Button>
      </div>

      <main className="flex-1 pb-16">
        <div className="container mx-auto space-y-10 px-6">
          <section
            id="introduction"
            className="rounded-3xl border border-emerald-100 bg-white/90 p-8 shadow-sm backdrop-blur"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-2xl font-playfair font-semibold text-emerald-700">Vision structurée du Parcours Santé</h2>
                <p className="mt-3 max-w-4xl text-base text-slate-700">
                  Six champs complémentaires, alignés avec les attendus Éducation nationale / AEFE, présentés dans un format
                  clair et immédiatement lisible. Chaque domaine dispose d’une description brève, d’un parcours PS → Terminale
                  en accordéon et d’un accès rapide aux ressources institutionnelles.
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {domains.map((domain) => (
                <Card
                  key={domain.key}
                  onClick={() => scrollToSection(domain.key)}
                  className="border-emerald-100 bg-gradient-to-br from-white to-emerald-50/30 cursor-pointer transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <CardHeader className="space-y-1">
                    <div className="flex items-center gap-2 text-emerald-700">
                      <domain.icon className="h-5 w-5" />
                      <p className="text-xs font-semibold uppercase tracking-[0.2em]">{domain.title}</p>
                    </div>
                    <CardTitle className="text-lg text-slate-900">Parcours structuré</CardTitle>
                    <CardDescription className="text-slate-700">{domain.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-sm text-emerald-800/90">
                    Accéder directement à la rubrique et aux outils dédiés pour chaque cycle.
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {domains.map((domain) => (
            <section
              key={domain.key}
              id={domain.key}
              className="overflow-hidden rounded-3xl border border-emerald-100 bg-white shadow-sm"
            >
              <div className={`bg-gradient-to-r ${domain.tone} px-6 py-5`}></div>
              <div className="-mt-10 px-6 pb-8">
                <Card className="-mt-16 border-emerald-100 shadow-lg">
                  <CardHeader className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center gap-3 text-emerald-700">
                        <domain.icon className="h-7 w-7" />
                        <CardTitle className="text-3xl font-playfair text-emerald-700">{domain.title}</CardTitle>
                      </div>
                      <CardDescription className="text-slate-700">{domain.description}</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-5">
                    <Accordion type="single" collapsible className="space-y-3">
                      {domain.timeline.map((entry) => (
                        <AccordionItem
                          value={`${domain.key}-${entry.level}`}
                          key={`${domain.key}-${entry.level}`}
                          className="rounded-2xl border border-emerald-100 bg-emerald-50/40 px-4"
                        >
                          <AccordionTrigger className="text-left text-base font-semibold text-emerald-800">
                            <div>
                              <p>{entry.level}</p>
                              <p className="text-xs font-normal text-emerald-700/80">{entry.focus}</p>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent>
                            <ul className="space-y-2 text-sm leading-relaxed text-slate-700">
                              {entry.details.map((item) => (
                                <li key={item} className="flex gap-2">
                                  <span
                                    className="mt-1 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-500"
                                    aria-hidden
                                  />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                    <div className="flex flex-wrap gap-2 text-xs text-emerald-700">
                      {domain.references.map((ref) =>
                        ref.href ? (
                          <a
                            key={ref.label}
                            href={ref.href}
                            target="_blank"
                            rel="noreferrer noopener"
                            className={cn(
                              badgeVariants({ variant: 'outline' }),
                              'border-emerald-200 text-emerald-800 hover:bg-emerald-50'
                            )}
                          >
                            {ref.label}
                          </a>
                        ) : (
                          <Badge key={ref.label} variant="outline" className="border-emerald-200 text-emerald-800">
                            {ref.label}
                          </Badge>
                        )
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>
          ))}

          <section id="frise" className="rounded-3xl border border-emerald-100 bg-white p-8 shadow-sm">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">Synthèse visuelle</p>
                <h3 className="text-2xl font-playfair font-semibold text-emerald-800">Frise PS → Terminale</h3>
                <p className="text-sm text-slate-700">
                  Les six axes en un coup d’œil : chaque pastille indique une action identifiée par niveau. Les cases claires
                  signalent les points à renforcer.
                </p>
              </div>
              <Badge className="bg-emerald-50 text-emerald-800">15 niveaux / 6 axes</Badge>
            </div>

            <div className="mt-6 overflow-x-auto">
              <div className="min-w-[720px] space-y-2">
                <div className="grid grid-cols-[100px_repeat(6,1fr)] items-center gap-2 text-xs font-semibold text-emerald-800">
                  <div>Niveau</div>
                  <div className="flex items-center gap-2"><Ban className="h-4 w-4" /> Addictions</div>
                  <div className="flex items-center gap-2"><Utensils className="h-4 w-4" /> Alimentation</div>
                  <div className="flex items-center gap-2"><Activity className="h-4 w-4" /> Activité</div>
                  <div className="flex items-center gap-2"><HeartHandshake className="h-4 w-4" /> Vie affective</div>
                  <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4" /> Protection</div>
                  <div className="flex items-center gap-2"><Droplets className="h-4 w-4" /> Hygiène</div>
                </div>
                {progressionGrid.map((row, index) => (
                  <div
                    key={`${row.level}-${index}`}
                    className="grid grid-cols-[100px_repeat(6,1fr)] items-center gap-2 rounded-xl border border-emerald-50 bg-emerald-50/40 px-3 py-2"
                  >
                    <div className="text-sm font-semibold text-slate-800">{row.level}</div>
                    {(['addictions', 'alimentation', 'physique', 'affectif', 'protection', 'hygiene'] as DomainKey[]).map((key) => {
                      const domain = domainLookup[key];
                      const timelineEntry = getTimelineEntry(domain, row.level);
                      const details = timelineEntry?.details || ['Pas de détail fourni'];

                      return (
                        <div key={`${row.level}-${key}`} className="flex justify-center">
                          {row.domains[key] ? (
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <span
                                  className="h-3 w-3 rounded-full bg-emerald-500 shadow-[0_0_0_4px_rgba(16,185,129,0.15)]"
                                  aria-label="Action identifiée"
                                />
                              </TooltipTrigger>
                              <TooltipContent className="max-w-xs space-y-1">
                                <p className="text-[11px] font-semibold text-emerald-700">
                                  {domain.title} — {row.level}
                                </p>
                                {timelineEntry?.focus && (
                                  <p className="text-[11px] font-semibold text-slate-900">{timelineEntry.focus}</p>
                                )}
                                <ul className="list-disc space-y-1 pl-4 text-[11px] leading-snug text-slate-700">
                                  {details.map((detail) => (
                                    <li key={detail}>{detail}</li>
                                  ))}
                                </ul>
                              </TooltipContent>
                            </Tooltip>
                          ) : (
                            <span className="h-3 w-3 rounded-full bg-slate-200" aria-label="À compléter" />
                          )}
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ParcoursSante;
