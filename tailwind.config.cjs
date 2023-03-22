/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            colors: {
                primary: '#57d33b',
            },
            animation: {
                'fade-in': 'fade-in 1s ease-in-out infinite',
            },
            keyframes: {
                'fade-in': {
                    '0%': {
                        opacity: 0,
                    },
                    '100%': { opacity: 1 },
                },
            },
        },
    },
    plugins: [],
};
