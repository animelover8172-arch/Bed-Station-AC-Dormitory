import { BedHotspot, DayNightStep, GalleryPhoto, ReviewItem, SocialNode } from '../types';

import heroDormImg from '../assets/images/hero_dorm_hostel_1790620212449.jpg';
import bedSpaceImg from '../assets/images/bed_closeup_space_1790620230908.jpg';
import washroomImg from '../assets/images/clean_washroom_hostel_1790620262777.jpg';
import commonSocialImg from '../assets/images/hostel_common_social_1790620304533.jpg';
import ghatDawnImg from '../assets/images/varanasi_ghat_dawn_1790620249483.jpg';
import eveningAartiImg from '../assets/images/varanasi_evening_aarti_1790620320498.jpg';

export const HOSTEL_IMAGES = {
  heroDorm: heroDormImg,
  bedSpace: bedSpaceImg,
  washroom: washroomImg,
  commonSocial: commonSocialImg,
  ghatDawn: ghatDawnImg,
  eveningAarti: eveningAartiImg,
};

export const HOSTEL_INFO = {
  name: 'BED STATION AC DORMITORY',
  shortName: 'Bed Station',
  tagline: 'SLEEP. MEET. EXPLORE. REPEAT.',
  concept: 'Modern Backpacker Hostel × Varanasi Travel Hub × Social Dormitory',
  address: 'C28/68 A, Opp. Sardar Patel Dharamshala, Maldahiya, Teliyabag, Varanasi, Uttar Pradesh 221002',
  neighborhood: 'Maldahiya, Teliyabag',
  city: 'Varanasi',
  state: 'Uttar Pradesh',
  pincode: '221002',
  phone: '070682 17657',
  phoneTel: '+917068217657',
  rating: 4.5,
  reviewCount: 137,
  basePricePerBed: 499,
  currency: '₹',
  googleMapsQuery: 'https://www.google.com/maps/search/?api=1&query=Bed+Station+AC+Dormitory+Maldahiya+Teliyabag+Varanasi',
};

export const DEVELOPER_INFO = {
  brand: 'RoadsideDeveloper',
  whatsapp: '+91 7654224826',
  whatsappLink: 'https://wa.me/917654224826',
  phone: '+91 8405918172',
  phoneTel: 'tel:+918405918172',
};

export const VIBE_CONTENT = {
  explore: {
    label: 'EXPLORE',
    emoji: '🌅',
    heroTag: 'RISE & WANDER',
    headline: 'Wake up. Grab your backpack. Explore Varanasi.',
    description: 'Ancient alleys, misty river dawn, hot chai on stone steps, and temple chimes calling.',
    accent: '#C66A45', // Terracotta
    bgTint: 'bg-[#C66A45]/10',
    borderTint: 'border-[#C66A45]/30',
  },
  rest: {
    label: 'REST',
    emoji: '🌙',
    heroTag: 'CALM & RECHARGE',
    headline: 'Clean beds. Cool air. Quiet moments.',
    description: 'Step into chilled AC quietude, kick off your walking shoes, and let your senses reset.',
    accent: '#527C78', // Muted Teal
    bgTint: 'bg-[#527C78]/10',
    borderTint: 'border-[#527C78]/30',
  },
  connect: {
    label: 'CONNECT',
    emoji: '🧑🤝🧑',
    heroTag: 'STORIES & FRIENDS',
    headline: 'Meet travellers. Share stories. Make memories.',
    description: 'Trade road tips, find companion wanderers, and celebrate unforgettable nights together.',
    accent: '#101820', // Deep Navy
    bgTint: 'bg-[#101820]/10',
    borderTint: 'border-[#101820]/30',
  },
};

export const FEATURES = [
  {
    id: 'ac',
    title: 'AC DORMS',
    description: 'Comfortable air-conditioned dormitory environment.',
    highlight: 'Optimal climate day & night',
  },
  {
    id: 'space',
    title: 'PERSONAL SPACE',
    description: 'Individual fans and comfortable beds mentioned in customer feedback.',
    highlight: 'Dedicated air flow & privacy',
  },
  {
    id: 'charging',
    title: 'CHARGING POINTS',
    description: 'Convenient charging points for travellers at every bed.',
    highlight: 'Keep all devices powered',
  },
  {
    id: 'lockers',
    title: 'LOCKERS',
    description: 'Storage lockers for personal belongings and backpack security.',
    highlight: 'Safe luggage storage',
  },
  {
    id: 'washrooms',
    title: 'CLEAN WASHROOMS',
    description: 'Well-maintained and hygienic washroom facilities.',
    highlight: 'Sanitized & refreshed daily',
  },
  {
    id: 'service',
    title: 'FRIENDLY SERVICE',
    description: 'Guests frequently mention helpful and friendly staff ready to guide your stay.',
    highlight: 'Local support & assistance',
  },
];

export const BED_HOTSPOTS: BedHotspot[] = [
  {
    id: 'fan',
    title: 'PERSONAL FAN',
    description: 'Individual airflow control directly at your bunk so you rest at your ideal temperature.',
    x: 28,
    y: 28,
    icon: 'Fan',
  },
  {
    id: 'bed',
    title: 'COMFORTABLE BED',
    description: 'Plush supportive mattress with fresh clean linens, pillow, and duvet for deep restorative rest.',
    x: 54,
    y: 52,
    icon: 'BedDouble',
  },
  {
    id: 'charging',
    title: 'CHARGING POINT',
    description: 'Multi-plug electrical socket and USB charging within arm’s reach of your pillow.',
    x: 74,
    y: 38,
    icon: 'Zap',
  },
  {
    id: 'locker',
    title: 'LOCKER',
    description: 'Secure, dedicated metal storage locker beneath bed to lock backpacks and valuables.',
    x: 48,
    y: 82,
    icon: 'Lock',
  },
];

export const SOCIAL_MAP_NODES: SocialNode[] = [
  {
    id: 'sleep',
    label: 'SLEEP',
    subtitle: 'Recharge in chilled AC peace',
    tagline: 'Bunk Pods & Fresh Linens',
    x: 50,
    y: 12,
  },
  {
    id: 'meet',
    label: 'MEET',
    subtitle: 'Swap stories with fellow backpackers',
    tagline: 'Social Hub & Common Vibe',
    x: 82,
    y: 38,
  },
  {
    id: 'eat',
    label: 'EAT',
    subtitle: 'Local flavours, lassi & hot chai',
    tagline: 'Neighbourhood Food Trails',
    x: 74,
    y: 82,
  },
  {
    id: 'explore',
    label: 'EXPLORE',
    subtitle: 'Ghats, alleys & morning boat rides',
    tagline: 'The Varanasi Maze',
    x: 24,
    y: 80,
  },
  {
    id: 'return',
    label: 'RETURN',
    subtitle: 'Step back to sanctuary & shower',
    tagline: 'Your Varanasi Basecamp',
    x: 18,
    y: 36,
  },
];

export const DAY_NIGHT_STEPS: DayNightStep[] = [
  {
    id: 'morning',
    title: 'MORNING',
    subtitle: 'Wake Up & Explore',
    description: 'Dawn breaks over the Ganges. Slip out into quiet morning streets, catch the river boat drift, and sip earthen-cup masala chai.',
    timeRange: '05:30 — 11:30',
    bgColor: '#FAF8F3',
    accentColor: '#C66A45',
    textColor: '#101820',
    badge: 'Golden Hour Dawn',
  },
  {
    id: 'afternoon',
    title: 'AFTERNOON',
    subtitle: 'Come Back & Recharge',
    description: 'When the midday sun climbs high, return to Bed Station. Switch on the AC, take a refreshing clean shower, and rest comfortably.',
    timeRange: '12:00 — 16:30',
    bgColor: '#F4EBDD',
    accentColor: '#527C78',
    textColor: '#101820',
    badge: 'Cool Retreat',
  },
  {
    id: 'evening',
    title: 'EVENING',
    subtitle: 'Meet & Wander',
    description: 'As twilight settles, gather with fellow travellers. Head together toward the riverfront for the Ganga Aarti and evening street delicacies.',
    timeRange: '17:00 — 21:00',
    bgColor: '#2E221D',
    accentColor: '#E27B55',
    textColor: '#FAF8F3',
    badge: 'Aarti & Lights',
  },
  {
    id: 'night',
    title: 'NIGHT',
    subtitle: 'Rest & Reset',
    description: 'Back in your private dorm pod. Turn on your personal fan, charge your devices, and sleep deeply in a safe, peaceful space.',
    timeRange: '21:30 — 05:00',
    bgColor: '#101820',
    accentColor: '#527C78',
    textColor: '#FAF8F3',
    badge: 'Deep Rest',
  },
];

export const REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    quote: 'excellent room with good service and clean bathroom. good place to stay',
    source: 'Verified Google Review Excerpt',
    highlight: 'Clean bathroom & good service',
    rating: 5,
  },
  {
    id: 'rev-2',
    quote: 'The rooms and washrooms were very clean and well maintained.',
    source: 'Verified Google Review Excerpt',
    highlight: 'Well-maintained washrooms',
    rating: 5,
  },
  {
    id: 'rev-3',
    quote: 'The environment felt safe and peaceful.',
    source: 'Verified Google Review Excerpt',
    highlight: 'Safe & peaceful environment',
    rating: 4.5,
  },
  {
    id: 'rev-4',
    quote: 'Budget friendly stay in Varanasi with AC dorm and friendly helpful staff.',
    source: 'Verified Google Review Excerpt',
    highlight: 'Helpful staff & AC dorm',
    rating: 4.5,
  },
];

export const GALLERY_ITEMS: GalleryPhoto[] = [
  {
    id: 'g-1',
    url: heroDormImg,
    title: 'AC Dormitory Pods',
    category: 'dorm',
    caption: 'Air-conditioned dormitory with clean linens and warm ambient reading lights.',
    aspect: 'landscape',
  },
  {
    id: 'g-2',
    url: bedSpaceImg,
    title: 'Personal Bed Setup',
    category: 'dorm',
    caption: 'Dedicated personal fan, multi-plug socket, and storage locker below.',
    aspect: 'portrait',
  },
  {
    id: 'g-3',
    url: washroomImg,
    title: 'Hygienic Washrooms',
    category: 'washroom',
    caption: 'Regularly cleaned and maintained sanitary facilities.',
    aspect: 'portrait',
  },
  {
    id: 'g-4',
    url: commonSocialImg,
    title: 'Travel Hub & Common Lounge',
    category: 'social',
    caption: 'A welcoming communal space to connect with travellers and plan journeys.',
    aspect: 'landscape',
  },
  {
    id: 'g-5',
    url: ghatDawnImg,
    title: 'Misty Ganges Morning',
    category: 'varanasi',
    caption: 'Early dawn on the river steps — moments waiting just outside.',
    aspect: 'landscape',
  },
  {
    id: 'g-6',
    url: eveningAartiImg,
    title: 'Evening Ganga Aarti Lights',
    category: 'varanasi',
    caption: 'The spiritual glow of oil lamps and chanting along the water.',
    aspect: 'portrait',
  },
];
