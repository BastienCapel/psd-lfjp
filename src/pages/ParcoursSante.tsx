import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { ArrowLeft, HeartPulse, Home } from 'lucide-react';

type DomainKey =
  | 'addictions'
  | 'nutrition'
  | 'physicalActivity'
  | 'affective'
  | 'childProtection'
  | 'hygiene';

const domains: { key: DomainKey; label: string }[] = [
  { key: 'addictions', label: 'Prévention des conduites addictives' },
  { key: 'nutrition', label: "Éducation à l'alimentation et au goût" },
  { key: 'physicalActivity', label: "Promotion de l'activité physique" },
  { key: 'affective', label: 'Éducation à la vie affective, relationnelle et sexualité' },
  { key: 'childProtection', label: "Protection de l'enfance" },
  { key: 'hygiene', label: 'Vaccination · Environnement · Hygiène' },
];

type HealthRow = {
  cycle: string;
  level: string;
  entries: Partial<Record<DomainKey, string>>;
};

const healthData: HealthRow[] = [
  {
    cycle: 'Cycle 1',
    level: 'PS',
    entries: {
      nutrition:
        "Éducation au goût et à la diversité alimentaire (semaine du goût, commission restauration). Travail autour de l'importance du petit-déjeuner. Ressource possible : ministère de l'agriculture (https://agriculture.gouv.fr/education-lalimentation-les-outils-educatifs-sur-le-programme).",
      physicalActivity:
        "Comprendre ce qu'est l'activité physique. Ressource possible : Projet “Manger, Bouger pour ma santé” (https://fondation-lamap.org/projet/manger-bouger-pour-ma-sante).",
      affective:
        "Se connaître, vivre et grandir avec son corps. Rencontrer les autres et construire des relations, s'y épanouir. Trouver sa place dans la société, y être libre et responsable. Découvrir les conditions élémentaires du respect de soi et des autres (Programme d'éducation à la vie affective et relationnelle à l'école maternelle).",
      childProtection:
        "Information et sensibilisation (1 séance minimum par an) : séances en classe sur la protection de l’enfance et les violences intrafamiliales, notamment sexuelles (article L542-3 du Code de l’éducation). Circulaire du 7 février 2022 : au moins une séance annuelle sur l'enfance maltraitée, notamment les violences intrafamiliales à caractère sexuel, dans les écoles, collèges et lycées. Détection et signalement aux autorités de tous les cas pouvant laisser craindre un danger ou un risque. Participation à la journée mondiale des droits de l'enfant du 20 novembre.",
      hygiene:
        'Éducation au lavage des mains, au brossage des dents, à la protection contre le soleil. Ressource : Vivre avec le soleil (https://fondation-lamap.org/projet/vivre-avec-le-soleil). Contrôle infirmier des 6 ans.',
    },
  },
  { cycle: 'Cycle 1', level: 'MS', entries: {} },
  { cycle: 'Cycle 1', level: 'GS', entries: {} },
  {
    cycle: 'Cycle 2',
    level: 'CP',
    entries: {
      addictions:
        "Sensibilisation aux dangers de l'utilisation excessive des écrans. Ressource : mallette école territoires numériques éducatifs (https://tne.trousseaprojets.fr/professionnel-education-nationale). Organisation de la semaine sans écran en partenariat avec les familles (CESCE).",
      nutrition:
        "Sensibilisation à l'équilibre alimentaire en lien avec les programmes de découverte du monde. Travail autour de la consommation excessive d'aliments sucrés, salés et gras. Équilibre entre alimentation et activité physique. Sensibilisation au goûter matinal bon pour la santé (travail du CVE). Ressources : projet “Manger, bouger pour ma santé” (https://fondation-lamap.org/projet/manger-bouger-pour-ma-sante), Éducation à l'alimentation et au goût Eduscol. Participation à la semaine du goût.",
      physicalActivity:
        "Promotion de l'activité physique en lien avec les programmes de découverte du monde (anatomie). Mise en place des 30 minutes d'activités physiques quotidiennes (APQ). Ressources : Projet Manger, bouger pour ma santé, fiches APQ (https://aefe.gouv.fr/fr/ressources-documentaires/30-minutes-dactivites-physiques-quotidiennes-apq-fiches-dactivites), guide ministériel (https://www.education.gouv.fr/30-minutes-d-activite-physique-quotidienne-dans-toutes-les-ecoles-344379).",
      affective:
        "Connaître son corps et comprendre ce qu'est l'intime. Comprendre la diversité des sentiments et des émotions (les siens et ceux des autres). Appartenir à une famille, apprendre la nature et la fonction des liens familiaux.",
      hygiene:
        'Éducation à l’hygiène corporelle et bucco-dentaire (perte des dents de lait). Intervention de l’infirmière ou d’un dentiste. Protection contre le soleil. Ressource : Vivre avec le soleil (https://fondation-lamap.org/projet/vivre-avec-le-soleil). Contrôle infirmier des 11 ans.',
    },
  },
  { cycle: 'Cycle 2', level: 'CE1', entries: { affective: 'Grandir, avoir une bonne connaissance et estime de soi, protéger son intimité. Comprendre les dimensions affectives, éthiques, sociales et légales des relations humaines. Promotion des relations égalitaires, repérer des discriminations issues de stéréotypes, notamment de genre.' } },
  { cycle: 'Cycle 2', level: 'CE2', entries: { affective: "Se sentir bien dans son corps et en prendre soin. Comprendre ce qu'est le consentement et les différentes manières de l'exprimer ou de l'obtenir, accepter et respecter un refus." } },
  {
    cycle: 'Cycle 3',
    level: 'CM1',
    entries: {
      physicalActivity:
        "Promotion de l'activité physique en lien avec les sciences (respiration, digestion, circulation sanguine). Mise en place des 30 minutes d'APQ. Ressources : Projet Manger, bouger pour ma santé ; fiches APQ AEFE ; guide ministériel. Participation au cross du LFJP.",
      affective:
        'Connaître les changements de son corps. Apprendre à développer des relations constructives et à repérer les situations de harcèlement. Promouvoir des relations égalitaires et positives, comprendre les stéréotypes pour lutter contre les discriminations.',
    },
  },
  {
    cycle: 'Cycle 3',
    level: 'CM2',
    entries: {
      affective:
        'Se sentir bien dans son corps et en prendre soin. Promouvoir des relations positives, apprendre à repérer et se protéger des violences sexistes et sexuelles. Prévenir les risques liés à l’usage du numérique et d’internet.',
    },
  },
  {
    cycle: 'Cycle 3',
    level: '6°',
    entries: {
      addictions:
        'Utilisation des écrans (réseaux sociaux, jeux vidéo) : ressources Mallette collège territoires numériques éducatifs et Eduscol. Ressource CRIPS sur la prévention des écrans. Sensibilisation aux dangers du tabac (https://assets.tobaccofreekids.org/global/pdfs/fr/APS_youth_harms_fr.pdf) et de l’alcool (binge drinking, comas éthyliques). Intervention de l’infirmière.',
      nutrition:
        "Sensibilisation aux dangers des troubles alimentaires (anorexie, boulimie, orthorexie). Éducation aux bonnes pratiques dans le cadre du programme “J'aime manger, j'aime bouger” (https://sante.gouv.fr/IMG/pdf/guide_ado.pdf). Intervention infirmière en classe de 5° et de 2nde.",
      physicalActivity: 'Déploiement de tests d’aptitude physique dans le cadre du projet de stratégie sport-santé 2025-2030 du ministère des sports.',
      affective:
        'Comprendre et apprendre à vivre les changements de son corps. Entrer en relation avec les autres et comprendre que les relations peuvent changer. Trouver sa place au sein d’un groupe sans renier ses propres émotions, respecter les autres et être respecté.',
      hygiene:
        "Sensibilisation à l'importance du sommeil dans les processus de croissance, de mémorisation et d'attention. Contrôle infirmier des 15 ans. Déploiement de cellules d'écoute infirmière pour travailler sur la santé mentale des adolescents.",
    },
  },
  {
    cycle: 'Cycle 4',
    level: '5°',
    entries: {
      physicalActivity:
        'Participation aux JOJ de Dakar en octobre 2026. Développement de sections sportives et associations sportives (football, boxe, judo). Participation aux événements sportifs de l’AEFE.',
      affective:
        'Développer librement sa personnalité sans se sentir obligé ou contraint. Choisir ses relations, connaître et assumer ses préférences, comprendre qu’elles peuvent évoluer. Distinguer vie publique et vie privée et réfléchir à la notion de liberté individuelle, en particulier sur les réseaux sociaux.',
    },
  },
  {
    cycle: 'Cycle 4',
    level: '4°',
    entries: {
      affective:
        'Aborder la sexualité comme une réalité complexe (plaisir, amour, reproduction, etc.). Développer une compréhension critique et respectueuse des relations interpersonnelles et des enjeux associés à la sexualité ; favoriser des choix responsables et protecteurs en matière de santé sexuelle et relationnelle. Étudier des représentations de la sexualité dans l’espace public et en interroger la dimension égalitaire ou inégalitaire.',
    },
  },
  {
    cycle: 'Cycle 4',
    level: '3°',
    entries: {
      affective:
        'Interroger les liens entre bonheur, émotions et sexualité. Construire une relation réciproque et égalitaire ; savoir reconnaître et caractériser des contextes de danger et de vulnérabilité. Inscrire la sexualité dans la définition et le respect des droits humains.',
    },
  },
  {
    cycle: 'Lycée',
    level: '2nde',
    entries: {
      addictions: 'Sensibilisation aux dangers des substances stupéfiantes. Intervention du commissariat de police.',
      affective:
        'Prendre soin de son corps et développer une image positive de soi. Reconnaître et comprendre ses émotions et sentiments. Se protéger et protéger les autres : l’intimité à l’ère des réseaux sociaux.',
      hygiene:
        'Sensibilisation aux dangers des IST : participation à la journée mondiale de lutte contre le SIDA du 1er décembre. Déploiement de cellules d’écoute infirmière pour travailler sur la santé mentale des adolescents.',
    },
  },
  {
    cycle: 'Lycée',
    level: '1ère',
    entries: {
      affective:
        'Faire des choix en restant maître de soi et attentif à sa santé. Désirer et vouloir, donner ou refuser son consentement, savoir être libre et respecter les autres et leurs propres libertés. Être soi, entre acceptation et déni.',
    },
  },
  {
    cycle: 'Lycée',
    level: 'Terminale',
    entries: {
      affective:
        'Reconnaître ses émotions et ses désirs pour mieux se connaître. S’épanouir dans une relation équilibrée à l’autre. Être libre d’être soi parmi les autres et réfléchir aux conditions sociales garantissant cette liberté.',
    },
  },
];

const renderCell = (text?: string) => {
  if (!text) {
    return <span className="text-slate-400">—</span>;
  }
  return <p className="text-sm leading-relaxed text-slate-700 whitespace-pre-line">{text}</p>;
};

const ParcoursSante = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col font-raleway bg-slate-50 text-slate-900">
      <Navbar showLogo={true} />

      <header className="bg-gradient-to-br from-emerald-700 via-teal-600 to-sky-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-white/10" aria-hidden />
        <div className="container mx-auto px-6 py-20 md:py-28 relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <HeartPulse className="h-14 w-14" aria-hidden />
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-white/80">Cadre scolaire · Santé</p>
              <h1 className="text-3xl md:text-5xl font-playfair font-bold">Parcours Santé</h1>
              <p className="text-lg md:text-2xl text-white/90 mt-2">
                Bien-être, prévention et accompagnement des élèves du LFJP
              </p>
            </div>
          </div>
          <p className="max-w-4xl text-base md:text-lg text-white/85">
            Cette page rassemble les actions de prévention, d’éducation et de suivi menées dans l’établissement, de la petite
            section à la Terminale. Elle offre une vision claire des priorités santé pour chaque niveau.
          </p>
        </div>
      </header>

      <div className="container mx-auto px-6 py-6 flex flex-wrap gap-3">
        <Button
          variant="outline"
          className="bg-white text-emerald-700 border-emerald-600 hover:bg-emerald-600 hover:text-white focus-visible:ring-emerald-600"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="mr-2 h-4 w-4" aria-hidden />
          Retour
        </Button>
        <Button
          variant="outline"
          className="bg-white text-emerald-700 border-emerald-600 hover:bg-emerald-600 hover:text-white focus-visible:ring-emerald-600"
          onClick={() => navigate('/')}
        >
          <Home className="mr-2 h-4 w-4" aria-hidden />
          Accueil
        </Button>
      </div>

      <main className="flex-1 pb-16">
        <section className="py-6">
          <div className="container mx-auto px-6">
            <div className="rounded-3xl bg-white shadow-xl border border-emerald-100 overflow-hidden">
              <div className="border-b border-emerald-100 bg-emerald-700/10 px-6 py-5">
                <h2 className="text-xl md:text-2xl font-playfair font-semibold text-emerald-800">
                  Actions du parcours santé par niveau
                </h2>
                <p className="text-sm md:text-base text-emerald-900/80 mt-1">
                  Retrouvez les actions menées pour chaque domaine : prévention des conduites addictives, alimentation,
                  activité physique, éducation affective et sexuelle, protection de l’enfance, hygiène et environnement.
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full text-left border-separate border-spacing-0">
                  <thead>
                    <tr>
                      <th className="sticky left-0 z-20 bg-white border-b border-emerald-100 px-4 py-3 text-sm font-semibold text-emerald-900">
                        Cycle / Niveau
                      </th>
                      {domains.map((domain) => (
                        <th
                          key={domain.key}
                          className="border-b border-emerald-100 px-4 py-3 text-sm font-semibold text-emerald-900 bg-white"
                        >
                          {domain.label}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {healthData.map((row, index) => {
                      const isEven = index % 2 === 0;
                      return (
                        <tr key={`${row.cycle}-${row.level}`} className={isEven ? 'bg-white' : 'bg-emerald-50/40'}>
                          <th
                            scope="row"
                            className="sticky left-0 z-10 border-b border-emerald-100 px-4 py-4 align-top text-sm font-semibold text-emerald-800 bg-inherit"
                          >
                            <div className="flex flex-col">
                              <span className="uppercase text-[11px] tracking-wide text-emerald-600">{row.cycle}</span>
                              <span className="text-base">{row.level}</span>
                            </div>
                          </th>
                          {domains.map((domain) => (
                            <td key={domain.key} className="border-b border-emerald-100 px-4 py-4 align-top">
                              {renderCell(row.entries[domain.key])}
                            </td>
                          ))}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ParcoursSante;
