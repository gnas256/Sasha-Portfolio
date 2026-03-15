import { useState } from 'react';
import { Link } from 'react-router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ExternalLink, Filter } from 'lucide-react';
import { useTheme } from '../components/ThemeContext';
import { projects } from '../data/projects';
import { FloatingGradients } from '../components/FloatingGradients';

export function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { isDark } = useTheme();

  const categories = ['All', ...Array.from(new Set(projects.map((p) => p.category)))];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="pt-32 pb-20 px-4 md:px-8 relative">
      <FloatingGradients variant="mixed" />
      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-xl mb-6 ${isDark ? 'bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)]' : 'bg-[rgba(152,16,250,0.04)] border border-[rgba(152,16,250,0.1)]'}`}>
            <span className={`text-[13px] font-normal tracking-[0.325px] ${isDark ? 'text-[rgba(194,122,255,0.8)]' : 'text-[#7c3aed]'}`}>Portfolio</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-medium mb-6 tracking-[-1.5px]">
            <span className={`bg-clip-text text-transparent ${isDark ? 'bg-gradient-to-r from-[#C27AFF] via-[#00d3f3] to-[#C27AFF]' : 'bg-gradient-to-r from-[#6a00c7] via-[#0080a0] to-[#6a00c7]'}`}>
              My Work
            </span>
          </h1>
          <p className={`text-[18px] max-w-3xl mx-auto leading-[30px] ${isDark ? 'text-[rgba(255,255,255,0.5)]' : 'text-[rgba(7,6,14,0.5)]'}`}>
            A collection of 25+ products across startups and enterprises, spanning AI, design, and product development
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="mb-12 flex justify-center">
          <div className={`backdrop-blur-xl rounded-3xl p-2 inline-flex gap-2 flex-wrap ${isDark ? 'bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)]' : 'bg-white/60 border border-[rgba(7,6,14,0.06)] shadow-sm'}`}>
            <Filter size={20} className={`m-2 ${isDark ? 'text-[rgba(255,255,255,0.3)]' : 'text-[rgba(7,6,14,0.3)]'}`} />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2.5 rounded-full transition-all text-[14px] font-normal ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-[#9810fa] to-[#00b8db] text-white'
                    : isDark
                      ? 'text-[rgba(255,255,255,0.5)] hover:text-white hover:bg-white/10'
                      : 'text-[rgba(7,6,14,0.5)] hover:text-[#07060e] hover:bg-[rgba(7,6,14,0.04)]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <Link
              key={project.id}
              to={`/case-study/${project.slug}`}
              className={`group relative block backdrop-blur-xl rounded-3xl overflow-hidden transition-all duration-500 hover:scale-[1.02] ${isDark ? 'bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)] hover:bg-[rgba(255,255,255,0.06)]' : 'bg-white/60 border border-[rgba(7,6,14,0.06)] hover:bg-white/80 shadow-sm hover:shadow-lg'}`}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 mix-blend-overlay`} />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className={`backdrop-blur-xl rounded-full p-4 transform scale-75 group-hover:scale-100 transition-transform duration-500 ${isDark ? 'bg-white/10 border border-white/20' : 'bg-white/60 border border-white/40'}`}>
                    <ExternalLink size={24} className="text-white" />
                  </div>
                </div>
                <div className={`absolute top-4 right-4 backdrop-blur-xl rounded-full px-3 py-1 ${isDark ? 'bg-white/10 border border-white/20' : 'bg-white/80 border border-[rgba(7,6,14,0.08)]'}`}>
                  <span className={`text-xs font-medium ${isDark ? 'text-white' : 'text-[#07060e]'}`}>{project.year}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-3">
                  <span className={`text-[12px] font-normal ${isDark ? 'text-[rgba(194,122,255,0.8)]' : 'text-[#7c3aed]'}`}>{project.category}</span>
                </div>
                <h3 className={`text-xl font-medium mb-3 tracking-[-0.3px] ${isDark ? 'text-white' : 'text-[#07060e]'}`}>
                  {project.title}
                </h3>
                <p className={`text-sm mb-4 line-clamp-2 ${isDark ? 'text-[rgba(255,255,255,0.4)]' : 'text-[rgba(7,6,14,0.45)]'}`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-2 py-1 rounded-full text-xs ${isDark ? 'bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] text-[rgba(255,255,255,0.5)]' : 'bg-[rgba(7,6,14,0.03)] border border-[rgba(7,6,14,0.06)] text-[rgba(7,6,14,0.5)]'}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Count */}
        <div className="text-center mt-12">
          <div className={`inline-block backdrop-blur-xl rounded-full px-8 py-4 ${isDark ? 'bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)]' : 'bg-white/60 border border-[rgba(7,6,14,0.06)]'}`}>
            <p className={isDark ? 'text-[rgba(255,255,255,0.5)]' : 'text-[rgba(7,6,14,0.5)]'}>
              Showing <span className="text-[#C27AFF] font-medium">{filteredProjects.length}</span> projects
              {' \u2022 '}
              More case studies coming soon
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}