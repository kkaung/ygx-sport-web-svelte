import { SvelteKitAuth } from '@auth/sveltekit';
import Facebook from '@auth/core/providers/facebook';
import { FACEBOOK_ID, FACEBOOK_SECRET } from '$env/static/private';
import type { Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';

export const handle: Handle = SvelteKitAuth({
    providers: [
        Facebook<any>({ clientId: FACEBOOK_ID, clientSecret: FACEBOOK_SECRET }),
    ],
});
