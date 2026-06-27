'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { FaCode, FaExternalLinkAlt } from 'react-icons/fa';
import { BsStars } from 'react-icons/bs';
import { LuMic, LuBot, LuFileText, LuServer, LuBuilding2 } from 'react-icons/lu';

// Category → theme. Tailwind purges dynamic class names, so colors are applied
// via inline CSS custom properties (--c1/--c2) rather than generated classes.
const CATEGORY_STYLES = {
  'Voice AI': { c1: '#d946ef', c2: '#7c3aed', icon: LuMic },
  'Agentic AI': { c1: '#8b5cf6', c2: '#4f46e5', icon: LuBot },
  'Document AI': { c1: '#22d3ee', c2: '#3b82f6', icon: LuFileText },
  'LLM Infra': { c1: '#2dd4bf', c2: '#10b981', icon: LuServer },
  'Enterprise': { c1: '#fbbf24', c2: '#f97316', icon: LuBuilding2 },
};

const ProjectCard = ({ project }) => {
  const { name, description, tools = [], role, code, demo, category, featured } = project;
  const theme = CATEGORY_STYLES[category] || CATEGORY_STYLES['Agentic AI'];
  const Icon = theme.icon;
  const cardRef = useRef(null);

  // Pointer-tracked 3D tilt + cursor spotlight, written straight to CSS vars so
  // the work stays on the compositor (no React re-render per mousemove).
  const handleMove = (e) => {
    const el = cardRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    el.style.setProperty('--rx', `${(0.5 - py) * 8}deg`);
    el.style.setProperty('--ry', `${(px - 0.5) * 8}deg`);
    el.style.setProperty('--mx', `${px * 100}%`);
    el.style.setProperty('--my', `${py * 100}%`);
  };

  const handleLeave = () => {
    const el = cardRef.current;
    if (!el) return;
    el.style.setProperty('--rx', '0deg');
    el.style.setProperty('--ry', '0deg');
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="tilt-card group relative h-full rounded-2xl p-[1px] transition-transform duration-300 will-change-transform"
      style={{
        '--c1': theme.c1,
        '--c2': theme.c2,
        background:
          'linear-gradient(135deg, color-mix(in srgb, var(--c1) 55%, transparent), color-mix(in srgb, var(--c2) 25%, transparent))',
      }}
    >
      <div className="tilt-card-inner relative flex h-full flex-col overflow-hidden rounded-2xl bg-[#0b1020]/95 p-5 lg:p-6">
        {/* category-themed mesh glow */}
        <div
          className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full opacity-40 blur-3xl transition-opacity duration-500 group-hover:opacity-70"
          style={{ background: 'radial-gradient(circle, var(--c1), transparent 70%)' }}
        />
        {/* cursor spotlight */}
        <div
          className="card-spotlight pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background:
              'radial-gradient(220px circle at var(--mx) var(--my), color-mix(in srgb, var(--c1) 22%, transparent), transparent 60%)',
          }}
        />

        <div className="relative flex items-center justify-between gap-2">
          <span
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold"
            style={{
              color: 'var(--c1)',
              background: 'color-mix(in srgb, var(--c1) 14%, transparent)',
              border: '1px solid color-mix(in srgb, var(--c1) 35%, transparent)',
            }}
          >
            <Icon className="text-sm" />
            {category}
          </span>
          {featured && (
            <span className="inline-flex items-center gap-1 text-xs font-medium text-amber-300">
              <BsStars /> Featured
            </span>
          )}
        </div>

        <h3 className="relative mt-4 text-lg font-bold leading-snug text-white lg:text-xl">
          {name}
        </h3>

        <p className="relative mt-3 line-clamp-4 text-sm leading-relaxed text-[#b3b8d0]">
          {description}
        </p>

        <div className="relative mt-4 flex flex-wrap gap-2">
          {tools.slice(0, 6).map((tool, i) => (
            <span
              key={i}
              className="rounded-md border border-[#2a2f52] bg-[#11162e] px-2 py-1 text-[11px] font-medium text-[#c7cbe6]"
            >
              {tool}
            </span>
          ))}
          {tools.length > 6 && (
            <span className="rounded-md px-2 py-1 text-[11px] font-medium text-[#7b80a8]">
              +{tools.length - 6} more
            </span>
          )}
        </div>

        <div className="relative mt-auto flex items-center justify-between gap-3 pt-5">
          <span className="text-xs font-medium uppercase tracking-wide text-[#7b80a8]">
            {role}
          </span>
          <div className="flex items-center gap-2">
            {code ? (
              <Link
                href={code}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${name} source code`}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#2a2f52] text-[#c7cbe6] transition-all duration-300 hover:scale-110 hover:border-transparent hover:text-white"
                style={{ background: 'color-mix(in srgb, var(--c2) 18%, transparent)' }}
              >
                <FaCode />
              </Link>
            ) : null}
            {demo ? (
              <Link
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${name} live demo`}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#2a2f52] text-[#c7cbe6] transition-all duration-300 hover:scale-110 hover:border-transparent hover:text-white"
                style={{ background: 'color-mix(in srgb, var(--c1) 18%, transparent)' }}
              >
                <FaExternalLinkAlt className="text-sm" />
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
