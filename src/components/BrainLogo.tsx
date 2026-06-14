import React from 'react';

interface BrainLogoProps {
  className?: string;
  showText?: boolean;
}

export default function BrainLogo({ className = "h-12 w-auto", showText = true }: BrainLogoProps) {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`} id="nav-brand-logo">
      {/* Cute Mascotte Brain Lifting Weights SVG */}
      <svg
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-12 h-12 flex-shrink-0 animate-float"
      >
        {/* LIGHTBULB HIGHLIGHT SHINE (GLOW behind crown) */}
        <circle cx="60" cy="22" r="10" fill="#FFEAA7" opacity="0.4" />
        {/* Tiny lightbulb above */}
        <path d="M57 15H63V17H57V15Z" fill="#333" />
        <path d="M56 18C56 15.7909 57.7909 14 60 14C62.2091 14 64 15.7909 64 18C64 19.3807 63.3018 20.5984 62.2354 21.321L62.1 23H57.9L57.7646 21.321C56.6982 20.5984 56 19.3807 56 18Z" fill="#FFD200" stroke="#333" strokeWidth="1.5" />
        <path d="M59 23H61V25H59V23Z" fill="#A4B0BE" stroke="#333" strokeWidth="1.2" />
        <line x1="60" y1="9" x2="60" y2="6" stroke="#FFD200" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="51" y1="13" x2="48" y2="11" stroke="#FFD200" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="69" y1="13" x2="72" y2="11" stroke="#FFD200" strokeWidth="1.5" strokeLinecap="round" />

        {/* CROWN */}
        <path
          d="M48 28L52 38H68L72 28L64 34L60 26L56 34L48 28Z"
          fill="#FFD200"
          stroke="#12102E"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        {/* Crown jewels */}
        <circle cx="48" cy="28" r="1.5" fill="#FF0055" />
        <circle cx="60" cy="26" r="1.5" fill="#FF0055" />
        <circle cx="72" cy="28" r="1.5" fill="#FF0055" />

        {/* BARBELL ROD */}
        <path d="M20 46H100" stroke="#2F3542" strokeWidth="3" strokeLinecap="round" />
        
        {/* WEIGHT LOBES (LEFT) */}
        <rect x="14" y="36" width="6" height="20" rx="3" fill="#FF3838" stroke="#12102E" strokeWidth="1.8" />
        <rect x="8" y="40" width="6" height="12" rx="2" fill="#FF3838" stroke="#12102E" strokeWidth="1.8" />
        
        {/* WEIGHT LOBES (RIGHT) */}
        <rect x="100" y="36" width="6" height="20" rx="3" fill="#FF3838" stroke="#12102E" strokeWidth="1.8" />
        <rect x="106" y="40" width="6" height="12" rx="2" fill="#FF3838" stroke="#12102E" strokeWidth="1.8" />

        {/* MASCOT ARM LEFT */}
        <path d="M43 56C36 53 34 45 32 46" stroke="#FF8DA1" strokeWidth="5.5" strokeLinecap="round" />
        <path d="M43 56C36 53 34 45 32 46" stroke="#12102E" strokeWidth="1.5" strokeLinecap="round" fill="none" />

        {/* MASCOT ARM RIGHT */}
        <path d="M77 56C84 53 86 45 88 46" stroke="#FF8DA1" strokeWidth="5.5" strokeLinecap="round" />
        <path d="M77 56C84 53 86 45 88 46" stroke="#12102E" strokeWidth="1.5" strokeLinecap="round" fill="none" />

        {/* BRAIN LOBES (BODY) */}
        {/* Outline Shadow */}
        <path 
          d="M40 76C32 76 28 68 34 58C32 50 40 40 50 44C54 38 66 38 70 44C80 40 88 50 86 58C92 68 88 76 80 76C80 84 40 84 40 76Z" 
          fill="#FF8DA1" 
          stroke="#12102E" 
          strokeWidth="2.5" 
          strokeLinejoin="round" 
        />
        
        {/* Brain folds/hemisphere curved overlay details */}
        {/* Left Side Folds */}
        <path d="M35 60C33 58 35 52 40 54" stroke="#FF5B81" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <path d="M34 68C36 71 42 70 42 66" stroke="#FF5B81" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <path d="M46 76C48 72 44 68 40 68" stroke="#FF5B81" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        {/* Center / Right Side Folds */}
        <path d="M60 44C58 48 54 50 56 56" stroke="#FF5B81" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <path d="M60 44C62 48 66 50 64 56" stroke="#FF5B81" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <path d="M85 60C87 58 85 52 80 54" stroke="#FF5B81" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <path d="M86 68C84 71 78 70 78 66" stroke="#FF5B81" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <path d="M74 76C72 72 76 68 80 68" stroke="#FF5B81" strokeWidth="2.5" strokeLinecap="round" fill="none" />

        {/* CUTE CARTOON EYES */}
        {/* Left Eye */}
        <ellipse cx="48" cy="61" rx="4.5" ry="5.5" fill="#12102E" />
        <circle cx="46.5" cy="59" r="1.5" fill="#FFFFFF" />
        
        {/* Right Eye */}
        <ellipse cx="72" cy="61" rx="4.5" ry="5.5" fill="#12102E" />
        <circle cx="70.5" cy="59" r="1.5" fill="#FFFFFF" />

        {/* BLUSH CHEEKS */}
        <circle cx="42" cy="67" r="3" fill="#FF5B81" opacity="0.6" />
        <circle cx="78" cy="67" r="3" fill="#FF5B81" opacity="0.6" />

        {/* HAPPY SMILE */}
        <path d="M56 68C56 71 64 71 64 68" stroke="#12102E" strokeWidth="2.2" strokeLinecap="round" fill="none" />

        {/* LITTLE LEGS */}
        <path d="M48 80V87" stroke="#FF8DA1" strokeWidth="4.5" strokeLinecap="round" />
        <path d="M48 80V87" stroke="#12102E" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M48 87H45" stroke="#12102E" strokeWidth="1.5" strokeLinecap="round" />

        <path d="M72 80V87" stroke="#FF8DA1" strokeWidth="4.5" strokeLinecap="round" />
        <path d="M72 80V87" stroke="#12102E" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M72 87H75" stroke="#12102E" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
      
      {showText && (
        <span className="font-display font-bold tracking-tight text-xl text-brand-dark flex flex-col leading-none">
          <span className="text-xl">Learning</span>
          <span className="text-[10px] tracking-[0.25em] text-brand-pink font-semibold">LAB</span>
        </span>
      )}
    </div>
  );
}
