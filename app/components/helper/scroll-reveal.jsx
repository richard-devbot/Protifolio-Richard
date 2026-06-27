'use client';
import { useEffect, useRef } from 'react';

// Uses CSS classes reveal-hidden / reveal-visible defined in globals.scss.
// Switching from inline styles to class-based transitions lets the SCSS
// control the easing curve centrally (cubic-bezier spring) rather than
// duplicating it in JS per-instance.
export default function ScrollReveal({ children, className = '', delay = 0 }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transitionDelay = `${delay}ms`;
          el.classList.add('reveal-visible');
          observer.unobserve(el); // fire once — no re-hide on scroll-up
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`reveal-hidden ${className}`}>
      {children}
    </div>
  );
}
