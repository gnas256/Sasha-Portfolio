import { Mail, MapPin, Linkedin, Twitter, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';
import { FloatingGradients } from '../FloatingGradients';
import { useTheme } from '../ThemeContext';

export function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const { isDark } = useTheme();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:hello@sashanguyen.com?subject=Project Inquiry from ${formData.name}&body=${formData.message}%0A%0AFrom: ${formData.email}`;
  };

  const cardClass = `backdrop-blur-xl rounded-2xl p-6 ${isDark ? 'bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.07)]' : 'bg-white/60 border border-[rgba(7,6,14,0.06)] shadow-sm'}`;
  const labelClass = `text-[12px] mb-0.5 ${isDark ? 'text-[rgba(255,255,255,0.3)]' : 'text-[rgba(7,6,14,0.35)]'}`;
  const valueClass = `text-[14px] ${isDark ? 'text-[rgba(255,255,255,0.8)]' : 'text-[#07060e]'}`;

  return (
    <section className="relative py-28 px-4 md:px-8 overflow-hidden">
      <FloatingGradients variant="warm" />
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-4">
          <span className={`text-[12px] uppercase tracking-[4px] font-normal ${isDark ? 'text-[rgba(0,211,243,0.6)]' : 'text-[#0891b2]'}`}>
            Get in Touch
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-[56px] font-medium leading-[1.1] tracking-[-1.5px] text-center mb-5">
          <span className={isDark ? 'text-white' : 'text-[#07060e]'}>Let's build something </span>
          <span className="bg-gradient-to-r from-[#C27AFF] to-[#00d3f3] bg-clip-text text-transparent">
            remarkable
          </span>
        </h2>

        <p className={`text-[15px] text-center max-w-xl mx-auto leading-[24px] mb-14 ${isDark ? 'text-[rgba(255,255,255,0.35)]' : 'text-[rgba(7,6,14,0.4)]'}`}>
          Have a project in mind? I'd love to hear about it. Let's discuss how we can bring your vision to life.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left column */}
          <div className="flex flex-col gap-5 h-full">
            <a
              href="mailto:hello@sashanguyen.com"
              className={`group ${cardClass} hover:${isDark ? 'bg-[rgba(255,255,255,0.05)]' : 'bg-white/80'} transition-all flex items-center gap-4`}
            >
              <div className="w-11 h-11 rounded-xl bg-[rgba(0,184,219,0.1)] border border-[rgba(0,184,219,0.15)] flex items-center justify-center flex-shrink-0">
                <Mail size={18} className="text-[#00d3f3]" />
              </div>
              <div className="flex-1 min-w-0">
                <div className={labelClass}>Email</div>
                <div className={`${valueClass} group-hover:text-[#00d3f3] transition-colors truncate`}>hello@sashanguyen.com</div>
              </div>
              <ArrowUpRight size={16} className={`flex-shrink-0 ${isDark ? 'text-[rgba(255,255,255,0.2)]' : 'text-[rgba(7,6,14,0.2)]'}`} />
            </a>

            <div className={`${cardClass} flex items-center gap-4`}>
              <div className="w-11 h-11 rounded-xl bg-[rgba(152,16,250,0.1)] border border-[rgba(152,16,250,0.15)] flex items-center justify-center flex-shrink-0">
                <MapPin size={18} className="text-[#C27AFF]" />
              </div>
              <div className="flex-1">
                <div className={labelClass}>Location</div>
                <div className={valueClass}>San Francisco, CA</div>
              </div>
            </div>

            <div className={`${cardClass} flex-1 flex flex-col justify-between`}>
              <div>
                <div className={labelClass}>Connect</div>
                <p className={`text-[13px] leading-[20px] mb-4 ${isDark ? 'text-[rgba(255,255,255,0.25)]' : 'text-[rgba(7,6,14,0.35)]'}`}>
                  Follow my work and let's connect on social.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <a href="https://www.linkedin.com/in/sashaminh/" target="_blank" rel="noopener noreferrer"
                  className={`group/icon flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all ${isDark ? 'bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.08)] hover:bg-[rgba(255,255,255,0.1)]' : 'bg-[rgba(7,6,14,0.03)] border border-[rgba(7,6,14,0.06)] hover:bg-[rgba(7,6,14,0.06)]'}`}>
                  <Linkedin size={15} className={`${isDark ? 'text-[rgba(255,255,255,0.5)]' : 'text-[rgba(7,6,14,0.4)]'} group-hover/icon:text-[#00d3f3] transition-colors`} />
                  <span className={`text-[13px] ${isDark ? 'text-[rgba(255,255,255,0.5)]' : 'text-[rgba(7,6,14,0.5)]'}`}>LinkedIn</span>
                </a>
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"
                  className={`group/icon flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all ${isDark ? 'bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.08)] hover:bg-[rgba(255,255,255,0.1)]' : 'bg-[rgba(7,6,14,0.03)] border border-[rgba(7,6,14,0.06)] hover:bg-[rgba(7,6,14,0.06)]'}`}>
                  <Twitter size={15} className={`${isDark ? 'text-[rgba(255,255,255,0.5)]' : 'text-[rgba(7,6,14,0.4)]'} group-hover/icon:text-[#C27AFF] transition-colors`} />
                  <span className={`text-[13px] ${isDark ? 'text-[rgba(255,255,255,0.5)]' : 'text-[rgba(7,6,14,0.5)]'}`}>Twitter</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right column - Form */}
          <div className="h-full">
            <form onSubmit={handleSubmit} className={`${cardClass} p-6 md:p-8 flex flex-col h-full`}>
              <div className="space-y-5 flex-1">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className={`block text-[13px] mb-2 font-normal ${isDark ? 'text-[rgba(255,255,255,0.5)]' : 'text-[rgba(7,6,14,0.5)]'}`}>Name</label>
                    <input
                      type="text" placeholder="Your name" value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full rounded-xl px-4 py-3 text-[14px] focus:outline-none transition-all ${isDark ? 'bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] text-white placeholder-[rgba(255,255,255,0.2)] focus:border-[rgba(152,16,250,0.3)]' : 'bg-[rgba(7,6,14,0.02)] border border-[rgba(7,6,14,0.08)] text-[#07060e] placeholder-[rgba(7,6,14,0.25)] focus:border-[rgba(152,16,250,0.3)]'}`}
                    />
                  </div>
                  <div>
                    <label className={`block text-[13px] mb-2 font-normal ${isDark ? 'text-[rgba(255,255,255,0.5)]' : 'text-[rgba(7,6,14,0.5)]'}`}>Email</label>
                    <input
                      type="email" placeholder="your@email.com" value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full rounded-xl px-4 py-3 text-[14px] focus:outline-none transition-all ${isDark ? 'bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] text-white placeholder-[rgba(255,255,255,0.2)] focus:border-[rgba(152,16,250,0.3)]' : 'bg-[rgba(7,6,14,0.02)] border border-[rgba(7,6,14,0.08)] text-[#07060e] placeholder-[rgba(7,6,14,0.25)] focus:border-[rgba(152,16,250,0.3)]'}`}
                    />
                  </div>
                </div>
                <div className="flex-1 flex flex-col">
                  <label className={`block text-[13px] mb-2 font-normal ${isDark ? 'text-[rgba(255,255,255,0.5)]' : 'text-[rgba(7,6,14,0.5)]'}`}>Message</label>
                  <textarea
                    placeholder="Tell me about your project..." value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full flex-1 min-h-[120px] rounded-xl px-4 py-3 text-[14px] resize-none focus:outline-none transition-all ${isDark ? 'bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] text-white placeholder-[rgba(255,255,255,0.2)] focus:border-[rgba(152,16,250,0.3)]' : 'bg-[rgba(7,6,14,0.02)] border border-[rgba(7,6,14,0.08)] text-[#07060e] placeholder-[rgba(7,6,14,0.25)] focus:border-[rgba(152,16,250,0.3)]'}`}
                  />
                </div>
              </div>

              <button type="submit" className="w-full relative py-3.5 rounded-xl overflow-hidden group transition-all hover:scale-[1.01] mt-6">
                <div className="absolute inset-0 bg-gradient-to-r from-[#9810fa] to-[#00b8db]" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#9810fa] to-[#00b8db] blur-xl opacity-40 group-hover:opacity-60 transition-opacity" />
                <span className="relative z-10 text-white text-[15px] font-medium flex items-center justify-center gap-2">
                  Send Message
                  <ArrowUpRight size={16} />
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}