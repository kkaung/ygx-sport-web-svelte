<script lang="ts">
    import * as Live from '$lib/components/live';
    import { soccerService } from '$lib/services';
    import { League, Match } from '$lib/components/soccer';
    import Loader from '$lib/components/home/Loader.svelte';
    import { routes } from '$lib/commons/data';

    const loadData = soccerService.getLiveMatches();
</script>

<header class="px-[1rem]">
    <h1 class="text-2xl text-primary py-2">Live</h1>
</header>
<section>
    {#await loadData}
        <Live.Loader />
    {:then data}
        {#if data.total === 0}
            <Live.NoMatches />
        {:else}
            {#each data.leagues as league}
                <League name={league.name} imageUrl={league.imageUrl} />
                <div>
                    {#each league.matches as match}
                        <a href={routes.play + match.id}>
                            <Match
                                home={match.home}
                                away={match.away}
                                status={match.status}
                                streaming={match.streaming}
                            />
                        </a>
                    {/each}
                </div>
            {/each}
        {/if}
    {/await}
</section>
