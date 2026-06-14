import React from 'react';
import { motion } from 'motion/react';
import { siteContent } from '../content/siteContent';
import HeroIllustration from './HeroIllustration';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-white to-pink-50/20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Text and Content Side */}
          <motion.div
            className="lg:col-span-7 flex flex-col items-start gap-6 text-left order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            id="hero-text-content"
          >
            {/* Heading Section */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-brand-dark" id="hero-title">
              <span className="text-brand-pink">
                {siteContent.hero.highlightedText}
              </span>
              {siteContent.hero.headingRest}
            </h1>

            {/* Subtitle Description */}
            <p className="font-sans text-base sm:text-lg text-brand-dark/70 leading-relaxed max-w-xl" id="hero-subtitle">
              {siteContent.hero.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mt-2" id="hero-cta-buttons">
              <a
                href={siteContent.hero.primaryCta.href}
                className="bg-brand-pink hover:bg-brand-pink-hover text-white font-semibold px-8 py-4 rounded-xl shadow-lg shadow-pink-500/20 hover:shadow-pink-500/30 active:scale-[0.98] transition-all text-base block text-center"
                id="hero-btn-primary"
              >
                {siteContent.hero.primaryCta.text}
              </a>
              <a
                href={siteContent.hero.secondaryCta.href}
                className="border-2 border-brand-pink text-brand-pink hover:bg-brand-pink/5 font-semibold px-8 py-3.5 rounded-xl active:scale-[0.98] transition-all text-base block text-center"
                id="hero-btn-secondary"
              >
                {siteContent.hero.secondaryCta.text}
              </a>
            </div>
          </motion.div>

          {/* Right Mascot Vector Illustration Side */}
          <motion.div
            className="lg:col-span-5 flex justify-center items-center relative order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
            id="hero-vector-content"
          >
            <img src='https://github.com/c54jnnr7zp-ai/Learning-Lab/blob/main/assets/learning-lab-hero.png?raw=true' alt="Tutoring" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
