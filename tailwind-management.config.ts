import type { Config } from "tailwindcss"

const config = {
    mode: 'jit',//subathra_21
    darkMode: ["class"],
    content: [
        "./pages/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./app/management/**/*.{ts,tsx}",
        "./app/management/*.{ts,tsx}",
        "./app/forms/**/*.{ts,tsx}",
        "./app/forms/*.{ts,tsx}",
        "./src/**/*.{ts,tsx}",
        "*.{js,ts,jsx,tsx,mdx}",
    ],
    prefix: "",
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            colors: {
                // USWDS colors
                "uswds-primary": "#005ea2",
                "uswds-primary-dark": "#1a4480",
                "uswds-primary-darker": "#162e51",
                "uswds-primary-darkest": "#0c2340",
                "uswds-primary-light": "#73b3e7",
                "uswds-primary-lighter": "#d9e8f6",
                "uswds-primary-lightest": "#f0f8ff",

                "uswds-secondary": "#d83933",
                "uswds-secondary-dark": "#b50909",
                "uswds-secondary-darker": "#8b0a03",
                "uswds-secondary-light": "#f2938c",
                "uswds-secondary-lighter": "#f9dede",

                "uswds-base": "#71767a",
                "uswds-base-dark": "#565c65",
                "uswds-base-darker": "#3d4551",
                "uswds-base-darkest": "#1b1b1b",
                "uswds-base-light": "#a9aeb1",
                "uswds-base-lighter": "#dfe1e2",
                "uswds-base-lightest": "#f0f0f0",

                "uswds-accent-cool": "#00bde3",
                "uswds-accent-cool-dark": "#28a0cb",
                "uswds-accent-cool-darker": "#07648d",
                "uswds-accent-cool-light": "#97d4ea",
                "uswds-accent-cool-lighter": "#e1f3f8",

                "uswds-accent-warm": "#fa9441",
                "uswds-accent-warm-dark": "#c05600",
                "uswds-accent-warm-darker": "#775540",
                "uswds-accent-warm-light": "#ffbc78",
                "uswds-accent-warm-lighter": "#f2e4d4",

                // Keep existing shadcn colors for compatibility
                blue: {
                    700: "#005ea2", // USWDS primary
                    800: "#1a4480", // USWDS primary-dark
                    900: "#162e51", // USWDS primary-darker
                },
                red: {
                    500: "#d83933", // USWDS secondary
                },
                gray: {
                    50: "#f0f0f0", // USWDS base-lightest
                    300: "#a9aeb1", // USWDS base-light
                    500: "#71767a", // USWDS base
                    600: "#565c65", // USWDS base-dark
                    700: "#3d4551", // USWDS base-darker
                },
                "federal-blue": {
                    DEFAULT: "#0071bc",
                    dark: "#205493",
                },
                "federal-red": {
                    DEFAULT: "#e31c3d",
                    dark: "#cd2026",
                },
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                //    subathra_th
                background: "hsl(var(--background))",
                // background: "var(--background)",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
                // subathra_theme
                sidebar: {
                    DEFAULT: "hsl(var(--sidebar-background))",
                    foreground: "hsl(var(--sidebar-foreground))",
                    border: "hsl(var(--sidebar-border))",
                    accent: "hsl(var(--sidebar-accent))",
                    "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
                    ring: "hsl(var(--sidebar-ring))",
                },
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
                "2xl": "1rem",//subathra_theme
            },
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
        },
    },
     // subathra_theme
     safelist: [
        'xl:grid-cols-6',
        'lg:grid-cols-3',
        'md:grid-cols-2',
        'sm:grid-cols-1',
    ],
    plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
