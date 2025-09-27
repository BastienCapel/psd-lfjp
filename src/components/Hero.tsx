import React from 'react';

interface HeroProps {
  title: string;
  subtitle: string;
}

const PsdLogo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    role="img"
    aria-labelledby="psd-logo-title psd-logo-desc"
    className="h-24 w-24 md:h-32 md:w-32 drop-shadow-lg"
  >
    <title id="psd-logo-title">Emblème du Plan Stratégique de Développement</title>
    <desc id="psd-logo-desc">
      Logo circulaire bleu avec les lettres LFJP et des ornements rouges
    </desc>
    <defs>
      <linearGradient id="psdLogoBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#1f4b6f" />
        <stop offset="100%" stopColor="#1b3f64" />
      </linearGradient>
    </defs>
    <circle cx="256" cy="256" r="240" fill="url(#psdLogoBg)" stroke="#d2d6dc" strokeWidth="20" />
    <g fill="#ffffff" transform="translate(256 150)">
      <path d="M-20 142c7.5-38 12-78 12-118 0-32-2-65-6-98 6-4 12-6 18-6s12 2 18 6c-4 33-6 66-6 98 0 40 4.5 80 12 118h-48z" />
      <path d="M-96-10c18-42 53-72 96-78 43 6 78 36 96 78l-28 12c-15-30-37-50-68-54-31 4-53 24-68 54l-28-12z" />
      <path d="M-92 58c24-40 58-62 92-64 34 2 68 24 92 64l-26 20c-18-28-42-44-66-46-24 2-48 18-66 46l-26-20z" />
    </g>
    <g fill="#d7323e" transform="translate(256 300)">
      <g transform="translate(-120 0)">
        <circle r="42" />
        <path d="M0-60h8l8 18h28v8h-28l-8 18h-8l-8-18h-28v-8h28l8-18z" />
      </g>
      <g>
        <circle r="54" />
        <path d="M0-78h10l10 22h34v10h-34l-10 22h-10l-10-22h-34v-10h34l10-22z" />
      </g>
      <g transform="translate(120 0)">
        <circle r="42" />
        <path d="M0-60h8l8 18h28v8h-28l-8 18h-8l-8-18h-28v-8h28l8-18z" />
      </g>
    </g>
    <g fontFamily="'Montserrat', 'Helvetica Neue', Arial, sans-serif" fontWeight="700" fontSize="116" letterSpacing="8">
      <text x="118" y="365" fill="#ffffff">
        LFJ
      </text>
      <text x="330" y="365" fill="#d7323e">
        P
      </text>
    </g>
    <g stroke="#d7323e" strokeWidth="10" strokeLinecap="round" fill="none" transform="translate(358 330)">
      <circle r="34" />
      <path d="M0-46v24M0 46v-24M-46 0h24M46 0h-24" />
    </g>
  </svg>
);

const Hero = ({ title, subtitle }: HeroProps) => {
  return (
    <section className="bg-gradient-to-r from-french-blue to-blue-700 text-white py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-12">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-6 opacity-0 animate-fade-in">
              {title}
            </h1>
            <p className="text-xl md:text-2xl font-raleway font-light opacity-0 animate-fade-in-delay-1">
              {subtitle}
            </p>
          </div>
          <div className="w-full md:w-auto flex justify-center md:justify-end">
            <div className="h-48 w-48 md:h-64 md:w-64 border-4 border-red-500 flex items-center justify-center opacity-0 animate-fade-in-delay-2">
              <div className="h-32 w-32 md:h-44 md:w-44 rounded-full bg-white/95 shadow-xl flex items-center justify-center">
                <PsdLogo />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
