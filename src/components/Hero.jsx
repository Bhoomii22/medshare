import React from 'react';
import { ShieldCheck, Award, Lock, ArrowRight, UserCheck } from 'lucide-react';

export default function Hero({ onDonateClick, onRequestClick }) {
  // Lightened pill pattern array using mid teal #5DCAA5, mint #10B981, light mint #9FE1CB, and white highlights
  const lightPillPattern = [
    // Row 1 & Top Edge
    { type: 'capsule', x: 50, y: 40, rot: 25, w: 70, h: 28, c1: '#5DCAA5', c2: '#10B981', stroke: '#FFFFFF' },
    { type: 'tablet', x: 170, y: 30, rot: 0, r: 22, color: '#9FE1CB', highlight: '#FFFFFF' },
    { type: 'capsule', x: 270, y: 70, rot: -40, w: 80, h: 32, c1: '#10B981', c2: '#9FE1CB', stroke: '#FFFFFF' },
    { type: 'tablet', x: 390, y: 40, rot: 15, r: 26, color: '#5DCAA5', highlight: '#FFFFFF' },
    { type: 'capsule', x: 500, y: 80, rot: 60, w: 75, h: 30, c1: '#A7F3D0', c2: '#5DCAA5', stroke: '#FFFFFF' },
    { type: 'tablet', x: 620, y: 35, rot: -20, r: 20, color: '#10B981', highlight: '#FFFFFF' },
    { type: 'capsule', x: 730, y: 65, rot: 35, w: 85, h: 34, c1: '#9FE1CB', c2: '#5DCAA5', stroke: '#FFFFFF' },
    { type: 'tablet', x: 860, y: 40, rot: 45, r: 24, color: '#5DCAA5', highlight: '#FFFFFF' },
    { type: 'capsule', x: 970, y: 75, rot: -15, w: 70, h: 28, c1: '#10B981', c2: '#A7F3D0', stroke: '#FFFFFF' },
    { type: 'tablet', x: 1090, y: 30, rot: 10, r: 28, color: '#9FE1CB', highlight: '#FFFFFF' },
    { type: 'capsule', x: 1210, y: 70, rot: 50, w: 80, h: 32, c1: '#5DCAA5', c2: '#10B981', stroke: '#FFFFFF' },
    { type: 'tablet', x: 1330, y: 45, rot: -30, r: 22, color: '#A7F3D0', highlight: '#FFFFFF' },

    // Row 2 & Upper Body
    { type: 'tablet', x: 30, y: 160, rot: -10, r: 24, color: '#9FE1CB', highlight: '#FFFFFF' },
    { type: 'capsule', x: 120, y: 180, rot: 75, w: 85, h: 34, c1: '#5DCAA5', c2: '#A7F3D0', stroke: '#FFFFFF' },
    { type: 'tablet', x: 230, y: 150, rot: 40, r: 18, color: '#10B981', highlight: '#FFFFFF' },
    { type: 'capsule', x: 330, y: 200, rot: -55, w: 70, h: 28, c1: '#9FE1CB', c2: '#10B981', stroke: '#FFFFFF' },
    { type: 'tablet', x: 440, y: 170, rot: 20, r: 25, color: '#5DCAA5', highlight: '#FFFFFF' },
    { type: 'capsule', x: 560, y: 210, rot: 15, w: 80, h: 32, c1: '#10B981', c2: '#5DCAA5', stroke: '#FFFFFF' },
    { type: 'tablet', x: 680, y: 160, rot: -45, r: 22, color: '#A7F3D0', highlight: '#FFFFFF' },
    { type: 'capsule', x: 790, y: 195, rot: 80, w: 75, h: 30, c1: '#5DCAA5', c2: '#9FE1CB', stroke: '#FFFFFF' },
    { type: 'tablet', x: 910, y: 165, rot: 30, r: 26, color: '#10B981', highlight: '#FFFFFF' },
    { type: 'capsule', x: 1020, y: 205, rot: -25, w: 85, h: 34, c1: '#9FE1CB', c2: '#5DCAA5', stroke: '#FFFFFF' },
    { type: 'tablet', x: 1140, y: 160, rot: 65, r: 20, color: '#5DCAA5', highlight: '#FFFFFF' },
    { type: 'capsule', x: 1260, y: 190, rot: -70, w: 75, h: 30, c1: '#10B981', c2: '#A7F3D0', stroke: '#FFFFFF' },

    // Row 3 & Mid Area
    { type: 'capsule', x: 70, y: 290, rot: -30, w: 80, h: 32, c1: '#5DCAA5', c2: '#10B981', stroke: '#FFFFFF' },
    { type: 'tablet', x: 180, y: 280, rot: 50, r: 26, color: '#A7F3D0', highlight: '#FFFFFF' },
    { type: 'capsule', x: 290, y: 320, rot: 40, w: 75, h: 30, c1: '#9FE1CB', c2: '#5DCAA5', stroke: '#FFFFFF' },
    { type: 'tablet', x: 400, y: 295, rot: -15, r: 20, color: '#10B981', highlight: '#FFFFFF' },
    { type: 'capsule', x: 510, y: 330, rot: 70, w: 85, h: 34, c1: '#5DCAA5', c2: '#A7F3D0', stroke: '#FFFFFF' },
    { type: 'tablet', x: 630, y: 290, rot: 35, r: 28, color: '#9FE1CB', highlight: '#FFFFFF' },
    { type: 'capsule', x: 740, y: 325, rot: -60, w: 70, h: 28, c1: '#10B981', c2: '#5DCAA5', stroke: '#FFFFFF' },
    { type: 'tablet', x: 850, y: 285, rot: -10, r: 22, color: '#5DCAA5', highlight: '#FFFFFF' },
    { type: 'capsule', x: 960, y: 335, rot: 45, w: 80, h: 32, c1: '#A7F3D0', c2: '#9FE1CB', stroke: '#FFFFFF' },
    { type: 'tablet', x: 1070, y: 290, rot: -75, r: 24, color: '#10B981', highlight: '#FFFFFF' },
    { type: 'capsule', x: 1190, y: 320, rot: 20, w: 75, h: 30, c1: '#5DCAA5', c2: '#10B981', stroke: '#FFFFFF' },
    { type: 'tablet', x: 1310, y: 285, rot: 55, r: 20, color: '#9FE1CB', highlight: '#FFFFFF' },

    // Row 4 & Lower Mid
    { type: 'tablet', x: 40, y: 410, rot: 25, r: 22, color: '#10B981', highlight: '#FFFFFF' },
    { type: 'capsule', x: 140, y: 440, rot: -65, w: 85, h: 34, c1: '#9FE1CB', c2: '#5DCAA5', stroke: '#FFFFFF' },
    { type: 'tablet', x: 250, y: 420, rot: -40, r: 28, color: '#5DCAA5', highlight: '#FFFFFF' },
    { type: 'capsule', x: 360, y: 455, rot: 30, w: 75, h: 30, c1: '#A7F3D0', c2: '#10B981', stroke: '#FFFFFF' },
    { type: 'tablet', x: 470, y: 415, rot: 60, r: 19, color: '#9FE1CB', highlight: '#FFFFFF' },
    { type: 'capsule', x: 580, y: 460, rot: -20, w: 80, h: 32, c1: '#5DCAA5', c2: '#9FE1CB', stroke: '#FFFFFF' },
    { type: 'tablet', x: 690, y: 420, rot: 15, r: 25, color: '#10B981', highlight: '#FFFFFF' },
    { type: 'capsule', x: 800, y: 450, rot: 75, w: 70, h: 28, c1: '#A7F3D0', c2: '#5DCAA5', stroke: '#FFFFFF' },
    { type: 'tablet', x: 920, y: 415, rot: -50, r: 23, color: '#9FE1CB', highlight: '#FFFFFF' },
    { type: 'capsule', x: 1030, y: 460, rot: 10, w: 85, h: 34, c1: '#5DCAA5', c2: '#10B981', stroke: '#FFFFFF' },
    { type: 'tablet', x: 1150, y: 410, rot: -30, r: 27, color: '#10B981', highlight: '#FFFFFF' },
    { type: 'capsule', x: 1270, y: 445, rot: 65, w: 75, h: 30, c1: '#9FE1CB', c2: '#A7F3D0', stroke: '#FFFFFF' },

    // Row 5 & Bottom Edge
    { type: 'capsule', x: 60, y: 550, rot: 40, w: 75, h: 30, c1: '#5DCAA5', c2: '#10B981', stroke: '#FFFFFF' },
    { type: 'tablet', x: 160, y: 560, rot: -70, r: 24, color: '#9FE1CB', highlight: '#FFFFFF' },
    { type: 'capsule', x: 270, y: 575, rot: 15, w: 85, h: 34, c1: '#10B981', c2: '#A7F3D0', stroke: '#FFFFFF' },
    { type: 'tablet', x: 380, y: 555, rot: 45, r: 21, color: '#5DCAA5', highlight: '#FFFFFF' },
    { type: 'capsule', x: 490, y: 580, rot: -35, w: 70, h: 28, c1: '#9FE1CB', c2: '#5DCAA5', stroke: '#FFFFFF' },
    { type: 'tablet', x: 600, y: 545, rot: -10, r: 26, color: '#10B981', highlight: '#FFFFFF' },
    { type: 'capsule', x: 710, y: 585, rot: 50, w: 80, h: 32, c1: '#5DCAA5', c2: '#9FE1CB', stroke: '#FFFFFF' },
    { type: 'tablet', x: 820, y: 550, rot: 30, r: 20, color: '#A7F3D0', highlight: '#FFFFFF' },
    { type: 'capsule', x: 930, y: 575, rot: -80, w: 75, h: 30, c1: '#10B981', c2: '#5DCAA5', stroke: '#FFFFFF' },
    { type: 'tablet', x: 1040, y: 540, rot: -20, r: 28, color: '#9FE1CB', highlight: '#FFFFFF' },
    { type: 'capsule', x: 1160, y: 580, rot: 35, w: 85, h: 34, c1: '#5DCAA5', c2: '#10B981', stroke: '#FFFFFF' },
    { type: 'tablet', x: 1290, y: 550, rot: -60, r: 22, color: '#A7F3D0', highlight: '#FFFFFF' }
  ];

  return (
    <section className="relative pt-16 pb-20 md:pt-20 md:pb-28 overflow-hidden bg-[#E8F5F0] border-b border-med-slate-200">
      
      {/* 1. Dense scattered lightened pill/capsule background pattern (Edge-to-Edge) */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <svg 
          className="w-full h-full object-cover min-w-[1200px] min-h-[600px]" 
          viewBox="0 0 1400 650" 
          preserveAspectRatio="xMidYMid slice"
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {lightPillPattern.map((p, i) => {
            if (p.type === 'capsule') {
              const radius = p.h / 2;
              return (
                <g key={i} transform={`translate(${p.x}, ${p.y}) rotate(${p.rot})`}>
                  {/* Left half fill */}
                  <path 
                    d={`M 0 0 L ${p.w / 2} 0 L ${p.w / 2} ${p.h} L 0 ${p.h} A ${radius} ${radius} 0 0 1 0 0 Z`} 
                    fill={p.c1} 
                  />
                  {/* Right half fill */}
                  <path 
                    d={`M ${p.w / 2} 0 L ${p.w} 0 A ${radius} ${radius} 0 0 1 ${p.w} ${p.h} L ${p.w / 2} ${p.h} Z`} 
                    fill={p.c2} 
                  />
                  {/* Outer capsule contour */}
                  <rect 
                    x="0" 
                    y="0" 
                    width={p.w} 
                    height={p.h} 
                    rx={radius} 
                    fill="none"
                  />
                  {/* White center dividing line */}
                  <line 
                    x1={p.w / 2} 
                    y1="0" 
                    x2={p.w / 2} 
                    y2={p.h} 
                    stroke={p.stroke} 
                    strokeWidth="1.5" 
                  />
                </g>
              );
            } else {
              // Round Tablet shape with white highlight ellipse near one edge
              return (
                <g key={i} transform={`translate(${p.x}, ${p.y}) rotate(${p.rot})`}>
                  {/* Round Tablet base circle */}
                  <circle cx="0" cy="0" r={p.r} fill={p.color} />
                  {/* Tablet center score groove line */}
                  <line x1={-p.r + 6} y1="0" x2={p.r - 6} y2="0" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />
                  {/* White highlight ellipse near upper-left edge for flat dimension */}
                  <ellipse cx={-p.r / 3} cy={-p.r / 3} rx={p.r / 3.5} ry={p.r / 5} fill={p.highlight} opacity="0.8" transform="rotate(-30)" />
                </g>
              );
            }
          })}
        </svg>
      </div>

      {/* 2. Soft white wash overlay (45-50% opacity) */}
      <div className="absolute inset-0 bg-white/48 z-10 pointer-events-none" />

      {/* 3. Centered Hero Content (Dark text on light background) */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center space-y-8">
        
        {/* Accreditation Chip — Teal text on white glass pill */}
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-[#0F766E]/20 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-[#0F766E] animate-pulse" />
          <span className="text-xs font-semibold text-[#0F766E] uppercase tracking-wider">
            Accredited State Pharmacy Rescue System
          </span>
        </div>

        {/* Headline — Dark Navy #0A2540, 32px+ bold/medium */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#0A2540] leading-[1.12]">
          Rescuing Unused Medicine. <br className="hidden sm:inline" />
          <span className="text-[#0F766E]">Delivering Verified Care.</span>
        </h1>

        {/* Subhead */}
        <p className="text-lg sm:text-xl text-[#0A2540]/80 font-normal leading-relaxed max-w-2xl mx-auto">
          MedShare safely collects unexpired, sealed surplus medications from donors and redistributes them directly to patients in need through licensed pharmacist inspection.
        </p>

        {/* Split Equal CTAs Centered */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-3.5 sm:space-y-0 sm:space-x-4 pt-2">
          {/* Primary Button — Teal #0F766E */}
          <button 
            onClick={onDonateClick}
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white bg-[#0F766E] hover:bg-[#0D655E] rounded-xl shadow-sm transition-all active:scale-[0.98]"
          >
            Donate medicine
            <ArrowRight className="w-4 h-4 ml-2.5 stroke-[2]" />
          </button>

          {/* Secondary Button — Navy-outlined ghost button */}
          <button 
            onClick={onRequestClick}
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-[#0A2540] bg-white/80 border-2 border-[#0A2540] hover:bg-[#0A2540] hover:text-white rounded-xl shadow-sm transition-all active:scale-[0.98]"
          >
            Request medicine
            <ArrowRight className="w-4 h-4 ml-2.5 stroke-[2]" />
          </button>
        </div>

        {/* Centered Trust Badge Row — Dark Navy text with Teal icon accents */}
        <div className="pt-8 border-t border-[#0A2540]/15">
          <p className="text-xs font-semibold text-[#0F766E] uppercase tracking-wider mb-4">
            Compliance & Trust Assurances
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto">
            
            <div className="flex items-center justify-center space-x-2 bg-white/80 backdrop-blur-md px-3.5 py-2.5 rounded-xl border border-[#0F766E]/20 shadow-xs">
              <UserCheck className="w-4 h-4 text-[#0F766E] flex-shrink-0" />
              <span className="text-xs font-medium text-[#0A2540]">Pharmacist verified</span>
            </div>

            <div className="flex items-center justify-center space-x-2 bg-white/80 backdrop-blur-md px-3.5 py-2.5 rounded-xl border border-[#0F766E]/20 shadow-xs">
              <Award className="w-4 h-4 text-[#0F766E] flex-shrink-0" />
              <span className="text-xs font-medium text-[#0A2540]">Licensed partners</span>
            </div>

            <div className="flex items-center justify-center space-x-2 bg-white/80 backdrop-blur-md px-3.5 py-2.5 rounded-xl border border-[#0F766E]/20 shadow-xs">
              <Lock className="w-4 h-4 text-[#0F766E] flex-shrink-0" />
              <span className="text-xs font-medium text-[#0A2540]">Data secure</span>
            </div>

            <div className="flex items-center justify-center space-x-2 bg-white/80 backdrop-blur-md px-3.5 py-2.5 rounded-xl border border-[#0F766E]/20 shadow-xs">
              <ShieldCheck className="w-4 h-4 text-[#0F766E] flex-shrink-0" />
              <span className="text-xs font-medium text-[#0A2540]">Chain-of-custody</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
