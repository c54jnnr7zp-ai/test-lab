import React from 'react';
import { motion } from 'motion/react';
import { siteContent } from '../content/siteContent';

export default function About() {
  const { title, subtitle, description1, cta, imageCard, imgUrl } = siteContent.aboutSection;

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Text Column */}
          <motion.div
            className="lg:col-span-6 flex flex-col items-start gap-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            id="about-text"
          >
            <span className="font-sans text-[11px] font-bold text-gray-400 tracking-[0.25em] uppercase">
              {subtitle}
            </span>
            <h2 className="font-display text-4xl font-extrabold tracking-tight text-brand-dark leading-tight">
              {title}
            </h2>
            <p className="font-sans text-[15px] sm:text-base text-slate-500 leading-relaxed max-w-xl">
              {description1}
            </p>
            <a
              href={cta.href}
              className="px-6 py-2.5 rounded-full border-2 border-brand-pink text-brand-pink font-sans font-extrabold text-xs hover:bg-brand-pink hover:text-white transition-all duration-200"
            >
              {cta.text}
            </a>
          </motion.div>

          {/* Right Image Overlay Column */}
          <motion.div
            className="lg:col-span-6 relative w-full flex justify-center items-center"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            id="about-visuals"
          >
            {/* The main picture with a polaroid/styled border & shadow */}
            <div className="relative w-full max-w-[500px] aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-brand-dark/10 p-2 bg-white border border-slate-100">
              <img
                src={imgUrl}
                alt="Teacher in a classroom"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>

            {/* Overlap Card on Bottom Left */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -bottom-8 left-4 md:-left-8 max-w-[280px] sm:max-w-[320px] bg-white p-6 rounded-2xl border border-slate-100/50 shadow-xl shadow-brand-dark/8 flex flex-col gap-2 z-10"
              id="about-overlay-card"
            >
              <h4 className="font-display font-extrabold text-[15px] text-brand-dark">
                {imageCard.title}
              </h4>
              <p className="font-sans text-xs text-slate-500 leading-relaxed">
                {imageCard.description}
              </p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
