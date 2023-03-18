<script lang="ts">
    import Icon from './Icon.svelte';
    import type { icons } from '$lib/commons/data';

    type SocialLink = {
        name: keyof typeof icons;
        link: string;
    };

    const socialsLink: SocialLink[] = [
        { name: 'facebook', link: '' },
        { name: 'telegram', link: '' },
    ];
</script>

<footer class="hidden sm:block">
    <div class="container mx-auto py-4 flex justify-between items-start">
        <div class="flex items-center text-primary">
            <h1>YGX</h1>
            <small class="ml-4 text-gray-400 font-light text-xs">
                Copyright © 2023 Brand Inc. All rights reserved.
            </small>
        </div>
        <ul class="flex items-center space-x-4">
            {#each socialsLink as item}
                <li>
                    <Icon name={item.name} />
                </li>
            {/each}
        </ul>
    </div>
</footer>
