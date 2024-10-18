import { dark, light } from '@mui/material/styles/createPalette';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: '#344767',
        light: '#f0f2f5',
      },
      backgroundImage: {
        'menu-item-active': 'linear-gradient(195deg, #49a3f1, #1A73E8)',
      },
    },
  },
  plugins: [],
};
export default config;
