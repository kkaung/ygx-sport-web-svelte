import type {
    GetLiveMatchesResonse,
    GetMatchDetails,
    GetMatchesResonse,
} from '$lib/commons/types/soccerService';
import moment from 'moment';

const base = 'http://localhost:3001/api/sports/soccer';

const fetchOptions = {};

export const getMatches = async (date: Date): Promise<GetMatchesResonse> => {
    const formatted = moment(date).format('YYYYMMDD');
    const res = await fetch(base + '?date=' + formatted);
    return res.json();
};

export const getLiveMatches = async (): Promise<GetLiveMatchesResonse> => {
    const res = await fetch(base + '?live=true');
    return res.json();
};

export const getMatchDetails = async (
    mid: number
): Promise<GetMatchDetails> => {
    const res = await fetch(base + '/' + mid);
    return res.json();
};
