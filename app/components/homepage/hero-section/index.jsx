'use client';
import React, { useEffect, useRef } from "react";
import { personalData } from "@/utils/data/personal-data";
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
    <section className="relative flex flex-col items-center justify-between py-8 mt-5 lg:py-12 max-h-screen mb-20 " priority="true">
      <div className="grid grid-cols-1 items-start md:grid-cols-2 md:gap-12 gap-y-2">
        <div className="order-1 lg:order-1 flex flex-col items-start justify-center p-2 pb-16 md:pb-10 lg:pt-8">
          <h1 className="text-2xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.3rem] lg:leading-[3rem]">
            Hello, <br />
            This is {' '}
            <span className=" text-[#ffc300]">{personalData.name}</span><br />
            {"{ "}
            <span className=" text-[#4db9f0]" ref={textRef}></span>
            {" }"}
          </h1>
          <p className="text-sm md:text-xl flex items-center gap-3 mt-6 px-1">
            <LucideMail
              className="p-2 rounded-full hover:scale-110 transition-all duration-300 text-white cursor-pointer"
              size={40}
            />
            <span>{personalData.email}</span>
          </p>
          <div className="my-10 flex items-center gap-6 px-2">
            <Link
              href={personalData.github}
              target='_blank'
              className="transition-all text-zinc-200 hover:scale-125 duration-300"
            >
              <BsGithub size={32} />
            </Link>
            <Link
              href={personalData.linkedIn}
              target='_blank'
              className="transition-all text-sky-500 hover:scale-125 duration-300"
            >
              <FaLinkedin size={34} />
            </Link>
            <Link
              href={personalData.instagram}
              target='_blank'
              className="transition-all text-orange-500 hover:scale-125 duration-300"
            >
              <FaInstagram size={34} />
            </Link>
            <Link
              href={personalData.leetcode}
              target='_blank'
              className="transition-all text-yellow-500 hover:scale-125 duration-300"
            >
              <SiLeetcode size={32} />
            </Link>
            <Link
              href={personalData.twitter}
              target='_blank'
              className="transition-all text-zinc-200 hover:scale-125 duration-300"
            >
              <FaXTwitter size={32} />
            </Link>
          </div>

          <div className="flex items-center gap-3 gap-y-6">
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
        <div className="order-2 lg:order-2 flex justify-center items-center">
          <div className="overflow-hidden shadow-xl shadow-[#374a78] rounded-lg">
            <Image
              src={personalData.profile}
              width={350}
              height={350}
              alt="Saksham"
              className="cursor-pointer object-cover"
              priority
            />
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default HeroSection;