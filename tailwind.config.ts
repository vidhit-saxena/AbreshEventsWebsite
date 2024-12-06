import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        padding: '1rem',
        center: true,
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #FCD6FF, #29D8FF, #FFFD80, #F89AB8, #FCD6FF)',
        'custom-gradient-light': 'linear-gradient(to right, rgba(252, 214, 255, 0.7), rgba(41, 216, 255, 0.7), rgba(255, 253, 128, 0.7), rgba(248, 154, 184, 0.7), rgba(252, 214, 255, 0.7))',
      },
      animation: {
        'gradient-move': 'gradient-move 5s ease infinite',
      },
      keyframes: {
        'gradient-move': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        }
      }
    },
  },
  plugins: [],
};

export default config;