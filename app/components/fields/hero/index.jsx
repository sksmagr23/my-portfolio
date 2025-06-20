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

          <p className="text-md md:text-lg flex items-center gap-2 mt-8 px-1">
            <LucideMail
              className="p-1.5 rounded-full hover-lift text-teal-300 cursor-pointer"
              size={38}
            />
            <span className="text-teal-300">{personalData.email}</span>
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

          <div className="flex items-center gap-6 gap-y-4 mt-2">
            <Link
              href="https://sksm-terminal.vercel.app/"
              target="_blank"
              className=""
            >
              <button className="bg-cyan-950 text-cyan-400 border border-cyan-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-xl hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                <span className="bg-cyan-400 shadow-cyan-400 absolute -top-[150%] left-0 inline-flex w-96 h-[5px] rounded-xl opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                <span className="flex items-center gap-3">My Terminal <FaTerminal size={15} className="text-blue-300" /></span>
              </button>
            </Link>

            <Link
              href={personalData.resume}
              target="_blank"
              className=""
            >
              <button className="bg-teal-950 text-teal-400 border border-teal-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-xl hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
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