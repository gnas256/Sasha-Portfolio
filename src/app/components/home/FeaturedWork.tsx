import { useRef } from 'react';
import { ArrowRight, ArrowUpRight, Trophy, Rocket, Download, Sparkles, Building2, Globe2 } from 'lucide-react';
import { Link } from 'react-router';
import { motion, useInView } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { FloatingGradients } from '../FloatingGradients';
import { useTheme } from '../ThemeContext';
import { projects } from '../../data/projects';

interface ImpactItem {
  value: string;
  label: string;
}

const IMPACT_DATA: Record<string, { badge: string; badgeIcon: typeof Trophy; items: ImpactItem[] }> = {
  'ey-enterprise-tax-platform': {
    badge: 'EY — 50K Users',
    badgeIcon: Building2,
    items: [
      { value: '$4M', label: 'Efficiency' },
      { value: '50K+', label: 'Users' },
      { value: '-68%', label: 'Error Rate' },
    ],
  },
  'ezyhouse-creative-agency': {
    badge: 'Award-Winning',
    badgeIcon: Trophy,
    items: [
      { value: '+180%', label: 'Lead Gen' },
      { value: '-45%', label: 'Bounce Rate' },
      { value: '95', label: 'PageSpeed' },
    ],
  },
  'accessible-driving-theory': {
    badge: 'Microsoft Founders Hub',
    badgeIcon: Rocket,
    items: [
      { value: '89%', label: 'Pass Rate' },
      { value: 'AAA', label: 'WCAG' },
      { value: '4.2x', label: 'Engagement' },
    ],
  },
  'fintech-mobile-banking': {
    badge: '500K+ Downloads',
    badgeIcon: Download,
    items: [
      { value: '4.9/5', label: 'App Rating' },
      { value: '3.2x', label: 'Daily Usage' },
      { value: '+40%', label: 'User Savings' },
    ],
  },
  'elite-network-platform': {
    badge: 'Invite-Only Launch',
    badgeIcon: Globe2,
    items: [
      { value: '94%', label: 'Match Quality' },
      { value: '67%', label: 'Conversion' },
      { value: '$12M+', label: 'Deal Flow' },
    ],
  },
};

function ProjectCard({ project, index, isDark }: { project: typeof projects[0]; index: number; isDark: boolean }) {
  const impact = IMPACT_DATA[project.slug];
  const BadgeIcon = impact?.badgeIcon;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        to={`/case-study/${project.slug}`}
        className={`group relative block rounded-2xl overflow-hidden transition-all duration-500 ${
          isDark
            ? 'bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.06)] hover:border-[rgba(194,122,255,0.2)] hover:shadow-[0_8px_60px_rgba(152,16,250,0.08)]'
            : 'bg-white/40 border border-[rgba(7,6,14,0.06)] hover:border-[rgba(152,16,250,0.15)] hover:shadow-[0_12px_50px_rgba(152,16,250,0.08)]'
        }`}
      >
        {/* Full-width image with gradient fade into content */}
        <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden">
          <ImageWithFallback
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
          />

          {/* Gradient overlay — image fades into content area */}
          <div className={`absolute inset-0 ${
            isDark
              ? 'bg-gradient-to-b from-transparent via-transparent via-30% to-[#07060e]'
              : 'bg-gradient-to-b from-transparent via-transparent via-30% to-[#f8f7ff]'
          }`} />
          <div className={`absolute inset-0 ${
            isDark
              ? 'bg-gradient-to-r from-[#07060e]/30 to-transparent'
              : 'bg-gradient-to-r from-[#f8f7ff]/20 to-transparent'
          }`} />

          {/* Top-left badge */}
          {impact && (
            <div className="absolute top-5 left-5 z-10">
              <div className={`relative overflow-hidden rounded-full px-4 py-2 flex items-center gap-2 shadow-lg ${
                isDark
                  ? 'bg-gradient-to-r from-[rgba(152,16,250,0.35)] to-[rgba(0,184,219,0.25)] border border-[rgba(194,122,255,0.3)] shadow-[0_4px_20px_rgba(152,16,250,0.2)]'
                  : 'bg-gradient-to-r from-[rgba(152,16,250,0.12)] to-[rgba(0,184,219,0.08)] border border-[rgba(152,16,250,0.2)] shadow-[0_4px_16px_rgba(152,16,250,0.1)]'
              }`}>
                {/* Shimmer sweep */}
                <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out`} />
                <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                  isDark
                    ? 'bg-[rgba(194,122,255,0.25)]'
                    : 'bg-[rgba(152,16,250,0.15)]'
                }`}>
                  <BadgeIcon size={11} className={isDark ? 'text-[#d99eff]' : 'text-[#9810fa]'} />
                </div>
                <span className={`relative text-[11px] tracking-[0.4px] ${isDark ? 'text-white/90' : 'text-[#07060e]/80'}`}>
                  {impact.badge}
                </span>
                <Sparkles size={10} className={isDark ? 'text-[#C27AFF]/60' : 'text-[#9810fa]/40'} />
              </div>
            </div>
          )}

          {/* Hover-only CTA — centered on image */}
          <div className="absolute inset-0 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
            <motion.div
              className={`flex items-center gap-2.5 px-6 py-3 rounded-full backdrop-blur-xl transition-all duration-500 translate-y-4 group-hover:translate-y-0 ${
                isDark
                  ? 'bg-white/10 border border-white/20 text-white'
                  : 'bg-white/80 border border-white/60 text-[#07060e] shadow-lg'
              }`}
            >
              <span className="text-[13px] tracking-[0.3px]">Open Case Study</span>
              <ArrowUpRight size={14} />
            </motion.div>
          </div>

          {/* Category pill on image */}
          <div className="absolute top-5 right-5 z-10">
            <span className={`text-[11px] tracking-[1px] uppercase px-3 py-1 rounded-full backdrop-blur-xl ${
              isDark
                ? 'bg-[rgba(255,255,255,0.06)] text-[rgba(255,255,255,0.6)] border border-[rgba(255,255,255,0.08)]'
                : 'bg-white/60 text-[rgba(7,6,14,0.5)] border border-white/50'
            }`}>
              {project.category}
            </span>
          </div>
        </div>

        {/* Content area — sits below gradient transition */}
        <div className="relative px-7 pb-7 pt-2 md:px-8 md:pb-8">
          {/* Title */}
          <h3 className={`text-[22px] md:text-[26px] font-medium tracking-[-0.5px] leading-[1.2] mb-3 transition-colors duration-500 ${
            isDark
              ? 'text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#C27AFF] group-hover:to-[#00d3f3] group-hover:bg-clip-text'
              : 'text-[#07060e] group-hover:text-[#7c3aed]'
          }`}>
            {project.title}
          </h3>

          {/* Description */}
          <p className={`text-[14px] leading-[23px] mb-6 max-w-2xl ${isDark ? 'text-[rgba(255,255,255,0.4)]' : 'text-[rgba(7,6,14,0.5)]'}`}>
            {project.description}
          </p>

          {/* Bottom row: metrics + tags */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5">
            {/* Impact metrics */}
            {impact && (
              <div className="flex items-center gap-5 md:gap-7">
                {impact.items.map((item, idx) => (
                  <div key={item.label} className="flex items-center gap-5 md:gap-7">
                    <div>
                      <div className={`text-[18px] md:text-[20px] font-medium tracking-[-0.3px] leading-none bg-clip-text text-transparent ${isDark ? 'bg-gradient-to-r from-[#C27AFF] to-[#00d3f3]' : 'bg-gradient-to-r from-[#7a0dd4] to-[#0088a8]'}`}>
                        {item.value}
                      </div>
                      <div className={`text-[10px] mt-1.5 tracking-[0.3px] uppercase ${isDark ? 'text-[rgba(255,255,255,0.25)]' : 'text-[rgba(7,6,14,0.35)]'}`}>
                        {item.label}
                      </div>
                    </div>
                    {idx < impact.items.length - 1 && (
                      <div className={`w-px h-7 ${isDark ? 'bg-[rgba(255,255,255,0.06)]' : 'bg-[rgba(7,6,14,0.06)]'}`} />
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className={`px-2.5 py-1 rounded-full text-[10px] tracking-[0.3px] ${
                    isDark
                      ? 'bg-[rgba(255,255,255,0.04)] text-[rgba(255,255,255,0.35)]'
                      : 'bg-[rgba(7,6,14,0.03)] text-[rgba(7,6,14,0.4)]'
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export function FeaturedWork() {
  const { isDark } = useTheme();
  const featured = projects.slice(0, 3);
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' });

  return (
    <section className="relative py-20 px-4 md:px-8">
      <FloatingGradients variant="cyan-purple" />
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-xl mb-6 ${isDark ? 'bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)]' : 'bg-[rgba(152,16,250,0.04)] border border-[rgba(152,16,250,0.1)]'}`}>
            <span className={`text-[13px] font-normal tracking-[0.325px] ${isDark ? 'text-[rgba(194,122,255,0.8)]' : 'text-[#7c3aed]'}`}>Featured Work</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-medium mb-4 tracking-[-1.2px]">
            <span className={`bg-clip-text text-transparent ${isDark ? 'bg-gradient-to-r from-[#C27AFF] via-[#00d3f3] to-[#C27AFF]' : 'bg-gradient-to-r from-[#6a00c7] via-[#0080a0] to-[#6a00c7]'}`}>
              Featured Works
            </span>
          </h2>
          <p className={`text-[16px] max-w-2xl mx-auto leading-[26px] font-normal ${isDark ? 'text-[rgba(255,255,255,0.4)]' : 'text-[rgba(7,6,14,0.45)]'}`}>
            A showcase of impactful work across AI, design, and product development
          </p>
        </motion.div>

        {/* Projects */}
        <div className="space-y-8 max-w-5xl mx-auto">
          {featured.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} isDark={isDark} />
          ))}
        </div>

        {/* View All */}
        <motion.div
          className="text-center mt-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#9810fa] to-[#00b8db] text-white text-[14px] tracking-[0.3px] hover:opacity-90 transition-opacity duration-300"
          >
            View All Projects
            <ArrowRight size={15} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}