import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { siteContent } from '../content/siteContent';
import BrainLogo from './BrainLogo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');

  // Detect scroll to style navbar dynamically (blur + drop shadow)
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Determine active section for nav highlighting
      const sections = ['home', 'subjects', 'features', 'pricing', 'about', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(`#${section}`);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
      id="site-navigation-header"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="hover:opacity-90 transition-opacity">
          <BrainLogo />
        </a>

        {/* Desktop Main Links */}
        <nav className="hidden md:flex items-center gap-8 font-sans" id="desktop-nav-links">
          {siteContent.navigation.links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`font-medium text-[15px] transition-colors relative duration-200 py-1 ${
                activeSection === link.href
                  ? 'text-brand-pink font-semibold'
                  : 'text-brand-dark/80 hover:text-brand-pink'
              }`}
            >
              {link.name}
              {activeSection === link.href && (
                <motion.span
                  layoutId="activeUnderline"
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-pink rounded-full"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
        </nav>

        {/* Desktop CTA Action Buttons */}
        <div className="hidden lg:flex items-center gap-4 font-sans" id="desktop-action-buttons">
          <a
            href="#contact"
            className="bg-brand-pink hover:bg-brand-pink-hover text-white font-semibold text-sm px-6 py-2.5 rounded-full shadow-lg shadow-pink-500/10 hover:shadow-pink-500/20 active:scale-[0.98] transition-all"
            id="nav-btn-get-intouch"
          >
            {siteContent.navigation.ctaText}
          </a>
          <a
            href="#about"
            className="border-2 border-brand-pink text-brand-pink hover:bg-brand-pink/5 font-semibold text-sm px-6 py-2 rounded-full active:scale-[0.98] transition-all"
            id="nav-btn-about-us"
          >
            {siteContent.navigation.secondaryCtaText}
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-brand-dark focus:outline-none hover:bg-brand-purple-light rounded-full transition-colors"
          aria-label="Toggle Navigation Menu"
          id="mobile-nav-toggle-btn"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Overlay & Links */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden shadow-lg"
            id="mobile-menu-drawer"
          >
            <div className="px-6 py-5 flex flex-col gap-4">
              {siteContent.navigation.links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-medium py-2 transition-colors ${
                    activeSection === link.href
                      ? 'text-brand-pink font-semibold border-l-4 border-brand-pink pl-3'
                      : 'text-brand-dark/80 hover:text-brand-pink pl-0'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              
              <hr className="border-gray-100 my-2" />

              <div className="flex flex-col gap-3 pt-2">
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="bg-brand-pink hover:bg-brand-pink-hover text-white text-center font-semibold py-3 rounded-xl shadow-md transition-colors"
                  id="mobile-btn-contact"
                >
                  {siteContent.navigation.ctaText}
                </a>
                <a
                  href="#about"
                  onClick={() => setIsOpen(false)}
                  className="border-2 border-brand-pink text-brand-pink text-center font-semibold py-2.5 rounded-xl transition-colors"
                  id="mobile-btn-about"
                >
                  {siteContent.navigation.secondaryCtaText}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
