'use client';
import { educations } from "@/app/data/educations";
import { HiAcademicCap } from "react-icons/hi";
import GlowCard from "../../utils/glow-card";

function Education() {
  return (
    <div id="education" className="relative z-50 border-t my-12 lg:my-24 border-[#1a1abb]">
      <div className="w-[180px] h-[180px] bg-indigo-500 rounded-full absolute top-20 left-[20%] filter blur-[120px] opacity-10"></div>
      <div className="w-[140px] h-[140px] bg-teal-400 rounded-full absolute bottom-20 right-[30%] filter blur-[100px] opacity-10"></div>
      
      <div className="flex justify-center translate-y-[25px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-[#6b9dd1] to-transparent w-full" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center my-8">
        <h2 className="text-2xl lg:text-3xl font-bold text-center mb-4">
          <span className="text-gradient">EDUCATION</span>
        </h2>
      </div>

      <div className="py-8 max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              {educations.map(education => (
                <GlowCard key={education.id} identifier={`education-${education.id}`}>
                  <div className="p-5 sm:p-6 relative glass-panel rounded-xl">
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex items-center gap-2">
                        <p className="text-xs sm:text-sm text-[#64ffb9] font-medium">
                          {education.duration}
                        </p>
                      </div>
                      {education.grade && (
                        <div className="bg-slate-800/50 px-3 py-1 rounded-full">
                          <span className="text-xs text-white">{education.grade}</span>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex items-start gap-x-6">
                      <div className="text-[#57a8ff] transition-all duration-300 p-2 rounded-full">
                        <HiAcademicCap size={36} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-base sm:text-xl mb-2 font-medium text-white">
                          {education.title}
                        </h3>
                        <p className="text-sm sm:text-base text-[#57a8ff] mb-3">
                          {education.institution}
                        </p>
                        
                        {education.description && (
                          <p className="text-sm text-gray-300 mt-2 bg-slate-900/30 p-3 rounded-lg border border-slate-800/80">
                            {education.description}
                          </p>
                        )}
                        
                        {education.courses && (
                          <div className="mt-3">
                            <h4 className="text-xs font-medium text-gray-400 mb-2">KEY COURSES</h4>
                            <div className="flex flex-wrap gap-2">
                              {education.courses.map((course, idx) => (
                                <span 
                                  key={idx} 
                                  className="text-[10px] sm:text-xs bg-slate-800/80 text-[#c8a951] px-2 py-1 rounded-full"
                                >
                                  {course}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
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

export default Education;