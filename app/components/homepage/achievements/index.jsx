'use client';
import { achievements } from "@/utils/data/achievements";
import Image from "next/image";
import { BsTrophy } from "react-icons/bs";
import GlowCard from "../../helper/glow-card";

function Achievement() {
    return (
        <div id="achievement" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
            <div className="flex justify-center my-5 lg:py-8">
                <div className="flex  items-center">
                    <span className="w-24 h-[2px] bg-[#004e89]"></span>
                    <span className="bg-[#004e89] w-fit text-white p-2 px-5 text-xl rounded-md">
                        Achievements
                    </span>
                    <span className="w-24 h-[2px] bg-[#004e89]"></span>
                </div>
            </div>

            <div className="py-8">
                <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 lg:gap-16">
                    {
                        achievements.map(ac => (
                            <GlowCard key={ac.id} identifier={`achievement-${ac.id}`}>
                                <div className="p-3 relative">
                                    <Image
                                        src="/blur-23.svg"
                                        alt="Hero"
                                        width={1080}
                                        height={200}
                                        className="absolute bottom-0 opacity-80"
                                    />
                                    <div className="flex items-center gap-x-8 px-3 py-5">
                                        <div className="text-gray-300  transition-all duration-300 hover:scale-125">
                                            <BsTrophy size={36} />
                                        </div>
                                        <div>
                                            <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                                                {ac.position}
                                            </p>
                                            <p className="text-sm sm:text-base text-blue-300">
                                                {ac.event}
                                            </p>
                                            <p className="text-sm sm:text-base text-yellow-300">
                                                P.S:- {ac.PS}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </GlowCard>
                        ))
                    }

                </div>
            </div>
        </div>
    );
};

export default Achievement;