import React from 'react';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import { siteContent } from '../content/siteContent';

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-brand-purple-light/20 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header content */}
        <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col gap-4">
          <span className="font-sans text-[11px] font-bold text-gray-400 tracking-[0.25em] uppercase">
            PRICING
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl font-extrabold tracking-tight text-brand-dark"
          >
            {siteContent.pricingSection.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-sans text-sm sm:text-base text-slate-500 max-w-xl mx-auto leading-relaxed"
          >
            {siteContent.pricingSection.subtitle}
          </motion.p>
        </div>

        {/* Pricing Cards Grid (Center aligned 2 columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto gap-8 items-stretch">
          {siteContent.pricingSection.plans.map((plan, index) => {
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`rounded-2xl p-8 flex flex-col justify-between relative transition-all bg-white text-brand-dark border border-gray-100 shadow-xl shadow-brand-dark/5`}
                id={`pricing-card-${plan.id}`}
              >
                <div>
                  {/* Plan Name & Badge Header */}
                  <div className="flex items-center justify-between mb-8 gap-4 border-b border-gray-50 pb-4">
                    <h3 className="font-display text-xl font-extrabold tracking-tight text-brand-dark">
                      {plan.name}
                    </h3>
                    <span className={`font-sans text-xs font-black px-4 py-1.5 rounded-md tracking-wider uppercase ${
                      plan.popular
                        ? 'bg-[#50247C] text-white'
                        : 'bg-[#1E293B] text-white'
                    }`}>
                      {plan.period}
                    </span>
                  </div>

                  {/* PRICES Column Subheading */}
                  <div className="flex justify-end mb-4">
                    <span className="font-sans text-[11px] font-extrabold text-gray-400 tracking-widest uppercase">
                      PRICES
                    </span>
                  </div>

                  {/* Features / Service Rates List */}
                  <ul className="space-y-5 mb-8">
                    {plan.features.map((feature, idx) => {
                      const [label, priceValue] = feature.includes('|')
                        ? feature.split('|')
                        : [feature, null];
                      return (
                        <li key={idx} className="flex justify-between items-center text-sm border-b border-dashed border-slate-100 pb-3 last:border-0 last:pb-0">
                          <span className="text-slate-500 font-medium max-w-[210px] sm:max-w-xs text-left leading-snug">
                            {label}
                          </span>
                          <span className="font-sans font-extrabold text-brand-dark text-base flex-shrink-0 ml-4">
                            {priceValue}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* Card CTA Action */}
                <a
                  href="#contact"
                  className={`w-full py-3.5 px-6 rounded-xl font-bold font-sans text-xs tracking-wider uppercase text-center transition-all block ${
                    plan.popular
                      ? 'bg-[#2E1850] hover:bg-brand-pink text-white shadow-lg shadow-[#2E1850]/15'
                      : 'bg-[#1E293B] hover:bg-brand-dark text-white'
                  }`}
                >
                  {plan.ctaText}
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
