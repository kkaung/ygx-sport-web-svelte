<script lang="ts">
    import { page } from '$app/stores';
    import { Image, Icon } from '$lib/components/shared';
    import { signOut } from '@auth/sveltekit/client';

    const user = $page.data.session!!.user;
</script>

<header class="flex flex-col items-center my-8">
    <div class="avatar">
        <Icon name="camera" className="z-10 text-zinc-400 text-2xl absolute -right-1 bottom-0 " />
        <img src={user?.image} alt="" class="avatar" />
    </div>
    <div>@moon123</div>
    <div>{user?.email}</div>
    <button class="logout" on:click={() => signOut()}>Logout</button>
</header>

<style>
    .avatar {
        @apply relative w-[60px] h-[60px] rounded-full bg-gray-500/60;
    }

    .logout {
        @apply text-lg mt-2 underline transition hover:text-red-500;
    }
</style>
