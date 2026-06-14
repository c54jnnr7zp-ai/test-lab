import React from 'react';
import { motion } from 'motion/react';
import { School, BookOpen } from 'lucide-react';
import { siteContent } from '../content/siteContent';

export default function Subjects() {
  return (
    <section id="subjects" className="py-20 bg-white relative" aria-label="Our Subjects">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Heading Label & Title */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16 flex flex-col gap-2">
          <span className="font-sans text-[11px] font-bold text-gray-400 tracking-[0.25em] uppercase">
            {siteContent.subjectsSection.subtitle}
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-brand-dark"
          >
            {siteContent.subjectsSection.title}
          </motion.h2>
        </div>

        {/* Responsive Grid Layout: 2 columns on mobile/tablet, 4 columns on large screens */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {siteContent.subjectsSection.items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-gray-100 shadow-md shadow-brand-dark/2 flex flex-col justify-between group transition-all"
              id={`subject-card-${item.id}`}
            >
              {/* Embedded Image Header Container */}
              <div className="p-1.5 sm:p-3 pb-0">
                <div className="aspect-[4/3] rounded-lg sm:rounded-xl overflow-hidden relative bg-slate-50">
                  <img
                    src={item.imgUrl}
                    alt={item.subjectTag}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Info and Enrollment Action Bottom Row */}
              <div className="p-2.5 sm:p-5 mt-2 sm:mt-4 bg-[#eef1f6]/60 border-t border-slate-100 flex flex-col justify-between flex-grow gap-2.5 sm:gap-4_">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-2 text-[9px] sm:text-[11px] text-brand-dark font-sans font-bold">
                  
                  {/* Grade info pill */}
                  <div className="flex items-center gap-1 sm:gap-1.5 bg-white/90 px-1.5 py-1 sm:px-3 sm:py-1.5 rounded sm:rounded-md shadow-sm border border-gray-100/50">
                    <School className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-brand-dark/70" />
                    <span className="truncate">{item.gradeTag}</span>
                  </div>

                  {/* Subject tag pill */}
                  <div className="flex items-center gap-1 sm:gap-1.5 bg-white/90 px-1.5 py-1 sm:px-3 sm:py-1.5 rounded sm:rounded-md shadow-sm border border-gray-100/50">
                    <BookOpen className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-brand-dark/70" />
                    <span className="truncate">{item.subjectTag}</span>
                  </div>

                </div>

                {/* Enroll button trigger */}
                <a
                  href="#contact"
                  className="text-center bg-[#12102E] hover:bg-brand-pink text-white font-sans font-extrabold text-[9px] sm:text-xs px-2.5 py-2 sm:px-5 sm:py-2.5 rounded sm:rounded-md transition-colors duration-200 self-stretch sm:self-start mt-2 sm:mt-0"
                >
                  Enroll Now
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
