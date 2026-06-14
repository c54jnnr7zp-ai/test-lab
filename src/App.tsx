import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Subjects from './components/Subjects';
import Features from './components/Features';
import About from './components/About';
import Pricing from './components/Pricing';
import Reviews from './components/Reviews';
import Mission from './components/Mission';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-brand-dark flex flex-col justify-between" id="applet-viewport-root">
      {/* 1. Global Navigation */}
      <Navbar />

      {/* 2. Page Sections */}
      <main className="flex-grow">
        {/* Hero Banner Grid Section */}
        <Hero />

        {/* Core Milestones Subjects List Section */}
        <Subjects />

        {/* Values Features Highlight Section */}
        <Features />

        {/* About Milestone Tracker Section (The Best Way To Learn Is With Us) */}
        <About />

        {/* Pricing Subscriptions Packages Section (At What Cost Is To Learn Here...) */}
        <Pricing />

        {/* Parent Testimonials Carousel (What Parents say...) */}
        <Reviews />

        {/* Mission Statement (Our Mission is to...) */}
        <Mission />

        {/* Student Registration Lead Form Section */}
        <Contact />
      </main>

      {/* 3. Global Footer */}
      <Footer />
    </div>
  );
}
