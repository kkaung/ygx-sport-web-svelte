<script lang="ts">
    export let time: string | undefined;

    export let className = ""

    const format = new String(time).split('');
    format.pop();
</script>

<div class={`${className} styled`}>
    {format.join('')}<span class="font-bold animate-fade-in">'</span>
</div>

<style>
    .styled {
        @apply text-center;
    }
</style>
