<script lang="ts">
    import type {
        Team,
        MatchStatus,
        MatchEvents,
    } from '$lib/commons/types/soccer';
    import { Icon } from '$lib/components/shared';
    import { UIStore } from '$lib/stores';
    import TeamDetails from './TeamDetails.svelte';
    import TeamGoals from './TeamGoals.svelte';

    export let className = '';
    export let hasStreams: boolean = true;
    export let homeTeam: Team;
    export let awayTeam: Team;
    export let status: MatchStatus;
    export let events: MatchEvents | null;

    const player = UIStore.player;

    const { finished } = status;
</script>

<div class={`${className} space-y-4`}>
    <div class="flex items-center">
        <TeamDetails imageUrl={homeTeam.imageUrl} name={homeTeam.name} />
        <div class="text-center min-w-[40px]">
            {#if !finished}
                <div class="text-green-400">
                    93<span class="animate-fade-in">'</span>
                </div>
            {/if}
            <div class="text-4xl">{homeTeam.score} - {awayTeam.score}</div>
            {#if finished}
                <div>FT</div>
            {/if}
        </div>
        <TeamDetails imageUrl={awayTeam.imageUrl} name={awayTeam.name} />
    </div>
    <div class="flex text-xs space-x-6">
        <TeamGoals goals={events?.homeTeamGoals} className="flex-1 text-end" />
        <Icon name="football" className="text-lg" />
        <TeamGoals goals={events?.awayTeamGoals} className="flex-1" />
    </div>

    {#if hasStreams}
        <div class="text-center">
            <button class="btn space-x-1" on:click={() => player.set(true)}
                ><Icon name="tv" className="text-yellow-400" /><span
                    >Live Stream</span
                ></button
            >
        </div>
    {/if}
</div>

<style>
    .btn {
        @apply bg-gray-400/50 p-1 text-xs rounded-full;
    }
</style>
