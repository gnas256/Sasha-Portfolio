import { useParams, Link, useNavigate } from 'react-router';
import { useState, useEffect, useCallback, useRef } from 'react';
import { ArrowLeft, ArrowRight, Calendar, Clock, User, Quote } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { FloatingGradients } from '../components/FloatingGradients';
import { useTheme } from '../components/ThemeContext';
import { getProjectBySlug, projects } from '../data/projects';

const NAV_SECTIONS = [
  { id: 'hero', label: 'Overview' },
  { id: 'overview', label: 'About' },
  { id: 'challenge', label: 'Challenge & Approach' },
  { id: 'solution', label: 'Solution' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'process', label: 'Process' },
  { id: 'results', label: 'Results' },
  { id: 'testimonial', label: 'Testimonial' },
  { id: 'next-project', label: 'Next Project' },
];

function SectionNav({ activeSection, isDark, sections }: { activeSection: string; isDark: boolean; sections: typeof NAV_SECTIONS }) {
  const handleClick = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 100;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }, []);

  return (
    <nav className="hidden xl:flex fixed left-8 2xl:left-12 top-1/2 -translate-y-1/2 z-40 flex-col gap-1">
      <div className={`rounded-2xl px-1 py-3 backdrop-blur-xl ${
        isDark
          ? 'bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)]'
          : 'bg-white/60 border border-[rgba(7,6,14,0.06)] shadow-sm'
      }`}>
        {sections.map((section) => {
          const isActive = activeSection === section.id;
          return (
            <button
              key={section.id}
              onClick={() => handleClick(section.id)}
              className={`group flex items-center gap-3 w-full px-3 py-2 rounded-xl transition-all duration-300 text-left ${
                isActive
                  ? ''
                  : isDark
                    ? 'hover:bg-[rgba(255,255,255,0.04)]'
                    : 'hover:bg-[rgba(7,6,14,0.03)]'
              }`}
            >
              {/* Indicator dot */}
              <div className="relative flex items-center justify-center w-2 h-2 shrink-0">
                <div
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-[#9810fa] to-[#00b8db] scale-100'
                      : isDark
                        ? 'bg-[rgba(255,255,255,0.15)] group-hover:bg-[rgba(255,255,255,0.3)]'
                        : 'bg-[rgba(7,6,14,0.12)] group-hover:bg-[rgba(7,6,14,0.25)]'
                  }`}
                />
                {isActive && (
                  <div className="absolute inset-0 w-2 h-2 rounded-full bg-gradient-to-r from-[#9810fa] to-[#00b8db] animate-ping opacity-30" />
                )}
              </div>

              {/* Label */}
              <span
                className={`text-[11px] tracking-[0.3px] whitespace-nowrap transition-all duration-300 ${
                  isActive
                    ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#C27AFF] to-[#00d3f3]'
                    : isDark
                      ? 'text-[rgba(255,255,255,0.3)] group-hover:text-[rgba(255,255,255,0.6)]'
                      : 'text-[rgba(7,6,14,0.3)] group-hover:text-[rgba(7,6,14,0.6)]'
                }`}
              >
                {section.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}

export function CaseStudy() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { isDark } = useTheme();
  const project = getProjectBySlug(slug || '');
  const [activeSection, setActiveSection] = useState('hero');
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Filter nav sections based on project data
  const visibleSections = NAV_SECTIONS.filter((s) => {
    if (s.id === 'testimonial' && !project?.testimonial) return false;
    if (s.id === 'next-project' && !project?.nextProject) return false;
    return true;
  });

  useEffect(() => {
    if (!project) return;

    // Disconnect previous observer
    if (observerRef.current) observerRef.current.disconnect();

    const sectionIds = visibleSections.map((s) => s.id);
    const entries = new Map<string, IntersectionObserverEntry>();

    observerRef.current = new IntersectionObserver(
      (observedEntries) => {
        observedEntries.forEach((entry) => {
          entries.set(entry.target.id, entry);
        });

        // Find the topmost visible section
        let topSection = '';
        let topY = Infinity;
        entries.forEach((entry, id) => {
          if (entry.isIntersecting && sectionIds.includes(id)) {
            const rect = entry.boundingClientRect;
            if (rect.top < topY) {
              topY = rect.top;
              topSection = id;
            }
          }
        });

        if (topSection) {
          setActiveSection(topSection);
        }
      },
      { rootMargin: '-100px 0px -40% 0px', threshold: 0 }
    );

    // Observe all sections
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observerRef.current!.observe(el);
    });

    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, [project, slug]);

  if (!project) {
    return (
      <div className="pt-32 pb-20 px-4 md:px-8 text-center">
        <h1 className={`text-4xl font-medium mb-4 ${isDark ? 'text-white' : 'text-[#07060e]'}`}>Project not found</h1>
        <Link to="/portfolio" className="text-[#C27AFF] hover:underline">Back to Portfolio</Link>
      </div>
    );
  }

  const nextProject = project.nextProject ? getProjectBySlug(project.nextProject) : null;

  return (
    <div className="pt-24 pb-20">
      {/* Sticky Section Nav */}
      <SectionNav activeSection={activeSection} isDark={isDark} sections={visibleSections} />

      {/* Hero Banner */}
      <section id="hero" className="relative px-4 md:px-8 mb-16">
        <FloatingGradients variant="purple-cyan" />
        <div className="max-w-6xl mx-auto relative">
          {/* Back button */}
          <button
            onClick={() => navigate(-1)}
            className={`inline-flex items-center gap-2 mb-8 text-[14px] font-normal transition-colors ${isDark ? 'text-[rgba(255,255,255,0.5)] hover:text-white' : 'text-[rgba(7,6,14,0.5)] hover:text-[#07060e]'}`}
          >
            <ArrowLeft size={16} />
            Back
          </button>

          {/* Project Meta */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className={`px-3 py-1.5 rounded-full text-[12px] font-normal ${isDark ? 'bg-[rgba(194,122,255,0.1)] border border-[rgba(194,122,255,0.2)] text-[rgba(194,122,255,0.8)]' : 'bg-[rgba(152,16,250,0.06)] border border-[rgba(152,16,250,0.12)] text-[#7c3aed]'}`}>
              {project.category}
            </span>
            <div className={`flex items-center gap-1.5 text-[13px] ${isDark ? 'text-[rgba(255,255,255,0.4)]' : 'text-[rgba(7,6,14,0.4)]'}`}>
              <Calendar size={13} />
              {project.year}
            </div>
            <div className={`flex items-center gap-1.5 text-[13px] ${isDark ? 'text-[rgba(255,255,255,0.4)]' : 'text-[rgba(7,6,14,0.4)]'}`}>
              <Clock size={13} />
              {project.duration}
            </div>
            <div className={`flex items-center gap-1.5 text-[13px] ${isDark ? 'text-[rgba(255,255,255,0.4)]' : 'text-[rgba(7,6,14,0.4)]'}`}>
              <User size={13} />
              {project.role}
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-[56px] font-medium leading-[1.1] tracking-[-1.5px] mb-6">
            <span className={isDark ? 'text-white' : 'text-[#07060e]'}>{project.title}</span>
          </h1>

          <p className={`text-[18px] max-w-3xl leading-[30px] font-normal mb-10 ${isDark ? 'text-[rgba(255,255,255,0.5)]' : 'text-[rgba(7,6,14,0.5)]'}`}>
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-10">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className={`px-4 py-2 rounded-full text-[13px] font-normal ${isDark ? 'bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] text-[rgba(255,255,255,0.6)]' : 'bg-white/60 border border-[rgba(7,6,14,0.06)] text-[rgba(7,6,14,0.6)]'}`}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Hero Image */}
          <div className={`rounded-3xl overflow-hidden ${isDark ? 'border border-[rgba(255,255,255,0.08)]' : 'border border-[rgba(7,6,14,0.06)] shadow-xl'}`}>
            <ImageWithFallback
              src={project.gallery[0]}
              alt={project.title}
              className="w-full aspect-[16/9] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Overview */}
      <section id="overview" className="px-4 md:px-8 mb-20">
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-3xl font-medium tracking-[-0.6px] mb-6 ${isDark ? 'text-white' : 'text-[#07060e]'}`}>Overview</h2>
          <p className={`text-[16px] leading-[28px] ${isDark ? 'text-[rgba(255,255,255,0.6)]' : 'text-[rgba(7,6,14,0.6)]'}`}>
            {project.overview}
          </p>
        </div>
      </section>

      {/* Challenge & Approach */}
      <section id="challenge" className="relative px-4 md:px-8 mb-20">
        <FloatingGradients variant="cyan-purple" />
        <div className="max-w-6xl mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className={`rounded-3xl p-8 md:p-10 ${isDark ? 'bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)]' : 'bg-white/60 border border-[rgba(7,6,14,0.06)] shadow-sm'}`}>
              <div className="w-11 h-11 rounded-xl bg-gradient-to-r from-[#9810fa] to-[#C27AFF] flex items-center justify-center mb-5">
                <span className="text-white text-[15px] font-medium">01</span>
              </div>
              <h3 className={`text-2xl font-medium tracking-[-0.4px] mb-4 ${isDark ? 'text-white' : 'text-[#07060e]'}`}>The Challenge</h3>
              <p className={`text-[15px] leading-[26px] ${isDark ? 'text-[rgba(255,255,255,0.5)]' : 'text-[rgba(7,6,14,0.55)]'}`}>
                {project.challenge}
              </p>
            </div>

            <div className={`rounded-3xl p-8 md:p-10 ${isDark ? 'bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)]' : 'bg-white/60 border border-[rgba(7,6,14,0.06)] shadow-sm'}`}>
              <div className="w-11 h-11 rounded-xl bg-gradient-to-r from-[#00b8db] to-[#00d3f3] flex items-center justify-center mb-5">
                <span className="text-white text-[15px] font-medium">02</span>
              </div>
              <h3 className={`text-2xl font-medium tracking-[-0.4px] mb-4 ${isDark ? 'text-white' : 'text-[#07060e]'}`}>The Approach</h3>
              <p className={`text-[15px] leading-[26px] ${isDark ? 'text-[rgba(255,255,255,0.5)]' : 'text-[rgba(7,6,14,0.55)]'}`}>
                {project.approach}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section id="solution" className="px-4 md:px-8 mb-20">
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-3xl font-medium tracking-[-0.6px] mb-6 ${isDark ? 'text-white' : 'text-[#07060e]'}`}>The Solution</h2>
          <p className={`text-[16px] leading-[28px] ${isDark ? 'text-[rgba(255,255,255,0.6)]' : 'text-[rgba(7,6,14,0.6)]'}`}>
            {project.solution}
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="px-4 md:px-8 mb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.gallery.slice(1).map((img, i) => (
              <div key={i} className={`rounded-2xl overflow-hidden ${isDark ? 'border border-[rgba(255,255,255,0.06)]' : 'border border-[rgba(7,6,14,0.06)] shadow-sm'}`}>
                <ImageWithFallback src={img} alt={`${project.title} - ${i + 2}`} className="w-full aspect-[4/3] object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="relative px-4 md:px-8 mb-20">
        <FloatingGradients variant="mixed" />
        <div className="max-w-6xl mx-auto relative">
          <h2 className={`text-3xl font-medium tracking-[-0.6px] mb-10 text-center ${isDark ? 'text-white' : 'text-[#07060e]'}`}>Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {project.process.map((step, i) => (
              <div key={i} className={`rounded-2xl p-6 relative ${isDark ? 'bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)]' : 'bg-white/60 border border-[rgba(7,6,14,0.06)] shadow-sm'}`}>
                <div className="text-[40px] font-medium bg-gradient-to-r from-[#C27AFF] to-[#00d3f3] bg-clip-text text-transparent mb-3 leading-none">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h4 className={`text-[15px] font-medium mb-2 ${isDark ? 'text-white' : 'text-[#07060e]'}`}>{step.step}</h4>
                <p className={`text-[13px] leading-[20px] ${isDark ? 'text-[rgba(255,255,255,0.4)]' : 'text-[rgba(7,6,14,0.45)]'}`}>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section id="results" className="px-4 md:px-8 mb-20">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-3xl font-medium tracking-[-0.6px] mb-10 text-center ${isDark ? 'text-white' : 'text-[#07060e]'}`}>Results & Impact</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {project.results.map((result, i) => (
              <div key={i} className={`rounded-2xl p-6 text-center ${isDark ? 'bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)]' : 'bg-white/60 border border-[rgba(7,6,14,0.06)] shadow-sm'}`}>
                <div className="text-3xl md:text-4xl font-medium bg-gradient-to-r from-[#C27AFF] to-[#00d3f3] bg-clip-text text-transparent mb-2">
                  {result.value}
                </div>
                <div className={`text-[14px] font-medium mb-1 ${isDark ? 'text-white' : 'text-[#07060e]'}`}>{result.metric}</div>
                <div className={`text-[12px] ${isDark ? 'text-[rgba(255,255,255,0.35)]' : 'text-[rgba(7,6,14,0.4)]'}`}>{result.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      {project.testimonial && (
        <section id="testimonial" className="px-4 md:px-8 mb-20">
          <div className="max-w-4xl mx-auto">
            <div className={`rounded-3xl p-8 md:p-12 relative overflow-hidden ${isDark ? 'bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)]' : 'bg-white/60 border border-[rgba(7,6,14,0.06)] shadow-sm'}`}>
              <div className={`absolute top-6 right-8 ${isDark ? 'text-[rgba(152,16,250,0.1)]' : 'text-[rgba(152,16,250,0.06)]'}`}>
                <Quote size={80} />
              </div>
              <div className="relative">
                <p className={`text-[18px] md:text-[20px] leading-[32px] mb-8 italic ${isDark ? 'text-[rgba(255,255,255,0.7)]' : 'text-[rgba(7,6,14,0.65)]'}`}>
                  "{project.testimonial.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#9810fa] to-[#00b8db] flex items-center justify-center text-white text-[14px] font-medium">
                    {project.testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <div className={`text-[14px] font-medium ${isDark ? 'text-white' : 'text-[#07060e]'}`}>{project.testimonial.author}</div>
                    <div className={`text-[12px] ${isDark ? 'text-[rgba(255,255,255,0.4)]' : 'text-[rgba(7,6,14,0.4)]'}`}>{project.testimonial.role}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Next Project */}
      {nextProject && (
        <section id="next-project" className="px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className={`h-px mb-12 ${isDark ? 'bg-[rgba(255,255,255,0.06)]' : 'bg-[rgba(7,6,14,0.06)]'}`} />
            <div className={`text-center mb-6 text-[12px] uppercase tracking-[3px] ${isDark ? 'text-[rgba(255,255,255,0.3)]' : 'text-[rgba(7,6,14,0.3)]'}`}>
              Next Case Study
            </div>
            <Link
              to={`/case-study/${nextProject.slug}`}
              className={`group block rounded-3xl overflow-hidden transition-all hover:scale-[1.01] ${isDark ? 'bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)] hover:bg-[rgba(255,255,255,0.05)]' : 'bg-white/60 border border-[rgba(7,6,14,0.06)] shadow-sm hover:shadow-md'}`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={nextProject.image}
                    alt={nextProject.title}
                    className="w-full aspect-[4/3] lg:aspect-auto lg:h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <span className="text-[13px] text-[rgba(194,122,255,0.8)] font-normal tracking-[0.325px] mb-3">{nextProject.category}</span>
                  <h3 className={`text-2xl md:text-3xl font-medium tracking-[-0.6px] mb-4 ${isDark ? 'text-white' : 'text-[#07060e]'}`}>
                    {nextProject.title}
                  </h3>
                  <p className={`text-[15px] leading-[24px] font-normal mb-6 ${isDark ? 'text-[rgba(255,255,255,0.4)]' : 'text-[rgba(7,6,14,0.45)]'}`}>
                    {nextProject.description}
                  </p>
                  <div className={`inline-flex items-center gap-2 text-[15px] font-normal ${isDark ? 'text-white' : 'text-[#07060e]'}`}>
                    View Case Study
                    <ArrowRight size={16} className="text-[#C27AFF] group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}
    </div>
  );
}
