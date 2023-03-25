<script>
    import BottomTabs from './BottomTabs.svelte';
    import Footer from './Footer.svelte';
    import Navbar from './Navbar.svelte';
    import SponseredBrandsMarquee from './SponseredBrandsMarquee.svelte';
</script>

<div class="main">
    <Navbar />
    <main>
        <slot />
        <!-- <SponseredBrandsMarquee /> -->
        <BottomTabs />
    </main>
    <Footer />
</div>

<style>
    .main {
        @apply pb-[62px] sm:pb-0;
    }

    main {
        min-height: 100vh;
    }
</style>
