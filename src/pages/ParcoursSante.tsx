import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../components/ui/table';
import { ArrowLeft, HeartPulse, Home } from 'lucide-react';

const PAGE_TITLE = 'Parcours Santé | PSD LFJP';

type DomainKey =
  | 'addictions'
  | 'alimentation'
  | 'physique'
  | 'affectif'
  | 'protection'
  | 'hygiene';

type DomainContent = string[];

type Niveau = {
  name: string;
  domains: Record<DomainKey, DomainContent>;
};

type Cycle = {
  cycle: string;
  niveaux: Niveau[];
};

type RowSpanMatrix = Record<DomainKey, number[]>;

const domains: { key: DomainKey; label: string }[] = [
  { key: 'addictions', label: 'Prévention des conduites addictives' },
  { key: 'alimentation', label: "Éducation à l'alimentation et au goût" },
  { key: 'physique', label: "Promotion de l'activité physique" },
  { key: 'affectif', label: 'Éducation à la vie affective, relationnelle et sexualité' },
  { key: 'protection', label: "Protection de l'enfance" },
  { key: 'hygiene', label: 'Vaccination · Environnement · Hygiène' },
];

const parcoursData: Cycle[] = [
  {
    cycle: 'Cycle 1',
    niveaux: [
      {
        name: 'PS',
        domains: {
          addictions: [],
          alimentation: [
            'Éducation au goût et à la diversité alimentaire (semaine du goût, commission restauration).',
            "Travail autour de l'importance du petit-déjeuner.",
            "Ressource : outils éducatifs du ministère de l'agriculture.",
          ],
          physique: [
            "Comprendre ce qu'est l'activité physique.",
            'Ressource : projet “Manger, Bouger pour ma santé”.',
          ],
          affectif: [
            'Se connaître, vivre et grandir avec son corps.',
            'Rencontrer les autres et construire des relations épanouissantes.',
            "Trouver sa place dans la société, être libre et responsable.",
            'Découvrir les conditions élémentaires du respect de soi et des autres.',
            'Programme ministériel d’éducation à la vie affective et relationnelle à la maternelle.',
          ],
          protection: [
            "Information et sensibilisation (1 séance minimum/an) sur la protection de l'enfance et les violences intrafamiliales, notamment sexuelles.",
            'Application de la circulaire du 7 février 2022 : séance annuelle dédiée aux violences intrafamiliales à caractère sexuel.',
            'Détection et signalement systématiques des situations préoccupantes.',
            "Participation à la journée mondiale des droits de l'enfant (20 novembre).",
          ],
          hygiene: [
            'Éducation au lavage des mains, au brossage des dents et à la protection contre le soleil.',
            'Ressource : “Vivre avec le soleil”.',
            'Contrôle infirmier des 6 ans.',
          ],
        },
      },
      {
        name: 'MS',
        domains: {
          addictions: [],
          alimentation: [],
          physique: [],
          affectif: [],
          protection: [],
          hygiene: [],
        },
      },
      {
        name: 'GS',
        domains: {
          addictions: [],
          alimentation: [],
          physique: [],
          affectif: [],
          protection: [],
          hygiene: [],
        },
      },
    ],
  },
  {
    cycle: 'Cycle 2',
    niveaux: [
      {
        name: 'CP',
        domains: {
          addictions: [
            "Sensibilisation aux dangers de l'utilisation excessive des écrans.",
            'Ressource : mallette École Territoires numériques éducatifs.',
            'Organisation de la semaine sans écran en partenariat avec les familles (CESCE).',
          ],
          alimentation: [
            "Sensibilisation à l'équilibre alimentaire (découverte du monde).",
            'Focus sur les consommations excessives en sucre, sel et gras.',
            'Lien entre alimentation et activité physique, goûter matinal sain (CVE).',
            'Ressources : “Manger, Bouger pour ma santé” et vademecum Eduscol.',
            'Participation à la semaine du goût.',
          ],
          physique: [
            "Promotion de l'activité physique liée aux découvertes du monde (anatomie).",
            'Mise en place des 30 minutes d’APQ.',
            'Ressources : fiches APQ, “Manger, Bouger pour ma santé”.',
          ],
          affectif: [
            "Connaître son corps et comprendre ce qu'est l'intime.",
            'Comprendre la diversité des sentiments et des émotions.',
            'Appartenir à une famille et identifier la nature des liens familiaux.',
          ],
          protection: [],
          hygiene: [
            "Éducation à l'hygiène corporelle et bucco-dentaire (perte des dents de lait).",
            'Intervention de l’infirmière ou d’un dentiste.',
            'Protection contre le soleil – ressource “Vivre avec le soleil”.',
            'Contrôle infirmier des 11 ans.',
          ],
        },
      },
      {
        name: 'CE1',
        domains: {
          addictions: [],
          alimentation: [],
          physique: [],
          affectif: [
            'Grandir avec une bonne connaissance et estime de soi, protéger son intimité.',
            'Comprendre les dimensions affectives, éthiques, sociales et légales des relations humaines.',
            'Promouvoir des relations égalitaires et repérer les discriminations issues de stéréotypes (genre, etc.).',
          ],
          protection: [],
          hygiene: [],
        },
      },
      {
        name: 'CE2',
        domains: {
          addictions: [],
          alimentation: [],
          physique: [],
          affectif: [
            'Se sentir bien dans son corps et en prendre soin.',
            "Comprendre le consentement, savoir le solliciter ou l'exprimer, accepter et respecter un refus.",
          ],
          protection: [],
          hygiene: [],
        },
      },
    ],
  },
  {
    cycle: 'Cycle 3',
    niveaux: [
      {
        name: 'CM1',
        domains: {
          addictions: [],
          alimentation: [],
          physique: [
            "Promotion de l'activité physique (sciences : respiration, digestion, circulation sanguine).",
            'Mise en place des 30 minutes d’APQ et participation au cross du LFJP.',
            'Ressources : “Manger, Bouger pour ma santé”, fiches APQ.',
          ],
          affectif: [
            'Connaître les changements de son corps.',
            'Développer des relations constructives et repérer les situations de harcèlement.',
            'Promouvoir des relations égalitaires, comprendre les stéréotypes pour lutter contre les discriminations.',
          ],
          protection: [],
          hygiene: [],
        },
      },
      {
        name: 'CM2',
        domains: {
          addictions: [],
          alimentation: [],
          physique: [],
          affectif: [
            'Se sentir bien dans son corps et en prendre soin.',
            'Promouvoir des relations positives, repérer et se protéger des violences sexistes et sexuelles.',
            "Prévenir les risques liés à l'usage du numérique et d'internet.",
          ],
          protection: [],
          hygiene: [],
        },
      },
      {
        name: '6°',
        domains: {
          addictions: [
            'Usage des écrans (réseaux sociaux, jeux vidéo) : sensibilisation et ressources pédagogiques.',
            'Prévention des dangers du tabac et de l’alcool (binge drinking, comas éthyliques) avec intervention infirmière.',
          ],
          alimentation: [
            'Sensibilisation aux troubles alimentaires (anorexie, boulimie, orthorexie).',
            'Éducation aux bonnes pratiques avec “J’aime manger, j’aime bouger”.',
            'Interventions infirmières en classes de 5° et de 2nde.',
          ],
          physique: [
            'Déploiement de tests d’aptitude physique – stratégie sport-santé 2025-2030.',
          ],
          affectif: [
            'Comprendre et vivre les changements de son corps.',
            'Entrer en relation avec les autres et accepter l’évolution des relations.',
            'Trouver sa place dans un groupe sans renier ses émotions, respecter et être respecté.',
          ],
          protection: [],
          hygiene: [
            "Sensibilisation à l'importance du sommeil pour la croissance, la mémorisation et l'attention.",
            'Contrôle infirmier des 15 ans.',
            'Cellules d’écoute infirmière autour de la santé mentale des adolescents.',
          ],
        },
      },
    ],
  },
  {
    cycle: 'Cycle 4',
    niveaux: [
      {
        name: '5°',
        domains: {
          addictions: [],
          alimentation: [],
          physique: [
            'Participation aux JOJ de Dakar (octobre 2026).',
            'Développement de sections sportives et associations sportives (football, boxe, judo).',
            "Participation aux événements sportifs de l'AEFE.",
          ],
          affectif: [
            'Développer librement sa personnalité sans contrainte.',
            'Choisir ses relations, assumer ses préférences et leur évolution.',
            "Distinguer vie publique et vie privée, réfléchir à la liberté individuelle (notamment sur les réseaux sociaux).",
          ],
          protection: [],
          hygiene: [],
        },
      },
      {
        name: '4°',
        domains: {
          addictions: [],
          alimentation: [],
          physique: [],
          affectif: [
            'Aborder la sexualité comme une réalité complexe (plaisir, amour, reproduction).',
            'Développer une compréhension critique et respectueuse des relations interpersonnelles.',
            'Favoriser des choix responsables et protecteurs en matière de santé sexuelle et relationnelle.',
            'Étudier des représentations de la sexualité dans l’espace public et questionner leur dimension égalitaire.',
          ],
          protection: [],
          hygiene: [],
        },
      },
      {
        name: '3°',
        domains: {
          addictions: [],
          alimentation: [],
          physique: [],
          affectif: [
            'Interroger les liens entre bonheur, émotions et sexualité.',
            'Construire une relation réciproque et égalitaire ; reconnaître les contextes de danger et de vulnérabilité.',
            'Inscrire la sexualité dans le respect des droits humains.',
          ],
          protection: [],
          hygiene: [],
        },
      },
    ],
  },
  {
    cycle: 'Lycée',
    niveaux: [
      {
        name: '2nde',
        domains: {
          addictions: [
            'Sensibilisation aux dangers des substances stupéfiantes avec intervention du commissariat.',
          ],
          alimentation: [],
          physique: [],
          affectif: [
            'Prendre soin de son corps et développer une image positive de soi.',
            'Reconnaître et comprendre ses émotions et celles des autres.',
            "Se protéger et protéger les autres : intimité à l’ère des réseaux sociaux.",
          ],
          protection: [],
          hygiene: [
            'Sensibilisation aux IST : participation à la journée mondiale de lutte contre le SIDA (1er décembre).',
            'Cellules d’écoute infirmière pour travailler sur la santé mentale des adolescents.',
          ],
        },
      },
      {
        name: '1ère',
        domains: {
          addictions: [],
          alimentation: [],
          physique: [],
          affectif: [
            'Faire des choix en restant maître de soi et attentif à sa santé.',
            'Consentir ou refuser librement, respecter les libertés des autres.',
            'Être soi, entre acceptation et refus des injonctions extérieures.',
          ],
          protection: [],
          hygiene: [],
        },
      },
      {
        name: 'Terminale',
        domains: {
          addictions: [],
          alimentation: [],
          physique: [],
          affectif: [
            'Reconnaître ses émotions et ses désirs pour mieux se connaître.',
            'S’épanouir dans une relation équilibrée à l’autre.',
            'Être libre d’être soi parmi les autres et réfléchir aux conditions sociales garantissant cette liberté.',
          ],
          protection: [],
          hygiene: [],
        },
      },
    ],
  },
];

const renderContent = (items: DomainContent) => {
  if (!items || items.length === 0) {
    return <span className="text-sm text-slate-400">À compléter</span>;
  }

  return (
    <ul className="space-y-2 text-sm leading-relaxed text-slate-700">
      {items.map((item) => (
        <li key={item} className="flex gap-2">
          <span className="mt-1 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-500" aria-hidden />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
};

const buildRowSpanMatrix = (niveaux: Niveau[]): RowSpanMatrix => {
  const stringifyContent = (items: DomainContent) => JSON.stringify(items ?? []);

  const computeSpansForDomain = (key: DomainKey) => {
    const spans = new Array(niveaux.length).fill(0);
    let index = 0;

    while (index < niveaux.length) {
      const referenceContent = stringifyContent(niveaux[index].domains[key]);
      let span = 1;

      while (
        index + span < niveaux.length &&
        stringifyContent(niveaux[index + span].domains[key]) === referenceContent
      ) {
        span += 1;
      }

      spans[index] = span;
      index += span;
    }

    return spans;
  };

  return domains.reduce<RowSpanMatrix>((acc, domain) => {
    acc[domain.key] = computeSpansForDomain(domain.key);
    return acc;
  }, {} as RowSpanMatrix);
};

const ParcoursSante = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = PAGE_TITLE;
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-raleway text-slate-900">
      <Navbar showLogo={true} />

      <header className="bg-gradient-to-r from-emerald-700 via-teal-600 to-sky-700 text-white py-16 md:py-24">
        <div className="container mx-auto px-6">
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
          <p className="mt-6 max-w-4xl text-base md:text-lg text-white/80">
            Le Parcours Santé structure les actions éducatives autour du bien-être physique, mental et social des élèves. Il
            mobilise la communauté éducative pour garantir un environnement attentif, protecteur et cohérent du cycle 1 au
            lycée.
          </p>
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
          <section className="rounded-3xl border border-emerald-100 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-playfair font-semibold text-emerald-700">Un cadre commun pour 6 domaines de santé</h2>
            <p className="mt-4 max-w-4xl text-base text-slate-700">
              Le tableau ci-dessous décline, pour chaque cycle et niveau, les actions pédagogiques prévues dans les six domaines
              obligatoires du Parcours Santé : prévention des conduites addictives, alimentation et goût, activité physique,
              éducation à la vie affective, protection de l’enfance et hygiène/environnement.
            </p>
          </section>

          {parcoursData.map((cycle) => (
            <section key={cycle.cycle} className="rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm">
              <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">Parcours Santé</p>
                  <h3 className="text-2xl font-playfair font-semibold text-emerald-800">{cycle.cycle}</h3>
                </div>
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                  {cycle.niveaux.length} niveaux
                </span>
              </div>

              {(() => {
                const rowSpans = buildRowSpanMatrix(cycle.niveaux);

                return (
                  <div className="overflow-x-auto">
                    <Table className="min-w-[900px] text-[13px]">
                      <TableHeader>
                        <TableRow className="bg-emerald-50/60">
                          <TableHead className="w-24 font-semibold text-emerald-800">Niveau</TableHead>
                          {domains.map((domain) => (
                            <TableHead key={domain.key} className="min-w-[180px] font-semibold text-emerald-800">
                              {domain.label}
                            </TableHead>
                          ))}
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {cycle.niveaux.map((niveau, rowIndex) => (
                          <TableRow key={`${cycle.cycle}-${niveau.name}`} className="align-top">
                            <TableCell className="font-semibold text-slate-900">{niveau.name}</TableCell>
                            {domains.map((domain) => {
                              const span = rowSpans[domain.key][rowIndex];

                              if (span === 0) {
                                return null;
                              }

                              return (
                                <TableCell
                                  key={`${niveau.name}-${domain.key}`}
                                  rowSpan={span}
                                  className="align-top"
                                >
                                  {renderContent(niveau.domains[domain.key])}
                                </TableCell>
                              );
                            })}
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                );
              })()}
            </section>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ParcoursSante;
