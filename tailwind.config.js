/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        red: {
          500: '#EA0000', 600: '#D70404', 700: '#CC272F', 800: '#BD0F04',
          900: '#820000', 950: '#5C0000', 100: '#F0ABAD',
        },
        ink: { 0: '#000000', 1: '#171717', 2: '#222222', 3: '#333333', 4: '#3C3F42' },
        slate: { 1: '#3C3F42', 2: '#6D7175', 3: '#9EA3A8', 4: '#C4C4C4', 5: '#BEBEBE' },
        paper: { 0: '#FFFFFF', 1: '#FCFCFD', 2: '#F0F2F4', 3: '#EBEBEB', 4: '#EAEAEA', 5: '#E9ECEF' },
        mage: '#3A506B',
        inc: '#EA0000',
        both: '#2E5339',
        nerau: '#D4A548',
        client: '#C8553D',
        crit: '#9A1F1F',
        hi: '#B87510',
        med: '#2E5339',
        low: '#6D7175',
      },
      fontFamily: {
        body: ['Barlow', 'Helvetica Neue', 'Arial', 'sans-serif'],
        display: ['Outfit', 'Barlow', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      borderRadius: { 4: '4px', 8: '8px', pill: '9999px' },
      animation: { 'fade-in': 'fadeIn 0.3s cubic-bezier(.2,.7,.2,1)' },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(4px)' },
          '100%': { opacity: '1', transform: 'none' },
        },
      },
    },
  },
  plugins: [],
}
