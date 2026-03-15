import { Download, Briefcase, GraduationCap, Award, Code, Users, Brain, Package, User, Mail, MapPin } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useTheme } from '../components/ThemeContext';
import { FloatingGradients } from '../components/FloatingGradients';
import { HeroWorldMap } from '../components/home/HeroWorldMap';
import imgAvatar from "../../assets/15bc453d9f2282c06c78b2da534b1a9d528b0d3a.png";

export function Resume() {
  const { isDark } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 200);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const experience = [
    {
      role: 'Chief Product Officer & Co-Founder',
      company: 'TechVentures AI',
      period: '2022 - Present',
      description: 'Leading product strategy and design for AI-powered enterprise solutions. Scaled product from 0 to 10,000+ users across 15 countries.',
      achievements: [
        'Built and led cross-functional team of 25+ designers and engineers',
        'Launched 8 major product features with 98% user satisfaction',
        'Secured $5M Series A funding through product vision and roadmap',
      ],
    },
    {
      role: 'Senior Product Designer',
      company: 'Innovation Labs',
      period: '2019 - 2022',
      description: 'Led design initiatives for B2B SaaS platform serving Fortune 500 clients.',
      achievements: [
        'Redesigned core product, increasing user engagement by 150%',
        'Created comprehensive design system adopted across 12 products',
        'Mentored team of 8 junior designers',
      ],
    },
    {
      role: 'Product Designer',
      company: 'Digital Creative Studio',
      period: '2017 - 2019',
      description: 'Designed digital experiences for startups and established brands.',
      achievements: [
        'Delivered 15+ successful projects for clients including major brands',
        'Won 3 design awards for innovative user experiences',
        'Developed expertise in UX research and user testing',
      ],
    },
    {
      role: 'UI/UX Designer',
      company: 'Startup Accelerator',
      period: '2015 - 2017',
      description: 'Worked with early-stage startups to define and design their initial products.',
      achievements: [
        'Helped 10+ startups launch their MVP products',
        'Conducted user research and validation for diverse markets',
        'Established foundation in lean product development',
      ],
    },
  ];

  const education = [
    { degree: 'Master of Design', school: 'Royal College of Art', period: '2013 - 2015', focus: 'Human-Computer Interaction & Innovation Design' },
    { degree: 'Bachelor of Arts', school: 'University of Arts London', period: '2009 - 2013', focus: 'Graphic Design & Digital Media' },
  ];

  const skills = [
    { category: 'Design', items: ['UI/UX Design', 'Design Systems', 'Prototyping', 'User Research', 'Figma', 'Adobe CC'] },
    { category: 'Product', items: ['Product Strategy', 'Roadmapping', 'A/B Testing', 'Analytics', 'Agile/Scrum'] },
    { category: 'Technical', items: ['HTML/CSS', 'React', 'Design Tokens', 'API Design', 'AI/ML Basics'] },
    { category: 'Leadership', items: ['Team Management', 'Stakeholder Communication', 'Workshop Facilitation', 'Mentoring'] },
  ];

  const awards = [
    { title: 'Product Designer of the Year', org: 'Design Awards 2024', year: '2024' },
    { title: 'Innovation in AI Design', org: 'Tech Innovation Summit', year: '2023' },
    { title: 'Best UX Project', org: 'UX Design Awards', year: '2022' },
    { title: 'Rising Star Designer', org: 'Creative Industry Awards', year: '2020' },
  ];

  const cardClass = `backdrop-blur-xl rounded-3xl p-8 transition-all ${isDark ? 'bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)] hover:bg-[rgba(255,255,255,0.05)]' : 'bg-white/60 border border-[rgba(7,6,14,0.06)] shadow-sm hover:shadow-md'}`;

  return (
    <div className="relative">
      {/* Sticky download button — top right, appears on scroll */}
      <button
        className={`fixed top-20 right-4 md:right-8 z-50 group w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 bg-gradient-to-r from-[#9810fa] to-[#00b8db] shadow-[0_4px_20px_rgba(152,16,250,0.3)] hover:scale-110 ${isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}
        title="Download PDF Resume"
        aria-label="Download PDF Resume"
      >
        <Download size={18} className="text-white group-hover:-translate-y-0.5 transition-transform" />
      </button>

      {/* Hero Section — matches homepage style */}
      <section className="relative min-h-[60vh] flex items-center justify-center px-4 md:px-8 pt-28 md:pt-32 pb-16">
        {/* Particle globe background */}
        <div className="absolute -inset-y-32 inset-x-0 pointer-events-none overflow-visible">
          <HeroWorldMap isDark={isDark} densityScale={0.5} />
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="text-center space-y-5">
            {/* Avatar */}
            <div className="flex justify-center mb-2">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#9810fa] to-[#00b8db] rounded-full blur-md opacity-50" />
                <img
                  src={imgAvatar}
                  alt="Sasha Nguyen"
                  className={`w-16 h-16 md:w-20 md:h-20 rounded-full object-cover relative z-10 ${isDark ? 'border-2 border-white/20' : 'border-2 border-[rgba(7,6,14,0.1)]'}`}
                />
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-[26px] md:text-5xl lg:text-[56px] font-medium leading-[1.15] tracking-[-1px] md:tracking-[-1.5px] mb-2">
              <span className={`block bg-clip-text text-transparent ${isDark ? 'bg-gradient-to-r from-[#b44aff] via-[#d98fff] to-[#00e5ff]' : 'bg-gradient-to-r from-[#6a00c7] via-[#8b0ce8] to-[#007a96]'}`}>
                Sasha Nguyen
              </span>
            </h1>

            {/* Subtitle */}
            <p className={`text-[15px] md:text-[20px] max-w-2xl mx-auto leading-[24px] md:leading-[32.5px] font-normal ${isDark ? 'text-[rgba(255,255,255,0.4)]' : 'text-[rgba(13,5,37,0.6)]'}`}>
              AI-driven Product Founder &bull; Customer-focused Innovator &bull; Award-winning Strategic Designer
            </p>

            {/* Contact line */}
            <div className={`flex items-center justify-center gap-4 text-[13px] md:text-[14px] ${isDark ? 'text-[rgba(255,255,255,0.35)]' : 'text-[rgba(7,6,14,0.4)]'}`}>
              <span className="flex items-center gap-1.5">
                <Mail size={13} className={isDark ? 'text-[#C27AFF]' : 'text-[#9810fa]'} />
                sasha@example.com
              </span>
              <span className={`w-1 h-1 rounded-full ${isDark ? 'bg-[rgba(255,255,255,0.2)]' : 'bg-[rgba(7,6,14,0.15)]'}`} />
              <span className="flex items-center gap-1.5">
                <MapPin size={13} className={isDark ? 'text-[#C27AFF]' : 'text-[#9810fa]'} />
                San Francisco, CA
              </span>
            </div>

            {/* Stats — mobile pill strip | desktop cards (moved below subtitle) */}
            <div className="flex items-center justify-center gap-2 md:gap-3 pt-4">
              {/* Mobile pill strip */}
              <div className={`flex md:hidden items-center gap-0 rounded-full backdrop-blur-xl border overflow-hidden ${
                isDark
                  ? 'bg-[rgba(255,255,255,0.04)] border-[rgba(255,255,255,0.08)]'
                  : 'bg-white/70 border-[rgba(120,60,200,0.12)]'
              }`}>
                {[
                  { icon: Award, value: '10+ Yrs' },
                  { icon: Users, value: '4 Startups' },
                  { icon: Package, value: '25+ Products' },
                ].map((stat, idx) => {
                  const Icon = stat.icon;
                  return (
                    <div key={stat.value} className="flex items-center">
                      {idx > 0 && (
                        <div className={`w-px h-4 ${isDark ? 'bg-[rgba(255,255,255,0.1)]' : 'bg-[rgba(7,6,14,0.1)]'}`} />
                      )}
                      <div className="flex items-center gap-1.5 px-3 py-2">
                        <Icon size={12} className={isDark ? 'text-[#C27AFF]' : 'text-[#9810fa]'} />
                        <span className={`text-[11px] tracking-[-0.2px] ${isDark ? 'text-[rgba(255,255,255,0.7)]' : 'text-[#1a0a3e]/80'}`}>{stat.value}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Desktop cards */}
              {[
                { icon: Award, value: '10+ Years', label: 'Experience' },
                { icon: Users, value: '4 Startups', label: 'Founded' },
                { icon: Package, value: '25+ Products', label: 'Shipped' },
              ].map((stat) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className={`hidden md:flex items-center gap-3 px-5 py-3 rounded-2xl backdrop-blur-xl border transition-all ${
                      isDark
                        ? 'bg-[rgba(255,255,255,0.04)] border-[rgba(255,255,255,0.08)] shadow-[0_4px_24px_rgba(152,16,250,0.06)]'
                        : 'bg-white/70 border-[rgba(120,60,200,0.12)]'
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-2xl flex items-center justify-center ${
                      isDark
                        ? 'bg-gradient-to-br from-[rgba(173,70,255,0.2)] to-[rgba(0,184,219,0.2)]'
                        : 'bg-gradient-to-br from-[rgba(152,16,250,0.12)] to-[rgba(0,184,219,0.12)]'
                    }`}>
                      <Icon size={20} className={isDark ? 'text-[#C27AFF]' : 'text-[#9810fa]'} />
                    </div>
                    <div className="text-left">
                      <div className={`text-[15px] font-normal tracking-[-0.375px] leading-[1.4] ${isDark ? 'text-white' : 'text-[#1a0a3e]'}`}>{stat.value}</div>
                      <div className={`text-[12px] font-normal leading-[1.4] ${isDark ? 'text-[rgba(255,255,255,0.3)]' : 'text-[rgba(7,6,14,0.45)]'}`}>{stat.label}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Download button — inline, visible before scroll */}
            
          </div>
        </div>
      </section>

      {/* Content sections */}
      <div className="pb-20 px-4 md:px-8 relative">
        <FloatingGradients variant="purple-cyan" />
        <div className="max-w-5xl mx-auto relative">

          {/* About */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#9810fa] to-[#00b8db] flex items-center justify-center">
                <User size={24} className="text-white" />
              </div>
              <h2 className={`text-3xl font-medium ${isDark ? 'text-white' : 'text-[#07060e]'}`}>About</h2>
            </div>
            <div className={cardClass}>
              <p className={`text-[17px] leading-[1.7] mb-4 ${isDark ? 'text-[rgba(255,255,255,0.6)]' : 'text-[rgba(7,6,14,0.6)]'}`}>
                I'm a product-minded founder and designer with over a decade of experience building digital products that sit at the intersection of <span className={isDark ? 'text-white' : 'text-[#07060e]'}>AI, design, and business strategy</span>. I've co-founded 4 startups, shipped 25+ products, and led cross-functional teams from zero to scale.
              </p>
              <p className={`text-[17px] leading-[1.7] mb-4 ${isDark ? 'text-[rgba(255,255,255,0.6)]' : 'text-[rgba(7,6,14,0.6)]'}`}>
                My approach combines deep empathy for users with a rigorous, data-driven methodology. I believe the best products emerge when you listen closely to customer pain points and pair that insight with cutting-edge technology — especially AI and machine learning — to create experiences that feel effortless and delightful.
              </p>
              <p className={`text-[17px] leading-[1.7] ${isDark ? 'text-[rgba(255,255,255,0.6)]' : 'text-[rgba(7,6,14,0.6)]'}`}>
                When I'm not designing or strategizing, you'll find me mentoring emerging designers, speaking at industry conferences, and exploring the latest in generative AI, human-computer interaction, and creative coding.
              </p>
            </div>
          </section>

          {/* Experience */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
                <Briefcase size={24} className="text-white" />
              </div>
              <h2 className={`text-3xl font-medium ${isDark ? 'text-white' : 'text-[#07060e]'}`}>Experience</h2>
            </div>

            <div className="space-y-6">
              {experience.map((job, index) => (
                <div key={index} className={cardClass}>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className={`text-2xl font-medium mb-1 ${isDark ? 'text-white' : 'text-[#07060e]'}`}>{job.role}</h3>
                      <p className="text-[#C27AFF] font-medium">{job.company}</p>
                    </div>
                    <span className={`inline-block mt-2 md:mt-0 px-4 py-2 rounded-full text-sm ${isDark ? 'bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] text-[rgba(255,255,255,0.6)]' : 'bg-[rgba(7,6,14,0.03)] border border-[rgba(7,6,14,0.06)] text-[rgba(7,6,14,0.5)]'}`}>
                      {job.period}
                    </span>
                  </div>
                  <p className={`mb-4 ${isDark ? 'text-[rgba(255,255,255,0.5)]' : 'text-[rgba(7,6,14,0.5)]'}`}>{job.description}</p>
                  <ul className="space-y-2">
                    {job.achievements.map((a, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#C27AFF] mt-2 shrink-0" />
                        <span className={isDark ? 'text-[rgba(255,255,255,0.45)]' : 'text-[rgba(7,6,14,0.45)]'}>{a}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                <GraduationCap size={24} className="text-white" />
              </div>
              <h2 className={`text-3xl font-medium ${isDark ? 'text-white' : 'text-[#07060e]'}`}>Education</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {education.map((edu, index) => (
                <div key={index} className={cardClass}>
                  <h3 className={`text-xl font-medium mb-2 ${isDark ? 'text-white' : 'text-[#07060e]'}`}>{edu.degree}</h3>
                  <p className="text-[#C27AFF] font-medium mb-2">{edu.school}</p>
                  <p className={`text-sm mb-3 ${isDark ? 'text-[rgba(255,255,255,0.4)]' : 'text-[rgba(7,6,14,0.4)]'}`}>{edu.period}</p>
                  <p className={`text-sm ${isDark ? 'text-[rgba(255,255,255,0.5)]' : 'text-[rgba(7,6,14,0.5)]'}`}>{edu.focus}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Skills */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                <Brain size={24} className="text-white" />
              </div>
              <h2 className={`text-3xl font-medium ${isDark ? 'text-white' : 'text-[#07060e]'}`}>Skills & Expertise</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((s) => (
                <div key={s.category} className={cardClass}>
                  <h3 className={`text-xl font-medium mb-4 ${isDark ? 'text-white' : 'text-[#07060e]'}`}>{s.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {s.items.map((skill) => (
                      <span key={skill} className={`px-3 py-1.5 rounded-full text-sm ${isDark ? 'bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.08)] text-[rgba(255,255,255,0.7)]' : 'bg-[rgba(7,6,14,0.03)] border border-[rgba(7,6,14,0.06)] text-[rgba(7,6,14,0.6)]'}`}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Awards */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-orange-500 flex items-center justify-center">
                <Award size={24} className="text-white" />
              </div>
              <h2 className={`text-3xl font-medium ${isDark ? 'text-white' : 'text-[#07060e]'}`}>Awards & Recognition</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {awards.map((award, index) => (
                <div key={index} className={cardClass}>
                  <div className="flex items-start justify-between mb-2">
                    <h3 className={`text-lg font-medium flex-1 ${isDark ? 'text-white' : 'text-[#07060e]'}`}>{award.title}</h3>
                    <span className="px-3 py-1 rounded-full bg-gradient-to-r from-[#9810fa] to-[#00b8db] text-xs text-white font-medium">
                      {award.year}
                    </span>
                  </div>
                  <p className={`text-sm ${isDark ? 'text-[rgba(255,255,255,0.45)]' : 'text-[rgba(7,6,14,0.45)]'}`}>{award.org}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}