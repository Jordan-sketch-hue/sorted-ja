/** @type {import('tailwindcss').Config} */
export default {
  content: ['./*.html', './src/**/*.{js,ts}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eefeff',
          100: '#d6fcff',
          200: '#adf6ff',
          300: '#72ecff',
          400: '#2cdcff',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63'
        }
      },
      boxShadow: {
        glow: '0 24px 64px -32px rgba(34, 211, 238, 0.45)'
      },
      backgroundImage: {
        'hero-radial': 'radial-gradient(circle at 25% 25%, rgba(34,211,238,0.24) 0%, rgba(15,23,42,0.04) 42%, rgba(2,6,23,0.95) 100%)'
      }
    },
  },
  plugins: [],
}

