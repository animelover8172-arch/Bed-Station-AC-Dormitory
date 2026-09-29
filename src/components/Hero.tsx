import React from 'react';
import { Compass, Moon, Users, ArrowRight, MapPin, Sparkles } from 'lucide-react';
import { VibeMode } from '../types';
import { HOSTEL_INFO, VIBE_CONTENT, HOSTEL_IMAGES } from '../data/hostelData';

interface HeroProps {
  currentVibe: VibeMode;
  onSelectVibe: (vibe: VibeMode) => void;
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ currentVibe, onSelectVibe, onOpenBooking }) => {
  const activeVibeData = VIBE_CONTENT[currentVibe];

  return (
    <section className="relative min-h-[92vh] sm:min-h-screen flex flex-col justify-between pt-28 pb-12 px-4 sm:px-6 lg:px-8 bg-[#101820] text-[#FAF8F3] overflow-hidden">
      {/* Background Hero Image with measured contrast scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={HOSTEL_IMAGES.heroDorm}
          alt="Bed Station AC Dormitory Varanasi"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center filter brightness-[0.45] contrast-[1.05] scale-105 transition-transform duration-1000 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#101820] via-[#101820]/70 to-[#101820]/40" />
        <div className="absolute inset-0 paper-grain opacity-20 pointer-events-none" />
      </div>

      {/* Top Location & Concept Banner */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-4">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4 text-xs font-mono tracking-widest text-white/70">
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-[#C66A45]" />
            <span className="font-semibold text-white tracking-widest">TELIYABAG • VARANASI</span>
            <span className="text-white/40 hidden sm:inline">|</span>
            <span className="text-white/60 hidden sm:inline">OPP. SARDAR PATEL DHARAMSHALA</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[#C66A45] font-semibold">★ 4.5 / 5</span>
            <span className="text-white/50">·</span>
            <span>137 Google Reviews</span>
          </div>
        </div>
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto py-10">
        <div className="max-w-3xl">
          {/* Travel Sequence Kicker */}
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-display tracking-widest text-[#FAF8F3]/90 mb-4 bg-white/10 px-3.5 py-1.5 rounded border border-white/15 backdrop-blur-sm">
            <span className="text-[#C66A45] font-bold">CONCEPT:</span>
            <span>ARRIVE</span>
            <span className="text-white/40">→</span>
            <span>CHECK-IN</span>
            <span className="text-white/40">→</span>
            <span>MEET</span>
            <span className="text-white/40">→</span>
            <span>REST</span>
            <span className="text-white/40">→</span>
            <span className="text-[#F4EBDD]">EXPLORE</span>
          </div>

          {/* Large Heading */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.08] text-balance">
            YOUR BED IN <span className="font-editorial italic font-normal text-[#F4EBDD]">VARANASI.</span>
          </h1>

          {/* Small Supporting Line */}
          <p className="text-lg sm:text-2xl text-white/90 font-light mb-8 max-w-2xl leading-relaxed">
            Sleep comfortably. Meet fellow travellers. Wake up ready to explore.
          </p>

          {/* Interactive "WHAT'S YOUR VIBE?" Segmented Control */}
          <div className="mb-10 p-4 sm:p-5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 max-w-xl transition-all duration-300">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs uppercase tracking-widest text-white/70 font-semibold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#C66A45]" />
                WHAT’S YOUR VIBE RIGHT NOW?
              </span>
              <span className="text-[11px] text-white/50">Changes hostel mood</span>
            </div>

            <div className="grid grid-cols-3 gap-2 p-1 bg-[#101820]/60 rounded-lg border border-white/10">
              <button
                type="button"
                onClick={() => onSelectVibe('explore')}
                className={`py-2 px-3 text-xs sm:text-sm font-semibold rounded-md transition-all flex items-center justify-center gap-1.5 ${
                  currentVibe === 'explore'
                    ? 'bg-[#C66A45] text-white shadow-md'
                    : 'text-white/70 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>🌅</span>
                <span>EXPLORE</span>
              </button>

              <button
                type="button"
                onClick={() => onSelectVibe('rest')}
                className={`py-2 px-3 text-xs sm:text-sm font-semibold rounded-md transition-all flex items-center justify-center gap-1.5 ${
                  currentVibe === 'rest'
                    ? 'bg-[#527C78] text-white shadow-md'
                    : 'text-white/70 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>🌙</span>
                <span>REST</span>
              </button>

              <button
                type="button"
                onClick={() => onSelectVibe('connect')}
                className={`py-2 px-3 text-xs sm:text-sm font-semibold rounded-md transition-all flex items-center justify-center gap-1.5 ${
                  currentVibe === 'connect'
                    ? 'bg-[#FAF8F3] text-[#101820] shadow-md font-bold'
                    : 'text-white/70 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>🧑🤝🧑</span>
                <span>CONNECT</span>
              </button>
            </div>

            {/* Dynamic Vibe Result */}
            <div className="mt-3 pt-3 border-t border-white/10 flex items-start gap-3 animate-in fade-in duration-300">
              <span className="text-xl">{activeVibeData.emoji}</span>
              <div>
                <p className="text-sm font-medium text-white">{activeVibeData.headline}</p>
                <p className="text-xs text-white/70 mt-0.5">{activeVibeData.description}</p>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={onOpenBooking}
              className="px-8 py-4 bg-[#C66A45] hover:bg-[#b05836] text-white text-sm font-bold uppercase tracking-wider rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-3 text-center cursor-pointer"
            >
              <span>BOOK YOUR BED</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#stay"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white text-sm font-semibold uppercase tracking-wider rounded-lg border border-white/25 transition-all text-center flex items-center justify-center gap-2"
            >
              <span>EXPLORE BED STATION</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Ticker / Brand Philosophy Bar */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-6 border-t border-white/10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs font-mono text-white/60">
          <div className="tracking-widest uppercase font-semibold text-white/90">
            &ldquo;SLEEP. MEET. EXPLORE. REPEAT.&rdquo;
          </div>
          <div className="flex items-center gap-4 text-white/50">
            <span>MODERN BACKPACKER HOSTEL</span>
            <span>·</span>
            <span>VARANASI TRAVEL HUB</span>
            <span>·</span>
            <span>BUDGET PREMIUM STAY</span>
          </div>
        </div>
      </div>
    </section>
  );
};
