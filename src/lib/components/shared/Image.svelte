<script lang="ts">
    export let src: string;
    export let alt: string;
    export let className: string = "";
</script>

<img loading="lazy" class={className} {src} {alt} decoding="async" />
