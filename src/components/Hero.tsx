
import React from 'react';

interface HeroProps {
  title: string;
  subtitle: string;
}

const Hero = ({ title, subtitle }: HeroProps) => {
  return (
    <section className="bg-gradient-to-r from-french-blue to-blue-700 text-white py-24 md:py-32">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-6 opacity-0 animate-fade-in">
          {title}
        </h1>
        <p className="text-xl md:text-2xl font-raleway font-light max-w-3xl opacity-0 animate-fade-in-delay-1">
          {subtitle}
        </p>
      </div>
    </section>
  );
};

export default Hero;
