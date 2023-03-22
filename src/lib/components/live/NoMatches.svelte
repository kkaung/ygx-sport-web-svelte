<script lang="ts">
    export let className = '';
</script>

<div class={`${className} text-center`}>
    <h1 class="mb-2">No Matches 😞</h1>
    <a href="/" class="btn">Back to Home</a>
</div>

<style>
    .btn {
        @apply border border-primary rounded-lg px-3 py-2;
    }
</style>
