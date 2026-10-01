import React from 'react';
import { Vehicle } from '../types';

interface VehicleSwitcherModalProps {
  vehicles: Vehicle[];
  currentVehicle: Vehicle;
  onSelectVehicle: (v: Vehicle) => void;
  onClose: () => void;
  onAddNewCar: () => void;
}

export const VehicleSwitcherModal: React.FC<VehicleSwitcherModalProps> = ({
  vehicles,
  currentVehicle,
  onSelectVehicle,
  onClose,
  onAddNewCar,
}) => {
  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl border border-[#c4c6ce]/50 overflow-hidden flex flex-col">
        <div className="p-4 bg-[#0f2744] text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[22px] text-[#d4e3ff]">
              directions_car
            </span>
            <h3 className="text-[16px] font-bold">Pilih Kendaraan Aktif</h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        <div className="p-4 space-y-3 max-h-[70vh] overflow-y-auto">
          {vehicles.map((veh) => {
            const isSelected = veh.id === currentVehicle.id;
            return (
              <div
                key={veh.id}
                onClick={() => {
                  onSelectVehicle(veh);
                  onClose();
                }}
                className={`p-3.5 rounded-xl border-2 cursor-pointer transition-all flex items-center justify-between gap-3 ${
                  isSelected
                    ? 'border-[#fd761a] bg-[#ffdbca]/20'
                    : 'border-[#c4c6ce]/50 bg-white hover:border-[#0f2744]/40 hover:bg-[#f2f3ff]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl overflow-hidden bg-[#001229]/20 border border-[#c4c6ce]/40 shrink-0">
                    <img
                      src={veh.image}
                      alt={veh.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h4 className="text-[14px] font-bold text-[#001229]">{veh.name}</h4>
                      {isSelected && (
                        <span className="bg-[#fd761a] text-white text-[9px] px-1.5 py-0.5 rounded font-bold uppercase">
                          Aktif
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-[#44474d] mt-0.5">
                      {veh.plate} • {veh.odometer.toLocaleString('id-ID')} km
                    </p>
                    <span
                      className={`inline-block text-[10px] font-semibold mt-1 px-1.5 py-0.5 rounded ${
                        veh.status === 'Sehat'
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-blue-100 text-blue-800'
                      }`}
                    >
                      {veh.status}
                    </span>
                  </div>
                </div>

                <div
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 ${
                    isSelected ? 'border-[#fd761a] bg-[#fd761a] text-white' : 'border-[#c4c6ce]'
                  }`}
                >
                  {isSelected && (
                    <span className="material-symbols-outlined text-[14px] font-bold">check</span>
                  )}
                </div>
              </div>
            );
          })}

          <button
            onClick={() => {
              onClose();
              onAddNewCar();
            }}
            className="w-full py-3 px-4 border border-dashed border-[#0f2744] text-[#0f2744] font-bold rounded-xl text-[13px] hover:bg-[#f2f3ff] transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">add_circle</span>
            <span>+ Daftarkan Mobil Baru ke Garasi</span>
          </button>
        </div>
      </div>
    </div>
  );
};
