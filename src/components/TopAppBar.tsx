import React from 'react';
import { ActiveTab } from '../types';
import { USER_PROFILE } from '../data/mockData';

interface TopAppBarProps {
  activeTab: ActiveTab;
  onTabChange: (tab: ActiveTab) => void;
  onOpenNotifications: () => void;
  onBack?: () => void;
}

export const TopAppBar: React.FC<TopAppBarProps> = ({
  activeTab,
  onTabChange,
  onOpenNotifications,
  onBack,
}) => {
  if (activeTab === 'booking') {
    return (
      <header className="sticky top-0 z-40 bg-[#faf8ff] shadow-sm transition-all duration-200">
        <div className="flex justify-between items-center w-full px-4 py-2.5 max-w-2xl mx-auto">
          <div className="flex items-center gap-3">
            <button
              onClick={onBack || (() => onTabChange('beranda'))}
              aria-label="Kembali"
              className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#e2e7ff] text-[#001229] active:scale-95 transition-all cursor-pointer"
              type="button"
            >
              <span className="material-symbols-outlined text-[#001229]">arrow_back</span>
            </button>
            <div>
              <h1 className="text-[18px] leading-[24px] font-bold text-[#001229]">Booking Service</h1>
              <span className="text-[11px] leading-[14px] text-[#44474d] font-medium">Langkah 2 dari 3: Pilih Layanan &amp; Bengkel</span>
            </div>
          </div>
          <button
            onClick={onOpenNotifications}
            aria-label="Pemberitahuan"
            className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#e2e7ff] text-[#001229] active:scale-95 transition-all relative cursor-pointer"
            type="button"
          >
            <span className="material-symbols-outlined">notifications</span>
            <span className="absolute top-2 right-2 w-4 h-4 bg-[#fd761a] text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-white">
              {USER_PROFILE.unreadNotifications}
            </span>
          </button>
        </div>
        {/* Progress Step Track */}
        <div className="w-full bg-[#e2e7ff] h-1.5">
          <div className="bg-[#fd761a] h-1.5 rounded-full transition-all duration-300 w-2/3"></div>
        </div>
      </header>
    );
  }

  if (activeTab === 'riwayat') {
    return (
      <header className="sticky top-0 z-40 bg-[#faf8ff]/95 backdrop-blur-md shadow-sm">
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <button
              onClick={onBack || (() => onTabChange('beranda'))}
              aria-label="Kembali"
              className="w-10 h-10 rounded-xl flex items-center justify-center text-[#001229] bg-[#f2f3ff] hover:bg-[#eaedff] active:scale-95 transition-all cursor-pointer"
              type="button"
            >
              <span className="material-symbols-outlined text-[#001229] text-[22px]">arrow_back</span>
            </button>
            <div>
              <span className="text-[11px] text-[#74777e] block">AutoCare Tracking</span>
              <h1 className="text-[18px] leading-[24px] font-bold text-[#001229] tracking-tight">Status Pengerjaan</h1>
            </div>
          </div>
          {/* Live Refresh Badge */}
          <div className="flex items-center space-x-1.5 bg-[#e2e7ff] px-3 py-1 rounded-full border border-[#dae2fd]">
            <span className="w-2 h-2 rounded-full bg-[#fd761a] animate-ping"></span>
            <span className="text-[11px] text-[#9d4300] font-bold">Live Update</span>
          </div>
        </div>
      </header>
    );
  }

  if (activeTab === 'garasi') {
    return (
      <header className="bg-[#faf8ff] sticky top-0 z-40 bg-[#f2f3ff] shadow-sm">
        <div className="flex justify-between items-center w-full px-4 py-2.5 max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-[#0f2744] flex items-center justify-center text-[#d4e3ff] font-bold shadow-sm ring-2 ring-[#d4e3ff]/30 overflow-hidden">
              <span className="material-symbols-outlined text-[#d4e3ff] text-[18px]">person</span>
            </div>
            <span className="text-[18px] leading-[24px] font-bold text-[#001229] tracking-tight">AutoCare</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={onOpenNotifications}
              aria-label="Notifikasi"
              className="w-10 h-10 rounded-full flex items-center justify-center text-[#44474d] hover:bg-[#e2e7ff] hover:text-[#131b2e] active:scale-95 transition-all duration-150 relative cursor-pointer"
              type="button"
            >
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-2 right-2 w-4 h-4 bg-[#fd761a] text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-white">
                {USER_PROFILE.unreadNotifications}
              </span>
            </button>
          </div>
        </div>
      </header>
    );
  }

  // Beranda / Default Header
  return (
    <header className="sticky top-0 z-40 bg-[#faf8ff] shadow-sm">
      <div className="flex justify-between items-center w-full px-4 py-2.5 max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10 rounded-full ring-2 ring-[#dae2fd] overflow-hidden shrink-0">
            <img
              className="w-full h-full object-cover"
              alt="Avatar Yanzen"
              src={USER_PROFILE.avatar}
            />
          </div>
          <div>
            <span className="text-[#44474d] text-[11px] leading-[14px] font-semibold block">{USER_PROFILE.greeting}</span>
            <h1 className="text-[#001229] text-[18px] leading-[24px] font-bold tracking-tight">Halo, {USER_PROFILE.name}! 👋</h1>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="hidden md:flex items-center space-x-6 mr-4">
            {(['beranda', 'booking', 'riwayat', 'garasi', 'profil'] as ActiveTab[]).map((tab) => (
              <button
                key={tab}
                onClick={() => onTabChange(tab)}
                className={`text-[12px] font-semibold transition-colors cursor-pointer capitalize ${
                  (activeTab as ActiveTab) === tab ? 'text-[#001229]' : 'text-[#44474d] hover:text-[#001229]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <button
            onClick={onOpenNotifications}
            aria-label="Notifications"
            className="relative w-10 h-10 rounded-xl bg-[#f2f3ff] flex items-center justify-center text-[#001229] active:scale-95 transition-all duration-150 cursor-pointer"
          >
            <span className="material-symbols-outlined text-[#001229] text-[22px]">notifications</span>
            <span className="absolute top-2 right-2 w-4 h-4 bg-[#fd761a] text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-white">
              {USER_PROFILE.unreadNotifications}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};
