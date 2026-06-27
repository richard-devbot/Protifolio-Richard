'use client';

import { useMemo, useState } from 'react';
import { projectsData, projectCategories } from '@/utils/data/projects-data';
import ProjectCard from './project-card';
import ScrollReveal from '../../helper/scroll-reveal';

const Projects = () => {
  const [active, setActive] = useState('All');

  const counts = useMemo(() => {
    const map = { All: projectsData.length };
    for (const p of projectsData) map[p.category] = (map[p.category] || 0) + 1;
    return map;
  }, []);

  const visible = useMemo(
    () => (active === 'All' ? projectsData : projectsData.filter((p) => p.category === active)),
    [active]
  );

  return (
    <div id="projects" className="relative z-50 my-12 lg:my-24">
      <div className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl opacity-30"></div>

      <div className="flex items-center justify-start relative">
        <span className="bg-[#1a1443] absolute left-0 w-fit text-white px-5 py-3 text-xl rounded-md">
          PROJECTS
        </span>
        <span className="w-full h-[2px] bg-[#1a1443]"></span>
      </div>

      <div className="pt-20">
        {/* filter chips */}
        <div className="mb-10 flex flex-wrap items-center justify-center gap-2 lg:gap-3">
          {projectCategories.map((cat) => {
            const isActive = active === cat;
            return (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? 'border-violet-500 bg-violet-600/20 text-white shadow-[0_0_20px_rgba(124,58,237,0.35)]'
                    : 'border-[#2a2f52] text-[#b3b8d0] hover:border-violet-500/60 hover:text-white'
                }`}
              >
                {cat}
                <span className="ml-2 text-xs text-[#7b80a8]">{counts[cat] || 0}</span>
              </button>
            );
          })}
        </div>

        {/* grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-6 xl:grid-cols-3">
          {visible.map((project, index) => (
            <ScrollReveal key={project.id} delay={(index % 3) * 80} className="h-full">
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
