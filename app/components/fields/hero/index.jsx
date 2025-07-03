'use client';
import React, { useEffect, useRef } from "react";
import { personalData } from "@/app/data/personal-data";
import Link from "next/link";
import Image from "next/image";
import { BsGithub } from "react-icons/bs";
import { FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { FaFilePdf } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTerminal } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { LucideMail } from "lucide-react";
import Typed from "typed.js";

function HeroSection() {
  const textRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: personalData.designation,
      typeSpeed: 75,
      backSpeed: 75,
      startDelay: 500,
      backDelay: 2500,
      loop: true,
      showCursor: false
    };

    const typed = new Typed(textRef.current, options);
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-between py-10 mt-4 lg:py-12 mb-20" priority="true">
      <div className="grid grid-cols-1 items-center md:grid-cols-2 md:gap-16 gap-y-4">
        <div className="order-1 lg:order-1 flex flex-col items-start justify-center p-2 pb-16 md:pb-10 lg:pt-8">
          <h1 className="text-2xl font-bold leading-tight text-white lg:text-[2.4rem] lg:leading-[3rem]">
            Hello, <br />
            This is {' '}
            <span className="text-gradient">
              {personalData.name}
            </span>
            <br />
            <span className="text-gray-300 opacity-90 italic">{'{ '}</span>
            <span className="text-[#1ec7ff] italic" ref={textRef}></span>
            <span className="text-gray-300 opacity-90 italic">{' }'}</span>
          </h1>

          <p className="text-md md:text-lg flex items-center gap-2 mt-8 px-1">
            <LucideMail
              className="p-1.5 rounded-full hover-lift text-teal-300 cursor-pointer"
              size={38}
            />
            <span className="text-teal-300">{personalData.email}</span>
          </p>

          <div className="w-full pb-10 mt-10">
            <ul className="flex items-center">
              {[
                { 
                  icon: <BsGithub size={23} className="sm:text-[26px]" />, 
                  href: personalData.github, 
                  tooltip: "GitHub", 
                  social: "github",
                  bgColor: "bg-[#24262a]" 
                },
                { 
                  icon: <FaLinkedin size={23} className="sm:text-[26px]" />, 
                  href: personalData.linkedIn, 
                  tooltip: "LinkedIn", 
                  social: "linkedin",
                  bgColor: "bg-[#1274e3]" 
                },
                { 
                  icon: <FaInstagram size={23} className="sm:text-[26px]" />, 
                  href: personalData.instagram, 
                  tooltip: "Instagram", 
                  social: "instagram",
                  bgColor: "bg-gradient-to-tr from-[#405de6] via-[#c145b4] to-[#fd1f1f]" 
                },
                { 
                  icon: <SiLeetcode size={23} className="sm:text-[26px]" />, 
                  href: personalData.leetcode, 
                  tooltip: "LeetCode", 
                  social: "leetcode",
                  bgColor: "bg-[#ffa116]" 
                },
                { 
                  icon: <FaXTwitter size={23} className="sm:text-[26px]" />, 
                  href: personalData.twitter, 
                  tooltip: "Twitter", 
                  social: "twitter",
                  bgColor: "bg-[#100]" 
                }
              ].map((item, index) => (
                <li key={index} className="relative mr-3 sm:mr-5 group">
                  <Link
                    href={item.href}
                    target="_blank"
                    aria-label={item.tooltip}
                    data-social={item.social}
                    className="relative overflow-hidden flex justify-center items-center w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] rounded-full bg-cyan-900 text-cyan-300 transition-all duration-300 ease-in-out hover:shadow-lg"
                  >
                    <div className={`absolute bottom-0 left-0 w-full h-0 ${item.bgColor} transition-all duration-300 ease-in-out group-hover:h-full`}></div>
                    <span className="relative z-10 group-hover:text-white">{item.icon}</span>
                  </Link>
                  <div className={`absolute top-[-40px] left-1/2 transform -translate-x-1/2 ${item.bgColor} text-white text-xs sm:text-sm py-1 px-2 sm:py-1.5 sm:px-2.5 rounded whitespace-nowrap opacity-0 invisible transition-all duration-300 group-hover:opacity-100 group-hover:visible group-hover:top-[-40px] z-20 font-semibold`}>
                    {item.tooltip}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-4 md:gap-6 mt-2">
              <Link
                href="https://sksm-terminal.vercel.app/"
                target="_blank"
                className=""
              >
                <button className="bg-cyan-950 text-cyan-400 border border-cyan-400 border-b-4 font-medium overflow-hidden relative px-3 py-2 rounded-xl hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                  <span className="bg-cyan-400 shadow-cyan-400 absolute -top-[150%] left-0 inline-flex w-full h-[5px] rounded-xl opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                  <span className="flex items-center gap-3 whitespace-nowrap">My Terminal <FaTerminal size={15} className="text-blue-300" /></span>
                </button>
              </Link>

              <Link
                href={personalData.resume}
                target="_blank"
                className=""
              >
                <button className="bg-teal-950 text-teal-400 border border-teal-400 border-b-4 font-medium overflow-hidden relative px-3 py-2 rounded-xl hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                  <span className="bg-teal-400 shadow-teal-400 absolute -top-[150%] left-0 inline-flex w-96 h-[5px] rounded-xl opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                  <span className="flex items-center gap-3">Resume <FaFilePdf size={15} className="text-teal-300" /></span>
                </button>
              </Link>
            </div>
        </div>

        <div className="order-2 lg:order-2 flex justify-center items-center rounded-full">
          <div className="relative group card-highlight rounded-full glass-panel">
            <div className="absolute -inset-1.5 rounded-full blur opacity-30 group-hover:opacity-40 transition duration-100"></div>
            <div className="relative overflow-hidden rounded-full">
              <div className="absolute inset-0 z-0 rounded-full"></div>
              <Image
                src={personalData.profile}
                width={380}
                height={380}
                alt={personalData.name}
                className="relative z-10 cursor-pointer object-cover transition-transform duration-500 group-hover:scale-105 "
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;