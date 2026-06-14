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
              <img src="https://github.com/c54jnnr7zp-ai/Learning-Lab/blob/main/assets/aboutLogo-5cb4b8c4.png?raw=true" alt="" />
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
                {/* <div className="flex flex-col text-left justify-center select-none">
                  <span className="font-display font-extrabold text-[13px] text-brand-dark leading-none pb-0.5">
                    {badge.title}
                  </span>
                  <span className="font-sans text-[10px] font-bold text-gray-400 leading-none">
                    {badge.subtitle}
                  </span>
                </div> */}
              </motion.div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
