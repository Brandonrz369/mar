/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0f4c81',
          dark: '#0d3f6c',
          light: '#2a6ca8',
        },
        secondary: {
          DEFAULT: '#f8f9fa',
          dark: '#e9ecef',
        },
        accent: {
          DEFAULT: '#ff7f50',
          dark: '#e06a42',
          light: '#ff9d7d',
        },
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        opensans: ['Open Sans', 'sans-serif'],
        sans: [
          'Montserrat',
          'Open Sans',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          'Fira Sans',
          'Droid Sans',
          'Helvetica Neue',
          'sans-serif',
        ],
        serif: ['Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('/images/marinashipyard-scaled.jpg')",
        'service-pattern': "url('/images/bg2.jpg')",
      },
      boxShadow: {
        'soft': '0 4px 20px 0 rgba(0, 0, 0, 0.05)',
        'hover': '0 10px 30px 0 rgba(0, 0, 0, 0.1)',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
    },
  },
  plugins: [],
};