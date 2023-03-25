<script lang="ts">
    import { routes } from "$lib/commons/data";


    export let className = '';
</script>

<div class={`${className} text-center`}>
    <h1 class="mb-4">No Matches 😞</h1>
    <a href={routes.home} class="btn">Back to Home</a>
</div>

<style>
    .btn {
        @apply bg-primary/80 rounded px-3 py-2 transition hover:bg-primary;
    }
</style>
