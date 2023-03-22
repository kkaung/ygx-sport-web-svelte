<script lang="ts">
    import type { GoalScorerDetails } from '$lib/commons/types/soccer';

    export let goals: any;
    export let className: string = '';

    const scorers = Object.values(goals) as [GoalScorerDetails[]];
</script>

<div class={`${className}`}>
    {#each scorers as scorer}
        {#if scorer.length === 1}
            <div>{scorer[0].lastName} <span>{scorer[0].time}'</span></div>
        {:else}
            <div>
                {scorer[0].lastName}
                {#each scorer as s}
                    <span>{s.time}'</span>
                {/each}
            </div>
        {/if}
    {/each}
</div>

<style>
</style>
