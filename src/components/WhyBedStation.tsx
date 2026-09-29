import React from 'react';
import { Wind, UserCheck, Zap, Lock, Sparkles, Smile } from 'lucide-react';
import { FEATURES } from '../data/hostelData';

const ICONS = [Wind, UserCheck, Zap, Lock, Sparkles, Smile];

export const WhyBedStation: React.FC = () => {
  return (
    <section id="facilities" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#FAF8F3] text-[#101820] relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs uppercase tracking-widest text-[#C66A45] font-semibold mb-3">
            HONEST HOSTEL COMFORT
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#101820] leading-tight text-balance">
            EVERYTHING YOU NEED. <br className="hidden sm:block" />
            <span className="font-editorial italic font-normal text-[#C66A45]">NOTHING YOU DON’T.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#101820]/70 max-w-2xl leading-relaxed">
            Built specifically around what true backpackers, solo explorers, and budget travellers
            value most: cold AC, pristine hygiene, secure lockers, and warm hospitality.
          </p>
        </div>

        {/* Feature Grid - strictly using supplied information */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {FEATURES.map((feature, idx) => {
            const IconComponent = ICONS[idx] || Sparkles;
            return (
              <div
                key={feature.id}
                className="bg-white rounded-2xl p-7 border border-[#101820]/8 shadow-sm hover:shadow-md hover:border-[#C66A45]/40 transition-all duration-200 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#F4EBDD] flex items-center justify-center text-[#C66A45] group-hover:bg-[#C66A45] group-hover:text-white transition-colors duration-200">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono text-[#101820]/40">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold tracking-tight text-[#101820] mb-2 font-display">
                    {feature.title}
                  </h3>

                  <p className="text-sm text-[#101820]/75 leading-relaxed mb-4">
                    {feature.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#101820]/5 flex items-center gap-2 text-xs font-medium text-[#527C78]">
                  <span>✓</span>
                  <span>{feature.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Verified Notice Footer */}
        <div className="mt-12 p-4 rounded-xl bg-[#F4EBDD]/60 border border-[#101820]/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[#101820]/60">
          <div>
            <strong className="text-[#101820] font-semibold">Strict Authenticity:</strong> All amenities listed are verified by guest feedback and actual on-site provisions.
          </div>
          <div className="font-mono text-[#C66A45]">
            4.5 / 5 ★ Based on 137 verified Google reviews
          </div>
        </div>
      </div>
    </section>
  );
};
