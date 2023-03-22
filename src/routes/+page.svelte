<script lang="ts">
    import { Layout } from '$lib/components/shared';
    import * as Home from '$lib/components/home';
    import { soccerService } from '$lib/services';
    import { League, Match } from '$lib/components/soccer';
    import { UIStore } from '$lib/stores';

    const { date } = UIStore;

    let loadData: any;

    date.subscribe(date => {
        loadData = soccerService.getMatches(date);
    });
</script>

<svelte:head>
    <title>Home</title>
    <meta name="description" content="Svelte demo app" />
</svelte:head>

<Layout>
    {#await loadData}
        <Home.Loader />
    {:then data}
        <Home.Header className="border-b border-gray-100/10" />
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
    {/await}
</Layout>
