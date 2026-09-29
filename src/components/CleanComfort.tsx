import React from 'react';
import { Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';
import { HOSTEL_IMAGES } from '../data/hostelData';

export const CleanComfort: React.FC = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#FAF8F3] text-[#101820] border-t border-[#101820]/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Washroom & Hygiene Photography */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#101820]/10 aspect-[4/3]">
              <img
                src={HOSTEL_IMAGES.washroom}
                alt="Bed Station Clean and Hygienic Washrooms"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101820]/60 via-transparent to-transparent pointer-events-none" />

              {/* Real guest quote sticker overlay */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-[#101820]/10 shadow-lg">
                <div className="flex items-start gap-2.5">
                  <Sparkles className="w-4 h-4 text-[#C66A45] shrink-0 mt-0.5" />
                  <div>
                    <blockquote className="text-xs sm:text-sm italic text-[#101820] font-medium leading-snug">
                      &ldquo;The rooms and washrooms were very clean and well maintained.&rdquo;
                    </blockquote>
                    <span className="text-[10px] text-[#101820]/60 uppercase tracking-widest mt-1 block">
                      — Verified Google Review Excerpt
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Editorial Clean Space Copy */}
          <div className="lg:col-span-6 lg:pl-6">
            <div className="text-xs uppercase tracking-widest text-[#527C78] font-bold mb-3 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" />
              HYGIENE FIRST
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#101820] leading-tight mb-6">
              CLEAN SPACE. <br />
              <span className="font-editorial italic font-normal text-[#C66A45]">CLEAR MIND.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#101820]/80 leading-relaxed mb-6">
              Guests frequently mention the clean rooms, comfortable beds and well-maintained washrooms.
              After spending hours weaving through the dust, heat, and bustling ghats of Varanasi, returning to a spotlessly clean shower and fresh linens transforms your travel experience.
            </p>

            {/* Verified highlights based on guest reviews */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#527C78] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#101820] font-display">Regular Sanitation</h4>
                  <p className="text-xs text-[#101820]/70 mt-0.5">
                    Washroom facilities and shared areas are maintained regularly to ensure safe, hygienic comfort.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#527C78] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#101820] font-display">Fresh Bedding</h4>
                  <p className="text-xs text-[#101820]/70 mt-0.5">
                    Each dormitory bunk is prepared with fresh sheets, pillows, and clean duvets for every incoming traveller.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#527C78] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#101820] font-display">Peaceful Atmosphere</h4>
                  <p className="text-xs text-[#101820]/70 mt-0.5">
                    Thoughtfully managed quiet hours so you get real, uninterrupted rest.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
