<script lang="ts">
    export let className: string = '';
    export let homeScore: number;
    export let awayScore: number
</script>

<div class={`${className}`} >
    <span>{homeScore}</span> <span> - </span> <span>{awayScore}</span>
</div>
