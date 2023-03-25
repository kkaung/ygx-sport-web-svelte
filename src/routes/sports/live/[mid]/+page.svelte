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
    {:else if $player}
        <IPlayer
            src="https://www.btyvplayline3a.com/video4.html?url=https://flv3.04lv.com/live/L1461179.flv?txSecret=7289d1adb222817cec687d456d910b19&txTime=64202F88"
            onClose={() => player.set(false)}
        />
    {:else}
        <MatchDetails.MatchStatusDetails
            {status}
            {homeTeam}
            {awayTeam}
            {events}
            className="py-6"
        />
    {/if}
</header>
<section class="overflow-scroll">
    <div class="px-[1rem] space-y-[2px] py-2 flex-1">
        <div class="text-sm">
            <span class="join-chat-name">Kaung</span> joined the chat
        </div>
        <div class="flex items-center space-x-1">
            <div class="bg-gray-600 h-[25px] w-[25px] rounded-full" />
            <div class="level">lvl1</div>
            <span class="text-sm">Kaung:</span>
            <div class="text-sm">Hello Bois 🧐</div>
        </div>
        <div class="flex items-center space-x-1">
            <div class="bg-gray-600 h-[25px] w-[25px] rounded-full" />
            <div class="level">lvl1</div>
            <span class="text-sm">Kaung:</span>
            <div class="text-sm">Hello Bois 🧐</div>
        </div>
        {#each Array.from({ length: 30 }, (_, idx) => idx + 1) as time}
            <div class="flex items-center space-x-1">
                <div class="bg-gray-600 h-[25px] w-[25px] rounded-full" />
                <div class="level">lvl1</div>
                <span class="text-sm">Kaung:</span>
                <div class="text-sm">Hello Bois 🧐</div>
            </div>
        {/each}
    </div>
    <div class="fixed left-0 right-0 bottom-[48px] bg-black/80 p-2 text-center cursor-pointer">
        New messages below
    </div>
    <form class="input-wrapper">
        <input type="text" class="text-input" placeholder="Send a message" />
        <button class="send-btn">Send</button>
    </form>
</section>

<style>
    header {
        @apply border-b border-gray-400/10;
    }

    section {
        @apply h-full overscroll-auto overflow-scroll scroll-smooth bg-[#10181c];
    }

    .level {
        @apply text-xs bg-purple-500 px-1 rounded;
    }

    .input-wrapper {
        @apply flex fixed left-0 right-0 bottom-0 items-center bg-[#2D373B] px-[1rem] py-2 space-x-2 border-y border-gray-400/30;
    }

    .text-input {
        @apply flex-1 bg-transparent outline-none placeholder:font-light;
    }

    .send-btn {
        @apply py-[3px] px-2 bg-primary/90 rounded transition hover:bg-primary;
    }

    .join-chat-name {
        @apply cursor-pointer animate-text bg-gradient-to-r from-teal-500 via-lime-400 to-primary bg-clip-text text-transparent;
    }

    ::-webkit-scrollbar {
        width: 0;
    }
</style>
