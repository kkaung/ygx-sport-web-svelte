<script lang="ts">
    export let time: string | undefined;

    const format = new String(time).split('');
    format.pop();
</script>

<div class="styled">
    {format.join('')}<span class="font-bold animate-fade-in">'</span>
</div>

<style>
    .styled {
        @apply text-xs text-red-500 text-center;
    }
</style>
