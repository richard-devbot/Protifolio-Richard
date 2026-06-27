'use client';
import Link from "next/link";
import { useState, useEffect } from "react";

const NAV_LINKS = [
  { href: '/#about',      label: 'ABOUT' },
  { href: '/#experience', label: 'EXPERIENCE' },
  { href: '/#skills',     label: 'SKILLS' },
  { href: '/#education',  label: 'EDUCATION' },
  { href: '/blog',        label: 'BLOGS' },
  { href: '/#projects',   label: 'PROJECTS' },
  { href: '/#contact',    label: 'CONTACT' },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    // Set initial state in case page loads already scrolled
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'navbar-blur' : 'bg-transparent'}`}>
      <div className="flex items-center justify-between py-4">
        <div className="flex flex-shrink-0 items-center">
          <Link
            href="/"
            className="text-[#16f2b3] text-2xl font-bold neon-teal"
            style={{ fontFamily: "'Great Vibes', cursive" }}
          >
            Richardson Gunde
          </Link>
        </div>

        {/* Desktop navigation — hidden on mobile */}
        <ul className="hidden md:flex md:items-center md:space-x-1">
          {NAV_LINKS.map(link => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block px-4 py-2 text-sm text-white hover:text-[#16f2b3] transition-colors duration-300 relative group no-underline outline-none"
              >
                {link.label}
                {/* Animated underline slides in on hover from left */}
                <span className="absolute bottom-0 left-4 right-4 h-px bg-[#16f2b3] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger button — mobile only. Three lines animate to X when open. */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#16f2b3] rounded"
          onClick={() => setIsOpen(o => !o)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
        >
          <span className={`block w-6 h-0.5 bg-[#16f2b3] transition-all duration-300 origin-center ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[#16f2b3] transition-all duration-300 ${isOpen ? 'opacity-0 scale-x-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[#16f2b3] transition-all duration-300 origin-center ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile dropdown — uses mobile-menu / mobile-menu open CSS classes for height transition */}
      <div
        id="mobile-nav"
        className={`mobile-menu md:hidden ${isOpen ? 'open' : ''}`}
      >
        <ul className="flex flex-col py-2 border-t border-[#1f223c]">
          {NAV_LINKS.map(link => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block px-4 py-3 text-sm text-white hover:text-[#16f2b3] hover:bg-white/5 transition-colors duration-200 no-underline outline-none"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
