'use client';

import Image from "next/image";
import dynamic from "next/dynamic";
import { educations } from "@/utils/data/educations";
import { BsPersonWorkspace } from "react-icons/bs";
import { PiMedalFill } from "react-icons/pi";
import GlowCard from "../../helper/glow-card";
import lottieFile from '/public/lottie/study.json';

const ScrollReveal = dynamic(() => import('../../helper/scroll-reveal'), { ssr: false });
const AnimationLottie = dynamic(() => import('../../helper/animation-lottie'), { ssr: false });

function Education() {
  return (
    <div id="education" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <Image
        src="/section.svg"
        alt="Decorative section divider background"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Educations
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="flex justify-center items-start">
            <div className="w-3/4 h-3/4">
              <AnimationLottie animationPath={lottieFile} />
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-6">
              {
                educations.map((education, index) => (
                  <ScrollReveal key={education.id} delay={index * 120}>
                    <GlowCard identifier={`education-${education.id}`}>
                      <div className="p-3 relative text-white">
                        <Image
                          src="/blur-23.svg"
                          alt=""
                          aria-hidden="true"
                          width={1080}
                          height={200}
                          className="absolute bottom-0 opacity-80"
                        />
                        <div className="flex justify-center mb-2">
                          <p className="text-xs sm:text-sm text-[#16f2b3] font-mono">
                            {education.duration}
                          </p>
                        </div>
                        <div className="flex items-start gap-x-4 px-3 py-3">
                          <div className="text-violet-500 mt-1 flex-shrink-0 transition-all duration-300 hover:scale-125">
                            <BsPersonWorkspace size={32} />
                          </div>
                          <div className="flex-1">
                            <p className="text-sm sm:text-base font-semibold uppercase leading-snug">
                              {education.title}
                            </p>
                            <p className="text-xs sm:text-sm text-slate-300 mt-1">
                              {education.institution}
                            </p>
                            {education.grade && (
                              <p className="flex items-center gap-1 text-xs text-amber-300 mt-2">
                                <PiMedalFill size={14} />
                                Grade: {education.grade}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </GlowCard>
                  </ScrollReveal>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
