<script lang="ts">
    export let className: string = '';
</script>

<div class={`${className} wrapper space-x-4`}>
    <div class="flex items-center flex-1 justify-end space-x-1">
        <div>
            <div class="h-[8px] w-[70px] skeleton rounded" />
            <div class="mt-1 h-[5px] w-[50px] skeleton rounded ml-auto" />
        </div>
        <div class="rounded-full w-[22px] h-[22px] skeleton" />
    </div>
    <div class="flex flex-col items-center space-y-1 min-w-[55px]">
        <div class="h-[5px] w-[50px] rounded skeleton" />
        <div class="h-[4px] w-[40px] rounded skeleton" />
        <div class="h-[3px] w-[25px] rounded skeleton" />
    </div>
    <div class="flex items-center flex-1 space-x-1">
        <div class="rounded-full w-[22px] h-[22px] skeleton" />
        <div>
            <div class="h-[8px] w-[70px] skeleton rounded" />
            <div class="mt-1 h-[5px] w-[50px] skeleton rounded" />
        </div>
    </div>
</div>

<style>
    .wrapper {
        @apply flex items-center h-[49px] py-1 px-[1rem] border-b border-gray-100/10 animate-pulse;
    }
</style>
