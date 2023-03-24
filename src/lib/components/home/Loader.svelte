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
        class="px-4 py-3 flex items-center justify-between animate-pulse border-b border-gray-100/10"
    >
        <div class="h-[35px] w-[35px] skeleton rounded-full" />
        <div class="flex flex-col items-center space-y-1" >
            <div class="h-[10px] w-[60px] skeleton rounded" />
            <div class="h-[5px] w-[40px] skeleton rounded"></div>
        </div>
        <div class="h-[35px] w-[35px] skeleton rounded-full" />
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
