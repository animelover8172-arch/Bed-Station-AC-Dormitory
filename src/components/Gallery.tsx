import React, { useState } from 'react';
import { Maximize2, X, Eye } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/hostelData';
import { GalleryPhoto } from '../types';

export const Gallery: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'dorm' | 'social' | 'washroom' | 'varanasi'>('all');
  const [activePhoto, setActivePhoto] = useState<GalleryPhoto | null>(null);

  const filteredItems =
    filter === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === filter);

  return (
    <section id="gallery" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#FAF8F3] text-[#101820] relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs uppercase tracking-widest text-[#C66A45] font-semibold mb-3">
              VISUAL JOURNAL
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#101820] leading-tight">
              HOSTEL &amp; <span className="font-editorial italic font-normal text-[#C66A45]">VARANASI.</span>
            </h2>
            <p className="mt-2 text-base text-[#101820]/70 max-w-xl">
              Authentic scenes from our air-conditioned bunks, spotless washrooms, and the timeless city outside.
            </p>
          </div>

          {/* Interactive Category Filter Tabs (Zero pill discipline: functional segmented buttons) */}
          <div className="flex items-center gap-1.5 p-1.5 bg-[#F4EBDD] rounded-xl border border-[#101820]/10 overflow-x-auto max-w-full">
            {[
              { id: 'all', label: 'All' },
              { id: 'dorm', label: 'Dorm Bunks' },
              { id: 'social', label: 'Common Lounge' },
              { id: 'washroom', label: 'Washrooms' },
              { id: 'varanasi', label: 'Varanasi' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as any)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                  filter === tab.id
                    ? 'bg-[#C66A45] text-white shadow-sm'
                    : 'text-[#101820]/70 hover:text-[#101820] hover:bg-white/40'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Travel-Magazine Masonry Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((photo, idx) => (
            <div
              key={photo.id}
              onClick={() => setActivePhoto(photo)}
              className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-[#101820]/10 bg-white cursor-pointer"
            >
              <div
                className={`relative w-full overflow-hidden ${
                  idx % 3 === 1 ? 'aspect-[3/4]' : 'aspect-[4/3]'
                }`}
              >
                <img
                  src={photo.url}
                  alt={photo.title}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101820]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Hover overlay details */}
                <div className="absolute inset-0 p-5 flex flex-col justify-end text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-bold font-display">{photo.title}</h4>
                      <p className="text-xs text-white/80 line-clamp-1">{photo.caption}</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Caption Bar */}
              <div className="p-4 border-t border-[#101820]/5 flex items-center justify-between text-xs">
                <span className="font-semibold text-[#101820] font-display">{photo.title}</span>
                <span className="text-[#C66A45] font-mono uppercase tracking-wider text-[11px] flex items-center gap-1">
                  <Eye className="w-3 h-3" /> View
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setActivePhoto(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#101820] rounded-3xl overflow-hidden border border-white/20 shadow-2xl text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActivePhoto(null)}
              className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 hover:bg-black text-white transition-colors"
              aria-label="Close image modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="max-h-[75vh] w-full overflow-hidden flex items-center justify-center bg-black">
              <img
                src={activePhoto.url}
                alt={activePhoto.title}
                referrerPolicy="no-referrer"
                className="max-h-[75vh] w-full object-contain"
              />
            </div>

            <div className="p-6 bg-[#101820] border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold font-display text-white">{activePhoto.title}</h3>
                <p className="text-sm text-white/70 mt-1">{activePhoto.caption}</p>
              </div>

              <div className="text-xs font-mono text-[#C66A45]">
                BED STATION ARCHIVE
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
