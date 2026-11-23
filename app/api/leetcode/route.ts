import { NextResponse } from 'next/server';
import { codingProfiles } from '@/app/data/portfolio';

const FALLBACK_LEETCODE = {
  username: codingProfiles.leetcode.username,
  contestRating: codingProfiles.leetcode.contestRating,
  contestTopPercentage: codingProfiles.leetcode.contestTopPercentage,
  badge: codingProfiles.leetcode.badge,
  live: false,
};

export async function GET() {
  try {
    const query = `
      query userContest($username: String!) {
        userContestRanking(username: $username) {
          rating
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
    const contest = json?.data?.userContestRanking;

    if (!contest) {
      return NextResponse.json(FALLBACK_LEETCODE);
    }

    return NextResponse.json({
      username: codingProfiles.leetcode.username,
      contestRating: contest.rating ? Math.round(contest.rating) : FALLBACK_LEETCODE.contestRating,
      contestTopPercentage: contest.topPercentage
        ? Number(contest.topPercentage.toFixed(2))
        : FALLBACK_LEETCODE.contestTopPercentage,
      badge: contest.badge?.name ?? FALLBACK_LEETCODE.badge,
      live: true,
    });
  } catch {
    return NextResponse.json(FALLBACK_LEETCODE);
  }
}
