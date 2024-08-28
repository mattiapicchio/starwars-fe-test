import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'
import { COLORS } from './src/assets/css/tailwindColors'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class', // disable automatic dark mode
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1440px',
          '3xl': '1536px',
        },
      },
      colors: COLORS,
      boxShadow: {
        'custom-light': '0 4px 8px rgba(255, 255, 255, 0.2)',
      },
    },
  },
  plugins: [
    plugin(({ addComponents, theme }) => {
      addComponents({
        '.button-primary': {
          backgroundColor: theme('colors.black.rich'),
          color: theme('colors.white'),
          borderRadius: theme('borderRadius.md'),
          borderColor: theme('colors.yellow'),
          borderWidth: '1px',
          padding: `${theme('spacing.1')} ${theme('spacing.4')}`,

          '&:hover': {
            backgroundColor: theme('colors.gray.dark'),
          },
        },
      })
    }),
  ],
}
export default config
