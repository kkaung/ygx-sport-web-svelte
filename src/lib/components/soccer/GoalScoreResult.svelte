<script lang="ts">
    export let homeScore: number;
    export let awayScore: number;
    export let className: string = '';
</script>

<div class={`${className} score`}>
    <span>{homeScore}</span> <span> - </span> <span>{awayScore}</span>
</div>

<style>
    .score {
        line-height: 1rem;
    }
</style>
