<script lang="ts">
    import { UIStore } from '$lib/stores';
    import moment from 'moment';
    import Icon from '../shared/Icon.svelte';

    const { date } = UIStore;

    export let className: string = '';

    const clickHandler = (state: 'backword' | 'forward') => {
        state === 'backword' && $date.setDate($date.getDate() - 1);
        state === 'forward' && $date.setDate($date.getDate() + 1);

        $date = new Date($date);
    };
</script>

<div class={`${className} flex items-center justify-between py-3 px-[1rem]`}>
    <button class="btn" on:click={() => clickHandler('backword')}>
        <Icon name="chevron_left" />
    </button>
    <div class="text-xl date">
        {moment($date).format('DD[/]MM ddd')}
    </div>
    <button
        class="btn flex items-center"
        on:click={() => clickHandler('forward')}
    >
        <Icon name="chevron_right" className="" />
    </button>
</div>

<style>
    .btn {
        @apply flex items-center justify-center text-2xl w-[35px] h-[35px] p-1 rounded-full bg-gray-500/40 transition hover:bg-gray-500;
    }

    .date {
        @apply animate-text bg-gradient-to-r from-teal-500 via-lime-400 to-primary bg-clip-text text-transparent font-semibold;
    }
</style>
