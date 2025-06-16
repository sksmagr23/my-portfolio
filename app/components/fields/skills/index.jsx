'use client';
import { skillsData, skillsImage } from "@/app/data/skills";
import Image from "next/image";
import Marquee from "react-fast-marquee";

function Skills() {
  return (
    <div id="skills" className="relative z-50 border-t my-8 lg:my-16 border-[#1a1abb] py-10">
      <div className="w-[150px] h-[150px] bg-indigo-500 rounded-full absolute top-10 left-[30%] filter blur-[100px] opacity-10"></div>
      <div className="w-[120px] h-[120px] bg-teal-400 rounded-full absolute top-20 right-[30%] filter blur-[80px] opacity-10"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-[#6b9dd1] to-transparent w-full" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <h2 className="text-2xl lg:text-3xl font-bold text-center mb-8 mt-4">
          <span className="text-gradient">TECHNICAL SKILLS</span>
        </h2>
        
      </div>

      <div className="w-full my-6 sm:my-8 lg:my-8">
        <Marquee
          gradient={true}
          gradientColor={[0, 10, 38]}
          gradientWidth={50}
          speed={70}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
        >
          {skillsData.map((skill, id) => (
            <div
              className="w-28 sm:w-32 lg:w-36 min-w-fit h-fit flex flex-col items-center justify-center 
                        transition-all duration-500 m-2 sm:m-3 lg:m-5 rounded-lg group relative
                        hover:scale-[1.1] hover-lift cursor-pointer"
              key={id}
            >
              <div className="h-full w-full rounded-lg glass-panel border border-[#1a2370] 
                           bg-gradient-to-b from-[#060d29]/80 to-[#00054b]/80 
                           shadow-lg shadow-indigo-900/10 group-hover:border-[#6b9dd1] 
                           transition-all duration-300 glass-panel">
                
                <div className="flex -translate-y-[1px] justify-center">
                  <div className="w-4/5">
                    <div className="h-[1.5px] w-full bg-gradient-to-r from-transparent via-[#64ffb9a5] to-transparent" />
                  </div>
                </div>
                
                <div className="flex flex-col items-center justify-center gap-3 p-5 sm:p-6">
                  <div className="relative h-12 sm:h-14 lg:h-16 w-12 sm:w-14 lg:w-16 flex items-center justify-center">
                    <div className="absolute -inset-1 bg-gradient-to-r from-sky-500/20 to-lime-400/30 rounded-full 
                                 blur-lg opacity-0 group-hover:opacity-70 transition-opacity duration-700"></div>
                    <Image
                      src={skillsImage(skill).src}
                      alt={skill}
                      width={48}
                      height={48}
                      className="h-full w-full rounded-md relative z-10 
                               transition-all duration-300 group-hover:scale-110 object-fill"
                    />
                  </div>
                  
                  <p className="text-teal-300 text-xs sm:text-sm font-medium mt-2 text-center">
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