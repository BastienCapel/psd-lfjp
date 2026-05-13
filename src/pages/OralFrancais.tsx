import React, { useMemo, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

type Convocation = {
  eleve: string;
  date: string;
  heure: string;
  salle: string;
};

const convocations: Convocation[] = [
  { eleve: 'AGUESSE Julie', date: 'lundi 01 juin 2026', heure: '08:00', salle: 'CDI BOX 1' },
  { eleve: 'ALLIER Faustine Marie-Sara', date: 'lundi 01 juin 2026', heure: '13:30', salle: 'CDI BOX 1' },
  { eleve: 'BENSON Marilyse Lucia Fanta', date: 'jeudi 04 juin 2026', heure: '08:00', salle: 'CDI BOX 1' },
  { eleve: 'BIER Awa Eve', date: 'jeudi 04 juin 2026', heure: '08:00', salle: 'CDI BOX 1' },
  { eleve: 'BOUSSO Coumba Alia', date: 'vendredi 05 juin 2026', heure: '08:00', salle: 'CDI BOX 1' },
  { eleve: 'BOYER Camille Laurence Nella', date: 'vendredi 05 juin 2026', heure: '08:00', salle: 'CDI BOX 1' },
  { eleve: 'BRU Marie', date: 'lundi 01 juin 2026', heure: '08:00', salle: 'CDI BOX 2' },
  { eleve: 'CALDEIRA Giovanna', date: 'lundi 01 juin 2026', heure: '08:00', salle: 'CDI BOX 2' },
  { eleve: 'CISSE-SOHM Elah-Khayta', date: 'mardi 02 juin 2026', heure: '08:00', salle: 'CDI BOX 2' },
  { eleve: 'CROIZAT Liliane', date: 'mardi 02 juin 2026', heure: '13:30', salle: 'CDI BOX 2' },
  { eleve: "D'ALMEIDA Kyran Kemy Adetutu", date: 'mardi 02 juin 2026', heure: '13:30', salle: 'CDI BOX 2' },
  { eleve: 'DARWICHE Iris Marie Raymonde', date: 'mercredi 03 juin 2026', heure: '08:00', salle: 'CDI BOX 2' },
  { eleve: 'DAVID Hoel', date: 'mercredi 03 juin 2026', heure: '08:00', salle: 'CDI BOX 2' },
  { eleve: 'DE GAIGNERON JOLLIMON DE MAROLLES Clovis', date: 'mercredi 03 juin 2026', heure: '13:30', salle: 'CDI BOX 2' },
  { eleve: 'DIAGNE Seydina Alioune', date: 'vendredi 05 juin 2026', heure: '08:00', salle: 'CDI BOX 2' },
  { eleve: 'DIAKHABY Safia', date: 'lundi 01 juin 2026', heure: '08:00', salle: 'CDI BOX 3' },
  { eleve: 'DIAKITE Assietou Dite Assy', date: 'lundi 01 juin 2026', heure: '08:00', salle: 'CDI BOX 3' },
  { eleve: 'DIALLO Marvin Noah Dioulde', date: 'lundi 01 juin 2026', heure: '13:30', salle: 'CDI BOX 3' },
  { eleve: 'ELABIB Fatiha', date: 'vendredi 05 juin 2026', heure: '08:00', salle: 'CDI BOX 3' },
  { eleve: 'ENNADIFI Mohamed', date: 'lundi 01 juin 2026', heure: '08:00', salle: 'CDI  BOX 4' },
  { eleve: 'FALL Cheikh Saliou Mbacke', date: 'lundi 01 juin 2026', heure: '13:30', salle: 'CDI  BOX 4' },
  { eleve: 'FALL GAYE Souleymane', date: 'mardi 02 juin 2026', heure: '08:00', salle: 'CDI  BOX 4' },
  { eleve: 'FAYE Imane', date: 'mardi 02 juin 2026', heure: '08:00', salle: 'CDI  BOX 4' },
  { eleve: 'GAFFARI Matteo', date: 'mardi 02 juin 2026', heure: '08:00', salle: 'CDI  BOX 4' },
  { eleve: 'GAYE Ababacar', date: 'mardi 02 juin 2026', heure: '13:30', salle: 'CDI  BOX 4' },
  { eleve: 'GNING Maya Aïssatou', date: 'mercredi 03 juin 2026', heure: '13:30', salle: 'CDI  BOX 4' },
  { eleve: 'HACHIM Rayan', date: 'mercredi 03 juin 2026', heure: '13:30', salle: 'CDI  BOX 4' },
  { eleve: 'HAFFNER Juliette', date: 'lundi 01 juin 2026', heure: '08:00', salle: 'CDI BOX 5' },
  { eleve: 'JENOUDET Thiméo Owen Thibault', date: 'mercredi 03 juin 2026', heure: '08:00', salle: 'CDI BOX 5' },
  { eleve: 'KERDUDO Zeina', date: 'jeudi 04 juin 2026', heure: '13:30', salle: 'CDI BOX 5' },
  { eleve: 'LAH Aissa Fatouma', date: 'lundi 01 juin 2026', heure: '08:00', salle: 'CDI BOX 6' },
  { eleve: 'LAM Magate Aicha', date: 'lundi 01 juin 2026', heure: '08:00', salle: 'CDI BOX 6' },
  { eleve: 'LAMBERT Clara Noemie', date: 'lundi 01 juin 2026', heure: '08:00', salle: 'CDI BOX 6' },
  { eleve: 'LAURIENTE Alexandra Marième', date: 'lundi 01 juin 2026', heure: '13:30', salle: 'CDI BOX 6' },
  { eleve: 'LEMAIRE Simon', date: 'mardi 02 juin 2026', heure: '08:00', salle: 'CDI BOX 6' },
  { eleve: 'MBAYE Assy', date: 'mercredi 03 juin 2026', heure: '08:00', salle: 'CDI BOX 6' },
  { eleve: 'MBOUP Amy', date: 'jeudi 04 juin 2026', heure: '08:00', salle: 'CDI BOX 6' },
  { eleve: 'METZ Celia', date: 'jeudi 04 juin 2026', heure: '08:00', salle: 'CDI BOX 6' },
  { eleve: 'MOUAQIT Achraf', date: 'jeudi 04 juin 2026', heure: '13:30', salle: 'CDI BOX 6' },
  { eleve: 'NDIAYE Felwine Alicia', date: 'lundi 01 juin 2026', heure: '13:30', salle: 'I22' },
  { eleve: 'NDIAYE Maty', date: 'mardi 02 juin 2026', heure: '08:00', salle: 'I22' },
  { eleve: 'NGOM Aicha Khoyane', date: 'mercredi 03 juin 2026', heure: '08:00', salle: 'I22' },
  { eleve: 'NIANG Fatoumata Helene Semou', date: 'mercredi 03 juin 2026', heure: '08:00', salle: 'I22' },
  { eleve: 'NOUHANDO ROD Orient', date: 'mercredi 03 juin 2026', heure: '13:30', salle: 'I22' },
  { eleve: 'RUNG Agathe', date: 'lundi 01 juin 2026', heure: '08:00', salle: 'CDI BOX 1' },
  { eleve: 'SALL Tamsir', date: 'mardi 02 juin 2026', heure: '08:00', salle: 'CDI BOX 1' },
  { eleve: 'SAMBA Babacar', date: 'mardi 02 juin 2026', heure: '08:00', salle: 'CDI BOX 1' },
  { eleve: 'SARR Mame Diarra Bousso', date: 'mardi 02 juin 2026', heure: '13:30', salle: 'I22' },
  { eleve: 'SARR Sokhna Faty', date: 'mercredi 03 juin 2026', heure: '08:00', salle: 'I22' },
  { eleve: 'SAVI Loris Tahirou', date: 'mercredi 03 juin 2026', heure: '08:00', salle: 'I22' },
  { eleve: 'SECK Ousseynatou', date: 'mercredi 03 juin 2026', heure: '13:30', salle: 'I22' },
  { eleve: 'TSHIBANDA Raymond', date: 'mercredi 03 juin 2026', heure: '13:30', salle: 'CDI BOX 6' },
  { eleve: 'WONE Oumar', date: 'jeudi 04 juin 2026', heure: '13:30', salle: 'CDI BOX 6' },
];

const OralFrancais = () => {
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    const normalized = search.trim().toLowerCase();
    if (!normalized) return convocations;
    return convocations.filter((item) => item.eleve.toLowerCase().includes(normalized));
  }, [search]);

  const byDay = useMemo(() => filtered.reduce<Record<string, Convocation[]>>((acc, row) => {
    acc[row.date] = [...(acc[row.date] ?? []), row];
    return acc;
  }, {}), [filtered]);

  return <div className="min-h-screen flex flex-col font-raleway bg-slate-50">
    <Navbar showLogo={true} />
    <main className="container mx-auto px-6 py-10 flex-1">
      <h1 className="text-3xl font-playfair font-bold text-french-blue">Oral de français · du 1er au 5 juin 2026</h1>
      <p className="mt-2 text-slate-600">Consultez les convocations par ordre alphabétique, par jour, ou en vue croisée jour/heure.</p>
      <a className="inline-block mt-4 text-french-blue underline" href="https://drive.google.com/file/d/1wftUYJlyCUIQ6rfuJ0pxydsmI5enJ0FK/view?usp=sharin" target="_blank" rel="noreferrer">Voir les convocations (PDF)</a>

      <div className="mt-6">
        <Input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Rechercher un élève…" />
      </div>

      <Tabs defaultValue="alpha" className="mt-6">
        <TabsList>
          <TabsTrigger value="alpha">Ordre alphabétique</TabsTrigger>
          <TabsTrigger value="jour">Par jour</TabsTrigger>
          <TabsTrigger value="croise">Jour et heure</TabsTrigger>
        </TabsList>

        <TabsContent value="alpha" className="mt-4">
          {filtered.map((item) => <div key={`${item.eleve}-${item.date}-${item.heure}`} className="border-b py-2 text-sm">{item.eleve} — {item.date} — {item.heure} — {item.salle}</div>)}
        </TabsContent>

        <TabsContent value="jour" className="mt-4 space-y-4">
          {Object.entries(byDay).map(([day, rows]) => <div key={day}><h3 className="font-semibold text-french-blue">{day}</h3>{rows.map((item) => <div key={`${item.eleve}-${item.heure}`} className="text-sm py-1">{item.heure} · {item.eleve} · {item.salle}</div>)}</div>)}
        </TabsContent>

        <TabsContent value="croise" className="mt-4 space-y-4">
          {Object.entries(byDay).map(([day, rows]) => {
            const byHour = rows.reduce<Record<string, Convocation[]>>((acc, row) => {
              acc[row.heure] = [...(acc[row.heure] ?? []), row];
              return acc;
            }, {});
            return <div key={day} className="rounded-lg border bg-white p-4"><h3 className="font-semibold text-french-blue mb-2">{day}</h3>{Object.entries(byHour).map(([heure, r]) => <div key={heure} className="mb-2"><p className="text-sm font-medium">{heure}</p><ul className="list-disc pl-5 text-sm">{r.map((item) => <li key={`${item.eleve}-${item.salle}`}>{item.eleve} — {item.salle}</li>)}</ul></div>)}</div>;
          })}
        </TabsContent>
      </Tabs>
    </main>
    <Footer />
  </div>;
};

export default OralFrancais;
