<script lang="ts">
    import { page } from '$app/stores';

    export let name: string = '';
    export let to: string;

    let match: boolean = $page.url.pathname === to;
</script>

<a href={to} class={`${match && 'text-primary'} transition`}>
    {name}
    <slot />
</a>
