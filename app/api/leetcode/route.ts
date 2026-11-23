import { NextResponse } from 'next/server';
import { codingProfiles } from '@/app/data/portfolio';

const FALLBACK_LEETCODE = {
  ...codingProfiles.leetcode,
  live: false,
};

export async function GET() {
  try {
    const query = `
      query userProfile($username: String!) {
        matchedUser(username: $username) {
          submitStatsGlobal {
            acSubmissionNum {
              difficulty
              count
            }
          }
          profile {
            ranking
          }
        }
        userContestRanking(username: $username) {
          attendedContestsCount
          rating
          globalRanking
          topPercentage
          badge {
            name
          }
        }
      }
    `;

    const response = await fetch('https://leetcode.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Mozilla/5.0',
        Referer: 'https://leetcode.com',
      },
      body: JSON.stringify({
        query,
        variables: { username: codingProfiles.leetcode.username },
      }),
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      return NextResponse.json(FALLBACK_LEETCODE);
    }

    const json = await response.json();
    const matchedUser = json?.data?.matchedUser;
    const contest = json?.data?.userContestRanking;

    if (!matchedUser) {
      return NextResponse.json(FALLBACK_LEETCODE);
    }

    const submissions = matchedUser.submitStatsGlobal?.acSubmissionNum ?? [];
    const getCount = (diff: string) =>
      submissions.find((s: { difficulty: string; count: number }) => s.difficulty === diff)?.count ?? 0;

    return NextResponse.json({
      username: codingProfiles.leetcode.username,
      totalSolved: getCount('All') || FALLBACK_LEETCODE.totalSolved,
      easySolved: getCount('Easy') || FALLBACK_LEETCODE.easySolved,
      mediumSolved: getCount('Medium') || FALLBACK_LEETCODE.mediumSolved,
      hardSolved: getCount('Hard') || FALLBACK_LEETCODE.hardSolved,
      ranking: matchedUser.profile?.ranking ?? FALLBACK_LEETCODE.ranking,
      contestRating: contest?.rating ? Math.round(contest.rating) : FALLBACK_LEETCODE.contestRating,
      contestGlobalRanking: contest?.globalRanking ?? FALLBACK_LEETCODE.contestGlobalRanking,
      contestTopPercentage: contest?.topPercentage
        ? Number(contest.topPercentage.toFixed(2))
        : FALLBACK_LEETCODE.contestTopPercentage,
      attendedContests: contest?.attendedContestsCount ?? FALLBACK_LEETCODE.attendedContests,
      badge: contest?.badge?.name ?? FALLBACK_LEETCODE.badge,
      live: true,
    });
  } catch {
    return NextResponse.json(FALLBACK_LEETCODE);
  }
}
