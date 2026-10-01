import React, { useState } from 'react';
import { ActiveBooking } from '../types';

interface ChatMekanikModalProps {
  booking: ActiveBooking;
  onClose: () => void;
}

interface ChatMessage {
  id: string;
  sender: 'mechanic' | 'user';
  text: string;
  time: string;
}

export const ChatMekanikModal: React.FC<ChatMekanikModalProps> = ({ booking, onClose }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'm1',
      sender: 'mechanic',
      text: 'Halo Pak Yanzen, saya Pak Joko yang menangani Honda HR-V bapak. Oli lama sudah kami kuras, warnanya sudah cukup gelap dan filter OEM baru sudah terpasang rapi.',
      time: '11:05 WIB',
    },
    {
      id: 'm2',
      sender: 'mechanic',
      text: 'Mengenai keluhan decit rem kecepatan rendah, kampas masih tebal 75%, hanya residu debu rem. Kami bersihkan sekalian ya pak tanpa perlu ganti kampas.',
      time: '11:12 WIB',
    },
  ]);
  const [inputText, setInputText] = useState('');

  const handleSend = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputText.trim()) return;

    const newMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: inputText.trim(),
      time: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }) + ' WIB',
    };

    setMessages((prev) => [...prev, newMsg]);
    setInputText('');

    // Simulate friendly mechanic response
    setTimeout(() => {
      const reply: ChatMessage = {
        id: `mech-${Date.now()}`,
        sender: 'mechanic',
        text: 'Siap Pak Yanzen! Pengerjaan kami targetkan selesai tepat waktu sekitar jam 13:30. Nanti saat selesai langsung kami kabari melalui notifikasi aplikasi ya.',
        time: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }) + ' WIB',
      };
      setMessages((prev) => [...prev, reply]);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-3">
      <div className="bg-white w-full max-w-md h-[560px] rounded-2xl shadow-2xl border border-[#c4c6ce]/50 overflow-hidden flex flex-col">
        {/* Header */}
        <div className="p-3.5 bg-[#0f2744] text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-[#d4e3ff] border border-white/20">
              <span className="material-symbols-outlined text-[20px]">engineering</span>
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#0f2744]"></span>
            </div>
            <div>
              <h3 className="text-[14px] font-bold text-white">{booking.mechanicName}</h3>
              <p className="text-[11px] text-[#798fb1]">{booking.mechanicRole} • Online</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* Messages */}
        <div className="p-4 flex-1 overflow-y-auto space-y-3 bg-[#faf8ff] text-[13px]">
          <div className="text-center">
            <span className="bg-[#eaedff] text-[#44474d] text-[10px] px-2.5 py-1 rounded-full font-semibold">
              Live Chat Pengerjaan Servis #{booking.bookingId}
            </span>
          </div>

          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex flex-col ${
                msg.sender === 'user' ? 'items-end' : 'items-start'
              }`}
            >
              <div
                className={`max-w-[85%] p-3 rounded-2xl ${
                  msg.sender === 'user'
                    ? 'bg-[#0f2744] text-white rounded-br-none'
                    : 'bg-white border border-[#c4c6ce]/50 text-[#001229] shadow-sm rounded-bl-none'
                }`}
              >
                <p className="leading-relaxed">{msg.text}</p>
              </div>
              <span className="text-[10px] text-[#74777e] mt-1 px-1">{msg.time}</span>
            </div>
          ))}
        </div>

        {/* Input Bar */}
        <form
          onSubmit={handleSend}
          className="p-3 bg-white border-t border-[#c4c6ce]/30 flex items-center gap-2"
        >
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Ketik pesan ke Pak Joko..."
            className="flex-1 bg-[#f2f3ff] border border-[#c4c6ce]/60 rounded-xl px-3.5 py-2.5 text-[13px] text-[#001229] focus:outline-none focus:border-[#0f2744]"
          />
          <button
            type="submit"
            className="w-10 h-10 rounded-xl bg-[#fd761a] hover:bg-[#ea580c] text-white flex items-center justify-center shrink-0 cursor-pointer active:scale-95 transition-all"
          >
            <span className="material-symbols-outlined text-[18px]">send</span>
          </button>
        </form>
      </div>
    </div>
  );
};
