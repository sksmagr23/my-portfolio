'use client';
import { personalData } from "@/app/data/personal-data";

function AboutSection() {
  return (
    <div id="about" className="m-h-screen border-t border-[#1a1abb] py-10 lg:py-14 relative">
      <div className="flex justify-center -translate-y-[2px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-[#6b9dd1] to-transparent w-full" />
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        <h2 className="text-2xl lg:text-3xl font-bold text-center mb-10">
          <span className="text-gradient">ABOUT</span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="order-1 lg:order-1">
            <div className="card-highlight relative rounded-xl overflow-hidden transition-all duration-300 shadow-2xl shadow-sky-800/20">
              <div className="from-[#060c1e] border-[#1c3aa5a0] relative rounded-xl border bg-gradient-to-b to-[#050839] transition-all duration-200">
                <div className="flex flex-row">
                  <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#64ffb9a8] to-transparent"></div>
                </div>
                
                <div className="px-3 lg:px-4 py-3">
                  <div className="flex flex-row space-x-2 items-center">
                    <div className="h-3 w-3 rounded-full bg-pink-400"></div>
                    <div className="h-3 w-3 rounded-full bg-emerald-400"></div>
                    <div className="h-3 w-3 rounded-full bg-blue-400"></div>
                    <span className="text-xs text-gray-400 ml-2">about-me.md</span>
                  </div>
                </div>
                
                <div className="border-t border-blue-900/50 px-3 lg:px-5 py-5 lg:py-6">
                  <code className="text-xs md:text-sm block">
                    
                    <div className="mb-3 text-gray-200 leading-relaxed">
                      {personalData.description.split('\n').map((paragraph, index) => (
                        <p key={index} className="mb-2">
                          <span className="text-teal-400 text-md italic">{'>'} </span>
                          {paragraph}
                        </p>
                      ))}
                    </div>
                    
                  </code>
                </div>
              </div>
              
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-1000 -z-10"></div>
            </div>
          </div>
          
          <div className="order-2 lg:order-2">
            <div className="card-highlight relative rounded-xl overflow-hidden transition-all duration-300 shadow-2xl shadow-sky-800/20">
              <div className="from-[#0b0d31] border-[#1c3aa5a0] relative rounded-xl border bg-gradient-to-b to-[#070e23] transition-all duration-200">
                <div className="flex flex-row">
                  <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#64ffb9b0] to-transparent"></div>
                </div>
                
                <div className="px-3 lg:px-4 py-3">
                  <div className="flex flex-row space-x-2 items-center">
                    <div className="h-3 w-3 rounded-full bg-red-500"></div>
                    <div className="h-3 w-3 rounded-full bg-amber-400"></div>
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                    <span className="text-xs text-gray-400 ml-2">developer.js</span>
                  </div>
                </div>
                
                <div className="border-t border-blue-900/50 px-4 lg:px-6 py-5 lg:py-6">
                  <code className="text-xs md:text-sm lg:text-base font-mono">
                    <div className="mb-1">
                      <span className="mr-2 text-indigo-300">const</span>
                      <span className="mr-2 text-white">developer</span>
                      <span className="mr-2 text-indigo-300">=</span>
                      <span className="text-gray-300">{'{'}</span>
                    </div>
                    <div>
                      <span className="ml-4 lg:ml-6 mr-2 text-[#6b9dd1]">name:</span>
                      <span className="text-[#c8a951]">{`'`}</span>
                      <span className="text-cyan-300">Saksham Agrawal</span>
                      <span className="text-[#c8a951]">{`',`}</span>
                    </div>
                    <div>
                      <span className="ml-4 lg:ml-6 mr-2 text-[#6b9dd1]">role:</span>
                      <span className="text-[#c8a951]">{`'`}</span>
                      <span className="text-cyan-300">Full Stack Software Developer</span>
                      <span className="text-[#c8a951]">{`',`}</span>
                    </div>
                    <div>
                      <span className="ml-4 lg:ml-6 mr-2 text-[#6b9dd1]">contact:</span>
                      <span className="text-[#c8a951]">{`'`}</span>
                      <span className="text-cyan-300">sakshamag34@gmail.com</span>
                      <span className="text-[#c8a951]">{`',`}</span>
                    </div>
                    <div>
                      <span className="ml-4 lg:ml-6 mr-2 text-[#6b9dd1]">location:</span>
                      <span className="text-[#c8a951]">{`'`}</span>
                      <span className="text-cyan-300">Varanasi, U.P. India</span>
                      <span className="text-[#c8a951]">{`',`}</span>
                    </div>
                    <div className="ml-4 lg:ml-6 mr-2">
                      <span className="text-[#6b9dd1]">Major skills:</span>
                      <span className="text-gray-400">{` [`}</span>
                      <span className="text-[#64ffb9]">'JS'</span>
                      <span className="text-gray-400">, </span>
                      <span className="text-[#64ffb9]">'React'</span>
                      <span className="text-gray-400">, </span>
                      <span className="text-[#64ffb9]">'NextJs'</span>
                      <span className="text-gray-400">, </span>
                      <span className="text-[#64ffb9]">'NodeJs'</span>
                      <span className="text-gray-400">,</span>
                    
                      <span className="text-[#64ffb9]">'Express'</span>
                      <span className="text-gray-400">, </span>
                      <span className="text-[#64ffb9]">'Tailwind'</span>
                      <span className="text-gray-400">, </span>
                      <span className="text-[#64ffb9]">'Golang'</span>
                      <span className="text-gray-400">, </span>
                      <span className="text-[#64ffb9]">'MongoDB'</span>
                      <span className="text-gray-400">, </span>
                      <span className="text-[#64ffb9]">'Vercel'</span>
                      <span className="text-gray-400">{`],`}</span>
                    </div>
                    <div>
                      <span className="ml-4 lg:ml-6 mr-2 text-[#6b9dd1]">openToWork:</span>
                      <span className="text-green-400">true</span>
                      <span className="text-gray-400">,</span>
                    </div>
                    <div>
                      <span className="ml-4 lg:ml-6 mr-2 text-[#6b9dd1]">quickLearner:</span>
                      <span className="text-green-400">true</span>
                      <span className="text-gray-400">,</span>
                    </div>
                    <div>
                      <span className="ml-4 lg:ml-6 mr-2 text-[#6b9dd1]">caffeineLevel:</span>
                      <span className="text-[#c8a951]">{`'`}</span>
                      <span className="text-cyan-300">High ☕</span>
                      <span className="text-[#c8a951]">{`',`}</span>
                    </div>
                    <div>
                      <span className="ml-4 lg:ml-6 mr-2 text-[#6b9dd1]">routine:</span>
                      <span className="text-[#c8a951]">{`'`}</span>
                      <span className="text-cyan-300">Eat. Sleep. Code. Repeat.</span>
                      <span className="text-[#c8a951]">{`',`}</span>
                    </div>
                    <div><span className="text-gray-300">{`};`}</span></div>
                  </code>
                </div>
              </div>
              
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500/20 to-amber-500/20 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-1000 -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;