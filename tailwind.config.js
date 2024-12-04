/** @type {import('tailwindcss').Config} */

import theme from 'tailwindcss/defaultTheme'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        padding: '12px',
        center: true,
        screens: {
          '2xl': theme.screens.lg
        }
      }
    },
  },
  plugins: [],
}