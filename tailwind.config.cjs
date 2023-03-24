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
                text: 'text 5s ease infinite',
            },
            keyframes: {
                'fade-in': {
                    '0%': {
                        opacity: 0,
                    },
                    '100%': { opacity: 1 },
                },
            },
            keyframes: {
                text: {
                    '0%, 100%': {
                        'background-size': '200% 200%',
                        'background-position': 'left center',
                    },
                    '50%': {
                        'background-size': '200% 200%',
                        'background-position': 'right center',
                    },
                },
            },
        },
    },
    plugins: [],
};
