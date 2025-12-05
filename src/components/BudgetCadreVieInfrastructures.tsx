import React from 'react';
import {
  AlertTriangle,
  ArrowUpRight,
  BadgeDollarSign,
  BarChart3,
  CalendarClock,
  CheckCircle2,
  Info,
  PiggyBank,
} from 'lucide-react';
import {
  Bar,
  CartesianGrid,
  Legend,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  BarChart,
} from 'recharts';
import type { TooltipProps } from 'recharts';
import type { NameType, ValueType } from 'recharts/types/component/DefaultTooltipContent';

// Les données sont codées en dur pour faciliter les ajustements futurs.
// Vous pouvez modifier les montants, années ou pourcentages directement dans
// les tableaux ci-dessous afin d'actualiser la page sans toucher à la logique.

const currencyFormatter = new Intl.NumberFormat('fr-FR', {
  style: 'currency',
  currency: 'XOF',
  maximumFractionDigits: 0,
});

type Project = {
  title: string;
  description: string;
  period: string;
  budget: number;
  color: string;
};

type CashFlowYear = {
  year: number;
  capacite: number;
  leviers: number;
  recettesTotales: number;
  depenses: number;
};

const summaryCards = [
  {
    label: 'Investissement total',
    value: 775_000_000,
    icon: PiggyBank,
    accent: 'from-emerald-50 to-emerald-100 text-emerald-700 border-emerald-100',
  },
  {
    label: 'Manque à gagner / besoin de financement à l’horizon 2030',
    value: 89_860_582,
    icon: AlertTriangle,
    accent: 'from-rose-50 to-amber-50 text-amber-700 border-amber-100',
  },
  {
    label: 'Capacité totale estimée (budget + ANETT + écolages)',
    value: 685_139_418,
    icon: BadgeDollarSign,
    accent: 'from-sky-50 to-indigo-50 text-sky-700 border-sky-100',
  },
];

// Projets à modifier si nécessaire (montants, périodes, descriptions).
const projects: Project[] = [
  {
    title: 'Climatisation (phases 2 & 3)',
    description: 'Déploiement progressif sur les bâtiments restants',
    period: '2026 – 2027',
    budget: 220_000_000,
    color: 'from-sky-100 to-sky-50',
  },
  {
    title: 'Couverture terrain de sport',
    description: 'Protection solaire et confort thermique',
    period: '2026',
    budget: 60_000_000,
    color: 'from-amber-100 to-orange-50',
  },
  {
    title: 'Solaire terrain de sport',
    description: 'Installation photovoltaïque complémentaire',
    period: '2027',
    budget: 35_000_000,
    color: 'from-emerald-100 to-emerald-50',
  },
  {
    title: 'Piscine',
    description: 'Réhabilitation et sécurisation du bassin',
    period: '2027 – 2028',
    budget: 165_000_000,
    color: 'from-sky-100 to-blue-50',
  },
  {
    title: 'Restauration scolaire',
    description: 'Montée en charge cuisine & self-service',
    period: '2027 – 2029',
    budget: 150_000_000,
    color: 'from-orange-100 to-amber-50',
  },
  {
    title: 'Acquisition terrain',
    description: 'Réserve foncière pour extensions futures',
    period: '2028',
    budget: 90_000_000,
    color: 'from-lime-100 to-emerald-50',
  },
  {
    title: 'Projet d’extension phase 1',
    description: 'Création de nouvelles surfaces pédagogiques',
    period: '2029 – 2030',
    budget: 55_000_000,
    color: 'from-indigo-100 to-indigo-50',
  },
];

// Flux de trésorerie prévisionnels (adapter montants/années si besoin).
const financialTimeline: CashFlowYear[] = [
  { year: 2026, capacite: 180_000_000, leviers: 15_000_000, recettesTotales: 195_000_000, depenses: 160_000_000 },
  { year: 2027, capacite: 185_000_000, leviers: 22_000_000, recettesTotales: 207_000_000, depenses: 195_000_000 },
  { year: 2028, capacite: 140_000_000, leviers: 30_000_000, recettesTotales: 170_000_000, depenses: 205_000_000 },
  { year: 2029, capacite: 90_000_000, leviers: 35_000_000, recettesTotales: 125_000_000, depenses: 130_000_000 },
  { year: 2030, capacite: 85_000_000, leviers: 40_000_000, recettesTotales: 125_000_000, depenses: 85_000_000 },
];

const tuitionBaseRevenue = 1_203_146_500;

const tuitionSimulations = [
  { year: 2026, increase: 5.4, revenue: 64_969_911 },
  { year: 2027, increase: 0.4, revenue: 70_042_377 },
  { year: 2028, increase: 0, revenue: 70_042_377 },
  { year: 2029, increase: 0, revenue: 70_042_377 },
  { year: 2030, increase: 0, revenue: 70_042_377 },
];

const projectSchedule = [
  { project: 'Climatisation', start: 2026, end: 2027, annualSpend: { 2026: 120_000_000, 2027: 100_000_000 } },
  { project: 'Couverture terrain de sport', start: 2026, end: 2026, annualSpend: { 2026: 60_000_000 } },
  { project: 'Solaire terrain de sport', start: 2027, end: 2027, annualSpend: { 2027: 35_000_000 } },
  { project: 'Piscine', start: 2027, end: 2028, annualSpend: { 2027: 85_000_000, 2028: 80_000_000 } },
  { project: 'Restauration scolaire', start: 2027, end: 2029, annualSpend: { 2027: 30_000_000, 2028: 80_000_000, 2029: 40_000_000 } },
  { project: 'Acquisition terrain', start: 2028, end: 2028, annualSpend: { 2028: 90_000_000 } },
  { project: 'Projet d’extension phase 1', start: 2029, end: 2030, annualSpend: { 2029: 55_000_000, 2030: 55_000_000 } },
];

const years = [2026, 2027, 2028, 2029, 2030];

const CustomTooltip = ({ active, payload, label }: TooltipProps<ValueType, NameType>) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg border border-slate-200 bg-white p-3 shadow-sm">
        <p className="text-sm font-semibold text-slate-900">{label}</p>
        {payload.map((entry) => (
          <p key={`${entry.name}-${entry.dataKey}`} className="text-xs text-slate-700">
            {entry.name}: <span className="font-semibold">{currencyFormatter.format(Number(entry.value ?? 0))}</span>
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const BudgetCadreVieInfrastructures = () => {
  const cumulativeTuition = 345_139_418;
  const annualTotals = years.map((year) =>
    projectSchedule.reduce((total, project) => total + (project.annualSpend[year] ?? 0), 0),
  );

  return (
    <section id="budget-cadre-vie" className="mt-8 space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-french-blue">Cadre de vie & infrastructures</p>
          <h4 className="text-xl font-semibold text-slate-900">Budget d’amélioration</h4>
          <p className="text-sm text-slate-600">
            Vue synthétique des investissements, flux de trésorerie et leviers de financement sur 2026-2030.
          </p>
        </div>
        <div className="inline-flex items-center gap-2 rounded-full bg-french-blue/10 px-3 py-1 text-xs font-semibold text-french-blue">
          <Info className="h-4 w-4" aria-hidden />
          Données indicatives – à affiner avec les budgets annuels
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {summaryCards.map((card) => {
          const Icon = card.icon;
          return (
            <div
              key={card.label}
              className={`relative overflow-hidden rounded-2xl border bg-gradient-to-br ${card.accent} p-5 shadow-sm`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-1">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">{card.label}</p>
                  <p className="text-2xl font-bold text-slate-900">{currencyFormatter.format(card.value)}</p>
                </div>
                <span className="rounded-xl bg-white/70 p-2 shadow-inner">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h5 className="text-lg font-semibold text-slate-900">Projets</h5>
            <span className="text-xs font-semibold text-slate-500">7 projets clés</span>
          </div>
          <div className="space-y-3">
            {projects.map((project) => (
              <div
                key={project.title}
                className={`group rounded-2xl border border-slate-200 bg-gradient-to-br ${project.color} p-4 shadow-sm transition duration-150 hover:-translate-y-0.5 hover:shadow-md`}
              >
                <div className="flex items-start gap-3">
                  <div className="flex-1 space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h6 className="text-base font-semibold text-slate-900">{project.title}</h6>
                      <span className="rounded-full bg-white/80 px-2 py-0.5 text-[11px] font-semibold text-french-blue">
                        {project.period}
                      </span>
                    </div>
                    <p className="text-sm text-slate-700">{project.description}</p>
                    <p className="text-sm font-semibold text-emerald-700">
                      {currencyFormatter.format(project.budget)}
                    </p>
                  </div>
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white text-slate-500 shadow-inner transition group-hover:bg-french-blue/10 group-hover:text-french-blue">
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="mb-3 flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Analyse financière</p>
                <h5 className="text-lg font-semibold text-slate-900">Flux de trésorerie prévisionnel (XOF)</h5>
              </div>
              <BarChart3 className="h-5 w-5 text-french-blue" aria-hidden />
            </div>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={financialTimeline}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="year" tick={{ fill: '#1e293b', fontSize: 12 }} />
                  <YAxis tickFormatter={(value) => `${Math.round(value / 1_000_000)}M`} tick={{ fill: '#1e293b', fontSize: 12 }} />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Bar name="Dépenses projets" dataKey="depenses" fill="#ef4444" radius={[6, 6, 0, 0]} />
                  <Line name="Capacité d’investissement" type="monotone" dataKey="recettesTotales" stroke="#22c55e" strokeWidth={3} dot={{ r: 4 }} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="mb-3 flex items-center justify-between">
              <h5 className="text-lg font-semibold text-slate-900">Trésorerie annuelle</h5>
              <CheckCircle2 className="h-5 w-5 text-emerald-600" aria-hidden />
            </div>
            <div className="overflow-hidden rounded-xl border border-slate-100">
              <table className="min-w-full divide-y divide-slate-100 text-sm">
                <thead className="bg-slate-50 text-xs uppercase text-slate-500">
                  <tr>
                    <th className="px-4 py-2 text-left">Année</th>
                    <th className="px-4 py-2 text-right">Capacité (base)</th>
                    <th className="px-4 py-2 text-right">Leviers écolages</th>
                    <th className="px-4 py-2 text-right">Recettes totales</th>
                    <th className="px-4 py-2 text-right">Dépenses projets</th>
                    <th className="px-4 py-2 text-right">Solde</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white">
                  {financialTimeline.map((row) => {
                    const solde = row.recettesTotales - row.depenses;
                    const soldePositive = solde >= 0;
                    return (
                      <tr key={row.year} className="hover:bg-slate-50">
                        <td className="px-4 py-2 font-semibold text-slate-900">{row.year}</td>
                        <td className="px-4 py-2 text-right text-slate-700">{currencyFormatter.format(row.capacite)}</td>
                        <td className="px-4 py-2 text-right text-slate-700">{currencyFormatter.format(row.leviers)}</td>
                        <td className="px-4 py-2 text-right font-semibold text-slate-900">{currencyFormatter.format(row.recettesTotales)}</td>
                        <td className="px-4 py-2 text-right text-rose-600">{currencyFormatter.format(row.depenses)}</td>
                        <td className={`px-4 py-2 text-right font-semibold ${soldePositive ? 'text-emerald-700' : 'text-rose-600'}`}>
                          {currencyFormatter.format(solde)}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="mb-3 flex items-center justify-between">
              <h5 className="text-lg font-semibold text-slate-900">Calendrier des dépenses</h5>
              <CalendarClock className="h-5 w-5 text-french-blue" aria-hidden />
            </div>
            <div className="space-y-3">
              <div className="grid grid-cols-[140px_repeat(5,1fr)] items-center gap-2 text-xs font-semibold text-slate-500">
                <span>Projet</span>
                {years.map((year) => (
                  <span key={year} className="text-center">
                    {year}
                  </span>
                ))}
              </div>
              <div className="space-y-2">
                {projectSchedule.map((item, index) => (
                  <div key={item.project} className="grid grid-cols-[140px_repeat(5,1fr)] items-center gap-2">
                    <span className="text-sm font-semibold text-slate-800">{item.project}</span>
                    {years.map((year) => {
                      const isActive = year >= item.start && year <= item.end;
                      return (
                        <div key={year} className="relative h-2 rounded-full bg-slate-100">
                          {isActive && (
                            <div
                              className={`absolute inset-0 rounded-full ${index % 2 === 0 ? 'bg-french-blue/70' : 'bg-emerald-400/80'}`}
                              style={{ width: '100%' }}
                            />
                          )}
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
              <div className="mt-3 rounded-xl border border-dashed border-slate-200 bg-slate-50 p-3 text-sm">
                <p className="mb-2 font-semibold text-slate-900">Total annuel (dépenses projets)</p>
                <div className="grid grid-cols-5 gap-2 text-xs font-semibold text-slate-700">
                  {years.map((year, index) => (
                    <div key={year} className="flex items-center justify-between rounded-lg bg-white px-3 py-2 shadow-sm">
                      <span>{year}</span>
                      <span className="text-emerald-700">{currencyFormatter.format(annualTotals[index])}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="mb-3 flex items-center justify-between">
              <h5 className="text-lg font-semibold text-slate-900">Simulation écolages</h5>
              <PiggyBank className="h-5 w-5 text-emerald-600" aria-hidden />
            </div>
            <p className="mb-3 text-xs font-semibold text-slate-600">
              Base revenus: <span className="font-bold text-slate-900">{currencyFormatter.format(tuitionBaseRevenue)}</span>
            </p>
            <div className="overflow-hidden rounded-xl border border-slate-100">
              <table className="min-w-full divide-y divide-slate-100 text-sm">
                <thead className="bg-slate-50 text-xs uppercase text-slate-500">
                  <tr>
                    <th className="px-4 py-2 text-left">Année</th>
                    <th className="px-4 py-2 text-right">Augmentation</th>
                    <th className="px-4 py-2 text-right">Recette suppl.</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white">
                  {tuitionSimulations.map((item) => (
                    <tr key={item.year} className="hover:bg-slate-50">
                      <td className="px-4 py-2 font-semibold text-slate-900">{item.year}</td>
                      <td className="px-4 py-2 text-right text-slate-700">{item.increase}%</td>
                      <td className="px-4 py-2 text-right font-semibold text-emerald-700">{currencyFormatter.format(item.revenue)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-3 flex items-center justify-between rounded-xl bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-800">
              <span>Cumul généré (2026-2030)</span>
              <span>{currencyFormatter.format(cumulativeTuition)}</span>
            </div>
            <p className="mt-2 text-xs text-slate-600">
              Ajustez les pourcentages d’augmentation ci-dessus pour simuler d’autres scénarios de recettes liées aux écolages.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="mb-3 flex items-center gap-2">
              <Info className="h-5 w-5 text-french-blue" aria-hidden />
              <h5 className="text-lg font-semibold text-slate-900">Hypothèses & notes</h5>
            </div>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>Les années correspondent à l’année de rentrée (ex. 2026 = année 2026-2027).</li>
              <li>Montants exprimés en F CFA, basés sur une estimation interne et arrondis.</li>
              <li>Les dépenses projets intègrent les phases d’études, travaux et mise en service.</li>
              <li>Possibilité d’ajouter d’autres notes ou hypothèses opérationnelles.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BudgetCadreVieInfrastructures;
