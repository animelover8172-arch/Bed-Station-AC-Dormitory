import React, { useState } from 'react';
import { BedDouble, Fan, Zap, Lock, Info, Check } from 'lucide-react';
import { BED_HOTSPOTS, HOSTEL_IMAGES } from '../data/hostelData';
import { BedHotspot } from '../types';

export const BedExperience: React.FC = () => {
  const [activeHotspotId, setActiveHotspotId] = useState<string>('bed');

  const activeHotspot = BED_HOTSPOTS.find((h) => h.id === activeHotspotId) || BED_HOTSPOTS[0];

  const getIcon = (id: string) => {
    switch (id) {
      case 'fan':
        return <Fan className="w-4 h-4" />;
      case 'bed':
        return <BedDouble className="w-4 h-4" />;
      case 'charging':
        return <Zap className="w-4 h-4" />;
      case 'locker':
        return <Lock className="w-4 h-4" />;
      default:
        return <Info className="w-4 h-4" />;
    }
  };

  return (
    <section id="stay" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#101820] text-[#FAF8F3] relative overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 rounded-full bg-[#C66A45]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-80 h-80 rounded-full bg-[#527C78]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs uppercase tracking-widest text-[#C66A45] font-semibold mb-3">
            THE DORM POD ARCHITECTURE
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            YOUR OWN <span className="font-editorial italic font-normal text-[#F4EBDD]">LITTLE SPACE.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white/70 max-w-2xl leading-relaxed">
            In a shared hostel room, personal boundaries matter. Every bed at Bed Station is designed as a self-contained sanctuary with dedicated airflow, power, and security.
          </p>
        </div>

        {/* Interactive Bed Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left / Center: Interactive Bed Image with Hotspots (Desktop) */}
          <div className="lg:col-span-8 relative rounded-3xl overflow-hidden border border-white/10 bg-[#16212B] shadow-2xl group">
            <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full">
              <img
                src={HOSTEL_IMAGES.bedSpace}
                alt="Bed Station Dorm Bed Pod with Personal Fan and Charging"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101820]/90 via-transparent to-[#101820]/30 pointer-events-none" />

              {/* Desktop Hotspot Pulse Indicators */}
              <div className="hidden sm:block">
                {BED_HOTSPOTS.map((hotspot) => {
                  const isActive = hotspot.id === activeHotspotId;
                  return (
                    <div
                      key={hotspot.id}
                      style={{ top: `${hotspot.y}%`, left: `${hotspot.x}%` }}
                      className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
                    >
                      <button
                        onClick={() => setActiveHotspotId(hotspot.id)}
                        className={`relative group/btn flex items-center justify-center p-3 rounded-full transition-transform duration-200 cursor-pointer ${
                          isActive
                            ? 'bg-[#C66A45] text-white scale-125 ring-4 ring-[#C66A45]/30 shadow-lg'
                            : 'bg-white/85 hover:bg-white text-[#101820] hover:scale-110 shadow-md'
                        }`}
                        aria-label={`View details for ${hotspot.title}`}
                      >
                        {getIcon(hotspot.id)}

                        {/* Pulsing ring animation */}
                        <span
                          className={`absolute inset-0 rounded-full animate-ping pointer-events-none ${
                            isActive ? 'bg-[#C66A45]/40 opacity-75' : 'bg-white/30 opacity-40'
                          }`}
                        />
                      </button>

                      {/* Tooltip on active */}
                      {isActive && (
                        <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-3 w-56 p-3 rounded-xl bg-[#101820]/95 backdrop-blur-md border border-white/20 text-white text-xs shadow-2xl pointer-events-none animate-in fade-in zoom-in-95 duration-200 z-30">
                          <div className="font-bold text-[#F4EBDD] uppercase tracking-wider mb-1 flex items-center gap-1.5 font-display">
                            <span>●</span> {hotspot.title}
                          </div>
                          <div className="text-white/80 leading-snug">{hotspot.description}</div>
                          {/* Triangle beak */}
                          <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-[#101820]" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Bottom Image Label Overlay */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-white/80 bg-[#101820]/80 backdrop-blur-md py-2.5 px-4 rounded-xl border border-white/10">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>BED STATION AIR-CONDITIONED POD SPECIFICATION</span>
                </span>
                <span className="text-[#C66A45] font-semibold hidden md:inline">
                  CLICK HOTSPOTS TO INSPECT
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Information Cards (Interactive selector on desktop, stacked on mobile) */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs uppercase tracking-widest text-white/50 mb-2 font-mono">
              SPECIFICATION HOTSPOTS
            </div>

            {BED_HOTSPOTS.map((hotspot) => {
              const isSelected = hotspot.id === activeHotspotId;
              return (
                <div
                  key={hotspot.id}
                  onClick={() => setActiveHotspotId(hotspot.id)}
                  className={`p-4 rounded-2xl border transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-white/15 border-[#C66A45] shadow-lg translate-x-1 sm:translate-x-2'
                      : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2.5">
                      <div
                        className={`w-7 h-7 rounded-lg flex items-center justify-center ${
                          isSelected ? 'bg-[#C66A45] text-white' : 'bg-white/10 text-white/70'
                        }`}
                      >
                        {getIcon(hotspot.id)}
                      </div>
                      <h4 className="text-sm font-bold tracking-tight text-white font-display">
                        {hotspot.title}
                      </h4>
                    </div>

                    {isSelected && (
                      <span className="text-[11px] font-mono text-[#C66A45] flex items-center gap-1">
                        <Check className="w-3 h-3" /> ACTIVE
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-white/75 leading-relaxed pl-9">
                    {hotspot.description}
                  </p>
                </div>
              );
            })}

            {/* Price Preview Tag */}
            <div className="mt-4 p-4 rounded-2xl bg-[#C66A45]/20 border border-[#C66A45]/40 text-xs text-white flex items-center justify-between">
              <div>
                <span className="text-white/60 block">Transparent Base Rate:</span>
                <span className="text-lg font-bold text-white font-display">₹499 <span className="text-xs font-normal text-white/70">/ bed / night</span></span>
              </div>
              <a
                href="#booking"
                className="px-3.5 py-2 bg-[#C66A45] hover:bg-[#b05836] text-white font-semibold rounded-lg text-xs uppercase tracking-wider transition-colors"
              >
                Reserve Bed
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
