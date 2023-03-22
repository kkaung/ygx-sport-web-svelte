<script lang="ts">
    import Icon from '../shared/Icon.svelte';
    import AwayTeam from './AwayTeam.svelte';
    import HomeTeam from './HomeTeam.svelte';
    import type { MatchStatus as Status } from '$lib/commons/types/soccer';
    import MatchStatus from './MatchStatus.svelte';

    export let className = '';
    export let home: any;
    export let away: any;
    export let status: Status;
    export let streaming: boolean | undefined;
</script>

<div class={`${className} wrapper space-x-4`}>
    <HomeTeam name={home.name} imageUrl={home.imageUrl} className="flex-1" />
    <MatchStatus {status} {home} {away} />
    {#if streaming}
        <div class="flex items-center flex-1">
            <AwayTeam name={away.name} imageUrl={away.imageUrl} />
            <Icon name="tv" className="text-yellow-400" />
        </div>
    {:else}
        <AwayTeam
            name={away.name}
            imageUrl={away.imageUrl}
            className="text-start flex-1"
        />
    {/if}
</div>

<style>
    .wrapper {
        @apply flex items-center py-1 px-[1rem] border-b border-gray-100/10 transition hover:bg-gray-500/10;
    }
</style>
