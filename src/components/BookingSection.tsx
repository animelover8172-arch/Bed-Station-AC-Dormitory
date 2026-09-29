import React, { useState } from 'react';
import { Calendar, Users, Phone, BedDouble, Check, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';
import { HOSTEL_INFO } from '../data/hostelData';

interface BookingSectionProps {
  onOpenBookingModal: (details: {
    checkIn: string;
    checkOut: string;
    guests: number;
    dormType: string;
    totalEstimate: number;
  }) => void;
}

export const BookingSection: React.FC<BookingSectionProps> = ({ onOpenBookingModal }) => {
  // Set default dates: check-in today/tomorrow
  const today = new Date().toISOString().split('T')[0];
  const tomorrow = new Date(Date.now() + 86400000).toISOString().split('T')[0];

  const [checkIn, setCheckIn] = useState<string>(today);
  const [checkOut, setCheckOut] = useState<string>(tomorrow);
  const [guests, setGuests] = useState<number>(1);
  const [dormType, setDormType] = useState<string>('AC Dormitory Bed');

  // Calculate nights
  const nights = Math.max(
    1,
    Math.round(
      (new Date(checkOut).getTime() - new Date(checkIn).getTime()) / (1000 * 60 * 60 * 24)
    ) || 1
  );

  const pricePerBed = HOSTEL_INFO.basePricePerBed;
  const totalEstimate = nights * guests * pricePerBed;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenBookingModal({
      checkIn,
      checkOut,
      guests,
      dormType,
      totalEstimate,
    });
  };

  return (
    <section id="booking" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#101820] text-[#FAF8F3] relative overflow-hidden">
      {/* Background radial accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C66A45]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="text-xs uppercase tracking-widest text-[#C66A45] font-mono font-bold mb-3 flex items-center justify-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            DIRECT DESK RESERVATION
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            READY FOR YOUR <br className="hidden sm:block" />
            <span className="font-editorial italic font-normal text-[#F4EBDD]">
              NEXT ADVENTURE?
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white/70 max-w-xl mx-auto leading-relaxed">
            Reserve your clean air-conditioned bunk in Teliyabag. Transparent pricing, zero hidden charges, and authentic backpacker vibes.
          </p>
        </div>

        {/* Booking Card & Form */}
        <div className="max-w-4xl mx-auto bg-[#16212B] rounded-3xl p-6 sm:p-10 border border-white/15 shadow-2xl">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {/* Check-In */}
              <div className="bg-white/5 rounded-2xl p-4 border border-white/10 hover:border-[#C66A45]/50 transition-colors">
                <label className="text-[11px] font-mono uppercase tracking-wider text-white/60 block mb-1.5 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#C66A45]" />
                  Check-In
                </label>
                <input
                  type="date"
                  min={today}
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full bg-transparent text-sm font-semibold text-white focus:outline-none focus:ring-0 [color-scheme:dark]"
                  required
                />
              </div>

              {/* Check-Out */}
              <div className="bg-white/5 rounded-2xl p-4 border border-white/10 hover:border-[#C66A45]/50 transition-colors">
                <label className="text-[11px] font-mono uppercase tracking-wider text-white/60 block mb-1.5 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#C66A45]" />
                  Check-Out
                </label>
                <input
                  type="date"
                  min={checkIn || today}
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full bg-transparent text-sm font-semibold text-white focus:outline-none focus:ring-0 [color-scheme:dark]"
                  required
                />
              </div>

              {/* Guests Count */}
              <div className="bg-white/5 rounded-2xl p-4 border border-white/10 hover:border-[#C66A45]/50 transition-colors">
                <label className="text-[11px] font-mono uppercase tracking-wider text-white/60 block mb-1.5 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-[#C66A45]" />
                  Guests / Beds
                </label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                  className="w-full bg-[#16212B] text-sm font-semibold text-white focus:outline-none focus:ring-0 [color-scheme:dark] cursor-pointer"
                >
                  {[1, 2, 3, 4, 5, 6, 8, 10].map((num) => (
                    <option key={num} value={num} className="bg-[#16212B] text-white">
                      {num} {num === 1 ? 'Bed / Guest' : 'Beds / Guests'}
                    </option>
                  ))}
                </select>
              </div>

              {/* Room Type */}
              <div className="bg-white/5 rounded-2xl p-4 border border-white/10 hover:border-[#C66A45]/50 transition-colors">
                <label className="text-[11px] font-mono uppercase tracking-wider text-white/60 block mb-1.5 flex items-center gap-1.5">
                  <BedDouble className="w-3.5 h-3.5 text-[#C66A45]" />
                  Bed Category
                </label>
                <select
                  value={dormType}
                  onChange={(e) => setDormType(e.target.value)}
                  className="w-full bg-[#16212B] text-sm font-semibold text-white focus:outline-none focus:ring-0 [color-scheme:dark] cursor-pointer"
                >
                  <option value="AC Dormitory Bed">AC Dormitory Bed</option>
                  <option value="Male AC Dormitory Bed">Male AC Dormitory</option>
                  <option value="Female AC Dormitory Bed">Female AC Dormitory</option>
                </select>
              </div>
            </div>

            {/* Price Preview & Transparency Banner */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs text-white/60 block">Estimated Stay ({nights} {nights === 1 ? 'Night' : 'Nights'}, {guests} {guests === 1 ? 'Bed' : 'Beds'}):</span>
                <div className="flex items-baseline gap-2 mt-0.5">
                  <span className="text-2xl sm:text-3xl font-bold font-display text-[#F4EBDD]">
                    ₹{totalEstimate}
                  </span>
                  <span className="text-xs text-white/50">
                    (₹{pricePerBed} / bed / night)
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-[#527C78] bg-[#527C78]/15 px-3 py-1.5 rounded-lg border border-[#527C78]/30">
                <ShieldCheck className="w-4 h-4" />
                <span>Zero Prepayment Required · Pay At Check-In</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                type="submit"
                className="flex-1 py-4 px-6 bg-[#C66A45] hover:bg-[#b05836] text-white text-sm font-bold uppercase tracking-wider rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>BOOK YOUR BED</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`tel:${HOSTEL_INFO.phoneTel}`}
                className="flex-1 py-4 px-6 bg-white/10 hover:bg-white/15 text-white text-sm font-bold uppercase tracking-wider rounded-xl border border-white/20 transition-all flex items-center justify-center gap-2 text-center"
              >
                <Phone className="w-4 h-4 text-[#C66A45]" />
                <span>CALL TO BOOK: {HOSTEL_INFO.phone}</span>
              </a>
            </div>
          </form>

          {/* Guarantee Badges */}
          <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-white/60">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-400" />
              <span>Instant Desk Verification</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-400" />
              <span>AC Dorm with Personal Locker</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-400" />
              <span>Opp. Sardar Patel Dharamshala</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
