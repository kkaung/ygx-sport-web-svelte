import { SvelteKitAuth } from '@auth/sveltekit';
import Facebook from '@auth/core/providers/facebook';
import type { Handle } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';

export const handle: Handle = SvelteKitAuth({
    providers: [
        Facebook<any>({
            clientId: env.FACEBOOK_ID,
            clientSecret: env.FACEBOOK_SECRET,
        }),
    ],
    callbacks: {
        async signIn({ user, credentials, account }) {
            return true;
        },

        async redirect({ baseUrl }) {
            return baseUrl;
        },

        async jwt({ token, account }) {
            token.accessToken = account?.access_token;

            return token;
        },
        async session({ session, token }) {
            // session.accessToken = token.accessToken;
            return session;
        },
    },
});
