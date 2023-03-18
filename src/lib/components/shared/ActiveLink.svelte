<script lang="ts">
    import { page } from '$app/stores';
    import { onMount } from 'svelte';

    let match: boolean;

    export let name: string = '';
    export let to: string;

    onMount(() => {
        match = $page.url.pathname === '/' + to;
    });
</script>

<a href={to} class={`${match && 'text-primary'} transition`}>
    {name}
    <slot />
</a>
