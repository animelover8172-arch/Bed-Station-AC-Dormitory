import React from 'react';
import { MapPin, Navigation, Phone, Compass, Info } from 'lucide-react';
import { HOSTEL_INFO } from '../data/hostelData';

export const LocationSection: React.FC = () => {
  return (
    <section id="location" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#FAF8F3] text-[#101820] relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Location & Directions Information */}
          <div className="lg:col-span-6">
            <div className="text-xs uppercase tracking-widest text-[#C66A45] font-mono font-bold mb-3 flex items-center gap-1.5">
              <Compass className="w-4 h-4" />
              LOCATION &amp; ARRIVAL
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#101820] leading-tight mb-6">
              FIND YOUR WAY TO <br />
              <span className="font-editorial italic font-normal text-[#C66A45]">BED STATION.</span>
            </h2>

            <div className="p-6 rounded-2xl bg-white border border-[#101820]/10 shadow-sm mb-6">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#C66A45] shrink-0 mt-1" />
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-[#101820] font-display mb-1">
                    Official Hostel Address
                  </h4>
                  <p className="text-sm text-[#101820]/80 leading-relaxed">
                    {HOSTEL_INFO.address}
                  </p>
                  <div className="mt-3 inline-flex items-center gap-1.5 text-xs text-[#527C78] font-semibold bg-[#527C78]/10 px-2.5 py-1 rounded-md">
                    <Info className="w-3.5 h-3.5" />
                    <span>Landmark: Opposite Sardar Patel Dharamshala</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact & Directions CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-6">
              <a
                href={HOSTEL_INFO.googleMapsQuery}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-[#C66A45] hover:bg-[#b05836] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
              >
                <Navigation className="w-4 h-4" />
                <span>GET DIRECTIONS</span>
              </a>

              <a
                href={`tel:${HOSTEL_INFO.phoneTel}`}
                className="px-6 py-3.5 bg-white hover:bg-[#F4EBDD] text-[#101820] font-bold text-xs uppercase tracking-wider rounded-xl border border-[#101820]/15 transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#C66A45]" />
                <span>CALL: {HOSTEL_INFO.phone}</span>
              </a>
            </div>

            <div className="text-xs text-[#101820]/60 space-y-1">
              <p>• Convenient access point in Teliyabag, Maldahiya corridor.</p>
              <p>• Auto-rickshaws and cabs easily reach Opp. Sardar Patel Dharamshala.</p>
            </div>
          </div>

          {/* Right: Modern Rounded Map Frame */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#101820]/10 bg-[#101820] aspect-[4/3] sm:aspect-[16/11]">
              <iframe
                title="Bed Station AC Dormitory Location Map"
                src="https://maps.google.com/maps?q=Bed+Station+AC+Dormitory+Maldahiya+Teliyabag+Varanasi&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'contrast(1.05)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />

              {/* Map Floating Info Badge */}
              <div className="absolute top-4 left-4 right-4 bg-[#101820]/90 backdrop-blur-md text-white p-3 rounded-xl border border-white/10 flex items-center justify-between text-xs pointer-events-none">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#C66A45] animate-pulse" />
                  <span className="font-semibold font-display">BED STATION AC DORMITORY</span>
                </div>
                <span className="text-white/60 font-mono text-[11px]">TELIYABAG</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
