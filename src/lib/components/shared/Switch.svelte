<script lang="ts">
    export let className = '';

    const toggleHandler = () => {
        console.log('clicked...')
    };
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<label
    for="toggle"
    class={`${className} flex items-center cursor-pointer`}
    on:click={toggleHandler}
>
    <div class="relative">
        
        <input type="checkbox" id="toggle" class="sr-only" />
        <div class="block bg-gray-600/50 w-14 h-8 rounded-full" >
            <div class="">🇺🇸</div>
        </div>
        <div
            class="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"
        />
    </div>
</label>
