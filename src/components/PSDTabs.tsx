
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Target, Users, Sparkles, GraduationCap, LayoutDashboard } from 'lucide-react';
import PSDAxe1 from './PSDAxe1';
import PSDAxe2 from './PSDAxe2';
import PSDAxe3 from './PSDAxe3';
import PSDAxe4 from './PSDAxe4';
import PSDAxeTransversal from './PSDAxeTransversal';

const PSDTabs = () => {
  return (
    <Tabs defaultValue="axe1" className="w-full">
      <TabsList className="grid grid-cols-5 mb-8">
        <TabsTrigger value="axe1" className="flex flex-col items-center py-3 data-[state=active]:text-french-blue">
          <Target size={20} className="mb-1" />
          <span className="text-xs">Axe 1</span>
        </TabsTrigger>
        <TabsTrigger value="axe2" className="flex flex-col items-center py-3 data-[state=active]:text-french-blue">
          <Users size={20} className="mb-1" />
          <span className="text-xs">Axe 2</span>
        </TabsTrigger>
        <TabsTrigger value="axe3" className="flex flex-col items-center py-3 data-[state=active]:text-french-blue">
          <Sparkles size={20} className="mb-1" />
          <span className="text-xs">Axe 3</span>
        </TabsTrigger>
        <TabsTrigger value="axe4" className="flex flex-col items-center py-3 data-[state=active]:text-french-blue">
          <GraduationCap size={20} className="mb-1" />
          <span className="text-xs">Axe 4</span>
        </TabsTrigger>
        <TabsTrigger value="axe5" className="flex flex-col items-center py-3 data-[state=active]:text-french-blue">
          <LayoutDashboard size={20} className="mb-1" />
          <span className="text-xs">Transversal</span>
        </TabsTrigger>
      </TabsList>
      
      <TabsContent value="axe1" className="border-2 border-french-blue/10 rounded-lg p-6 bg-white">
        <PSDAxe1 />
      </TabsContent>
      
      <TabsContent value="axe2" className="border-2 border-french-blue/10 rounded-lg p-6 bg-white">
        <PSDAxe2 />
      </TabsContent>
      
      <TabsContent value="axe3" className="border-2 border-french-blue/10 rounded-lg p-6 bg-white">
        <PSDAxe3 />
      </TabsContent>
      
      <TabsContent value="axe4" className="border-2 border-french-blue/10 rounded-lg p-6 bg-white">
        <PSDAxe4 />
      </TabsContent>
      
      <TabsContent value="axe5" className="border-2 border-french-blue/10 rounded-lg p-6 bg-white">
        <PSDAxeTransversal />
      </TabsContent>
    </Tabs>
  );
};

export default PSDTabs;
