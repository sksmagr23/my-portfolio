'use client';
import { skillsData } from "@/utils/data/skills";
import { skillsImage } from "@/utils/skill-image";
import Image from "next/image";
import Marquee from "react-fast-marquee";

function Skills() {
  return (
    <div id="skills" className="relative z-50 border-t my-14 lg:my-20 border-[#1a1abb]">
      {/* <Image
        src="/hero.svg"
        alt="Hero"
        width={1000}
        height={16}
        className="absolute top-0 -z-10"
      /> */}
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-[#2246c7] to-transparent  w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-6">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#004e89]"></span>
          <span className="bg-[#004e89] w-fit text-white p-2 px-5 text-xl rounded-md">
            Skills
          </span>
          <span className="w-24 h-[2px] bg-[#004e89]"></span>
        </div>
      </div>

      <div className="w-full my-6 sm:my-10 lg:my-10">
        <Marquee
          gradient={false}
          speed={60}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
        >
          {skillsData.map((skill, id) => (
            <div
              className="w-28 sm:w-32 lg:w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-1 sm:m-2 lg:m-4 rounded-lg group relative hover:scale-[1.15] cursor-pointer"
              key={id}
            >
              <div className="h-full w-full rounded-lg border border-[#0f1565] bg-gradient-to-r to-[#00054b] from-[#060d29] shadow-none shadow-gray-50 group-hover:border-[#2c56ef] transition-all duration-500">
                <div className="flex -translate-y-[1px] justify-center">
                  <div className="w-3/4">
                    <div className="h-[1.5px] w-full bg-gradient-to-r from-transparent via-[#4b66c8] to-transparent" />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-2 sm:gap-3 p-4 sm:p-6">
                  <div className="h-10 sm:h-12 lg:h-14 relative">
                    <Image
                      src={skillsImage(skill)?.src}
                      alt={skill}
                      width={40}
                      height={40}
                      className="h-full w-auto rounded-lg relative z-10 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
                    />
                    <div className="absolute inset-0 group-hover:bg-blue-500/20 rounded-lg blur-md transition-all duration-500"></div>
                  </div>
                  <p className="text-white text-xs sm:text-sm lg:text-md font-medium mt-1 sm:mt-2">
                    {skill}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default Skills;