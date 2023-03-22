<script lang="ts">
    import { LeagueSkeleton, MatchSkeleton } from '../soccer';

    const loaders = [
        { id: 1, matchTimes: 3 },
        { id: 2, matchTimes: 4 },
        { id: 3, matchTimes: 8 },
    ];

    export let className = '';
</script>

<div class={`${className} wrapper`}>
    {#each loaders as loader}
        <div>
            <LeagueSkeleton />
            {#each Array.from({ length: loader.matchTimes }, (_, idx) => idx + 1) as time}
                <MatchSkeleton />
            {/each}
        </div>
    {/each}
</div>

<style>
    .wrapper {
        max-height: 100vh;
        overflow: hidden;
    }
</style>
