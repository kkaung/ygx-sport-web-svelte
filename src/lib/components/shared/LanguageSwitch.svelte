<script lang="ts">
    export let className = '';

    const toggleHandler = () => {
        console.log('clicked...');
    };
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<label
    class={`${className} relative inline-flex items-center cursor-pointer`}
    on:click={toggleHandler}
>
    <input type="checkbox" id="toggle" class="sr-only peer" value="" />
    <div
        class="relative py-2 px-2 space-x-1 flex items-center bg-gray-600/50  h-8 rounded-full"
    >
        <div class=" bg-white w-6 h-6 rounded-full transition" />
        <div class="text-xl">🇺🇸</div>
    </div>
</label>
