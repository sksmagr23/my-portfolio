"use client";
import GitHubCalendar from "react-github-calendar";
import { useEffect, useState } from "react";

function GitHubStats() {
  const username = "sksmagr23";
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const stats = [
    {
      id: 1,
      url: `https://github-readme-stats.vercel.app/api?username=${username}&count_private=true&show_icons=true&theme=dark&hide_border=true&rank_icon=github&text_color=64FFDA&text_bold=true&bg_color=180,00000000,00094a`,
      alt: "GitHub Stats",
    },
    {
      id: 2,
      url: `https://github-readme-streak-stats.herokuapp.com/?user=${username}&count_private=true&theme=dark&hide_border=true&text_color=64FFDA&text_bold=true&background=180,00000000,00094a`,
      alt: "GitHub Streak Stats",
    },
  ];

  return (
    <div
      id="github"
      className="relative z-50 border-t my-12 lg:my-24 border-[#1a1abb]"
    >
      <div className="w-[160px] h-[160px] bg-indigo-500 rounded-full absolute top-20 left-[20%] filter blur-[120px] opacity-10"></div>
      <div className="w-[140px] h-[140px] bg-teal-400 rounded-full absolute bottom-20 right-[20%] filter blur-[100px] opacity-10"></div>

      <div className="flex justify-center translate-y-[25px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-[#6b9dd1] to-transparent w-full" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center my-8">
        <h2 className="text-2xl lg:text-3xl font-bold text-center mb-4">
          <span className="text-gradient">GITHUB STATS</span>
        </h2>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto px-2 md:px-4 h-auto">
          {stats.map((stat) => (
            <div key={stat.id} className="card-highlight hover-lift w-full">
              <div className="border border-[#1a2370] shadow-lg">
                <div className="flex -translate-y-[1px] justify-center">
                  <div className="w-4/5">
                    <div className="h-[2px] bg-gradient-to-r from-transparent via-teal-400 to-transparent" />
                  </div>
                </div>
                <div className="relative">
                  <img
                    src={stat.url}
                    alt={stat.alt}
                    className="w-full relative z-10 transition-all duration-300"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center">

          <div className="w-full max-w-6xl card-highlight glass-panel border border-[#1a2370] shadow-lg shadow-indigo-900/10">
            <div className="flex -translate-y-[0.5px] justify-center">
              <div className="w-4/5">
                <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-teal-400 to-transparent" />
              </div>
            </div>

            <div className="p-4 flex justify-center overflow-x-auto">
              <GitHubCalendar
                username={username}
                blockSize={windowWidth < 768 ? 8 : 14}
                blockMargin={windowWidth < 768 ? 2 : 4}
                theme={{
                  light: [
                    "#00054b",
                    "#0353a4",
                    "#00b4d8",
                    "#90e0ef",
                    "#caf0f8",
                  ],
                  dark: ["#1a2360", "#00b4d8", "#1a29aa", "#caf0f8","#64ffb9"],
                }}
                fontSize={windowWidth < 768 ? 12 : 16}
                style={{
                  color: "white",
                  maxWidth: "100%",
                  minHeight: windowWidth < 768 ? "100px" : "auto",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GitHubStats;
