<script lang="ts">
    import { onDestroy } from 'svelte';
    import { spring, tweened } from 'svelte/motion';

    let cookie: boolean = false;
</script>

{#if cookie}
    <div
        class="fixed left-0 right-0 bottom-[54px] bg-stone-900 py-4 px-[1rem] sm:bottom-0"
    >
        <div
            class="container mx-auto flex flex-col md:flex-row md:justify-between md:items-start"
        >
            <p class="text-sm text-gray-200">
                Hi there 👋, we use cookies to offer you a better browsing experience and to analyze site traffic.
                <a class="underline" href="/">Learn more</a>
            </p>
            <div class="mt-4 md:mt-0">
                <button
                    class="p-2 border border-primary rounded text-sm transition hover:bg-primary hover:text-stone-900"
                    on:click={() => (cookie = false)}
                >
                    I accept
                </button>
            </div>
        </div>
    </div>
{/if}
