import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Sparkles, Target, Users, Zap } from 'lucide-react';
import { FloatingGradients } from '../FloatingGradients';
import { useTheme } from '../ThemeContext';

export function AboutSection() {
  const { isDark } = useTheme();

  const highlights = [
    {
      icon: Target,
      title: 'Strategic Vision',
      description: 'Building the future where human insight meets intelligent design.',
    },
    {
      icon: Users,
      title: 'User-Centric',
      description: 'I create emotionally-designed around people, AI runs the process, not vice versa.',
    },
    {
      icon: Zap,
      title: 'Innovation First',
      description: 'Leveraging AI & emerging tech to solve real business challenges.',
    },
    {
      icon: Sparkles,
      title: 'Award-Winning',
      description: 'Recognized for excellence in design and product innovation.',
    },
  ];

  // Double the highlights for seamless infinite scroll
  const scrollItems = [...highlights, ...highlights];

  return (
    <section className="relative py-20 px-4 md:px-8">
      <FloatingGradients variant="purple-cyan" />
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-5xl mx-auto">
          {/* Content Side */}
          <div className="order-1 space-y-8">
            <div>
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-xl mb-6 ${isDark ? 'bg-white/10 border border-white/20' : 'bg-[rgba(152,16,250,0.06)] border border-[rgba(152,16,250,0.12)]'}`}>
                <span className={`text-sm font-medium ${isDark ? 'text-cyan-400' : 'text-[#7c3aed]'}`}>About Me</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-medium mb-6 leading-tight tracking-[-1.2px]">
                <span className="bg-gradient-to-r from-[#C27AFF] to-[#00d3f3] bg-clip-text text-transparent">
                  Building the future
                </span>
                <br />
                <span className={isDark ? 'text-white' : 'text-[#07060e]'}>where human insight meets intelligent design.</span>
              </h2>

              <p className={`text-lg leading-relaxed mb-6 ${isDark ? 'text-white/70' : 'text-[#07060e]/60'}`}>
                I create emotionally-designed around people, AI runs the process, not vice versa. With a decade of experience across 4 startups and 25+ products, I specialize in transforming complex challenges into elegant, user-centric solutions.
              </p>

              <p className={`text-lg leading-relaxed ${isDark ? 'text-white/70' : 'text-[#07060e]/60'}`}>
                My approach combines strategic thinking with hands-on design, ensuring every product not only looks beautiful but delivers measurable business value.
              </p>
            </div>
          </div>

          {/* Image Side — now on right */}
          <div className="relative order-2">
            <div className="relative max-w-[380px] mx-auto lg:ml-auto lg:mr-0">
              <div className={`relative backdrop-blur-xl rounded-3xl p-5 overflow-hidden ${isDark ? 'bg-white/5 border border-white/10' : 'bg-white/60 border border-[rgba(7,6,14,0.08)] shadow-xl'}`}>
                <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-br from-cyan-500/10 to-purple-600/10' : 'bg-gradient-to-br from-cyan-500/5 to-purple-600/5'}`} />
                
                <div className="relative rounded-2xl overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=1000&fit=crop"
                    alt="Sasha Nguyen - Product Designer and Founder"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>

                <div className={`absolute bottom-8 left-8 backdrop-blur-xl rounded-2xl px-5 py-3 ${isDark ? 'bg-white/10 border border-white/20' : 'bg-white/80 border border-[rgba(7,6,14,0.1)] shadow-lg'}`}>
                  <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                    10+
                  </div>
                  <div className={`text-sm ${isDark ? 'text-white/70' : 'text-[#07060e]/60'}`}>Years Experience</div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 w-32 h-32 bg-purple-500 rounded-full blur-3xl opacity-20 animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-cyan-500 rounded-full blur-3xl opacity-20 animate-pulse animation-delay-2000" />
            </div>
          </div>
        </div>

        {/* Horizontal scrolling highlight blocks */}
        <div className="mt-16 overflow-hidden relative">
          {/* Fade edges */}
          <div className={`absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none ${isDark ? 'bg-gradient-to-r from-[#07060e] to-transparent' : 'bg-gradient-to-r from-[#f8f7ff] to-transparent'}`} />
          <div className={`absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none ${isDark ? 'bg-gradient-to-l from-[#07060e] to-transparent' : 'bg-gradient-to-l from-[#f8f7ff] to-transparent'}`} />
          
          <div className="flex animate-marquee gap-5 w-max">
            {scrollItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={`${item.title}-${index}`}
                  className={`flex-shrink-0 w-[280px] backdrop-blur-xl rounded-2xl p-6 transition-all group hover:scale-[1.02] ${isDark ? 'bg-white/5 border border-white/10 hover:bg-white/10' : 'bg-white/70 border border-[rgba(7,6,14,0.06)] hover:bg-white/90 shadow-sm hover:shadow-md'}`}
                >
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-r from-[#9810fa] to-[#00b8db] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon size={22} className="text-white" />
                  </div>
                  <h3 className={`font-medium mb-2 ${isDark ? 'text-white' : 'text-[#07060e]'}`}>{item.title}</h3>
                  <p className={`text-sm ${isDark ? 'text-white/60' : 'text-[#07060e]/50'}`}>{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}