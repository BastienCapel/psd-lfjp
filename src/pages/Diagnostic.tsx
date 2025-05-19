
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DiagnosticElcsContent from '../components/diagnostic/DiagnosticElcsContent';
import DiagnosticPsdContent from '../components/diagnostic/DiagnosticPsdContent';
import DiagnosticRestaurantContent from '../components/diagnostic/DiagnosticRestaurantContent';
import { ElcsDataProvider } from '../components/diagnostic/ElcsDataContext';
import BackToTop from '../components/BackToTop';

const Diagnostic = () => {
  return (
    <div className="min-h-screen flex flex-col font-raleway">
      <Navbar showLogo={true} />
      
      <div className="bg-gradient-to-r from-french-blue to-blue-700 text-white py-24 md:py-28">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-4 opacity-0 animate-fade-in">
            Diagnostic
          </h1>
          <p className="text-xl md:text-2xl font-raleway font-light max-w-3xl opacity-0 animate-fade-in-delay-1">
            Analyse de la situation actuelle pour orienter le développement
          </p>
        </div>
      </div>

      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <Tabs defaultValue="elcs" className="w-full">
            <TabsList className="mb-8 w-full max-w-md mx-auto grid grid-cols-3">
              <TabsTrigger value="elcs" className="text-sm md:text-base font-medium">
                Diagnostic ELCS
              </TabsTrigger>
              <TabsTrigger value="restaurant" className="text-sm md:text-base font-medium">
                Restauration Scolaire
              </TabsTrigger>
              <TabsTrigger value="psd" className="text-sm md:text-base font-medium">
                Diagnostic PSD
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="elcs">
              <ElcsDataProvider>
                <DiagnosticElcsContent />
              </ElcsDataProvider>
            </TabsContent>
            
            <TabsContent value="restaurant">
              <DiagnosticRestaurantContent />
            </TabsContent>
            
            <TabsContent value="psd">
              <DiagnosticPsdContent />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default Diagnostic;
