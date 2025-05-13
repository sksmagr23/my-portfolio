import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { MdDownload } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import { FaTerminal } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { SiGmail } from "react-icons/si";

function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-between py-8 lg:py-16 min-h-screen">
      <Image
        src="/hero.svg"
        alt="Hero"
        width={1800}
        height={1000}
        className="absolute -top-[90px] -z-10"
      />

      <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-10">
        <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10">
          <h1 className="text-2xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.3rem] lg:leading-[3rem]">
            Hello, <br />
            This is {' '}
            <span className=" text-[#ffc300]">{personalData.name}</span><br />
            <span className=" text-[#4db9f0]">{personalData.designation}</span>
          </h1>
          <p className="text-sm md:text-xl flex items-center gap-3 mt-6 px-1">
            <SiGmail
              className="bg-[#d4eaff] p-2 rounded-full hover:bg-[#bb1414] hover:text-white hover:scale-110 transition-all duration-300 text-black cursor-pointer"
              size={36}
            />
            <span>{personalData.email}</span>
          </p>
          <div className="my-10 flex items-center gap-6 px-2">
            <Link
              href={personalData.github}
              target='_blank'
              className="transition-all text-white hover:text-gray-400 hover:scale-125 duration-300"
            >
              <BsGithub size={32} />
            </Link>
            <Link
              href={personalData.linkedIn}
              target='_blank'
              className="transition-all text-white hover:text-sky-500 hover:scale-125 duration-300"
            >
              <FaLinkedin size={32} />
            </Link>
            <Link
              href={personalData.instagram}
              target='_blank'
              className="transition-all text-white hover:text-pink-500 hover:scale-125 duration-300"
            >
              <FaInstagram size={32} />
            </Link>
            <Link
              href={personalData.leetcode}
              target='_blank'
              className="transition-all text-white hover:text-yellow-500 hover:scale-125 duration-300"
            >
              <SiLeetcode size={32} />
            </Link>
            <Link
              href={personalData.twitter}
              target='_blank'
              className="transition-all text-white hover:text-zinc-400 hover:scale-125 duration-300"
            >
              <FaXTwitter size={32} />
            </Link>
          </div>

          <div className="flex items-center gap-3 mb-16">
            <Link href="https://sksm.tech/" className="bg-gradient-to-r to-[#4db9f0] from-[#ffc300] p-[1.5px] rounded-full transition-all duration-300 hover:from-[#4db9f0] hover:to-[#ffc300]">
              <button className="px-2 text-xs md:px-6 py-3 md:py-4 bg-[#07113b] rounded-full border-none text-center md:text-sm font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out  md:font-semibold flex items-center gap-2 hover:gap-3">
                <span>My Terminal</span>
                <FaTerminal size={16} />
              </button>
            </Link>

            <Link className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-[#145182] to-[#a17b00] px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold" role="button" target="_blank" href={personalData.resume}
            >
              <span>Resume</span>
              <MdDownload size={16} />
            </Link>
          </div>

        </div>
        <div className="order-1 lg:order-2 from-[#040819] border-[#1c3aa5a0] relative rounded-lg border bg-gradient-to-r to-[#00054b] transition-all duration-200 shadow-xl shadow-sky-800/80 drop-shadow-xl">
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
          <div className="overflow-hidden border-t-[2px] border-blue-800 px-4 lg:px-8 py-4 lg:py-8">
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
    </section>
  );
};

export default HeroSection;