<script lang="ts">
    export let href: string;
    export let className: string = '';
</script>

<a {href} class={`${className}`}>
    <slot />
</a>
