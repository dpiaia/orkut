
import React from 'react';
import { ProfileData, ScreenshotMode } from '../types';

interface SidebarProps {
  profile: ProfileData;
}

const Sidebar: React.FC<SidebarProps> = ({ profile }) => {
  const menuItems = [
    { label: 'scrapbook', icon: '📝' },
    { label: 'album', icon: '📷' },
    { label: 'videos', icon: '🎥' },
    { label: 'send message', icon: '✉️' },
    { label: 'write testimonial', icon: '✍️' },
    { label: 'send teaser', icon: '😉' },
    { label: 'add to bookmarks', icon: '🖇️' },
    { label: 'add to hot-list', icon: '🔥' },
    { label: 'add to crush-list', icon: '❤️' },
    { label: 'ignore user', icon: '🚫' },
    { label: 'report abuse', icon: '🛡️' },
  ];

  return (
    <div className="space-y-2">
      <div className="bg-orkut-card-bg border border-orkut-border p-1 rounded-sm flex flex-col sm:flex-row lg:flex-col items-center sm:items-start lg:items-center">
        <div className="w-32 lg:w-full aspect-square border border-gray-300 mb-1 overflow-hidden flex-shrink-0">
          <img src={profile.profilePic} alt="Profile" className="w-full h-full object-cover" />
        </div>
        <div className="text-[11px] text-gray-700 leading-tight px-1 py-2 sm:py-0 sm:pl-4 lg:pl-1">
          <div className="font-bold text-orkut-text-blue text-sm lg:text-[11px]">{profile.name}</div>
          <div>{profile.gender.toLowerCase()}, {profile.relationship.toLowerCase()}</div>
          <div>{profile.city}</div>
          <div>{profile.country}</div>
        </div>
      </div>

      <div className="bg-orkut-card-bg border border-orkut-border rounded-sm overflow-hidden grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-1">
        {menuItems.map((item, idx) => (
          <div 
            key={idx} 
            className="flex items-center space-x-2 px-2 py-1.5 lg:py-1 text-[11px] text-orkut-text-blue border-b border-r sm:border-r lg:border-r-0 border-gray-200 hover:bg-white cursor-pointer truncate"
          >
            <span className="flex-shrink-0">{item.icon}</span>
            <span className="truncate">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
