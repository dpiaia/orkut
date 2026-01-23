
import React from 'react';
import { ScreenshotMode } from '../types';

interface HeaderProps {
  name: string;
  screenshotMode: ScreenshotMode;
  onOpenSettings: () => void;
}

const Header: React.FC<HeaderProps> = ({ name, screenshotMode, onOpenSettings }) => {
  return (
    <header className="bg-white border-b border-orkut-border shadow-sm">
      <div className={`${screenshotMode === 'none' ? 'max-w-[1100px]' : 'w-full'} mx-auto px-4 py-2 flex flex-col md:flex-row md:items-center justify-between gap-2`}>
        <div className="flex items-center justify-between">
          <div className="text-orkut-pink font-bold text-2xl tracking-tighter leading-none md:mr-4">orkut</div>
          <div className="md:hidden flex items-center space-x-2 text-[11px] text-orkut-text-blue">
             <span 
                className="font-bold underline cursor-pointer"
                onClick={screenshotMode === 'none' ? onOpenSettings : undefined}
             >Settings</span>
          </div>
        </div>

        <nav className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] font-normal text-orkut-text-blue border-t md:border-t-0 pt-2 md:pt-0">
          <span className="cursor-pointer hover:underline">Home</span>
          <span className="text-gray-300">|</span>
          <span className="cursor-pointer hover:underline">Friends</span>
          <span className="text-gray-300">|</span>
          <span className="cursor-pointer hover:underline">Messages</span>
          <span className="text-gray-300">|</span>
          <span className="cursor-pointer hover:underline">Communities</span>
          <span className="text-gray-300 hidden sm:inline">|</span>
          <span className="cursor-pointer hover:underline hidden sm:inline">Search</span>
          <span className="text-gray-300 hidden sm:inline">|</span>
          <span className="cursor-pointer hover:underline hidden sm:inline">What's New</span>
        </nav>

        <div className="hidden md:flex items-center space-x-3 text-[11px] text-orkut-text-blue">
          <div className="hidden lg:flex items-center bg-white border border-gray-300 px-1 py-0.5 mr-2">
            <input type="text" placeholder="search" className="outline-none text-[11px] w-24" />
          </div>
          <span className="font-bold underline cursor-pointer truncate max-w-[120px]">{name.toLowerCase()}@orkut.com</span>
          <span className="text-gray-300">|</span>
          <span 
            className="cursor-pointer hover:underline"
            onClick={screenshotMode === 'none' ? onOpenSettings : undefined}
          >
            Settings
          </span>
          <span className="text-gray-300">|</span>
          <span className="cursor-pointer hover:underline">Help</span>
          <span className="text-gray-300">|</span>
          <span className="cursor-pointer hover:underline">Logout</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
