import { personalData } from "@/utils/data/personal-data";
import { Suspense } from "react";
import dynamic from 'next/dynamic';

import AboutSection from "./components/homepage/about";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";

const HeroSection = dynamic(() => import("./components/homepage/hero-section"), { ssr: false });
const Skills = dynamic(() => import("./components/homepage/skills"), { ssr: false });
const Projects = dynamic(() => import("./components/homepage/projects"), { ssr: false });
const Blog = dynamic(() => import("./components/homepage/blog"), { ssr: false });
const ContactSection = dynamic(() => import("./components/homepage/contact"), { ssr: false });

async function getBlogs() {
  const username = personalData.mediumUsername;
  if (!username) return [];

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 5000);

  try {
    const res = await fetch(
      `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${username}`,
      { signal: controller.signal, next: { revalidate: 3600 } }
    );
    clearTimeout(timeoutId);

    if (!res.ok) return [];

    const data = await res.json();
    if (data.status !== 'ok') return [];

    return (data.items || [])
      .filter(item => item.thumbnail)
      .slice(0, 6)
      .map(item => ({
        id: item.guid,
        title: item.title,
        description: item.description?.replace(/<[^>]+>/g, '').slice(0, 120),
        url: item.link,
        thumbnail: item.thumbnail,
        publishedAt: item.pubDate,
        categories: item.categories || [],
      }));
  } catch {
    clearTimeout(timeoutId);
    return [];
  }
}

export default async function Home() {
  const blogs = await getBlogs();

  return (
    <>
      <Suspense fallback={null}>
        <HeroSection />
      </Suspense>
      <Suspense fallback={null}>
        <AboutSection />
      </Suspense>
      <Suspense fallback={null}>
        <Experience />
      </Suspense>
      <Suspense fallback={null}>
        <Skills />
      </Suspense>
      <Suspense fallback={null}>
        <Projects />
      </Suspense>
      <Suspense fallback={null}>
        <Education />
      </Suspense>
      <Suspense fallback={null}>
        <Blog blogs={blogs} />
      </Suspense>
      <Suspense fallback={null}>
        <ContactSection />
      </Suspense>
    </>
  );
}
