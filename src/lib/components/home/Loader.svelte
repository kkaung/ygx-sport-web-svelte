<script lang="ts">
    import { LeagueSkeleton, MatchSkeleton } from '../soccer';

    const loaders = [
        { id: 1, matchTimes: 3 },
        { id: 2, matchTimes: 4 },
        { id: 3, matchTimes: 2 },
        { id: 4, matchTimes: 8 },
    ];
</script>

<div class="wrapper">
    <div
        class="p-4 flex items-center justify-between animate-pulse border-b border-gray-100/10"
    >
        <div class="h-[30px] w-[30px] skeleton rounded-full" />
        <div class="h-[10px] w-[50px] skeleton rounded" />
        <div class="h-[30px] w-[30px] skeleton rounded-full" />
    </div>
    {#each loaders as loader}
        <div>
            <LeagueSkeleton />
            <div>
                {#each Array.from({ length: loader.matchTimes }, (_, idx) => idx + 1) as time}
                    <MatchSkeleton />
                {/each}
            </div>
        </div>
    {/each}
</div>

<style>
    .wrapper {
        height: 100vh;
        overflow: hidden;
    }
</style>
