export type MatchStatus = {
    utcTime: string;
    finished: boolean;
    started: boolean;
    cancelled: boolean;
    scoreStr: string;
    ongoing?: boolean;
    aggregatedStr?: string;
    whoLostOnPenalities?: string;
    whoLostOnAggregated?: string;
    liveTime?: {
        short: string;
        long: string;
    };
    reason?: {
        short: 'HT' | 'FT';
        long: string;
    };
};

export type League = {
    id: number;
    name: string;
    imageUrl: string;
    matches: Match[];
};

export type Match = {
    id: number;
    time: string;
    home: Team;
    away: Team;
    status: MatchStatus;
    timeTs: string;
    streaming?: boolean;
};

export type Team = {
    id: number;
    score: number;
    penScore?: number;
    name: string;
    longName: string;
    imageUrl: string;
};

export interface MatchGeneral {}

export interface MatchEvents {
    homeTeamGoals: any;
    awayTeamGoals: any;
}

export type MatchCurrent = {
    teams: Team[];
    status: MatchStatus;
    events: null | MatchEvents;
};

export type MatchDetails = {
    ongoing: boolean;
    current: MatchCurrent;
    general: MatchGeneral;
};

type Player = {
    id: number;
    name: string;
};

export type GoalScorerDetails = {
    timeStr: string;
    firstName: string;
    lastName: string;
    time: string;
};
