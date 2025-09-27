import React, { useMemo, useState } from 'react';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  LabelList,
} from 'recharts';

const TOTAL_ECOLAGES = 1_266_470_000;
const BUROTIC_UNIT_COST = 458_477;
const ARC_UNIT_COST = 505_000;
const MIN_PC = 10;
const MAX_PC = 120;
const MIN_YEARS = 1;
const MAX_YEARS = 10;
const MIN_SHARE = 0;
const MAX_SHARE = 5;

const scenarioChartData = [
  { scenario: 'Scénario 0', burotic: 2.17, arc: 2.39 },
  { scenario: 'Scénario 1', burotic: 0.22, arc: 0.2 },
  { scenario: 'Scénario 2', burotic: 0.36, arc: 0.36 },
  { scenario: 'Scénario 3', burotic: 0.54, arc: 0.6 },
];

const scenarioChartConfig = {
  burotic: { label: 'Burotic', theme: { light: '#2563eb', dark: '#60a5fa' } },
  arc: { label: 'ARC Informatique', theme: { light: '#f97316', dark: '#fb923c' } },
};

const percentFormatter = new Intl.NumberFormat('fr-FR', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const currencyFormatter = new Intl.NumberFormat('fr-FR');

const formatFCFA = (value: number) => `${currencyFormatter.format(Math.round(value))} FCFA`;

const formatPercent = (value: number) => `${percentFormatter.format(value)} %`;

const chartTooltipFormatter: React.ComponentProps<typeof Tooltip>['formatter'] = (value, name) => [
  `${percentFormatter.format(value as number)} %`,
  scenarioChartConfig[name as 'burotic' | 'arc']?.label ?? String(name),
];

const tableCell = 'border border-slate-200 px-4 py-2 text-sm text-slate-700';

const RenouvellementInformatiqueTabs: React.FC = () => {
  const [nbPc, setNbPc] = useState(60);
  const [annees, setAnnees] = useState(4);
  const [partEcolage, setPartEcolage] = useState(0.5);

  const simulation = useMemo(() => {
    const totalBurotic = nbPc * BUROTIC_UNIT_COST;
    const totalArc = nbPc * ARC_UNIT_COST;
    const safeYears = Math.max(annees, 1);
    const annualBurotic = totalBurotic / safeYears;
    const annualArc = totalArc / safeYears;
    const percentageBurotic = (annualBurotic / TOTAL_ECOLAGES) * 100;
    const percentageArc = (annualArc / TOTAL_ECOLAGES) * 100;
    const availableBudget = (partEcolage / 100) * TOTAL_ECOLAGES;
    const machinesPerYear = Math.max(1, Math.ceil(nbPc / safeYears));

    return {
      totals: {
        burotic: totalBurotic,
        arc: totalArc,
      },
      annual: {
        burotic: annualBurotic,
        arc: annualArc,
      },
      percentages: {
        burotic: percentageBurotic,
        arc: percentageArc,
      },
      availableBudget,
      machinesPerYear,
      coverage: {
        burotic: availableBudget - annualBurotic,
        arc: availableBudget - annualArc,
      },
    };
  }, [annees, nbPc, partEcolage]);

  const handlePcChange = (value: number) => {
    const clampedValue = Math.min(Math.max(value, MIN_PC), MAX_PC);
    setNbPc(clampedValue);
  };

  const handleYearsChange = (value: number) => {
    const clampedValue = Math.min(Math.max(value, MIN_YEARS), MAX_YEARS);
    setAnnees(clampedValue);
  };

  const handleShareChange = (value: number) => {
    const clampedValue = Math.min(Math.max(value, MIN_SHARE), MAX_SHARE);
    setPartEcolage(clampedValue);
  };

  return (
    <div className="space-y-12 px-4 pb-12 pt-6 text-slate-900">
      <header className="space-y-4 rounded-lg bg-french-blue/5 p-6">
        <h1 className="text-3xl font-bold text-french-blue">
          Plan de renouvellement du parc informatique (réécriture avec scénarios)
        </h1>
        <div className="space-y-3 text-base leading-relaxed">
          <p>
            Le parc informatique du Lycée Français Jacques Prévert constitue un outil essentiel pour
            l&apos;enseignement, l&apos;administration et la vie scolaire. Un diagnostic mené en 2025 a mis en
            évidence le vieillissement rapide d&apos;une partie importante des ordinateurs fixes. Leur
            obsolescence engendre des lenteurs, des incompatibilités avec les logiciels récents et des
            difficultés d&apos;usage dans certaines classes et espaces pédagogiques. Afin de garantir un
            environnement numérique fiable et performant, il est nécessaire de planifier un
            renouvellement progressif et maîtrisé du parc.
          </p>
          <p>
            Le présent document propose différents scénarios de renouvellement, basés sur deux devis de
            référence (Burotic et ARC Informatique), et adaptés à trois logiques budgétaires distinctes :
            un budget annuel de 3 000 000 FCFA, un budget annuel de 5 000 000 FCFA, une projection
            courte de quatre ans pour un renouvellement intégral, ainsi qu&apos;un scénario de renouvellement
            complet en une seule année. Chaque scénario est comparé au budget annuel des écolages
            (1&nbsp;266&nbsp;470&nbsp;000 FCFA), afin d&apos;éclairer la décision stratégique à prendre.
          </p>
        </div>
      </header>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-french-blue">
          Référentiels de coûts (devis du 22 mai 2025, hors onduleurs)
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse rounded-lg border border-slate-200 bg-white shadow-sm">
            <thead className="bg-french-blue/10">
              <tr>
                <th className="border border-slate-200 px-4 py-2 text-left text-sm font-semibold uppercase tracking-wide text-slate-700">
                  Offre
                </th>
                <th className="border border-slate-200 px-4 py-2 text-left text-sm font-semibold uppercase tracking-wide text-slate-700">
                  Montant
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={tableCell}>Offre Burotic</td>
                <td className={tableCell}>458 477 FCFA / PC</td>
              </tr>
              <tr>
                <td className={tableCell}>Offre ARC Informatique</td>
                <td className={tableCell}>505 000 FCFA / PC</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-french-blue">Scénario 0 – Renouvellement complet en une seule année (60 PC)</h2>
        <div className="space-y-2 text-base leading-relaxed text-slate-700">
          <p>
            <span className="font-semibold">Burotic :</span> 27 508 620 FCFA → ≈2,17 % des écolages.
          </p>
          <p>
            <span className="font-semibold">ARC Informatique :</span> 30 300 000 FCFA → ≈2,39 % des écolages.
          </p>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-french-blue">Scénario 1 – Budget annuel de 3 000 000 FCFA</h2>
        <div className="space-y-4 text-base leading-relaxed text-slate-700">
          <ul className="list-disc space-y-1 pl-5">
            <li>Burotic : 6 PC/an → 60 PC en 10 ans. Coût annuel : 2 750 862 FCFA (≈0,22 % écolages).</li>
            <li>ARC Informatique : 5 PC/an → 60 PC en 12 ans. Coût annuel : 2 525 000 FCFA (≈0,20 % écolages).</li>
          </ul>
          <div className="overflow-x-auto">
            <table className="w-full table-auto border-collapse rounded-lg border border-slate-200 bg-white shadow-sm">
              <thead className="bg-french-blue/10">
                <tr>
                  <th className="border border-slate-200 px-4 py-2 text-left text-sm font-semibold uppercase tracking-wide text-slate-700">
                    Année
                  </th>
                  <th className="border border-slate-200 px-4 py-2 text-left text-sm font-semibold uppercase tracking-wide text-slate-700">
                    Burotic (6 PC)
                  </th>
                  <th className="border border-slate-200 px-4 py-2 text-left text-sm font-semibold uppercase tracking-wide text-slate-700">
                    % écolages
                  </th>
                  <th className="border border-slate-200 px-4 py-2 text-left text-sm font-semibold uppercase tracking-wide text-slate-700">
                    ARC (5 PC)
                  </th>
                  <th className="border border-slate-200 px-4 py-2 text-left text-sm font-semibold uppercase tracking-wide text-slate-700">
                    % écolages
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={tableCell}>Tous les ans</td>
                  <td className={tableCell}>2 750 862 FCFA</td>
                  <td className={tableCell}>0,22 %</td>
                  <td className={tableCell}>2 525 000 FCFA</td>
                  <td className={tableCell}>0,20 %</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-french-blue">Scénario 2 – Budget annuel de 5 000 000 FCFA</h2>
        <div className="space-y-4 text-base leading-relaxed text-slate-700">
          <ul className="list-disc space-y-1 pl-5">
            <li>Burotic : 10 PC/an → 60 PC en 6 ans. Coût annuel : 4 584 770 FCFA (≈0,36 % écolages).</li>
            <li>
              ARC Informatique : 9 PC/an pendant 6 ans puis 6 la 7e année → 60 PC en 7 ans. Coût annuel moyen :
              4 545 000 FCFA (≈0,36 % écolages).
            </li>
          </ul>
          <div className="overflow-x-auto">
            <table className="w-full table-auto border-collapse rounded-lg border border-slate-200 bg-white shadow-sm">
              <thead className="bg-french-blue/10">
                <tr>
                  <th className="border border-slate-200 px-4 py-2 text-left text-sm font-semibold uppercase tracking-wide text-slate-700">
                    Année
                  </th>
                  <th className="border border-slate-200 px-4 py-2 text-left text-sm font-semibold uppercase tracking-wide text-slate-700">
                    Burotic (10 PC)
                  </th>
                  <th className="border border-slate-200 px-4 py-2 text-left text-sm font-semibold uppercase tracking-wide text-slate-700">
                    % écolages
                  </th>
                  <th className="border border-slate-200 px-4 py-2 text-left text-sm font-semibold uppercase tracking-wide text-slate-700">
                    ARC (9 puis 6 PC)
                  </th>
                  <th className="border border-slate-200 px-4 py-2 text-left text-sm font-semibold uppercase tracking-wide text-slate-700">
                    % écolages
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={tableCell}>Tous les ans</td>
                  <td className={tableCell}>4 584 770 FCFA</td>
                  <td className={tableCell}>0,36 %</td>
                  <td className={tableCell}>4 545 000 FCFA (années 1-6)</td>
                  <td className={tableCell}>0,36 %</td>
                </tr>
                <tr>
                  <td className={tableCell}>Année 7</td>
                  <td className={tableCell}>
                    <span className="text-slate-400">—</span>
                  </td>
                  <td className={tableCell}>
                    <span className="text-slate-400">—</span>
                  </td>
                  <td className={tableCell}>3 030 000 FCFA</td>
                  <td className={tableCell}>0,24 %</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-french-blue">Scénario 3 – Horizon fixe 4 ans (renouvellement complet en 2026-2029)</h2>
        <div className="space-y-4 text-base leading-relaxed text-slate-700">
          <ul className="list-disc space-y-1 pl-5">
            <li>Burotic : 15 PC/an → 60 PC en 4 ans. Budget annuel requis : 6 877 148 FCFA (≈0,54 % écolages).</li>
            <li>ARC Informatique : 15 PC/an → 60 PC en 4 ans. Budget annuel requis : 7 575 000 FCFA (≈0,60 % écolages).</li>
          </ul>
          <div className="overflow-x-auto">
            <table className="w-full table-auto border-collapse rounded-lg border border-slate-200 bg-white shadow-sm">
              <thead className="bg-french-blue/10">
                <tr>
                  <th className="border border-slate-200 px-4 py-2 text-left text-sm font-semibold uppercase tracking-wide text-slate-700">
                    Année
                  </th>
                  <th className="border border-slate-200 px-4 py-2 text-left text-sm font-semibold uppercase tracking-wide text-slate-700">
                    Burotic (15 PC)
                  </th>
                  <th className="border border-slate-200 px-4 py-2 text-left text-sm font-semibold uppercase tracking-wide text-slate-700">
                    % écolages
                  </th>
                  <th className="border border-slate-200 px-4 py-2 text-left text-sm font-semibold uppercase tracking-wide text-slate-700">
                    ARC (15 PC)
                  </th>
                  <th className="border border-slate-200 px-4 py-2 text-left text-sm font-semibold uppercase tracking-wide text-slate-700">
                    % écolages
                  </th>
                </tr>
              </thead>
              <tbody>
                {[2026, 2027, 2028, 2029].map((annee) => (
                  <tr key={annee}>
                    <td className={tableCell}>{annee}</td>
                    <td className={tableCell}>6 877 148 FCFA</td>
                    <td className={tableCell}>0,54 %</td>
                    <td className={tableCell}>7 575 000 FCFA</td>
                    <td className={tableCell}>0,60 %</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-french-blue">Comparaison graphique</h2>
        <p className="text-base leading-relaxed text-slate-700">
          Visualisation des parts d&apos;écolages nécessaires pour chacun des scénarios étudiés avec les
          devis Burotic et ARC Informatique. Le graphique horizontal permet de comparer immédiatement les
          ordres de grandeur entre les fournisseurs et d&apos;identifier les scénarios les plus soutenables.
        </p>
        <div className="rounded-lg bg-white p-4 shadow-sm md:p-6">
          <ChartContainer config={scenarioChartConfig} className="h-[420px] w-full">
            <BarChart data={scenarioChartData} layout="vertical" barCategoryGap={18}>
              <CartesianGrid strokeDasharray="4 4" vertical={false} />
              <XAxis
                type="number"
                domain={[0, 3]}
                tickFormatter={(value) => formatPercent(value as number)}
                tickLine={false}
                axisLine={false}
              />
              <YAxis type="category" dataKey="scenario" width={180} tickLine={false} axisLine={false} />
              <ChartTooltip
                cursor={{ fill: 'hsl(var(--muted))', opacity: 0.25 }}
                content={
                  <ChartTooltipContent
                    className="min-w-[220px]"
                    formatter={chartTooltipFormatter}
                    labelFormatter={(label) => `Part d'écolage – ${label}`}
                  />
                }
              />
              <Bar dataKey="burotic" fill="var(--color-burotic)" radius={4} name="burotic">
                <LabelList
                  dataKey="burotic"
                  position="right"
                  className="text-xs font-semibold text-slate-700"
                  formatter={(value: number) => formatPercent(value)}
                />
              </Bar>
              <Bar dataKey="arc" fill="var(--color-arc)" radius={4} name="arc">
                <LabelList
                  dataKey="arc"
                  position="right"
                  className="text-xs font-semibold text-slate-700"
                  formatter={(value: number) => formatPercent(value)}
                />
              </Bar>
            </BarChart>
          </ChartContainer>
        </div>
        <p className="text-sm leading-relaxed text-slate-600">
          Les scénarios 1 à 3 restent inférieurs à 1&nbsp;% des écolages annuels. Le scénario 0, qui vise un
          renouvellement complet en une année, requiert en revanche plus de 2&nbsp;% du budget annuel
          d&apos;écolage.
        </p>
      </section>

      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold text-french-blue">Mini-simulateur</h2>
          <p className="mt-2 text-base leading-relaxed text-slate-700">
            Ajustez rapidement les paramètres clés (volume de machines, durée et part d&apos;écolage
            mobilisable) pour projeter les besoins budgétaires annuels et vérifier si l&apos;enveloppe cible
            couvre les coûts des devis Burotic et ARC.
          </p>
        </div>
        <div className="rounded-lg bg-white p-6 shadow-sm md:p-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <label className="flex flex-col gap-2 text-sm font-medium text-slate-900" htmlFor="pc-slider">
              Nombre total de PC à renouveler
              <input
                id="pc-slider"
                type="range"
                min={MIN_PC}
                max={MAX_PC}
                step={1}
                value={nbPc}
                onChange={(event) => handlePcChange(Number(event.target.value))}
                aria-describedby="pc-slider-value"
                className="h-3 w-full cursor-pointer rounded-full bg-slate-200 accent-french-blue"
              />
              <div id="pc-slider-value" className="text-sm text-slate-600" aria-live="polite">
                <strong className="text-base text-slate-900">{nbPc} PC</strong> à renouveler.
              </div>
            </label>
            <label className="flex flex-col gap-2 text-sm font-medium text-slate-900" htmlFor="pc-input">
              Saisie directe (PC)
              <input
                id="pc-input"
                type="number"
                min={MIN_PC}
                max={MAX_PC}
                value={nbPc}
                onChange={(event) => handlePcChange(Number(event.target.value))}
                className="min-h-[44px] rounded-lg border border-slate-200 px-3 py-2 text-base text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-french-blue"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm font-medium text-slate-900" htmlFor="years-slider">
              Durée de renouvellement (années)
              <input
                id="years-slider"
                type="range"
                min={MIN_YEARS}
                max={MAX_YEARS}
                step={1}
                value={annees}
                onChange={(event) => handleYearsChange(Number(event.target.value))}
                aria-describedby="years-slider-value"
                className="h-3 w-full cursor-pointer rounded-full bg-slate-200 accent-french-blue"
              />
              <div id="years-slider-value" className="text-sm text-slate-600" aria-live="polite">
                <strong className="text-base text-slate-900">{annees} ans</strong> (≈ {simulation.machinesPerYear} PC/an).
              </div>
            </label>
            <label className="flex flex-col gap-2 text-sm font-medium text-slate-900" htmlFor="years-input">
              Saisie directe (années)
              <input
                id="years-input"
                type="number"
                min={MIN_YEARS}
                max={MAX_YEARS}
                value={annees}
                onChange={(event) => handleYearsChange(Number(event.target.value))}
                className="min-h-[44px] rounded-lg border border-slate-200 px-3 py-2 text-base text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-french-blue"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm font-medium text-slate-900" htmlFor="share-slider">
              Part d&apos;écolage mobilisable (%)
              <input
                id="share-slider"
                type="range"
                min={MIN_SHARE}
                max={MAX_SHARE}
                step={0.05}
                value={partEcolage}
                onChange={(event) => handleShareChange(Number(event.target.value))}
                aria-describedby="share-slider-value"
                className="h-3 w-full cursor-pointer rounded-full bg-slate-200 accent-french-blue"
              />
              <div id="share-slider-value" className="text-sm text-slate-600" aria-live="polite">
                <strong className="text-base text-slate-900">{formatPercent(partEcolage)}</strong> des écolages,
                soit {formatFCFA(simulation.availableBudget)} par an.
              </div>
            </label>
            <label className="flex flex-col gap-2 text-sm font-medium text-slate-900" htmlFor="share-input">
              Saisie directe (part d&apos;écolage)
              <input
                id="share-input"
                type="number"
                min={MIN_SHARE}
                max={MAX_SHARE}
                step={0.05}
                value={partEcolage}
                onChange={(event) => handleShareChange(Number(event.target.value))}
                className="min-h-[44px] rounded-lg border border-slate-200 px-3 py-2 text-base text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-french-blue"
              />
            </label>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2" aria-live="polite">
            {[{
              label: 'Offre Burotic',
              total: simulation.totals.burotic,
              annual: simulation.annual.burotic,
              percentage: simulation.percentages.burotic,
              coverage: simulation.coverage.burotic,
            }, {
              label: 'Offre ARC Informatique',
              total: simulation.totals.arc,
              annual: simulation.annual.arc,
              percentage: simulation.percentages.arc,
              coverage: simulation.coverage.arc,
            }].map((item) => {
              const isSurplus = item.coverage >= 0;
              const coverageAmount = Math.abs(item.coverage);
              return (
                <article
                  key={item.label}
                  className="flex h-full flex-col gap-4 rounded-xl border border-slate-200 p-5 shadow-sm"
                >
                  <header className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-french-blue">{item.label}</h3>
                    <span
                      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${
                        isSurplus ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'
                      }`}
                    >
                      {isSurplus ? 'Excédent' : 'Déficit'}
                    </span>
                  </header>
                  <dl className="space-y-2 text-sm text-slate-700">
                    <div className="flex items-center justify-between">
                      <dt className="font-medium text-slate-900">Coût total sur la période</dt>
                      <dd>{formatFCFA(item.total)}</dd>
                    </div>
                    <div className="flex items-center justify-between">
                      <dt className="font-medium text-slate-900">Coût annuel</dt>
                      <dd>{formatFCFA(item.annual)}</dd>
                    </div>
                    <div className="flex items-center justify-between">
                      <dt className="font-medium text-slate-900">Part des écolages</dt>
                      <dd>{formatPercent(item.percentage)}</dd>
                    </div>
                    <div className="flex items-center justify-between">
                      <dt className="font-medium text-slate-900">Part cible mobilisée</dt>
                      <dd>{formatFCFA(simulation.availableBudget)}</dd>
                    </div>
                    <div className="flex items-center justify-between">
                      <dt className="font-medium text-slate-900">Écart</dt>
                      <dd>
                        {coverageAmount === 0
                          ? 'Équilibre'
                          : `${isSurplus ? '+' : '–'}${formatFCFA(coverageAmount)}`}
                      </dd>
                    </div>
                  </dl>
                  <p className="mt-auto text-xs leading-relaxed text-slate-500">
                    {isSurplus
                      ? 'La part d’écolage saisie couvre le coût annuel estimé.'
                      : 'La part d’écolage saisie est insuffisante pour couvrir le coût annuel estimé.'}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-french-blue">Synthèse comparative</h2>
        <div className="space-y-3 text-base leading-relaxed text-slate-700">
          <p>
            • Scénario 0 (1 an) : effort unique équivalant à 2,2–2,4 % des écolages, permettant
            d&apos;obtenir immédiatement un parc homogène.
          </p>
          <p>
            • Scénario 1 (10–12 ans, 3 M) : effort budgétaire annuel très limité (≈0,2 %) mais
            renouvellement très lent.
          </p>
          <p>
            • Scénario 2 (6–7 ans, 5 M) : équilibre entre soutenabilité (≈0,36 % par an) et rythme de
            modernisation.
          </p>
          <p>
            • Scénario 3 (4 ans) : effort annuel plus conséquent (≈0,55–0,60 %) mais modernisation
            rapide.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-french-blue">Conclusion</h2>
        <p className="text-base leading-relaxed text-slate-700">
          La décision doit concilier la rapidité de modernisation du parc et la soutenabilité
          financière. Le scénario de renouvellement total en une année permet de disposer immédiatement
          d&apos;outils homogènes et performants mais mobilise un budget significatif (≈2,3 % des écolages).
          Les scénarios progressifs lissent l&apos;investissement dans le temps, réduisant l&apos;effort annuel
          (0,2 % à 0,6 % des écolages) mais laissant coexister des générations de matériel. Le choix
          dépendra des priorités pédagogiques et stratégiques du LFJP, entre modernisation immédiate ou
          gestion échelonnée du renouvellement.
        </p>
        <div className="rounded-lg border border-dashed border-french-blue/40 bg-french-blue/5 p-6 text-sm leading-relaxed text-slate-700">
          <h3 className="mb-2 text-base font-semibold text-french-blue">
            Comparaison des scénarios de renouvellement du parc informatique (en % du budget annuel des écolages)
          </h3>
          <ul className="space-y-2">
            <li>
              <span className="font-semibold text-french-blue">Scénario 0 :</span> 2,17 % à 2,39 %
            </li>
            <li>
              <span className="font-semibold text-french-blue">Scénario 1 :</span> 0,20 % à 0,22 %
            </li>
            <li>
              <span className="font-semibold text-french-blue">Scénario 2 :</span> 0,24 % à 0,36 %
            </li>
            <li>
              <span className="font-semibold text-french-blue">Scénario 3 :</span> 0,54 % à 0,60 %
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default RenouvellementInformatiqueTabs;
