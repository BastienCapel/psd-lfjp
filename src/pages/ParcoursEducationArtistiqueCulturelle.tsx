import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import {
  ArrowLeft,
  Home,
  Palette,
  GraduationCap,
  Sparkles,
  MapPinned,
  CalendarRange,
  Layers,
  Landmark,
  Milestone
} from 'lucide-react';

const sectionWrapperClass =
  'relative overflow-hidden rounded-3xl border border-slate-200 bg-white/95 p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl';
const levelCardClass =
  'relative rounded-2xl bg-white/90 ring-1 ring-slate-200/70 p-6 space-y-4 shadow-sm hover:shadow-md transition-all duration-200';
const listItemClass = 'text-slate-700 leading-relaxed text-[clamp(0.95rem,1.45vw,1.05rem)]';
const yearCardClass = 'rounded-xl border border-slate-200 bg-white/90 p-4 shadow-inner space-y-2';

const promotionsPrimaire = {
  id: 'promotions-primaire',
  title: 'Parcours du primaire 2023 – 2026',
  tagline: 'Une visibilité claire des projets artistiques pour chaque niveau de PS à CM2.',
  gradient: 'from-french-blue/5 via-white to-amber-50',
  icon: Palette,
  levels: [
    {
      title: 'Petite Section (PS)',
      icon: Sparkles,
      years: [
        {
          year: '2023 / 2024',
          projects: [
            'Spectacle Djarama : découverte sensorielle du théâtre et des marionnettes.',
            "Rituel d’écoute : moments d’écoute active pour nourrir l’imaginaire artistique."
          ]
        },
        {
          year: '2024 / 2025',
          projects: [
            'Mosaïque + danse : compositions collectives autour du motif et du geste.',
            'Autoportrait en mouvement : premières expérimentations corporelles et plastiques.'
          ]
        },
        {
          year: '2025 / 2026',
          projects: [
            'Peinture sous verre avec Alioune Badara Kébé : initiation aux couleurs et à la transparence.',
            'Visites d’expositions adaptées aux tout-petits pour introduire la médiation culturelle.'
          ]
        }
      ]
    },
    {
      title: 'Moyenne Section (MS)',
      icon: Palette,
      years: [
        {
          year: '2023 / 2024',
          projects: ['Projets d’autoportrait : se représenter par les textures, couleurs et silhouettes.']
        },
        {
          year: '2024 / 2025',
          projects: ['Rituel d’écoute et carnet de regards : paysagisme sonore et traces graphiques.']
        },
        {
          year: '2025 / 2026',
          projects: ['Visites d’expositions : premiers échanges avec les œuvres contemporaines.']
        }
      ]
    },
    {
      title: 'Grande Section (GS)',
      icon: CalendarRange,
      years: [
        {
          year: '2023 / 2024',
          projects: ['« Lycée français dans le monde » : affiches illustrant les lieux de scolarisation.']
        },
        {
          year: '2024 / 2025',
          projects: ['Spectacle Djarama et ateliers de marionnettes en classe.']
        },
        {
          year: '2025 / 2026',
          projects: ['« Elles d’Afrique » : portraits inspirés de figures féminines du continent.']
        }
      ]
    },
    {
      title: 'Cours Préparatoire (CP)',
      icon: MapPinned,
      years: [
        {
          year: '2023 / 2024',
          projects: ['Mosaïque + danse : correspondance entre formes géométriques et chorégraphies.']
        },
        {
          year: '2024 / 2025',
          projects: ['Création d’images numériques : initiation au dessin sur tablette et au montage.']
        },
        {
          year: '2025 / 2026',
          projects: ['Peinture sous verre avec Alioune Badara Kébé : jeux de lumière et narration.']
        }
      ]
    },
    {
      title: 'Cours Élémentaire 1 (CE1)',
      icon: Sparkles,
      years: [
        {
          year: '2023 / 2024',
          projects: ['Autoportrait en techniques mixtes : collage, peinture et écriture.']
        },
        {
          year: '2024 / 2025',
          projects: ['Rituel d’écoute et écriture poétique : traduire le son en image.']
        },
        {
          year: '2025 / 2026',
          projects: ['Visites d’expositions au lycée et à la Galerie Mémoires Africaines.']
        }
      ]
    },
    {
      title: 'Cours Élémentaire 2 (CE2)',
      icon: CalendarRange,
      years: [
        {
          year: '2023 / 2024',
          projects: ['« Elles d’Afrique » : portraits d’inspirations féminines et récit graphique.']
        },
        {
          year: '2024 / 2025',
          projects: ['Réalisation de Litema : motifs basotho en peinture murale collective.']
        },
        {
          year: '2025 / 2026',
          projects: ['Création d’images numériques : composition, retouche et impression.']
        }
      ]
    },
    {
      title: 'Cours Moyen 1 (CM1)',
      icon: Layers,
      years: [
        {
          year: '2023 / 2024',
          projects: ['Projet « Lycée français dans le monde » : carte collaborative et correspondances.']
        },
        {
          year: '2024 / 2025',
          projects: ['Atelier mosaïque + danse : scénographie, rythme et mouvement.']
        },
        {
          year: '2025 / 2026',
          projects: ['Peinture sous verre avec Alioune Badara Kébé : récit visuel et composition.']
        }
      ]
    },
    {
      title: 'Cours Moyen 2 (CM2)',
      icon: GraduationCap,
      years: [
        {
          year: '2023 / 2024',
          projects: ['Visites d’expositions et médiation auprès des classes de maternelle.']
        },
        {
          year: '2024 / 2025',
          projects: ['Autoportrait engagé : identité, sport et citoyenneté.']
        },
        {
          year: '2025 / 2026',
          projects: ['Création d’un Litema collectif et restitution numérique.']
        }
      ]
    }
  ]
};

const promotions = [
  {
    id: 'promotion-2020-2024',
    title: 'Promotion 2020 – 2024',
    tagline: 'Une dernière année de collège placée sous le signe des rencontres artistiques et sportives.',
    gradient: 'from-rose-50 via-white to-amber-50',
    icon: GraduationCap,
    levels: [
      {
        title: 'En classe de 3e (2023-2024)',
        icon: Palette,
        highlights: [
          'Visite de la galerie Mémoire Africaine de Saly.',
          'Exposition visitée : « Graines de métal » de Nola Cylla et Aurélia Sfeir.',
          'SLFM : Challenges 2024 images – projets artistiques des classes de 3e.',
          'SLFM : Exposition « Sport en mouvement » présentant leurs réalisations.',
          'SOP : Expo « Réalité augmentée : Le JO au lycée » (projets des classes de 4e).'
        ]
      }
    ]
  },
  {
    id: 'promotion-2021-2025',
    title: 'Promotion collège 2021 – 2025',
    tagline: 'Des partenariats artistiques pour nourrir la créativité et la responsabilité citoyenne.',
    gradient: 'from-sky-50 via-white to-emerald-50',
    icon: GraduationCap,
    levels: [
      {
        title: 'En classe de 4e (2023-2024)',
        icon: Sparkles,
        highlights: [
          'Rencontre avec l’artiste photographe KEKE dans le cadre d’une résidence artistique du collectif Bogoké Project (Burkina Faso).',
          'Projet collectif éco-responsable valorisant le travail artisanal des tisserands.',
          'SLFM : Challenges 2024 images – projets des classes de 4e.',
          'SLFM : Expo « Sport en mouvement » présentant leurs réalisations.',
          'SOP : Expo « Portrait de la Fan Zone » (projets des classes de 4e).'
        ]
      },
      {
        title: 'En classe de 3e (2024-2025)',
        icon: MapPinned,
        highlights: [
          'Visite de la galerie Mémoire Africaine de Saly.',
          'Visite de la Maison de l’Afrique : exposition « Carton rouge » de Khalifa Mané.',
          'Correspondance artistique avec une classe de troisième d’un établissement en France métropolitaine.',
          'SOP : Expo « Réalité augmentée : du sport au lycée ». '
        ]
      }
    ]
  },
  {
    id: 'promotion-2022-2026',
    title: 'Promotion collège 2022 – 2026',
    tagline: 'Un parcours qui conjugue arts visuels, technologie et découvertes culturelles.',
    gradient: 'from-indigo-50 via-white to-pink-50',
    icon: GraduationCap,
    levels: [
      {
        title: 'En classe de 5e (2023-2024)',
        icon: CalendarRange,
        highlights: [
          'Visite du musée Mahicao dans le Sine-Saloum.',
          'EPI Arts plastiques / Technologie : conception d’un portail de sécurité (structure, signalétique et esthétique).',
          'EPI Français / Arts plastiques : annonces presse pour la Semaine de la Presse.',
          'EPI Français / Arts plastiques : enluminures médiévales lors du marché médiéval.',
          'SLFM : Challenges 2024 images – projets des classes de 5e.',
          'Voyage à Paris.'
        ]
      },
      {
        title: 'En classe de 4e (2024-2025)',
        icon: Layers,
        highlights: [
          'Visite de la galerie Mémoire Africaine de Saly dans le cadre du Off de la Biennale de Dakar.',
          'Visite de la Maison de l’Afrique : exposition « Carton rouge » de Khalifa Mané.',
          'Résidence artistique au lycée avec Jean-Claude Desmerges : réalisation d’une peinture murale collective au sein de l’établissement.',
          'EPI Français / Arts plastiques (2025) : « Intelligence artificielle et portrait robot » pour la Semaine de la Presse.'
        ]
      },
      {
        title: 'En classe de 3e (2025-2026)',
        icon: MapPinned,
        highlights: [
          'Rencontre et atelier avec la slameuse Hajar Thiam.',
          'Rencontre avec Alioune Badara Kébé, artiste peintre sénégalais spécialisé dans le fixé sous verre.',
          'Visite de la Galerie du Manège à Dakar.',
          'Visite de l’école supérieure d’audiovisuel Sup IMAX.'
        ]
      }
    ]
  },
  {
    id: 'promotion-2023-2027',
    title: 'Promotion collège 2023 – 2027',
    tagline: 'Une progression continue avec des projets interdisciplinaires immersifs.',
    gradient: 'from-emerald-50 via-white to-cyan-50',
    icon: GraduationCap,
    levels: [
      {
        title: 'En classe de 6e (2023-2024)',
        icon: CalendarRange,
        highlights: [
          'Visite de la galerie Mémoire Africaine de Saly.',
          'SLFM : Challenges 2024 images – projets des classes de 6e.',
          'Voyage à Paris.'
        ]
      },
      {
        title: 'En classe de 5e (2024-2025)',
        icon: MapPinned,
        highlights: [
          'Visite de la Galerie du Manège à Dakar dans le cadre du Off de la Biennale de Dakar.',
          'Exposition visitée : œuvres de Maya Inès Touam.',
          'Visite de la Résidence de l’Ambassadeur de l’Union Européenne (Dakar) – exposition « Patrimoine d’hier et villes de demain ».',
          'Rencontre avec Geliza George, styliste.',
          'Collaboration avec une classe de CP : création d’un défilé et d’un magazine de mode pour la Semaine de la presse.',
          'EPI SVT / Arts plastiques : « Volcans et journal scientifique » – réalisation d’un magazine de vulgarisation.'
        ]
      },
      {
        title: 'En classe de 4e (2025-2026)',
        icon: Sparkles,
        highlights: [
          'Rencontre prévue avec Héloïse Vandermarcq, artiste graveuse, et réalisation de gravures d’illustration avec les classes de CP-CE2.',
          'Visite de la Maison de l’Afrique et de la galerie Mémoire Africaine.'
        ]
      }
    ]
  },
  {
    id: 'promotion-2024-2028',
    title: 'Promotion collège 2024 – 2028',
    tagline: 'Des projets sensibles à la médiation culturelle dès l’entrée au collège.',
    gradient: 'from-amber-50 via-white to-rose-50',
    icon: GraduationCap,
    levels: [
      {
        title: 'En classe de CM2 (2023-2024)',
        icon: CalendarRange,
        highlights: ['Voyage à Paris.']
      },
      {
        title: 'En classe de 6e (2024-2025)',
        icon: MapPinned,
        highlights: [
          'Visite du musée Mahicao dans le Sine-Saloum.',
          'EPI EPS / Arts plastiques (2025) : « Danse et mouvement » – exploration du corps en mouvement.',
          'SOP : Expo « Portrait d’objets de sport » (projets des classes de 6e).'
        ]
      },
      {
        title: 'En classe de 5e (2025-2026)',
        icon: Sparkles,
        highlights: [
          'Visite prévue de la Maison de l’Afrique.',
          'Rôle de médiation : guidage des élèves de maternelle dans l’exposition.',
          'Voyage à Paris.'
        ]
      }
    ]
  },
  {
    id: 'promotion-2025-2029',
    title: 'Promotion collège 2025 – 2029',
    tagline: 'Deux résidences artistiques fondatrices dès la fin du primaire.',
    gradient: 'from-purple-50 via-white to-blue-50',
    icon: GraduationCap,
    levels: [
      {
        title: 'En classe de CM2 (2024-2025)',
        icon: Sparkles,
        highlights: [
          'Résidence artistique au lycée avec Charlotte Hubert et performance collective pour le vernissage de la Biennale.',
          'Résidence artistique au lycée avec Alioune Badara Kébé : réalisation de fixés sous verre exposés lors du vernissage.'
        ]
      },
      {
        title: 'En classe de 6e (2025-2026)',
        icon: MapPinned,
        highlights: [
          'Visite du musée Mahicao dans le Sine-Saloum.',
          'Voyage à Paris.'
        ]
      }
    ]
  }
];

const parcoursArtistiqueInterdegre = {
  id: 'parcours-artistique-interdegre',
  title: 'Parcours artistique interdegré',
  subtitle: 'Expositions au sein du lycée – années 2024-2025 et 2025-2026',
  gradient: 'from-slate-900 via-slate-800 to-slate-900',
  icon: Landmark,
  seasons: [
    {
      title: 'Année 2024 – 2025',
      description: 'Quatre expositions présentées dans le cadre du projet « Des œuvres au lycée » en partenariat avec la Galerie Mémoires Africaines.',
      segments: [
        {
          label: 'Novembre – décembre',
          details: [
            'Exposition du Off de la Biennale de Dakar.',
            'Œuvres de Ariane Aumjaud, Charlotte Hubert, Alioune Badara Kébé, Jean-Claude Desmerges, Jimmy Sohm, Yasmine Sweet Love, Karim Cornali, Bogoké Project, Bruno Maurey, Écloz.'
          ]
        },
        {
          label: 'Février',
          details: [
            'Exposition « L’Afrique face à l’océan » en partenariat avec la Galerie Mémoires Africaines.',
            'Œuvres de Jean-Marie Bruce, Kossi Seshie et Alex.'
          ]
        },
        {
          label: 'Avril',
          details: [
            'Exposition « Visage et ornement – l’âme du portrait d’Afrique » en partenariat avec la Galerie Mémoires Africaines.',
            'Œuvres de Sébastien Bouchard, Cheikh Tidiane Keita et Landing Diémé.'
          ]
        },
        {
          label: 'Mai',
          details: ['Exposition consacrée à l’artiste Zeus, en partenariat avec la Galerie Mémoires Africaines.']
        }
      ]
    },
    {
      title: 'Année 2025 – 2026',
      description: 'Programme à venir : quatre expositions toujours en partenariat avec la Galerie Mémoires Africaines.',
      segments: [
        {
          label: 'Novembre – décembre (période 2)',
          details: [
            'Exposition de Roméo Temwa « Le jeu numérique et la pensée critique » en partenariat avec la Galerie Mémoires Africaines.',
            'Œuvres inspirées par la mémoire collective, l’univers numérique et la circulation des images.'
          ]
        },
        { label: 'Janvier – février (période 3)', details: ['Exposition à venir.'] },
        { label: 'Mars – avril (période 4)', details: ['Exposition à venir.'] },
        { label: 'Mai – juin (période 5)', details: ['Exposition à venir.'] }
      ]
    }
  ]
};

const tocItems = [
  { id: 'introduction', label: 'Panorama du PEAC' },
  { id: promotionsPrimaire.id, label: promotionsPrimaire.title },
  ...promotions.map((promotion) => ({ id: promotion.id, label: promotion.title })),
  { id: parcoursArtistiqueInterdegre.id, label: parcoursArtistiqueInterdegre.title }
];

const ParcoursEducationArtistiqueCulturelle = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col font-raleway bg-gradient-to-b from-slate-50 via-white to-slate-100">
      <Navbar showLogo={true} />

      <section className="relative isolate overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=1600&q=80"
            alt="Palette de peinture et carnets de croquis"
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-slate-900/70" aria-hidden="true"></div>
        </div>
        <div className="relative container mx-auto px-6 py-24 md:py-32 text-center">
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-5 py-2 text-sm uppercase tracking-[0.3em]">
              <Palette className="h-4 w-4" aria-hidden="true" />
              Parcours d’Éducation Artistique et Culturelle
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-playfair font-bold text-balance mb-6">
            Inventorier, relier et valoriser toutes les expériences artistiques du LFJP
          </h1>
          <p className="mx-auto max-w-3xl text-lg md:text-xl text-white/90">
            Un panorama vivant des projets menés par les élèves, de la fin du primaire à la troisième, pour nourrir la curiosité, la sensibilité et l’engagement culturel.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6 py-6 flex flex-wrap gap-3">
        <Button variant="outline" onClick={() => navigate('/plan-strategique')} className="flex items-center gap-2 min-h-[44px]">
          <ArrowLeft className="h-4 w-4" />
          Retour au PSD
        </Button>
        <Button variant="outline" onClick={() => navigate('/')} className="flex items-center gap-2 min-h-[44px]">
          <Home className="h-4 w-4" />
          Accueil
        </Button>
      </div>

      <main className="flex-1 py-12 md:py-16">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row gap-12">
          <aside className="lg:w-64 flex-shrink-0">
            <nav className="sticky top-24 space-y-4">
              <div className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                  <Milestone className="h-5 w-5 text-french-blue" aria-hidden="true" />
                  Explorer le parcours
                </h2>
                <ul className="space-y-2 text-sm text-slate-700">
                  {tocItems.map((item) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className="group flex items-center gap-2 rounded-xl px-3 py-2 hover:bg-slate-100 hover:text-french-blue transition-colors"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-slate-300 group-hover:bg-french-blue"></span>
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>
          </aside>

          <div className="flex-1 space-y-12">
            <section id="introduction" className={sectionWrapperClass}>
              <div className="absolute inset-0 bg-gradient-to-br from-french-blue/10 via-transparent to-french-blue/5" aria-hidden="true"></div>
              <div className="relative space-y-6">
                <div className="flex items-center gap-3">
                  <Palette className="h-10 w-10 text-french-blue" aria-hidden="true" />
                  <div>
                    <h2 className="text-2xl font-playfair font-semibold text-slate-900">Panorama du Parcours d’Éducation Artistique et Culturelle</h2>
                    <p className="text-slate-600 text-base md:text-lg">
                      Cet inventaire met en lumière la diversité des expériences vécues par nos élèves : visites, résidences, rencontres professionnelles, projets interdisciplinaires et expositions au sein du lycée.
                    </p>
                  </div>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-inner">
                    <h3 className="text-lg font-semibold text-slate-900 mb-3">Un fil conducteur pour la culture</h3>
                    <p className="text-slate-700 text-sm md:text-base leading-relaxed">
                      Le PEAC structure la continuité des apprentissages artistiques et culturels et favorise l’ouverture des élèves sur leur environnement local et international, en cohérence avec l’axe 2 du PSD.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-inner">
                    <h3 className="text-lg font-semibold text-slate-900 mb-3">Une lecture transversale</h3>
                    <p className="text-slate-700 text-sm md:text-base leading-relaxed">
                      Les promotions sont présentées comme des « carnets de bord » qui permettent de suivre les projets au fil des niveaux, tout en valorisant les collaborations entre disciplines et partenaires culturels.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section
              id={promotionsPrimaire.id}
              className={`${sectionWrapperClass} bg-gradient-to-br ${promotionsPrimaire.gradient}`}
              aria-labelledby={`${promotionsPrimaire.id}-title`}
            >
              <div className="relative space-y-6">
                <div className="flex items-center gap-4 mb-2">
                  <promotionsPrimaire.icon className="h-10 w-10 text-french-blue" aria-hidden="true" />
                  <div>
                    <h2 id={`${promotionsPrimaire.id}-title`} className="text-2xl font-playfair font-semibold text-slate-900">
                      {promotionsPrimaire.title}
                    </h2>
                    <p className="text-slate-700 text-sm md:text-base leading-relaxed">{promotionsPrimaire.tagline}</p>
                  </div>
                </div>

                <div className="grid gap-6">
                  {promotionsPrimaire.levels.map((level) => (
                    <article key={level.title} className={levelCardClass} aria-labelledby={`${level.title.replace(/\s+/g, '-')}-heading`}>
                      <div className="flex items-start gap-3 mb-2">
                        <level.icon className="h-6 w-6 text-french-blue mt-1" aria-hidden="true" />
                        <h3 id={`${level.title.replace(/\s+/g, '-')}-heading`} className="text-xl font-semibold text-slate-900">
                          {level.title}
                        </h3>
                      </div>
                      <div className="grid gap-4 md:grid-cols-3">
                        {level.years.map((year) => (
                          <div key={`${level.title}-${year.year}`} className={yearCardClass}>
                            <div className="flex items-center gap-2 text-slate-900 font-semibold">
                              <CalendarRange className="h-4 w-4 text-french-blue" aria-hidden="true" />
                              <span>{year.year}</span>
                            </div>
                            <ul className="space-y-2 pl-1">
                              {year.projects.map((project) => (
                                <li key={project} className={listItemClass}>
                                  {project}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </section>

            {promotions.map((promotion) => (
              <section
                key={promotion.id}
                id={promotion.id}
                className={`${sectionWrapperClass} bg-gradient-to-br ${promotion.gradient}`}
              >
                <div className="relative">
                  <div className="flex items-center gap-4 mb-6">
                    <promotion.icon className="h-10 w-10 text-french-blue" aria-hidden="true" />
                    <div>
                      <h2 className="text-2xl font-playfair font-semibold text-slate-900">{promotion.title}</h2>
                      <p className="text-slate-700 text-sm md:text-base leading-relaxed">{promotion.tagline}</p>
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    {promotion.levels.map((level) => (
                      <article key={level.title} className={levelCardClass}>
                        <div className="flex items-start gap-3">
                          <level.icon className="h-6 w-6 text-french-blue mt-1" aria-hidden="true" />
                          <h3 className="text-xl font-semibold text-slate-900">{level.title}</h3>
                        </div>
                        <ul className="space-y-2 pl-2">
                          {level.highlights.map((item) => (
                            <li key={item} className={listItemClass}>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </article>
                    ))}
                  </div>
                </div>
              </section>
            ))}

            <section
              id={parcoursArtistiqueInterdegre.id}
              className={`${sectionWrapperClass} bg-gradient-to-br ${parcoursArtistiqueInterdegre.gradient} text-white`}
            >
              <div className="relative space-y-8">
                <div className="flex items-center gap-4">
                  <parcoursArtistiqueInterdegre.icon className="h-10 w-10 text-white" aria-hidden="true" />
                  <div>
                    <h2 className="text-2xl font-playfair font-semibold">{parcoursArtistiqueInterdegre.title}</h2>
                    <p className="text-white/80 text-sm md:text-base">{parcoursArtistiqueInterdegre.subtitle}</p>
                  </div>
                </div>

                <div className="space-y-6">
                  {parcoursArtistiqueInterdegre.seasons.map((season) => (
                    <div key={season.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                      <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                        <CalendarRange className="h-5 w-5 text-white" aria-hidden="true" />
                        {season.title}
                      </h3>
                      <p className="text-white/80 text-sm md:text-base leading-relaxed mt-2">{season.description}</p>
                      <div className="mt-4 grid gap-4 md:grid-cols-2">
                        {season.segments.map((segment) => (
                          <div key={segment.label} className="rounded-xl border border-white/10 bg-white/10 p-4">
                            <h4 className="text-lg font-semibold text-white mb-2">{segment.label}</h4>
                            <ul className="space-y-2 text-white/90 text-sm md:text-base">
                              {segment.details.map((detail) => (
                                <li key={detail} className="leading-relaxed">
                                  {detail}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ParcoursEducationArtistiqueCulturelle;
