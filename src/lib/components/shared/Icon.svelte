<script lang="ts">
    import { iconLinks, icons, type Icon } from '$lib/commons/data';

    export let name: keyof Icon;
    export let className = '';

    const icon = icons[name];
</script>

<svelte:head>
    {#each iconLinks as link}
        <link
            rel="stylesheet"
            crossorigin="anonymous"
            href={link.href}
            integrity={link.integrity}
            referrerpolicy="no-referrer"
        />
    {/each}
</svelte:head>

<i class={icon + ' ' + className} />
