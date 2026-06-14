# Learning Lab Landing Page

A highly polished, responsive, and performance-optimized website for **Learning Lab**—a tutoring, test-preparation, and educational support company catering to Foundation Phase students.

This project is built using **React**, **Vite**, **TypeScript**, **Tailwind CSS v4**, and **Motion** for smooth layout and entrance micro-animations.

---

## 📂 Project Structure

```bash
├── /src
│   ├── /components
│   │   ├── About.tsx             # Vision stats and milestones bento box grid
│   │   ├── BrainLogo.tsx         # Inline animated SVG of the brand mascot
│   │   ├── Contact.tsx           # Student booking & registration inquiry form 
│   │   ├── Features.tsx          # Key advantages cards section
│   │   ├── Footer.tsx            # Corporate bottom navbar & copyright details
│   │   ├── Hero.tsx              # Grid container hosting copy and the big mascot SVG
│   │   ├── HeroIllustration.tsx  # Organic dark blob graphic with spotlight & lifting brain
│   │   ├── Navbar.tsx            # Sticky desktop/mobile responsive header bar
│   │   └── Subjects.tsx          # Foundation phase subjects cards list
│   ├── /content
│   │   └── siteContent.ts        # Single-source-of-truth database-free CMS JSON
│   ├── App.tsx                   # Main entry point layout orchestrator
│   ├── index.css                 # Global css style rules and custom font bindings
│   └── main.tsx                  # Standard React DOM initialization
├── index.html                    # Root HTML document wrapper
├── package.json                  # Scripts & NPM package configurations
└── metadata.json                 # AI Studio sandbox permission configurations
```

---

## ✍️ Content Management (No Database Required)

The entire landing page is designed around a single, database-free **CMS (Centralized Content Management)** approach. You don't need any complex database setups to change layout text, plans, titles, links, or alerts. 

All content strings reside inside **`/src/content/siteContent.ts`**.

### How to update text:
1. Open the file **`/src/content/siteContent.ts`** in your editor.
2. Locate the text field or block you want to edit (such as `brand`, `hero`, `subjectsSection`, etc.).
3. Directly modify the string value.
4. Save the file. Your website will update instantly!

*Example (changing the main description):*
```typescript
export const siteContent = {
  // ...
  hero: {
    highlightedText: "Learning Lab",
    headingRest: " Your Gateway to Education and Essential Services",
    description: "Write your custom business mission statement here...", // 📌 Update here
    // ...
  }
};
```

---

## 🛠️ Adding New Sections

Adding a new section to the landing page can satisfy future growth as the company introduces new products or custom campaigns:

1. **Define Content**: Open `/src/content/siteContent.ts`, and add your new section content schema inside the `siteContent` object. For example:
   ```typescript
   export const siteContent = {
     // ...
     testimonialSection: {
       title: "What Parents Say",
       reviews: [
         { name: "Sarah K.", text: "Learning Lab has completely transformed my daughter's math scores!" }
       ]
     }
   };
   ```

2. **Create Component**: Create a new `.tsx` component inside `/src/components/`, e.g., `/src/components/Testimonials.tsx`. Inside, read from the content system:
   ```tsx
   import React from 'react';
   import { siteContent } from '../content/siteContent';

   export default function Testimonials() {
     return (
       <section id="testimonials" className="py-20">
         <h2>{siteContent.testimonialSection.title}</h2>
         {/* Render items... */}
       </section>
     );
   }
   ```

3. **Incorporate in App**: Open `/src/App.tsx`, import your new component, and drop it in line anywhere inside `<main>`:
   ```tsx
   import Testimonials from './components/Testimonials';
   // ...
   <main>
     <Hero />
     <Subjects />
     <Testimonials /> {/* ✦ Added here */}
   </main>
   ```

---

## 🚀 Deployment Instructions

This website represents a standard Single Page Application (SPA), fully optimized for immediate, seamless production output on platforms like **Vercel**, **Netlify**, or **Cloud Run**:

### Option 1: One-Click Vercel Deploy
1. Upload the directory or push your repository to your **GitHub** account.
2. Log in to your [Vercel Dashboard](https://vercel.com).
3. Click **Add New** ➔ **Project** ➔ import your GitHub repository.
4. Vercel will automatically detect the **Vite** configuration settings.
5. Click **Deploy**. Done! Your site will compile and load immediately.

---

## ⚙️ Development Commands
- `npm run dev`: Boot development server on local address `http://localhost:3000`
- `npm run build`: Compile static production-ready optimized build output under `/dist`
- `npm run lint`: Verify TypeScript correctness
