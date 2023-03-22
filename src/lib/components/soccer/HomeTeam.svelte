<script lang="ts">
    import Image from '../shared/Image.svelte';

    export let imageUrl: string;
    export let name: string;
    export let className: string = '';
</script>

<div class={`${className} container space-x-2`}>
    <span class="text-right">{name}</span>
    <Image src={imageUrl} alt={name} className="w-[20px] h-[20px]" />
</div>

<style>
    .container {
        @apply flex items-center justify-end flex-1;
    }
</style>
