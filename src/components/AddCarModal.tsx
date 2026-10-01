import React, { useState } from 'react';
import { Vehicle } from '../types';

interface AddCarModalProps {
  onClose: () => void;
  onAddCar: (car: Vehicle) => void;
}

export const AddCarModal: React.FC<AddCarModalProps> = ({ onClose, onAddCar }) => {
  const [name, setName] = useState('');
  const [plate, setPlate] = useState('');
  const [year, setYear] = useState('2023');
  const [type, setType] = useState('Sedan / Hatchback');
  const [transmission, setTransmission] = useState('Automatic (CVT)');
  const [odometer, setOdometer] = useState('15000');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !plate) return;

    const newVehicle: Vehicle = {
      id: `veh-${Date.now()}`,
      name,
      plate: plate.toUpperCase(),
      year: parseInt(year) || 2023,
      type,
      status: 'Sehat',
      odometer: parseInt(odometer) || 10000,
      batteryVolt: 12.6,
      oilLifePercent: 90,
      transmission,
      fuelType: 'RON 92',
      lastServiceDate: 'Baru Didaftarkan',
      serviceInterval: '10.000 km',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCgbhDsnzwJ_phs3U9-DlSjaHedXP7J4kqF1wmL5IH3kj-npvsflYACmoousNAOIbbstojT37v2Zsnbw1U05Bl2LhJHtQnA9FSJezGpvtuKMg5UEL68gpq3phYLcmXJYHup9kl8ezs-0_y8QPQCz1ux5uGQbWEN9rwf6i5WFKj0-Al3PGAXH5K3fCb_oObI-PLFJHXXIkRSH7qCPkqs1BUF2GkmS-ZxYoy0mR-Y9p8ZQTW3-vJeAojdeA',
      isActive: false,
    };

    onAddCar(newVehicle);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl border border-[#c4c6ce]/50 overflow-hidden flex flex-col">
        <div className="p-4 bg-[#0f2744] text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[24px] text-[#d4e3ff]">add_circle</span>
            <div>
              <h3 className="text-[16px] font-bold">Tambah Mobil ke Garasi</h3>
              <p className="text-[11px] text-[#798fb1]">Hubungkan Telematika Kendaraan</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-5 space-y-3.5 text-[13px]">
          <div>
            <label className="block text-[12px] font-semibold text-[#44474d] mb-1">
              Nama / Model Kendaraan *
            </label>
            <input
              type="text"
              required
              placeholder="Contoh: Honda Civic RS, Toyota Yaris Cross"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-[#f2f3ff] border border-[#c4c6ce] rounded-xl px-3.5 py-2.5 text-[#001229] focus:outline-none focus:border-[#0f2744]"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-[12px] font-semibold text-[#44474d] mb-1">
                Nomor Polisi (Plat) *
              </label>
              <input
                type="text"
                required
                placeholder="B 1234 XYZ"
                value={plate}
                onChange={(e) => setPlate(e.target.value)}
                className="w-full bg-[#f2f3ff] border border-[#c4c6ce] rounded-xl px-3.5 py-2.5 uppercase font-mono text-[#001229] focus:outline-none focus:border-[#0f2744]"
              />
            </div>
            <div>
              <label className="block text-[12px] font-semibold text-[#44474d] mb-1">
                Tahun Pembuatan
              </label>
              <input
                type="number"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                className="w-full bg-[#f2f3ff] border border-[#c4c6ce] rounded-xl px-3.5 py-2.5 text-[#001229] focus:outline-none focus:border-[#0f2744]"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-[12px] font-semibold text-[#44474d] mb-1">Transmisi</label>
              <select
                value={transmission}
                onChange={(e) => setTransmission(e.target.value)}
                className="w-full bg-[#f2f3ff] border border-[#c4c6ce] rounded-xl px-3 py-2.5 text-[#001229] focus:outline-none focus:border-[#0f2744]"
              >
                <option value="CVT">CVT</option>
                <option value="Automatic 6-Speed">Automatic 6-Speed</option>
                <option value="Manual">Manual</option>
                <option value="Dual Clutch (DCT)">Dual Clutch (DCT)</option>
              </select>
            </div>
            <div>
              <label className="block text-[12px] font-semibold text-[#44474d] mb-1">
                Odometer (KM)
              </label>
              <input
                type="number"
                value={odometer}
                onChange={(e) => setOdometer(e.target.value)}
                className="w-full bg-[#f2f3ff] border border-[#c4c6ce] rounded-xl px-3.5 py-2.5 text-[#001229] focus:outline-none focus:border-[#0f2744]"
              />
            </div>
          </div>

          <div className="p-3 bg-blue-50 rounded-xl border border-blue-200 text-[12px] text-blue-900 flex items-start gap-2">
            <span className="material-symbols-outlined text-blue-600 text-[18px]">cell_tower</span>
            <span>
              Perangkat OBD-II Telematics akan terdeteksi otomatis saat Bluetooth kendaraan aktif.
            </span>
          </div>

          <div className="pt-2 flex items-center justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 border border-[#c4c6ce] text-[#001229] font-semibold rounded-xl hover:bg-[#f2f3ff] active:scale-95 cursor-pointer"
            >
              Batal
            </button>
            <button
              type="submit"
              className="px-5 py-2.5 bg-[#fd761a] hover:bg-[#ea580c] text-white font-bold rounded-xl active:scale-95 transition-all shadow-md cursor-pointer"
            >
              Simpan Mobil
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
