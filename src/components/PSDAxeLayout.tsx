
import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';

interface ObjectifItem {
  text: string;
}

interface ActionItem {
  text: string;
  link?: string;
}

interface IndicatorItem {
  text: string;
}

interface PSDAxeLayoutProps {
  title: string;
  subtitle: string;
  objectifs: ObjectifItem[];
  actions: ActionItem[];
  indicators: IndicatorItem[];
}

const PSDAxeLayout: React.FC<PSDAxeLayoutProps> = ({
  title,
  subtitle,
  objectifs,
  actions,
  indicators
}) => {
  return (
    <div>
      <h3 className="text-xl font-playfair font-bold text-french-blue mb-4">
        {title}
      </h3>
      <p className="text-lg font-medium font-raleway text-gray-800 mb-4">
        {subtitle}
      </p>
      
      <div className="mt-6 space-y-4">
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Objectifs</h4>
          <ul className="list-disc pl-5 space-y-1 text-gray-700 font-raleway">
            {objectifs.map((item, index) => (
              <li key={index}>{item.text}</li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Actions prioritaires</h4>
          <ul className="list-disc pl-5 space-y-1 text-gray-700 font-raleway">
            {actions.map((item, index) => (
              <li key={index} className="flex items-center gap-1">
                {item.text}
                {item.link && (
                  <Link to={item.link} className="inline-flex items-center text-french-blue hover:text-french-blue/80">
                    <ExternalLink size={16} />
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Indicateurs</h4>
          <ul className="list-disc pl-5 space-y-1 text-gray-700 font-raleway">
            {indicators.map((item, index) => (
              <li key={index}>{item.text}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PSDAxeLayout;
