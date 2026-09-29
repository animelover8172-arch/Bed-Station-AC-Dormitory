/**
 * BED STATION AC DORMITORY — MODERN BACKPACKER HOSTEL & TRAVEL HUB
 * C28/68 A, Opp. Sardar Patel Dharamshala, Maldahiya, Teliyabag, Varanasi
 * @license Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { VibeMode } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhyBedStation } from './components/WhyBedStation';
import { BedExperience } from './components/BedExperience';
import { HostelSocialMap } from './components/HostelSocialMap';
import { DayNightCycle } from './components/DayNightCycle';
import { CleanComfort } from './components/CleanComfort';
import { VaranasiTravel } from './components/VaranasiTravel';
import { ReviewsAndTrust } from './components/ReviewsAndTrust';
import { Gallery } from './components/Gallery';
import { BookingSection } from './components/BookingSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { BookingModal } from './components/BookingModal';

export default function App() {
  // Persistent Vibe preference using localStorage
  const [currentVibe, setCurrentVibe] = useState<VibeMode>(() => {
    try {
      const saved = localStorage.getItem('bedstation_vibe');
      if (saved === 'explore' || saved === 'rest' || saved === 'connect') {
        return saved;
      }
    } catch {
      // ignore
    }
    return 'explore';
  });

  const handleSelectVibe = (vibe: VibeMode) => {
    setCurrentVibe(vibe);
    try {
      localStorage.setItem('bedstation_vibe', vibe);
    } catch {
      // ignore
    }
  };

  // Booking Modal State
  const [bookingModalData, setBookingModalData] = useState<{
    isOpen: boolean;
    details: {
      checkIn: string;
      checkOut: string;
      guests: number;
      dormType: string;
      totalEstimate: number;
    };
  }>({
    isOpen: false,
    details: {
      checkIn: new Date().toISOString().split('T')[0],
      checkOut: new Date(Date.now() + 86400000).toISOString().split('T')[0],
      guests: 1,
      dormType: 'AC Dormitory Bed',
      totalEstimate: 499,
    },
  });

  const handleOpenBookingModal = (customDetails?: {
    checkIn: string;
    checkOut: string;
    guests: number;
    dormType: string;
    totalEstimate: number;
  }) => {
    if (customDetails) {
      setBookingModalData({ isOpen: true, details: customDetails });
    } else {
      // Scroll to booking or open modal directly
      const bookingEl = document.getElementById('booking');
      if (bookingEl) {
        bookingEl.scrollIntoView({ behavior: 'smooth' });
      } else {
        setBookingModalData((prev) => ({ ...prev, isOpen: true }));
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F3] text-[#101820] flex flex-col font-body selection:bg-[#C66A45]/20 selection:text-[#101820]">
      {/* Floating 3-Zone Navbar */}
      <Navbar onOpenBooking={() => handleOpenBookingModal()} />

      <main className="flex-1">
        {/* Hero with Vibe Switcher ("WHAT'S YOUR VIBE?") */}
        <Hero
          currentVibe={currentVibe}
          onSelectVibe={handleSelectVibe}
          onOpenBooking={() => handleOpenBookingModal()}
        />

        {/* Why Bed Station ("EVERYTHING YOU NEED. NOTHING YOU DON'T.") */}
        <WhyBedStation />

        {/* The Bed Experience with Interactive Hotspots */}
        <BedExperience />

        {/* The Hostel Social Map */}
        <HostelSocialMap />

        {/* Day → Night Hostel Timeline */}
        <DayNightCycle />

        {/* Clean & Comfort Section */}
        <CleanComfort />

        {/* Varanasi Travel Section */}
        <VaranasiTravel onExploreClick={() => {
          const galleryEl = document.getElementById('gallery');
          if (galleryEl) galleryEl.scrollIntoView({ behavior: 'smooth' });
        }} />

        {/* Google Trust & Real Traveler Stories */}
        <ReviewsAndTrust />

        {/* Travel-Magazine Masonry Gallery */}
        <Gallery />

        {/* Booking Conversion Section */}
        <BookingSection onOpenBookingModal={(details) => handleOpenBookingModal(details)} />

        {/* Location & Directions Section */}
        <LocationSection />
      </main>

      {/* Travel-Inspired Footer with RoadsideDeveloper Credit */}
      <Footer onOpenBooking={() => handleOpenBookingModal()} />

      {/* Floating Call & Book Actions */}
      <FloatingActions onOpenBooking={() => handleOpenBookingModal()} />

      {/* Booking Confirmation Dialog */}
      {bookingModalData.isOpen && (
        <BookingModal
          details={bookingModalData.details}
          onClose={() => setBookingModalData((prev) => ({ ...prev, isOpen: false }))}
        />
      )}
    </div>
  );
}
