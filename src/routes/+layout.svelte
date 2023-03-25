<script>
    import { dev } from '$app/environment';
    import { inject } from '@vercel/analytics';
    import Cookie from '$lib/components/shared/Cookie.svelte';

    import '../app.css';

    inject({ mode: dev ? 'development' : 'production' }); // enbale vercel's analytics tool
</script>

<slot />
<Cookie />
