export type VibeMode = 'explore' | 'rest' | 'connect';

export interface BedHotspot {
  id: string;
  title: string;
  description: string;
  x: number; // percentage
  y: number; // percentage
  icon: string;
}

export interface SocialNode {
  id: string;
  label: string;
  subtitle: string;
  tagline: string;
  x: number;
  y: number;
}

export interface DayNightStep {
  id: 'morning' | 'afternoon' | 'evening' | 'night';
  title: string;
  subtitle: string;
  description: string;
  timeRange: string;
  bgColor: string;
  accentColor: string;
  textColor: string;
  badge: string;
}

export interface ReviewItem {
  id: string;
  quote: string;
  source: string;
  highlight: string;
  rating: number;
}

export interface GalleryPhoto {
  id: string;
  url: string;
  title: string;
  category: 'all' | 'dorm' | 'social' | 'washroom' | 'varanasi';
  caption: string;
  aspect: 'landscape' | 'portrait' | 'square';
}

export interface BookingFormState {
  checkIn: string;
  checkOut: string;
  guests: number;
  dormType: 'mixed-ac' | 'male-ac' | 'female-ac';
  guestName: string;
  guestPhone: string;
  specialNotes?: string;
}
