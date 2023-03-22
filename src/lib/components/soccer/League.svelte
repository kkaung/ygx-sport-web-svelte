<script lang="ts">
    import Icon from '../shared/Icon.svelte';
    import Image from '../shared/Image.svelte';

    export let imageUrl: string;
    export let name: string;
    export let users: number = 0;
    export let className: string = '';
</script>

<div class={`${className} wrapper`}>
    <div class="flex items-center space-x-4">
        <Image src={imageUrl} alt={name} className="w-[22px] h-[22px]" />
        <h1>{name}</h1>
    </div>
    {#if users}
        <div class="space-x-2 flex items-center">
            <Icon name="users" className="text-light" />
            <span class="text-sm">{users}+</span>
        </div>
    {/if}
</div>

<style>
    .wrapper {
        @apply flex items-center justify-between px-[1rem] py-2 border-b border-gray-100/10 transition hover:text-gray-300;
    }
</style>
