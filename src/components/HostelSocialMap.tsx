import React, { useState } from 'react';
import { BedDouble, Users, Utensils, Compass, Undo2, Navigation } from 'lucide-react';
import { SOCIAL_MAP_NODES } from '../data/hostelData';

export const HostelSocialMap: React.FC = () => {
  const [selectedNodeId, setSelectedNodeId] = useState<string>('explore');

  const selectedNode =
    SOCIAL_MAP_NODES.find((node) => node.id === selectedNodeId) || SOCIAL_MAP_NODES[0];

  const getNodeIcon = (id: string) => {
    switch (id) {
      case 'sleep':
        return <BedDouble className="w-4 h-4" />;
      case 'meet':
        return <Users className="w-4 h-4" />;
      case 'eat':
        return <Utensils className="w-4 h-4" />;
      case 'explore':
        return <Compass className="w-4 h-4" />;
      case 'return':
        return <Undo2 className="w-4 h-4" />;
      default:
        return <Navigation className="w-4 h-4" />;
    }
  };

  return (
    <section id="social-map" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#FAF8F3] text-[#101820] relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs uppercase tracking-widest text-[#C66A45] font-semibold mb-3">
            YOUR TRAVEL BASECAMP
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#101820] leading-tight text-balance">
            THE HOSTEL <span className="font-editorial italic font-normal text-[#C66A45]">SOCIAL MAP.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#101820]/75 max-w-2xl leading-relaxed">
            In Varanasi, life pulses in cycles. Bed Station is the steady center of your journey: wake, meet other wandering souls, step out into the timeless city, and return to a clean, cool sanctuary.
          </p>
        </div>

        {/* The Interactive Visual Map Canvas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Canvas: SVG Radar / Map Visualizer */}
          <div className="lg:col-span-8 bg-[#101820] rounded-3xl p-6 sm:p-10 text-white relative overflow-hidden shadow-xl min-h-[420px] sm:min-h-[480px] flex items-center justify-center">
            {/* Background Grid Pattern & Concentric Rings */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FAF8F3_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              {/* Concentric rings radiating from center (50, 50) */}
              <circle cx="50" cy="50" r="22" fill="none" stroke="rgba(255,255,255,0.08)" strokeDasharray="2,2" />
              <circle cx="50" cy="50" r="38" fill="none" stroke="rgba(255,255,255,0.06)" />

              {/* Dynamic Animated Connecting Lines to each Node */}
              {SOCIAL_MAP_NODES.map((node) => {
                const isSelected = node.id === selectedNodeId;
                return (
                  <line
                    key={node.id}
                    x1="50"
                    y1="50"
                    x2={node.x}
                    y2={node.y}
                    stroke={isSelected ? '#C66A45' : 'rgba(255,255,255,0.18)'}
                    strokeWidth={isSelected ? '0.9' : '0.4'}
                    strokeDasharray={isSelected ? '2,1' : 'none'}
                    className={isSelected ? 'transition-all duration-300' : ''}
                  />
                );
              })}
            </svg>

            {/* Central Node: BED STATION */}
            <div className="relative z-20 flex flex-col items-center text-center cursor-default">
              <div className="relative">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#C66A45] text-white flex flex-col items-center justify-center p-2 shadow-2xl border-4 border-[#101820] ring-4 ring-[#C66A45]/30">
                  <span className="text-[10px] font-mono tracking-widest uppercase opacity-80">BASE</span>
                  <span className="text-xs sm:text-sm font-bold font-display uppercase tracking-tight">BED STATION</span>
                </div>
                {/* Glowing wave */}
                <div className="absolute inset-0 rounded-full border border-[#C66A45] animate-ping opacity-40 pointer-events-none" />
              </div>
              <div className="mt-2 text-[11px] font-mono text-white/60 tracking-wider">
                TELIYABAG • VARANASI
              </div>
            </div>

            {/* Surrounding Nodes positioned by percentage */}
            {SOCIAL_MAP_NODES.map((node) => {
              const isSelected = node.id === selectedNodeId;
              return (
                <div
                  key={node.id}
                  style={{ top: `${node.y}%`, left: `${node.x}%` }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
                >
                  <button
                    onClick={() => setSelectedNodeId(node.id)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-xl transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? 'bg-[#F4EBDD] text-[#101820] font-bold shadow-xl scale-110 ring-2 ring-[#C66A45]'
                        : 'bg-[#16212B]/90 hover:bg-white/20 text-white/90 border border-white/15 backdrop-blur-sm'
                    }`}
                  >
                    <span
                      className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs ${
                        isSelected ? 'bg-[#C66A45] text-white' : 'bg-white/10 text-white/80'
                      }`}
                    >
                      {getNodeIcon(node.id)}
                    </span>
                    <span className="text-xs uppercase tracking-wider font-display">{node.label}</span>
                  </button>
                </div>
              );
            })}

            {/* Floating Hint */}
            <div className="absolute bottom-3 left-4 text-[11px] font-mono text-white/40">
              CLICK ANY PHASE TO EXPLORE THE CYCLE
            </div>
          </div>

          {/* Right Column: Node Details & Philosophy */}
          <div className="lg:col-span-4 bg-white rounded-3xl p-7 border border-[#101820]/10 shadow-sm flex flex-col justify-between min-h-[380px]">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#101820]/10 mb-5">
                <span className="text-xs uppercase tracking-widest text-[#527C78] font-bold">
                  ACTIVE TRAVEL STAGE
                </span>
                <span className="text-xs font-mono text-[#101820]/40">
                  TRAVEL CYCLE
                </span>
              </div>

              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-[#C66A45]/15 text-[#C66A45] flex items-center justify-center">
                  {getNodeIcon(selectedNode.id)}
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-display text-[#101820]">
                    {selectedNode.label}
                  </h3>
                  <div className="text-xs text-[#C66A45] font-medium font-mono">
                    {selectedNode.tagline}
                  </div>
                </div>
              </div>

              <p className="text-base text-[#101820]/80 mt-4 leading-relaxed">
                {selectedNode.subtitle}. Bed Station anchors your Varanasi adventure so you can immerse fully without worry.
              </p>
            </div>

            {/* Travel Routine List */}
            <div className="pt-6 border-t border-[#101820]/10 space-y-2 text-xs text-[#101820]/70">
              <div className="flex items-center justify-between py-1">
                <span className="font-semibold text-[#101820]">Morning Rhythm</span>
                <span>Sunrise exploration</span>
              </div>
              <div className="flex items-center justify-between py-1">
                <span className="font-semibold text-[#101820]">Afternoon Sanctuary</span>
                <span>Air-conditioned recharge</span>
              </div>
              <div className="flex items-center justify-between py-1">
                <span className="font-semibold text-[#101820]">Evening Social</span>
                <span>Ghat aarti & travel discussions</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
