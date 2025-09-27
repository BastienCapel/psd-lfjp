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
            l&apos;enseignement, l&apos;administration et la vie sociale. Un diagnostic mené en 2025 a mis en
            évidence un vieillissement rapide d&apos;une partie importante des ordinateurs fixes. Leur
            obsolescence technique et logicielle affecte directement les usages pédagogiques et le
            fonctionnement des différents services administratifs. La modernisation du parc doit
            permettre d&apos;améliorer la qualité des apprentissages, de garantir la sécurité et de soutenir
            un environnement numérique motivant pour les élèves et leurs professeurs.
          </p>
          <p>
            L&apos;urgence de ce renouvellement impose de déterminer une trajectoire réaliste de
            financement, conciliant rapidité d&apos;action et soutenabilité budgétaire. Plusieurs options
            ont été étudiées : un renouvellement complet immédiat, un plan progressif par paliers ainsi
            que des scénarios articulés sur quatre ou six ans. Chaque option est étudiée ci-dessous pour
            permettre un choix éclairé en fonction du budget disponible et des priorités stratégiques du
            LFPJ.
          </p>
        </div>
      </header>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-french-blue">Référentiel des coûts (devis du 24 mai 2025, hors onduleurs)</h2>
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
                <td className={tableCell}>Bureautique (100 PC)</td>
                <td className={tableCell}>4 455 472 FCFA / PC</td>
              </tr>
              <tr>
                <td className={tableCell}>ARC (9 PC écologés)</td>
                <td className={tableCell}>5 002 604 FCFA / PC</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-french-blue">Scénario 0 – Renouvellement complet en une seule année (60 PC)</h2>
        <p className="text-base leading-relaxed text-slate-700">
          <span className="font-semibold">Investissement total :</span> 317 640 000 FCFA (60 PC bureautiques + 9 PC ARC).
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-french-blue">Scénario 1 – Budget annuel de 3 000 000 FCFA</h2>
        <div className="space-y-4 text-base leading-relaxed text-slate-700">
          <ul className="list-disc space-y-1 pl-5">
            <li>Bureautique : 60 PC en 20 ans.</li>
            <li>ARC : 9 PC en 60 ans (1 PC tous les 6 ans).</li>
          </ul>
          <div className="overflow-x-auto">
            <table className="w-full table-auto border-collapse rounded-lg border border-slate-200 bg-white shadow-sm">
              <thead className="bg-french-blue/10">
                <tr>
                  <th className="border border-slate-200 px-4 py-2 text-left text-sm font-semibold uppercase tracking-wide text-slate-700">
                    Horizon
                  </th>
                  <th className="border border-slate-200 px-4 py-2 text-left text-sm font-semibold uppercase tracking-wide text-slate-700">
                    Bureautique (60 PC)
                  </th>
                  <th className="border border-slate-200 px-4 py-2 text-left text-sm font-semibold uppercase tracking-wide text-slate-700">
                    ARC (9 PC &amp; écologies)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={tableCell}>Tous les 2 ans</td>
                  <td className={tableCell}>7 PC</td>
                  <td className={tableCell}>1 PC</td>
                </tr>
                <tr>
                  <td className={tableCell}>Tous les 4 ans</td>
                  <td className={tableCell}>12 PC</td>
                  <td className={tableCell}>2 PC</td>
                </tr>
                <tr>
                  <td className={tableCell}>Tous les 10 ans</td>
                  <td className={tableCell}>30 PC</td>
                  <td className={tableCell}>5 PC</td>
                </tr>
                <tr>
                  <td className={tableCell}>Tous les 20 ans</td>
                  <td className={tableCell}>60 PC</td>
                  <td className={tableCell}>9 PC</td>
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
            <li>Bureautique : 10 PC/an → 60 PC en 6 ans. Coût annuel : 4 584 770 FCFA (0,36 % écologies).</li>
            <li>ARC : 9 PC → 3 PC/an (renouvellement complet en 7 ans). Coût annuel moyen : 4 545 000 FCFA (60,36 % écologies).</li>
          </ul>
          <div className="overflow-x-auto">
            <table className="w-full table-auto border-collapse rounded-lg border border-slate-200 bg-white shadow-sm">
              <thead className="bg-french-blue/10">
                <tr>
                  <th className="border border-slate-200 px-4 py-2 text-left text-sm font-semibold uppercase tracking-wide text-slate-700">
                    Année
                  </th>
                  <th className="border border-slate-200 px-4 py-2 text-left text-sm font-semibold uppercase tracking-wide text-slate-700">
                    Bureautique (10 PC)
                  </th>
                  <th className="border border-slate-200 px-4 py-2 text-left text-sm font-semibold uppercase tracking-wide text-slate-700">
                    ARC (3 PC)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={tableCell}>Années 1 à 6</td>
                  <td className={tableCell}>
                    <div className="flex flex-col">
                      <span className="font-medium text-slate-900">4 584 770 FCFA</span>
                      <span className="text-xs text-slate-500">0,36 % écologies</span>
                    </div>
                  </td>
                  <td className={tableCell}>
                    <span className="text-slate-400">—</span>
                  </td>
                </tr>
                <tr>
                  <td className={tableCell}>Années 1 à 3</td>
                  <td className={tableCell}>
                    <span className="text-slate-400">—</span>
                  </td>
                  <td className={tableCell}>
                    <div className="flex flex-col">
                      <span className="font-medium text-slate-900">5 002 604 FCFA</span>
                      <span className="text-xs text-slate-500">60,36 % écologies</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className={tableCell}>Années 4 à 7</td>
                  <td className={tableCell}>
                    <span className="text-slate-400">—</span>
                  </td>
                  <td className={tableCell}>
                    <div className="flex flex-col">
                      <span className="font-medium text-slate-900">4 545 000 FCFA</span>
                      <span className="text-xs text-slate-500">60,36 % écologies</span>
                    </div>
                  </td>
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
            <li>Bureautique : renouvellement progressif 2026-2029 (60 PC). Coût annuel moyen : 6 877 148 FCFA (40,54 % écologies).</li>
            <li>ARC : 9 PC → 3 PC/an (renouvellement complet en 2029). Coût annuel moyen : 6 558 000 FCFA (45,63 % écologies).</li>
          </ul>
          <div className="overflow-x-auto">
            <table className="w-full table-auto border-collapse rounded-lg border border-slate-200 bg-white shadow-sm">
              <thead className="bg-french-blue/10">
                <tr>
                  <th className="border border-slate-200 px-4 py-2 text-left text-sm font-semibold uppercase tracking-wide text-slate-700">
                    Année
                  </th>
                  <th className="border border-slate-200 px-4 py-2 text-left text-sm font-semibold uppercase tracking-wide text-slate-700">
                    Bureautique (15 PC)
                  </th>
                  <th className="border border-slate-200 px-4 py-2 text-left text-sm font-semibold uppercase tracking-wide text-slate-700">
                    ARC (3 PC)
                  </th>
                </tr>
              </thead>
              <tbody>
                {[2026, 2027, 2028, 2029].map((annee) => (
                  <tr key={annee}>
                    <td className={tableCell}>{annee}</td>
                    <td className={tableCell}>
                      <div className="flex flex-col">
                        <span className="font-medium text-slate-900">6 877 148 FCFA</span>
                        <span className="text-xs text-slate-500">40,54 % écologies</span>
                      </div>
                    </td>
                    <td className={tableCell}>
                      <div className="flex flex-col">
                        <span className="font-medium text-slate-900">6 558 000 FCFA</span>
                        <span className="text-xs text-slate-500">45,63 % écologies</span>
                      </div>
                    </td>
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
            • Scénario 0 (1 an) : effort unique équivalent à 2,2–2,4 % des écologies, permettant un
            déploiement immédiat et homogène.
          </p>
          <p>
            • Scénario 1 (20 ans) : effort budgétaire annuel limité (&lt;0,2 %), mais modernisation très
            lente et hétérogène.
          </p>
          <p>
            • Scénario 2 (6 ans) : effort modéré annuel (0,6 %), lissage de l&apos;investissement tout en
            réduisant significativement l&apos;âge moyen du parc.
          </p>
          <p>
            • Scénario 3 (4 ans) : effort annuel conséquent (≈0,5 % des écologies), mais renouvellement
            complet en quatre ans.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-french-blue">Conclusion</h2>
        <p className="text-base leading-relaxed text-slate-700">
          La décision doit concilier la rapidité de modernisation du parc et la soutenabilité
          financière. Le scénario de renouvellement total en une année permet de disposer immédiatement
          d&apos;outils homogènes et performants mais mobilise un budget significatif (~2,3 % des écologies).
          Les scénarios progressifs lissent l&apos;investissement dans le temps, réduisant l&apos;effort annuel
          (0,2 à 0,6 % des écologies) mais laissent coexister des générations de matériel. Le choix
          dépendra des priorités pédagogiques et stratégiques du LFPJ, entre modernisation immédiate ou
          substitution progressive.
        </p>
        <div className="rounded-lg border border-dashed border-french-blue/40 bg-french-blue/5 p-6 text-sm leading-relaxed text-slate-700">
          <h3 className="mb-2 text-base font-semibold text-french-blue">
            Comparaison des scénarios de renouvellement du parc informatique (en % du budget annuel des écologies)
          </h3>
          <ul className="space-y-2">
            <li>
              <span className="font-semibold text-french-blue">Scénario 0 :</span> 2,39 %
            </li>
            <li>
              <span className="font-semibold text-french-blue">Scénario 1 :</span> 0,17 %
            </li>
            <li>
              <span className="font-semibold text-french-blue">Scénario 2 :</span> 0,60 %
            </li>
            <li>
              <span className="font-semibold text-french-blue">Scénario 3 :</span> 0,52 %
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default RenouvellementInformatiqueTabs;
