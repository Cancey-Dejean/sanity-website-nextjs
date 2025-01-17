import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    fontFamily: {
      sourceSerif4: "var(--font-sourceSerif4)",
      inter: "var(--font-inter)",
      jetBrainsMono: "var(--font-jetBrainsMono)",
    },
    colors: {
      transparent: "transparent",
      white: "var(--white)",
      black: "var(--black)",
      cyan: {
        50: "var(--cyan-50)",
        100: "var(--cyan-100)",
        200: "var(--cyan-200)",
        300: "var(--cyan-300)",
        400: "var(--cyan-400)",
        500: "var(--cyan-500)",
        600: "var(--cyan-600)",
        700: "var(--cyan-700)",
        800: "var(--cyan-800)",
        900: "var(--cyan-900)",
        950: "var(--cyan-950)",
      },
      gray: {
        50: "var(--gray-50)",
        100: "var(--gray-100)",
        200: "var(--gray-200)",
        300: "var(--gray-300)",
        400: "var(--gray-400)",
        500: "var(--gray-500)",
        600: "var(--gray-600)",
        700: "var(--gray-700)",
        800: "var(--gray-800)",
        900: "var(--gray-900)",
        950: "var(--gray-950)",
      },
      blue: {
        50: "var(--blue-50)",
        100: "var(--blue-100)",
        200: "var(--blue-200)",
        300: "var(--blue-300)",
        400: "var(--blue-400)",
        500: "var(--blue-500)",
        600: "var(--blue-600)",
        700: "var(--blue-700)",
        800: "var(--blue-800)",
        900: "var(--blue-900)",
        950: "var(--blue-950)",
      },
      purple: {
        50: "var(--purple-50)",
        100: "var(--purple-100)",
        200: "var(--purple-200)",
        300: "var(--purple-300)",
        400: "var(--purple-400)",
        500: "var(--purple-500)",
        600: "var(--purple-600)",
        700: "var(--purple-700)",
        800: "var(--purple-800)",
        900: "var(--purple-900)",
        950: "var(--purple-950)",
      },
      magenta: {
        50: "var(--magenta-50)",
        100: "var(--magenta-100)",
        200: "var(--magenta-200)",
        300: "var(--magenta-300)",
        400: "var(--magenta-400)",
        500: "var(--magenta-500)",
        600: "var(--magenta-600)",
        700: "var(--magenta-700)",
        800: "var(--magenta-800)",
        900: "var(--magenta-900)",
        950: "var(--magenta-950)",
      },
      red: {
        50: "var(--red-50)",
        100: "var(--red-100)",
        200: "var(--red-200)",
        300: "var(--red-300)",
        400: "var(--red-400)",
        500: "var(--red-500)",
        600: "var(--red-600)",
        700: "var(--red-700)",
        800: "var(--red-800)",
        900: "var(--red-900)",
        950: "var(--red-950)",
      },
      orange: {
        50: "var(--orange-50)",
        100: "var(--orange-100)",
        200: "var(--orange-200)",
        300: "var(--orange-300)",
        400: "var(--orange-400)",
        500: "var(--orange-500)",
        600: "var(--orange-600)",
        700: "var(--orange-700)",
        800: "var(--orange-800)",
        900: "var(--orange-900)",
        950: "var(--orange-950)",
      },
      yellow: {
        50: "var(--yellow-50)",
        100: "var(--yellow-100)",
        200: "var(--yellow-200)",
        300: "var(--yellow-300)",
        400: "var(--yellow-400)",
        500: "var(--yellow-500)",
        600: "var(--yellow-600)",
        700: "var(--yellow-700)",
        800: "var(--yellow-800)",
        900: "var(--yellow-900)",
        950: "var(--yellow-950)",
      },
      green: {
        50: "var(--green-50)",
        100: "var(--green-100)",
        200: "var(--green-200)",
        300: "var(--green-300)",
        400: "var(--green-400)",
        500: "var(--green-500)",
        600: "var(--green-600)",
        700: "var(--green-700)",
        800: "var(--green-800)",
        900: "var(--green-900)",
        950: "var(--green-950)",
      },
      salmon: {
        DEFAULT: "var(--salmon-500)",
      },
    },
    extend: {
      fontSize: {
        "display-lg": "display-lg", // 56px - 104px
        "display-md": "display-md", // 36px - 72px
        "display-sm": "display-sm", // 50px - 60px
        "heading-md": "heading-md", // 28px - 28px
      },
      colors: {
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
        "black-to-white": {
          from: { color: "var(--black)" },
          to: { color: "var(--black)" },
        },
        "hero-text-slide": {
          from: { transform: "scaleX(0)" },
          to: { transform: "none" },
        },
        "hero-bold": {
          from: { fontWeight: "400" },
          to: { fontWeight: "700" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "100" },
        },
      },
      animation: {
        "fade-in": "fade-in .3s ease-in .15s backwards",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "black-to-white":
          "black-to-white var(--step-duration) ease-in var(--step-3-delay) backwards",
        "hero-text-slide":
          "hero-text-slide var(--step-duration) ease-in var(--step-3-delay) backwards",
        "hero-bold":
          "hero-bold var(--step-duration) ease-in var(--step-3-delay) backwards",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1149px",
        "2xl": "1440px",
        "3xl": "1536px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
