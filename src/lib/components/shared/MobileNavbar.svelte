<script lang="ts">
    import { page } from '$app/stores';
    import LanguageSwitch from './LanguageSwitch.svelte';

    const logo = "YGX"

    const session = $page.data.session;

    const firstName = session?.user?.name?.split(' ')[0];

    export let className = '';
</script>

<nav class={`${className} nav`}>
    <div class="flex items-center justify-between">
        <a href="/" class="logo">{logo}</a>
        <div class="flex items-center space-x-4">
            {#if !session?.user}
                <a href="/account/login" class="btn">Join us</a>
            {:else}
                <div>Welcome {firstName}</div>
            {/if}
            <LanguageSwitch />
        </div>
    </div>
</nav>

<style>
    .nav {
        @apply z-10 sticky top-0 left-0 right-0 py-2 px-[1rem] bg-[#10181c] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-[0.9] border-b border-gray-500/20
        sm:hidden;
    }
    .logo {
        @apply text-2xl cursor-pointer animate-text bg-gradient-to-r from-teal-500 via-lime-400 to-primary bg-clip-text text-transparent font-semibold;
    }
    .btn {
        @apply bg-primary py-1 px-2 rounded ;
    }
</style>
