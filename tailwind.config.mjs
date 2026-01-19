/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    darkMode: 'class',
    theme: {
        extend: {
            animation: {
                'slow-zoom': 'slowZoom 20s infinite alternate',
                'marquee': 'marquee 25s linear infinite',
                'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
                'float': 'float 6s ease-in-out infinite',
            },
            keyframes: {
                slowZoom: {
                    from: { transform: 'scale(1)' },
                    to: { transform: 'scale(1.1)' }
                },
                marquee: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-50%)' }
                },
                fadeInUp: {
                    to: { opacity: '1', transform: 'translateY(0)' }
                },
                float: {
                    '0%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                    '100%': { transform: 'translateY(0px)' }
                }
            }
        },
    },
    plugins: [],
}
