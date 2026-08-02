import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'navy-deep': '#061523',
        navy: '#0B3B6F',
        'blue-mid': '#1E5FA8',
        'blue-bright': '#4A90D9',
        ice: '#EAF2FB',
        gold: '#C99B3F',
        'gold-soft': '#E4C381',
        ink: '#0A1F33',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      clipPath: {
        hex: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
      },
    },
  },
  plugins: [],
} satisfies Config
