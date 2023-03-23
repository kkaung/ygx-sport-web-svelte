<script lang="ts">
    import { MatchDetails } from '$lib/components/live';
    import { IPlayer } from '$lib/components/shared';
    import { soccerService } from '$lib/services';
    import { UIStore } from '$lib/stores';
    import { onMount } from 'svelte';

    const player = UIStore.player;

    const promise = soccerService.getMatchDetails(3901202);
</script>

<header>
    {#await promise}
        <MatchDetails.Loader />
    {:then data}
        <header>
            {#if $player}
                <IPlayer
                    src="https://www.btyvplayline3a.com/video4.html?url=https://flv3.04lv.com/live/L1446657.flv?txSecret=afcd8d5d1d92d95de72c7a98f7fcc5de&txTime=641D5010"
                    onClose={() => player.set(false)}
                />
            {:else}
                <MatchDetails.MatchStatusDetails
                    status={data.current.status}
                    homeTeam={data.current.teams[0]}
                    awayTeam={data.current.teams[1]}
                    events={data.current.events}
                    className="my-6"
                />
            {/if}
        </header>
    {/await}
    <div />
</header>
