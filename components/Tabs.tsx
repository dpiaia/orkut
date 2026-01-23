
import React from 'react';
import { ScreenshotMode } from '../types';

interface TabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  screenshotMode: ScreenshotMode;
}

const Tabs: React.FC<TabsProps> = ({ activeTab, onTabChange, screenshotMode }) => {
  const tabs = [
    { id: 'social', label: 'social', icon: '👤' },
    { id: 'professional', label: 'professional', icon: '💼' },
    { id: 'personal', label: 'personal', icon: '🏠' },
    { id: 'recados', label: 'scraps' },
    { id: 'depoimentos', label: 'testimonials' },
  ];

  return (
    <div className="flex space-x-1 border-b border-transparent overflow-x-auto whitespace-nowrap scrollbar-hide">
      {tabs.map(tab => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`
            px-3 py-1.5 text-[11px] font-bold transition-all flex items-center space-x-1 border-t border-l border-r rounded-t-sm flex-shrink-0
            ${activeTab === tab.id 
              ? 'bg-white border-orkut-border -mb-px text-orkut-text-blue' 
              : 'bg-[#D9E6F7] border-transparent text-orkut-text-blue hover:underline'
            }
          `}
        >
          {tab.icon && <span className="flex-shrink-0">{tab.icon}</span>}
          <span>{tab.label}</span>
        </button>
      ))}
    </div>
  );
};

export default Tabs;
