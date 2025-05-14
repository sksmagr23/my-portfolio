'use client';
import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";

function AboutSection() {
  return (
    <div id="about" className="max-h-screen py-3 lg:py-6 relative">
      <Image
        src="/hero.svg"
        alt="Hero"
        width={1800}
        height={800}
        className="absolute -top-[100px] -z-10"
      />
      <div className="max-w-7xl mx-auto px-4 py-2">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center justify-center">
          <div className="order-2">
            <p className="font-medium mb-2 text-[#ffc300] text-xl uppercase p-2">
              My Info.
            </p>
            <p className="text-gray-200 text-sm lg:text-lg p-2 rounded-lg shadow-lg">
              {personalData.description}
            </p>
          </div>
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="overflow-hidden shadow-xl shadow-[#374a78]">
              <Image
                src={personalData.profile}
                width={300}
                height={300}
                alt="Saksham"
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;