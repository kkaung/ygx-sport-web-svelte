<script lang="ts">
    import { League, Match } from '$lib/components/soccer';
    import { soccerService } from '$lib/services';

    let date = new Date();

    const promise = soccerService.getMatches(date);
</script>

<div class="container mx-auto py-4">
    <h1 class="text-xl">Dashboard</h1>
    <div>
        {#await promise}
            Loading...
        {:then data}
            <div>
                {#each data.leagues as league}
                    <League name={league.name} imageUrl={league.imageUrl} />
                    <div>
                        {#each league.matches as match}
                            <Match
                                home={match.home}
                                away={match.away}
                                status={match.status}
                                streaming={match.streaming}
                            />
                        {/each}
                    </div>
                {/each}
            </div>
        {/await}
    </div>
</div>
