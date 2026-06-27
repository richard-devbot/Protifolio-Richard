'use client';
import dynamic from 'next/dynamic';
import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from 'react';
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaTwitterSquare } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";

// Loaded client-side only — canvas API and DOM not available on the server
const NeuralCanvas = dynamic(() => import('../helper/neural-canvas'), { ssr: false });
const TypingText = dynamic(() => import('../helper/typing-text'), { ssr: false });

function HeroSection() {
  useEffect(() => {
    // --- Custom cursor ---
    const dot = document.createElement('div');
    dot.className = 'cursor-dot';
    const ring = document.createElement('div');
    ring.className = 'cursor-ring';
    document.body.appendChild(dot);
    document.body.appendChild(ring);

    // Ring follows mouse with a slight lag via linear interpolation
    let ringX = 0;
    let ringY = 0;
    let mouseX = 0;
    let mouseY = 0;
    let rafId;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = e.clientX + 'px';
      dot.style.top = e.clientY + 'px';
    };

    const animRing = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      ring.style.left = ringX + 'px';
      ring.style.top = ringY + 'px';
      rafId = requestAnimationFrame(animRing);
    };
    rafId = requestAnimationFrame(animRing);

    // --- Scroll progress bar ---
    const bar = document.createElement('div');
    bar.id = 'scroll-progress';
    document.body.appendChild(bar);

    const onScroll = () => {
      const scrollable = document.body.scrollHeight - window.innerHeight;
      const pct = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
      bar.style.width = pct + '%';
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rafId);
      dot.remove();
      ring.remove();
      bar.remove();
    };
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-between py-4 lg:py-12">
      {/* Ambient particle network — fixed, behind all content */}
      <NeuralCanvas />

      <Image
        src="/hero.svg"
        alt="Decorative gradient background for hero section"
        width={1572}
        height={795}
        className="absolute -top-[98px] -z-10"
      />

      <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8">
        <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10">
          <h1 className="text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
            Hello, <br />
            This is{' '}
            <span className="text-pink-500 neon-pink">{personalData.name}</span>
            {`, I'm a `}
            <br />
            {/* TypingText replaces the static designation string */}
            <TypingText />
          </h1>

          <div className="my-12 flex items-center gap-5">
            <Link
              href={personalData.github}
              target='_blank'
              rel="noopener noreferrer"
              className="transition-all text-pink-500 hover:scale-125 duration-300"
              aria-label="GitHub profile"
            >
              <BsGithub size={30} />
            </Link>
            <Link
              href={personalData.linkedIn}
              target='_blank'
              rel="noopener noreferrer"
              className="transition-all text-pink-500 hover:scale-125 duration-300"
              aria-label="LinkedIn profile"
            >
              <BsLinkedin size={30} />
            </Link>
            <Link
              href={personalData.facebook}
              target='_blank'
              rel="noopener noreferrer"
              className="transition-all text-pink-500 hover:scale-125 duration-300"
              aria-label="Medium profile"
            >
              <FaFacebook size={30} />
            </Link>
            <Link
              href={personalData.leetcode}
              target='_blank'
              rel="noopener noreferrer"
              className="transition-all text-pink-500 hover:scale-125 duration-300"
              aria-label="LeetCode profile"
            >
              <SiLeetcode size={30} />
            </Link>
            <Link
              href={personalData.twitter}
              target='_blank'
              rel="noopener noreferrer"
              className="transition-all text-pink-500 hover:scale-125 duration-300"
              aria-label="Twitter / X profile"
            >
              <FaTwitterSquare size={30} />
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Link href="#contact" className="bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600">
              <button className="px-3 text-xs md:px-8 py-3 md:py-4 bg-[#0d1224] rounded-full border-none text-center md:text-sm font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out md:font-semibold flex items-center gap-1 hover:gap-3">
                <span>Contact me</span>
                <RiContactsFill size={16} />
              </button>
            </Link>

            <Link
              className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
              role="button"
              target="_blank"
              rel="noopener noreferrer"
              href={personalData.resume}
            >
              <span>Get Resume</span>
              <MdDownload size={16} />
            </Link>
          </div>
        </div>

        {/* Code block panel — terminal-flicker adds a subtle scanline pulse, float-slow adds gentle vertical drift */}
        <div className="order-1 lg:order-2 from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] terminal-flicker float-slow">
          <div className="flex flex-row">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
            <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
          </div>
          <div className="px-4 lg:px-8 py-5">
            <div className="flex flex-row space-x-2">
              <div className="h-3 w-3 rounded-full bg-red-400"></div>
              <div className="h-3 w-3 rounded-full bg-orange-400"></div>
              <div className="h-3 w-3 rounded-full bg-green-200"></div>
            </div>
          </div>
          <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
            <code className="font-mono text-xs md:text-sm lg:text-base">
              <div className="blink">
                <span className="mr-2 text-pink-500">const</span>
                <span className="mr-2 text-white">coder</span>
                <span className="mr-2 text-pink-500">=</span>
                <span className="text-gray-400">{'{'}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
                <span className="text-gray-400">{`'`}</span>
                <span className="text-amber-300">Richardson Gunde</span>
                <span className="text-gray-400">{`',`}</span>
              </div>
              <div className="ml-4 lg:ml-8 mr-2">
                <span className=" text-white">skills:</span>
                <span className="text-gray-400">{`['`}</span>
                <span className="text-amber-300">Python</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Java</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">TensorFlow</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">PyTorch</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">LangChain</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">LlamaIndex</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">CrewAI</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Streamlit</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Eclipse</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Llama2/3</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Mistral</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">OpenAI</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Google Gemini Pro</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Chroma-db</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Pinecone</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Faiss-cpu</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">postgreSQL(pgadmin)</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Qdrant</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">DataStax Cassandra DB</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">MySQL</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">MongoDB</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">AWS Bedrock</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">AWS EC2</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">AWS Lambda</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Azure Functions</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Hugging Face Spaces</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Fine-tuning</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Vector Embedding</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">RAG</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">React</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Flask</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">FastAPI</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Docker</span>
                <span className="text-gray-400">{"'],"}</span>
              </div>
              <div className="ml-4 lg:ml-8 mr-2">
                <span className=" text-white">certifications:</span>
                <span className="text-gray-400">{`['`}</span>
                <span className="text-amber-300">Introduction to OpenAI GPT Models</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Generative AI Landscape</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Prompt Engineering</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">AI First Software Engineer</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Basics of PLC</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">NPTL Python Certified</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">SDET Certified</span>
                <span className="text-gray-400">{"'],"}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">hardWorker:</span>
                <span className="text-orange-400">true</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">quickLearner:</span>
                <span className="text-orange-400">true</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">problemSolver:</span>
                <span className="text-orange-400">true</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-green-400">hireable:</span>
                <span className="text-orange-400">function</span>
                <span className="text-gray-400">{'() {'}</span>
              </div>
              <div>
                <span className="ml-8 lg:ml-16 mr-2 text-orange-400">return</span>
                <span className="text-gray-400">{`(`}</span>
              </div>
              <div>
                <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                <span className="mr-2 text-white">hardWorker</span>
                <span className="text-amber-300">&amp;&amp;</span>
              </div>
              <div>
                <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                <span className="mr-2 text-white">problemSolver</span>
                <span className="text-amber-300">&amp;&amp;</span>
              </div>
              <div>
                <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                <span className="mr-2 text-white">skills.length</span>
                <span className="mr-2 text-amber-300">&gt;=</span>
                <span className="text-orange-400">5</span>
              </div>
              <div><span className="ml-8 lg:ml-16 mr-2 text-gray-400">{`);`}</span></div>
              <div><span className="ml-4 lg:ml-8 text-gray-400">{`};`}</span></div>
              <div><span className="text-gray-400">{`};`}</span></div>
            </code>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
