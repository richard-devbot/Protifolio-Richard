'use client';

import { experiences } from "@/utils/data/experience";
import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import dynamic from "next/dynamic";
import GlowCard from "../../helper/glow-card";
import experience from '/public/lottie/code.json';

const ScrollReveal = dynamic(() => import('../../helper/scroll-reveal'), { ssr: false });
const AnimationLottie = dynamic(() => import('../../helper/animation-lottie'), { ssr: false });

function Experience() {
  return (
    <div id="experience" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <Image
        src="/section.svg"
        alt="Decorative section divider background"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Experience
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="flex justify-center items-start">
            <div className="w-full h-full">
              <AnimationLottie animationPath={experience} />
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-6">
              {experiences.map((exp, index) => (
                <ScrollReveal key={exp.id} delay={index * 120}>
                  <GlowCard identifier={`experience-${exp.id}`}>
                    <div className="p-4 relative">
                      <Image
                        src="/blur-23.svg"
                        alt=""
                        aria-hidden="true"
                        width={1080}
                        height={200}
                        className="absolute bottom-0 opacity-80"
                      />

                      {/* Duration + location */}
                      <div className="flex flex-col items-center gap-1 mb-3">
                        <p className="text-xs sm:text-sm text-[#16f2b3] font-mono">
                          {exp.duration}
                        </p>
                        {exp.location && (
                          <p className="flex items-center gap-1 text-xs text-slate-400">
                            <MdLocationOn size={12} />
                            {exp.location}
                          </p>
                        )}
                      </div>

                      {/* Title + company */}
                      <div className="flex items-start gap-x-4 px-2 pb-3">
                        <div className="text-violet-500 mt-1 flex-shrink-0 transition-all duration-300 hover:scale-125">
                          <BsPersonWorkspace size={32} />
                        </div>
                        <div className="flex-1">
                          <p className="text-base sm:text-lg font-semibold uppercase tracking-wide text-white">
                            {exp.title}
                          </p>
                          <p className="text-sm text-slate-300 mt-0.5">
                            {exp.company}
                          </p>
                        </div>
                      </div>

                      {/* Description bullets */}
                      {exp.description && exp.description.length > 0 && (
                        <ul className="px-4 pb-2 flex flex-col gap-2">
                          {exp.description.map((point, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-400">
                              <span className="text-[#16f2b3] mt-1 flex-shrink-0">▸</span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* Skills chips */}
                      {exp.skills && exp.skills.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 px-4 pt-2 pb-1">
                          {exp.skills.map((skill) => (
                            <span
                              key={skill}
                              className="text-[10px] px-2 py-0.5 rounded-full border border-violet-500/40 text-violet-300 bg-violet-500/10"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Achievement badge */}
                      {exp.achievement && (
                        <div className="mx-4 mt-3 mb-1 px-3 py-2 rounded-md bg-amber-500/10 border border-amber-500/30">
                          <p className="text-[10px] sm:text-xs text-amber-300">
                            🏆 {exp.achievement}
                          </p>
                        </div>
                      )}
                    </div>
                  </GlowCard>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
