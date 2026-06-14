// Centralized content file for Learning Lab.
// Modify any values here to update the text, links, and assets across the website.

export interface SubjectItem {
  id: string;
  gradeTag: string;
  subjectTag: string;
  imgUrl: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string; // Used for the badge e.g. "P/Hour" or "Yearly"
  features: string[];
  ctaText: string;
  popular: boolean;
}

export interface ReviewItem {
  id: string;
  name: string;
  role: string;
  review: string;
  rating: number;
  imgUrl: string;
}

export interface SiteContent {
  brand: {
    name: string;
    tagline: string;
    logoText: string;
  };
  navigation: {
    links: { name: string; href: string }[];
    ctaText: string;
    secondaryCtaText: string;
  };
  hero: {
    highlightedText: string;
    headingRest: string;
    description: string;
    primaryCta: { text: string; href: string };
    secondaryCta: { text: string; href: string };
  };
  subjectsSection: {
    title: string;
    subtitle: string;
    items: SubjectItem[];
  };
  featuresSection: {
    title: string;
    subtitle: string;
    items: FeatureItem[];
  };
  pricingSection: {
    title: string;
    subtitle: string;
    plans: PricingPlan[];
  };
  aboutSection: {
    title: string;
    subtitle: string;
    description1: string;
    cta: { text: string; href: string };
    imageCard: {
      title: string;
      description: string;
    };
    imgUrl: string;
  };
  reviewsSection: {
    title: string;
    subtitle: string;
    items: ReviewItem[];
  };
  missionSection: {
    tag: string;
    title: string;
    description: string;
    stats: { value: string; label: string }[];
    badge: {
      initials: string;
      title: string;
      subtitle: string;
    };
  };
  contactSection: {
    title: string;
    subtitle: string;
    email: string;
    phone: string;
    address: string;
    successMessage: string;
  };
  footer: {
    copyright: string;
    links: { name: string; href: string }[];
  };
}

export const siteContent: SiteContent = {
  brand: {
    name: "Learning Lab",
    tagline: "Your Gateway to Education and Essential Services",
    logoText: "Learning LAB",
  },
  navigation: {
    links: [
      { name: "Home", href: "#home" },
      { name: "Subjects", href: "#subjects" },
      { name: "Features", href: "#features" },
      { name: "Pricing", href: "#pricing" },
    ],
    ctaText: "Get In Touch",
    secondaryCtaText: "About Us",
  },
  hero: {
    highlightedText: "Learning Lab",
    headingRest: " Your Gateway to Education and Essential Services",
    description:
      "Learning Lab is a company which caters to all your educational needs. We provide tutoring services, test preparation and learning support for all the Foundation Phase subjects.",
    primaryCta: { text: "Get in Touch", href: "#contact" },
    secondaryCta: { text: "About Us", href: "#about" },
  },
  subjectsSection: {
    title: "Enroll Subjects For Your Child.",
    subtitle: "SUBJECTS",
    items: [
      {
        id: "maths",
        gradeTag: "Grade 1 - 7",
        subjectTag: "Mathematics",
        imgUrl: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=600",
      },
      {
        id: "languages",
        gradeTag: "Grade 1 - 7",
        subjectTag: "Languages",
        imgUrl: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=600",
      },
      {
        id: "sciences",
        gradeTag: "Grade 1 - 7",
        subjectTag: "Sciences",
        imgUrl: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=600",
      },
      {
        id: "ems",
        gradeTag: "Grade 1 - 7",
        subjectTag: "EMS",
        imgUrl: "https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&q=80&w=600",
      }
    ],
  },
  featuresSection: {
    title: "Interactive Teaching,Professional Services Learning Lab Offers.",
    subtitle: "Empower your foundation-phase child with our comprehensive educational support.",
    items: [
      {
        id: "tutoring",
        title: "Tutoring Services",
        description: "Boost your child's learning journey with our tutoring services for foundation phase students. Our friendly tutors focus on foundational skills, making complex topics simple and engaging for young learners. Give your child the support they need to thrive!",
        icon: "Sparkles"
      },
      {
        id: "exams",
        title: "Test & Exam Preparation",
        description: "Help your child build confidence and succeed with our test and exam preparation for foundation-phase kids. We provide fun, age-appropriate study tools and practice materials designed to make learning enjoyable while enhancing understanding of key subjects.",
        icon: "Award"
      },
      {
        id: "homework",
        title: "Homework Class & Learning Support",
        description: "We also provide homework classes and learning support to build confidence and study skills, to keep learning fun and organized!",
        icon: "Smile"
      },
      {
        id: "booklets",
        title: "Educational Booklets",
        description: "Make learning exciting with our educational booklets for kids in the foundation phase. Each booklet is packed with colorful activities, easy-to-understand lessons, and fun exercises to help young students build essential skills.",
        icon: "BookOpen"
      },
      {
        id: "covering",
        title: "Book Covering Services",
        description: "Protect your child's books with our book covering services tailored for young students. We offer durable, child-friendly covers to keep their schoolbooks safe and clean throughout the school year.",
        icon: "CheckSquare"
      },
      {
        id: "stationary",
        title: "Personalized Stationary Package",
        description: "Add a personal touch to your child's school supplies with our personalized stationery packages for kids. From custom notebooks to colorful pens, each item can be tailored to match your child's personality, making school more fun and engaging!",
        icon: "Layers"
      }
    ],
  },
  pricingSection: {
    title: "At What Cost Is To Learn Here With Learning Lab",
    subtitle: "Learning Lab gives you affordable prices and best education support for your child",
    plans: [
      {
        id: "recommended",
        name: "Recommended",
        price: "",
        period: "P/Hour",
        features: [
          "Tutoring Services|R 300",
          "Test & Exam Preparation|R 150",
          "Homework Class & Learning Support|R 200"
        ],
        ctaText: "Get started",
        popular: true,
      },
      {
        id: "other",
        name: "Other Services",
        price: "",
        period: "Yearly",
        features: [
          "Educational Booklets|R 80",
          "Personalized Stationery Package|R 550",
          "Book Covering Services|R 20"
        ],
        ctaText: "Get started",
        popular: false,
      }
    ]
  },
  aboutSection: {
    title: "The Best Way To Learn Is With Us",
    subtitle: "LEARN",
    description1: "At Learning Lab, we offer a welcoming and vibrant environment where foundation-phase kids can learn, grow, and connect with one another. Our friendly, supportive tutors provide tailored services like test preparation, homework assistance, and personalized tutoring that boost both academic skills and confidence.",
    cta: { text: "Learn more", href: "#contact" },
    imageCard: {
      title: "Why Learning Lab ?",
      description: "With a focus on each child's unique potential, Learning Lab is the perfect place for young learners to thrive together!"
    },
    imgUrl: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=800",
  },
  reviewsSection: {
    title: "What Parents say about Learning Lab",
    subtitle: "What Parents say about Learning Lab",
    items: [
      {
        id: "thabo",
        name: "Thabo Mokoena",
        role: "Tutoring Services",
        review: "The tutors are friendly, supportive, and know how to make learning fun for young kids. I highly recommend their exam preparation and learning support services!",
        rating: 4,
        imgUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150"
      },
      {
        id: "zandile",
        name: "Zandile Mthembu",
        role: "Homework Class",
        review: "My daughter used to struggle with her homework, but since joining the homework class, she's become so much more independent and focused.",
        rating: 4,
        imgUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150"
      },
      {
        id: "lungile",
        name: "Lungile Khumalo",
        role: "Personalized Stationery Package",
        review: "I'm really grateful for Learning Lab's tutoring services and personalized stationery packages. The stationery adds a fun, personal touch, and my son loves it.",
        rating: 4,
        imgUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150"
      },
      {
        id: "lindiwe",
        name: "Lindiwe Mahlangu",
        role: "Test and Exam Preparation",
        review: "Learning Lab's test preparation services are amazing! The tutors are patient and explain things in a way my child actually understands.",
        rating: 4,
        imgUrl: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=150"
      },
      {
        id: "precious",
        name: "Precious Mkhize",
        role: "Tutoring Services",
        review: "Learning Lab's test preparation services are amazing! The tutors are patient and explain things in a way my child actually understands.",
        rating: 4,
        imgUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150"
      },
      {
        id: "bongani",
        name: "Bongani Nkosi",
        role: "Book Covering",
        review: "The book covering service is also a thoughtful touch - it keeps her schoolbooks in great shape all year. Highly recommend them!",
        rating: 4,
        imgUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150"
      }
    ]
  },
  missionSection: {
    tag: "ABOUT MY LEARNING LAB",
    title: "Our Mission is to build confident, independent learners.",
    description: "Founded on the belief that every student has the potential to excel, My Learning Lab bridges the gap between traditional classroom learning and individual mastery. Our lab is a space where strategy meets empathy, and where students are equipped with the tools for lifelong success.",
    stats: [
      { value: "100%", label: "PERSONALIZED ATTENTION" },
      { value: "Elite", label: "ACADEMIC COACHES" }
    ],
    badge: {
      initials: "LL",
      title: "Global Impact",
      subtitle: "Since 2024"
    }
  },
  contactSection: {
    title: "Get In Touch",
    subtitle: "Have questions about our programs or want to register a student? Reach out and we will respond within 2 hours.",
    email: "hello@learninglab.edu",
    phone: "+27 (0) 11 555 4567",
    address: "74 Academic Crescent, Suite B, Sandton, Johannesburg",
    successMessage: "Thank you for reaching out! A Learning Lab advisor will inspect your inquiry and contact you shortly.",
  },
  footer: {
    copyright: "© 2026 Learning Lab Ltd. All rights reserved.",
    links: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Contact", href: "#contact" }
    ],
  },
};
