<script lang="ts">
    import { page } from '$app/stores';
    import { Image } from '$lib/components/shared';
    import { signOut } from '@auth/sveltekit/client';

    const user = $page.data.session!!.user;
</script>

<header class="flex flex-col items-center mt-8">
    <img src={user?.image} alt="" class="avatar" />
    <div>@moon123</div>
    <div>{user?.email}</div>
    <button class="logout" on:click={() => signOut()}>Logout</button>
</header>

<style>
    .avatar {
        @apply w-[60px] h-[60px] rounded-full bg-gray-500/60;
    }

    .logout {
        @apply text-lg mt-2 underline transition hover:text-red-500;
    }
</style>
