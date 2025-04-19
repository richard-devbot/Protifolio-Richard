import { personalData } from "@/utils/data/personal-data";
import { Suspense } from "react";
import dynamic from 'next/dynamic';

// Import server-safe components directly
import AboutSection from "./components/homepage/about";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";

// Dynamically import components that might use browser APIs with ssr: false
const HeroSection = dynamic(() => import("./components/homepage/hero-section"), { ssr: false });
const Skills = dynamic(() => import("./components/homepage/skills"), { ssr: false });
const Projects = dynamic(() => import("./components/homepage/projects"), { ssr: false });
const Blog = dynamic(() => import("./components/homepage/blog"), { ssr: false });
const ContactSection = dynamic(() => import("./components/homepage/contact"), { ssr: false });

async function getData() {
  try {
    // Check if the username exists
    if (!personalData.devUsername) {
      console.log('No dev username provided, skipping blog fetch');
      return [];
    }
    
    const res = await fetch(`https://dev.to/api/articles?username=${personalData.devUsername}`, { next: { revalidate: 3600 } });

    if (!res.ok) {
      console.error('Failed to fetch data from dev.to');
      return [];
    }

    const data = await res.json();
    const filtered = data.filter((item) => item?.cover_image).sort(() => Math.random() - 0.5);
    return filtered;
  } catch (error) {
    console.error('Error fetching blog data:', error);
    return [];
  }
}

export default async function Home() {
  let blogs = [];
  try {
    blogs = await getData();
  } catch (error) {
    console.error('Error in getData:', error);
  }

  return (
    <>
      <Suspense fallback={<div>Loading hero section...</div>}>
        <HeroSection />
      </Suspense>
      <Suspense fallback={<div>Loading about section...</div>}>
        <AboutSection />
      </Suspense>
      <Suspense fallback={<div>Loading experience section...</div>}>
        <Experience />
      </Suspense>
      <Suspense fallback={<div>Loading skills section...</div>}>
        <Skills />
      </Suspense>
      <Suspense fallback={<div>Loading projects section...</div>}>
        <Projects />
      </Suspense>
      <Suspense fallback={<div>Loading education section...</div>}>
        <Education />
      </Suspense>
      <Suspense fallback={<div>Loading blog section...</div>}>
        <Blog blogs={blogs} />
      </Suspense>
      <Suspense fallback={<div>Loading contact section...</div>}>
        <ContactSection />
      </Suspense>
    </>
  );
}
