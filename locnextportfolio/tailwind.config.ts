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
    },
    animation: {
      'open-menu': 'open-menu 0.5s ease-in-out forwards',
      'close-menu': 'close-menu 0.5s ease-in-out forwards',
      'open-menu-layout': 'open-menu-layout 0.5s ease-in-out forwards',
      'close-menu-layout': 'close-menu-layout 0.5s ease-in-out forwards',
    }
  },
  plugins: [],
}
export default config
