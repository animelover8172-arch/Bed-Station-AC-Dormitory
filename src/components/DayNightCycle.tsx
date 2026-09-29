import React, { useState } from 'react';
import { Sun, SunDim, Sunset, Moon, Clock } from 'lucide-react';
import { DAY_NIGHT_STEPS } from '../data/hostelData';

export const DayNightCycle: React.FC = () => {
  const [activeStepId, setActiveStepId] = useState<'morning' | 'afternoon' | 'evening' | 'night'>('morning');

  const activeStep = DAY_NIGHT_STEPS.find((s) => s.id === activeStepId) || DAY_NIGHT_STEPS[0];

  const getStepIcon = (id: string) => {
    switch (id) {
      case 'morning':
        return <Sun className="w-5 h-5 text-amber-500" />;
      case 'afternoon':
        return <SunDim className="w-5 h-5 text-teal-600" />;
      case 'evening':
        return <Sunset className="w-5 h-5 text-orange-500" />;
      case 'night':
        return <Moon className="w-5 h-5 text-indigo-400" />;
      default:
        return <Clock className="w-5 h-5" />;
    }
  };

  return (
    <section id="timeline" className="py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-500 relative" style={{ backgroundColor: activeStep.bgColor, color: activeStep.textColor }}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div
            className="text-xs uppercase tracking-widest font-semibold mb-3 flex items-center gap-2"
            style={{ color: activeStep.accentColor }}
          >
            <span>24-HOUR BACKPACKER RHYTHM</span>
            <span>·</span>
            <span>{activeStep.timeRange}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight leading-tight">
            DAY → NIGHT <br />
            <span className="font-editorial italic font-normal" style={{ color: activeStep.accentColor }}>
              HOSTEL EXPERIENCE.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg opacity-80 max-w-2xl leading-relaxed">
            See how Bed Station shifts with you throughout the day — from sunrise Ghat expeditions to afternoon air-conditioned chill sessions and late night quiet sleeps.
          </p>
        </div>

        {/* Phase Selectors Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-12">
          {DAY_NIGHT_STEPS.map((step) => {
            const isSelected = step.id === activeStepId;
            return (
              <button
                key={step.id}
                onClick={() => setActiveStepId(step.id)}
                className={`p-4 sm:p-5 rounded-2xl text-left border transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                  isSelected
                    ? 'ring-2 shadow-xl scale-[1.02]'
                    : 'opacity-70 hover:opacity-100 hover:scale-[1.01]'
                }`}
                style={{
                  backgroundColor: isSelected ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.04)',
                  borderColor: isSelected ? step.accentColor : 'rgba(128,128,128,0.2)',
                }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 rounded-xl bg-white/20">
                    {getStepIcon(step.id)}
                  </div>
                  <span className="text-[10px] font-mono opacity-60">
                    {step.timeRange}
                  </span>
                </div>

                <div>
                  <h4 className="text-base sm:text-lg font-bold font-display uppercase tracking-wider">
                    {step.title}
                  </h4>
                  <div className="text-xs opacity-75 font-medium mt-0.5">
                    {step.subtitle}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Stage Spotlight Card */}
        <div
          className="p-8 sm:p-12 rounded-3xl border transition-all duration-500 shadow-2xl relative overflow-hidden"
          style={{
            backgroundColor: activeStepId === 'night' || activeStepId === 'evening' ? '#16212B' : '#FFFFFF',
            borderColor: activeStep.accentColor,
            color: activeStepId === 'night' || activeStepId === 'evening' ? '#FAF8F3' : '#101820',
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div
                className="text-xs uppercase tracking-widest font-mono font-bold mb-2"
                style={{ color: activeStep.accentColor }}
              >
                ACTIVE TIMELINE PHASE: {activeStep.title} ({activeStep.timeRange})
              </div>

              <h3 className="text-2xl sm:text-4xl font-bold font-display tracking-tight mb-4">
                {activeStep.subtitle}
              </h3>

              <p className="text-base sm:text-xl opacity-85 leading-relaxed max-w-2xl mb-6">
                {activeStep.description}
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs font-mono opacity-70">
                <span>✓ AIR-CONDITIONED DORM</span>
                <span>·</span>
                <span>✓ PERSONAL FAN & CHARGER</span>
                <span>·</span>
                <span>✓ SECURE LOCKERS</span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 rounded-2xl bg-black/5 dark:bg-white/5 border border-white/10 text-center">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-3">
                {getStepIcon(activeStep.id)}
              </div>
              <span className="text-xs uppercase tracking-widest font-bold opacity-80">
                {activeStep.badge}
              </span>
              <span className="text-xs opacity-60 mt-1">
                Optimized for hostel life
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
