import React from 'react';
import { ActiveTab } from '../types';

interface BottomNavBarProps {
  activeTab: ActiveTab;
  onTabChange: (tab: ActiveTab) => void;
}

export const BottomNavBar: React.FC<BottomNavBarProps> = ({ activeTab, onTabChange }) => {
  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-2 py-1 bg-[#faf8ff] border-t border-[#c4c6ce]/40 shadow-[0px_-4px_20px_rgba(15,39,68,0.08)]">
      {/* Tab 1: Beranda */}
      <button
        onClick={() => onTabChange('beranda')}
        className={`flex flex-col items-center justify-center py-1 px-2.5 transition-transform duration-150 active:scale-95 cursor-pointer ${
          activeTab === 'beranda'
            ? 'text-[#9d4300] font-semibold'
            : 'text-[#44474d] hover:text-[#001229]'
        }`}
        type="button"
      >
        <div
          className={`w-10 h-7 flex items-center justify-center rounded-full mb-0.5 transition-colors ${
            activeTab === 'beranda' ? 'bg-[#ffdbca]/50' : 'bg-transparent'
          }`}
        >
          <span
            className={`material-symbols-outlined text-[20px] ${activeTab === 'beranda' ? 'fill' : ''}`}
          >
            home
          </span>
        </div>
        <span className="text-[11px] leading-[14px]">Beranda</span>
      </button>

      {/* Tab 2: Booking */}
      <button
        onClick={() => onTabChange('booking')}
        className={`flex flex-col items-center justify-center py-1 px-2.5 transition-transform duration-150 active:scale-95 cursor-pointer ${
          activeTab === 'booking'
            ? 'text-[#9d4300] font-semibold'
            : 'text-[#44474d] hover:text-[#001229]'
        }`}
        type="button"
      >
        <div
          className={`w-10 h-7 flex items-center justify-center rounded-full mb-0.5 transition-colors ${
            activeTab === 'booking' ? 'bg-[#ffdbca]/50' : 'bg-transparent'
          }`}
        >
          <span
            className={`material-symbols-outlined text-[20px] ${activeTab === 'booking' ? 'fill' : ''}`}
          >
            calendar_month
          </span>
        </div>
        <span className="text-[11px] leading-[14px]">Booking</span>
      </button>

      {/* Tab 3: Riwayat */}
      <button
        onClick={() => onTabChange('riwayat')}
        className={`flex flex-col items-center justify-center py-1 px-2.5 transition-transform duration-150 active:scale-95 cursor-pointer relative ${
          activeTab === 'riwayat'
            ? 'text-[#9d4300] font-semibold'
            : 'text-[#44474d] hover:text-[#001229]'
        }`}
        type="button"
      >
        <div
          className={`w-10 h-7 flex items-center justify-center rounded-full mb-0.5 transition-colors ${
            activeTab === 'riwayat' ? 'bg-[#ffdbca]/50' : 'bg-transparent'
          }`}
        >
          <span
            className={`material-symbols-outlined text-[20px] ${activeTab === 'riwayat' ? 'fill' : ''}`}
          >
            history
          </span>
        </div>
        <span className="text-[11px] leading-[14px]">Riwayat</span>
        {activeTab === 'riwayat' && (
          <span className="w-1.5 h-1.5 bg-[#9d4300] rounded-full mt-0.5"></span>
        )}
      </button>

      {/* Tab 4: Garasi */}
      <button
        onClick={() => onTabChange('garasi')}
        className={`flex flex-col items-center justify-center py-1 px-2.5 transition-transform duration-150 active:scale-95 cursor-pointer ${
          activeTab === 'garasi'
            ? 'text-[#9d4300] font-semibold'
            : 'text-[#44474d] hover:text-[#001229]'
        }`}
        type="button"
      >
        <div
          className={`w-10 h-7 flex items-center justify-center rounded-full mb-0.5 transition-colors ${
            activeTab === 'garasi' ? 'bg-[#ffdbca]/50' : 'bg-transparent'
          }`}
        >
          <span
            className={`material-symbols-outlined text-[20px] ${activeTab === 'garasi' ? 'fill' : ''}`}
          >
            directions_car
          </span>
        </div>
        <span className="text-[11px] leading-[14px]">Garasi</span>
      </button>

      {/* Tab 5: Profil */}
      <button
        onClick={() => onTabChange('profil')}
        className={`flex flex-col items-center justify-center py-1 px-2.5 transition-transform duration-150 active:scale-95 cursor-pointer ${
          activeTab === 'profil'
            ? 'text-[#9d4300] font-semibold'
            : 'text-[#44474d] hover:text-[#001229]'
        }`}
        type="button"
      >
        <div
          className={`w-10 h-7 flex items-center justify-center rounded-full mb-0.5 transition-colors ${
            activeTab === 'profil' ? 'bg-[#ffdbca]/50' : 'bg-transparent'
          }`}
        >
          <span
            className={`material-symbols-outlined text-[20px] ${activeTab === 'profil' ? 'fill' : ''}`}
          >
            person
          </span>
        </div>
        <span className="text-[11px] leading-[14px]">Profil</span>
      </button>
    </nav>
  );
};
