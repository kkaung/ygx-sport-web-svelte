<script lang="ts">
    import Icon from './Icon.svelte';

    export let src: string;
    export let className: string = '';
    export let onClose: () => void;

    let selected = true;
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
        <div class="flex items-center space-x-2">
            <div class="bg-red-500 rounded text-xs p-1 text-black">LIVE</div>
            <ul class="line-control-wrapper">
                <li
                    class={` ${
                        selected ? 'bg-purple-500/90' : 'bg-purple-800'
                    } line-control`}
                >
                    HD
                </li>
                <li
                    class={` ${
                        selected ? 'bg-purple-500/90' : 'bg-purple-800'
                    } line-control`}
                >
                    HD1
                </li>
                <li />
            </ul>
        </div>
        <slot />
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div on:click={onClose} class="close-btn">
            <Icon name="close" />
        </div>
    </div>
</div>

<style>
    .iplayer {
        @apply bg-[#10181C];
    }

    .iframe-wrapper {
        @apply relative pt-[56.25%] bg-black;
    }

    iframe {
        @apply absolute top-0 left-0 right-0 bottom-0 h-full w-full;
    }

    .line-control-wrapper {
        @apply flex items-center space-x-1;
    }

    .line-control {
        @apply px-1 bg-purple-900 rounded cursor-pointer hover:bg-purple-500;
    }

    .close-btn {
        @apply text-2xl cursor-pointer;
    }
</style>
