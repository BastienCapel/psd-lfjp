import React from 'react';

const tableCell = 'border border-slate-200 px-4 py-2 text-sm text-slate-700';

const RenouvellementInformatiqueTabs: React.FC = () => {
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
