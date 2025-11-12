import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { ArrowLeft, HeartPulse, Home } from 'lucide-react';

const ParcoursSante = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col font-raleway">
      <Navbar showLogo={true} />

      <div className="bg-gradient-to-r from-emerald-700 via-teal-600 to-sky-700 text-white py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-4 mb-6">
            <HeartPulse className="h-14 w-14" />
            <div>
              <p className="text-sm uppercase tracking-widest text-white/80">Cadre scolaire & santé</p>
              <h1 className="text-3xl md:text-5xl font-playfair font-bold">Parcours Santé</h1>
              <p className="text-lg md:text-2xl text-white/90 mt-2">
                Bien-être, prévention et accompagnement des élèves du LFJP
              </p>
            </div>
          </div>
          <p className="max-w-3xl text-base md:text-lg text-white/80">
            Le Parcours Santé structure les actions éducatives autour du bien-être physique, mental et social de nos
            élèves. Il mobilise l&apos;ensemble de la communauté éducative pour garantir un environnement attentif et
            protecteur.
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

      <div className="flex-1 bg-gradient-to-b from-slate-50 via-white to-white">
        <div className="container mx-auto px-6 py-16">
          <Card className="max-w-3xl mx-auto border-emerald-100 shadow-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-emerald-800">Information importante</CardTitle>
              <CardDescription>
                Mise à jour concernant la mise en ligne du contenu du Parcours Santé
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-slate-700 leading-relaxed">
                La construction de cette page est en attente du recrutement d&apos;un.e coordonnateur du parcours santé stable
                et engagé.e.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ParcoursSante;
