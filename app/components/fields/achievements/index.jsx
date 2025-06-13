"use client";
import { achievements } from "@/app/data/achievements";
import { BsTrophy } from "react-icons/bs";
import { FaMedal} from "react-icons/fa";
import GlowCard from "../../utils/glow-card";

function Achievement() {
  return (
    <div
      id="achievement"
      className="relative z-50 border-t my-12 lg:my-24 border-[#1a1abb]"
    >
      <div className="w-[160px] h-[160px] bg-lime-400 rounded-full absolute top-20 left-[30%] filter blur-[120px] opacity-10"></div>
      <div className="w-[140px] h-[140px] bg-indigo-500 rounded-full absolute bottom-20 right-[25%] filter blur-[100px] opacity-10"></div>

      <div className="flex justify-center translate-y-[25px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-[#6b9dd1] to-transparent w-full" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center my-8">
        <h2 className="text-2xl lg:text-3xl font-bold text-center mb-8">
          <span className="text-gradient">ACHIEVEMENTS</span>
        </h2>
      </div>

      <div className="py-4 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8">
          {achievements.map((achievement) => (
            <GlowCard
              key={achievement.id}
              identifier={`achievement-${achievement.id}`}
            >
              <div className="p-5 sm:p-6 relative glass-panel rounded-xl">
                <div className="flex flex-col sm:flex-row items-center sm:items-center gap-5 sm:gap-8">
                  <div className="flex flex-col items-center">
                    <div className="text-[#6dd51e] transition-all duration-300 hover:scale-110 bg-slate-900/60 p-4 rounded-full">
                      <BsTrophy size={40} />
                    </div>
                    <div className="mt-2 flex items-center justify-center">
                      <FaMedal className="text-lime-400 mr-1" size={14} />
                      <span className="text-xs font-medium text-white">
                        {achievement.position}
                      </span>
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex justify-between items-start flex-col sm:flex-row gap-2">
                      <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                        {achievement.event}
                      </h3>

                    </div>

                    <div className="mt-3 bg-slate-900/30 rounded-lg p-4 border border-slate-800/80">
                      <h4 className="text-sm font-medium text-[#6b9dd1] mb-2">
                        Problem Statement:
                      </h4>
                      <p className="text-sm text-gray-300 italic">
                        {achievement.PS}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Achievement;
