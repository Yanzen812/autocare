import React from 'react';
import { Vehicle, ServiceRecord } from '../types';
import { SERVICE_HISTORY } from '../data/mockData';

interface GarasiScreenProps {
  vehicles: Vehicle[];
  onOpenAddCar: () => void;
  onBookServiceForVehicle: (vehicle: Vehicle) => void;
  onViewServiceHistory: () => void;
  onViewInvoice: (record: ServiceRecord) => void;
  onSelectActiveVehicle: (vehicle: Vehicle) => void;
}

export const GarasiScreen: React.FC<GarasiScreenProps> = ({
  vehicles,
  onOpenAddCar,
  onBookServiceForVehicle,
  onViewServiceHistory,
  onViewInvoice,
  onSelectActiveVehicle,
}) => {
  const primaryVehicle = vehicles[0] || vehicles[0];
  const secondaryVehicle = vehicles[1] || vehicles[0];

  return (
    <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 space-y-6 pb-28">
      {/* Screen Title & Top Action Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[#9d4300] font-semibold text-[24px]">
              garage
            </span>
            <h1 className="text-[24px] sm:text-[28px] font-bold text-[#001229] tracking-tight">
              Garasi Saya
            </h1>
          </div>
          <p className="text-[14px] text-[#44474d] mt-0.5">
            Kelola {vehicles.length} Kendaraan Terdaftar
          </p>
        </div>

        {/* Action Button '+ Tambah Mobil' */}
        <button
          onClick={onOpenAddCar}
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-white border border-[#c4c6ce] text-[#001229] font-semibold text-[14px] rounded-xl shadow-sm hover:bg-[#eaedff] active:scale-95 transition-all duration-150 self-start sm:self-auto cursor-pointer"
          type="button"
        >
          <span className="material-symbols-outlined text-[#9d4300] font-bold text-[18px]">
            add_circle
          </span>
          <span>+ Tambah Mobil</span>
        </button>
      </div>

      {/* Vehicles Showcase Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Vehicle Card 1 (Primary / Aktif) */}
        {primaryVehicle && (
          <div className="lg:col-span-7 bg-white rounded-2xl border border-[#c4c6ce]/60 shadow-[0px_8px_24px_rgba(15,39,68,0.08)] overflow-hidden transition-all duration-200">
            {/* Hero Deep Navy Gradient Banner */}
            <div className="p-4 sm:p-6 bg-gradient-to-br from-[#0f2744] via-[#0f2744] to-[#001229] text-white relative overflow-hidden">
              <div className="absolute -right-8 -bottom-10 opacity-10 pointer-events-none">
                <span className="material-symbols-outlined text-[160px]">directions_car</span>
              </div>
              <div className="relative z-10 flex flex-col sm:flex-row justify-between sm:items-start gap-4">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#fd761a] text-white text-[11px] font-bold tracking-wide">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                    KENDARAAN AKTIF
                  </div>
                  <h2 className="text-[20px] font-bold text-white tracking-tight">
                    {primaryVehicle.name} ({primaryVehicle.year})
                  </h2>
                  <div className="flex items-center gap-2 pt-1">
                    <span className="px-2 py-0.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded text-[12px] font-semibold text-white tracking-wider">
                      {primaryVehicle.plate}
                    </span>
                    <span className="text-white/60 text-[13px]">•</span>
                    <span className="text-[14px] text-[#b2c8ed] font-medium flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">speed</span>{' '}
                      {primaryVehicle.odometer.toLocaleString('id-ID')} km
                    </span>
                  </div>
                </div>

                {/* Status Badge: Servis Dalam 12 Hari */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-200 text-[12px] self-start">
                  <span className="material-symbols-outlined text-[16px] text-amber-300">warning</span>
                  <span className="font-semibold">{primaryVehicle.urgentNotice || 'Servis Dalam 12 Hari'}</span>
                </div>
              </div>

              {/* Car Image Thumbnail Showcase */}
              <div className="mt-4 relative rounded-xl overflow-hidden border border-white/10 bg-[#001229]/40 h-44 sm:h-52 w-full">
                <img
                  className="w-full h-full object-cover object-center"
                  alt={primaryVehicle.name}
                  src={primaryVehicle.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f2744]/80 via-transparent to-transparent"></div>
              </div>
            </div>

            {/* Card 1 Interior Specs & Quick Stats */}
            <div className="p-4 sm:p-6 space-y-4 bg-white">
              <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-[#f2f3ff] border border-[#c4c6ce]/40">
                <div className="space-y-0.5">
                  <span className="text-[11px] text-[#44474d] block">Transmisi</span>
                  <span className="text-[16px] font-bold text-[#001229]">
                    {primaryVehicle.transmission}
                  </span>
                </div>
                <div className="space-y-0.5 border-x border-[#c4c6ce]/40 px-2">
                  <span className="text-[11px] text-[#44474d] block">Bahan Bakar</span>
                  <span className="text-[16px] font-bold text-[#001229]">
                    {primaryVehicle.fuelType}
                  </span>
                </div>
                <div className="space-y-0.5 pl-1">
                  <span className="text-[11px] text-[#44474d] block">Servis Terakhir</span>
                  <span className="text-[16px] font-bold text-[#001229] truncate block">
                    {primaryVehicle.lastServiceDate}
                  </span>
                </div>
              </div>

              {/* Quick Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                <button
                  onClick={() => onBookServiceForVehicle(primaryVehicle)}
                  className="h-12 w-full flex items-center justify-center gap-2 bg-[#fd761a] text-white font-bold text-[14px] rounded-xl shadow-[0px_4px_14px_rgba(249,115,22,0.35)] hover:bg-[#ea580c] active:scale-[0.98] transition-all duration-150 cursor-pointer"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[20px]">calendar_add_on</span>
                  <span>Booking Servis</span>
                </button>
                <button
                  onClick={onViewServiceHistory}
                  className="h-12 w-full flex items-center justify-center gap-2 bg-transparent border-2 border-[#0f2744] text-[#0f2744] font-bold text-[14px] rounded-xl hover:bg-[#eaedff] active:scale-[0.98] transition-all duration-150 cursor-pointer"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[20px]">history</span>
                  <span>Riwayat Servis</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Right Column: Vehicle Card 2 & Quick Diagnostics */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {/* Vehicle Card 2 */}
          {secondaryVehicle && (
            <div className="bg-white rounded-2xl border border-[#c4c6ce]/60 shadow-[0px_4px_12px_rgba(15,39,68,0.04)] p-4 sm:p-6 flex flex-col justify-between space-y-4">
              <div>
                {/* Header with Status badge: Kondisi Prima */}
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="text-[11px] text-[#44474d] font-semibold uppercase tracking-wider">
                      Mobil Sekunder
                    </span>
                    <h2 className="text-[18px] font-bold text-[#001229] tracking-tight">
                      {secondaryVehicle.name} ({secondaryVehicle.year})
                    </h2>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[12px] font-semibold shrink-0 border border-emerald-200">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    {secondaryVehicle.status}
                  </span>
                </div>

                {/* Plate and Odo */}
                <div className="flex items-center gap-2 mt-2">
                  <span className="px-2 py-0.5 bg-[#eaedff] text-[#001229] text-[12px] font-semibold rounded border border-[#c4c6ce]/50">
                    {secondaryVehicle.plate}
                  </span>
                  <span className="text-[#44474d] text-[13px]">•</span>
                  <span className="text-[14px] text-[#131b2e] font-semibold flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px] text-[#44474d]">
                      speed
                    </span>{' '}
                    {secondaryVehicle.odometer.toLocaleString('id-ID')} km
                  </span>
                </div>

                {/* Car Thumbnail Image */}
                <div className="mt-4 relative rounded-xl overflow-hidden border border-[#c4c6ce]/40 bg-[#f2f3ff] h-36 w-full">
                  <img
                    className="w-full h-full object-cover"
                    alt={secondaryVehicle.name}
                    src={secondaryVehicle.image}
                  />
                </div>

                {/* Quick Stats */}
                <div className="mt-4 p-3 rounded-xl bg-[#f2f3ff] border border-[#c4c6ce]/30 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#44474d] text-[20px]">
                      event_available
                    </span>
                    <div>
                      <span className="text-[11px] text-[#44474d] block">Servis Terakhir</span>
                      <span className="text-[14px] font-semibold text-[#001229]">
                        {secondaryVehicle.lastServiceDate}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] text-[#44474d] block">Interval Servis</span>
                    <span className="text-[14px] font-bold text-[#001229]">
                      {secondaryVehicle.serviceInterval}
                    </span>
                  </div>
                </div>
              </div>

              {/* Quick buttons */}
              <div className="grid grid-cols-2 gap-2 pt-2">
                <button
                  onClick={() => onSelectActiveVehicle(secondaryVehicle)}
                  className="h-11 px-3 bg-[#eaedff] text-[#001229] font-semibold text-[14px] rounded-xl border border-[#c4c6ce]/50 hover:bg-[#e2e7ff] active:scale-95 transition-all duration-150 flex items-center justify-center gap-1.5 cursor-pointer"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[16px]">visibility</span>
                  <span>Pilih Mobil</span>
                </button>
                <button
                  onClick={() => onBookServiceForVehicle(secondaryVehicle)}
                  className="h-11 px-3 bg-[#0f2744] text-white font-semibold text-[14px] rounded-xl hover:bg-[#001229] active:scale-95 transition-all duration-150 flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[16px]">schedule</span>
                  <span>Jadwalkan Servis</span>
                </button>
              </div>
            </div>
          )}

          {/* Quick Telemetry Banner */}
          <div className="p-4 rounded-2xl bg-[#f2f3ff] border border-[#c4c6ce]/50 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#fd761a]/10 flex items-center justify-center text-[#9d4300]">
                <span className="material-symbols-outlined">health_and_safety</span>
              </div>
              <div>
                <h3 className="text-[16px] font-bold text-[#001229]">Perlindungan Garansi Aktif</h3>
                <p className="text-[13px] text-[#44474d]">
                  Garansi Mesin &amp; Transmisi berlaku s/d 2025
                </p>
              </div>
            </div>
            <span className="material-symbols-outlined text-[#44474d]">chevron_right</span>
          </div>
        </div>
      </div>

      {/* Section 'Riwayat Servis Terakhir' */}
      <section className="space-y-4 pt-2">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-[20px] font-bold text-[#001229] tracking-tight">
              Riwayat Servis Terakhir
            </h2>
            <p className="text-[13px] text-[#44474d]">
              Catatan pemeliharaan resmi &amp; rincian biaya pengerjaan bengkel
            </p>
          </div>
          <button
            onClick={onViewServiceHistory}
            className="text-[14px] text-[#9d4300] font-semibold hover:underline flex items-center gap-1 cursor-pointer"
            type="button"
          >
            <span>Lihat Semua</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </button>
        </div>

        <div className="space-y-3">
          {SERVICE_HISTORY.map((record) => (
            <div
              key={record.id}
              className="bg-white rounded-2xl border border-[#c4c6ce]/60 p-4 sm:p-5 shadow-[0px_1px_3px_rgba(15,39,68,0.05)] hover:border-[#0f2744]/40 transition-all duration-150"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#0f2744]/5 border border-[#0f2744]/10 flex items-center justify-center text-[#001229] shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-2xl">
                      {record.serviceTitle.toLowerCase().includes('aki')
                        ? 'battery_charging_full'
                        : 'car_repair'}
                    </span>
                  </div>
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[12px] text-[#44474d]">{record.date}</span>
                      <span className="text-[#c4c6ce]">•</span>
                      <span className="text-[12px] text-[#001229] font-semibold">
                        {record.vehicleName}
                      </span>
                      <span className="text-[#c4c6ce]">•</span>
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-semibold border border-emerald-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                        {record.status}
                      </span>
                    </div>
                    <h3 className="text-[16px] font-bold text-[#001229]">{record.serviceTitle}</h3>
                    <div className="flex items-center gap-2 text-[#44474d] text-[13px] flex-wrap">
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">store</span>{' '}
                        {record.workshopName}
                      </span>
                      <span>•</span>
                      <span>{record.summaryItems.join(', ')}</span>
                    </div>
                  </div>
                </div>

                {/* Cost & Invoice Action */}
                <div className="flex items-center justify-between md:justify-end gap-6 pt-2 md:pt-0 border-t md:border-t-0 border-[#c4c6ce]/40">
                  <div className="md:text-right">
                    <span className="text-[11px] text-[#44474d] block">Total Pembayaran</span>
                    <span className="text-[18px] font-bold text-[#001229] tracking-tight">
                      Rp {record.totalCost.toLocaleString('id-ID')}
                    </span>
                  </div>
                  <button
                    onClick={() => onViewInvoice(record)}
                    className="h-10 px-4 bg-[#f2f3ff] border border-[#c4c6ce]/60 text-[#001229] font-semibold text-[12px] rounded-xl hover:bg-[#eaedff] active:scale-95 transition-all duration-150 flex items-center gap-1.5 shrink-0 cursor-pointer"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[16px]">receipt_long</span>
                    <span>Lihat Invoice</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};
