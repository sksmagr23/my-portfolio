'use client';
import React, { useEffect, useRef } from "react";
import { personalData } from "@/app/data/personal-data";
import Link from "next/link";
import Image from "next/image";
import { BsGithub } from "react-icons/bs";
import { FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { MdDownload } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import { FaTerminal } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { LucideMail } from "lucide-react";
import Typed from "typed.js";

function HeroSection() {
  const role = `${personalData.designation}`;
  const textRef = useRef(null);
  
  useEffect(() => {
    const toRotate = [role];
    const options = {
      strings: toRotate,
      typeSpeed: 75,
      backSpeed: 75,
      startDelay: 1000, 
      backDelay: 5000, 
      loop: true,
      showCursor: false
    };

    const typed = new Typed(textRef.current, options);
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-between py-10 mt-4 lg:py-12 max-h-screen mb-20" priority="true">
      <div className="grid grid-cols-1 items-center md:grid-cols-2 md:gap-16 gap-y-4">
        <div className="order-1 lg:order-1 flex flex-col items-start justify-center p-3 pb-16 md:pb-10 lg:pt-8">
          <h1 className="text-2xl font-bold leading-tight text-white md:font-extrabold lg:text-[2.4rem] lg:leading-[3rem]">
            Hello, <br />
            This is {' '}
            <span className="text-gradient font-bold">
              {personalData.name}
            </span>
            <br />
            <span className="text-gray-200 opacity-90">{'{ '}</span>
            <span className="text-[#6b9dd1]" ref={textRef}></span>
            <span className="text-gray-200 opacity-90">{' }'}</span>
          </h1>
          
          <p className="text-md md:text-lg flex items-center gap-3 mt-8 px-1">
            <LucideMail
              className="p-2 rounded-full glass-panel hover-lift text-white cursor-pointer"
              size={38}
            />
            <span className="text-slate-300">{personalData.email}</span>
          </p>
          
          <div className="my-10 flex items-center gap-7 px-2">
            {[
              { icon: <BsGithub size={28} />, href: personalData.github, color: "text-slate-200" },
              { icon: <FaLinkedin size={30} />, href: personalData.linkedIn, color: "text-sky-400" },
              { icon: <FaInstagram size={30} />, href: personalData.instagram, color: "text-orange-400" },
              { icon: <SiLeetcode size={28} />, href: personalData.leetcode, color: "text-yellow-400" },
              { icon: <FaXTwitter size={28} />, href: personalData.twitter, color: "text-slate-200" }
            ].map((item, index) => (
              <Link
                key={index}
                href={item.href}
                target="_blank"
                className={`transition-standard hover-lift ${item.color}`}
                aria-label={`Visit ${item.href.split('/').pop()}`}
              >
                {item.icon}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4 gap-y-4 mt-2">
            <Link 
              href="https://sksm-terminal.vercel.app/" 
              target="_blank" 
              className="card-highlight group relative overflow-hidden rounded-full shadow-xl hover:shadow-cyan-500/30 transition-standard"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-90"></span>
              <div className="relative z-10 px-3 py-3.5 md:px-4 md:py-4 bg-slate-900/90 mx-[1px] my-[1.5px] rounded-full border-none flex items-center gap-2.5 group-hover:gap-4 transition-standard">
                <span className="text-xs md:text-sm font-medium uppercase tracking-wider text-cyan-300">My Terminal</span>
                <FaTerminal size={15} className="text-blue-300" />
              </div>
            </Link>

            <Link 
              href={personalData.resume}
              target="_blank" 
              className="card-highlight group relative overflow-hidden rounded-full shadow-xl hover:shadow-lime-400/20 transition-standard"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-teal-500 to-teal-400 opacity-90"></span>
              <div className="relative z-10 px-3 py-3.5 md:px-4 md:py-4 bg-slate-900/90 mx-[1px] my-[1.5px] rounded-full border-none flex items-center gap-2 group-hover:gap-4 transition-standard">
                <span className="text-xs md:text-sm font-medium uppercase tracking-wider text-teal-300">Resume</span>
                <MdDownload size={16} className="text-teal-300" />
              </div>
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