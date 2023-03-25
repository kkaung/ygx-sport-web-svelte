<script lang="ts">
    import Icon from './Icon.svelte';
    import { routes, type icons } from '$lib/commons/data';

    type SocialLink = {
        name: keyof typeof icons;
        link: string;
    };

    const socialsLink: SocialLink[] = [
        { name: 'facebook', link: '' },
        { name: 'telegram', link: '' },
    ];
</script>

<footer>
    <div class="wrapper">
        <div class="left">
            <small class="text-gray-400 font-light text-xs">
                Copyright © 2023 YGX Sports Inc. All rights reserved.
            </small>
            <div class="legal">
                <a href={routes.terms_and_conditions}>Terms of Use</a>
                <span class="text-gray-500">|</span>
                <a href={routes.privacy_policy}>Privacy Policy</a>
                <span>|</span>
                <a href="/">Cookie Policy</a>
            </div>
        </div>
        <ul class="flex items-center space-x-4">
            {#each socialsLink as item}
                <li>
                    <a href={item.link} class="icon" target="_blank">
                        <Icon name={item.name} />
                    </a>
                </li>
            {/each}
        </ul>
    </div>
</footer>

<style>
    footer {
        @apply px-[1rem];
    }

    .wrapper {
        @apply container mx-auto py-4 flex justify-between items-start;
    }

    .left {
        @apply flex-1;
    }

    .legal {
        @apply text-xs text-gray-300 space-x-1;
    }

    .icon {
        @apply text-2xl text-gray-200/80 transition hover:text-primary;
    }
</style>
