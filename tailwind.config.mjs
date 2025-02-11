/* eslint-disable import/no-anonymous-default-export */
/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
            },
            // zIndex: {
            //     '1': '1'
            // },
            // fontFamily: {
            //     'body-font': "var(--body-font)",
            //     'header-font': "var(--header-font)",
            // },
            backgroundImage: {
                // 'hero-banner-after': "url('../images/hero-banner-after.png')",
                // 'back-poss': '0 100%',
                // 'grad-ang': 'radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)',
                // 'footer-img': "url('../images/footer.jpg')",
                // 'app-bg-img': "url('../images/symble-8.png')",
                // 'footer-bg-after': "url('../images/symble-7.png')",
                'appointment-bg': "url('/appointment-bg.jpg')",
                'hospital-bg': "url('/hospital1.jpg')",
                'hospital5-bg': "url('/hospital5.jpg')"
            },
            // dropShadow: {
            //     'sh-sm': '0 10px 60px 0 rgba(31,34,120,.1)',
            // },
            // animation: {
            //     upDown: "upDown 2.5s infinite alternate",
            //     leftRight: "leftRight 2.5s infinite alternate",
            //     Rotation: "Rotation 20s linear infinite",
            //     fadeInDown: "fadeInDown ease-in-out 0s 1 normal none running",
            // },
            // keyframes: {
            //     upDown: {
            //         '0%': {
            //             transform: 'translatey(0)'
            //         },
            //         '100%': {
            //             transform: 'translatey(-10px)'
            //         }
            //     },
            //     leftRight: {
            //         '0%': {
            //             transform: 'translateX(0)'
            //         },
            //         '100%': {
            //             transform: 'translateX(-10px)'
            //         }
            //     },
            //     Rotation: {
            //         '0%': {
            //             transform: 'rotate(0deg)'
            //         },
            //         '100%': {
            //             transform: 'rotate(1turn)'
            //         }
            //     },
            //     fadeInDown: {
            //         '0%': {
            //             opacity: '0',
            //             transform: 'translate3d(0,-100px,0)'
            //         },
            //         '100%': {
            //             opacity: '1',
            //             transform: 'none'
            //         }
            //     }
            // }
        },
    },
    plugins: [require("daisyui")],
};
