export type ActiveTab = 'beranda' | 'booking' | 'riwayat' | 'garasi' | 'profil';

export interface Vehicle {
  id: string;
  name: string;
  plate: string;
  year: number;
  type: string;
  status: 'Sehat' | 'Kondisi Prima' | 'Perlu Servis';
  odometer: number;
  batteryVolt: number;
  oilLifePercent: number;
  transmission: string;
  fuelType: string;
  lastServiceDate: string;
  serviceInterval: string;
  urgentNotice?: string;
  image: string;
  isActive: boolean;
}

export interface ServicePackage {
  id: string;
  title: string;
  subtitle: string;
  price: number;
  originalPrice?: number;
  durationMinutes: number;
  isRecommended?: boolean;
  partInfo: string;
  tag?: string;
  itemsIncluded?: string[];
}

export interface Workshop {
  id: string;
  name: string;
  address: string;
  distance: string;
  rating: number;
  reviewCount: number;
  isOpen: boolean;
  availableSlots: number;
  certifications: string[];
  durationEstimate: string;
  phone: string;
  hasPickUpService: boolean;
}

export interface ServiceRecord {
  id: string;
  date: string;
  vehicleName: string;
  plate: string;
  serviceTitle: string;
  workshopName: string;
  summaryItems: string[];
  totalCost: number;
  status: 'Selesai' | 'Proses Servis' | 'Dibatalkan';
  mechanicName?: string;
  invoiceNumber: string;
  itemsDetail: {
    item: string;
    category: 'Jasa' | 'Sparepart' | 'Oli & Fluida';
    price: number;
  }[];
}

export interface TimelineStep {
  stepNumber: number;
  title: string;
  time: string;
  description: string;
  status: 'completed' | 'active' | 'upcoming';
  photoUrl?: string;
  photoCaption?: string;
  metaBadge?: string;
  note?: {
    title: string;
    content: string;
  };
}

export interface ActiveBooking {
  bookingId: string;
  vehicle: Vehicle;
  servicePackage: ServicePackage;
  workshop: Workshop;
  date: string;
  time: string;
  status: string;
  mechanicName: string;
  mechanicRole: string;
  progressPercent: number;
  checkInTime: string;
  targetTime: string;
  notes: string;
  totalCost: number;
  timeline: TimelineStep[];
  documentationPhotos: {
    title: string;
    url: string;
  }[];
}
