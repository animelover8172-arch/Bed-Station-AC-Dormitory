import React from 'react';
import { Phone, MapPin, ExternalLink, BedDouble } from 'lucide-react';
import { HOSTEL_INFO, DEVELOPER_INFO } from '../data/hostelData';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  return (
    <footer className="bg-[#101820] text-[#FAF8F3] pt-16 pb-12 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-white/10">
          {/* Brand & Identity Column */}
          <div className="lg:col-span-5 space-y-4">
            <div>
              <span className="text-2xl font-bold font-display tracking-tight text-white block">
                {HOSTEL_INFO.name}
              </span>
              <span className="text-xs uppercase tracking-widest text-[#C66A45] font-mono font-semibold">
                AC DORMITORY &amp; TRAVEL HUB
              </span>
            </div>

            {/* Travel Philosophy Inscription */}
            <div className="text-xl font-editorial italic text-[#F4EBDD] tracking-wide pt-1">
              जीवन • यात्रा • अनुभव
            </div>

            <p className="text-xs text-white/70 max-w-sm leading-relaxed">
              Modern Backpacker Hostel × Varanasi Travel Hub × Social Dormitory.
              Dedicated to clean beds, refreshing AC air, secure lockers, and genuine traveller camaraderie in Teliyabag.
            </p>

            <div className="pt-2 text-xs font-mono text-white/50">
              ⭐ 4.5 / 5 Rating on Google Reviews (137 Reviews)
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-white/50 font-mono font-semibold">
              QUICK LINKS
            </h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <a href="#stay" className="hover:text-[#C66A45] transition-colors">
                  Dorm Pods
                </a>
              </li>
              <li>
                <a href="#facilities" className="hover:text-[#C66A45] transition-colors">
                  Facilities
                </a>
              </li>
              <li>
                <a href="#social-map" className="hover:text-[#C66A45] transition-colors">
                  Social Map
                </a>
              </li>
              <li>
                <a href="#timeline" className="hover:text-[#C66A45] transition-colors">
                  Day &amp; Night Flow
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#C66A45] transition-colors">
                  Guest Reviews
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#C66A45] transition-colors">
                  Photo Journal
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-[#C66A45] transition-colors">
                  Hostel Location
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Booking Desk */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-white/50 font-mono font-semibold">
              HOSTEL CONTACT &amp; RESERVATION
            </h4>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-3">
              <div className="flex items-start gap-2.5 text-xs text-white/80">
                <MapPin className="w-4 h-4 text-[#C66A45] shrink-0 mt-0.5" />
                <span>{HOSTEL_INFO.address}</span>
              </div>

              <div className="flex items-center gap-2.5 text-xs text-white">
                <Phone className="w-4 h-4 text-[#C66A45] shrink-0" />
                <a href={`tel:${HOSTEL_INFO.phoneTel}`} className="hover:underline font-semibold font-mono">
                  {HOSTEL_INFO.phone}
                </a>
              </div>

              <button
                onClick={onOpenBooking}
                className="w-full py-2.5 bg-[#C66A45] hover:bg-[#b05836] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer mt-2"
              >
                <BedDouble className="w-4 h-4" />
                <span>BOOK YOUR BED</span>
              </button>
            </div>
          </div>
        </div>

        {/* Creator & Developer Credits Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <div>
            © {new Date().getFullYear()} Bed Station AC Dormitory. All rights reserved.
          </div>

          {/* RoadsideDeveloper Attribution Box */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono bg-white/5 py-2 px-4 rounded-xl border border-white/10">
            <span className="text-white/80 font-semibold">
              🌐 Designed &amp; Developed by {DEVELOPER_INFO.brand}
            </span>
            <span className="text-white/30 hidden sm:inline">|</span>
            <a
              href={DEVELOPER_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#527C78] hover:text-[#7ba9a4] transition-colors flex items-center gap-1"
            >
              <span>📱 WhatsApp: {DEVELOPER_INFO.whatsapp}</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <span className="text-white/30 hidden sm:inline">|</span>
            <a
              href={DEVELOPER_INFO.phoneTel}
              className="text-[#C66A45] hover:text-[#d97c56] transition-colors"
            >
              📞 Call: {DEVELOPER_INFO.phone}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
