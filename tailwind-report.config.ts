import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/reports/**/*.{ts,tsx}",
    "./app/reports/*.{ts,tsx}",
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
        // USWDS Colors
        "uswds-base": {
          lightest: "#f0f0f0", // gray-5
          lighter: "#dfe1e2", // gray-10
          light: "#a9aeb1", // gray-30
          DEFAULT: "#71767a", // gray-50
          dark: "#565c65", // gray-60
          darker: "#3d4551", // gray-70
          darkest: "#1b1b1b", // gray-90
        },
        "uswds-primary": {
          lightest: "#e7f2f5", // blue-5
          lighter: "#ccecff", // blue-10
          light: "#73b3e7", // blue-30
          DEFAULT: "#005ea2", // blue-60v
          vivid: "#0050d8", // blue-warm-60v
          dark: "#1a4480", // blue-warm-70v
          darker: "#162e51", // blue-warm-80v
          darkest: "#0c2c5b", // blue-90
        },
        "uswds-secondary": {
          lightest: "#f8dfe2", // red-5
          lighter: "#f2938c", // red-30
          light: "#e41d3d", // red-50v
          DEFAULT: "#d83933", // red-60v
          dark: "#b50909", // red-60
          darker: "#8b0a03", // red-70v
          darkest: "#5c1111", // red-80
        },
        "uswds-accent": {
          warm: {
            lightest: "#f2e4d4", // orange-10
            lighter: "#ffbc78", // orange-20v
            light: "#fa9441", // orange-40v
            DEFAULT: "#c05600", // orange-60v
            dark: "#775540", // orange-warm-60
            darker: "#553a2a", // orange-warm-70
            darkest: "#352313", // orange-warm-80
          },
          cool: {
            lightest: "#e7f6f5", // mint-5
            lighter: "#c7efe2", // mint-10
            light: "#40c7b5", // mint-40v
            DEFAULT: "#00bde3", // cyan-40v
            dark: "#008480", // mint-60v
            darker: "#044e54", // cyan-80
            darkest: "#162e51", // blue-warm-80v
          },
        },

        // Keep existing shadcn/ui colors for compatibility
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
