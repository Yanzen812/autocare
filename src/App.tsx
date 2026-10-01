import React, { useState } from 'react';
import { ActiveTab, Vehicle, ServiceRecord, ActiveBooking, ServicePackage, Workshop } from './types';
import { INITIAL_VEHICLES, DEFAULT_ACTIVE_BOOKING, SERVICE_HISTORY } from './data/mockData';
import { TopAppBar } from './components/TopAppBar';
import { BottomNavBar } from './components/BottomNavBar';
import { BerandaScreen } from './components/BerandaScreen';
import { BookingScreen } from './components/BookingScreen';
import { StatusPengerjaanScreen } from './components/StatusPengerjaanScreen';
import { GarasiScreen } from './components/GarasiScreen';
import { ProfilScreen } from './components/ProfilScreen';
import { InvoiceModal } from './components/InvoiceModal';
import { CostBreakdownModal } from './components/CostBreakdownModal';
import { ChatMekanikModal } from './components/ChatMekanikModal';
import { VehicleSwitcherModal } from './components/VehicleSwitcherModal';
import { WorkshopListModal } from './components/WorkshopListModal';
import { AddCarModal } from './components/AddCarModal';
import { PhotoLightboxModal } from './components/PhotoLightboxModal';
import { NotificationModal } from './components/NotificationModal';
import { HelpModal } from './components/HelpModal';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('beranda');
  const [vehicles, setVehicles] = useState<Vehicle[]>(INITIAL_VEHICLES);
  const [activeVehicle, setActiveVehicle] = useState<Vehicle>(INITIAL_VEHICLES[0]);
  const [activeBooking, setActiveBooking] = useState<ActiveBooking>(DEFAULT_ACTIVE_BOOKING);

  // Modals state
  const [selectedInvoice, setSelectedInvoice] = useState<ServiceRecord | null>(null);
  const [showCostBreakdown, setShowCostBreakdown] = useState<boolean>(false);
  const [showChatMekanik, setShowChatMekanik] = useState<boolean>(false);
  const [showVehicleSwitcher, setShowVehicleSwitcher] = useState<boolean>(false);
  const [showWorkshopModal, setShowWorkshopModal] = useState<boolean>(false);
  const [showAddCar, setShowAddCar] = useState<boolean>(false);
  const [showNotifications, setShowNotifications] = useState<boolean>(false);
  const [showHelpModal, setShowHelpModal] = useState<boolean>(false);
  const [lightboxPhoto, setLightboxPhoto] = useState<{ url: string; title: string } | null>(null);

  // Toast feedback state
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  const handleCopyVoucher = (code: string) => {
    navigator.clipboard?.writeText?.(code);
    showToast(`Kode voucher "${code}" berhasil disalin!`);
  };

  const handleConfirmBooking = (details: {
    vehicle: Vehicle;
    servicePackage: ServicePackage;
    workshop: Workshop;
    date: string;
    time: string;
    notes: string;
    totalCost: number;
  }) => {
    const randomId = `#AC-${Math.floor(10000 + Math.random() * 90000)}`;
    const newBooking: ActiveBooking = {
      ...DEFAULT_ACTIVE_BOOKING,
      bookingId: randomId,
      vehicle: details.vehicle,
      servicePackage: details.servicePackage,
      workshop: details.workshop,
      date: details.date,
      time: details.time,
      notes: details.notes,
      totalCost: details.totalCost,
      status: 'Proses Servis',
      progressPercent: 20,
    };

    setActiveBooking(newBooking);
    showToast(`Booking ${randomId} berhasil dikonfirmasi!`);
    setActiveTab('riwayat');
  };

  const handleAddCar = (newCar: Vehicle) => {
    setVehicles((prev) => [newCar, ...prev]);
    setActiveVehicle(newCar);
    showToast(`${newCar.name} berhasil ditambahkan ke Garasi!`);
  };

  const handleSelectActiveVehicle = (v: Vehicle) => {
    setActiveVehicle(v);
    setVehicles((prev) =>
      prev.map((item) => ({
        ...item,
        isActive: item.id === v.id,
      }))
    );
    showToast(`Kendaraan aktif diubah ke ${v.name}`);
  };

  return (
    <div className="min-h-screen bg-[#faf8ff] text-[#131b2e] font-sans antialiased relative selection:bg-[#ffdbca] selection:text-[#341100]">
      {/* Top App Bar Navigation */}
      <TopAppBar
        activeTab={activeTab}
        onTabChange={setActiveTab}
        onOpenNotifications={() => setShowNotifications(true)}
        onBack={() => setActiveTab('beranda')}
      />

      {/* Screen Views */}
      {activeTab === 'beranda' && (
        <BerandaScreen
          vehicle={activeVehicle}
          onNavigate={(tab) => setActiveTab(tab)}
          onOpenVehicleSwitcher={() => setShowVehicleSwitcher(true)}
          onOpenWorkshopModal={() => setShowWorkshopModal(true)}
          onCopyVoucher={handleCopyVoucher}
        />
      )}

      {activeTab === 'booking' && (
        <BookingScreen
          vehicle={activeVehicle}
          onOpenVehicleSwitcher={() => setShowVehicleSwitcher(true)}
          onOpenWorkshopModal={() => setShowWorkshopModal(true)}
          onConfirmBooking={handleConfirmBooking}
        />
      )}

      {activeTab === 'riwayat' && (
        <StatusPengerjaanScreen
          booking={activeBooking}
          onOpenCostBreakdown={() => setShowCostBreakdown(true)}
          onOpenChatMekanik={() => setShowChatMekanik(true)}
          onOpenPhotoLightbox={(url, title) => setLightboxPhoto({ url, title })}
          onOpenHelpModal={() => setShowHelpModal(true)}
        />
      )}

      {activeTab === 'garasi' && (
        <GarasiScreen
          vehicles={vehicles}
          onOpenAddCar={() => setShowAddCar(true)}
          onBookServiceForVehicle={(v) => {
            handleSelectActiveVehicle(v);
            setActiveTab('booking');
          }}
          onViewServiceHistory={() => setActiveTab('riwayat')}
          onViewInvoice={(record) => setSelectedInvoice(record)}
          onSelectActiveVehicle={handleSelectActiveVehicle}
        />
      )}

      {activeTab === 'profil' && (
        <ProfilScreen
          onCopyVoucher={handleCopyVoucher}
          onNavigateTab={(tab) => setActiveTab(tab)}
        />
      )}

      {/* Fixed Bottom Navigation Bar */}
      <BottomNavBar activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-18 left-1/2 -translate-x-1/2 z-50 bg-[#001229] text-white px-4 py-2.5 rounded-full shadow-lg border border-white/20 text-[13px] font-semibold flex items-center gap-2 animate-fade-in transition-all">
          <span className="material-symbols-outlined text-[#00a16f] text-[18px]">check_circle</span>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Interactive Modals */}
      {selectedInvoice && (
        <InvoiceModal record={selectedInvoice} onClose={() => setSelectedInvoice(null)} />
      )}

      {showCostBreakdown && (
        <CostBreakdownModal
          booking={activeBooking}
          onClose={() => setShowCostBreakdown(false)}
        />
      )}

      {showChatMekanik && (
        <ChatMekanikModal
          booking={activeBooking}
          onClose={() => setShowChatMekanik(false)}
        />
      )}

      {showVehicleSwitcher && (
        <VehicleSwitcherModal
          vehicles={vehicles}
          currentVehicle={activeVehicle}
          onSelectVehicle={handleSelectActiveVehicle}
          onClose={() => setShowVehicleSwitcher(false)}
          onAddNewCar={() => setShowAddCar(true)}
        />
      )}

      {showWorkshopModal && (
        <WorkshopListModal
          onClose={() => setShowWorkshopModal(false)}
          onSelectWorkshop={(ws) => {
            showToast(`Bengkel dipilih: ${ws.name}`);
          }}
        />
      )}

      {showAddCar && (
        <AddCarModal onClose={() => setShowAddCar(false)} onAddCar={handleAddCar} />
      )}

      {lightboxPhoto && (
        <PhotoLightboxModal photo={lightboxPhoto} onClose={() => setLightboxPhoto(null)} />
      )}

      {showNotifications && (
        <NotificationModal
          onClose={() => setShowNotifications(false)}
          onNavigateTab={(tab) => setActiveTab(tab)}
        />
      )}

      {showHelpModal && <HelpModal onClose={() => setShowHelpModal(false)} />}
    </div>
  );
}
