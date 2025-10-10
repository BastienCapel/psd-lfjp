import React from 'react';
import { Link } from 'react-router-dom';
import type { LucideIcon } from 'lucide-react';
import { ArrowRight, BarChart3, GraduationCap, ListChecks, Target } from 'lucide-react';

interface ObjectifItem {
  content: React.ReactNode;
}

interface ActionItem {
  content: React.ReactNode;
  link?: string;
  linkAriaLabel?: string;
  linkIcon?: LucideIcon;
}

interface IndicatorItem {
  content: React.ReactNode;
}

interface ActionSection {
  title: string;
  items: ActionItem[];
}

interface SummaryObjectiveItem {
  icon: string;
  label: string;
}

interface SummaryActionItem {
  label: string;
  icon?: LucideIcon;
  iconClassName?: string;
  link?: string;
  linkAriaLabel?: string;
}

interface SummaryIndicatorItem {
  label: string;
  value: string;
}

interface SummaryData {
  objectives?: SummaryObjectiveItem[];
  actions?: SummaryActionItem[];
  indicators?: SummaryIndicatorItem[];
}

interface PSDAxeLayoutProps {
  axeId?: number;
  title: string;
  subtitle: string;
  summary?: SummaryData;
  objectifs: ObjectifItem[];
  actions?: ActionItem[];
  actionSections?: ActionSection[];
  indicators: IndicatorItem[];
}

const PSDAxeLayout: React.FC<PSDAxeLayoutProps> = ({
  axeId,
  title,
  subtitle,
  summary,
  objectifs,
  actions,
  actionSections,
  indicators
}) => {
  const sectionId = axeId ? `axe-${axeId}` : undefined;

  return (
    <section id={sectionId} className="space-y-10">
      <header className="space-y-3">
        <h3 className="text-xl font-playfair font-bold text-french-blue md:text-2xl">
          {title}
        </h3>
        <p className="text-lg font-medium font-raleway text-gray-800">
          {subtitle}
        </p>
      </header>

      {summary && (
        <div className="grid gap-6 md:grid-cols-3">
          {summary.objectives?.length ? (
            <article className="flex flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-french-blue/10">
              <div className="mb-4 flex items-center gap-3">
                <span className="rounded-full bg-french-blue/10 p-2 text-french-blue">
                  <Target className="h-6 w-6" aria-hidden="true" />
                </span>
                <h4 className="text-lg font-semibold text-slate-900">Objectifs clés</h4>
              </div>
              <ul className="grid gap-2">
                {summary.objectives.map((item) => (
                  <li
                    key={item.label}
                    className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700"
                  >
                    <span aria-hidden="true">{item.icon}</span>
                    <span>{item.label}</span>
                  </li>
                ))}
              </ul>
            </article>
          ) : null}

          {summary.actions?.length ? (
            <article className="flex flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-french-blue/10">
              <div className="mb-4 flex items-center gap-3">
                <span className="rounded-full bg-french-blue/10 p-2 text-french-blue">
                  <ListChecks className="h-6 w-6" aria-hidden="true" />
                </span>
                <h4 className="text-lg font-semibold text-slate-900">Rubriques</h4>
              </div>
              <ul className="grid gap-2">
                {summary.actions.map((item) => {
                  const IconComponent = item.icon;

                  const content = (
                    <span className="flex w-full items-center justify-between gap-3">
                      <span className="flex items-center gap-2">
                        {IconComponent ? (
                          <span
                            className={`flex h-8 w-8 items-center justify-center rounded-full bg-slate-50 ${
                              item.iconClassName ?? 'text-french-blue'
                            }`}
                            aria-hidden="true"
                          >
                            <IconComponent className="h-4 w-4" aria-hidden="true" />
                          </span>
                        ) : null}
                        <span className="text-left text-sm font-medium text-slate-700">
                          {item.label}
                        </span>
                      </span>
                      {item.link ? (
                        <ArrowRight className="h-4 w-4 text-french-blue" aria-hidden="true" />
                      ) : null}
                    </span>
                  );

                  return (
                    <li
                      key={item.label}
                      className="rounded-xl bg-slate-100 text-sm font-medium text-slate-700"
                    >
                      {item.link ? (
                        <Link
                          to={item.link}
                          className="inline-flex w-full items-center justify-between gap-3 rounded-xl px-3 py-2 transition hover:bg-slate-200 hover:text-french-blue focus:outline-none focus-visible:ring-2 focus-visible:ring-french-blue"
                          aria-label={item.linkAriaLabel ?? `En savoir plus – ${item.label}`}
                        >
                          {content}
                        </Link>
                      ) : (
                        <div className="inline-flex w-full items-center justify-between gap-3 px-3 py-2">
                          {content}
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </article>
          ) : null}

          {summary.indicators?.length ? (
            <article className="flex flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-french-blue/10">
              <div className="mb-4 flex items-center gap-3">
                <span className="rounded-full bg-french-blue/10 p-2 text-french-blue">
                  <BarChart3 className="h-6 w-6" aria-hidden="true" />
                </span>
                <h4 className="text-lg font-semibold text-slate-900">Indicateurs clés</h4>
              </div>
              <dl className="grid gap-3">
                {summary.indicators.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-xl bg-slate-100 px-3 py-2"
                  >
                    <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                      {item.label}
                    </dt>
                    <dd className="text-base font-semibold text-slate-900">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </article>
          ) : null}
        </div>
      )}

      <section className="space-y-8">
        <div
          id={sectionId ? `${sectionId}-objectifs` : undefined}
          className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          <h4 className="mb-3 text-lg font-semibold text-slate-900">Objectifs détaillés</h4>
          <ul className="list-disc space-y-2 pl-5 text-gray-700 font-raleway">
            {objectifs.map((item, index) => (
              <li key={index}>{item.content}</li>
            ))}
          </ul>
        </div>

        {(actionSections?.length ?? 0) > 0 ? (
          <div
            id={sectionId ? `${sectionId}-actions` : undefined}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <h4 className="mb-3 text-lg font-semibold text-slate-900">Rubriques détaillées</h4>
            <ul className="space-y-6 font-raleway">
              {actionSections!.map((section, sectionIndex) => (
                <li key={sectionIndex} className="space-y-2">
                  <h5 className="text-base font-semibold text-french-blue">{section.title}</h5>
                  <ul className="space-y-2 list-disc list-outside pl-6 marker:text-slate-400">
                    {section.items.map((item, itemIndex) => {
                      if (!item.link) {
                        return (
                          <li key={itemIndex} className="text-gray-700">
                            {item.content}
                          </li>
                        );
                      }

                      const LinkIcon = item.linkIcon ?? GraduationCap;
                      const ariaLabel = item.linkAriaLabel ?? 'En savoir plus';

                      return (
                        <li key={itemIndex}>
                          <div className="flex flex-wrap items-center gap-3 sm:flex-nowrap">
                            <div className="flex min-w-0 flex-1 items-center gap-3">
                              <span className="text-gray-700 font-semibold">{item.content}</span>
                              <span
                                aria-hidden="true"
                                className="hidden h-px flex-1 border-b border-dashed border-slate-300 sm:block"
                              />
                            </div>
                            <Link
                              to={item.link}
                              className="ml-auto inline-flex shrink-0 items-center gap-2 rounded-lg border border-slate-300 px-3 py-1.5 text-xs font-semibold text-slate-800 transition hover:bg-slate-50 hover:text-french-blue focus:outline-none focus-visible:ring-2 focus-visible:ring-french-blue sm:ml-0 sm:self-center"
                              aria-label={ariaLabel}
                            >
                              <LinkIcon className="h-4 w-4" aria-hidden="true" />
                              <span>En savoir plus</span>
                            </Link>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        ) : (actions?.length ?? 0) > 0 ? (
          <div
            id={sectionId ? `${sectionId}-actions` : undefined}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <h4 className="mb-3 text-lg font-semibold text-slate-900">Rubriques détaillées</h4>
            <ul className="space-y-3 font-raleway list-disc list-outside pl-6 marker:text-slate-400">
              {actions!.map((item, index) => {
                if (!item.link) {
                  return (
                    <li key={index} className="text-gray-700">
                      {item.content}
                    </li>
                  );
                }

                const LinkIcon = item.linkIcon ?? GraduationCap;
                const ariaLabel = item.linkAriaLabel ?? 'En savoir plus';

                return (
                  <li key={index}>
                    <div className="flex flex-wrap items-center gap-3 sm:flex-nowrap">
                      <div className="flex min-w-0 flex-1 items-center gap-3">
                        <span className="text-gray-700 font-semibold">{item.content}</span>
                        <span
                          aria-hidden="true"
                          className="hidden h-px flex-1 border-b border-dashed border-slate-300 sm:block"
                        />
                      </div>
                      <Link
                        to={item.link}
                        className="ml-auto inline-flex shrink-0 items-center gap-2 rounded-lg border border-slate-300 px-3 py-1.5 text-xs font-semibold text-slate-800 transition hover:bg-slate-50 hover:text-french-blue focus:outline-none focus-visible:ring-2 focus-visible:ring-french-blue sm:ml-0 sm:self-center"
                        aria-label={ariaLabel}
                      >
                        <LinkIcon className="h-4 w-4" aria-hidden="true" />
                        <span>En savoir plus</span>
                      </Link>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        ) : null}

        <div
          id={sectionId ? `${sectionId}-indicateurs` : undefined}
          className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          <h4 className="mb-3 text-lg font-semibold text-slate-900">Indicateurs détaillés</h4>
          <ul className="list-disc space-y-2 pl-5 text-gray-700 font-raleway">
            {indicators.map((item, index) => (
              <li key={index}>{item.content}</li>
            ))}
          </ul>
        </div>
      </section>
    </section>
  );
};

export default PSDAxeLayout;
