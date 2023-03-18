<script lang="ts">
    import { routes, type Icon as Icons } from '$lib/commons/data';
    import ActiveLink from './ActiveLink.svelte';
    import Icon from './Icon.svelte';

    class Tab {
        constructor(
            public name: string,
            public to: string,
            public icon: keyof Icons
        ) {}
    }

    const tabs = [
        new Tab('Home', routes.home, 'home'),
        new Tab('Live', routes.sports_live, 'users'),
        new Tab('Live', routes.sports_live, 'play'),
        new Tab('Profile', routes.sports_live, 'user'),
    ];
</script>

<nav
    class="z-1 fiexed bottom-0 left-0 right-0 flex items-center justify-evenly py-3 px-4 bottom-tabs-bg"
>
    {#each tabs as tab}
        <ActiveLink to={tab.to}>
            <Icon name={tab.icon} className="text-3xl" />
        </ActiveLink>
    {/each}
</nav>

<style>
    .bottom-tabs-bg {
        @apply bg-black/90 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-[0.8];
    }
</style>
