<script>
    import Footer from './Footer.svelte';
    import Navbar from './Navbar.svelte';
</script>

<Navbar />
<main>
    <slot />
</main>
<Footer />

<style>
    main {
        min-height: calc(100vh - 50px);
    }
</style>
