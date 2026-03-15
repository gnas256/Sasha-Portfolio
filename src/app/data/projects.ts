export interface ProjectData {
  id: number;
  slug: string;
  title: string;
  category: string;
  year: string;
  description: string;
  image: string;
  tags: string[];
  gradient: string;
  // Case study details
  client: string;
  duration: string;
  role: string;
  overview: string;
  challenge: string;
  approach: string;
  solution: string;
  results: { metric: string; value: string; description: string }[];
  process: { step: string; description: string }[];
  gallery: string[];
  testimonial?: { quote: string; author: string; role: string };
  nextProject?: string;
}

export const projects: ProjectData[] = [
  {
    id: 1,
    slug: 'ey-enterprise-tax-platform',
    title: 'Enterprise All-in-One Tax Platform',
    category: 'Enterprise SaaS',
    year: '2024',
    description: 'End-to-end product design for EY\'s unified tax compliance and advisory platform serving 50,000+ professionals — unlocking $4M in operational efficiency improvements across global practices.',
    image: 'https://images.unsplash.com/photo-1753955900083-b62ee8d97805?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXglMjBzb2Z0d2FyZSUyMGFuYWx5dGljcyUyMGVudGVycHJpc2V8ZW58MXx8fHwxNzczNDUyMTY5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Enterprise', 'Tax Tech', 'AI/ML', 'Design System', 'B2B'],
    gradient: 'from-yellow-500 to-orange-500',
    client: 'EY (Ernst & Young)',
    duration: '8 months',
    role: 'Lead Product Designer',
    overview: 'EY\'s tax advisory practice operated across 12 disconnected legacy tools — from compliance filing to transfer pricing to indirect tax — creating fragmentation, duplicated effort, and audit risk. I led the product design for a ground-up unification into a single intelligent platform that consolidates the entire tax lifecycle. The platform now serves 50,000+ tax professionals across 40+ countries, handling multi-jurisdictional compliance, real-time regulatory tracking, and AI-powered anomaly detection — unlocking $4M in annual operational improvements for the firm.',
    challenge: 'EY\'s global tax practice was drowning in tooling fragmentation. Professionals toggled between 12+ legacy applications daily — each with its own data model, auth flow, and UI paradigm. This created a 37-minute average context-switching overhead per engagement, a 23% error rate on cross-jurisdictional filings due to inconsistent data, and zero real-time visibility into compliance deadlines across portfolios. The firm estimated $6.2M annually in lost productivity and remediation costs. Meanwhile, competitors were shipping AI-native platforms, and EY risked losing top-tier talent to more modern environments.',
    approach: 'I embedded with three regional tax teams (Americas, EMEIA, Asia-Pacific) for a 6-week discovery sprint. We shadowed 85+ practitioners across seniority levels, from associates manually reconciling spreadsheets to partners reviewing cross-border structures. I mapped 14 distinct user journeys, identified 47 friction points, and prioritized through an impact/effort matrix co-created with EY\'s CTO. We adopted a progressive disclosure architecture — the same platform surface adapts from simple single-entity compliance to complex multinational advisory workflows based on engagement complexity and user role. Weekly design reviews with a 12-person steering committee ensured alignment across tax, technology, and risk leadership.',
    solution: 'Delivered a modular, role-adaptive platform built on a unified data graph spanning all tax domains. Key design innovations include: (1) a "Tax Command Center" dashboard providing portfolio-wide compliance health with AI-flagged risks; (2) a jurisdiction-aware filing workflow engine that auto-routes tasks based on regulatory calendars and entity structures; (3) an AI copilot trained on EY\'s proprietary methodologies that drafts memos, flags anomalies, and suggests transfer pricing adjustments; (4) a comprehensive design system with 340+ components ensuring visual and interaction consistency. The progressive disclosure pattern scales the UI from a focused single-filing view to a full multi-entity advisory workspace without cognitive overload.',
    results: [
      { metric: 'Active Users', value: '50K+', description: 'Tax professionals across 40+ countries' },
      { metric: 'Efficiency Gains', value: '$4M', description: 'Annual operational improvement unlocked' },
      { metric: 'Error Reduction', value: '-68%', description: 'Cross-jurisdictional filing error rate decrease' },
      { metric: 'Time Saved', value: '37 min', description: 'Average daily context-switching eliminated per user' },
    ],
    process: [
      { step: 'Discovery & Immersion', description: 'Embedded with 3 regional tax teams for 6 weeks. Shadowed 85+ practitioners, mapped 14 user journeys, and catalogued 47 friction points across the legacy tooling landscape. Conducted stakeholder interviews with partners, managers, and associates to understand divergent mental models.' },
      { step: 'Information Architecture', description: 'Designed a unified data graph connecting all tax domains. Created a progressive disclosure framework that adapts UI complexity based on engagement type, user role, and jurisdictional requirements. Validated architecture with card sorting exercises across 30+ users.' },
      { step: 'Design System & Prototyping', description: 'Built a 340+ component design system ("EY Tax DS") in Figma with tokens for density, accessibility, and regional variants. Prototyped the Tax Command Center, filing workflow engine, and AI copilot through 8 iterative sprints with bi-weekly usability testing sessions involving 15+ participants per round.' },
      { step: 'Validation & Rollout', description: 'Ran a controlled pilot with 2,000 users across 6 countries for 10 weeks. Measured task completion rates, error rates, and SUS scores. Iterated on 23 critical findings before global phased rollout. Post-launch, established a design ops cadence with quarterly UX audits.' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1753955900083-b62ee8d97805?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXglMjBzb2Z0d2FyZSUyMGFuYWx5dGljcyUyMGVudGVycHJpc2V8ZW58MXx8fHwxNzczNDUyMTY5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1666537072206-6a7a01ecb7d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXglMjBjb21wbGlhbmNlJTIwZGF0YSUyMHZpc3VhbGl6YXRpb24lMjBjaGFydHN8ZW58MXx8fHwxNzczNDUyMTc0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1715319932551-e34ae98e5a99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnRlcnByaXNlJTIwU2FhUyUyMGRhc2hib2FyZCUyMHJlcG9ydGluZ3xlbnwxfHx8fDE3NzM0NTIxNzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    testimonial: {
      quote: 'Sasha\'s ability to synthesize complexity into clarity was extraordinary. The platform has fundamentally changed how our tax professionals work — what used to take days of toggling between systems now happens in a single, intuitive workspace. The $4M efficiency gain was just the beginning.',
      author: 'David Thornton',
      role: 'Global Tax Technology Leader, EY',
    },
    nextProject: 'ezyhouse-creative-agency',
  },
  {
    id: 2,
    slug: 'ezyhouse-creative-agency',
    title: 'Award-Winning Creative Agency — EzyHouse',
    category: 'Web Design & Branding',
    year: '2024',
    description: 'Complete digital transformation and brand identity redesign for EzyHouse (ezyhouse.co) — a creative agency specializing in property marketing. Delivered a conversion-optimized website that increased qualified leads by 180%.',
    image: 'https://images.unsplash.com/photo-1758873271902-a63ecd5b5235?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGFnZW5jeSUyMG1vZGVybiUyMG9mZmljZSUyMGRlc2lnbnxlbnwxfHx8fDE3NzM0NTIxNjV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['UI/UX', 'Branding', 'Next.js', 'CMS', 'Motion Design'],
    gradient: 'from-purple-500 to-pink-500',
    client: 'EzyHouse Creative Agency',
    duration: '4 months',
    role: 'Lead Product Designer & Creative Director',
    overview: 'EzyHouse is a creative agency specializing in property marketing, CGI visualization, and branding for real estate developers across London and the South East. Despite producing award-caliber creative work, their own digital presence was severely outdated — a WordPress site from 2019 with a 72% bounce rate, no mobile optimization, and a portfolio that buried their best work. I led a full digital transformation: brand identity refresh, UX strategy, responsive website redesign, and development in Next.js with a headless CMS. The result is a site that mirrors the premium quality of their work, with scroll-driven animations, immersive case studies, and a conversion funnel that turned browsers into booked consultations.',
    challenge: 'EzyHouse had a credibility gap. Their portfolio included stunning CGI renders for luxury developments and brand identities for major property firms — yet their own website looked like a generic template. Bounce rate sat at 72%, average session duration was 43 seconds, and only 2% of visitors reached the contact form. They were losing pitches to agencies with inferior work but stronger digital presence. The site had no CMS (edits required a developer), zero SEO structure, and a PageSpeed score of 31/100 on mobile. The brief was clear: build a digital home as premium as the work inside it.',
    approach: 'Started with competitive benchmarking against 15 top-tier creative agencies globally (Pentagram, Manual, Collins). Ran stakeholder workshops with EzyHouse\'s founders to define brand positioning: "premium craft meets approachable expertise." Conducted user interviews with 12 of their ideal clients (property developers, marketing directors) to understand decision-making criteria. Mapped the buyer journey from discovery to consultation booking. Designed mobile-first in Figma with 3 concept directions, tested with 8 target users via Maze, and refined the winning direction through 4 iterative rounds.',
    solution: 'Delivered a fully bespoke Next.js website with Sanity CMS for portfolio management. Key design decisions: (1) a cinematic hero with full-bleed project imagery and parallax depth to immediately showcase work quality; (2) immersive case study pages with scroll-triggered reveals, before/after sliders for CGI work, and embedded video walkthroughs; (3) a "work filter" that dynamically reorganizes the portfolio by service type, property type, and deliverable; (4) a friction-reducing contact flow — contextual CTAs throughout, a multi-step brief builder instead of a generic form, and calendar integration for instant consultation booking. Built a component library of 200+ Figma components with a brand token system ensuring consistency.',
    results: [
      { metric: 'Lead Generation', value: '+180%', description: 'Increase in qualified consultation requests' },
      { metric: 'Bounce Rate', value: '-45%', description: 'Reduced from 72% to 27%' },
      { metric: 'PageSpeed', value: '95/100', description: 'Lighthouse performance score (was 31)' },
      { metric: 'Session Duration', value: '+320%', description: 'Average time on site from 43s to 2m 51s' },
    ],
    process: [
      { step: 'Discovery & Brand Strategy', description: 'Benchmarked 15 top creative agencies. Workshopped brand positioning with founders. Interviewed 12 ideal clients to map the buyer journey from awareness to booked consultation. Defined content strategy and information architecture.' },
      { step: 'Concept & Wireframing', description: 'Explored 3 concept directions in Figma — "Gallery Museum," "Editorial Magazine," and "Cinematic Showcase." Tested low-fidelity prototypes with 8 target users via Maze. The Cinematic Showcase direction won on perceived premium quality and navigation clarity.' },
      { step: 'Visual Design & Prototyping', description: 'Developed a refined brand identity system — typography pairing (Söhne + Inter), color system, and motion language. Designed high-fidelity responsive layouts with scroll-driven animations, immersive case study templates, and the multi-step brief builder. Built 200+ component library.' },
      { step: 'Development & Launch', description: 'Built in Next.js 14 with Sanity CMS, Vercel deployment, and comprehensive SEO implementation. Achieved 95/100 PageSpeed. Trained the EzyHouse team on CMS workflows. Post-launch A/B tested CTAs and hero variants for 6 weeks, optimizing conversion by an additional 22%.' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1758873271902-a63ecd5b5235?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGFnZW5jeSUyMG1vZGVybiUyMG9mZmljZSUyMGRlc2lnbnxlbnwxfHx8fDE3NzM0NTIxNjV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1726594699522-d7c2f5459f52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGFnZW5jeSUyMHdlYnNpdGUlMjBwb3J0Zm9saW8lMjBzaG93Y2FzZXxlbnwxfHx8fDE3NzM0NTIxNzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1642286941365-89da3e29c0a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjB3aXJlZnJhbWUlMjBwcm90b3R5cGV8ZW58MXx8fHwxNzczMzk1MTkxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    testimonial: {
      quote: 'Sasha didn\'t just redesign our website — she repositioned how clients perceive us. Within the first month, we had more qualified leads than the entire previous quarter. The brief builder alone changed our sales process. We\'re now pitching against agencies twice our size and winning.',
      author: 'James Mitchell',
      role: 'Founder & Creative Director, EzyHouse',
    },
    nextProject: 'accessible-driving-theory',
  },
  {
    id: 3,
    slug: 'accessible-driving-theory',
    title: 'Accessible Driving Theory Learning Platform',
    category: 'EdTech / Accessibility',
    year: '2024',
    description: 'Designed and launched an inclusive, AI-adaptive driving theory platform selected for Microsoft for Startups Founders Hub — making test preparation accessible to learners with dyslexia, ADHD, and visual impairments.',
    image: 'https://images.unsplash.com/photo-1634150870616-f0262983623b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcml2aW5nJTIwdGhlb3J5JTIwbGVhcm5pbmclMjBlZHVjYXRpb24lMjBhcHB8ZW58MXx8fHwxNzczNDUyMTY1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Accessibility', 'AI/ML', 'EdTech', 'React Native', 'Microsoft'],
    gradient: 'from-cyan-500 to-blue-500',
    client: 'Own Venture (Microsoft Founders Hub)',
    duration: '6 months',
    role: 'Product Founder & Lead Designer',
    overview: 'Traditional driving theory apps treat every learner the same — walls of text, generic multiple-choice drills, and zero accommodation for neurodivergent users. As a product founder, I identified that 15% of UK learners have dyslexia, and an additional 8% have ADHD — yet none of the top-10 theory apps met even basic WCAG 2.1 AA standards. I designed and built an AI-adaptive learning platform that personalizes content delivery based on individual learning profiles, offers multimodal content (audio, visual, interactive), and uses spaced repetition algorithms tailored to each user\'s retention curve. The platform was selected for Microsoft for Startups Founders Hub, receiving Azure credits and technical mentorship to scale.',
    challenge: 'The UK driving theory test has a 47% first-time fail rate — and it\'s disproportionately higher for neurodivergent learners. Existing apps rely on rote memorization: static text questions, linear progression, and no adaptive difficulty. Users with dyslexia struggle with dense text-heavy interfaces. Users with ADHD lose engagement with monotonous drilling. Visually impaired users find hazard perception videos completely inaccessible. The market had a $340M annual spend with zero meaningful accessibility innovation. The question wasn\'t "is there demand?" — it was "why hasn\'t anyone solved this?"',
    approach: 'Ran a 4-week research sprint: interviewed 40+ learners (including 15 with diagnosed learning differences), analyzed fail-rate data by demographic, and audited the top 8 competitor apps against WCAG 2.1 AA. Partnered with an educational psychologist to design the adaptive learning model. Created user personas spanning neurotypical learners, dyslexic learners, ADHD learners, and visually impaired users. Prototyped 3 adaptive interaction models and tested them with 25 participants in controlled sessions using eye-tracking and think-aloud protocols. Applied for and was accepted into Microsoft for Startups Founders Hub during the prototype phase based on the technical innovation in AI-driven accessibility.',
    solution: 'Built a React Native app with a Node.js/Azure backend featuring: (1) an AI learning engine that builds a cognitive profile from initial assessment and adapts content format, pacing, and difficulty in real-time; (2) multimodal content delivery — every question available as text, audio narration, illustrated scenario, and interactive animation; (3) an "audio-described hazard perception" mode with spatial audio cues for visually impaired users; (4) a gamified progress system with micro-rewards calibrated to ADHD engagement patterns (variable-ratio reinforcement); (5) a clean, high-contrast UI with adjustable typography, color overlays for dyslexia, and reduced-motion modes. The design system is built on accessibility-first tokens — spacing, contrast, and interaction targets all exceed AAA standards.',
    results: [
      { metric: 'First-Pass Rate', value: '89%', description: 'Users passing theory test on first attempt (vs 53% national avg)' },
      { metric: 'Accessibility Score', value: 'AAA', description: 'WCAG 2.1 AAA compliance across all flows' },
      { metric: 'Engagement', value: '4.2x', description: 'Daily active usage vs leading competitor' },
      { metric: 'Microsoft Hub', value: 'Selected', description: 'Accepted into Microsoft for Startups Founders Hub' },
    ],
    process: [
      { step: 'Research & Problem Framing', description: 'Interviewed 40+ learners including 15 with diagnosed learning differences. Audited 8 competitor apps against WCAG 2.1. Partnered with an educational psychologist. Analyzed DVSA fail-rate data by demographic to quantify the accessibility gap.' },
      { step: 'Adaptive Model Design', description: 'Designed the AI learning engine architecture: initial cognitive assessment, spaced repetition with per-user decay curves, multimodal content routing, and real-time difficulty adaptation. Validated the model with controlled A/B tests across 25 participants using eye-tracking.' },
      { step: 'Accessible Design System', description: 'Built an accessibility-first design system with adjustable typography scales, dyslexia-friendly color overlays, high-contrast modes, and spatial audio integration for hazard perception. Every component exceeds WCAG AAA targets for contrast, target size, and keyboard navigation.' },
      { step: 'MVP & Microsoft Selection', description: 'Shipped MVP to 500 beta users. Measured first-pass rate, engagement metrics, and SUS scores by user segment. Applied to Microsoft for Startups Founders Hub — accepted based on AI-accessibility innovation. Iterated on 34 beta findings before public launch.' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1634150870616-f0262983623b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcml2aW5nJTIwdGhlb3J5JTIwbGVhcm5pbmclMjBlZHVjYXRpb24lMjBhcHB8ZW58MXx8fHwxNzczNDUyMTY1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1608600712992-03e5325d94c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlLWxlYXJuaW5nJTIwcGxhdGZvcm0lMjBzdHVkZW50JTIwbGFwdG9wfGVufDF8fHx8MTc3MzQ1MjE3NXww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1768595701593-c84fd8143aea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2Nlc3NpYmxlJTIwZWR1Y2F0aW9uJTIwdGVjaG5vbG9neSUyMGluY2x1c2l2ZXxlbnwxfHx8fDE3NzM0NTIxNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    testimonial: {
      quote: 'I failed my theory test three times with other apps — the text was overwhelming and I couldn\'t focus. This platform understood how I learn. The audio mode and adaptive pacing made everything click. I passed first time.',
      author: 'Rachel O\'Brien',
      role: 'Beta User (Diagnosed ADHD & Dyslexia)',
    },
    nextProject: 'fintech-mobile-banking',
  },
  {
    id: 4,
    slug: 'fintech-mobile-banking',
    title: 'FinTech Mobile Banking App',
    category: 'Mobile / FinTech',
    year: '2023',
    description: 'Designed a next-generation neobank experience with AI-powered financial coaching, behavioral nudges, and gamified savings — achieving 500K+ downloads and a 4.9/5 app store rating within 6 months.',
    image: 'https://images.unsplash.com/photo-1533234944761-2f5337579079?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBiYW5raW5nJTIwZmluYW5jZSUyMGFwcCUyMGludGVyZmFjZXxlbnwxfHx8fDE3NzM0NTIxNzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Mobile', 'FinTech', 'AI', 'Behavioral Design', 'iOS/Android'],
    gradient: 'from-green-500 to-teal-500',
    client: 'Digital Banking Startup',
    duration: '5 months',
    role: 'Senior Product Designer & Strategist',
    overview: 'Traditional banking apps are transactional ledgers with a fresh coat of paint — they show you what happened, not what to do next. I was brought in to design a mobile banking experience that flips the paradigm: instead of reactive transaction feeds, the app proactively coaches users toward financial health through AI-driven insights, behavioral nudges, and gamified savings mechanics. The challenge was making "responsible finance" feel engaging rather than preachy — borrowing from consumer psychology, game design, and personal coaching patterns. The app launched to 500K+ downloads in 6 months with a sustained 4.9/5 rating.',
    challenge: 'The neobank market is saturated — Monzo, Revolut, and Cash App have commoditized the basics. Our client needed differentiation beyond "another card with an app." User research with 200+ potential customers revealed three critical gaps: (1) 73% felt their banking app was "passive" and wished it helped them make better decisions; (2) Gen Z and millennial users wanted savings tools but found existing ones "boring" and abandoned them within 2 weeks; (3) 61% didn\'t understand their own spending patterns despite having the data in front of them. The brief: design a banking app that people actually want to open every day — not because they have to, but because it makes them feel smarter about money.',
    approach: 'Conducted ethnographic research with 200+ participants across 4 financial literacy segments. Partnered with a behavioral economist to design nudge architecture based on prospect theory and temporal discounting research. Ran a 2-week design sprint to prototype 3 core concepts: "Financial Coach" (AI assistant), "Money Game" (gamified savings), and "Spend Lens" (pattern intelligence). Tested all three with 50 participants using a mix of unmoderated Maze sessions and moderated think-alouds. The winning architecture combined elements from all three based on user preference mapping.',
    solution: 'Delivered a card-based, AI-first interface built around three pillars: (1) "Daily Briefing" — a personalized morning insight card that surfaces one actionable financial insight (e.g., "You\'ve spent 40% more on dining this week than your 3-month average. Tap to see smart swaps."); (2) "Savings Quests" — gamified savings challenges with variable-ratio rewards, streak mechanics, and social accountability features that drive 3.2x daily engagement vs. traditional savings pots; (3) "Financial Health Score" — a dynamic 0-100 score that gamifies overall financial wellness, updated in real-time with clear, achievable actions to improve it. The design language is warm, optimistic, and judgment-free — using color psychology (greens and teals for growth) and micro-animations to celebrate small wins.',
    results: [
      { metric: 'App Rating', value: '4.9/5', description: 'Sustained rating across App Store and Google Play' },
      { metric: 'Downloads', value: '500K+', description: 'Within first 6 months of launch' },
      { metric: 'Daily Engagement', value: '3.2x', description: 'Daily active usage vs neobank industry average' },
      { metric: 'User Savings', value: '+40%', description: 'Average increase in monthly savings per user' },
    ],
    process: [
      { step: 'Ethnographic Research', description: 'Immersive research with 200+ participants across 4 financial literacy segments. Diary studies, spending journal analysis, and 45-minute depth interviews to understand emotional relationships with money. Created 6 behavioral personas mapped to financial psychology archetypes.' },
      { step: 'Behavioral Architecture', description: 'Collaborated with a behavioral economist to design the nudge framework. Applied prospect theory (loss aversion framing for overspending alerts), temporal discounting (future-self visualization for savings), and variable-ratio reinforcement (unpredictable reward timing for engagement). Validated with a 50-person A/B test.' },
      { step: 'Interaction Design & Prototyping', description: 'Designed the card-based AI interface, Savings Quests gamification, and Financial Health Score in Figma. Built interactive prototypes tested across 5 rounds with real financial data scenarios. Iterated on micro-animations and celebration moments through 3 motion design sprints.' },
      { step: 'Phased Launch & Optimization', description: 'Beta with 5,000 users across 3 segments. A/B tested Daily Briefing formats, quest reward structures, and onboarding flows. Iterated on 28 findings. Public launch with phased rollout. Established a weekly "engagement review" cadence with data science to continuously optimize nudge timing and content.' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1533234944761-2f5337579079?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBiYW5raW5nJTIwZmluYW5jZSUyMGFwcCUyMGludGVyZmFjZXxlbnwxfHx8fDE3NzM0NTIxNzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1758611974001-2e7ad7b83432?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwd2FsbGV0JTIwcGF5bWVudCUyMHNtYXJ0cGhvbmV8ZW58MXx8fHwxNzczNDUyMTc2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1741649416183-67f629128edb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW50ZWNoJTIwdXNlciUyMGludGVyZmFjZSUyMGNhcmQlMjBkZXNpZ258ZW58MXx8fHwxNzczNDUyMTc2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    testimonial: {
      quote: 'Sasha\'s design thinking transformed our banking app from a transactional utility into a financial companion people genuinely love. The Savings Quests feature alone drives 40% of our daily opens. Our retention at 90 days is 3x the neobank benchmark.',
      author: 'Sarah Kim',
      role: 'CEO & Co-Founder, Digital Banking Startup',
    },
    nextProject: 'elite-network-platform',
  },
  {
    id: 5,
    slug: 'elite-network-platform',
    title: 'Elite Network Platform',
    category: 'Social / Platform',
    year: '2023',
    description: 'Designed an invite-only professional networking platform connecting top-tier founders, investors, and operators — curated matching, deal flow intelligence, and private collaboration spaces.',
    image: 'https://images.unsplash.com/photo-1685956030848-12ffb660c326?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGl0ZSUyMHByb2Zlc3Npb25hbCUyMG5ldHdvcmtpbmclMjBwbGF0Zm9ybXxlbnwxfHx8fDE3NzM0NTIxNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Platform', 'AI Matching', 'Social', 'React', 'Community'],
    gradient: 'from-amber-500 to-rose-500',
    client: 'Stealth Startup',
    duration: '5 months',
    role: 'Product Designer & UX Architect',
    overview: 'LinkedIn is a megaphone. This platform is a private room. Designed for a stealth startup building an invite-only network for founders, investors, and senior operators (C-suite and VP+), the platform replaces LinkedIn\'s noisy feed-first model with curated AI matching, warm introductions, and private collaboration spaces. Every design decision prioritizes signal over noise: algorithmic matching based on investment thesis, operational expertise, and deal-stage alignment — not engagement metrics. I designed the end-to-end experience from onboarding curation to deal room collaboration.',
    challenge: 'High-value professionals are drowning in low-signal networking noise. LinkedIn has become a content platform where connection requests are spam vectors and the feed rewards performative posting over genuine relationship building. Our user interviews with 60+ founders and VCs revealed: 82% said LinkedIn introductions rarely led to meaningful outcomes; 71% wanted a way to find collaborators matched on substance, not surface; and 90% said they\'d pay a premium for a platform that respected their time. The challenge was designing for exclusivity without creating toxicity — a network that feels curated and high-trust, not elitist and gatekept.',
    approach: 'Interviewed 60+ target users: founders (seed to Series C), investors (angels to institutional VCs), and operators (VP+ at high-growth companies). Mapped their networking behavior: how they currently find collaborators, what makes an introduction "warm," and when they\'d invest time in a new platform. Studied analog models — how private equity deal rooms, members-only clubs (Soho House), and academic peer review create trust and exclusivity. Designed 3 matching algorithm UX concepts and tested them with 20 participants, measuring perceived match quality, trust signals, and willingness to engage.',
    solution: 'Delivered a platform built on three design pillars: (1) "Smart Introductions" — AI-curated weekly matches based on complementary expertise, investment alignment, and mutual connection strength, presented as rich profile cards with context on why you\'re matched (e.g., "Both scaling B2B SaaS in climate tech, aligned on Series A timing"); (2) "Private Rooms" — encrypted collaboration spaces for deal discussions, co-investment coordination, and advisory relationships, with granular permission controls and NDA-aware document sharing; (3) "Reputation Graph" — a trust system built on verified credentials, peer endorsements, and engagement quality rather than follower count or post virality. The onboarding is deliberately selective: a multi-step application with founder/investor verification, LinkedIn enrichment, and existing-member vouching.',
    results: [
      { metric: 'Match Quality', value: '94%', description: 'Users rating AI introductions as "relevant" or "highly relevant"' },
      { metric: 'Conversion Rate', value: '67%', description: 'Introductions that led to a meeting or collaboration' },
      { metric: 'Retention', value: '91%', description: '90-day retention rate among accepted members' },
      { metric: 'Deal Flow', value: '$12M+', description: 'Tracked deal value facilitated through the platform' },
    ],
    process: [
      { step: 'User Research & Market Analysis', description: 'Depth interviews with 60+ founders, investors, and operators. Competitive analysis of LinkedIn, Lunchclub, The Org, and analog models (Soho House, YC alumni network). Mapped trust formation patterns and identified 5 "trust signals" that drive high-value networking engagement.' },
      { step: 'Matching Algorithm UX', description: 'Designed 3 AI matching interface concepts: "Curated Feed," "Weekly Dossier," and "Mutual Discovery." Tested with 20 participants using simulated profiles. The "Weekly Dossier" model won — users preferred depth over breadth, with rich context on match rationale rather than endless swipeable cards.' },
      { step: 'Trust Architecture & Design System', description: 'Designed the Reputation Graph system, selective onboarding flow, and Private Rooms collaboration spaces. Built a design system emphasizing restraint and quality — dark, editorial aesthetic with generous whitespace, verified badges, and subtle status indicators. Every pixel communicates "your time is valued here."' },
      { step: 'Beta & Iteration', description: 'Launched closed beta with 200 hand-selected members (founders + investors). Measured match acceptance rates, meeting conversion, and qualitative trust scores. Iterated on matching algorithm transparency (users wanted to understand "why" behind matches), room permissions UX, and the member verification flow.' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1685956030848-12ffb660c326?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGl0ZSUyMHByb2Zlc3Npb25hbCUyMG5ldHdvcmtpbmclMjBwbGF0Zm9ybXxlbnwxfHx8fDE3NzM0NTIxNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1712971404080-87271ce2e473?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBuZXR3b3JrJTIwY29uZmVyZW5jZSUyMGV2ZW50fGVufDF8fHx8MTc3MzQ1MjE3N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1568658176307-bfbd2873abda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFydHVwJTIwZm91bmRlciUyMGNvbW11bml0eSUyMGNvbGxhYm9yYXRpb258ZW58MXx8fHwxNzczNDUyMTc3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    testimonial: {
      quote: 'This is what LinkedIn should have been for people who actually build things. The AI matching is uncanny — my first three introductions led to a co-investment, an advisory relationship, and a key hire. It\'s the highest-signal professional network I\'ve ever been part of.',
      author: 'Alex Mercer',
      role: 'General Partner, Venture Capital Fund',
    },
    nextProject: 'ey-enterprise-tax-platform',
  },
];

export function getProjectBySlug(slug: string): ProjectData | undefined {
  return projects.find((p) => p.slug === slug);
}
