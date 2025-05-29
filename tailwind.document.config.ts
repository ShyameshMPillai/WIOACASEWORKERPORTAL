import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    // subathra_21
    // "./app/**/*.{ts,tsx}",
    "./app/documents/**/*.{ts,tsx}",
    "./app/documents/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
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
        // USWDS color palette
        "uswds-primary": {
          DEFAULT: "hsl(var(--uswds-primary))",
          darker: "hsl(var(--uswds-primary-darker))",
          dark: "hsl(var(--uswds-primary-dark))",
          light: "hsl(var(--uswds-primary-light))",
          lighter: "hsl(var(--uswds-primary-lighter))",
          vivid: "hsl(var(--uswds-primary-vivid))",
          foreground: "hsl(var(--uswds-primary-foreground))",
        },
        "uswds-secondary": {
          DEFAULT: "hsl(var(--uswds-secondary))",
          darker: "hsl(var(--uswds-secondary-darker))",
          dark: "hsl(var(--uswds-secondary-dark))",
          light: "hsl(var(--uswds-secondary-light))",
          lighter: "hsl(var(--uswds-secondary-lighter))",
          vivid: "hsl(var(--uswds-secondary-vivid))",
          foreground: "hsl(var(--uswds-secondary-foreground))",
        },
        "uswds-base": {
          DEFAULT: "hsl(var(--uswds-base))",
          darker: "hsl(var(--uswds-base-darker))",
          dark: "hsl(var(--uswds-base-dark))",
          light: "hsl(var(--uswds-base-light))",
          lighter: "hsl(var(--uswds-base-lighter))",
          lightest: "hsl(var(--uswds-base-lightest))",
          foreground: "hsl(var(--uswds-base-foreground))",
        },
        "uswds-accent-cool": {
          DEFAULT: "hsl(var(--uswds-accent-cool))",
          darker: "hsl(var(--uswds-accent-cool-darker))",
          dark: "hsl(var(--uswds-accent-cool-dark))",
          light: "hsl(var(--uswds-accent-cool-light))",
          lighter: "hsl(var(--uswds-accent-cool-lighter))",
          foreground: "hsl(var(--uswds-accent-cool-foreground))",
        },
        "uswds-accent-warm": {
          DEFAULT: "hsl(var(--uswds-accent-warm))",
          darker: "hsl(var(--uswds-accent-warm-darker))",
          dark: "hsl(var(--uswds-accent-warm-dark))",
          light: "hsl(var(--uswds-accent-warm-light))",
          lighter: "hsl(var(--uswds-accent-warm-lighter))",
          foreground: "hsl(var(--uswds-accent-warm-foreground))",
        },
        "uswds-error": {
          DEFAULT: "hsl(var(--uswds-error))",
          darker: "hsl(var(--uswds-error-darker))",
          dark: "hsl(var(--uswds-error-dark))",
          light: "hsl(var(--uswds-error-light))",
          lighter: "hsl(var(--uswds-error-lighter))",
          foreground: "hsl(var(--uswds-error-foreground))",
        },
        "uswds-info": {
          DEFAULT: "hsl(var(--uswds-info))",
          darker: "hsl(var(--uswds-info-darker))",
          dark: "hsl(var(--uswds-info-dark))",
          light: "hsl(var(--uswds-info-light))",
          lighter: "hsl(var(--uswds-info-lighter))",
          foreground: "hsl(var(--uswds-info-foreground))",
        },
        "uswds-success": {
          DEFAULT: "hsl(var(--uswds-success))",
          darker: "hsl(var(--uswds-success-darker))",
          dark: "hsl(var(--uswds-success-dark))",
          light: "hsl(var(--uswds-success-light))",
          lighter: "hsl(var(--uswds-success-lighter))",
          foreground: "hsl(var(--uswds-success-foreground))",
        },
        "uswds-warning": {
          DEFAULT: "hsl(var(--uswds-warning))",
          darker: "hsl(var(--uswds-warning-darker))",
          dark: "hsl(var(--uswds-warning-dark))",
          light: "hsl(var(--uswds-warning-light))",
          lighter: "hsl(var(--uswds-warning-lighter))",
          foreground: "hsl(var(--uswds-warning-foreground))",
        },
        // Shadcn compatibility
        primary: {
          DEFAULT: "hsl(var(--uswds-primary))",
          foreground: "hsl(var(--uswds-primary-foreground))",
        },
        secondary: {
          // DEFAULT: "hsl(var(--uswds-secondary))",
          DEFAULT: "hsl(var(--secondary))",//subathra_th
          foreground: "hsl(var(--uswds-secondary-foreground))",
        },
        accent: {
          cool: "hsl(var(--uswds-accent-cool))",
          warm: "hsl(var(--uswds-accent-warm))",
        },
        destructive: {
          DEFAULT: "hsl(var(--uswds-error))",
          foreground: "hsl(var(--uswds-error-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
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
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  // theme
  safelist: [
    'xl:grid-cols-4',
    'lg:grid-cols-4',
    'md:grid-cols-4',
    'sm:grid-cols-1',
],
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
