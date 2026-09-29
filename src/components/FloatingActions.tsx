import React, { useState, useEffect } from 'react';
import { Phone, BedDouble, ChevronUp } from 'lucide-react';
import { HOSTEL_INFO } from '../data/hostelData';

interface FloatingActionsProps {
  onOpenBooking: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenBooking }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 right-0 h-1 z-50 pointer-events-none bg-black/10">
        <div
          className="h-full bg-gradient-to-r from-[#C66A45] via-[#527C78] to-[#C66A45] transition-all duration-75"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating Action Cluster (Respecting mobile sticky cap) */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-2.5 pointer-events-auto">
        {/* Back to Top */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-[#101820]/90 text-white hover:bg-[#101820] shadow-md border border-white/20 flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
            aria-label="Back to top of page"
          >
            <ChevronUp className="w-5 h-5" />
          </button>
        )}

        {/* Quick Call Button */}
        <a
          href={`tel:${HOSTEL_INFO.phoneTel}`}
          className="h-11 px-3.5 rounded-full bg-[#527C78] hover:bg-[#436763] text-white shadow-lg flex items-center gap-2 text-xs font-semibold uppercase tracking-wider transition-all duration-200 hover:-translate-y-0.5"
          title={`Call ${HOSTEL_INFO.phone}`}
        >
          <Phone className="w-4 h-4" />
          <span className="hidden sm:inline">CALL: {HOSTEL_INFO.phone}</span>
        </a>

        {/* Quick Book Button */}
        <button
          onClick={onOpenBooking}
          className="h-11 px-4 rounded-full bg-[#C66A45] hover:bg-[#b05836] text-white shadow-xl flex items-center gap-2 text-xs font-bold uppercase tracking-wider transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
          title="Book your AC Dormitory Bed"
        >
          <BedDouble className="w-4 h-4" />
          <span>BOOK BED</span>
        </button>
      </div>
    </>
  );
};
