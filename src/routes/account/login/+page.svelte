<script lang="ts">
    import Icon from '$lib/components/shared/Icon.svelte';
    import { signIn } from '@auth/sveltekit/client';
    import { page } from '$app/stores';

    const signInHanlder = (provider: 'facebook' | 'google') => {
        signIn(provider);
    };
</script>

<div class="container mx-auto px-[3rem] py-12">
    <header class="text-center mb-4">
        <h1 class="title">Welcome Back!</h1>
        <div class="flex items-center space-x-4 mt-2">
            <div class="line" />
            <p class="text-lg">Sign in with</p>
            <div class="line" />
        </div>
    </header>
    <div class="flex flex-col space-y-3">
        <button class="btn space-x-1" on:click={() => signInHanlder('facebook')}
            ><Icon name="facebook" className="text-lg" />
            <span>Facebook</span></button
        >
        <button class="btn space-x-1" on:click={() => signInHanlder('google')}
            ><Icon name="google" /><span>Google</span></button
        >
    </div>
    <div class="text-center mt-2 text-red-500">Something went wrong!</div>
</div>

<style>
    .title {
        @apply text-2xl font-semibold;
    }
    .line {
        @apply flex-1 h-[1.5px] bg-gray-400/10;
    }
    .btn {
        @apply flex items-center justify-center  bg-[#8a9092] font-medium py-2 rounded text-gray-200 transition hover:text-white hover:bg-primary;
    }
</style>
