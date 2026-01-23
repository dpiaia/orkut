
import React, { useState } from 'react';
import { ProfileData, ScreenshotMode } from '../types.ts';
import Sidebar from './Sidebar.tsx';
import RightSidebar from './RightSidebar.tsx';
import Tabs from './Tabs.tsx';
import ProfileInfo from './ProfileInfo.tsx';
import ScrapsList from './ScrapsList.tsx';
import TestimonialsList from './TestimonialsList.tsx';
import ProfileSummaryHeader from './ProfileSummaryHeader.tsx';

interface ProfilePageProps {
  profile: ProfileData;
  screenshotMode: ScreenshotMode;
}

const ProfilePage: React.FC<ProfilePageProps> = ({ profile, screenshotMode }) => {
  const [activeTab, setActiveTab] = useState('social');

  return (
    <div className="flex flex-col lg:flex-row gap-4 w-full">
      {/* Left Sidebar */}
      <div className="w-full lg:w-[150px] lg:flex-shrink-0">
        <Sidebar profile={profile} />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 min-w-0 space-y-4">
        <div className="bg-orkut-card-bg border border-orkut-border rounded-sm p-4">
           {/* Top Stats Header */}
           <ProfileSummaryHeader profile={profile} />

           <div className="mt-4 overflow-x-auto scrollbar-hide">
             <Tabs 
               activeTab={activeTab} 
               onTabChange={setActiveTab} 
               screenshotMode={screenshotMode}
             />
           </div>

           <div className="mt-4 border border-orkut-border bg-white p-4">
             {activeTab === 'social' && <ProfileInfo profile={profile} />}
             {activeTab === 'recados' && <ScrapsList scraps={profile.scraps} />}
             {activeTab === 'depoimentos' && <TestimonialsList testimonials={profile.testimonials} />}
             {(activeTab === 'professional' || activeTab === 'personal') && (
                <div className="text-xs text-gray-500 italic p-4 text-center">
                  Esta seção está vazia. Adicione informações no editor!
                </div>
             )}
           </div>
        </div>
      </div>

      {/* Right Sidebar (Friends/Comms) */}
      <div className="w-full lg:w-[280px] lg:flex-shrink-0">
        <RightSidebar profile={profile} />
      </div>
    </div>
  );
};

export default ProfilePage;