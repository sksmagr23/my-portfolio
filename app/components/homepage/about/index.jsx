'use client';
import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";

function AboutSection() {
  return (
    <div id="about" className="max-h-screen py-3 lg:py-6 relative">
      <div className="max-w-7xl mx-2 md:mx-auto px-4 py-2">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center justify-center">
          <div className="order-1 mt-20">
            <p className="font-bold mb-2 text-[#ffc300] text-xl uppercase p-2">
              My Info.
            </p>
            <p className="text-gray-200 text-sm lg:text-lg p-2 rounded-lg shadow-lg">
              {personalData.description}
            </p>
          </div>
          <div className="order-2">
            <div className="from-[#040819] border-[#1c3aa5a0] relative rounded-lg border bg-gradient-to-r to-[#00054b] transition-all duration-200 shadow-xl shadow-sky-800/80 drop-shadow-xl">

          <div className="flex flex-row">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent to-[#0056be] via-[#ffc300]"></div>
            <div className="h-[1px] w-full bg-gradient-to-r from-[#0056be] to-transparent"></div>
          </div>
          <div className="px-2 lg:px-4 py-4">
            <div className="flex flex-row space-x-2">
              <div className="h-3 w-3 rounded-full bg-red-600"></div>
              <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
              <div className="h-3 w-3 rounded-full bg-green-600"></div>
            </div>
          </div>
          <div className="border-t-[2px] border-blue-800 px-4 lg:px-8 py-4 lg:py-8">
            <code className="text-xs md:text-sm lg:text-base">
              <div className="blink">
                <span className="mr-2 text-orange-400">const</span>
                <span className="mr-2 text-white">coder</span>
                <span className="mr-2 text-orange-400">=</span>
                <span className="text-yellow-100">{'{'}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
                <span className="text-blue-300">{`'`}</span>
                <span className="text-cyan-300">Saksham Agrawal</span>
                <span className="text-blue-300">{`',`}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">role:</span>
                <span className="text-blue-300">{`'`}</span>
                <span className="text-cyan-300">Full Stack Software Developer</span>
                <span className="text-blue-300">{`',`}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">contact:</span>
                <span className="text-blue-300">{`'`}</span>
                <span className="text-cyan-300">sakshamag34@gmail.com</span>
                <span className="text-blue-300">{`',`}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">location:</span>
                <span className="text-blue-300">{`'`}</span>
                <span className="text-cyan-300">Varanasi, U.P. India</span>
                <span className="text-blue-300">{`',`}</span>
              </div>
              <div className="ml-4 lg:ml-8 mr-2">
                <span className=" text-white">Major skills:</span>
                <span className="text-gray-400">{`['`}</span>
                <span className="text-amber-300">JS</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">React</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">NextJs</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">NodeJs</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Express</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Tailwind CSS</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Golang</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">MongoDB</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Vercel</span>
                <span className="text-gray-400">{"'],"}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">openToWork:</span>
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
                <span className="ml-4 lg:ml-8 mr-2 text-white">caffeineLevel:</span>
                <span className="text-blue-300">{`'`}</span>
                <span className="text-cyan-300">High ☕</span>
                <span className="text-blue-300">{`',`}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">routine:</span>
                <span className="text-blue-300">{`'`}</span>
                <span className="text-cyan-300">Eat. Sleep. Code. Repeat.</span>
                <span className="text-blue-300">{`',`}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">chillMode:</span>
                <span className="text-orange-400">true</span>
                <span className="text-gray-400">,</span>
              </div>
              <div><span className="text-yellow-100">{`};`}</span></div>
            </code>
          </div>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;