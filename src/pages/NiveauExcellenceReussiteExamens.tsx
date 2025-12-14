import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import {
  ArrowLeft,
  BadgeCheck,
  BookCheck,
  CheckCircle2,
  Flag,
  GraduationCap,
  Home,
  Medal,
  Scale,
  Sparkles,
  Target,
  Trophy,
} from 'lucide-react';

const PAGE_TITLE = "Niveau d'excellence, réussite aux examens | PSD LFJP";

const dnbTrends = [
  {
    label: 'Taux de réussite',
    values: '92,86 % (2021) ; 90,00 % (2022) ; 90,74 % (2023) ; 93,75 % (2024) ; 91,67 % (2025)',
  },
  {
    label: 'Mentions',
    values: '39,29 % → 66,67 % → 72,22 % → 87,50 % → 81,25 % (2021-2025)',
  },
  {
    label: 'Moyenne générale',
    values: '13,64 → 12,83 → 13,62 → 14,57 → 14,60 (2021-2025)',
  },
  {
    label: 'Marqueur 2025',
    values: '12,50 % « Très bien avec félicitations du jury »',
  },
];

const bacTrends = [
  {
    label: 'Taux de réussite',
    values: '94,44 % (2022) ; 87,50 % (2023) ; 100 % (2024) ; 100 % (2025)',
  },
  {
    label: 'Mentions',
    values: '22,22 % → 50,00 % → 75,00 % → 61,54 % (2022-2025)',
  },
  {
    label: 'Moyenne générale',
    values: '11,40 → 11,66 → 12,771 → 13,14 (2022-2025)',
  },
];

const bacTargets = [
  'Réussite globale : 100 % chaque année (stabilité 2024-2025).',
  'Taux de mentions : ≥ 65 % en 2026, ≥ 70 % en 2028, ≥ 75 % en 2030 (cap réaliste vs 82,6 % réseau AEFE 2025).',
  'Moyenne générale : ≥ 13,2 en 2026, ≥ 13,4 en 2028, ≥ 13,6 en 2030.',
  'Part TB (dont félicitations) : progression graduelle (ex. ≥ 10 % TB à horizon 2030), sans « course à la mention » (priorité maîtrise).',
];

const dnbTargets = [
  'Réussite globale : ≥ 93 % en 2026, ≥ 95 % en 2028, ≥ 96-97 % en 2030 (confortablement au-dessus du national 85,5 %).',
  'Taux de mentions : ≥ 80 % chaque année ; cap 85 % à horizon 2030.',
  'Moyenne générale : ≥ 14,6 (maintien) puis ≥ 14,8 à horizon 2030.',
  'Réduction des refusés : < 5 % grâce à la prévention, aux entraînements et à la méthodologie.',
];

const dispositifs = [
  {
    title: 'Pilotage pédagogique « exigence + accompagnement »',
    icon: <Target className="h-6 w-6" aria-hidden="true" />,
    points: [
      'Tableau de bord examens (DNB/Bac) : suivi par cohorte, notes, compétences, fragilités, trajectoires.',
      'Harmonisation des évaluations (barèmes, attendus, progressions) pour sécuriser les apprentissages.',
      'Culture de l’évaluation constructive : feedback explicite, entraînement guidé, droit à l’erreur comme levier d’exigence.',
    ],
  },
  {
    title: 'Dispositifs « examens » au collège (DNB)',
    icon: <BookCheck className="h-6 w-6" aria-hidden="true" />,
    points: [
      'Parcours méthodologique DNB (4e-3e) : entraînement régulier à l’écrit, raisonnement, gestion du temps, lecture de consignes.',
      'Deux DNB blancs par an : format, correction fine et reprise des erreurs.',
      'Groupes de besoins ciblés en français/maths pour les élèves « à risque » ; oral DNB structuré (banque de sujets, répétitions, grilles communes).',
    ],
  },
  {
    title: 'Dispositifs « bac » au lycée (exigence, mentions, orientation)',
    icon: <GraduationCap className="h-6 w-6" aria-hidden="true" />,
    points: [
      'Bacs blancs structurés + retours méthodologiques (copies modèles, critères explicites, réécritures).',
      'Accompagnement personnalisé et tutorat : ciblage « passage à la mention » sans dégrader le soutien aux élèves fragiles.',
      'Préparation aux épreuves orales : entraînements filmés, coaching posture, argumentation, gestion du stress.',
      'Politique de devoirs d’entraînement : calibrage « type bac », progressivité, correction utile.',
    ],
  },
  {
    title: 'Focus philosophie : un marqueur d’excellence',
    icon: <Sparkles className="h-6 w-6" aria-hidden="true" />,
    points: [
      'Seconde : 1h/semaine ; Première : 2h/semaine ; Terminale : 5h/semaine.',
      'Continuum méthodes → problématisation → excellence : banque de copies distinguées et rituels de réécriture guidée.',
      'Faire de la philosophie un marqueur identitaire du LFJP : exigence intellectuelle + réussite mesurable.',
    ],
  },
  {
    title: 'Valoriser tous les talents et sécuriser les parcours',
    icon: <Flag className="h-6 w-6" aria-hidden="true" />,
    points: [
      'Reconnaissance des compétences transversales (oral, projet, coopération, créativité) sans renoncer aux attendus académiques.',
      'Renforcement de l’orientation (Parcours Avenir) comme levier de mobilisation et de réussite.',
    ],
  },
];

const bulletIconClass = 'mt-0.5 h-4 w-4 flex-none text-blue-700';

const NiveauExcellenceReussiteExamens = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = PAGE_TITLE;
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 font-raleway text-slate-900">
      <Navbar showLogo />

      <header className="relative isolate overflow-hidden bg-gradient-to-br from-french-blue via-blue-700 to-blue-900 py-24 text-white md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.14),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.12),transparent_42%)]" />
        <div className="container relative mx-auto px-6">
          <p className="text-sm uppercase tracking-[0.3em] text-white/70">Exigence académique · Axe 4</p>
          <h1 className="mt-6 max-w-4xl text-3xl font-playfair font-bold leading-tight md:text-5xl">
            Niveau d’excellence, réussite aux examens
          </h1>
          <p className="mt-6 max-w-3xl text-base text-white/80 md:text-lg">
            Une trajectoire solide pour le DNB et le baccalauréat : consolider les réussites, stabiliser les mentions et
            piloter l’exigence sans renoncer à l’équité.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button variant="secondary" onClick={() => navigate('/plan-strategique')} className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Plan stratégique
            </Button>
            <Button variant="ghost" onClick={() => navigate('/')} className="flex items-center gap-2 text-white">
              <Home className="h-4 w-4" />
              Accueil
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 bg-gradient-to-b from-slate-50 via-white to-slate-50 pb-16 pt-10 md:pt-14">
        <div className="container mx-auto space-y-12 px-6">
          <section className="rounded-3xl border border-blue-100 bg-white/80 p-8 shadow-sm backdrop-blur">
            <div className="flex items-start gap-3">
              <Trophy className="h-6 w-6 text-french-blue" aria-hidden="true" />
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-blue-800">Diagnostic LFJP</p>
                <h2 className="mt-2 text-2xl font-playfair font-semibold text-slate-900">Réussites déjà là (2021-2025)</h2>
              </div>
            </div>
            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              <div className="rounded-2xl border border-blue-50 bg-gradient-to-br from-blue-50 to-white p-6 shadow-xs">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-slate-900">Diplôme national du brevet</h3>
                  <BadgeCheck className="h-5 w-5 text-blue-700" aria-hidden="true" />
                </div>
                <ul className="mt-4 space-y-3 text-sm text-slate-700">
                  {dnbTrends.map((item) => (
                    <li key={item.label} className="flex gap-2">
                      <CheckCircle2 className={bulletIconClass} aria-hidden="true" />
                      <div>
                        <p className="font-semibold text-slate-900">{item.label}</p>
                        <p>{item.values}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-blue-50 bg-gradient-to-br from-blue-50 to-white p-6 shadow-xs">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-slate-900">Baccalauréat</h3>
                  <Medal className="h-5 w-5 text-blue-700" aria-hidden="true" />
                </div>
                <ul className="mt-4 space-y-3 text-sm text-slate-700">
                  {bacTrends.map((item) => (
                    <li key={item.label} className="flex gap-2">
                      <CheckCircle2 className={bulletIconClass} aria-hidden="true" />
                      <div>
                        <p className="font-semibold text-slate-900">{item.label}</p>
                        <p>{item.values}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50/80 p-5 text-sm leading-relaxed text-blue-900">
              <p className="font-semibold">Lecture stratégique.</p>
              <p>
                Le LFJP est déjà solide sur la réussite aux examens. L’enjeu 2026-2030 : stabiliser les meilleurs niveaux,
                éviter l’effet « accordéon » sur les mentions et structurer la hausse tout en restant cohérent avec une
                évaluation exigeante et juste (« Excellence : encourager et valoriser le meilleur de chacun »).
              </p>
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="flex items-start gap-3">
              <Scale className="h-6 w-6 text-french-blue" aria-hidden="true" />
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-blue-800">Repères de comparaison</p>
                <h2 className="mt-2 text-2xl font-playfair font-semibold text-slate-900">France / AEFE</h2>
              </div>
            </div>
            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6">
                <h3 className="text-lg font-semibold text-slate-900">France (repères nationaux)</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  <li className="flex gap-2">
                    <CheckCircle2 className={bulletIconClass} aria-hidden="true" />
                    <span>DNB : 85,6 % (2024) ; 85,5 % (2025).</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className={bulletIconClass} aria-hidden="true" />
                    <span>Baccalauréat : 91,2 % (2024) ; 91,8 % (2025).</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6">
                <h3 className="text-lg font-semibold text-slate-900">Réseau AEFE</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  <li className="flex gap-2">
                    <CheckCircle2 className={bulletIconClass} aria-hidden="true" />
                    <span>Résultats bac « approchant les 100 % » (environ 97 à 98,5 %) ; taux de mentions autour de 80 %.</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className={bulletIconClass} aria-hidden="true" />
                    <span>Bac 2025 – réseau AEFE : 98,3 % de réussite et 82,6 % de mentions.</span>
                  </li>
                  <li className="mt-3 text-slate-600">
                    Remarque : les repères agrégés DNB sont moins consolidés ; pilotage DNB par ambition interne et benchmark
                    d’établissements comparables.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-blue-100 bg-white p-8 shadow-sm">
            <div className="flex items-start gap-3">
              <Target className="h-6 w-6 text-french-blue" aria-hidden="true" />
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-blue-800">Ambition 2026-2030</p>
                <h2 className="mt-2 text-2xl font-playfair font-semibold text-slate-900">Objectifs accessibles et pilotables</h2>
              </div>
            </div>
            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              <div className="rounded-2xl border border-blue-50 bg-gradient-to-br from-white to-blue-50 p-6">
                <div className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-blue-700" aria-hidden="true" />
                  <h3 className="text-lg font-semibold text-slate-900">Baccalauréat</h3>
                </div>
                <ul className="mt-4 space-y-3 text-sm text-slate-700">
                  {bacTargets.map((item) => (
                    <li key={item} className="flex gap-2">
                      <CheckCircle2 className={bulletIconClass} aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-blue-50 bg-gradient-to-br from-white to-blue-50 p-6">
                <div className="flex items-center gap-2">
                  <BookCheck className="h-5 w-5 text-blue-700" aria-hidden="true" />
                  <h3 className="text-lg font-semibold text-slate-900">Diplôme national du brevet</h3>
                </div>
                <ul className="mt-4 space-y-3 text-sm text-slate-700">
                  {dnbTargets.map((item) => (
                    <li key={item} className="flex gap-2">
                      <CheckCircle2 className={bulletIconClass} aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="flex items-start gap-3">
              <LineChart className="h-6 w-6 text-french-blue" aria-hidden="true" />
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-blue-800">Dispositifs 2026-2030</p>
                <h2 className="mt-2 text-2xl font-playfair font-semibold text-slate-900">Atteindre les objectifs</h2>
              </div>
            </div>
            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              {dispositifs.map((item) => (
                <div key={item.title} className="rounded-2xl border border-slate-100 bg-slate-50/70 p-6">
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-white p-2 text-french-blue shadow-sm">{item.icon}</div>
                    <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                  </div>
                  <ul className="mt-4 space-y-3 text-sm text-slate-700">
                    {item.points.map((point) => (
                      <li key={point} className="flex gap-2">
                        <CheckCircle2 className={bulletIconClass} aria-hidden="true" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-3xl border border-blue-100 bg-blue-50/80 p-8 shadow-sm">
            <div className="flex items-start gap-3">
              <Medal className="h-6 w-6 text-blue-800" aria-hidden="true" />
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-blue-900">Cap 2030</p>
                <h2 className="mt-2 text-2xl font-playfair font-semibold text-blue-900">Exigence, équité, ambition</h2>
              </div>
            </div>
            <p className="mt-4 max-w-4xl text-sm leading-relaxed text-blue-900">
              Stabiliser l’excellence LFJP, sécuriser les mentions et valoriser chaque talent : un pilotage fin des examens,
              une culture d’évaluation constructive et l’accompagnement méthodologique pour que chaque élève atteigne son
              meilleur niveau, dans la maîtrise et la justesse.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NiveauExcellenceReussiteExamens;
