import React from 'react';

interface HelpModalProps {
  onClose: () => void;
}

export const HelpModal: React.FC<HelpModalProps> = ({ onClose }) => {
  const faqs = [
    {
      q: 'Bagaimana cara memantau status servis secara langsung?',
      a: 'Status servis diperbarui secara real-time dari sistem OBD-II dan laporan langsung Service Advisor di menu Riwayat.',
    },
    {
      q: 'Berapa lama estimasi pengerjaan servis berkala?',
      a: 'Pengerjaan berkala 35K - 40K umumnya memakan waktu 60 hingga 90 menit termasuk uji diagnostik komputer 21 titik.',
    },
    {
      q: 'Apakah ada garansi setelah servis selesai?',
      a: 'Ya, seluruh pekerjaan dan suku cadang resmi dijamin dengan Garansi Servis 14 Hari atau 1.000 KM.',
    },
    {
      q: 'Metode pembayaran apa saja yang diterima?',
      a: 'Pembayaran dilakukan di bengkel saat penyerahan kunci (QRIS, Kartu Debit/Kredit, atau Tunai).',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl border border-[#c4c6ce]/50 overflow-hidden flex flex-col max-h-[85vh]">
        <div className="p-4 bg-[#0f2744] text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[24px] text-[#d4e3ff]">help</span>
            <h3 className="text-[16px] font-bold">Bantuan &amp; FAQ Layanan</h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        <div className="p-4 space-y-3 overflow-y-auto flex-1 text-[13px]">
          {faqs.map((f, i) => (
            <div key={i} className="p-3.5 bg-[#f2f3ff] rounded-xl border border-[#c4c6ce]/30">
              <h4 className="font-bold text-[#001229] mb-1">{f.q}</h4>
              <p className="text-[#44474d] text-[12px] leading-relaxed">{f.a}</p>
            </div>
          ))}

          <div className="p-3 bg-blue-50 border border-blue-200 rounded-xl text-[12px] text-blue-900 flex items-center gap-2">
            <span className="material-symbols-outlined text-blue-600">headset_mic</span>
            <span>Butuh bantuan darurat? Hubungi Hotline AutoCare 24 Jam di 1500-890</span>
          </div>
        </div>

        <div className="p-3 bg-[#faf8ff] border-t border-[#c4c6ce]/30 text-right">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#001229] text-white text-[12px] font-bold rounded-xl active:scale-95 transition-all cursor-pointer"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};
