<script lang="ts">
    import { Navbar, IPlayer, Icon } from '$lib/components/shared';
</script>

<main>
    <Navbar />
    <slot />
</main>

<style>
    main {
        @apply h-[100vh] overflow-hidden;
    }
</style>
