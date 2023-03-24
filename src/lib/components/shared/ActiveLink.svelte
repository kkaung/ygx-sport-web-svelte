<script lang="ts">
    import { page } from '$app/stores';

    export let name: string = '';
    export let to: string;
    export let className = ''


    let match: boolean = $page.url.pathname === to;
</script>

<a href={to} class={`${match && 'text-primary'} ${className} transition`}>
    {name}
    <slot />
</a>
