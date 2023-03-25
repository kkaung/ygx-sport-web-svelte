<script lang="ts">
    import { page } from '$app/stores';
    import type {
        MatchStatus,
        Team,
        MatchEvents,
    } from '$lib/commons/types/soccer';
    import { MatchDetails } from '$lib/components/live';
    import { IPlayer } from '$lib/components/shared';
    import { soccerService } from '$lib/services';
    import { UIStore } from '$lib/stores';
    import { onMount } from 'svelte';

    const player = UIStore.player;

    let loading: boolean = true;
    let status: MatchStatus;
    let homeTeam: Team;
    let awayTeam: Team;
    let events: MatchEvents | null;

    onMount(async () => {
        const mid = $page.params.mid;

        const { current } = await soccerService.getMatchDetails(+mid);

        status = current.status;
        homeTeam = current.teams[0];
        awayTeam = current.teams[1];
        events = current.events;

        loading = false;
    });
</script>

<header>
    {#if loading}
        <MatchDetails.Loader />
    {:else}
        <header>
            {#if $player}
                <IPlayer
                    src="https://www.btyvplayline3a.com/video4.html?url=https://flv3.04lv.com/live/L14567430.flv?txSecret=4cf0ec084b56a98a895f04425515bbb1&txTime=641FE668"
                    onClose={() => player.set(false)}
                />
            {:else}
                <MatchDetails.MatchStatusDetails
                    {status}
                    {homeTeam}
                    {awayTeam}
                    {events}
                    className="my-6"
                />
            {/if}
        </header>
    {/if}
    <div />
</header>
