import React from 'react';
import { Compass, Flame, Sun, Footprints, Eye, Sparkles } from 'lucide-react';
import { HOSTEL_IMAGES } from '../data/hostelData';

interface VaranasiTravelProps {
  onExploreClick: () => void;
}

export const VaranasiTravel: React.FC<VaranasiTravelProps> = ({ onExploreClick }) => {
  const travelMoments = [
    {
      title: 'Ghat Atmosphere',
      desc: 'Centuries of devotion, chants, and river breeze blending into a sacred tapestry.',
      icon: Eye,
    },
    {
      title: 'Sunrise on Ganges',
      desc: 'Wooden boats gliding across golden mist as the ancient city awakens.',
      icon: Sun,
    },
    {
      title: 'Narrow Street Mazes',
      desc: 'Hidden courtyards, earthen tea stalls, incense makers, and sacred corridors.',
      icon: Footprints,
    },
    {
      title: 'Evening Aarti Lights',
      desc: 'Lamps swirling to synchronized brass gongs along the eternal water steps.',
      icon: Flame,
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#101820] text-[#FAF8F3] relative overflow-hidden">
      {/* Background cinematic banner with overlay */}
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 mb-16">
          <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full">
            <img
              src={HOSTEL_IMAGES.ghatDawn}
              alt="Misty Dawn Over Ganges Varanasi"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center filter brightness-[0.6]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#101820] via-[#101820]/40 to-transparent" />

            <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-12 max-w-3xl">
              <div className="text-xs font-mono uppercase tracking-widest text-[#C66A45] mb-2 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                SPIRITUAL CAPITAL OF INDIA
              </div>
              <h2 className="text-3xl sm:text-6xl font-bold tracking-tight text-white mb-4 leading-tight">
                VARANASI IS <span className="font-editorial italic font-normal text-[#F4EBDD]">WAITING.</span>
              </h2>
              <p className="text-base sm:text-xl text-white/90 font-light leading-relaxed max-w-2xl mb-6">
                Varanasi is not merely a destination; it is an overwhelming rush of life, music, mystery, and peace. Bed Station puts you right in Teliyabag to experience it all.
              </p>
              <div>
                <button
                  onClick={onExploreClick}
                  className="px-6 py-3 bg-[#C66A45] hover:bg-[#b05836] text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors inline-flex items-center gap-2 cursor-pointer"
                >
                  <Compass className="w-4 h-4" />
                  <span>EXPLORE VARANASI</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Abstract Travel Moments Bento */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {travelMoments.map((moment, idx) => {
            const Icon = moment.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#C66A45]/50 transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-xl bg-[#C66A45]/20 text-[#C66A45] flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white font-display mb-2">
                  {moment.title}
                </h4>
                <p className="text-xs text-white/70 leading-relaxed">
                  {moment.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Genuine Travel Notice */}
        <div className="mt-8 text-center text-xs text-white/40 font-mono">
          Authentic Varanasi encounters await without artificial tourist hype.
        </div>
      </div>
    </section>
  );
};
