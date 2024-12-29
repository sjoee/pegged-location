import type { Config } from 'tailwindcss';

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ff9503', // Example: Orange color for primary
        primaryDark: '#e59400' ,
        secondary: '#FFD700', // Example: Gold color for secondary
        border: '#D3D3D3', // Example: Light gray for borders
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
    },
  },
  plugins: [],
} as Config;
