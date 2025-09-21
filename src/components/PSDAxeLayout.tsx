import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowUpRightSquare,
  BarChart3,
  ListChecks,
  Target,
  type LucideIcon,
} from 'lucide-react';

const AXE_COLORS: Record<number, {
  heading: string;
  ring: string;
  chipBg: string;
  chipText: string;
  icon: string;
  iconBg: string;
  indicatorValue: string;
  buttonFocus: string;
}> = {
  1: {
    heading: 'text-blue-900',
    ring: 'ring-blue-200',
    chipBg: 'bg-blue-50',
    chipText: 'text-blue-800',
    icon: 'text-blue-600',
    iconBg: 'bg-blue-100',
    indicatorValue: 'text-blue-800',
    buttonFocus: 'focus-visible:ring-blue-600',
  },
  2: {
    heading: 'text-emerald-900',
    ring: 'ring-emerald-200',
    chipBg: 'bg-emerald-50',
    chipText: 'text-emerald-800',
    icon: 'text-emerald-600',
    iconBg: 'bg-emerald-100',
    indicatorValue: 'text-emerald-800',
    buttonFocus: 'focus-visible:ring-emerald-600',
  },
  3: {
    heading: 'text-amber-900',
    ring: 'ring-amber-200',
    chipBg: 'bg-amber-50',
    chipText: 'text-amber-900',
    icon: 'text-amber-600',
    iconBg: 'bg-amber-100',
    indicatorValue: 'text-amber-900',
    buttonFocus: 'focus-visible:ring-amber-600',
  },
  4: {
    heading: 'text-indigo-900',
    ring: 'ring-indigo-200',
    chipBg: 'bg-indigo-50',
    chipText: 'text-indigo-900',
    icon: 'text-indigo-600',
    iconBg: 'bg-indigo-100',
    indicatorValue: 'text-indigo-900',
    buttonFocus: 'focus-visible:ring-indigo-600',
  },
  5: {
    heading: 'text-cyan-900',
    ring: 'ring-cyan-200',
    chipBg: 'bg-cyan-50',
    chipText: 'text-cyan-800',
    icon: 'text-cyan-600',
    iconBg: 'bg-cyan-100',
    indicatorValue: 'text-cyan-900',
    buttonFocus: 'focus-visible:ring-cyan-600',
  },
};

interface SummaryChip {
  label: string;
  icon?: React.ReactNode;
}

interface SummaryAction {
  label: string;
  icon: LucideIcon;
  iconClassName?: string;
  link?: string;
  linkLabel?: string;
  linkAriaLabel?: string;
}

interface SummaryKpi {
  label: string;
  value: string;
}

interface DetailedActionItem {
  text: string;
  link?: string;
  linkLabel?: string;
  linkAriaLabel?: string;
  linkIcon?: LucideIcon;
}

interface DetailItem {
  text: string;
}

interface PSDAxeLayoutProps {
  axeId: 1 | 2 | 3 | 4 | 5;
  title: string;
  subtitle: string;
  summary: {
    objectives: SummaryChip[];
    actions: SummaryAction[];
    indicators: SummaryKpi[];
  };
  objectifs: DetailItem[];
  actions: DetailedActionItem[];
  indicators: DetailItem[];
}

const PSDAxeLayout: React.FC<PSDAxeLayoutProps> = ({
  axeId,
  title,
  subtitle,
  summary,
  objectifs,
  actions,
  indicators,
}) => {
  const palette = AXE_COLORS[axeId];

  return (
    <div>
      <header className="mb-8">
        <p className="text-sm text-slate-500">Plan stratégique de développement</p>
        <h3
          className={`text-2xl sm:text-3xl font-bold ${palette?.heading ?? 'text-slate-900'}`}
        >
          {title}
        </h3>
        <p className="mt-2 text-slate-600">{subtitle}</p>
      </header>

      <section className="grid gap-6 xl:grid-cols-3">
        <article
          className={`bg-white rounded-2xl shadow-sm ring-1 p-6 flex flex-col ${
            palette?.ring ?? 'ring-slate-200'
          }`}
          data-axe={axeId}
        >
          <div className="flex items-center gap-3 mb-4">
            <span
              className={`flex h-10 w-10 items-center justify-center rounded-full ${
                palette?.iconBg ?? 'bg-slate-100'
              } ${palette?.icon ?? 'text-slate-600'}`}
            >
              <Target className="h-6 w-6" aria-hidden="true" />
            </span>
            <h4 className="text-xl font-semibold text-slate-900">Objectifs</h4>
          </div>
          <ul className="grid gap-2">
            {summary.objectives.map((chip) => (
              <li key={chip.label}>
                <span
                  className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-medium ${
                    palette?.chipBg ?? 'bg-slate-100'
                  } ${palette?.chipText ?? 'text-slate-800'}`}
                >
                  {chip.icon ? (
                    <span aria-hidden="true">{chip.icon}</span>
                  ) : null}
                  <span>{chip.label}</span>
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-5">
            <a
              href="#details-objectifs"
              className={`inline-flex items-center gap-2 rounded-lg border border-slate-300 px-3 py-2 text-sm font-medium text-slate-800 transition hover:bg-slate-50 hover:shadow-sm focus:outline-none focus-visible:ring-2 ${
                palette?.buttonFocus ?? 'focus-visible:ring-slate-600'
              }`}
              aria-label="Voir le détail des objectifs"
            >
              <ArrowUpRightSquare className="h-4 w-4" aria-hidden="true" />
              <span>Voir le détail</span>
            </a>
          </div>
        </article>

        <article
          className={`bg-white rounded-2xl shadow-sm ring-1 p-6 flex flex-col ${
            palette?.ring ?? 'ring-slate-200'
          }`}
          data-axe={axeId}
        >
          <div className="flex items-center gap-3 mb-4">
            <span
              className={`flex h-10 w-10 items-center justify-center rounded-full ${
                palette?.iconBg ?? 'bg-slate-100'
              } ${palette?.icon ?? 'text-slate-600'}`}
            >
              <ListChecks className="h-6 w-6" aria-hidden="true" />
            </span>
            <h4 className="text-xl font-semibold text-slate-900">Actions prioritaires</h4>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {summary.actions.map((action) => {
              const TileIcon = action.icon;
              return (
                <li
                  key={action.label}
                  className="group flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3 transition hover:bg-white hover:shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <TileIcon
                      className={`h-5 w-5 ${action.iconClassName ?? palette?.icon ?? 'text-slate-600'}`}
                      aria-hidden="true"
                    />
                    <span className="text-sm font-medium text-slate-800">{action.label}</span>
                  </div>
                  {action.link ? (
                    <Link
                      to={action.link}
                      className={`inline-flex items-center gap-2 rounded-lg border border-slate-300 px-2.5 py-1.5 text-xs font-medium text-slate-800 transition hover:shadow-sm hover:underline focus:outline-none focus-visible:ring-2 ${
                        palette?.buttonFocus ?? 'focus-visible:ring-slate-600'
                      }`}
                      aria-label={action.linkAriaLabel ?? action.label}
                    >
                      <ArrowUpRightSquare className="h-4 w-4" aria-hidden="true" />
                      <span>{action.linkLabel ?? 'En savoir plus'}</span>
                    </Link>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </article>

        <article
          className={`bg-white rounded-2xl shadow-sm ring-1 p-6 flex flex-col ${
            palette?.ring ?? 'ring-slate-200'
          }`}
          data-axe={axeId}
          aria-label="Indicateurs clés"
        >
          <div className="flex items-center gap-3 mb-4">
            <span
              className={`flex h-10 w-10 items-center justify-center rounded-full ${
                palette?.iconBg ?? 'bg-slate-100'
              } ${palette?.icon ?? 'text-slate-600'}`}
            >
              <BarChart3 className="h-6 w-6" aria-hidden="true" />
            </span>
            <h4 className="text-xl font-semibold text-slate-900">Indicateurs</h4>
          </div>
          <div className="grid gap-4">
            {summary.indicators.map((kpi) => (
              <div
                key={kpi.label}
                className={`rounded-2xl bg-white p-5 shadow-sm ring-1 ${
                  palette?.ring ?? 'ring-slate-200'
                }`}
              >
                <p className="text-sm text-slate-500">{kpi.label}</p>
                <p
                  className={`mt-1 text-3xl font-semibold ${
                    palette?.indicatorValue ?? 'text-slate-900'
                  }`}
                >
                  {kpi.value}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-5">
            <a
              href="#details-indicateurs"
              className={`inline-flex items-center gap-2 rounded-lg border border-slate-300 px-3 py-2 text-sm font-medium text-slate-800 transition hover:bg-slate-50 hover:shadow-sm focus:outline-none focus-visible:ring-2 ${
                palette?.buttonFocus ?? 'focus-visible:ring-slate-600'
              }`}
              aria-label="Voir le détail des indicateurs"
            >
              <ArrowUpRightSquare className="h-4 w-4" aria-hidden="true" />
              <span>Voir le détail</span>
            </a>
          </div>
        </article>
      </section>

      <section className="mt-12 space-y-8">
        <div
          id="details-objectifs"
          className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          <h4 className="mb-3 text-lg font-semibold text-slate-900">Objectifs détaillés</h4>
          <ul className="list-disc space-y-2 pl-5 text-gray-700 font-raleway">
            {objectifs.map((item, index) => (
              <li key={index} dangerouslySetInnerHTML={{ __html: item.text }}></li>
            ))}
          </ul>
        </div>

        <div
          id="details-actions"
          className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          <h4 className="mb-3 text-lg font-semibold text-slate-900">Actions prioritaires détaillées</h4>
          <ul className="list-disc space-y-3 pl-5 text-gray-700 font-raleway">
            {actions.map((item, index) => {
              if (!item.link) {
                return (
                  <li key={index} dangerouslySetInnerHTML={{ __html: item.text }}></li>
                );
              }

              const LinkIcon = item.linkIcon ?? ArrowUpRightSquare;

              return (
                <li key={index} className="flex flex-wrap items-center gap-2">
                  <span dangerouslySetInnerHTML={{ __html: item.text }}></span>
                  <Link
                    to={item.link}
                    className={`inline-flex items-center gap-2 rounded-lg border border-slate-300 px-3 py-1.5 text-xs font-semibold text-slate-800 transition hover:bg-slate-50 hover:shadow-sm focus:outline-none focus-visible:ring-2 ${
                      palette?.buttonFocus ?? 'focus-visible:ring-slate-600'
                    }`}
                    aria-label={item.linkAriaLabel ?? item.linkLabel ?? 'En savoir plus'}
                  >
                    <LinkIcon className="h-4 w-4" aria-hidden="true" />
                    <span>{item.linkLabel ?? 'En savoir plus'}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div
          id="details-indicateurs"
          className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          <h4 className="mb-3 text-lg font-semibold text-slate-900">Indicateurs détaillés</h4>
          <ul className="list-disc space-y-2 pl-5 text-gray-700 font-raleway">
            {indicators.map((item, index) => (
              <li key={index} dangerouslySetInnerHTML={{ __html: item.text }}></li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default PSDAxeLayout;
