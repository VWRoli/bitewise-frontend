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
      },
      backgroundImage: {
        'menu-item-active': 'linear-gradient(195deg, #49a3f1, #1A73E8)',
        'table-header': 'linear-gradient(195deg, #49a3f1, #1A73E8)',
        'gramm-unit': 'linear-gradient(195deg, #66BB6A, #43A047)',
        'piece-unit': 'linear-gradient(195deg, #42424a, #191919)',
      },
      boxShadow: {
        'table-header':
          '0rem 0.25rem 1.25rem 0rem rgba(0, 0, 0, 0.14),0rem 0.4375rem 0.625rem -0.3125rem rgba(0, 187, 212, 0.4)',
      },
    },
  },
  plugins: [],
};
export default config;
