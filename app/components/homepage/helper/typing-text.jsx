'use client';
import { useEffect, useState } from 'react';

// Cycles through professional designations with a typewriter effect.
// Each string is typed character-by-character, held briefly, then deleted.
const PHRASES = [
  'Generative AI Engineer',
  'Software Developer',
  'LLM Specialist',
  'Full Stack Developer',
  'AI Solutions Architect',
];

const TYPE_SPEED = 75;   // ms per character typed
const DELETE_SPEED = 40; // ms per character deleted
const HOLD_MS = 1800;    // ms to hold the completed phrase
const PAUSE_MS = 400;    // ms pause before typing next phrase

export default function TypingText() {
  const [displayed, setDisplayed] = useState('');
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const current = PHRASES[phraseIdx];

    if (paused) {
      const t = setTimeout(() => setPaused(false), PAUSE_MS);
      return () => clearTimeout(t);
    }

    if (!deleting && charIdx < current.length) {
      // Still typing
      const t = setTimeout(() => {
        setDisplayed(current.slice(0, charIdx + 1));
        setCharIdx(i => i + 1);
      }, TYPE_SPEED);
      return () => clearTimeout(t);
    }

    if (!deleting && charIdx === current.length) {
      // Finished typing — hold, then start deleting
      const t = setTimeout(() => setDeleting(true), HOLD_MS);
      return () => clearTimeout(t);
    }

    if (deleting && charIdx > 0) {
      // Deleting
      const t = setTimeout(() => {
        setDisplayed(current.slice(0, charIdx - 1));
        setCharIdx(i => i - 1);
      }, DELETE_SPEED);
      return () => clearTimeout(t);
    }

    if (deleting && charIdx === 0) {
      // Fully deleted — advance to next phrase
      setDeleting(false);
      setPaused(true);
      setPhraseIdx(i => (i + 1) % PHRASES.length);
    }
  }, [charIdx, deleting, paused, phraseIdx]);

  return (
    // aria-live so screen readers announce the changing role
    <span className="text-[#16f2b3] neon-teal" aria-live="polite" aria-atomic="true">
      {displayed}
      {/* Blinking cursor block */}
      <span className="blink ml-0.5 inline-block w-[2px] h-[1em] bg-[#16f2b3] align-middle" aria-hidden="true" />
    </span>
  );
}
