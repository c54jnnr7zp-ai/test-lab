import React from 'react';
import { siteContent } from '../content/siteContent';
import BrainLogo from './BrainLogo';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white/80 py-16 border-t border-white/5 relative" id="site-footer">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Info */}
          <div className="md:col-span-2 flex flex-col items-start gap-4">
            <a href="#home">
              {/* White text custom theme brand logo version */}
              <div className="flex items-center gap-3">
                <BrainLogo showText={false} className="h-10 w-auto" />
                <span className="font-display font-bold tracking-tight text-xl text-white flex flex-col leading-none">
                  <span>Learning</span>
                  <span className="text-[10px] tracking-[0.25em] text-brand-pink font-semibold">LAB</span>
                </span>
              </div>
            </a>
            <p className="font-sans text-sm text-white/60 leading-relaxed max-w-sm mt-2">
              Learning Lab is dedicated to nurturing early mathematical readiness, confidence, test resiliency, and lifetime intellectual curiosity for Foundation Phase students.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="flex flex-col gap-4">
            <h4 className="font-display font-bold text-sm tracking-widest text-[#FF0055] uppercase">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {siteContent.navigation.links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-sans text-sm text-white/70 hover:text-[#FF0055] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#about"
                  className="font-sans text-sm text-white/70 hover:text-[#FF0055] transition-colors"
                >
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Essential Info & Security */}
          <div className="flex flex-col gap-4">
            <h4 className="font-display font-bold text-sm tracking-widest text-[#FF0055] uppercase">
              Parent Resources
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#subjects" className="font-sans text-sm text-white/70 hover:text-[#FF0055] transition-colors">
                  Foundation Curriculum
                </a>
              </li>
              <li>
                <a href="#contact" className="font-sans text-sm text-white/70 hover:text-[#FF0055] transition-colors">
                  Student Registration
                </a>
              </li>
              <li>
                <span className="font-sans text-xs text-white/40 block mt-4 border-l border-brand-pink pl-3">
                  All our tutors are thoroughly background vetted & certified for educational child protective safety.
                </span>
              </li>
            </ul>
          </div>

        </div>

        <hr className="border-white/5 my-8" />

        {/* Bottom copyright section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40 font-sans">
          <p>{siteContent.footer.copyright}</p>
          <div className="flex items-center gap-6">
            {siteContent.footer.links.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="hover:text-[#FF0055] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
