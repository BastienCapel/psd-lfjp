import React from 'react';
import DiagnosticCard from './DiagnosticCard';
import MetricCard from './MetricCard';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { 
  ChartContainer, 
  ChartTooltip, 
  ChartTooltipContent 
} from '@/components/ui/chart';

const DiagnosticRestaurantContent = () => {
  // Données du sondage
  const studentDistributionData = [
    { name: 'Maternelle', value: 15, percentage: 17.2 },
    { name: 'Élémentaire', value: 53, percentage: 60.9 },
    { name: 'Collège', value: 45, percentage: 51.7 },
    { name: 'Lycée', value: 23, percentage: 26.4 }
  ];

  const restaurationInterestData = [
    { name: 'Oui', value: 92 },
    { name: 'Non', value: 8 }
  ];

  const periscolaireData = [
    { name: 'Oui', value: 29.9 },
    { name: 'Non', value: 70.1 }
  ];

  const currentLunchData = [
    { name: 'À la maison ou chez un proche', value: 28, percentage: 35 },
    { name: 'Un repas préparé à la maison (lunch-box)', value: 35, percentage: 43.8 },
    { name: 'Un plat ou repas livré', value: 25, percentage: 31.3 },
    { name: 'Un repas acheté à proximité de l\'établissement', value: 36, percentage: 45 },
    { name: 'À la maison et un repas préparé', value: 1, percentage: 1.3 }
  ];

  const serviceInterestByDayData = [
    { name: 'Lundi', value: 75, percentage: 93.8 },
    { name: 'Mardi', value: 66, percentage: 82.5 },
    { name: 'Mercredi', value: 29, percentage: 36.3 },
    { name: 'Jeudi', value: 75, percentage: 93.8 },
    { name: 'Vendredi', value: 60, percentage: 75 }
  ];

  const mealTypePreferenceData = [
    { name: 'Des plats chauds', value: 65, percentage: 81.3 },
    { name: 'Des plats froids', value: 39, percentage: 48.8 },
    { name: 'Des sandwichs ou du fast-food', value: 21, percentage: 26.3 },
    { name: 'Des repas complets (menu)', value: 48, percentage: 60 }
  ];

  const priceForDishData = [
    { name: 'Moins de 1 500 FCFA', value: 22.5 },
    { name: 'Entre 1 500 FCFA et 2 000 FCFA', value: 55 },
    { name: 'Entre 2 000 FCFA et 3 000 FCFA', value: 20 },
    { name: 'Plus de 3 000 FCFA', value: 2.5 }
  ];

  const priceForMenuData = [
    { name: 'Moins de 1 500 FCFA', value: 2.5 },
    { name: 'Entre 1 500 FCFA et 2 000 FCFA', value: 23.8 },
    { name: 'Entre 2 000 FCFA et 3 000 FCFA', value: 58.8 },
    { name: 'Plus de 3 000 FCFA', value: 13.8 },
    { name: 'Dépend du menu', value: 1.1 }
  ];

  const COLORS = ['#0055A4', '#EF4135', '#FFCD00', '#38b000', '#9381ff'];

  // Statistiques clés - Fixed trend property to be either "up" or "down", not just any string
  const keyMetrics = [
    { name: "Intérêt global pour la restauration scolaire", value: 92, label: "des parents intéressés", trend: "up" },
    { name: "Plats chauds", value: 81.3, label: "des parents souhaitent des plats chauds", trend: "up" },
    { name: "Budget moyen par plat", value: "1500-2000 FCFA", label: "pour 55% des parents", trend: "up" }
  ];

  // Points d'attention - Since these are alerts, using "down" as the trend value seems appropriate
  const alertPoints = [
    { name: "Mercredi", value: "36.3%", label: "d'intérêt seulement (vs +80% autres jours)", trend: "down" },
    { name: "Options alimentaires spécifiques", value: "33.3%", label: "demandent l'option végétarienne", trend: "down" },
    { name: "Tarification", value: "58.8%", label: "acceptent 2000-3000 FCFA pour un menu complet", trend: "down" }
  ];

  return (
    <div className="max-w-5xl mx-auto">
      <DiagnosticCard 
        title="Synthèse du sondage sur la restauration scolaire" 
        description="Analyse basée sur le sondage auprès des parents d'élèves (87 réponses)"
        className="mb-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <MetricCard 
            title="Statistiques clés" 
            primary={keyMetrics}
            secondary={alertPoints}
          />
          
          <div className="bg-white p-4 rounded-lg border border-french-blue/10 shadow-md h-full">
            <h3 className="text-lg font-medium text-french-blue mb-4">Répartition des enfants par niveau</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={studentDistributionData}
                margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="bg-white p-2 border rounded shadow-sm">
                        <p className="text-sm">{`${payload[0].name}: ${payload[0].value} élèves (${payload[0].payload.percentage}%)`}</p>
                      </div>
                    );
                  }
                  return null;
                }} />
                <Bar dataKey="value" fill="#0055A4" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-4 rounded-lg border border-french-blue/10 shadow-md">
            <h3 className="text-lg font-medium text-french-blue mb-4">Intérêt pour la restauration scolaire</h3>
            <div className="flex justify-center">
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={restaurationInterestData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}%`}
                  >
                    {restaurationInterestData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => `${value}%`} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg border border-french-blue/10 shadow-md">
            <h3 className="text-lg font-medium text-french-blue mb-4">Situation actuelle des repas</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={currentLunchData}
                layout="vertical"
                margin={{ top: 5, right: 20, left: 30, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis type="category" dataKey="name" width={150} tick={{ fontSize: 12 }} />
                <Tooltip content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="bg-white p-2 border rounded shadow-sm">
                        <p className="text-sm">{`${payload[0].payload.name}: ${payload[0].value} réponses (${payload[0].payload.percentage}%)`}</p>
                      </div>
                    );
                  }
                  return null;
                }} />
                <Bar dataKey="value" fill="#0055A4" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-4 rounded-lg border border-french-blue/10 shadow-md">
            <h3 className="text-lg font-medium text-french-blue mb-4">Intérêt par jour de la semaine</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={serviceInterestByDayData}
                margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="bg-white p-2 border rounded shadow-sm">
                        <p className="text-sm">{`${payload[0].name}: ${payload[0].value} réponses (${payload[0].payload.percentage}%)`}</p>
                      </div>
                    );
                  }
                  return null;
                }} />
                <Bar dataKey="value" fill="#0055A4" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white p-4 rounded-lg border border-french-blue/10 shadow-md">
            <h3 className="text-lg font-medium text-french-blue mb-4">Types de repas souhaités</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={mealTypePreferenceData}
                margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="bg-white p-2 border rounded shadow-sm">
                        <p className="text-sm">{`${payload[0].name}: ${payload[0].value} réponses (${payload[0].payload.percentage}%)`}</p>
                      </div>
                    );
                  }
                  return null;
                }} />
                <Bar dataKey="value" fill="#0055A4" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded-lg border border-french-blue/10 shadow-md">
            <h3 className="text-lg font-medium text-french-blue mb-4">Budget pour un plat</h3>
            <div className="flex justify-center">
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={priceForDishData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}%`}
                  >
                    {priceForDishData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => `${value}%`} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg border border-french-blue/10 shadow-md">
            <h3 className="text-lg font-medium text-french-blue mb-4">Budget pour un menu complet</h3>
            <div className="flex justify-center">
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={priceForMenuData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}%`}
                  >
                    {priceForMenuData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => `${value}%`} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-gray-50 p-4 rounded-lg border border-french-blue/10">
          <h3 className="text-lg font-medium text-french-blue mb-2">Conclusions principales</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Forte demande pour un service de restauration scolaire (92% des parents intéressés)</li>
            <li>Préférence marquée pour les lundis, mardis et jeudis (plus de 80% d'intérêt)</li>
            <li>Demande nette pour des plats chauds (81.3%) et des repas complets (60%)</li>
            <li>Budget moyen accepté : 1500-2000 FCFA pour un plat, 2000-3000 FCFA pour un menu complet</li>
            <li>Besoin d'options alimentaires spécifiques, notamment végétariennes (33.3%)</li>
          </ul>
        </div>
      </DiagnosticCard>
    </div>
  );
};

export default DiagnosticRestaurantContent;
