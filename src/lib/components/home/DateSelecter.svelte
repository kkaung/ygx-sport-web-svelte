<script lang="ts">
    import Icon from '../shared/Icon.svelte';

    let loading: boolean = false;

    export let className: string = '';
</script>

<div class={`${className} flex items-center justify-between p-4`}>
    <button class="btn ">
        <Icon name="chevron_left" />
    </button>
    {#if loading}
        <div>Loading...</div>
    {:else}
        <div class="text-xl">18/03 Sat</div>
    {/if}
    <button class="btn flex items-center">
        <Icon name="chevron_right" className="" />
    </button>
</div>

<style>
    .btn {
        @apply flex items-center justify-center text-3xl w-[40px] h-[40px] p-1 rounded-full bg-gray-500/40 transition hover:bg-gray-500;
    }
</style>
