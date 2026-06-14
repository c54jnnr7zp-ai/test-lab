import React from 'react';
import { motion } from 'motion/react';
import { Award, Sparkles, Smile, BookOpen, CheckSquare, Layers, CheckCircle } from 'lucide-react';
import { siteContent } from '../content/siteContent';



const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Award: Award,
  Sparkles: Sparkles,
  Smile: Smile,
  BookOpen: BookOpen,
  CheckSquare: CheckSquare,
  Layers: Layers,
};

// SVG 1: Classroom study isometric view vector
function ClassroomIllustration() {
  return (
    <div className="w-full max-w-[380px] aspect-square mx-auto flex items-center justify-center select-none" id="classroom-illustration-wrap">
      <svg
        viewBox="0 0 350 350"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-xl animate-float-slow"
      >
        {/* Floor grid / Base */}
        <polygon points="175,50 310,120 175,190 40,120" fill="#E2E8F0" opacity="0.3" stroke="#CBD5E1" strokeWidth="1.5" />
        <polygon points="175,190 310,120 310,140 175,210" fill="#CBD5E1" opacity="0.5" />
        <polygon points="175,190 40,120 40,140 175,210" fill="#94A3B8" opacity="0.5" />

        {/* Isometric Chalkboard / Smartboard screen */}
        <polygon points="80,100 130,73 130,123 80,150" fill="#334155" stroke="#1E293B" strokeWidth="2.5" />
        <path d="M90 101L120 85" stroke="#94A3B8" strokeWidth="1.5" />
        <path d="M90 115L115 101" stroke="#94A3B8" strokeWidth="1.5" />
        <path d="M90 128L120 112" stroke="#94A3B8" strokeWidth="1.5" />

        {/* Isometric study table 1 (Center Left) */}
        <polygon points="140,135 180,115 200,125 160,145" fill="#F8FAFC" stroke="#64748B" strokeWidth="1.5" />
        {/* Table Legs */}
        <line x1="140" y1="135" x2="140" y2="155" stroke="#64748B" strokeWidth="2" />
        <line x1="180" y1="115" x2="180" y2="135" stroke="#64748B" strokeWidth="2" />
        <line x1="200" y1="125" x2="200" y2="145" stroke="#64748B" strokeWidth="2" />
        <line x1="160" y1="145" x2="160" y2="165" stroke="#64748B" strokeWidth="2" />

        {/* Isometric study table 2 (Center Right) */}
        <polygon points="210,170 250,150 270,160 230,180" fill="#F8FAFC" stroke="#64748B" strokeWidth="1.5" />
        {/* Table Legs */}
        <line x1="210" y1="170" x2="210" y2="190" stroke="#64748B" strokeWidth="2" />
        <line x1="250" y1="150" x2="250" y2="170" stroke="#64748B" strokeWidth="2" />
        <line x1="270" y1="160" x2="270" y2="180" stroke="#64748B" strokeWidth="2" />
        <line x1="230" y1="180" x2="230" y2="200" stroke="#64748B" strokeWidth="2" />

        {/* Little Globe */}
        <circle cx="110" cy="140" r="12" fill="#3B82F6" stroke="#1E293B" strokeWidth="1.5" />
        <path d="M104 140C104 134 116 134 116 140" stroke="#34D399" strokeWidth="1.5" fill="none" />
        <path d="M102 142C108 148 112 142 118 142" stroke="#34D399" strokeWidth="1.5" fill="none" />
        <path d="M110 128V152" stroke="#475569" strokeWidth="1.5" />
        <path d="M104 152H116" stroke="#475569" strokeWidth="1.5" />

        {/* Teacher Mascot Character standing */}
        {/* Head */}
        <circle cx="160" cy="80" r="12" fill="#FF8DA1" stroke="#12102E" strokeWidth="2" />
        {/* Crown */}
        <polygon points="152,70 156,76 160,68 164,76 168,70" fill="#FFD200" stroke="#12102E" strokeWidth="1" />
        {/* Body */}
        <path d="M152 92C152 86 168 86 168 92V115H152V92Z" fill="#12102E" stroke="#12102E" strokeWidth="2" />
        {/* Arms */}
        <line x1="152" y1="94" x2="142" y2="102" stroke="#FF8DA1" strokeWidth="3" strokeLinecap="round" />
        <line x1="168" y1="94" x2="178" y2="100" stroke="#FF8DA1" strokeWidth="3" strokeLinecap="round" />
        <line x1="142" y1="102" x2="142" y2="110" stroke="#12102E" strokeWidth="1.5" />

        {/* Pupil Mascot Characters seated */}
        {/* Child 1 at table 1 */}
        <circle cx="180" cy="135" r="9" fill="#FFB8B8" stroke="#12102E" strokeWidth="1.5" />
        <path d="M174 144C174 140 186 140 186 144V154H174V144Z" fill="#FF0055" stroke="#12102E" strokeWidth="1.5" />

        {/* Child 2 at table 2 */}
        <circle cx="250" cy="170" r="9" fill="#FFEAA7" stroke="#12102E" strokeWidth="1.5" />
        <path d="M244 179C244 175 256 175 256 179V189H244V179Z" fill="#3B82F6" stroke="#12102E" strokeWidth="1.5" />

        {/* Playful Floating Alphabets and Numbers */}
        <text x="50" y="220" fill="#FF0055" className="font-display font-extrabold text-2xl rotate-[-12deg]">a</text>
        <text x="280" y="90" fill="#3B82F6" className="font-display font-black text-3xl rotate-[15deg]">B</text>
        <text x="290" y="230" fill="#10B981" className="font-handwritten text-4xl rotate-[-8deg]">3</text>
        <text x="110" y="270" fill="#FBBF24" className="font-display font-black text-2xl rotate-[5deg]">💡</text>

        {/* Floating Clouds */}
        <path d="M40 70C40 65 50 60 60 62C65 58 75 62 78 68C83 68 85 75 80 78H45C42 78 40 75 40 70Z" fill="#FFFFFF" opacity="0.85" />
        <path d="M250 280C250 275 260 270 270 272C275 268 285 272 288 278C293 278 295 285 290 288H255C252 288 250 285 250 280Z" fill="#FFFFFF" opacity="0.85" />
      </svg>
    </div>
  );
}

// SVG 2: Whiteboard / teaching scene vector
function TutoringIllustration() {
  return (
    <div className="w-full max-w-[380px] aspect-square mx-auto flex items-center justify-center select-none" id="tutoring-illustration-wrap">
      <svg
        viewBox="0 0 350 350"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-xl animate-float"
      >
        {/* Soft Background grid dots */}
        <circle cx="100" cy="100" r="2" fill="#E2E8F0" />
        <circle cx="180" cy="100" r="2" fill="#E2E8F0" />
        <circle cx="260" cy="100" r="2" fill="#E2E8F0" />
        <circle cx="100" cy="180" r="2" fill="#E2E8F0" />
        <circle cx="260" cy="180" r="2" fill="#E2E8F0" />

        {/* Whiteboard Frame */}
        <rect x="70" y="60" width="210" height="130" rx="12" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="4" />
        <rect x="78" y="68" width="194" height="114" rx="6" fill="#F8FAFC" />
        {/* Whiteboard Stand legs */}
        <line x1="120" y1="190" x2="100" y2="240" stroke="#A7F3D0" strokeWidth="5" strokeLinecap="round" />
        <line x1="230" y1="190" x2="250" y2="240" stroke="#A7F3D0" strokeWidth="5" strokeLinecap="round" />

        {/* Whiteboard Text Elements corresponding to picture */}
        <text x="110" y="115" fill="#12102E" className="font-display font-extrabold text-5xl">1</text>
        <text x="160" y="115" fill="#12102E" className="font-display font-extrabold text-5xl">2</text>

        {/* Letter blocks top right */}
        <rect x="210" y="80" width="22" height="22" rx="4" fill="#FFECF0" stroke="#FF0055" strokeWidth="1.5" />
        <text x="216" y="96" fill="#FF0055" className="font-display font-bold text-sm">Aa</text>

        <rect x="238" y="108" width="22" height="22" rx="4" fill="#EFF6FF" stroke="#3B82F6" strokeWidth="1.5" />
        <text x="244" y="124" fill="#3B82F6" className="font-display font-bold text-sm">Bb</text>

        {/* Big Question mark lamp glow */}
        <rect x="195" y="140" width="30" height="30" rx="15" fill="#FEF3C7" />
        <text x="205" y="161" fill="#D97706" className="font-display font-black text-lg">?</text>

        {/* Teacher standing next to board */}
        <circle cx="175" cy="270" r="20" fill="#FF8DA1" stroke="#12102E" strokeWidth="3" />
        {/* Glasses */}
        <rect x="164" y="264" width="10" height="6" rx="1" stroke="#12102E" strokeWidth="2" fill="none" />
        <rect x="176" y="264" width="10" height="6" rx="1" stroke="#12102E" strokeWidth="2" fill="none" />
        <line x1="174" y1="267" x2="176" y2="267" stroke="#12102E" strokeWidth="2" />

        {/* Hair buns */}
        <circle cx="158" cy="254" r="7" fill="#FF8DA1" stroke="#12102E" strokeWidth="2" />
        <circle cx="192" cy="254" r="7" fill="#FF8DA1" stroke="#12102E" strokeWidth="2" />

        {/* Smile */}
        <path d="M171 278C171 281 179 281 179 278" stroke="#12102E" strokeWidth="2.5" strokeLinecap="round" />

        {/* Pupils sitting below looking up (back of their heads with customizable styles) */}
        {/* Pupil 1 */}
        <circle cx="110" cy="330" r="16" fill="#3B82F6" stroke="#12102E" strokeWidth="2.5" />
        <path d="M98 332C98 322 122 322 122 332" fill="#1E293B" />

        {/* Pupil 2 */}
        <circle cx="240" cy="324" r="18" fill="#10B981" stroke="#12102E" strokeWidth="2.5" />
        <path d="M226 326C226 316 254 316 254 326" fill="#12102E" />

        {/* Small background heart/stars */}
        <polygon points="40,150 43,143 50,140 43,137 40,130 37,137 30,140 37,143" fill="#D97706" />
        <polygon points="310,180 312,175 318,173 312,171 310,166 308,171 302,173 308,175" fill="#FF0055" />
      </svg>
    </div>
  );
}

export default function Features() {
  const items = siteContent.featuresSection.items;

  // Split features into two blocks representing the screenshot rows
  const row1Features = items.filter((_, i) => i < 3);
  const row2Features = items.filter((_, i) => i >= 3);

  return (
    <section id="features" className="py-20 bg-white relative" aria-label="Our Services and Features">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Section Heading Label, Title & Subhead */}
        <div className="text-center max-w-3xl mx-auto mb-20 flex flex-col gap-3">
          <span className="font-sans text-[11px] font-bold text-gray-400 tracking-[0.25em] uppercase">
            {siteContent.featuresSection.subtitle ? "FEATURES" : "SERVICES"}
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-brand-dark max-w-2xl mx-auto leading-tight"
          >
            {siteContent.featuresSection.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-sans text-sm sm:text-base text-slate-500 max-w-xl mx-auto"
          >
            {siteContent.featuresSection.subtitle}
          </motion.p>
        </div>

        {/* Master Row Layout */}
        <div className="flex flex-col gap-24">

          {/* ROW 1: Graphic Left, Bullets Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Visual Classroom Illustration */}
            <motion.div
              className="lg:col-span-5 flex justify-center items-center"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img src="https://raw.githubusercontent.com/c54jnnr7zp-ai/test-lab/3da3e580fb210912c7effc06fb1d13d2aa96b1bd/assets/Teaching-amico.svg" alt="Tutoring" />
            </motion.div>

            {/* Bullets List */}
            <div className="lg:col-span-7 flex flex-col gap-10">
              {row1Features.map((item, index) => {
                const IconComponent = iconMap[item.icon] || Sparkles;
                return (
                  <motion.div
                    key={item.id}
                    className="flex gap-4 items-start"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    id={`feature-item-${item.id}`}
                  >
                    {/* Icon Shield */}
                    <div className="p-1 rounded-full text-brand-dark mt-0.5 select-none flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-brand-dark stroke-[2.5]" />
                    </div>

                    {/* Copy text block */}
                    <div className="flex flex-col gap-2">
                      <h3 className="font-display font-extrabold text-[17px] text-brand-dark tracking-tight">
                        {item.title}
                      </h3>
                      <p className="font-sans text-xs sm:text-sm text-slate-500 leading-relaxed max-w-2xl">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>

          {/* ROW 2: Bullets Left, Graphic Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-8">

            {/* Bullets List */}
            <div className="lg:col-span-7 flex flex-col gap-10 order-2 lg:order-1">
              {row2Features.map((item, index) => {
                return (
                  <motion.div
                    key={item.id}
                    className="flex gap-4 items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    id={`feature-item-${item.id}`}
                  >
                    {/* Icon Shield */}
                    <div className="p-1 rounded-full text-brand-dark mt-0.5 select-none flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-brand-dark stroke-[2.5]" />
                    </div>

                    {/* Copy text block */}
                    <div className="flex flex-col gap-2">
                      <h3 className="font-display font-extrabold text-[17px] text-brand-dark tracking-tight">
                        {item.title}
                      </h3>
                      <p className="font-sans text-xs sm:text-sm text-slate-500 leading-relaxed max-w-2xl">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Whiteboard teaching scene */}
            <motion.div
              className="lg:col-span-5 flex justify-center items-center order-1 lg:order-2"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img src="https://raw.githubusercontent.com/c54jnnr7zp-ai/test-lab/3da3e580fb210912c7effc06fb1d13d2aa96b1bd/assets/Teaching-pana.svg" alt="Tutoring" />

            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
