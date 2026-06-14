import React from 'react';
import { motion } from 'motion/react';

export default function HeroIllustration() {
  return (
    <div className="relative w-full max-w-[500px] aspect-square mx-auto flex items-center justify-center select-none" id="hero-illustration-container">
      {/* Decorative background shapes */}
      <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-pink-100 opacity-60 blur-md animate-pulse"></div>
      <div className="absolute -bottom-6 -right-6 w-20 h-20 rounded-full bg-rose-50 opacity-40 blur-xl"></div>
      
      {/* Main SVG Graphic */}
      <svg
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-2xl"
      >
        {/* 1. DARK ORGANIC BLOB BACKGROUND */}
        <path
          d="M50 180C30 280 100 370 200 380C300 390 370 310 380 220C390 130 330 40 230 30C130 20 70 80 50 180Z"
          fill="#1C1A3F"
          stroke="#2F2C5A"
          strokeWidth="3"
        />

        {/* 2. GLOWING YELLOW SPOTLIGHT/SUN */}
        <circle cx="204" cy="180" r="85" fill="#FECA28" />
        <circle cx="204" cy="180" r="95" fill="#FFEAA7" opacity="0.25" />

        {/* 3. LIGHTBULB (with animate-float-slow loop) */}
        <g className="animate-float">
          {/* Lightbulb Ray Lines */}
          <line x1="204" y1="50" x2="204" y2="40" stroke="#FFECA7" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="184" y1="58" x2="176" y2="50" stroke="#FFECA7" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="224" y1="58" x2="232" y2="50" stroke="#FFECA7" strokeWidth="2.5" strokeLinecap="round" />
          
          {/* Bulb body outline */}
          <path
            d="M198 72H210V76H198V72Z"
            fill="#747D8C"
            stroke="#12102E"
            strokeWidth="1.5"
          />
          <path
            d="M195 78C195 73 191 61 204 61C217 61 213 73 213 78C213 81.5 210.5 84 208 86V90H200V86C197.5 84 195 81.5 195 78Z"
            fill="#FFF200"
            stroke="#12102E"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path d="M201 90H207V93H201V90Z" fill="#747D8C" stroke="#12102E" strokeWidth="1.5" />
          {/* Filaments inside bulb */}
          <path d="M201 78L204 70L207 78" stroke="#FF7F50" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </g>

        {/* 4. BARBELL WEIGHTS AND MASCOT BRAIN */}
        <g className="animate-float">
          {/* BARBELL ROD */}
          <path d="M100 156H308" stroke="#2F3542" strokeWidth="5.5" strokeLinecap="round" />
          
          {/* LEFT RED PLATES */}
          <rect x="88" y="132" width="12" height="48" rx="5" fill="#FF3838" stroke="#12102E" strokeWidth="2.5" />
          <rect x="76" y="140" width="12" height="32" rx="4" fill="#FF3838" stroke="#12102E" strokeWidth="2.5" />
          <circle cx="70" cy="156" r="3" fill="#2F3542" />

          {/* RIGHT RED PLATES */}
          <rect x="308" y="132" width="12" height="48" rx="5" fill="#FF3838" stroke="#12102E" strokeWidth="2.5" />
          <rect x="320" y="140" width="12" height="32" rx="4" fill="#FF3838" stroke="#12102E" strokeWidth="2.5" />
          <circle cx="338" cy="156" r="3" fill="#2F3542" />

          {/* EXTRA DETAILED PORTRAYAL OF ARMS GRIPPING */}
          {/* Left curved arm wrapping over bar */}
          <path d="M152 176C138 170 134 153 130 155" stroke="#FF8DA1" strokeWidth="10.5" strokeLinecap="round" fill="none" />
          <path d="M152 176C138 170 134 153 130 155" stroke="#12102E" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          
          {/* Right curved arm wrapping over bar */}
          <path d="M256 176C270 170 274 153 278 155" stroke="#FF8DA1" strokeWidth="10.5" strokeLinecap="round" fill="none" />
          <path d="M256 176C270 170 274 153 278 155" stroke="#12102E" strokeWidth="2.5" strokeLinecap="round" fill="none" />

          {/* MAIN PINK BRAIN BODY */}
          <path
            d="M140 216C124 216 116 200 128 180C124 164 140 144 160 152C168 140 192 140 200 152C208 140 232 140 240 152C260 144 276 164 272 180C284 200 276 216 260 216C260 232 140 232 140 216Z"
            fill="#FF8DA1"
            stroke="#12102E"
            strokeWidth="4"
            strokeLinejoin="round"
          />

          {/* BRAIN Folds & Lobes detail */}
          <path d="M132 185C128 181 132 170 142 174" stroke="#FF5B81" strokeWidth="3.5" strokeLinecap="round" fill="none" />
          <path d="M130 201C134 207 146 205 146 197" stroke="#FF5B81" strokeWidth="3.5" strokeLinecap="round" fill="none" />
          <path d="M154 217C158 209 150 201 142 201" stroke="#FF5B81" strokeWidth="3.5" strokeLinecap="round" fill="none" />
          
          <path d="M174 165C178 155 186 155 190 165" stroke="#FF5B81" strokeWidth="3.5" strokeLinecap="round" fill="none" />
          <path d="M200 152V175" stroke="#FF5B81" strokeWidth="3.5" strokeLinecap="round" fill="none" />
          <path d="M226 165C222 155 214 155 210 165" stroke="#FF5B81" strokeWidth="3.5" strokeLinecap="round" fill="none" />

          <path d="M268 185C272 181 268 170 258 174" stroke="#FF5B81" strokeWidth="3.5" strokeLinecap="round" fill="none" />
          <path d="M270 201C266 207 254 205 254 197" stroke="#FF5B81" strokeWidth="3.5" strokeLinecap="round" fill="none" />
          <path d="M246 217C242 209 250 201 258 201" stroke="#FF5B81" strokeWidth="3.5" strokeLinecap="round" fill="none" />

          <path d="M174 195C170 199 180 208 191 202" stroke="#FF5B81" strokeWidth="3" strokeLinecap="round" fill="none" />
          <path d="M226 195C230 199 220 208 209 202" stroke="#FF5B81" strokeWidth="3" strokeLinecap="round" fill="none" />

          {/* TWO ENORMOUS CUTE EYES */}
          {/* Left pupil block */}
          <ellipse cx="166" cy="188" rx="9" ry="11" fill="#12102E" />
          <circle cx="163" cy="184" r="3.2" fill="#FFFFFF" />
          <circle cx="169" cy="192" r="1.3" fill="#FFFFFF" />

          {/* Right pupil block */}
          <ellipse cx="234" cy="188" rx="9" ry="11" fill="#12102E" />
          <circle cx="231" cy="184" r="3.2" fill="#FFFFFF" />
          <circle cx="237" cy="192" r="1.3" fill="#FFFFFF" />

          {/* SWEET HAPPY BLUSH ON CHEEKS */}
          <ellipse cx="152" cy="199" rx="6.5" ry="5" fill="#FF5B81" opacity="0.65" />
          <ellipse cx="248" cy="199" rx="6.5" ry="5" fill="#FF5B81" opacity="0.65" />

          {/* BIG ADORABLE SATISFIED SMILE */}
          <path
            d="M190 202C190 211 210 211 210 202"
            stroke="#12102E"
            strokeWidth="3.2"
            strokeLinecap="round"
            fill="none"
          />

          {/* LITTLE CUTE MASCOT FEET */}
          {/* Left Leg */}
          <path d="M166 226V240" stroke="#FF8DA1" strokeWidth="9" strokeLinecap="round" />
          <path d="M166 226V240" stroke="#12102E" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M166 240H158" stroke="#12102E" strokeWidth="2.5" strokeLinecap="round" />

          {/* Right Leg */}
          <path d="M234 226V240" stroke="#FF8DA1" strokeWidth="9" strokeLinecap="round" />
          <path d="M234 226V240" stroke="#12102E" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M234 240H242" stroke="#12102E" strokeWidth="2.5" strokeLinecap="round" />
        </g>

        {/* 5. CROWN */}
        <g className="animate-float">
          <path
            d="M166 122L176 138H224L234 122L214 130L200 118L186 130L166 122Z"
            fill="#FFD200"
            stroke="#12102E"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          <circle cx="166" cy="122" r="2.5" fill="#FF0055" />
          <circle cx="200" cy="118" r="2.5" fill="#FF0055" />
          <circle cx="234" cy="122" r="2.5" fill="#FF0055" />
        </g>

        {/* 6. TYPOGRAPHY "Learning LAB" INSIDE BLOB */}
        {/* We can use native SVG text with correct font-families or layout placeholders */}
        <text
          x="200"
          y="312"
          textAnchor="middle"
          fill="#FFFFFF"
          className="font-handwritten text-5xl font-bold tracking-wide"
        >
          Learning
        </text>
        <text
          x="200"
          y="342"
          textAnchor="middle"
          fill="#FF0055"
          className="font-display font-black text-2xl tracking-[0.3em]"
        >
          LAB
        </text>
      </svg>
    </div>
  );
}
