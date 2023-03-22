import type { League, MatchDetails } from './soccer';

export type GetMatchesResonse = {
    leagues: League[];
};

export type GetLiveMatchesResonse = {
    total: number;
    leagues: League[];
};

export interface GetMatchDetails extends MatchDetails {}
