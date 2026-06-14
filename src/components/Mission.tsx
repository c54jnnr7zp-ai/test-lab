import React from 'react';
import { motion } from 'motion/react';
import { siteContent } from '../content/siteContent';

export default function Mission() {
  const { tag, title, description, stats, badge } = siteContent.missionSection;

  return (
    <section id="our-mission-section" className="py-12 bg-white relative" aria-label="Our Mission">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Core Container Card with Rounded Corners and Dark Background */}
        <div 
          className="bg-[#12111A] rounded-[32px] p-8 md:p-14 lg:p-16 text-white grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative overflow-hidden shadow-2xl"
          id="mission-card-wrapper"
        >
          {/* Subtle Ambient Glow Elements */}
          <div className="absolute -top-40 -left-40 w-[350px] h-[350px] bg-brand-pink/5 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-40 -right-40 w-[400px] h-[400px] bg-[#FFD23F]/5 rounded-full blur-[120px] pointer-events-none" />

          {/* Left Column: Text & Content */}
          <motion.div 
            className="lg:col-span-7 flex flex-col items-start text-left relative z-10"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            id="mission-left-details"
          >
            {/* Tag label */}
            <span className="font-sans text-[11px] font-black text-[#FF0055] tracking-[0.25em] uppercase mb-4">
              {tag}
            </span>

            {/* Title / Heading */}
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6 leading-[1.12]">
              {title}
            </h2>

            {/* Descriptive paragraph */}
            <p className="font-sans text-xs sm:text-sm lg:text-base text-slate-300 leading-relaxed font-medium mb-10 max-w-xl">
              {description}
            </p>

            {/* Two Statistics Items inside modern boxes */}
            <div className="grid grid-cols-2 gap-8 sm:gap-12 w-full pt-4 border-t border-white/5" id="mission-stats-group">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col text-left" id={`mission-stat-${idx}`}>
                  <span className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-none mb-2">
                    {stat.value}
                  </span>
                  <span className="font-sans text-[10px] sm:text-[11px] font-bold text-gray-400 tracking-[0.15em]">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: White Mascot Frame & Floating Badge */}
          <motion.div 
            className="lg:col-span-5 flex justify-center items-center relative z-10 w-full"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            id="mission-right-mascot"
          >
            {/* Rigid aspect-square white card with mascot illustration inside */}
            <div 
              className="bg-white rounded-3xl p-8 flex flex-col items-center justify-center border border-slate-100 shadow-2xl shadow-brand-dark/20 w-full max-w-[340px] sm:max-w-[360px] aspect-square relative"
              id="mascot-frame-card"
            >
              {/* Mascot Vector Drawing (Larger & precise details) */}
              <svg 
                viewBox="0 0 300 300"
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full select-none"
              >
                {/* Golden Yellow Sun backdrop behind mascot */}
                <circle cx="150" cy="130" r="72" fill="#FFC72C" />

                {/* Lightbulb glowing above mascot */}
                <g id="mascot-lightbulb">
                  <circle cx="150" cy="62" r="16" fill="#FFF275" opacity="0.3" />
                  <path d="M150 40V33" stroke="#12102E" strokeWidth="2" strokeLinecap="round" />
                  <path d="M132 48L126 43" stroke="#12102E" strokeWidth="2" strokeLinecap="round" />
                  <path d="M168 48L174 43" stroke="#12102E" strokeWidth="2" strokeLinecap="round" />
                  
                  <path d="M142 62C142 57 145 52 150 52C155 52 158 57 158 62C158 66 156 68 154 70L153.2 74H146.8L146 70C144 68 142 66 142 62Z" fill="#FFF275" stroke="#12102E" strokeWidth="2" />
                  <rect x="146.5" y="74" width="7" height="4" rx="1.5" fill="#A4B0BE" stroke="#12102E" strokeWidth="1.5" />
                  <path d="M149.5" y="78" />
                </g>

                {/* Heavy Barbell Rod crossing behind */}
                <path d="M45 110H255" stroke="#12102E" strokeWidth="4.5" strokeLinecap="round" />

                {/* Plate weights Left */}
                <rect x="30" y="88" width="15" height="44" rx="6" fill="#FF3838" stroke="#12102E" strokeWidth="2.2" />
                <rect x="20" y="96" width="10" height="28" rx="4" fill="#FF3838" stroke="#12102E" strokeWidth="2.2" />

                {/* Plate weights Right */}
                <rect x="255" y="88" width="15" height="44" rx="6" fill="#FF3838" stroke="#12102E" strokeWidth="2.2" />
                <rect x="270" y="96" width="10" height="28" rx="4" fill="#FF3838" stroke="#12102E" strokeWidth="2.2" />

                {/* Pink Brain Body shape */}
                <path 
                  d="M100 162C86 162 80 148 90 130C86 114 100 98 118 106C126 94 148 94 156 106C164 94 186 94 194 106C212 98 226 114 222 130C232 148 226 162 212 162C212 176 100 176 100 162Z" 
                  fill="#FF8DA1" 
                  stroke="#12102E" 
                  strokeWidth="3.2" 
                  strokeLinejoin="round" 
                />

                {/* Cerebral crevices details */}
                <path d="M92 136C88 132 92 122 100 126" stroke="#FF5B81" strokeWidth="3" strokeLinecap="round" fill="none" />
                <path d="M90 148C93 153 103 152 103 144" stroke="#FF5B81" strokeWidth="3" strokeLinecap="round" fill="none" />
                <path d="M112 162C115 154 108 146 102 146" stroke="#FF5B81" strokeWidth="3" strokeLinecap="round" fill="none" />
                
                <path d="M208 136C212 132 208 122 200 126" stroke="#FF5B81" strokeWidth="3" strokeLinecap="round" fill="none" />
                <path d="M210 148C207 153 197 152 197 144" stroke="#FF5B81" strokeWidth="3" strokeLinecap="round" fill="none" />
                <path d="M188 162C185 154 192 146 198 146" stroke="#FF5B81" strokeWidth="3" strokeLinecap="round" fill="none" />
                
                <path d="M150 106C147 114 138 118 142 128" stroke="#FF5B81" strokeWidth="3" strokeLinecap="round" fill="none" />
                <path d="M150 106C153 114 162 118 158 128" stroke="#FF5B81" strokeWidth="3" strokeLinecap="round" fill="none" />

                {/* Arms gripping rod */}
                <path d="M112 130C103 124 99 108 96 110" stroke="#FF8DA1" strokeWidth="8" strokeLinecap="round" fill="none" />
                <path d="M112 130C103 124 99 108 96 110" stroke="#12102E" strokeWidth="2.2" strokeLinecap="round" fill="none" />

                <path d="M188 130C197 124 201 108 204 110" stroke="#FF8DA1" strokeWidth="8" strokeLinecap="round" fill="none" />
                <path d="M188 130C197 124 201 108 204 110" stroke="#12102E" strokeWidth="2.2" strokeLinecap="round" fill="none" />

                {/* Big cute cartoon eyes */}
                <ellipse cx="128" cy="138" rx="6.5" ry="8" fill="#12102E" />
                <circle cx="125.5" cy="135" r="2.2" fill="#FFFFFF" />

                <ellipse cx="172" cy="138" rx="6.5" ry="8" fill="#12102E" />
                <circle cx="169.5" cy="135" r="2.2" fill="#FFFFFF" />

                {/* Blushing cheeks & happy mouth */}
                <circle cx="116" cy="146" r="4.5" fill="#FF5B81" opacity="0.6" />
                <circle cx="184" cy="146" r="4.5" fill="#FF5B81" opacity="0.6" />
                <path d="M142 147C142 153 158 153 158 147" stroke="#12102E" strokeWidth="2.8" strokeLinecap="round" fill="none" />

                {/* Little cartoon legs */}
                <path d="M125 166V180" stroke="#FF8DA1" strokeWidth="6.5" strokeLinecap="round" />
                <path d="M125 166V180" stroke="#12102E" strokeWidth="2" strokeLinecap="round" />
                <path d="M125 180H118" stroke="#12102E" strokeWidth="2" strokeLinecap="round" />

                <path d="M175 166V180" stroke="#FF8DA1" strokeWidth="6.5" strokeLinecap="round" />
                <path d="M175 166V180" stroke="#12102E" strokeWidth="2" strokeLinecap="round" />
                <path d="M175 180H182" stroke="#12102E" strokeWidth="2" strokeLinecap="round" />

                {/* Learning LAB text logo under character */}
                <g transform="translate(150, 230)">
                  <text 
                    textAnchor="middle" 
                    y="0" 
                    fill="#12102E" 
                    fontSize="32" 
                    fontWeight="900" 
                    fontFamily="Inter, system-ui, sans-serif" 
                    letterSpacing="-1"
                  >
                    learning
                  </text>
                  <text 
                    textAnchor="middle" 
                    y="24" 
                    fill="#FF0055" 
                    fontSize="18" 
                    fontWeight="800" 
                    fontFamily="Inter, system-ui, sans-serif" 
                    letterSpacing="8"
                  >
                    LAB
                  </text>
                </g>
              </svg>

              {/* Overflowing White Pill Badge on Bottom Right */}
              <motion.div 
                className="absolute -bottom-6 -right-4 sm:-right-8 bg-white px-5 py-3.5 rounded-2xl border border-slate-100 shadow-xl flex items-center gap-3 z-20"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                id="mission-overlay-badge"
              >
                {/* Red square identifier box */}
                <div 
                  className="w-10 h-10 rounded-xl bg-[#FF0055] flex items-center justify-center font-display font-black text-white text-sm select-none flex-shrink-0"
                  id="overlay-initials-badge"
                >
                  {badge.initials}
                </div>

                {/* Information copy */}
                <div className="flex flex-col text-left justify-center select-none">
                  <span className="font-display font-extrabold text-[13px] text-brand-dark leading-none pb-0.5">
                    {badge.title}
                  </span>
                  <span className="font-sans text-[10px] font-bold text-gray-400 leading-none">
                    {badge.subtitle}
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
