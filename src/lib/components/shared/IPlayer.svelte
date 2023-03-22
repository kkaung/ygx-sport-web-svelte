<script lang="ts">
    import Icon from './Icon.svelte';

    export let src: string;
    export let className: string = '';
    export let onClose: () => void;
</script>

<div class={`${className} iplayer`}>
    <div class="iframe-wrapper">
        <iframe
            title="player"
            {src}
            allowfullscreen
            allowtransparency
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture full"
        />
    </div>
    <div class="flex items-center justify-between p-2">
        <div class="bg-red-500 rounded text-xs p-1 text-black">LIVE</div>
        <slot />
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div on:click={onClose}>
            <Icon name="close" className="text-2xl" />
        </div>
    </div>
</div>

<style>
    .iframe-wrapper {
        @apply relative pt-[56.25%] bg-black;
    }

    iframe {
        @apply absolute top-0 left-0 right-0 bottom-0 h-full w-full;
    }
</style>
