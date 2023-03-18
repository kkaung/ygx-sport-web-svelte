<script lang="ts">
    import { routes } from '$lib/commons/data';
    import Icon from './Icon.svelte';
    import Logo from './Logo.svelte';
    import ActiveLink from './ActiveLink.svelte';

    class NavItem {
        constructor(public name: string, public to: string) {}
    }

    const navItems: NavItem[] = [
        new NavItem('Home', routes.home),
        new NavItem('Live', routes.sports_live),
        new NavItem('Login', routes.sports_live),
    ];
</script>

<nav class="hidden sm:block">
    <div class="container mx-auto flex items-center justify-between">
        <Logo className="text-primary text-xl font-semibold" />
        <ul class="flex items-center text-xl space-x-12 lg:space-x-16">
            {#each navItems as item}
                <li>
                    <ActiveLink name={item.name} to={item.to} />
                </li>
            {/each}
            <li class="flex items-center cursor-pointer">
                <span>EN 🇺🇸 </span>
                <Icon name="chevron_down" />
            </li>
        </ul>
    </div>
</nav>
