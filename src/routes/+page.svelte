<script lang="ts">
    import { BottomTabs, Layout } from '$lib/components/shared';
    import * as Home from '$lib/components/home';
</script>

<svelte:head>
    <title>Home</title>
    <meta name="description" content="Svelte demo app" />
</svelte:head>

<Layout>
    <Home.Header />
</Layout>

<BottomTabs />
