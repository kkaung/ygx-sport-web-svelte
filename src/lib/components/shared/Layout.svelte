<script>
    import BottomTabs from './BottomTabs.svelte';
    import Footer from './Footer.svelte';
    import Navbar from './Navbar.svelte';
    import SponseredBrandsMarquee from './SponseredBrandsMarquee.svelte';
</script>

<Navbar />
<main class="main">
    <slot />
    <!-- <SponseredBrandsMarquee /> -->
    <BottomTabs />
</main>
<Footer />

<style>
    .main {
        min-height: 100vh;
    }
</style>
