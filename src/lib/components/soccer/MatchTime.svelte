<script lang="ts">
    import moment from 'moment-timezone';

    export let className = '';
    export let time: string;
    export let cancelled: boolean;

    const HOUR = moment.utc(time).tz('Australia/Sydney').format('hh:mm');
    const AM_PM = moment.utc(time).tz('Australia/Sydney').format('A');
</script>

<div
    class={`${
        cancelled && 'text-gray-400 line-through'
    } ${className} text-center`}
>
    <div>{HOUR}</div>
    <div class="am-pm">{AM_PM}</div>
</div>

<style>
    .am-pm {
        @apply text-xs text-gray-400;
    }
</style>
