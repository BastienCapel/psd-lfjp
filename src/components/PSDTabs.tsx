
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
        <TabsTrigger
          value="axe1"
          className="group flex flex-col items-center py-3 text-center text-[#333333] transition duration-200 data-[state=active]:text-[#005BAC]"
        >
          <Target className="mb-1 h-6 w-6 md:h-8 md:w-8 transition duration-200 group-hover:scale-[1.15] group-hover:text-[#005BAC]" />
          <span className="block text-sm md:text-lg transition duration-200 group-hover:scale-[1.15] group-hover:text-[#005BAC]">Axe 1</span>
        </TabsTrigger>
        <TabsTrigger
          value="axe2"
          className="group flex flex-col items-center py-3 text-center text-[#333333] transition duration-200 data-[state=active]:text-[#005BAC]"
        >
          <Users className="mb-1 h-6 w-6 md:h-8 md:w-8 transition duration-200 group-hover:scale-[1.15] group-hover:text-[#005BAC]" />
          <span className="block text-sm md:text-lg transition duration-200 group-hover:scale-[1.15] group-hover:text-[#005BAC]">Axe 2</span>
        </TabsTrigger>
        <TabsTrigger
          value="axe3"
          className="group flex flex-col items-center py-3 text-center text-[#333333] transition duration-200 data-[state=active]:text-[#005BAC]"
        >
          <Sparkles className="mb-1 h-6 w-6 md:h-8 md:w-8 transition duration-200 group-hover:scale-[1.15] group-hover:text-[#005BAC]" />
          <span className="block text-sm md:text-lg transition duration-200 group-hover:scale-[1.15] group-hover:text-[#005BAC]">Axe 3</span>
        </TabsTrigger>
        <TabsTrigger
          value="axe4"
          className="group flex flex-col items-center py-3 text-center text-[#333333] transition duration-200 data-[state=active]:text-[#005BAC]"
        >
          <GraduationCap className="mb-1 h-6 w-6 md:h-8 md:w-8 transition duration-200 group-hover:scale-[1.15] group-hover:text-[#005BAC]" />
          <span className="block text-sm md:text-lg transition duration-200 group-hover:scale-[1.15] group-hover:text-[#005BAC]">Axe 4</span>
        </TabsTrigger>
        <TabsTrigger
          value="axe5"
          className="group flex flex-col items-center py-3 text-center text-[#333333] transition duration-200 data-[state=active]:text-[#005BAC]"
        >
          <LayoutDashboard className="mb-1 h-6 w-6 md:h-8 md:w-8 transition duration-200 group-hover:scale-[1.15] group-hover:text-[#005BAC]" />
          <span className="block text-sm md:text-lg transition duration-200 group-hover:scale-[1.15] group-hover:text-[#005BAC]">Transversal</span>
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
