import React from 'react';

interface PhotoLightboxModalProps {
  photo: { url: string; title: string } | null;
  onClose: () => void;
}

export const PhotoLightboxModal: React.FC<PhotoLightboxModalProps> = ({ photo, onClose }) => {
  if (!photo) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-[#001229] w-full max-w-lg rounded-2xl overflow-hidden border border-white/20 shadow-2xl flex flex-col">
        <div className="p-3.5 bg-black/40 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#fd761a] text-[20px]">photo_camera</span>
            <h3 className="text-[14px] font-bold">{photo.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        <div className="relative bg-black flex items-center justify-center min-h-[320px] max-h-[70vh] overflow-hidden">
          <img
            src={photo.url}
            alt={photo.title}
            className="w-full h-auto max-h-[70vh] object-contain"
          />
        </div>

        <div className="p-3 bg-[#0f2744] text-white flex items-center justify-between text-[12px]">
          <span className="text-[#b2c8ed]">Dokumentasi Otentik Montir AutoCare</span>
          <span className="text-[#fd761a] font-semibold">Resolusi Penuh</span>
        </div>
      </div>
    </div>
  );
};
