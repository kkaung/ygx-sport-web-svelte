<script lang="ts">
    import Marquee from 'svelte-fast-marquee';

    export let className = '';
</script>

<div class={`${className} z-10 wrapper`}>
    <div class="text-sm px-2 py-2 w-[150px]">Sponsered by</div>
    <Marquee>
        <h1 class="text mx-6">Welcome</h1>
        <h2 class="text mx-6">to</h2>
    </Marquee>
</div>

<style>
    .wrapper {
        @apply fixed  left-0 right-0 bottom-[54px] flex items-center bg-black;
    }
</style>
