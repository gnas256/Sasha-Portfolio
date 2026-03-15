import { useRef, useEffect, useState } from 'react';
import { Search, Lightbulb, Code, Rocket, LineChart, Users, Target, Zap } from 'lucide-react';
import { motion, useInView } from 'motion/react';
import { FloatingGradients } from '../FloatingGradients';
import { useTheme } from '../ThemeContext';

function AnimatedBar({ width, color, isDark }: { width: number; color: string; isDark: boolean }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <div ref={ref} className={`h-1.5 rounded-full overflow-hidden ${isDark ? 'bg-[rgba(255,255,255,0.04)]' : 'bg-[rgba(7,6,14,0.04)]'}`}>
      <motion.div
        className={`h-full rounded-full bg-gradient-to-r ${color}`}
        initial={{ width: 0, opacity: 0.5 }}
        animate={isInView ? { width: `${width}%`, opacity: 1 } : {}}
        transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  );
}

function AnimatedCounter({ value, inView }: { value: string; inView: boolean }) {
  const [display, setDisplay] = useState(value);
  const numericMatch = value.match(/^(\d+\.?\d*)/);

  useEffect(() => {
    if (!inView || !numericMatch) {
      setDisplay(value);
      return;
    }
    const target = parseFloat(numericMatch[1]);
    const suffix = value.replace(numericMatch[1], '');
    const duration = 1200;
    const startTime = Date.now();
    const isFloat = value.includes('.');

    const tick = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = target * eased;
      setDisplay((isFloat ? current.toFixed(1) : Math.round(current).toString()) + suffix);
      if (progress < 1) requestAnimationFrame(tick);
    };
    tick();
  }, [inView, value]);

  return <>{display}</>;
}

export function ProcessSection() {
  const { isDark } = useTheme();
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' });

  const processes = [
    { number: '01', title: 'AI-Powered Research', description: 'AI agents scan thousands of data points in minutes — what used to take weeks now takes hours.', icon: Search, color: 'from-cyan-400 to-blue-500', aiMultiplier: '10x', aiLabel: 'Faster Insights', barWidth: 85 },
    { number: '02', title: 'Rapid Ideation', description: 'Generate 50+ concepts in a single session using vibe coding and generative design.', icon: Lightbulb, color: 'from-blue-500 to-purple-500', aiMultiplier: '5x', aiLabel: 'More Concepts', barWidth: 70 },
    { number: '03', title: 'Design & Prototype', description: 'Vibe coding enables real-time design-to-code — cutting production time by 80%.', icon: Code, color: 'from-purple-500 to-pink-500', aiMultiplier: '5x', aiLabel: 'Speed Boost', barWidth: 70 },
    { number: '04', title: 'Smart Testing', description: 'Automated A/B testing at scale delivers data-driven insights in real-time.', icon: Target, color: 'from-pink-500 to-red-500', aiMultiplier: '3x', aiLabel: 'Faster QA', barWidth: 55 },
    { number: '05', title: 'AI-Augmented Dev', description: 'AI pair programming turns weeks of development into days with zero quality compromise.', icon: Rocket, color: 'from-red-500 to-orange-500', aiMultiplier: '8x', aiLabel: 'Dev Speed', barWidth: 80 },
    { number: '06', title: 'Launch & Measure', description: 'Predictive performance monitoring and automated optimization from day one.', icon: LineChart, color: 'from-orange-500 to-yellow-500', aiMultiplier: '4x', aiLabel: 'Faster Launch', barWidth: 60 },
    { number: '07', title: 'Continuous Evolution', description: 'AI monitors behavior, suggests improvements, and automates iterative enhancements.', icon: Users, color: 'from-yellow-500 to-green-500', aiMultiplier: '∞', aiLabel: 'Always On', barWidth: 95 },
  ];

  return (
    <section className="relative py-20 px-4 md:px-8 overflow-hidden">
      <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent' : 'bg-gradient-to-b from-transparent via-cyan-500/3 to-transparent'}`} />
      <FloatingGradients variant="mixed" />

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <motion.div
          ref={headerRef}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-xl mb-6 ${isDark ? 'bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)]' : 'bg-[rgba(152,16,250,0.04)] border border-[rgba(152,16,250,0.1)]'}`}>
            <span className={`text-[13px] font-normal tracking-[0.325px] ${isDark ? 'text-[rgba(0,211,243,0.8)]' : 'text-[#0891b2]'}`}>My Process</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-medium mb-6 tracking-[-1.2px]">
            <span className="bg-gradient-to-r from-[#C27AFF] to-[#00d3f3] bg-clip-text text-transparent">
              My Work and Process
            </span>
          </h2>
          <p className={`text-[16px] max-w-3xl mx-auto leading-[26px] ${isDark ? 'text-[rgba(255,255,255,0.5)]' : 'text-[rgba(7,6,14,0.5)]'}`}>
            AI-empowered methodology refined over 10 years — vibe coding and AI agents make every step 5x faster
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {processes.slice(0, -1).map((process, index) => {
            const Icon = process.icon;
            return (
              <ProcessCard
                key={process.number}
                process={process}
                index={index}
                isDark={isDark}
                Icon={Icon}
              />
            );
          })}
        </div>

        {/* Last card — full width */}
        {(() => {
          const last = processes[processes.length - 1];
          const LastIcon = last.icon;
          return (
            <div className="mt-6">
              <ProcessCard
                key={last.number}
                process={last}
                index={processes.length - 1}
                isDark={isDark}
                Icon={LastIcon}
                fullWidth
              />
            </div>
          );
        })()}

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className={`inline-flex items-center gap-3 backdrop-blur-xl rounded-full px-7 py-3.5 ${isDark ? 'bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)]' : 'bg-white/60 border border-[rgba(7,6,14,0.06)]'}`}>
            <Zap size={16} className="text-[#00d3f3]" />
            <p className={`text-[14px] ${isDark ? 'text-[rgba(255,255,255,0.5)]' : 'text-[rgba(7,6,14,0.5)]'}`}>
              <span className="text-[#C27AFF] font-medium">AI-Powered & Agile</span>
              {' \u2022 '}
              Vibe coding + AI agents = 5x speed, zero compromise
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ProcessCard({ process, index, isDark, Icon, fullWidth }: {
  process: { number: string; title: string; description: string; color: string; aiMultiplier: string; aiLabel: string; barWidth: number };
  index: number;
  isDark: boolean;
  Icon: typeof Search;
  fullWidth?: boolean;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.97 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`group relative backdrop-blur-xl rounded-3xl p-7 pb-5 transition-all duration-500 hover:scale-[1.03] ${isDark ? 'bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)] hover:bg-[rgba(255,255,255,0.06)] hover:border-[rgba(194,122,255,0.15)] hover:shadow-[0_8px_40px_rgba(152,16,250,0.06)]' : 'bg-white/60 border border-[rgba(7,6,14,0.06)] hover:bg-white/80 hover:border-[rgba(152,16,250,0.12)] shadow-sm hover:shadow-[0_8px_30px_rgba(152,16,250,0.06)]'}`}
    >
      {/* Step number badge */}
      <motion.div
        className={`absolute -top-4 -right-4 w-14 h-14 rounded-full backdrop-blur-xl flex items-center justify-center ${isDark ? 'bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)]' : 'bg-white/80 border border-[rgba(7,6,14,0.06)] shadow-sm'}`}
        initial={{ scale: 0, rotate: -90 }}
        animate={isInView ? { scale: 1, rotate: 0 } : {}}
        transition={{ duration: 0.5, delay: index * 0.08 + 0.3, type: 'spring', stiffness: 200, damping: 15 }}
      >
        <span className={`text-[18px] font-medium bg-gradient-to-r ${process.color} bg-clip-text text-transparent`}>
          {process.number}
        </span>
      </motion.div>

      {fullWidth ? (
        <div className="flex flex-col md:flex-row md:items-center gap-5">
          <div className="flex items-start gap-5 flex-1 min-w-0">
            {/* Icon */}
            <motion.div
              className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${process.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.08 + 0.15, type: 'spring', stiffness: 250, damping: 18 }}
            >
              <Icon size={24} className="text-white" />
            </motion.div>
            <div className="flex-1 min-w-0">
              <h3 className={`text-[20px] font-medium mb-1.5 ${isDark ? 'text-white' : 'text-[#07060e]'}`}>{process.title}</h3>
              <p className={`text-[14px] leading-[22px] ${isDark ? 'text-[rgba(255,255,255,0.45)]' : 'text-[rgba(7,6,14,0.45)]'}`}>{process.description}</p>
            </div>
          </div>

          {/* AI Multiplier bar — inline on desktop */}
          <div className={`rounded-xl p-3 md:w-72 flex-shrink-0 ${isDark ? 'bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.04)]' : 'bg-[rgba(7,6,14,0.015)] border border-[rgba(7,6,14,0.04)]'}`}>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-1.5">
                <Zap size={11} className={isDark ? 'text-[#00d3f3]' : 'text-[#0891b2]'} />
                <span className={`text-[10px] tracking-[0.5px] uppercase ${isDark ? 'text-[rgba(255,255,255,0.35)]' : 'text-[rgba(7,6,14,0.35)]'}`}>
                  AI Boost
                </span>
              </div>
              <div className="flex items-baseline gap-1">
                <span className={`text-[20px] font-medium bg-gradient-to-r ${process.color} bg-clip-text text-transparent leading-none`}>
                  <AnimatedCounter value={process.aiMultiplier} inView={isInView} />
                </span>
                <span className={`text-[10px] ${isDark ? 'text-[rgba(255,255,255,0.3)]' : 'text-[rgba(7,6,14,0.3)]'}`}>
                  {process.aiLabel}
                </span>
              </div>
            </div>
            <AnimatedBar width={process.barWidth} color={process.color} isDark={isDark} />
          </div>
        </div>
      ) : (
        <>
          {/* Icon */}
          <motion.div
            className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${process.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.4, delay: index * 0.08 + 0.15, type: 'spring', stiffness: 250, damping: 18 }}
          >
            <Icon size={24} className="text-white" />
          </motion.div>

          <h3 className={`text-[20px] font-medium mb-3 ${isDark ? 'text-white' : 'text-[#07060e]'}`}>{process.title}</h3>
          <p className={`text-[14px] leading-[22px] mb-5 ${isDark ? 'text-[rgba(255,255,255,0.45)]' : 'text-[rgba(7,6,14,0.45)]'}`}>{process.description}</p>

          {/* AI Multiplier bar */}
          <div className={`rounded-xl p-3 ${isDark ? 'bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.04)]' : 'bg-[rgba(7,6,14,0.015)] border border-[rgba(7,6,14,0.04)]'}`}>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-1.5">
                <Zap size={11} className={isDark ? 'text-[#00d3f3]' : 'text-[#0891b2]'} />
                <span className={`text-[10px] tracking-[0.5px] uppercase ${isDark ? 'text-[rgba(255,255,255,0.35)]' : 'text-[rgba(7,6,14,0.35)]'}`}>
                  AI Boost
                </span>
              </div>
              <div className="flex items-baseline gap-1">
                <span className={`text-[20px] font-medium bg-gradient-to-r ${process.color} bg-clip-text text-transparent leading-none`}>
                  <AnimatedCounter value={process.aiMultiplier} inView={isInView} />
                </span>
                <span className={`text-[10px] ${isDark ? 'text-[rgba(255,255,255,0.3)]' : 'text-[rgba(7,6,14,0.3)]'}`}>
                  {process.aiLabel}
                </span>
              </div>
            </div>
            <AnimatedBar width={process.barWidth} color={process.color} isDark={isDark} />
          </div>
        </>
      )}
    </motion.div>
  );
}