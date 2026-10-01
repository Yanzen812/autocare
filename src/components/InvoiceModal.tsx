import React from 'react';
import { ServiceRecord } from '../types';

interface InvoiceModalProps {
  record: ServiceRecord | null;
  onClose: () => void;
}

export const InvoiceModal: React.FC<InvoiceModalProps> = ({ record, onClose }) => {
  if (!record) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl border border-[#c4c6ce]/50 overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="p-4 bg-[#0f2744] text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[24px] text-[#d4e3ff]">receipt_long</span>
            <div>
              <h3 className="text-[16px] font-bold">Faktur Resmi Servis</h3>
              <p className="text-[11px] text-[#798fb1] font-mono">{record.invoiceNumber}</p>
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
        <div className="p-5 overflow-y-auto space-y-4 flex-1 text-[13px]">
          {/* Metadata */}
          <div className="grid grid-cols-2 gap-3 p-3 rounded-xl bg-[#f2f3ff] border border-[#c4c6ce]/30">
            <div>
              <span className="text-[11px] text-[#44474d] block">Kendaraan</span>
              <span className="font-bold text-[#001229]">{record.vehicleName}</span>
              <span className="text-[11px] text-[#44474d] block font-mono">{record.plate}</span>
            </div>
            <div>
              <span className="text-[11px] text-[#44474d] block">Tanggal Servis</span>
              <span className="font-bold text-[#001229]">{record.date}</span>
              <span className="text-[11px] text-[#00a16f] font-semibold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]"></span>
                Status: Lunas ({record.status})
              </span>
            </div>
          </div>

          <div>
            <span className="text-[11px] text-[#44474d] block">Bengkel Rekanan</span>
            <p className="font-semibold text-[#001229]">{record.workshopName}</p>
            {record.mechanicName && (
              <p className="text-[12px] text-[#74777e]">Teknisi / Mekanik: {record.mechanicName}</p>
            )}
          </div>

          {/* Itemized Table */}
          <div className="space-y-2">
            <span className="text-[12px] font-bold text-[#001229] block uppercase tracking-wider">
              Rincian Pekerjaan &amp; Komponen
            </span>
            <div className="border border-[#c4c6ce]/50 rounded-xl overflow-hidden">
              <table className="w-full text-left">
                <thead className="bg-[#eaedff] text-[11px] text-[#44474d] uppercase">
                  <tr>
                    <th className="p-2.5">Item</th>
                    <th className="p-2.5">Kategori</th>
                    <th className="p-2.5 text-right">Biaya</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#c4c6ce]/30">
                  {record.itemsDetail?.map((item, idx) => (
                    <tr key={idx} className="hover:bg-[#f2f3ff]/50">
                      <td className="p-2.5 font-medium text-[#001229]">{item.item}</td>
                      <td className="p-2.5 text-[#44474d]">
                        <span className="px-2 py-0.5 rounded text-[10px] bg-[#f2f3ff] border border-[#c4c6ce]/40">
                          {item.category}
                        </span>
                      </td>
                      <td className="p-2.5 text-right font-semibold text-[#001229]">
                        Rp {item.price.toLocaleString('id-ID')}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Guarantee Note */}
          <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-[12px] text-emerald-800 flex items-start gap-2">
            <span className="material-symbols-outlined text-emerald-600 text-[18px]">verified_user</span>
            <div>
              <span className="font-bold block">Garansi Servis Berlaku 14 Hari / 1.000 KM</span>
              <span>Bebas biaya pengecekan ulang jika terdapat keluhan terkait pekerjaan ini.</span>
            </div>
          </div>

          {/* Total */}
          <div className="pt-3 border-t border-[#c4c6ce]/50 flex items-center justify-between">
            <span className="text-[14px] font-bold text-[#44474d]">Total Pembayaran</span>
            <span className="text-[20px] font-extrabold text-[#001229]">
              Rp {record.totalCost.toLocaleString('id-ID')}
            </span>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#f2f3ff] border-t border-[#c4c6ce]/40 flex items-center justify-end gap-2">
          <button
            onClick={() => window.print?.()}
            className="px-4 py-2 border border-[#c4c6ce] text-[#001229] font-semibold text-[13px] rounded-xl hover:bg-white active:scale-95 transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <span className="material-symbols-outlined text-[16px]">print</span>
            <span>Cetak Faktur</span>
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#001229] text-white font-semibold text-[13px] rounded-xl hover:bg-[#0f2744] active:scale-95 transition-all cursor-pointer"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};
