<script lang="ts">
    export let className = '';
    export let homePenScore: number | undefined;
    export let awayPenScore: number | undefined;
</script>

<div class={`${className} text-xs- text-gray-400/90`} >
    <span>{homePenScore}</span> - <span>{awayPenScore}</span>
</div>
