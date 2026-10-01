import React from 'react';
import { USER_PROFILE } from '../data/mockData';

interface ProfilScreenProps {
  onCopyVoucher: (code: string) => void;
  onNavigateTab: (tab: 'beranda' | 'booking' | 'riwayat' | 'garasi') => void;
}

export const ProfilScreen: React.FC<ProfilScreenProps> = ({ onCopyVoucher, onNavigateTab }) => {
  return (
    <main className="max-w-2xl mx-auto px-4 pt-4 space-y-6 pb-28">
      {/* Profile Card Header */}
      <section className="bg-white rounded-2xl border border-[#c4c6ce]/60 p-5 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="relative w-16 h-16 rounded-2xl ring-2 ring-[#dae2fd] overflow-hidden shrink-0">
            <img
              className="w-full h-full object-cover"
              alt={USER_PROFILE.fullName}
              src={USER_PROFILE.avatar}
            />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <h2 className="text-[18px] font-bold text-[#001229] truncate">
                {USER_PROFILE.fullName}
              </h2>
              <span className="bg-[#ffdbca] text-[#9d4300] px-2.5 py-0.5 rounded-full text-[11px] font-bold">
                {USER_PROFILE.membershipTier}
              </span>
            </div>
            <p className="text-[13px] text-[#44474d]">{USER_PROFILE.email}</p>
            <p className="text-[12px] text-[#74777e]">{USER_PROFILE.phone}</p>
          </div>
        </div>

        {/* Loyalty & Rewards Strip */}
        <div className="mt-4 grid grid-cols-2 gap-3 pt-3 border-t border-[#c4c6ce]/30">
          <div className="bg-[#f2f3ff] p-3 rounded-xl border border-[#c4c6ce]/30">
            <span className="text-[11px] text-[#44474d] block font-medium">AutoPoints Terkumpul</span>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="material-symbols-outlined text-[#fd761a] text-[20px]">stars</span>
              <span className="text-[18px] font-bold text-[#001229]">
                {USER_PROFILE.rewardPoints.toLocaleString('id-ID')}
              </span>
            </div>
          </div>
          <div className="bg-[#f2f3ff] p-3 rounded-xl border border-[#c4c6ce]/30">
            <span className="text-[11px] text-[#44474d] block font-medium">Voucher Aktif</span>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="material-symbols-outlined text-[#00a16f] text-[20px]">confirmation_number</span>
              <span className="text-[18px] font-bold text-[#001229]">2 Voucher</span>
            </div>
          </div>
        </div>
      </section>

      {/* Vouchers & Rewards */}
      <section className="bg-white rounded-2xl border border-[#c4c6ce]/60 p-4 shadow-sm space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-[16px] font-bold text-[#001229] flex items-center gap-2">
            <span className="material-symbols-outlined text-[#9d4300] text-[20px]">loyalty</span>
            <span>Voucher Saya</span>
          </h3>
          <span className="text-[11px] text-[#00a16f] font-semibold bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
            Siap Pakai
          </span>
        </div>

        <div className="space-y-2">
          <div className="p-3 rounded-xl bg-gradient-to-r from-[#0f2744] to-[#1e3a8a] text-white flex items-center justify-between gap-3">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#ffdbca] bg-[#fd761a]/30 px-2 py-0.5 rounded">
                Diskon 25%
              </span>
              <h4 className="text-[14px] font-bold text-white mt-1">Kode: AUTOBERKAH</h4>
              <p className="text-[11px] text-[#b2c8ed]">Servis berkala &amp; tune up seluruh cabang</p>
            </div>
            <button
              onClick={() => onCopyVoucher('AUTOBERKAH')}
              className="px-3 py-1.5 bg-[#fd761a] hover:bg-[#ea580c] text-white text-[12px] font-bold rounded-lg shrink-0 cursor-pointer active:scale-95 transition-all"
            >
              Salin
            </button>
          </div>

          <div className="p-3 rounded-xl bg-[#f2f3ff] border border-[#c4c6ce]/40 flex items-center justify-between gap-3">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                Gratis Cuci Mesin
              </span>
              <h4 className="text-[14px] font-bold text-[#001229] mt-1">Kode: AUTOCLEAN</h4>
              <p className="text-[11px] text-[#44474d]">Bonus perawatan dengan servis &gt; Rp 500k</p>
            </div>
            <button
              onClick={() => onCopyVoucher('AUTOCLEAN')}
              className="px-3 py-1.5 bg-[#001229] hover:bg-[#0f2744] text-white text-[12px] font-bold rounded-lg shrink-0 cursor-pointer active:scale-95 transition-all"
            >
              Salin
            </button>
          </div>
        </div>
      </section>

      {/* Quick Menu Settings */}
      <section className="bg-white rounded-2xl border border-[#c4c6ce]/60 overflow-hidden shadow-sm divide-y divide-[#c4c6ce]/30">
        <button
          onClick={() => onNavigateTab('garasi')}
          className="w-full px-4 py-3.5 flex items-center justify-between hover:bg-[#f2f3ff] transition-colors text-left cursor-pointer"
        >
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[#001229] text-[22px]">garage</span>
            <div>
              <span className="text-[14px] font-bold text-[#001229] block">Garasi &amp; Kendaraan Saya</span>
              <span className="text-[12px] text-[#44474d]">2 Kendaraan (Honda HR-V &amp; Toyota Zenix)</span>
            </div>
          </div>
          <span className="material-symbols-outlined text-[#74777e]">chevron_right</span>
        </button>

        <button
          onClick={() => onNavigateTab('riwayat')}
          className="w-full px-4 py-3.5 flex items-center justify-between hover:bg-[#f2f3ff] transition-colors text-left cursor-pointer"
        >
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[#001229] text-[22px]">receipt_long</span>
            <div>
              <span className="text-[14px] font-bold text-[#001229] block">Riwayat &amp; E-Faktur</span>
              <span className="text-[12px] text-[#44474d]">Lihat arsip servis dan garansi perbaikan</span>
            </div>
          </div>
          <span className="material-symbols-outlined text-[#74777e]">chevron_right</span>
        </button>

        <div className="w-full px-4 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[#001229] text-[22px]">notifications_active</span>
            <div>
              <span className="text-[14px] font-bold text-[#001229] block">Pengingat Servis Otomatis (OBD-II)</span>
              <span className="text-[12px] text-[#44474d]">Kirim alert saat interval odometer tercapai</span>
            </div>
          </div>
          <span className="px-2.5 py-1 bg-emerald-100 text-emerald-800 rounded-full text-[11px] font-bold">
            Aktif
          </span>
        </div>

        <div className="w-full px-4 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[#001229] text-[22px]">support_agent</span>
            <div>
              <span className="text-[14px] font-bold text-[#001229] block">Pusat Bantuan &amp; Customer Care</span>
              <span className="text-[12px] text-[#44474d]">Call Center 24/7 (021-1500-890)</span>
            </div>
          </div>
          <span className="material-symbols-outlined text-[#74777e]">chevron_right</span>
        </div>
      </section>

      {/* App Version Info */}
      <div className="text-center text-[12px] text-[#74777e] pt-2 space-y-1">
        <p>AutoCare Mobile Experience v2.4.0 (Build 2024)</p>
        <p>Terhubung ke OBD-II Telematics Cloud Server</p>
      </div>
    </main>
  );
};
