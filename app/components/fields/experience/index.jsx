'use client';
import { experiences } from "@/app/data/experience";
import { BsPersonWorkspace } from "react-icons/bs";
import { FaCalendarAlt } from "react-icons/fa";
import GlowCard from "../../utils/glow-card";

function Experience() {
  return (
    <div id="experience" className="relative z-50 border-t my-12 lg:my-24 border-[#1a1abb]">
      <div className="w-[180px] h-[180px] bg-indigo-500 rounded-full absolute top-20 left-[20%] filter blur-[120px] opacity-10"></div>
      <div className="w-[140px] h-[140px] bg-teal-400 rounded-full absolute bottom-20 right-[20%] filter blur-[100px] opacity-10"></div>

      <div className="flex justify-center translate-y-[25px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-[#6b9dd1] to-transparent w-full" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <h2 className="text-2xl lg:text-3xl font-bold text-center mb-8 mt-8">
          <span className="text-gradient">EXPERIENCE</span>
        </h2>
      </div>

      <div className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {experiences.map(experience => (
            <GlowCard key={experience.id} identifier={`experience-${experience.id}`}>
              <div className="p-4 sm:p-6 relative glass-panel rounded-xl">
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center gap-2">
                    <FaCalendarAlt className="text-[#64ffb9]" size={16} />
                    <p className="text-sm text-[#64ffb9]">
                      {experience.duration}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-x-6 pt-2">
                  <div className="text-[#6b9dd1] transition-all duration-300 hover:scale-110 bg-slate-900/60 p-3 rounded-full">
                    <BsPersonWorkspace size={32} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base sm:text-xl mb-3 font-semibold text-white">
                      {experience.title}
                    </h3>
                    <p className="text-sm sm:text-base text-[#6b9dd1] font-medium mb-4">
                      {experience.company}
                    </p>
                    
                  </div>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;