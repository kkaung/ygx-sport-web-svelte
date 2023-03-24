<script lang="ts">
    import DateSelecter from './DateSelecter.svelte';
    import FeaturedLiveMatches from './FeaturedLiveMatches.svelte';

    export let className = '';
</script>

<header class={`${className}`}>
    <!-- <FeaturedLiveMatches /> -->
    <DateSelecter />
</header>

<style>
    header {
        @apply px-[1rem];
    }
</style>
