"use client";
import GitHubCalendar from "react-github-calendar";

function GitHubStats() {
  const username = "sksmagr23";

  const stats = [
    {
      id: 1,
      url: `https://github-readme-stats.vercel.app/api?username=${username}&count_private=true&show_icons=true&theme=react&hide_border=true&rank_icon=github&text_bold=true&bg_color=45,001105,002387`,
      alt: "GitHub Stats",
    },
    {
      id: 2,
      url: `https://github-readme-streak-stats.herokuapp.com/?user=${username}&count_private=true&theme=react&hide_border=true&text_bold=true&background=45,001105,002387`,
      alt: "GitHub Streak Stats",
    },
  ];

  return (
    <div
      id="github"
      className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]"
    >
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-[#2246c7] to-transparent w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#004e89]"></span>
          <span className="bg-[#004e89] w-fit text-white p-2 px-2 text-xl rounded-md">
            Contrib Stats
          </span>
          <span className="w-24 h-[2px] bg-[#004e89]"></span>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-6xl mx-auto px-2 md:px-4">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="transform transition-all duration-500 hover:scale-[1.02] w-full"
            >
              <div className="rounded-lg border border-[#0f1565] bg-gradient-to-r to-[#00054b] from-[#060d29] shadow-none hover:border-[#2c56ef] transition-all duration-500">
                <div className="flex -translate-y-[1px] justify-center">
                  <div className="w-3/4">
                    <div className="h-[1.5px] w-full bg-gradient-to-r from-transparent via-[#4b66c8] to-transparent" />
                  </div>
                </div>
                <div className="relative">
                  <img
                    src={stat.url}
                    alt={stat.alt}
                    className="w-full h-auto rounded-lg relative z-10 hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.5)]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 opacity-0 hover:opacity-100 bg-blue-500/20 rounded-lg blur-md transition-all duration-500"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">
            Days I <span className="text-cyan-400">Code</span>
          </h2>

          <div className="w-full max-w-6xl p-3 rounded-lg border border-[#0f1565] bg-gradient-to-r to-[#000216]/75 from-[#030921]/75 shadow-none hover:border-[#249eea] transition-all duration-500">
            <div className="flex -translate-y-[1px] justify-center">
              <div className="w-3/4">
                <div className="h-[1.5px] w-full bg-gradient-to-r from-transparent via-[#153fd6] to-transparent" />
              </div>
            </div>

            <div className="p-4 flex justify-center overflow-x-auto bg-gradient-to-r to-[#00032d] from-[#060d29]">
              <GitHubCalendar
                username={username}
                blockSize={window.innerWidth < 768 ? 8 : 14}
                blockMargin={window.innerWidth < 768 ? 2 : 4}
                theme={{
                  light: [
                    "#00054b",
                    "#0353a4",
                    "#00b4d8",
                    "#90e0ef",
                    "#caf0f8",
                  ],
                  dark: ["#00054b", "#0353a4", "#00b4d8", "#90e0ef", "#caf0f8"],
                }}
                fontSize={window.innerWidth < 768 ? 12 : 16}
                style={{
                  color: "white",
                  maxWidth: "100%",
                  minHeight: window.innerWidth < 768 ? "100px" : "auto",
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
