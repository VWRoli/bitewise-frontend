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
        custom: '#7b809a',
        'custom-gray': '#f8f9fa',
        'mui-primary': '#1A73E8',
      },
      backgroundImage: {
        'menu-item-active': 'linear-gradient(195deg, #49a3f1, #1A73E8)',
        'primary-gradient': 'linear-gradient(195deg, #49a3f1, #1A73E8)',
        'green-gradient': 'linear-gradient(195deg, #66BB6A, #43A047)',
        'dark-gradient': 'linear-gradient(195deg, #42424a, #191919)',
        'pink-gradient': 'linear-gradient(195deg, #EC407A, #D81B60)',
      },
      boxShadow: {
        'table-header':
          '0rem 0.25rem 1.25rem 0rem rgba(0, 0, 0, 0.14),0rem 0.4375rem 0.625rem -0.3125rem rgba(0, 187, 212, 0.4)',
        'statistics-card':
          '0rem 0.25rem 0.375rem -0.0625rem rgba(0, 0, 0, 0.1),0rem 0.125rem 0.25rem -0.0625rem rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [],
};
export default config;
