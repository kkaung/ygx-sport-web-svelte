<script lang="ts">
    export let className = '';
</script>

<nav class={`${className} nav`}>
    <div class="flex items-center justify-between">
        <h1 class="logo">YGX</h1>
        <div>
            <button class="btn">Join us</button>
        </div>
    </div>
</nav>

<style>
    .nav {
        @apply z-10 sticky top-0 left-0 right-0 py-2 px-[1rem] bg-[#10181c] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-[0.9] border-b border-gray-500/20
        sm:hidden;
    }
    .logo {
        @apply animate-text bg-gradient-to-r from-teal-500 via-lime-400 to-primary bg-clip-text text-transparent font-semibold text-lg;
    }
    .btn {
        @apply bg-primary py-1 px-2 rounded;
    }
</style>
