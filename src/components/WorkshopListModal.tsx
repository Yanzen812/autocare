import React from 'react';
import { Workshop } from '../types';
import { WORKSHOPS } from '../data/mockData';

interface WorkshopListModalProps {
  onClose: () => void;
  onSelectWorkshop?: (ws: Workshop) => void;
}

export const WorkshopListModal: React.FC<WorkshopListModalProps> = ({ onClose, onSelectWorkshop }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl border border-[#c4c6ce]/50 overflow-hidden flex flex-col max-h-[85vh]">
        <div className="p-4 bg-[#0f2744] text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[24px] text-[#d4e3ff]">storefront</span>
            <div>
              <h3 className="text-[16px] font-bold">Jaringan Bengkel Rekanan</h3>
              <p className="text-[11px] text-[#798fb1]">AutoCare Terverifikasi Resmi</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        <div className="p-4 space-y-3 overflow-y-auto flex-1">
          {WORKSHOPS.map((ws) => (
            <div
              key={ws.id}
              className="p-4 rounded-xl border border-[#c4c6ce]/60 bg-white hover:border-[#0f2744]/40 hover:bg-[#f2f3ff]/40 transition-all space-y-2 shadow-sm"
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h4 className="text-[15px] font-bold text-[#001229]">{ws.name}</h4>
                  <p className="text-[12px] text-[#44474d] flex items-center gap-1 mt-0.5">
                    <span className="material-symbols-outlined text-[15px] text-[#74777e]">location_on</span>
                    <span>{ws.address}</span>
                  </p>
                </div>
                <span className="px-2 py-0.5 rounded bg-[#f2f3ff] text-[#001229] text-[11px] font-bold shrink-0">
                  {ws.distance}
                </span>
              </div>

              <div className="flex items-center gap-3 text-[11px]">
                <div className="flex items-center gap-1 bg-amber-50 text-amber-900 border border-amber-200 px-2 py-0.5 rounded-md font-bold">
                  <span className="material-symbols-outlined text-[14px] text-amber-500 fill">star</span>
                  <span>{ws.rating}</span>
                </div>
                <span className="text-[#44474d]">({ws.reviewCount} ulasan)</span>
                <span className="text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  {ws.availableSlots} Slot Kosong
                </span>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-1 text-[11px]">
                {ws.certifications.map((c, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1 px-2 py-0.5 bg-[#eaedff] text-[#001229] rounded"
                  >
                    <span className="material-symbols-outlined text-[13px] text-emerald-600">verified</span>
                    {c}
                  </span>
                ))}
              </div>

              <div className="pt-2 border-t border-[#c4c6ce]/30 flex items-center justify-between">
                <span className="text-[11px] text-[#44474d] flex items-center gap-1">
                  <span className="material-symbols-outlined text-[15px] text-[#00a16f]">local_shipping</span>
                  {ws.hasPickUpService ? 'Antar-Jemput Tersedia' : 'Hanya Datang Langsung'}
                </span>

                <button
                  onClick={() => {
                    onSelectWorkshop?.(ws);
                    onClose();
                  }}
                  className="px-3.5 py-1.5 bg-[#001229] hover:bg-[#0f2744] text-white text-[12px] font-bold rounded-lg active:scale-95 transition-all cursor-pointer"
                >
                  Pilih Bengkel
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
