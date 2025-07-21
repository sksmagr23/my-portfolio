"use client";
import GitHubCalendar from "react-github-calendar";
import { useEffect, useState, useMemo } from "react";

const DUMMY_LEETCODE_STATS = {
  totalSolved: 200,
  totalQuestions: 3625,
  easySolved: 108,
  totalEasy: 886,
  mediumSolved: 77,
  totalMedium: 1884,
  hardSolved: 15,
  totalHard: 855,
  ranking: 668955,
  contributionPoint: 677,
};

const DUMMY_LEETCODE_CONTEST = {
  contestAttend: 4,
  contestRating: 1500.40,
  contestGlobalRanking: 509950,
  totalParticipants: 720317,
  contestTopPercentage: 71.21,
};


function Stats() {
  const githubusername = "sksmagr23";
  const leetcodeUsername = "algofire24";
  const [windowWidth, setWindowWidth] = useState(0);
  const [leetcodeStats, setLeetcodeStats] = useState(null);
  const [leetcodeContest, setLeetcodeContest] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const fetchLeetcodeData = async () => {
      setIsLoading(true);
      try {
        const cachedStats = localStorage.getItem('leetcodeStats');
        const cachedContest = localStorage.getItem('leetcodeContest');
        const cachedTime = localStorage.getItem('leetcodeCacheTime');

        const now = new Date().getTime();
        const cacheAge = cachedTime ? now - parseInt(cachedTime) : Infinity;
        const cacheValid = cacheAge < 3600000;

        if (cacheValid && cachedStats && cachedContest) {
          setLeetcodeStats(JSON.parse(cachedStats));
          setLeetcodeContest(JSON.parse(cachedContest));
          setIsLoading(false);
          return;
        }

        const [statsRes, contestRes] = await Promise.all([
          fetch(`https://alfa-leetcode-api.onrender.com/userProfile/${leetcodeUsername}`),
          fetch(`https://alfa-leetcode-api.onrender.com/${leetcodeUsername}/contest`)
        ]);

        if (!statsRes.ok || !contestRes.ok) {
          throw new Error('Failed to fetch Leetcode data');
        }

        const statsData = await statsRes.json();
        const contestData = await contestRes.json();

        setLeetcodeStats(statsData);
        setLeetcodeContest(contestData);

        localStorage.setItem('leetcodeStats', JSON.stringify(statsData));
        localStorage.setItem('leetcodeContest', JSON.stringify(contestData));
        localStorage.setItem('leetcodeCacheTime', now.toString());
      } catch (error) {
        const cachedStats = localStorage.getItem('leetcodeStats');
        const cachedContest = localStorage.getItem('leetcodeContest');

        if (cachedStats && cachedContest) {
          setLeetcodeStats(JSON.parse(cachedStats));
          setLeetcodeContest(JSON.parse(cachedContest));
        } else {
          setLeetcodeStats(DUMMY_LEETCODE_STATS);
          setLeetcodeContest(DUMMY_LEETCODE_CONTEST);

          localStorage.setItem('leetcodeStats', JSON.stringify(DUMMY_LEETCODE_STATS));
          localStorage.setItem('leetcodeContest', JSON.stringify(DUMMY_LEETCODE_CONTEST));
          localStorage.setItem('leetcodeCacheTime', new Date().getTime().toString());
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchLeetcodeData();
  }, [leetcodeUsername]);

  const gitstats = [
    {
      id: 1,
      url: `https://github-readme-stats.vercel.app/api?username=${githubusername}&count_private=true&show_icons=true&theme=dark&hide_border=true&rank_icon=github&text_color=64FFDA&text_bold=true&bg_color=180,00000000,00094a`,
      alt: "GitHub Stats",
    },
    {
      id: 2,
      url: `https://github-readme-streak-stats.herokuapp.com/?user=${githubusername}&count_private=true&theme=dark&hide_border=true&text_color=64FFDA&text_bold=true&background=180,00000000,00094a`,
      alt: "GitHub Streak Stats",
    },
  ];

  const getCompletionPercentage = (solved, total) => {
    return ((solved / total) * 100).toFixed(1);
  };

  return (
    <div
      id="stats"
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
          {gitstats.map((stat) => (
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
                username={githubusername}
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
                  dark: ["#1a2360", "#00b4d8", "#1a29aa", "#caf0f8", "#64ffb9"],
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

        <div className="mt-12 mb-12">
          <div className="flex justify-center translate-y-[25px]">
            <div className="w-3/4">
              <div className="h-[1px] bg-gradient-to-r from-transparent via-[#6b9dd1] to-transparent w-full" />
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 flex flex-col items-center my-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-center mb-4">
              <span className="text-gradient">LEETCODE STATS</span>
            </h2>
          </div>

          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <div className="flex flex-col items-center">
                <div className="animate-pulse flex space-x-2 mb-3">
                  <div className="h-3 w-3 bg-blue-400 rounded-full"></div>
                  <div className="h-3 w-3 bg-blue-400 rounded-full animate-pulse-slow"></div>
                  <div className="h-3 w-3 bg-blue-400 rounded-full"></div>
                </div>
                <p className="text-gray-400 text-sm">Loading LeetCode stats...</p>
              </div>
            </div>
          ) : (
            <>
              {leetcodeStats && (
                <div className="w-full max-w-6xl mx-auto">
                  <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-6">
                    <div className="card-highlight hover-lift glass-panel border border-[#1a2370] shadow-lg p-2 sm:p-4 flex flex-col items-center justify-center">
                      <h3 className="text-sm sm:text-lg font-semibold text-blue-400">Total Solved</h3>
                      <div className="mt-2 text-center w-full">
                        <div className="text-2xl sm:text-3xl font-bold text-blue-400">{leetcodeStats.totalSolved}</div>
                        <div className="text-xs sm:text-sm text-gray-300 mt-1">of {leetcodeStats.totalQuestions} problems</div>
                        <div className="w-full bg-gray-700 h-2 rounded-full mt-2">
                          <div
                            className="bg-blue-400 h-2 rounded-full"
                            style={{ width: `${(leetcodeStats.totalSolved / leetcodeStats.totalQuestions) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>

                    <div className="card-highlight hover-lift glass-panel border border-[#1a2370] shadow-lg p-3 sm:p-5 flex flex-col items-center justify-center">
                      <h3 className="text-sm sm:text-lg font-semibold text-[#1cbaba]">Easy</h3>
                      <div className="mt-2 text-center w-full">
                        <div className="text-2xl sm:text-3xl font-bold text-[#1cbaba]">{leetcodeStats.easySolved}</div>
                        <div className="text-xs sm:text-sm text-gray-300 mt-1">of {leetcodeStats.totalEasy} problems</div>
                        <div className="w-full bg-gray-700 h-2 rounded-full mt-2">
                          <div
                            className="bg-[#1cbaba] h-2 rounded-full"
                            style={{ width: `${getCompletionPercentage(leetcodeStats.easySolved, leetcodeStats.totalEasy)}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>

                    <div className="card-highlight hover-lift glass-panel border border-[#1a2370] shadow-lg p-3 sm:p-5 flex flex-col items-center justify-center">
                      <h3 className="text-sm sm:text-lg font-semibold text-[#ffb700]">Medium</h3>
                      <div className="mt-2 text-center w-full">
                        <div className="text-2xl sm:text-3xl font-bold text-[#ffb700]">{leetcodeStats.mediumSolved}</div>
                        <div className="text-xs sm:text-sm text-gray-300 mt-1">of {leetcodeStats.totalMedium} problems</div>
                        <div className="w-full bg-gray-700 h-2 rounded-full mt-2">
                          <div
                            className="bg-[#ffb700] h-2 rounded-full"
                            style={{ width: `${getCompletionPercentage(leetcodeStats.mediumSolved, leetcodeStats.totalMedium)}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>

                    <div className="card-highlight hover-lift glass-panel border border-[#1a2370] shadow-lg p-3 sm:p-5 flex flex-col items-center justify-center">
                      <h3 className="text-sm sm:text-lg font-semibold text-[#f63737]">Hard</h3>
                      <div className="mt-2 text-center w-full">
                        <div className="text-2xl sm:text-3xl font-bold text-[#f63737]">{leetcodeStats.hardSolved}</div>
                        <div className="text-xs sm:text-sm text-gray-300 mt-1">of {leetcodeStats.totalHard} problems</div>
                        <div className="w-full bg-gray-700 h-2 rounded-full mt-2">
                          <div
                            className="bg-[#f63737] h-2 rounded-full"
                            style={{ width: `${getCompletionPercentage(leetcodeStats.hardSolved, leetcodeStats.totalHard)}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {leetcodeContest && (
                    <div className="w-full max-w-6xl card-highlight glass-panel border border-[#1a2370] shadow-lg shadow-indigo-900/10 px-3 py-4 mb-5">


                      <h3 className="text-xl font-semibold mb-2 text-center text-gradient">Contest Statistics</h3>

                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="p-3 text-center">
                          <div className="text-2xl md:text-3xl font-bold text-gradient">{leetcodeContest.contestRating ? leetcodeContest.contestRating.toFixed(1) : 'N/A'}</div>
                          <div className="text-sm mt-1">Contest Rating</div>
                        </div>

                        <div className="p-3 text-center">
                          <div className="text-2xl md:text-3xl font-bold text-gradient">
                            {leetcodeContest.contestGlobalRanking ? `${leetcodeContest.contestGlobalRanking}` : 'N/A'}
                          </div>
                          <div className="text-sm mt-1">Global Ranking</div>
                        </div>

                        <div className="p-3 text-center">
                          <div className="text-2xl md:text-3xl font-bold">
                            {leetcodeContest.contestTopPercentage ? `${leetcodeContest.contestTopPercentage.toFixed(2)}%` : 'N/A'}
                          </div>
                          <div className="text-sm mt-1">Top Percentile</div>
                        </div>

                        <div className="p-3 text-center">
                          <div className="text-2xl md:text-3xl font-bold">
                            {leetcodeContest.contestAttend || '0'}
                          </div>
                          <div className="text-sm mt-1">Contests Attended</div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Stats;
