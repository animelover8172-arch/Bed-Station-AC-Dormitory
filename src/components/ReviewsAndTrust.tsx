import React, { useState } from 'react';
import { Star, ShieldCheck, Quote, ExternalLink, X } from 'lucide-react';
import { HOSTEL_INFO, REVIEWS } from '../data/hostelData';

export const ReviewsAndTrust: React.FC = () => {
  const [showReviewsModal, setShowReviewsModal] = useState(false);

  return (
    <section id="reviews" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#FAF8F3] text-[#101820] relative">
      <div className="max-w-7xl mx-auto">
        {/* Google Trust Credibility Card */}
        <div className="bg-[#101820] text-[#FAF8F3] rounded-3xl p-8 sm:p-12 mb-16 shadow-xl border border-[#101820]/10 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Big Rating Metrics */}
            <div className="lg:col-span-6 flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="flex flex-col items-center justify-center p-6 bg-white/10 rounded-2xl border border-white/15 min-w-[140px]">
                <div className="text-5xl sm:text-6xl font-bold font-display text-[#FAF8F3]">
                  {HOSTEL_INFO.rating}
                </div>
                <div className="flex items-center gap-1 text-amber-400 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-white/50 mt-1">
                  OUT OF 5
                </span>
              </div>

              <div>
                <div className="text-xs uppercase tracking-widest text-[#C66A45] font-mono font-bold mb-1 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" />
                  AUTHENTIC GUEST SCORE
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
                  137 Google Reviews
                </h3>
                <p className="text-sm text-white/70 mt-1">
                  {HOSTEL_INFO.name} — Maldahiya, Teliyabag
                </p>
                <div className="text-xs text-white/50 font-mono mt-2">
                  Independently reviewed by real travellers
                </div>
              </div>
            </div>

            {/* Right: CTA & Review Guarantee */}
            <div className="lg:col-span-6 flex flex-col sm:flex-row items-start sm:items-center justify-end gap-4">
              <button
                onClick={() => setShowReviewsModal(true)}
                className="px-6 py-3.5 bg-white text-[#101820] hover:bg-[#F4EBDD] font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md hover:shadow-lg flex items-center gap-2 cursor-pointer"
              >
                <span>VIEW REVIEWS</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#C66A45]" />
              </button>

              <a
                href={`tel:${HOSTEL_INFO.phoneTel}`}
                className="px-6 py-3.5 bg-[#C66A45] hover:bg-[#b05836] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center gap-2"
              >
                <span>CALL HOSTEL DESK</span>
              </a>
            </div>
          </div>
        </div>

        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs uppercase tracking-widest text-[#527C78] font-bold mb-3">
            GUEST EXPERIENCES
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#101820] leading-tight">
            TRAVELER <span className="font-editorial italic font-normal text-[#C66A45]">STORIES.</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#101820]/75 leading-relaxed">
            Real guest feedback left on Google. No fabricated testimonials or artificial ratings.
          </p>
        </div>

        {/* Real Review Excerpt Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl p-6 border border-[#101820]/8 shadow-sm flex flex-col justify-between hover:border-[#C66A45]/40 transition-all duration-200"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-[#C66A45]/30" />
                </div>

                <blockquote className="text-sm font-medium text-[#101820] leading-relaxed mb-4">
                  &ldquo;{review.quote}&rdquo;
                </blockquote>
              </div>

              <div className="pt-4 border-t border-[#101820]/5">
                <div className="text-xs font-semibold text-[#527C78]">
                  {review.highlight}
                </div>
                <div className="text-[11px] font-mono text-[#101820]/50 mt-0.5">
                  {review.source}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Verified Reviews Modal */}
      {showReviewsModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#FAF8F3] text-[#101820] rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-[#101820]/10 max-h-[85vh] overflow-y-auto relative">
            <button
              onClick={() => setShowReviewsModal(false)}
              className="absolute top-5 right-5 p-2 rounded-full bg-[#101820]/5 hover:bg-[#101820]/10 text-[#101820]"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#C66A45] text-white flex items-center justify-center text-lg font-bold">
                ★ 4.5
              </div>
              <div>
                <h3 className="text-xl font-bold font-display text-[#101820]">
                  Verified Google Reviews
                </h3>
                <p className="text-xs text-[#101820]/60">
                  {HOSTEL_INFO.name} · 137 Google Reviews
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {REVIEWS.map((rev) => (
                <div
                  key={rev.id}
                  className="p-4 rounded-xl bg-white border border-[#101820]/10"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-[#527C78]">
                      {rev.highlight}
                    </span>
                    <div className="flex items-center gap-0.5 text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-amber-500 text-amber-500" />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-[#101820]/85 italic">
                    &ldquo;{rev.quote}&rdquo;
                  </p>
                  <div className="text-[10px] font-mono text-[#101820]/40 mt-2">
                    {rev.source}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-[#101820]/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <span className="text-[#101820]/60">
                Want to ask the front desk directly?
              </span>
              <a
                href={`tel:${HOSTEL_INFO.phoneTel}`}
                className="px-4 py-2 bg-[#C66A45] hover:bg-[#b05836] text-white font-semibold rounded-lg text-xs"
              >
                Call: {HOSTEL_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
