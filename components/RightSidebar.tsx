
import React from 'react';
import { ProfileData } from '../types';

interface RightSidebarProps {
  profile: ProfileData;
}

const RightSidebar: React.FC<RightSidebarProps> = ({ profile }) => {
  return (
    <div className="space-y-4">
      {/* Friends Box */}
      <div className="bg-orkut-card-bg border border-orkut-border rounded-sm overflow-hidden">
        <div className="bg-[#D9E6F7] px-2 py-1 flex justify-between items-center">
            <span className="text-xs font-bold text-orkut-text-blue truncate">his friends ({profile.friends.length})</span>
        </div>
        <div className="p-2 grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-3 gap-2">
          {profile.friends.slice(0, 9).map(friend => (
            <div key={friend.id} className="flex flex-col items-center">
              <img src={friend.image} alt={friend.name} className="w-16 h-16 border border-gray-300 shadow-sm object-cover" />
              <span className="text-[10px] text-orkut-text-blue mt-1 underline truncate w-full text-center">{friend.name}</span>
            </div>
          ))}
        </div>
        <div className="bg-gray-100 border-t border-orkut-border p-1 text-center">
            <button className="text-[10px] text-orkut-text-blue font-bold cursor-pointer hover:underline border border-gray-300 px-2 py-0.5 rounded-sm bg-white">view friends</button>
        </div>
      </div>

      {/* Communities Box */}
      <div className="bg-orkut-card-bg border border-orkut-border rounded-sm overflow-hidden">
        <div className="bg-[#D9E6F7] px-2 py-1 flex justify-between items-center">
            <span className="text-xs font-bold text-orkut-text-blue truncate">his communities ({profile.communities.length})</span>
        </div>
        <div className="p-2 grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-3 gap-2">
          {profile.communities.slice(0, 9).map(comm => (
            <div key={comm.id} className="flex flex-col items-center">
              <img src={comm.image} alt={comm.name} className="w-16 h-16 border border-gray-300 shadow-sm object-cover" />
              <span className="text-[10px] text-orkut-text-blue mt-1 leading-tight text-center line-clamp-1 underline">{comm.name}</span>
              <span className="text-[9px] text-gray-500">({comm.members?.toLocaleString()})</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
