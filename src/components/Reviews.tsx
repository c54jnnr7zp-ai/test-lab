import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { siteContent } from '../content/siteContent';

export default function Reviews() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollContainerRef.current;
    if (el) {
      setCanScrollLeft(el.scrollLeft > 5);
      setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 5);
    }
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (el) {
      el.addEventListener('scroll', checkScroll);
      checkScroll();
      window.addEventListener('resize', checkScroll);
    }
    return () => {
      if (el) el.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, []);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -340, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 340, behavior: 'smooth' });
    }
  };

  const reviews = siteContent.reviewsSection.items;

  return (
    <section id="reviews" className="py-24 bg-[#Eef1f6]/40 relative" aria-label="Parent Reviews">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Heading Label & Title */}
        <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col gap-3">
          <span className="font-sans text-[11px] font-bold text-gray-400 tracking-[0.25em] uppercase">
            PARENT REVIEW
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-brand-dark"
          >
            {siteContent.reviewsSection.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-sans text-xs sm:text-sm text-slate-500 max-w-xl mx-auto leading-relaxed"
          >
            parents review on learning lab and how its amazing that their children are really enjoying our Support
          </motion.p>
        </div>

        {/* Carousel / Swipe Container Wrapper */}
        <div className="relative group/reviews">
          
          {/* Helpful Navigation Arrows on desktop hover too! */}
          <button
            onClick={scrollLeft}
            className={`absolute -left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white shadow-xl border border-gray-100 text-brand-dark hover:text-brand-pink hover:scale-105 transition-all hidden md:flex items-center justify-center ${
              canScrollLeft ? 'opacity-100 pointer-events-auto' : 'opacity-40 pointer-events-none'
            }`}
            aria-label="Scroll Left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={scrollRight}
            className={`absolute -right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white shadow-xl border border-gray-100 text-brand-dark hover:text-brand-pink hover:scale-105 transition-all hidden md:flex items-center justify-center ${
              canScrollRight ? 'opacity-100 pointer-events-auto' : 'opacity-40 pointer-events-none'
            }`}
            aria-label="Scroll Right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Swipeable List for Mobile, Scrollable Row for Desktop */}
          <div
            ref={scrollContainerRef}
            className="overflow-x-auto overflow-y-hidden flex gap-6 pb-8 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-pink-100 scroll-smooth"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            {reviews.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="snap-start min-w-[290px] sm:min-w-[340px] max-w-[340px] flex-shrink-0 bg-white rounded-2xl p-6 border border-gray-100/80 shadow-lg shadow-brand-dark/[0.02] flex flex-col justify-between hover:shadow-xl hover:shadow-brand-dark/[0.04] transition-all duration-300"
                id={`review-card-${item.id}`}
              >
                {/* Content Block */}
                <div className="flex flex-col gap-4">
                  {/* Parent User Header */}
                  <div className="flex items-center gap-4">
                    <img
                      src={item.imgUrl}
                      alt={item.name}
                      referrerPolicy="no-referrer"
                      className="w-12 h-12 rounded-full object-cover border border-slate-100 shadow-inner flex-shrink-0"
                    />
                    <div className="flex flex-col text-left">
                      <h4 className="font-display font-extrabold text-[15px] text-brand-dark tracking-tight">
                        {item.name}
                      </h4>
                      <span className="font-sans text-[11px] font-bold text-gray-400">
                        {item.role}
                      </span>
                    </div>
                  </div>

                  {/* Review Text */}
                  <p className="font-sans text-xs sm:text-sm text-slate-500 leading-relaxed text-left min-h-[72px]">
                    "{item.review}"
                  </p>
                </div>

                {/* Rating Footer block */}
                <div className="mt-5 pt-4 border-t border-slate-50 flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < item.rating
                          ? 'fill-[#FBBF24] text-[#FBBF24]'
                          : 'text-slate-200 fill-none'
                      }`}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Sweep Hint Footer dots for screen touch indicators */}
          <div className="flex justify-center gap-2 mt-2">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  if (scrollContainerRef.current) {
                    scrollContainerRef.current.scrollTo({
                      left: idx * 364,
                      behavior: 'smooth'
                    });
                  }
                }}
                className="w-2 h-2 rounded-full bg-slate-300 hover:bg-brand-pink transition-colors"
                aria-label={`Go to review ${idx + 1}`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
