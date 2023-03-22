<script lang="ts">
    import Image from '../shared/Image.svelte';

    export let imageUrl: string;
    export let name: string;
    export let className: string = '';
</script>

<div class={`${className} wrapper space-x-2`}>
    <Image src={imageUrl} alt={name} className="w-[20px] h-[20px]" />
    <span class="text-left">{name}</span>
</div>

<style>
    .wrapper {
        @apply flex items-center flex-1;
    }
</style>
