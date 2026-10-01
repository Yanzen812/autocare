import React from 'react';

interface NotificationModalProps {
  onClose: () => void;
  onNavigateTab: (tab: 'beranda' | 'booking' | 'riwayat' | 'garasi') => void;
}

export const NotificationModal: React.FC<NotificationModalProps> = ({ onClose, onNavigateTab }) => {
  const notifications = [
    {
      id: 1,
      title: 'Proses Servis Sedang Berjalan',
      desc: 'Mekanik Pak Joko sedang melakukan penggantian filter oli OEM pada Honda HR-V RS.',
      time: '11:15 WIB',
      icon: 'build',
      isNew: true,
      actionTab: 'riwayat' as const,
    },
    {
      id: 2,
      title: 'Peringatan Servis Berkala Mendesak',
      desc: 'Odometer Honda HR-V mendekati 35.000 KM (tersisa 750 km atau 12 hari lagi).',
      time: '08:30 WIB',
      icon: 'warning',
      isNew: true,
      actionTab: 'booking' as const,
    },
    {
      id: 3,
      title: 'Voucher Diskon 25% Ditambahkan',
      desc: 'Gunakan kode AUTOBERKAH untuk diskon servis berkala & tune up.',
      time: 'Kemarin',
      icon: 'local_offer',
      isNew: false,
      actionTab: 'beranda' as const,
    },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl border border-[#c4c6ce]/50 overflow-hidden flex flex-col max-h-[80vh]">
        <div className="p-4 bg-[#0f2744] text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[22px] text-[#d4e3ff]">notifications</span>
            <h3 className="text-[16px] font-bold">Pemberitahuan</h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        <div className="p-4 space-y-2.5 overflow-y-auto flex-1">
          {notifications.map((n) => (
            <div
              key={n.id}
              onClick={() => {
                onClose();
                onNavigateTab(n.actionTab);
              }}
              className={`p-3 rounded-xl border transition-all cursor-pointer flex items-start gap-3 ${
                n.isNew
                  ? 'bg-[#ffdbca]/20 border-[#fd761a]/40 hover:bg-[#ffdbca]/30'
                  : 'bg-white border-[#c4c6ce]/40 hover:bg-[#f2f3ff]'
              }`}
            >
              <div
                className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                  n.isNew ? 'bg-[#fd761a] text-white' : 'bg-[#f2f3ff] text-[#001229]'
                }`}
              >
                <span className="material-symbols-outlined text-[18px]">{n.icon}</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h4 className="text-[13px] font-bold text-[#001229] truncate">{n.title}</h4>
                  <span className="text-[10px] text-[#74777e] shrink-0">{n.time}</span>
                </div>
                <p className="text-[12px] text-[#44474d] mt-0.5 leading-snug">{n.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="p-3 bg-[#f2f3ff] border-t border-[#c4c6ce]/30 text-center">
          <button
            onClick={onClose}
            className="text-[12px] text-[#001229] font-bold hover:underline cursor-pointer"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};
