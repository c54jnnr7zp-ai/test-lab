import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { siteContent } from '../content/siteContent';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    grade: 'grade-r',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormState({
        name: '',
        email: '',
        grade: 'grade-r',
        message: '',
      });
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 bg-brand-purple-light/30 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Essential Contact Details */}
          <motion.div
            className="lg:col-span-5 flex flex-col gap-8"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            id="contact-info"
          >
            <div className="flex flex-col gap-4">
              <span className="bg-pink-50 text-brand-pink font-sans text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider self-start">
                Inquire Today
              </span>
              <h2 className="font-display text-4xl font-extrabold tracking-tight text-brand-dark">
                {siteContent.contactSection.title}
              </h2>
              <p className="font-sans text-base text-brand-dark/70 leading-relaxed">
                {siteContent.contactSection.subtitle}
              </p>
            </div>

            {/* Practical list cards */}
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-gray-100 hover:border-pink-100 transition-colors">
                <div className="p-3 bg-pink-50 text-brand-pink rounded-lg">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="font-sans text-xs text-brand-dark/50 uppercase tracking-wider font-semibold">Email</span>
                  <a href={`mailto:${siteContent.contactSection.email}`} className="font-sans text-sm sm:text-base font-bold text-brand-dark hover:text-brand-pink transition-colors">
                    {siteContent.contactSection.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-gray-100 hover:border-pink-100 transition-colors">
                <div className="p-3 bg-pink-50 text-brand-pink rounded-lg">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="font-sans text-xs text-brand-dark/50 uppercase tracking-wider font-semibold">Phone</span>
                  <a href={`tel:${siteContent.contactSection.phone}`} className="font-sans text-sm sm:text-base font-bold text-brand-dark hover:text-brand-pink transition-colors">
                    {siteContent.contactSection.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-gray-100 hover:border-pink-100 transition-colors">
                <div className="p-3 bg-pink-50 text-brand-pink rounded-lg">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="font-sans text-xs text-brand-dark/50 uppercase tracking-wider font-semibold">Address</span>
                  <p className="font-sans text-sm sm:text-base font-bold text-brand-dark leading-snug">
                    {siteContent.contactSection.address}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Dynamic submission Form */}
          <motion.div
            className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-2xl border border-gray-100 shadow-xl shadow-brand-dark/2 relative"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            id="contact-form-container"
          >
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <h3 className="font-display font-extrabold text-2xl text-brand-dark tracking-tight mb-2">
                    Send Student Registration Inquiry
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name input */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="form-name" className="font-sans text-xs font-bold text-brand-dark/70 uppercase tracking-wider">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="form-name"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        required
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-brand-pink focus:ring-2 focus:ring-pink-100 transition-all font-sans text-sm"
                      />
                    </div>

                    {/* Email input */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="form-email" className="font-sans text-xs font-bold text-brand-dark/70 uppercase tracking-wider">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="form-email"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        required
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-brand-pink focus:ring-2 focus:ring-pink-100 transition-all font-sans text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Grade Select Dropdown */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="form-grade" className="font-sans text-xs font-bold text-brand-dark/70 uppercase tracking-wider">
                        Development Phase / Grade
                      </label>
                      <select
                        id="form-grade"
                        value={formState.grade}
                        onChange={(e) => setFormState({ ...formState, grade: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-brand-pink focus:ring-2 focus:ring-pink-100 transition-all font-sans text-sm bg-white"
                      >
                        <option value="preschool">Preschool & Toddlers</option>
                        <option value="grade-r">Grade R (Foundation phase)</option>
                        <option value="grade-1">Grade 1 (Foundations)</option>
                        <option value="grade-2">Grade 2 (Reading/Math)</option>
                        <option value="grade-3">Grade 3 (Milestones)</option>
                        <option value="other">Other Tutoring Support</option>
                      </select>
                    </div>

                    {/* Subject highlight notice */}
                    <div className="p-4 bg-pink-50/50 rounded-xl flex items-center justify-center border border-pink-100/30">
                      <p className="font-sans text-xs text-brand-pink leading-relaxed font-medium">
                        ✦ <strong>Subjects Covered:</strong> Full focus on mathematical readiness, foundational reading, life skills, and assessed milestone prep.
                      </p>
                    </div>
                  </div>

                  {/* Message body input */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="form-message" className="font-sans text-xs font-bold text-brand-dark/70 uppercase tracking-wider">
                      Describe Learning Requirements
                    </label>
                    <textarea
                      id="form-message"
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      required
                      placeholder="Tell us about your student's needs, strengths, weak areas, or potential schedule preferences..."
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-brand-pink focus:ring-2 focus:ring-pink-100 transition-all font-sans text-sm resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-brand-pink hover:bg-brand-pink-hover text-white font-semibold py-4 rounded-xl shadow-lg shadow-pink-500/10 hover:shadow-pink-500/20 active:scale-[0.99] transition-all flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Registration Message</span>
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-10 px-4"
                >
                  <div className="p-4 bg-emerald-50 text-emerald-500 rounded-full mb-6">
                    <CheckCircle className="w-16 h-16 stroke-[1.5]" />
                  </div>
                  <h3 className="font-display font-black text-2xl text-brand-dark tracking-tight mb-3">
                    Inquiry Sent Successfully!
                  </h3>
                  <p className="font-sans text-base text-brand-dark/75 leading-relaxed max-w-md">
                    {siteContent.contactSection.successMessage}
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-8 border border-gray-200 hover:border-brand-pink text-brand-dark hover:text-brand-pink font-semibold px-6 py-2 rounded-xl transition-all text-sm"
                  >
                    Send Another Inquiry
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
