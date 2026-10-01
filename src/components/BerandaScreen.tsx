import React from 'react';
import { Vehicle } from '../types';

interface BerandaScreenProps {
  vehicle: Vehicle;
  onNavigate: (tab: 'booking' | 'riwayat' | 'garasi' | 'profil') => void;
  onOpenVehicleSwitcher: () => void;
  onOpenWorkshopModal: () => void;
  onCopyVoucher: (code: string) => void;
}

export const BerandaScreen: React.FC<BerandaScreenProps> = ({
  vehicle,
  onNavigate,
  onOpenVehicleSwitcher,
  onOpenWorkshopModal,
  onCopyVoucher,
}) => {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 pt-3 pb-24">
      {/* Vehicle Card Hero (Hero Vehicle Card & Telematics Ribbon) */}
      <section className="relative rounded-[22px] overflow-hidden shadow-[0px_8px_24px_rgba(15,39,68,0.12)] border border-white/20 bg-gradient-to-br from-[#0F2744] via-[#122F53] to-[#1E3A8A] text-white p-5 md:p-6 transition-all">
        {/* Metallic micro sheen & background grid layer */}
        <div className="absolute -right-16 -top-16 w-64 h-64 bg-[#fd761a]/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none transform translate-x-4 translate-y-4">
          <span className="material-symbols-outlined text-[140px] leading-none">directions_car</span>
        </div>

        <div className="relative z-10">
          {/* Card Header: Title, Plate, Switcher */}
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center px-2 py-0.5 rounded bg-white/15 backdrop-blur-sm border border-white/20 text-white text-[11px] font-semibold tracking-wider">
                  {vehicle.plate}
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] text-emerald-300 bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-500/30 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span> {vehicle.status}
                </span>
              </div>
              <h2 className="text-[18px] sm:text-[20px] font-bold tracking-tight text-white pt-1">
                {vehicle.name} ({vehicle.year})
              </h2>
              <p className="text-[#798fb1] text-[13px]">Terhubung via OBD-II Telematics</p>
            </div>
            <button
              onClick={onOpenVehicleSwitcher}
              className="inline-flex items-center gap-1 text-white/80 hover:text-white bg-white/10 active:scale-95 transition-all text-[11px] font-semibold px-3 py-1.5 rounded-lg backdrop-blur-md border border-white/15 cursor-pointer"
            >
              <span>Ganti</span>
              <span className="material-symbols-outlined text-sm">unfold_more</span>
            </button>
          </div>

          {/* Telematics Metric Grid */}
          <div className="grid grid-cols-3 gap-2 mt-5 p-3 rounded-xl bg-black/25 backdrop-blur-sm border border-white/10">
            <div className="space-y-0.5">
              <div className="flex items-center gap-1 text-white/70 text-[11px] font-medium">
                <span className="material-symbols-outlined text-[14px]">speed</span>
                <span>Odometer</span>
              </div>
              <p className="text-[16px] font-bold text-white tracking-tight">
                {vehicle.odometer.toLocaleString('id-ID')} <span className="text-[11px] font-normal text-white/70">km</span>
              </p>
            </div>
            <div className="space-y-0.5 border-x border-white/10 px-2">
              <div className="flex items-center gap-1 text-white/70 text-[11px] font-medium">
                <span className="material-symbols-outlined text-[14px]">battery_charging_full</span>
                <span>Aki / Baterai</span>
              </div>
              <p className="text-[16px] font-bold text-emerald-300">
                {vehicle.batteryVolt} <span className="text-[11px] font-normal text-white/70">Volt</span>
              </p>
            </div>
            <div className="space-y-0.5 pl-1">
              <div className="flex items-center gap-1 text-white/70 text-[11px] font-medium">
                <span className="material-symbols-outlined text-[14px]">oil_barrel</span>
                <span>Sisa Oli</span>
              </div>
              <p className="text-[16px] font-bold text-amber-300">
                {vehicle.oilLifePercent}% <span className="text-[11px] font-normal text-white/70">Baik</span>
              </p>
            </div>
          </div>

          {/* Service Reminder Badge */}
          <div
            onClick={() => onNavigate('booking')}
            className="mt-4 flex items-center justify-between gap-3 p-3 rounded-xl bg-white/10 border border-white/15 backdrop-blur-md cursor-pointer hover:bg-white/15 transition-all"
          >
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-8 h-8 rounded-lg bg-[#fd761a] text-white flex items-center justify-center shrink-0 shadow-sm">
                <span className="material-symbols-outlined text-lg">build_circle</span>
              </div>
              <div className="truncate">
                <p className="text-[11px] text-[#ffdbca] font-semibold tracking-wide uppercase">Servis Berkala 35.000 km</p>
                <p className="text-[13px] text-white/90 truncate">Sisa 750 km / 12 Hari lagi</p>
              </div>
            </div>
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] bg-[#fd761a]/20 text-[#ffdbca] border border-[#fd761a]/40 shrink-0 font-semibold">
              Mendesak
            </span>
          </div>
        </div>
      </section>

      {/* Primary CTA: Booking Servis Sekarang */}
      <section>
        <button
          onClick={() => onNavigate('booking')}
          className="w-full py-3.5 px-6 rounded-xl bg-[#fd761a] hover:bg-[#ea580c] active:scale-[0.99] text-white font-bold shadow-[0px_6px_18px_rgba(249,115,22,0.38)] flex items-center justify-center gap-2.5 transition-all group cursor-pointer"
        >
          <span className="material-symbols-outlined text-[20px] transition-transform group-hover:rotate-12">calendar_month</span>
          <span className="text-[15px]">Booking Service Sekarang</span>
          <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
        </button>
      </section>

      {/* Quick Menu Grid (4 circular icon tiles) */}
      <section className="bg-white border border-[#c4c6ce]/30 rounded-2xl p-4 shadow-sm">
        <div className="grid grid-cols-4 gap-2 text-center">
          {/* Item 1: Booking */}
          <button
            onClick={() => onNavigate('booking')}
            className="flex flex-col items-center group active:scale-95 transition-all cursor-pointer"
            type="button"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#f2f3ff] group-hover:bg-[#d4e3ff]/60 flex items-center justify-center text-[#001229] mb-1.5 transition-colors border border-[#c4c6ce]/30">
              <span className="material-symbols-outlined text-[24px] text-[#001229]">calendar_month</span>
            </div>
            <span className="text-[12px] text-[#131b2e] font-semibold">Booking</span>
          </button>

          {/* Item 2: Riwayat */}
          <button
            onClick={() => onNavigate('riwayat')}
            className="flex flex-col items-center group active:scale-95 transition-all cursor-pointer"
            type="button"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#f2f3ff] group-hover:bg-[#d4e3ff]/60 flex items-center justify-center text-[#001229] mb-1.5 transition-colors border border-[#c4c6ce]/30">
              <span className="material-symbols-outlined text-[24px] text-[#001229]">history</span>
            </div>
            <span className="text-[12px] text-[#131b2e] font-semibold">Riwayat</span>
          </button>

          {/* Item 3: Garasi */}
          <button
            onClick={() => onNavigate('garasi')}
            className="flex flex-col items-center group active:scale-95 transition-all cursor-pointer"
            type="button"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#f2f3ff] group-hover:bg-[#d4e3ff]/60 flex items-center justify-center text-[#001229] mb-1.5 transition-colors border border-[#c4c6ce]/30">
              <span className="material-symbols-outlined text-[24px] text-[#001229]">directions_car</span>
            </div>
            <span className="text-[12px] text-[#131b2e] font-semibold">Garasi</span>
          </button>

          {/* Item 4: Bengkel */}
          <button
            onClick={onOpenWorkshopModal}
            className="flex flex-col items-center group active:scale-95 transition-all cursor-pointer"
            type="button"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#f2f3ff] group-hover:bg-[#d4e3ff]/60 flex items-center justify-center text-[#001229] mb-1.5 transition-colors border border-[#c4c6ce]/30">
              <span className="material-symbols-outlined text-[24px] text-[#001229]">home_repair_service</span>
            </div>
            <span className="text-[12px] text-[#131b2e] font-semibold">Bengkel</span>
          </button>
        </div>
      </section>

      {/* Bento Grid Section: Service Berikutnya & Bengkel Rekomendasi */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Section: Service Berikutnya (7 cols on Desktop) */}
        <section className="lg:col-span-7 bg-white rounded-2xl border border-[#c4c6ce]/30 p-5 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#9d4300] text-[22px]">checklist</span>
              <h3 className="text-[18px] text-[#001229] font-bold">Service Berikutnya</h3>
            </div>
            <span className="text-[11px] text-[#9d4300] font-semibold bg-[#ffdbca]/40 px-2.5 py-1 rounded-full">
              Paket Berkala 35K
            </span>
          </div>
          <p className="text-[13px] text-[#44474d]">
            Pekerjaan esensial untuk menjaga garansi mesin &amp; efisiensi bahan bakar Honda HR-V Anda.
          </p>

          {/* Maintenance Checklist Items */}
          <div className="space-y-2.5 pt-1">
            {/* Item 1 */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-[#f2f3ff]/60 border border-[#c4c6ce]/20 hover:border-[#d4e3ff] transition-colors">
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
                  <span className="material-symbols-outlined text-base">check</span>
                </span>
                <div>
                  <p className="text-[14px] font-semibold text-[#001229]">Ganti Oli Mesin Sintetik</p>
                  <p className="text-[11px] text-[#44474d]">Full Synthetic 0W-20 (4 Liter)</p>
                </div>
              </div>
              <span className="text-[11px] font-bold text-[#001229]">Termasuk</span>
            </div>

            {/* Item 2 */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-[#f2f3ff]/60 border border-[#c4c6ce]/20 hover:border-[#d4e3ff] transition-colors">
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
                  <span className="material-symbols-outlined text-base">check</span>
                </span>
                <div>
                  <p className="text-[14px] font-semibold text-[#001229]">Filter Oli Asli Honda</p>
                  <p className="text-[11px] text-[#44474d]">OEM Part 15400-RAF-T01</p>
                </div>
              </div>
              <span className="text-[11px] font-bold text-[#001229]">Termasuk</span>
            </div>

            {/* Item 3 */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-[#f2f3ff]/60 border border-[#c4c6ce]/20 hover:border-[#d4e3ff] transition-colors">
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
                  <span className="material-symbols-outlined text-base">check</span>
                </span>
                <div>
                  <p className="text-[14px] font-semibold text-[#001229]">Pengecekan 21 Titik Rem</p>
                  <p className="text-[11px] text-[#44474d]">Kampas, piringan cakram, fluida rem</p>
                </div>
              </div>
              <span className="text-[11px] font-bold text-[#001229]">Termasuk</span>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-[#c4c6ce]/20 text-[13px]">
            <span className="text-[#44474d]">Estimasi Biaya Transparan:</span>
            <span className="text-[18px] font-bold text-[#001229]">Rp 845.000</span>
          </div>
        </section>

        {/* Section: Bengkel Rekomendasi Terdekat (5 cols on Desktop) */}
        <section className="lg:col-span-5 bg-white rounded-2xl border border-[#c4c6ce]/30 p-5 shadow-sm space-y-4 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#001229] text-[22px]">storefront</span>
                <h3 className="text-[18px] text-[#001229] font-bold">Bengkel Terdekat</h3>
              </div>
              <span className="text-emerald-700 bg-emerald-50 border border-emerald-200 text-[11px] px-2.5 py-0.5 rounded-full font-semibold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Buka
              </span>
            </div>

            {/* Workshop Card Details */}
            <div className="relative rounded-xl overflow-hidden border border-[#c4c6ce]/20 bg-[#faf8ff] p-3.5 space-y-3">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="text-[16px] font-bold text-[#001229]">AutoCare Express BSD</h4>
                  <p className="text-[#44474d] text-[12px] flex items-center gap-1 mt-0.5">
                    <span className="material-symbols-outlined text-[16px] text-[#74777e]">location_on</span>
                    <span>Kavling Commercial BSD City, Tangerang</span>
                  </p>
                </div>
                <span className="inline-flex items-center px-2 py-0.5 rounded bg-[#f2f3ff] text-[#001229] text-[11px] font-bold">
                  2.3 km
                </span>
              </div>

              <div className="flex items-center gap-3 text-[11px]">
                <div className="flex items-center gap-1 bg-amber-50 text-amber-900 border border-amber-200 px-2 py-0.5 rounded-md font-bold">
                  <span className="material-symbols-outlined text-[14px] text-amber-500 fill">star</span>
                  <span>4.9</span>
                </div>
                <span className="text-[#44474d]">(1.2k ulasan terverifikasi)</span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-[11px] text-[#131b2e] pt-1">
                <div className="flex items-center gap-1.5 text-[#44474d]">
                  <span className="material-symbols-outlined text-[16px] text-emerald-600">verified</span>
                  <span>Sertifikasi Honda</span>
                </div>
                <div className="flex items-center gap-1.5 text-[#44474d]">
                  <span className="material-symbols-outlined text-[16px] text-emerald-600">timer</span>
                  <span>Pengerjaan 60 Menit</span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={onOpenWorkshopModal}
              className="w-full py-2.5 px-4 rounded-xl border border-[#001229] text-[#001229] hover:bg-[#f2f3ff] active:scale-95 transition-all text-[14px] font-bold flex items-center justify-center gap-2 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">map</span>
              <span>Rute &amp; Jadwal Montir</span>
            </button>
          </div>
        </section>
      </div>

      {/* Section: Promo & Penawaran Banner */}
      <section className="space-y-3 pt-1">
        <div className="flex items-center justify-between">
          <h3 className="text-[18px] text-[#001229] font-bold flex items-center gap-2">
            <span className="material-symbols-outlined text-[#9d4300] text-[22px]">local_offer</span>
            <span>Promo &amp; Penawaran Spesial</span>
          </h3>
          <button
            onClick={() => onCopyVoucher('AUTOBERKAH')}
            className="text-[#9d4300] text-[12px] font-bold hover:underline cursor-pointer"
          >
            Lihat Semua
          </button>
        </div>

        {/* Promo Carousel Card with Voucher Pill */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#0f2744] via-[#173860] to-[#254B78] text-white p-5 border border-[#c4c6ce]/30 shadow-sm">
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1.5 max-w-xl">
              <span className="inline-block bg-[#fd761a] text-white px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider">
                Hemat Bulanan
              </span>
              <h4 className="text-[18px] font-bold text-white">
                Diskon 25% Paket Servis Berkala &amp; Tune Up
              </h4>
              <p className="text-[#798fb1] text-[13px]">
                Berlaku untuk semua tipe SUV &amp; MPV di seluruh jaringan bengkel rekanan AutoCare Jabodetabek.
              </p>
            </div>

            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md p-2 rounded-xl border border-white/20 self-start md:self-auto">
              <div className="px-3 py-1 bg-white/15 rounded-lg border border-dashed border-white/40">
                <span className="text-[11px] text-white/70 block">Kode Voucher</span>
                <span className="text-[16px] font-bold tracking-wider text-[#ffdbca]">AUTOBERKAH</span>
              </div>
              <button
                onClick={() => onCopyVoucher('AUTOBERKAH')}
                className="px-3.5 py-2.5 rounded-lg bg-[#fd761a] hover:bg-[#ea580c] text-white text-[12px] font-bold active:scale-95 transition-all flex items-center gap-1 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[16px]">content_copy</span>
                <span>Klaim</span>
              </button>
            </div>
          </div>

          {/* Ambient decorative icon */}
          <span className="material-symbols-outlined absolute -right-6 -bottom-6 text-white/5 text-[150px] pointer-events-none">
            loyalty
          </span>
        </div>
      </section>
    </main>
  );
};
