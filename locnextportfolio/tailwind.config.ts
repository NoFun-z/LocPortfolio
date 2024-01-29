import zIndex from '@mui/material/styles/zIndex'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/projects/**/*.{js,ts,jsx,tsx,mdx}',
    './src/utils/**/*.{js,ts,jsx,tsx,mdx}',
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
          '100%': { transform: 'translateY(45%)' },
        },
        'close-menu-layout': {
          '0%': { transform: 'translateY(45%)' },
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
        'hr-fadeInSlideIn': {
          '0%': { width: '0' },
          '100%': { width: '50%' },
        },
        'full-hr-fadeInSlideIn': {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        'left-fadeInSlideIn': {
          '0%': { opacity: '0', transform: 'translateX(-100px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'before-about-fadeInSlideIn': {
          '0%': { opacity: '0', transform: 'translateX(-100px)' },
          '100%': { opacity: '0.3', transform: 'translateX(0)' },
        },
        'right-fadeInSlideIn': {
          '0%': { opacity: '0', transform: 'translateX(100px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'bottom-fadeInSlideIn': {
          '0%': { opacity: '0', transform: 'translateY(100px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'idea-fadeInSlideIn': {
          '0%': { transform: 'translateX(-100%)'},
          '100%': { transform: 'translateX(0)'},
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
        'hr-fadeInSlideIn': 'hr-fadeInSlideIn 0.6s ease-in-out forwards',
        'full-hr-fadeInSlideIn': 'full-hr-fadeInSlideIn 0.8s ease-in-out forwards',
        'left-fadeInSlideIn': 'left-fadeInSlideIn 1.5s ease forwards',
        'before-about-fadeInSlideIn': 'before-about-fadeInSlideIn 1.6s ease forwards',
        'right-fadeInSlideIn': 'right-fadeInSlideIn 1.5s ease forwards',
        'bottom-fadeInSlideIn': 'bottom-fadeInSlideIn 1.5s ease forwards',
        'idea-fadeInSlideIn': 'idea-fadeInSlideIn 1.3s ease-out forwards',
      },
    },
  },
  plugins: [],
}
export default config
