import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  BookOpen,
  Briefcase,
  Calendar,
  Compass,
  Globe,
  GraduationCap,
  Lightbulb,
  Map,
  MessageSquareQuote,
  Rocket,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Button } from "@/components/ui/button";

const pillars = [
  {
    title: "Une culture de l'orientation pour tous",
    description:
      "Les élèves construisent progressivement leur projet, de la sixième à la terminale, à travers des expériences concrètes et des rencontres inspirantes.",
    icon: Compass,
  },
  {
    title: "Des parcours personnalisés",
    description:
      "Chaque élève bénéficie d'un accompagnement individualisé pour identifier ses talents, développer ses soft skills et faire des choix éclairés.",
    icon: Target,
  },
  {
    title: "Ouverture internationale et citoyenne",
    description:
      "Stages, échanges, projets citoyens et immersion dans la vie associative du LFJP ouvrent les horizons et valorisent l'engagement.",
    icon: Globe,
  },
  {
    title: "Partenariats et réseau alumni",
    description:
      "Professionnels, parents d'élèves et anciens forment une communauté engagée qui partage son expérience et accompagne les jeunes dans leurs projets.",
    icon: Users,
  },
];

const programmes = [
  {
    cycle: "Cycle 3 – Entrer dans la démarche",
    icon: Map,
    focus:
      "Découverte des métiers, premières immersions dans les clubs et projets qui développent curiosité et confiance.",
    highlights: [
      "Parcours citoyen et ateliers artistiques",
      "Clubs scientifiques, sportifs et culturels",
      "Rencontres avec les parents et les personnels du lycée",
    ],
  },
  {
    cycle: "Cycle 4 – Explorer et se projeter",
    icon: BookOpen,
    focus:
      "Construction progressive du projet personnel grâce à des expériences concrètes et des temps de réflexion.",
    highlights: [
      "Semaine de l'orientation et forum des métiers",
      "Visites d'entreprises et d'institutions",
      "Parcours citoyen et projets interdisciplinaires",
    ],
  },
  {
    cycle: "Lycée – Affiner et réussir son projet",
    icon: GraduationCap,
    focus:
      "Accompagnement individualisé vers l'enseignement supérieur, valorisation des réussites et préparation aux candidatures.",
    highlights: [
      "Tutorat personnalisé et entretiens d'orientation",
      "Préparation Parcoursup et ateliers de soft skills",
      "Mobilisation du réseau d'alumni et des partenaires",
    ],
  },
];

const actions = [
  {
    title: "Rencontres & inspirations",
    icon: Lightbulb,
    description:
      "Conférences métiers, témoignages d'alumni, masterclasses et webinaires pour découvrir des parcours variés et inspirants.",
    items: [
      "Forum annuel des métiers et des passions",
      "Rencontres thématiques : sciences, arts, numérique, citoyenneté",
      "Programme de mentorat reliant élèves et anciens",
    ],
  },
  {
    title: "Expériences concrètes",
    icon: Briefcase,
    description:
      "Stages, projets citoyens, mini-entreprises, concours d'éloquence et immersions professionnelles pour apprendre en agissant.",
    items: [
      "Stage d'observation en 3e et mini-stages au lycée",
      "Programmes Erasmus+ et mobilité internationale",
      "Clubs engagés : journal, théâtre, débats, projets solidaires",
    ],
  },
  {
    title: "Accompagnement personnalisé",
    icon: Award,
    description:
      "Entretiens réguliers, ateliers de compétences psychosociales et soutien aux candidatures pour faire grandir chaque élève.",
    items: [
      "Bilans annuels et rendez-vous familles",
      "Ateliers soft skills : confiance, coopération, leadership",
      "Coaching Parcoursup et préparation aux oraux",
    ],
  },
];

const timeline = [
  {
    title: "Septembre",
    description: "Séances de lancement du Parcours Avenir et rencontres avec les équipes de vie scolaire et d'orientation.",
  },
  {
    title: "Novembre",
    description: "Forum des métiers, ateliers thématiques et rencontres avec les partenaires locaux.",
  },
  {
    title: "Janvier",
    description: "Semaine de l'orientation, immersion dans les options et les enseignements de spécialité.",
  },
  {
    title: "Mars",
    description: "Projets citoyens, simulations d'entretiens et coaching Parcoursup.",
  },
  {
    title: "Juin",
    description: "Bilan individuel, valorisation des réussites et projection vers l'année suivante.",
  },
];

const resources = [
  {
    title: "Padlet Orientation",
    description:
      "Une bibliothèque numérique régulièrement mise à jour : fiches métiers, MOOCs, podcasts et vidéos inspirantes.",
    link: "https://padlet.com/",
  },
  {
    title: "Guides Parcoursup",
    description:
      "Des ressources pour comprendre les attendus des formations, rédiger son projet motivé et se préparer aux entretiens.",
    link: "https://www.parcoursup.fr/",
  },
  {
    title: "Calendrier de l'orientation",
    description:
      "Toutes les échéances clés pour ne rien manquer : inscriptions, portes ouvertes, candidatures et concours.",
    link: "https://eduscol.education.fr/",
  },
];

const testimonials = [
  {
    quote:
      "Grâce au Parcours Avenir, j'ai découvert les métiers de la transition écologique et trouvé le cursus qui me correspond.",
    author: "Fatou, élève de Terminale", 
  },
  {
    quote:
      "Les échanges avec les alumni et les ateliers soft skills m'ont aidé à gagner en confiance pour mes oraux.",
    author: "Arthur, élève de Première",
  },
  {
    quote:
      "En tant que parent et professionnelle, j'interviens chaque année pour présenter mon parcours : une vraie fierté !",
    author: "Awa, parent d'élève et partenaire",
  },
];

const figures = [
  { value: "100%", label: "des élèves bénéficient d'un suivi individuel en Terminale" },
  { value: "30+", label: "alumni mobilisés chaque année" },
  { value: "80%", label: "des collégiens engagés dans un club ou projet citoyen" },
  { value: "12", label: "ateliers thématiques proposés sur l'année" },
];

const partners = [
  "Parents d'élèves", "Alumni", "Entreprises locales", "Institutions culturelles", "Associations citoyennes"
];

const navAnchors = [
  { href: "#vision", label: "Vision" },
  { href: "#programme", label: "Programme" },
  { href: "#actions", label: "Actions" },
  { href: "#ressources", label: "Ressources" },
  { href: "#accompagnement", label: "Accompagnement" },
];

const ParcoursAvenir = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-raleway text-slate-900">
      <Navbar showLogo />

      <main className="flex-1">
        <section className="relative overflow-hidden bg-gradient-to-br from-french-blue via-blue-700 to-blue-600 text-white">
          <div className="absolute inset-0 opacity-20" aria-hidden>
            <div className="absolute -top-10 left-1/3 h-64 w-64 rounded-full bg-white/20 blur-3xl" />
            <div className="absolute -bottom-10 right-1/4 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />
          </div>

          <div className="relative container mx-auto px-6 py-16 md:py-24">
            <div className="max-w-3xl">
              <p className="uppercase tracking-[0.35em] text-xs md:text-sm text-blue-100">
                Axe 4 · Réussites & orientation
              </p>
              <h1 className="mt-4 font-playfair text-4xl md:text-6xl font-bold leading-tight">
                Parcours Avenir du LFJP
              </h1>
              <p className="mt-6 text-lg md:text-xl text-blue-100">
                Un accompagnement progressif et exigeant pour que chaque élève développe ses talents, explore les possibles et construise un projet personnel ambitieux.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-white text-french-blue hover:bg-blue-50">
                  <Link to="/plan-strategique" state={{ axe: "axe4" }}>
                    Explorer l'axe 4 du PSD
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <a href="#programme">
                    Découvrir le programme
                    <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white border-b border-slate-100">
          <div className="container mx-auto px-6 py-6">
            <div className="flex flex-wrap gap-3 justify-center text-sm md:text-base">
              {navAnchors.map((item) => (
                <Button
                  key={item.href}
                  variant="outline"
                  asChild
                  className="bg-white text-slate-700 hover:bg-blue-50 hover:text-french-blue"
                >
                  <a href={item.href}>{item.label}</a>
                </Button>
              ))}
            </div>
          </div>
        </section>

        <section id="vision" className="container mx-auto px-6 py-16">
          <div className="max-w-3xl">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-french-blue">
              Une ambition : révéler les talents et ouvrir les possibles
            </h2>
            <p className="mt-4 text-base md:text-lg text-slate-600">
              Le Parcours Avenir du Lycée Français Jacques Prévert s'inscrit au cœur du Plan Stratégique de Développement. Il articule orientation, développement personnel et engagement citoyen pour que chaque élève avance en confiance et en connaissance de soi.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="group relative overflow-hidden rounded-3xl border border-slate-100 bg-white/80 p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="absolute -right-16 top-1/2 h-32 w-32 -translate-y-1/2 rounded-full bg-blue-100/40 blur-3xl transition-opacity duration-300 group-hover:opacity-100" aria-hidden />
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-french-blue">
                    <pillar.icon className="h-6 w-6" aria-hidden />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">{pillar.title}</h3>
                    <p className="mt-2 text-sm md:text-base text-slate-600">{pillar.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="programme" className="bg-gradient-to-b from-slate-100 via-white to-slate-100 py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-french-blue">
                Un parcours progressif de la 6e à la Terminale
              </h2>
              <p className="mt-4 text-base md:text-lg text-slate-600">
                Chaque cycle propose des expériences adaptées pour développer l'autonomie, la curiosité et la capacité à faire des choix éclairés.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {programmes.map((programme) => (
                <div key={programme.cycle} className="flex h-full flex-col rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-100">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-french-blue">
                    <programme.icon className="h-6 w-6" aria-hidden />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-slate-900">{programme.cycle}</h3>
                  <p className="mt-3 text-sm md:text-base text-slate-600">{programme.focus}</p>
                  <ul className="mt-6 space-y-2 text-sm text-slate-600">
                    {programme.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-french-blue" aria-hidden />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="actions" className="container mx-auto px-6 py-16">
          <div className="max-w-3xl">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-french-blue">
              Des actions concrètes toute l'année
            </h2>
            <p className="mt-4 text-base md:text-lg text-slate-600">
              Le Parcours Avenir associe l'équipe pédagogique, les familles, les partenaires du territoire et les alumni. Ensemble, ils offrent un accompagnement riche et inspirant.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {actions.map((action) => (
              <div key={action.title} className="flex h-full flex-col rounded-3xl border border-slate-100 bg-white p-8 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-french-blue">
                  <action.icon className="h-6 w-6" aria-hidden />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-slate-900">{action.title}</h3>
                <p className="mt-3 text-sm md:text-base text-slate-600">{action.description}</p>
                <ul className="mt-6 space-y-2 text-sm text-slate-600">
                  {action.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Sparkles className="mt-0.5 h-4 w-4 text-french-blue" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="accompagnement" className="bg-slate-900 py-16 text-white">
          <div className="container mx-auto px-6">
            <div className="grid gap-10 lg:grid-cols-[2fr,1fr] lg:items-center">
              <div>
                <h2 className="font-playfair text-3xl md:text-4xl font-bold">
                  Un accompagnement sur-mesure
                </h2>
                <p className="mt-4 text-base md:text-lg text-slate-200">
                  Les équipes pédagogiques, psychologues de l'éducation nationale, CPE et professeurs principaux travaillent main dans la main pour suivre chaque élève. Des points d'étape réguliers permettent d'ajuster les projets et de valoriser les réussites.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {figures.map((figure) => (
                    <div key={figure.label} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                      <div className="text-3xl font-bold text-white">{figure.value}</div>
                      <p className="mt-2 text-sm text-slate-200">{figure.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-lg font-semibold text-white">Calendrier annuel</h3>
                <ol className="mt-4 space-y-4 text-sm text-slate-100">
                  {timeline.map((event) => (
                    <li key={event.title} className="flex gap-3">
                      <Calendar className="mt-0.5 h-4 w-4 text-blue-200" aria-hidden />
                      <div>
                        <p className="font-semibold text-white">{event.title}</p>
                        <p className="text-slate-200">{event.description}</p>
                      </div>
                    </li>
                  ))}
                </ol>

                <Button asChild className="mt-6 w-full bg-white text-french-blue hover:bg-blue-50">
                  <a href="#ressources">
                    Consulter les ressources
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="ressources" className="container mx-auto px-6 py-16">
          <div className="max-w-3xl">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-french-blue">
              Ressources et outils pour avancer
            </h2>
            <p className="mt-4 text-base md:text-lg text-slate-600">
              Les élèves et les familles disposent d'une boîte à outils complète pour s'informer, se préparer et s'inspirer tout au long de l'année.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {resources.map((resource) => (
              <div key={resource.title} className="flex h-full flex-col rounded-3xl border border-slate-100 bg-white p-8 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-french-blue">
                  <BookOpen className="h-6 w-6" aria-hidden />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-slate-900">{resource.title}</h3>
                <p className="mt-3 text-sm md:text-base text-slate-600">{resource.description}</p>
                <Button
                  asChild
                  variant="ghost"
                  className="mt-auto w-full justify-between px-0 text-french-blue hover:bg-transparent hover:text-blue-700"
                >
                  <a href={resource.link} target="_blank" rel="noreferrer noopener">
                    Consulter
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-slate-100 py-16">
          <div className="container mx-auto px-6">
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <h2 className="font-playfair text-3xl md:text-4xl font-bold text-french-blue">
                  Témoignages & réussites
                </h2>
                <p className="mt-4 text-base md:text-lg text-slate-600">
                  Parents, élèves, enseignants et partenaires témoignent de la richesse du Parcours Avenir et de son impact sur les trajectoires.
                </p>
                <div className="mt-8 grid gap-4">
                  {testimonials.map((testimonial) => (
                    <blockquote key={testimonial.author} className="rounded-3xl border border-blue-100 bg-white p-6 shadow-sm">
                      <MessageSquareQuote className="h-6 w-6 text-french-blue" aria-hidden />
                      <p className="mt-4 text-sm md:text-base text-slate-700 italic">“{testimonial.quote}”</p>
                      <cite className="mt-4 block text-xs uppercase tracking-[0.2em] text-blue-400">{testimonial.author}</cite>
                    </blockquote>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl bg-white p-8 shadow-lg">
                <h3 className="text-xl font-semibold text-slate-900">Une communauté engagée</h3>
                <p className="mt-4 text-sm md:text-base text-slate-600">
                  Le Parcours Avenir s'appuie sur un écosystème dynamique rassemblant :
                </p>
                <ul className="mt-6 space-y-3 text-sm text-slate-600">
                  {partners.map((partner) => (
                    <li key={partner} className="flex items-start gap-2">
                      <Users className="mt-0.5 h-4 w-4 text-french-blue" aria-hidden />
                      <span>{partner}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 rounded-2xl bg-blue-50 p-6">
                  <h4 className="text-lg font-semibold text-french-blue">Vous souhaitez contribuer ?</h4>
                  <p className="mt-2 text-sm text-slate-600">
                    Contactez l'équipe Parcours Avenir pour proposer une intervention, un stage, un témoignage ou parrainer un projet.
                  </p>
                  <Button asChild className="mt-4 bg-french-blue text-white hover:bg-blue-700">
                    <Link to="mailto:orientation@lfjp.sn">
                      Écrire à l'équipe
                      <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-french-blue to-blue-600 py-16 text-white">
          <div className="absolute inset-0 opacity-20" aria-hidden>
            <div className="absolute left-10 top-10 h-40 w-40 rounded-full bg-white/20 blur-3xl" />
            <div className="absolute bottom-10 right-10 h-52 w-52 rounded-full bg-blue-200/30 blur-3xl" />
          </div>
          <div className="relative container mx-auto px-6">
            <div className="flex flex-col items-center text-center">
              <Rocket className="h-10 w-10 text-white" aria-hidden />
              <h2 className="mt-4 font-playfair text-3xl md:text-4xl font-bold">
                Prêts à écrire la suite ?
              </h2>
              <p className="mt-4 max-w-2xl text-base md:text-lg text-blue-100">
                Le Parcours Avenir accompagne chaque élève pour qu'il trouve sa voie, développe sa singularité et devienne un citoyen du monde, engagé et confiant.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <Button asChild size="lg" className="bg-white text-french-blue hover:bg-blue-50">
                  <Link to="/pc-par-lyceen">
                    Découvrir l'accompagnement numérique
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Link to="/curriculum-soft-skills">
                    Explorer le curriculum Soft Skills
                    <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ParcoursAvenir;
