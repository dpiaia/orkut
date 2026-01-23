
import React from 'react';
import { ProfileData } from '../types';

const ProfileInfo: React.FC<{ profile: ProfileData }> = ({ profile }) => {
  const sections = [
    { label: 'relationship status', value: profile.relationship },
    { label: 'here for', value: 'friends' },
    { label: 'about me', value: profile.bio },
    { label: 'ethnicity', value: profile.details.ethnicity },
    { label: 'religion', value: profile.details.religion },
    { label: 'humor', value: profile.details.humor },
    { label: 'fashion', value: profile.details.fashion },
    { label: 'hometown', value: profile.details.hometown },
    { label: 'webpage', value: profile.details.webpage, isLink: true },
    { label: 'passions', value: profile.details.passions },
    { label: 'sports', value: profile.details.sports },
    { label: 'activities', value: profile.details.activities },
    { label: 'books', value: profile.details.books },
    { label: 'music', value: profile.details.music },
    { label: 'tv shows', value: profile.details.tvShows },
    { label: 'movies', value: profile.details.movies },
    { label: 'cuisines', value: profile.details.cuisines },
  ];

  return (
    <div className="text-[11px]">
      <div className="space-y-px">
        {sections.map((item, idx) => (
          <div key={idx} className={`flex items-start py-1 ${idx % 2 === 0 ? 'bg-[#F1F6FF]' : 'bg-white'}`}>
            <div className="w-1/3 text-right pr-4 text-gray-500 font-normal">{item.label}:</div>
            <div className={`flex-1 ${item.isLink ? 'text-orkut-text-blue hover:underline cursor-pointer' : 'text-black'}`}>
              {item.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileInfo;
