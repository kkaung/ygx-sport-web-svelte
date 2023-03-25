<script lang="ts">
    import type { MatchStatus as Status } from '$lib/commons/types/soccer';
    import GoalScoreResult from './GoalScoreResult.svelte';
    import MatchTime from './MatchTime.svelte';
    import OngoingTime from './OngoingTime.svelte';
    import PenScoreResult from './PenScoreResult.svelte';

    export let className: string = '';
    export let status: Status;
    export let home: any;
    export let away: any;

    const homeScore = home.score;
    const awayScore = away.score;
    const homePenScore = home?.penScore;
    const awayPenScore = away?.penScore;

    const {
        finished,
        started,
        cancelled,
        ongoing,
        liveTime,
        utcTime,
        aggregatedStr,
    } = status;

    const halfTime: boolean = liveTime?.short === 'HT';
</script>

<div class={`${className}`}>
    {#if ongoing}
        <div class="text-center">
            {#if halfTime}
                <GoalScoreResult {homeScore} {awayScore} />
                <div class="text-xs text-green-400">HT</div>
            {:else}
                <OngoingTime
                    time={liveTime?.short}
                    className="text-red-500 text-xs"
                />
                <GoalScoreResult {homeScore} {awayScore} />
            {/if}
        </div>
    {:else if !started}
        <MatchTime time={utcTime} {cancelled} />
    {:else}
        <div class="text-center">
            {#if aggregatedStr}
                <div class="text-xs text-gray-400/90">{aggregatedStr}</div>
            {/if}
            {#if homePenScore || awayPenScore}
                <PenScoreResult
                    homePenScore={home?.penScore}
                    awayPenScore={away?.penScore}
                />
            {/if}
            <GoalScoreResult {homeScore} {awayScore} />
            <div class="short text-xs text-gray-400">FT</div>
        </div>
    {/if}
</div>

<style>
    .wrapper {
        @apply text-center;
    }

    
</style>
