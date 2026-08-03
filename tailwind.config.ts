import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'navy-deep': '#061523',
        navy: '#0B3B6F',
        accent: '#f47c20',
        'accent-light': '#ff9d4d',
        warm: '#f9f9f7',
        ice: '#EAF2FB',
        ink: '#1a1a2e',
      },
      fontFamily: {
        display: ['Montserrat', 'sans-serif'],
        body: ['Roboto', 'sans-serif'],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        'marquee-reverse': 'marquee-reverse 35s linear infinite',
      },
    },
  },
  plugins: [],
} satisfies Config
