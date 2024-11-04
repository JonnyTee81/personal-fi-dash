import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                border: "hsl(var(--border))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))"
                },
                primary: {
                    DEFAULT: "#14F195",
                    foreground: "#000000",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))"
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))"
                },
            },
            keyframes: {
                "fade-in": {
                    from: { opacity: '0' },
                    to: { opacity: '1' },
                },
                "fade-out": {
                    from: { opacity: '1' },
                    to: { opacity: '0' },
                },
                "slide-in-from-left": {
                    from: { transform: 'translateX(-100%)' },
                    to: { transform: 'translateX(0)' },
                },
                "slide-out-to-left": {
                    from: { transform: 'translateX(0)' },
                    to: { transform: 'translateX(-100%)' },
                },
            },
            animation: {
                "fade-in": "fade-in 200ms ease-in",
                "fade-out": "fade-out 200ms ease-out",
                "slide-in-from-left": "slide-in-from-left 200ms ease-out",
                "slide-out-to-left": "slide-out-to-left 200ms ease-in",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};

export default config;
