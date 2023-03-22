<script lang="ts">
    export let className: string = '';
</script>

<div class={`${className} wrapper space-x-4`}>
    <div class="rounded-full w-[22px] h-[22px] skeleton" />
    <div class="h-[10px] w-[70px] skeleton rounded-full" />
</div>

<style>
    .wrapper {
        @apply flex items-center py-1 px-[1rem] border-b border-gray-100/10 animate-pulse;
    }
</style>
