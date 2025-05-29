import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
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
        // USWDS Primary Colors
        "uswds-primary": "#005ea2",
        "uswds-primary-dark": "#1a4480",
        "uswds-primary-darker": "#162e51",
        "uswds-primary-darkest": "#0c2340",
        "uswds-primary-light": "#73b3e7",
        "uswds-primary-lighter": "#d9e8f6",
        "uswds-primary-lightest": "#f0f8ff",

        // USWDS Secondary Colors
        "uswds-secondary": "#d83933",
        "uswds-secondary-dark": "#b50909",
        "uswds-secondary-darker": "#8b0a03",
        "uswds-secondary-light": "#f2938c",
        "uswds-secondary-lighter": "#f9dede",

        // USWDS Base Colors
        "uswds-base": "#71767a",
        "uswds-base-dark": "#565c65",
        "uswds-base-darker": "#3d4551",
        "uswds-base-darkest": "#1b1b1b",
        "uswds-base-light": "#a9aeb1",
        "uswds-base-lighter": "#dfe1e2",
        "uswds-base-lightest": "#f0f0f0",

        // USWDS Accent Colors
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

        // Status Colors
        "status-pending": "#fef3c7",
        "status-pending-text": "#92400e",
        "status-approved": "#d1fae5",
        "status-approved-text": "#065f46",
        "status-denied": "#fee2e2",
        "status-denied-text": "#991b1b",
        "status-info": "#dbeafe",
        "status-info-text": "#1e40af",

        // Federal Colors (legacy support)
        "federal-blue": {
          DEFAULT: "#005ea2",
          dark: "#1a4480",
        },
        "federal-red": {
          DEFAULT: "#d83933",
          dark: "#b50909",
        },

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

        // shadcn/ui color system
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
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
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      spacing: {
        "18": "4.5rem",
        "88": "22rem",
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
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
