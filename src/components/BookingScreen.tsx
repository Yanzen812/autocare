import React, { useState } from 'react';
import { Vehicle, ServicePackage, Workshop } from '../types';
import { SERVICE_PACKAGES, WORKSHOPS } from '../data/mockData';

interface BookingScreenProps {
  vehicle: Vehicle;
  onOpenVehicleSwitcher: () => void;
  onOpenWorkshopModal: () => void;
  onConfirmBooking: (bookingDetails: {
    vehicle: Vehicle;
    servicePackage: ServicePackage;
    workshop: Workshop;
    date: string;
    time: string;
    notes: string;
    totalCost: number;
  }) => void;
}

export const BookingScreen: React.FC<BookingScreenProps> = ({
  vehicle,
  onOpenVehicleSwitcher,
  onOpenWorkshopModal,
  onConfirmBooking,
}) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>('servis_berkala');
  const [selectedWorkshopId, setSelectedWorkshopId] = useState<string>('ws-1');
  const [selectedDate, setSelectedDate] = useState<string>('Sel 25');
  const [selectedTime, setSelectedTime] = useState<string>('10:30');
  const [notes, setNotes] = useState<string>('Ada bunyi decit halus saat rem di kecepatan rendah');

  const selectedService =
    SERVICE_PACKAGES.find((s) => s.id === selectedServiceId) || SERVICE_PACKAGES[0];
  const selectedWorkshop =
    WORKSHOPS.find((w) => w.id === selectedWorkshopId) || WORKSHOPS[0];

  const dates = [
    { day: 'Sen', num: '24', month: 'Okt', key: 'Sen 24' },
    { day: 'Sel', num: '25', month: 'Okt', key: 'Sel 25' },
    { day: 'Rab', num: '26', month: 'Okt', key: 'Rab 26' },
    { day: 'Kam', num: '27', month: 'Okt', key: 'Kam 27' },
  ];

  const timeSlots = ['09:00', '10:30', '13:00', '14:30'];

  const handleConfirm = () => {
    onConfirmBooking({
      vehicle,
      servicePackage: selectedService,
      workshop: selectedWorkshop,
      date: `${selectedDate} Okt 2024`,
      time: `${selectedTime} WIB`,
      notes,
      totalCost: selectedService.price,
    });
  };

  return (
    <main className="w-full max-w-2xl mx-auto px-4 pt-4 space-y-6 pb-36">
      {/* SECTION 1: PILIH KENDARAAN */}
      <section className="space-y-1">
        <div className="flex items-center justify-between">
          <h2 className="text-[12px] font-semibold text-[#44474d] uppercase tracking-wider">
            Pilih Kendaraan
          </h2>
          <span className="text-[11px] text-[#00a16f] font-semibold flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-[#4edea3] animate-pulse"></span>
            Terhubung OBD-II
          </span>
        </div>

        {/* Vehicle Card */}
        <div className="bg-white border border-[#c4c6ce]/60 rounded-xl p-4 shadow-[0px_1px_3px_rgba(15,39,68,0.05),0px_4px_12px_rgba(15,39,68,0.03)] flex items-center justify-between hover:border-[#0f2744]/40 transition-all">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-[#0f2744] flex items-center justify-center text-[#d4e3ff] shrink-0 shadow-inner">
              <span className="material-symbols-outlined text-[24px]">directions_car</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-[16px] font-bold text-[#001229]">{vehicle.name}</h3>
                <span className="bg-[#e2e7ff] text-[#001229] px-2 py-0.5 rounded text-[10px] font-bold tracking-wide">
                  {vehicle.year}
                </span>
              </div>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="text-[11px] text-[#44474d] font-medium bg-[#f2f3ff] px-1.5 py-0.5 rounded border border-[#c4c6ce]/40">
                  {vehicle.plate}
                </span>
                <span className="text-[13px] text-[#44474d]">
                  • {vehicle.odometer.toLocaleString('id-ID')} km
                </span>
              </div>
            </div>
          </div>
          <button
            onClick={onOpenVehicleSwitcher}
            className="px-3 py-1.5 text-[#001229] border border-[#0f2744]/30 hover:bg-[#e2e7ff] rounded-lg text-[12px] font-semibold active:scale-95 transition-all cursor-pointer"
            type="button"
          >
            Ganti
          </button>
        </div>
      </section>

      {/* SECTION 2: PILIH JENIS SERVIS */}
      <section className="space-y-2">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-[18px] font-bold text-[#001229]">Pilih Jenis Servis</h2>
            <p className="text-[13px] text-[#44474d]">Pilih paket berkala atau perawatan spesifik</p>
          </div>
          <span className="text-[11px] text-[#9d4300] font-bold bg-[#ffdbca]/40 px-2.5 py-1 rounded-full">
            Garansi 14 Hari
          </span>
        </div>

        <div className="grid grid-cols-1 gap-2.5">
          {SERVICE_PACKAGES.map((pkg) => {
            const isSelected = selectedServiceId === pkg.id;
            return (
              <label
                key={pkg.id}
                onClick={() => setSelectedServiceId(pkg.id)}
                className="relative block cursor-pointer group"
              >
                <div
                  className={`p-4 rounded-xl bg-white border-2 transition-all ${
                    isSelected
                      ? 'border-[#fd761a] bg-[#f2f3ff]/50 shadow-[0px_4px_16px_rgba(253,118,26,0.12)]'
                      : 'border-[#c4c6ce]/70 hover:border-[#74777e]'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3">
                      <div
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mt-0.5 transition-colors ${
                          isSelected ? 'border-[#fd761a]' : 'border-[#c4c6ce]'
                        }`}
                      >
                        {isSelected && <div className="w-2.5 h-2.5 rounded-full bg-[#fd761a]" />}
                      </div>
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-[16px] font-bold text-[#001229]">{pkg.title}</span>
                          {pkg.isRecommended && (
                            <span className="bg-[#9d4300] text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                              Rekomendasi
                            </span>
                          )}
                        </div>
                        <p className="text-[13px] text-[#44474d] mt-1 leading-snug">
                          {pkg.subtitle}
                        </p>
                        <div className="flex items-center gap-3 mt-2.5 text-[11px] text-[#44474d]">
                          <span className="flex items-center gap-1">
                            <span className="material-symbols-outlined text-[16px] text-[#00a16f]">
                              schedule
                            </span>
                            ±{pkg.durationMinutes} menit
                          </span>
                          <span className="flex items-center gap-1">
                            <span className="material-symbols-outlined text-[16px] text-[#9d4300]">
                              verified
                            </span>
                            {pkg.partInfo}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right pl-2 shrink-0">
                      <span
                        className={`text-[16px] font-bold whitespace-nowrap block ${
                          isSelected ? 'text-[#9d4300]' : 'text-[#001229]'
                        }`}
                      >
                        Rp {pkg.price.toLocaleString('id-ID')}
                      </span>
                      {pkg.originalPrice && (
                        <span className="block text-[11px] text-[#44474d] line-through">
                          Rp {pkg.originalPrice.toLocaleString('id-ID')}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </label>
            );
          })}
        </div>
      </section>

      {/* SECTION 3: BENGKEL MITRA TERDEKAT */}
      <section className="space-y-2">
        <div className="flex items-center justify-between">
          <h2 className="text-[18px] font-bold text-[#001229]">Pilih Bengkel Mitra Terdekat</h2>
          <span className="text-[11px] text-[#44474d]">Terverifikasi Resmi</span>
        </div>

        <div className="bg-white border border-[#c4c6ce]/70 rounded-2xl p-4 shadow-sm">
          <div className="flex items-start justify-between gap-3">
            <div className="space-y-1 flex-1">
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-[16px] font-bold text-[#001229]">{selectedWorkshop.name}</h3>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-bold bg-[#ECFDF5] text-[#047857]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] mr-1"></span>
                  Buka - {selectedWorkshop.availableSlots} Slot Kosong
                </span>
              </div>
              <div className="flex items-center gap-3 text-[13px] text-[#44474d]">
                <span className="flex items-center gap-1 font-semibold text-[#001229]">
                  <span className="material-symbols-outlined text-[17px] text-[#F59E0B] fill">star</span>
                  {selectedWorkshop.rating}{' '}
                  <span className="font-normal text-[#44474d]">({selectedWorkshop.reviewCount} ulasan)</span>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1 font-semibold text-[#001229]">
                  <span className="material-symbols-outlined text-[16px] text-[#9d4300]">near_me</span>
                  {selectedWorkshop.distance}
                </span>
              </div>
              <p className="text-[13px] text-[#44474d] pt-1 flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[18px] text-[#74777e]">location_on</span>
                {selectedWorkshop.address}
              </p>
            </div>
          </div>
          <div className="mt-4 pt-3.5 border-t border-[#c4c6ce]/40 flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-2 text-[#44474d] text-[11px]">
              <span className="material-symbols-outlined text-[18px] text-[#00a16f]">local_shipping</span>
              Fasilitas Antar-Jemput Tersedia
            </div>
            <button
              onClick={onOpenWorkshopModal}
              className="px-3.5 py-1.5 border border-[#0f2744] text-[#001229] text-[12px] font-semibold rounded-xl hover:bg-[#e2e7ff] transition-all active:scale-95 cursor-pointer"
              type="button"
            >
              Ganti Bengkel
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 4: PILIH TANGGAL & WAKTU */}
      <section className="space-y-2">
        <div className="flex items-center justify-between">
          <h2 className="text-[18px] font-bold text-[#001229]">Pilih Tanggal &amp; Waktu</h2>
          <span className="text-[11px] text-[#9d4300] font-semibold">Oktober 2024</span>
        </div>

        {/* Horizontal Date Picker Chips */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-1.5 no-scrollbar">
          {dates.map((d) => {
            const isSelected = selectedDate === d.key;
            return (
              <button
                key={d.key}
                onClick={() => setSelectedDate(d.key)}
                className={`flex-1 min-w-[85px] py-2.5 px-3 rounded-xl flex flex-col items-center justify-center transition-all cursor-pointer ${
                  isSelected
                    ? 'border-2 border-[#0f2744] bg-[#0f2744] text-white shadow-md active:scale-95'
                    : 'border border-[#c4c6ce]/70 bg-white hover:border-[#74777e] active:scale-95'
                }`}
                type="button"
              >
                <span
                  className={`text-[11px] font-medium ${
                    isSelected ? 'text-[#b2c8ed]' : 'text-[#44474d]'
                  }`}
                >
                  {d.day}
                </span>
                <span
                  className={`text-[18px] font-extrabold ${
                    isSelected ? 'text-white' : 'text-[#001229]'
                  }`}
                >
                  {d.num}
                </span>
                <span
                  className={`text-[10px] ${
                    isSelected ? 'text-[#d4e3ff]' : 'text-[#74777e]'
                  }`}
                >
                  {d.month} {isSelected ? '(Dipilih)' : ''}
                </span>
              </button>
            );
          })}
        </div>

        {/* Time Slots Pills */}
        <div className="pt-2">
          <label className="block text-[12px] font-semibold text-[#44474d] mb-2">
            Slot Jam Kedatangan
          </label>
          <div className="grid grid-cols-4 gap-2">
            {timeSlots.map((slot) => {
              const isSelected = selectedTime === slot;
              return (
                <button
                  key={slot}
                  onClick={() => setSelectedTime(slot)}
                  className={`py-2 px-1 text-center rounded-lg text-[12px] font-semibold transition-all active:scale-95 cursor-pointer ${
                    isSelected
                      ? 'border-2 border-[#fd761a] bg-[#ffdbca]/40 text-[#9d4300] shadow-sm'
                      : 'border border-[#c4c6ce]/80 bg-white text-[#001229] hover:border-[#74777e]'
                  }`}
                  type="button"
                >
                  {slot}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 5: CATATAN TAMBAHAN */}
      <section className="space-y-1 pb-4">
        <div className="flex items-center justify-between">
          <label className="text-[18px] font-bold text-[#001229]" htmlFor="keluhan">
            Catatan Tambahan (Opsional)
          </label>
          <span className="text-[11px] text-[#44474d]">{notes.length}/200 karakter</span>
        </div>
        <p className="text-[13px] text-[#44474d]">
          Deskripsikan gejala kendala atau permintaan khusus untuk mekanik.
        </p>
        <div className="relative mt-2">
          <textarea
            id="keluhan"
            rows={3}
            maxLength={200}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Tuliskan keluhan atau catatan mekanik..."
            className="w-full rounded-xl border border-[#c4c6ce] bg-white p-3 text-[#001229] text-[14px] focus:border-[#0f2744] focus:ring-1 focus:ring-[#0f2744] transition-all resize-none shadow-sm"
          />
          <div className="absolute bottom-3 right-3 flex items-center gap-1 text-[11px] text-[#74777e] pointer-events-none">
            <span className="material-symbols-outlined text-[14px]">tune</span>
            Prioritas Inspeksi
          </div>
        </div>
      </section>

      {/* STICKY BOTTOM CHECKOUT SUMMARY & CTA */}
      <aside className="fixed bottom-14 left-0 right-0 z-30 bg-[#faf8ff] border-t border-[#c4c6ce]/50 shadow-[0px_-4px_20px_rgba(15,39,68,0.12)]">
        <div className="max-w-2xl mx-auto px-4 py-2.5 flex items-center justify-between gap-4">
          <div>
            <span className="text-[11px] text-[#44474d] block uppercase tracking-wide">
              Total Estimasi
            </span>
            <div className="flex items-baseline gap-1">
              <span className="text-[20px] font-extrabold text-[#001229]">
                Rp {selectedService.price.toLocaleString('id-ID')}
              </span>
            </div>
            <span className="text-[11px] text-[#047857] flex items-center gap-0.5 font-medium">
              <span className="material-symbols-outlined text-[13px]">check_circle</span> Bayar di
              Bengkel
            </span>
          </div>
          <button
            onClick={handleConfirm}
            className="flex-1 max-w-xs h-12 bg-[#fd761a] hover:bg-[#ea580c] text-white rounded-xl text-[14px] font-bold shadow-[0px_4px_14px_rgba(249,115,22,0.35)] flex items-center justify-center gap-2 active:scale-95 transition-all cursor-pointer"
            type="button"
          >
            <span>Konfirmasi Booking</span>
            <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
          </button>
        </div>
      </aside>
    </main>
  );
};
