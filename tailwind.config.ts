import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: 'class',
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                palestinian: {
                    black: '#1a1a1a',
                    white: '#ffffff',
                    green: '#009639',
                    red: '#EE2A35',
                    olive: '#3d5a3d',
                    gold: '#c9a227',
                },
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                card: 'hsl(var(--card))',
                'card-foreground': 'hsl(var(--card-foreground))',
                muted: 'hsl(var(--muted))',
                'muted-foreground': 'hsl(var(--muted-foreground))',
                border: 'hsl(var(--border))',
                ring: 'hsl(var(--ring))',
            },
            fontFamily: {
                inter: ['var(--font-inter)', 'system-ui', 'sans-serif'],
                tajawal: ['var(--font-tajawal)', 'system-ui', 'sans-serif'],
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
                'pulse-red': 'pulse-red 2s ease-in-out infinite',
                'fade-in-up': 'fade-in-up 0.8s ease forwards',
                'gradient': 'gradient-shift 3s ease infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                'pulse-glow': {
                    '0%, 100%': { boxShadow: '0 0 20px rgba(0, 150, 57, 0.3)' },
                    '50%': { boxShadow: '0 0 40px rgba(0, 150, 57, 0.6)' },
                },
                'pulse-red': {
                    '0%, 100%': { boxShadow: '0 0 20px rgba(238, 42, 53, 0.3)' },
                    '50%': { boxShadow: '0 0 40px rgba(238, 42, 53, 0.6)' },
                },
                'fade-in-up': {
                    from: { opacity: '0', transform: 'translateY(30px)' },
                    to: { opacity: '1', transform: 'translateY(0)' },
                },
                'gradient-shift': {
                    '0%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                    '100%': { backgroundPosition: '0% 50%' },
                },
            },
        },
    },
    plugins: [],
};

export default config;
