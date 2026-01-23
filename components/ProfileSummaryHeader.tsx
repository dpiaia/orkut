
import React from 'react';
import { ProfileData } from '../types';

const ProfileSummaryHeader: React.FC<{ profile: ProfileData }> = ({ profile }) => {
  const renderStat = (icon: string, count: number | string, label: string) => (
    <div className="flex items-center space-x-1 text-[11px] text-orkut-text-blue whitespace-nowrap">
      <span>{icon}</span>
      <span className="font-bold">{count}</span>
      <span>{label}</span>
    </div>
  );

  const renderAttribute = (type: 'smiley' | 'ice' | 'heart', value: number) => {
    const icons = {
      smiley: '😊',
      ice: '🧊',
      heart: '❤️'
    };
    return (
      <div className="flex -space-x-1">
        {[1, 2, 3].map(i => (
          <span key={i} className={`text-lg leading-none ${i <= value ? 'opacity-100' : 'opacity-20 grayscale'}`}>
            {icons[type]}
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className="space-y-4 border-b border-orkut-border pb-4">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
            <h1 className="text-3xl sm:text-4xl text-black font-normal break-words">{profile.name}</h1>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 pt-1">
                {renderStat('💬', profile.scraps.length, 'scraps')}
                {renderStat('📷', 9, 'photos')}
                {renderStat('📹', 0, 'videos')}
                {renderStat('⭐', profile.stats.fans, 'fans')}
            </div>
        </div>
        
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
            <div className="flex items-center space-x-3">
                {renderAttribute('smiley', profile.stats.trustworthy)}
                {renderAttribute('ice', profile.stats.cool)}
                {renderAttribute('heart', profile.stats.sexy)}
            </div>
            <div className="text-xs text-orkut-text-blue italic border-l-0 sm:border-l sm:pl-6 border-gray-200">
                "{profile.status}"
            </div>
        </div>
    </div>
  );
};

export default ProfileSummaryHeader;
