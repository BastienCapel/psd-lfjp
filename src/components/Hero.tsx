
import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-french-blue to-blue-700 text-white py-24 md:py-32">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-6 opacity-0 animate-fade-in">
          NOTRE VISION, NOS MISSIONS, NOS VALEURS
        </h1>
        <p className="text-xl md:text-2xl font-raleway font-light max-w-3xl opacity-0 animate-fade-in-delay-1">
          Plan Stratégique de Développement du Lycée Français Jacques Prévert (2026-2030)
        </p>
      </div>
    </section>
  );
};

export default Hero;
