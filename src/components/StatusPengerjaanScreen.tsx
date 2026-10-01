import React, { useState } from 'react';
import { ActiveBooking } from '../types';

interface StatusPengerjaanScreenProps {
  booking: ActiveBooking;
  onOpenCostBreakdown: () => void;
  onOpenChatMekanik: () => void;
  onOpenPhotoLightbox: (photoUrl: string, title: string) => void;
  onOpenHelpModal: () => void;
}

export const StatusPengerjaanScreen: React.FC<StatusPengerjaanScreenProps> = ({
  booking,
  onOpenCostBreakdown,
  onOpenChatMekanik,
  onOpenPhotoLightbox,
  onOpenHelpModal,
}) => {
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCall = () => {
    navigator.clipboard?.writeText?.(booking.workshop.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  return (
    <main className="max-w-md mx-auto px-4 pt-4 space-y-4 pb-32">
      {/* VEHICLE & ORDER HERO CARD */}
      <section className="rounded-2xl bg-gradient-to-br from-[#0f2744] to-[#1b3b64] text-white p-5 shadow-lg relative overflow-hidden border border-white/10">
        <div className="absolute -right-8 -bottom-10 opacity-10 pointer-events-none">
          <span className="material-symbols-outlined text-[150px]">directions_car</span>
        </div>
        <div className="flex justify-between items-start mb-3">
          <div className="inline-flex items-center space-x-1 bg-white/15 backdrop-blur-sm px-2.5 py-1 rounded-lg border border-white/20">
            <span className="text-[11px] text-[#d4e3ff] tracking-wider font-semibold">BOOKING ID</span>
            <span className="text-[12px] text-white font-bold">{booking.bookingId}</span>
          </div>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] bg-[#fd761a] text-white font-semibold">
            {booking.status}
          </span>
        </div>
        <div className="mb-4">
          <h2 className="text-[20px] font-bold tracking-tight text-white">{booking.vehicle.name}</h2>
          <div className="flex items-center space-x-2 mt-0.5">
            <span className="bg-black/30 px-2 py-0.5 rounded text-[11px] font-mono tracking-wider border border-white/15">
              {booking.vehicle.plate}
            </span>
            <span className="text-white/60 text-[13px]">•</span>
            <span className="text-white/80 text-[13px]">{booking.servicePackage.title}</span>
          </div>
        </div>
        <div className="pt-3 border-t border-white/15 flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-[#d4e3ff] border border-white/20">
              <span className="material-symbols-outlined text-[18px]">engineering</span>
            </div>
            <div>
              <span className="text-[11px] text-white/70 block">Teknisi Bertugas</span>
              <span className="text-[12px] font-semibold text-white">
                Mekanik: {booking.mechanicName} ({booking.mechanicRole})
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ESTIMATED COMPLETION BANNER */}
      <section className="bg-white p-4 rounded-2xl border border-[#c4c6ce]/60 shadow-sm">
        <div className="flex items-start justify-between mb-2">
          <div className="flex items-center space-x-2">
            <span className="material-symbols-outlined text-[#fd761a] fill">schedule</span>
            <div>
              <h3 className="text-[16px] font-bold text-[#001229]">Estimasi Selesai</h3>
              <p className="text-[13px] text-[#44474d] font-medium">
                Hari ini, {booking.targetTime} <span className="text-[#9d4300] font-bold">(Sisa ~45 Menit)</span>
              </p>
            </div>
          </div>
          <span className="text-[14px] font-bold text-[#001229]">{booking.progressPercent}%</span>
        </div>
        {/* Animated Progress Track */}
        <div className="w-full bg-[#eaedff] h-3 rounded-full overflow-hidden p-0.5 border border-[#c4c6ce]/30">
          <div
            className="bg-gradient-to-r from-[#9d4300] to-[#fd761a] h-full rounded-full transition-all duration-1000 relative overflow-hidden"
            style={{ width: `${booking.progressPercent}%` }}
          >
            <div className="absolute inset-0 bg-white/30 skew-x-12 animate-[pulse_2s_infinite]"></div>
          </div>
        </div>
        <div className="flex justify-between items-center text-[11px] text-[#74777e] mt-2">
          <span>Check-in: {booking.checkInTime}</span>
          <span>Target: {booking.targetTime}</span>
        </div>
      </section>

      {/* VERTICAL SERVICE PROGRESS TIMELINE */}
      <section className="bg-white p-5 rounded-2xl border border-[#c4c6ce]/60 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-[16px] font-bold text-[#001229]">Timeline Pengerjaan</h3>
          <span className="text-[11px] text-[#74777e]">Tahap 4 dari 5</span>
        </div>
        <div className="relative pl-6 space-y-6 before:absolute before:left-[11px] before:top-2 before:bottom-3 before:w-[2px] before:bg-[#e2e7ff]">
          {/* Step 1: Completed */}
          <div className="relative group">
            <span className="absolute -left-6 top-0.5 flex items-center justify-center w-5 h-5 rounded-full bg-[#002d1c] text-[#6ffbbe] ring-4 ring-white">
              <span className="material-symbols-outlined text-[14px] fill">check</span>
            </span>
            <div className="flex items-baseline justify-between">
              <h4 className="text-[14px] font-bold text-[#001229]">Booking Dibuat</h4>
              <span className="text-[11px] text-[#74777e]">09:15 WIB</span>
            </div>
            <p className="text-[13px] text-[#44474d] mt-0.5">
              Jadwal reservasi terverifikasi oleh sistem bengkel.
            </p>
          </div>

          {/* Step 2: Completed with Photo */}
          <div className="relative group">
            <span className="absolute -left-6 top-0.5 flex items-center justify-center w-5 h-5 rounded-full bg-[#002d1c] text-[#6ffbbe] ring-4 ring-white">
              <span className="material-symbols-outlined text-[14px] fill">check</span>
            </span>
            <div className="flex items-baseline justify-between">
              <h4 className="text-[14px] font-bold text-[#001229]">Kendaraan Diterima di Bengkel</h4>
              <span className="text-[11px] text-[#74777e]">10:25 WIB</span>
            </div>
            <p className="text-[13px] text-[#44474d] mt-0.5">
              Serah terima kunci dengan Service Advisor. Foto check-in terlampir.
            </p>
            <div className="mt-2.5 flex items-center space-x-2">
              <button
                type="button"
                onClick={() =>
                  onOpenPhotoLightbox(
                    'https://lh3.googleusercontent.com/aida-public/AB6AXuDp_ayf41-5QFRfsHOAMV2PmhvLRTcywo5qs0eY-yL-yRxV3exv6vZkjGHerd2gCp_Mr-rB3_dvJGBh5donPJCmcTWXCccaTKgbvVLiFMyWMnd6OJPOiiMrEP26h5UPE7cNC7XqA8OdC7TVFr6WQj_P8gqctjUeYipBuZjZU9uIuqwOFBZJt-LyPIvfcdgeAQx0p30iO03GYkBzV5ZGOcYhe-mSu5mwnZmSG0WV1xpo-7gEEmq3R_2SEw',
                    'Check-in Kendaraan'
                  )
                }
                className="w-16 h-16 rounded-lg overflow-hidden border border-[#c4c6ce]/60 shrink-0 relative cursor-pointer group"
              >
                <img
                  className="w-full h-full object-cover transition-transform group-hover:scale-110"
                  alt="Check-in bengkel"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDp_ayf41-5QFRfsHOAMV2PmhvLRTcywo5qs0eY-yL-yRxV3exv6vZkjGHerd2gCp_Mr-rB3_dvJGBh5donPJCmcTWXCccaTKgbvVLiFMyWMnd6OJPOiiMrEP26h5UPE7cNC7XqA8OdC7TVFr6WQj_P8gqctjUeYipBuZjZU9uIuqwOFBZJt-LyPIvfcdgeAQx0p30iO03GYkBzV5ZGOcYhe-mSu5mwnZmSG0WV1xpo-7gEEmq3R_2SEw"
                />
                <div className="absolute bottom-0 inset-x-0 bg-[#001229]/70 text-center py-0.5">
                  <span className="text-[9px] text-white font-semibold">Check-in</span>
                </div>
              </button>
              <div className="bg-[#f2f3ff] p-2 rounded-xl border border-[#c4c6ce]/40 flex-1">
                <span className="text-[11px] font-semibold text-[#001229] block">
                  Odometer Tercatat
                </span>
                <span className="text-[13px] text-[#44474d]">41.280 KM • BBM: 3/4</span>
              </div>
            </div>
          </div>

          {/* Step 3: Completed with Diagnosis Note */}
          <div className="relative group">
            <span className="absolute -left-6 top-0.5 flex items-center justify-center w-5 h-5 rounded-full bg-[#002d1c] text-[#6ffbbe] ring-4 ring-white">
              <span className="material-symbols-outlined text-[14px] fill">check</span>
            </span>
            <div className="flex items-baseline justify-between">
              <h4 className="text-[14px] font-bold text-[#001229]">Pemeriksaan 21 Titik Selesai</h4>
              <span className="text-[11px] text-[#74777e]">10:50 WIB</span>
            </div>
            <p className="text-[13px] text-[#44474d] mt-0.5">
              Inspeksi mesin, fluida, suspensi, dan kelistrikan tuntas.
            </p>
            <div className="mt-2 bg-amber-50 rounded-xl p-3 border border-amber-200/70 flex items-start space-x-2">
              <span className="material-symbols-outlined text-amber-700 text-[18px] mt-0.5">info</span>
              <div>
                <span className="text-[11px] font-bold text-amber-900 block">
                  Catatan Service Advisor:
                </span>
                <span className="text-[13px] text-amber-800">
                  Kondisi rem depan perlu pembersihan residu kampas. Kampas rem belakang masih tebal
                  (75%).
                </span>
              </div>
            </div>
          </div>

          {/* Step 4: Active In-Progress */}
          <div className="relative group bg-[#ffdbca]/30 -mx-3 p-3 rounded-xl border border-[#ffdbca]">
            <span className="absolute -left-3 top-4 flex items-center justify-center w-5 h-5 rounded-full bg-[#fd761a] text-white pulse-dot">
              <span className="w-2 h-2 rounded-full bg-white"></span>
            </span>
            <div className="flex items-baseline justify-between">
              <div className="flex items-center space-x-2">
                <h4 className="text-[14px] font-bold text-[#9d4300]">Sedang Diservis</h4>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] bg-[#fd761a] text-white font-bold animate-pulse">
                  Aktif
                </span>
              </div>
              <span className="text-[11px] text-[#9d4300] font-semibold">11:15 WIB</span>
            </div>
            <p className="text-[13px] text-[#5c2400] mt-1 font-medium">
              Sedang penggantian oli mesin &amp; pembersihan throttle body.
            </p>
            <div className="mt-2 flex items-center space-x-2 text-[11px] text-[#9d4300] font-semibold">
              <span className="material-symbols-outlined text-[16px] animate-spin">sync</span>
              <span>Mekanik sedang melakukan penggantian filter oli OEM</span>
            </div>
          </div>

          {/* Step 5: Upcoming Step */}
          <div className="relative group opacity-60">
            <span className="absolute -left-6 top-0.5 flex items-center justify-center w-5 h-5 rounded-full bg-[#e2e7ff] text-[#74777e] ring-4 ring-white">
              <span className="material-symbols-outlined text-[14px]">timer</span>
            </span>
            <div className="flex items-baseline justify-between">
              <h4 className="text-[14px] font-semibold text-[#001229]">
                Service Selesai &amp; Quality Control
              </h4>
              <span className="text-[11px] text-[#74777e]">Estimasi 13:30 WIB</span>
            </div>
            <p className="text-[13px] text-[#44474d] mt-0.5">
              Pemeriksaan akhir, uji fungsional, dan pencucian kendaraan sebelum penyerahan.
            </p>
          </div>
        </div>
      </section>

      {/* LIVE INSPECTION PHOTO GALLERY STRIP */}
      <section className="bg-white p-4 rounded-2xl border border-[#c4c6ce]/60 shadow-sm">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <span className="material-symbols-outlined text-[#001229] text-[20px]">photo_library</span>
            <h3 className="text-[16px] font-bold text-[#001229]">Dokumentasi Langsung</h3>
          </div>
          <span className="text-[11px] text-[#9d4300] font-semibold">3 Foto Baru</span>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {booking.documentationPhotos.map((photo, i) => (
            <button
              key={i}
              type="button"
              onClick={() => onOpenPhotoLightbox(photo.url, photo.title)}
              className="relative rounded-xl overflow-hidden aspect-square border border-[#c4c6ce]/40 group cursor-pointer text-left"
            >
              <img
                className="w-full h-full object-cover transition-transform group-hover:scale-105"
                alt={photo.title}
                src={photo.url}
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-1.5">
                <span className="text-[10px] text-white font-medium block truncate">
                  {photo.title}
                </span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* WORKSHOP INFO CARD */}
      <section className="bg-white p-4 rounded-2xl border border-[#c4c6ce]/60 shadow-sm">
        <div className="flex items-start space-x-3 mb-3">
          <div className="w-11 h-11 rounded-xl bg-[#0f2744] flex items-center justify-center text-[#d4e3ff] shrink-0">
            <span className="material-symbols-outlined text-[24px]">storefront</span>
          </div>
          <div className="flex-1">
            <h4 className="text-[16px] font-bold text-[#001229]">{booking.workshop.name}</h4>
            <p className="text-[13px] text-[#44474d]">{booking.workshop.address}</p>
            <div className="flex items-center space-x-1 text-[11px] text-[#74777e] mt-1">
              <span className="material-symbols-outlined text-[14px]">distance</span>
              <span>2.4 km dari lokasi Anda</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[#c4c6ce]/30">
          <button
            onClick={handleCall}
            className="flex items-center justify-center space-x-1.5 py-2.5 px-3 rounded-xl border border-[#001229] text-[#001229] font-semibold text-[12px] hover:bg-[#f2f3ff] active:scale-95 transition-all cursor-pointer"
            type="button"
          >
            <span className="material-symbols-outlined text-[18px]">call</span>
            <span>{copiedPhone ? 'Nomor Disalin!' : 'Call Bengkel'}</span>
          </button>
          <button
            onClick={onOpenChatMekanik}
            className="flex items-center justify-center space-x-1.5 py-2.5 px-3 rounded-xl bg-[#001229] text-white font-semibold text-[12px] hover:bg-[#0f2744] active:scale-95 transition-all shadow-sm cursor-pointer"
            type="button"
          >
            <span className="material-symbols-outlined text-[18px]">chat</span>
            <span>Chat Mekanik</span>
          </button>
        </div>
      </section>

      {/* ACTION BUTTONS */}
      <section className="pt-2 pb-6 space-y-2.5">
        <button
          onClick={onOpenCostBreakdown}
          className="w-full py-3.5 px-4 rounded-xl border border-[#001229] text-[#001229] font-semibold text-[14px] flex items-center justify-between hover:bg-[#e2e7ff] transition-colors active:scale-[0.98] cursor-pointer"
          type="button"
        >
          <div className="flex items-center space-x-2">
            <span className="material-symbols-outlined text-[20px]">receipt_long</span>
            <span>Lihat Rincian Estimasi Biaya</span>
          </div>
          <span className="text-[12px] text-[#9d4300] font-bold">
            Rp {booking.totalCost.toLocaleString('id-ID')} →
          </span>
        </button>
        <button
          onClick={onOpenHelpModal}
          className="w-full py-2.5 px-4 rounded-xl text-[#74777e] hover:text-[#001229] font-medium text-[13px] flex items-center justify-center space-x-1 hover:bg-[#f2f3ff] transition-colors cursor-pointer"
          type="button"
        >
          <span className="material-symbols-outlined text-[18px]">help</span>
          <span>Bantuan &amp; FAQ Layanan</span>
        </button>
      </section>
    </main>
  );
};
