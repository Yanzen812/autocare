import React from 'react';
import { ActiveBooking } from '../types';

interface CostBreakdownModalProps {
  booking: ActiveBooking;
  onClose: () => void;
}

export const CostBreakdownModal: React.FC<CostBreakdownModalProps> = ({ booking, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl border border-[#c4c6ce]/50 overflow-hidden flex flex-col">
        {/* Header */}
        <div className="p-4 bg-[#0f2744] text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[24px] text-[#d4e3ff]">receipt_long</span>
            <div>
              <h3 className="text-[16px] font-bold">Rincian Estimasi Biaya</h3>
              <p className="text-[11px] text-[#798fb1]">Booking ID {booking.bookingId}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* Content */}
        <div className="p-5 space-y-4 overflow-y-auto max-h-[75vh] text-[13px]">
          {/* Main items */}
          <div className="space-y-3">
            <div className="flex justify-between items-start pb-2 border-b border-[#c4c6ce]/30">
              <div>
                <p className="font-bold text-[#001229]">{booking.servicePackage.title}</p>
                <p className="text-[11px] text-[#44474d]">Jasa servis standar &amp; uji diagnostik</p>
              </div>
              <span className="font-bold text-[#001229]">
                Rp {booking.servicePackage.price.toLocaleString('id-ID')}
              </span>
            </div>

            <div className="flex justify-between items-start pb-2 border-b border-[#c4c6ce]/30">
              <div>
                <p className="font-bold text-[#001229]">Pembersihan Throttle Body &amp; Sensor</p>
                <p className="text-[11px] text-[#44474d]">Pembersihan ruang intake &amp; chemical</p>
              </div>
              <span className="font-bold text-[#001229]">Rp 240.000</span>
            </div>

            <div className="flex justify-between items-start pb-2 border-b border-[#c4c6ce]/30">
              <div>
                <p className="font-bold text-[#001229]">Pembersihan Residu Kampas Rem Depan</p>
                <p className="text-[11px] text-[#44474d]">Rekomendasi inspeksi Service Advisor</p>
              </div>
              <span className="font-bold text-[#001229]">Rp 150.000</span>
            </div>
          </div>

          {/* Subtotal & Promo */}
          <div className="space-y-1.5 pt-2 text-[12px]">
            <div className="flex justify-between text-[#44474d]">
              <span>Subtotal Pekerjaan &amp; Part:</span>
              <span>Rp 1.240.000</span>
            </div>
            <div className="flex justify-between text-[#44474d]">
              <span>Biaya Penanganan / Limbah B3:</span>
              <span className="text-[#00a16f] font-semibold">Gratis</span>
            </div>
            <div className="flex justify-between text-[#44474d]">
              <span>Pemeriksaan 40 Titik Kelayakan:</span>
              <span className="text-[#00a16f] font-semibold">Termasuk</span>
            </div>
          </div>

          {/* Total */}
          <div className="p-3 bg-[#f2f3ff] rounded-xl border border-[#c4c6ce]/40 flex items-center justify-between">
            <div>
              <span className="text-[11px] text-[#44474d] block font-medium">TOTAL ESTIMASI</span>
              <span className="text-[20px] font-extrabold text-[#001229]">
                Rp {booking.totalCost.toLocaleString('id-ID')}
              </span>
            </div>
            <span className="text-[11px] text-[#047857] font-semibold bg-emerald-100 px-2.5 py-1 rounded-full">
              Bayar di Bengkel
            </span>
          </div>

          <p className="text-[11px] text-[#74777e] italic">
            *Biaya akhir dapat disesuaikan jika mekanik menemukan suku cadang yang membutuhkan
            penggantian darurat setelah konfirmasi Anda.
          </p>
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#f2f3ff] border-t border-[#c4c6ce]/40 flex justify-end">
          <button
            onClick={onClose}
            className="w-full py-2.5 bg-[#001229] hover:bg-[#0f2744] text-white font-bold rounded-xl text-[13px] active:scale-95 transition-all cursor-pointer"
          >
            Mengerti &amp; Tutup
          </button>
        </div>
      </div>
    </div>
  );
};
