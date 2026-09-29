import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, BedDouble } from 'lucide-react';
import { HOSTEL_INFO } from '../data/hostelData';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Stay', href: '#stay' },
    { label: 'Facilities', href: '#facilities' },
    { label: 'Social Map', href: '#social-map' },
    { label: 'Timeline', href: '#timeline' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Location', href: '#location' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#101820]/95 backdrop-blur-md text-[#FAF8F3] py-3 shadow-md border-b border-white/10'
            : 'bg-gradient-to-b from-[#101820]/90 via-[#101820]/60 to-transparent text-[#FAF8F3] py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Zone 1: Single text element wordmark */}
            <a
              href="#"
              className="text-xl sm:text-2xl font-bold tracking-tight font-display text-white hover:text-[#C66A45] transition-colors flex items-center gap-2"
            >
              <span>BED STATION</span>
              <span className="text-[10px] tracking-widest font-normal uppercase py-0.5 px-2 rounded bg-[#C66A45]/20 text-[#FAF8F3] border border-[#C66A45]/40 hidden xs:inline-block">
                AC DORM
              </span>
            </a>

            {/* Zone 2: Clean text navigation links */}
            <nav className="hidden lg:flex items-center gap-7 text-sm font-medium">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white/80 hover:text-white transition-colors hover:underline underline-offset-8"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Zone 3: 1-2 primary actions */}
            <div className="flex items-center gap-3">
              <a
                href={`tel:${HOSTEL_INFO.phoneTel}`}
                className="hidden sm:inline-flex items-center gap-2 text-xs font-semibold text-white/90 hover:text-white px-3 py-2 rounded-lg border border-white/20 hover:border-white/40 transition-colors whitespace-nowrap"
                title="Call Bed Station"
              >
                <Phone className="w-3.5 h-3.5 text-[#C66A45]" />
                <span>{HOSTEL_INFO.phone}</span>
              </a>

              <button
                onClick={onOpenBooking}
                className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#C66A45] hover:bg-[#b05836] rounded-lg transition-all duration-200 shadow-sm hover:shadow hover:-translate-y-0.5 whitespace-nowrap flex items-center gap-1.5"
              >
                <BedDouble className="w-3.5 h-3.5" />
                <span>BOOK YOUR BED</span>
              </button>

              {/* Mobile hamburger button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-white/90 hover:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C66A45]"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Smooth Mobile Menu Slide-over */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 lg:hidden flex flex-col bg-[#101820] text-[#FAF8F3] pt-24 pb-8 px-6 overflow-y-auto animate-in fade-in duration-200">
          <div className="flex flex-col gap-6 text-lg font-medium border-b border-white/10 pb-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 text-white/90 hover:text-[#C66A45] transition-colors border-b border-white/5"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-8 space-y-4">
            <div className="text-xs uppercase tracking-widest text-white/50">Direct Contact</div>
            <a
              href={`tel:${HOSTEL_INFO.phoneTel}`}
              className="flex items-center gap-3 text-sm text-white font-medium p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10"
            >
              <Phone className="w-4 h-4 text-[#C66A45]" />
              <span>Call: {HOSTEL_INFO.phone}</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 text-center text-sm font-semibold uppercase tracking-wider text-white bg-[#C66A45] hover:bg-[#b05836] rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <BedDouble className="w-4 h-4" />
              <span>BOOK YOUR BED</span>
            </button>
          </div>

          <div className="mt-auto pt-8 text-xs text-white/40 text-center">
            {HOSTEL_INFO.address}
          </div>
        </div>
      )}
    </>
  );
};
