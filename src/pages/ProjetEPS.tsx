import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { ArrowLeft, Dumbbell, GraduationCap, HeartPulse, Home, LineChart, ShieldCheck } from 'lucide-react';

const ProjetEPS = () => {
  const navigate = useNavigate();

  const axesAEFE = [
    'Développement du réseau',
    'Excellence pédagogique et valeurs humanistes',
    'Formation des personnels',
    'Rayonnement culturel, diplomatique et francophonie'
  ];

  const objectifs = [
    {
      title: 'Réussite et inclusion',
      description:
        'Favoriser la réussite de tous les élèves par une EPS inclusive et différenciée, centrée sur l’autonomie et le bien-être.'
    },
    {
      title: 'Accompagnement des parcours',
      description:
        'Accompagner chaque élève dans son parcours personnel, citoyen et sportif en articulant projets et activités physiques.'
    },
    {
      title: 'Ouverture internationale',
      description:
        'Développer l’ouverture internationale par le sport et valoriser les partenariats, projets et voyages scolaires.'
    },
    {
      title: 'Cadre de vie et sécurité',
      description:
        'Améliorer le cadre de vie scolaire pour une pratique sportive sereine, sécurisée et respectueuse de l’environnement.'
    }
  ];

  const cycles = [
    {
      title: 'Collège – Cycles 3 & 4',
      items: [
        'Produire une performance optimale mesurable dans les activités de course, lancer, natation ou sports collectifs.',
        'Adapter ses déplacements à des environnements variés : courses d’orientation, cross, activités nautiques.',
        'Conduire et maîtriser une prestation artistique ou acrobatique : gymnastique, cirque ou acrosport.',
        'Interagir dans des jeux collectifs en coopérant et en s’opposant avec respect.'
      ]
    },
    {
      title: 'Lycée',
      items: [
        'Consolider les attentes du collège avec des objectifs chiffrés en course, natation et sports collectifs.',
        'Développer l’autonomie dans la gestion de l’effort et la conduite de projet personnel sportif.',
        'Faire vivre la dimension citoyenne : arbitrage, sécurité, respect des règles et des partenaires.'
      ]
    }
  ];

  const programmation = [
    {
      level: 'Collège',
      details:
        'Course de vitesse et demi-fond, lancer de vortex, natation, sports collectifs (handball, basketball, volleyball), gymnastique et acrosport, badminton, cross training.'
    },
    {
      level: 'Lycée',
      details:
        'Course de 3 × 500 mètres, gestion de l’effort, sports collectifs (handball, volleyball, basketball), natation, projet personnel et accompagnement vers l’examen.'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col font-raleway">
      <Navbar showLogo={true} />

      <div className="bg-gradient-to-r from-blue-800 via-french-blue to-cyan-600 text-white py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-4 mb-6">
            <GraduationCap className="h-14 w-14" />
            <div>
              <p className="text-sm uppercase tracking-widest text-white/80">Cadre scolaire & santé</p>
              <h1 className="text-3xl md:text-5xl font-playfair font-bold">Projet EPS</h1>
              <p className="text-lg md:text-2xl text-white/90 mt-2">
                Projet pédagogique d’Éducation Physique et Sportive du Lycée Français Jacques Prévert
              </p>
            </div>
          </div>
          <p className="max-w-4xl text-base md:text-lg text-white/80">
            Le projet EPS structure la contribution de l’Éducation Physique et Sportive à la réussite et au bien-être des
            élèves de la 6ème à la Terminale. Il s’appuie sur les compétences générales de l’EPS, les axes stratégiques
            de l’AEFE et la dynamique internationale du LFJP.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-4 flex gap-2">
        <Button variant="outline" onClick={() => navigate(-1)}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Retour
        </Button>
        <Button variant="outline" onClick={() => navigate('/')}>
          <Home className="mr-2 h-4 w-4" />
          Accueil
        </Button>
      </div>

      <main className="flex-1 bg-gradient-to-b from-slate-50 via-white to-white">
        <div className="container mx-auto px-6 py-12 space-y-10">
          <Card className="shadow-sm border-blue-100">
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl text-blue-900">Contexte et ancrage du projet</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-700">
              <p>
                Le LFJP accueille une communauté internationale croissante à Saly Portudal. Le projet EPS prend appui sur
                les infrastructures sportives existantes (gymnase, plateau sportif multi-activités, piscine, piste) et sur
                les besoins identifiés des élèves pour maintenir leur engagement et leur plaisir d’apprendre par le
                mouvement.
              </p>
              <p>
                Il s’inscrit dans les axes stratégiques de l’AEFE et valorise les partenariats locaux (universités, clubs,
                associations) ainsi que les actions menées en lien avec la Caisse des Écoles française de la section
                sportive.
              </p>
              <div className="flex flex-wrap gap-2">
                {axesAEFE.map((axe) => (
                  <Badge key={axe} variant="secondary" className="bg-blue-50 text-blue-900 border border-blue-200">
                    {axe}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {objectifs.map((objectif) => (
              <Card key={objectif.title} className="h-full shadow-sm border-emerald-100">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="h-6 w-6 text-emerald-700" />
                    <CardTitle className="text-xl text-emerald-800">{objectif.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 leading-relaxed">{objectif.description}</p>
                </CardContent>
              </Card>
            ))}
          </section>

          <Card className="shadow-sm border-orange-100">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-3">
                <HeartPulse className="h-6 w-6 text-orange-500" />
                <CardTitle className="text-2xl text-orange-700">Compétences et champs d’apprentissage</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6 text-slate-700">
              <p>
                Le projet décline les cinq compétences générales de l’EPS : motricité efficace, compréhension et
                responsabilité, partage de règles et de valeur, gestion de la santé, et appropriation d’une culture
                sportive. Ces compétences structurent les attendus de fin de cycle et les situations d’apprentissage.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {cycles.map((cycle) => (
                  <div key={cycle.title} className="p-4 rounded-lg bg-orange-50 border border-orange-100">
                    <h3 className="font-semibold text-orange-700 mb-2">{cycle.title}</h3>
                    <ul className="list-disc list-inside space-y-2 text-slate-800">
                      {cycle.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-sm border-indigo-100">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-3">
                <LineChart className="h-6 w-6 text-indigo-600" />
                <CardTitle className="text-2xl text-indigo-700">Programmation annuelle</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-700">
              <p>
                La programmation articule les priorités de performance, d’adaptation aux environnements variés, de
                création artistique et de coopération. Elle assure une continuité entre les cycles en modulant les
                exigences et l’accompagnement selon les niveaux.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {programmation.map((bloc) => (
                  <div key={bloc.level} className="p-4 rounded-lg bg-indigo-50 border border-indigo-100">
                    <h3 className="font-semibold text-indigo-700 mb-2">{bloc.level}</h3>
                    <p className="leading-relaxed text-slate-800">{bloc.details}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-sm border-amber-100">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-3">
                <Dumbbell className="h-6 w-6 text-amber-600" />
                <CardTitle className="text-2xl text-amber-700">Partenariats et ouverture</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-3 text-slate-700">
              <p>
                Les projets EPS associent la communauté éducative : enseignants, élèves médiateurs, familles et partenaires
                sportifs. Ils s’articulent avec les voyages scolaires, les rencontres inter-établissements et les
                dispositifs particuliers (ULIS, UPE2A, classes préparatoires) pour encourager le dépassement de soi et la
                coopération.
              </p>
              <p>
                Une attention particulière est portée à la sécurité, à la prévention (savoir rouler, savoir nager) et à la
                valorisation des performances lors des examens (DNB, BAC) et des échéances sportives locales.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjetEPS;
