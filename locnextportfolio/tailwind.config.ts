import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      paddingTop: {
        '144.78px': '144.78px',
      },
      screens: {
        'widescreen': { 'raw': '(min-aspect-ratio: 3/2)' },
        'tallscreen': { 'raw': '(max-aspect-ratio: 13/20)' },
      },
      keyframes: {
        'open-menu': {
          '0%': { transform: 'translateY(-150%)' },
          '100%': { transform: 'translateY(0%)' },
        },
        'close-menu': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-150%)' },
        },
        'open-menu-layout': {
          '0%': { transform: 'translateY(200%)' },
          '100%': { transform: 'translateY(50%)' },
        },
        'close-menu-layout': {
          '0%': { transform: 'translateY(50%)' },
          '100%': { transform: 'translateY(200%)' },
        },
        'open-vertical-navbar': {
          '0%': { left: '-10%' },
          '80%': { left: '4%' },
          '100%': { left: '2%' },
        },
        'open-vertical-contact': {
          '0%': { right: '-10%' },
          '80%': { right: '4%' },
          '100%': { right: '2%' },
        },
        'open-back-to-top': {
          '0%': { right: '-10%' },
          '80%': { right: '4%' },
          '100%': { right: '2%' },
        },
      },
      animation: {
        'open-menu': 'open-menu 0.3s ease-in-out forwards',
        'close-menu': 'close-menu 0.3s ease-in-out forwards',
        'open-menu-layout': 'open-menu-layout 0.3s ease-in-out forwards',
        'close-menu-layout': 'close-menu-layout 0.3s ease-in-out forwards',
        'open-vertical-navbar': 'open-vertical-navbar 0.5s ease-in-out forwards',
        'open-vertical-contact': 'open-vertical-contact 0.5s ease-in-out forwards',
        'open-back-to-top': 'open-back-to-top 0.5s ease-in-out forwards',
      }
    },
  },
  plugins: [],
}
export default config
