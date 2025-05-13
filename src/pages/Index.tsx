
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Vision from '../components/Vision';
import Missions from '../components/Missions';
import Valeurs from '../components/Valeurs';
import PSD from '../components/PSD';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col font-raleway">
      <Navbar />
      <Hero />
      <Vision />
      <Missions />
      <Valeurs />
      <PSD />
      <Footer />
    </div>
  );
};

export default Index;
