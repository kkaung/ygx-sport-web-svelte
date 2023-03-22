<script lang="ts">
    import { Image } from '$lib/components/shared';

    export let imageUrl: string;
    export let name: string;
    export let className: string = '';
</script>

<div class={`${className} flex-1 flex flex-col items-center`}>
    <Image src={imageUrl} alt={name} className="h-[45px] w-[45px]" />
    <h1 class="name">{name}</h1>
</div>

<style>
    .name {
        @apply text-xl;
    }
</style>
