import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['var(--font-heading)'],
        body: ['var(--font-body)'],
      },
      colors: {
        gold: {
          DEFAULT: '#C9A84C',
          light: '#E8C97A',
          dark: '#9A7B2E',
        },
        charcoal: {
          DEFAULT: '#0D0D0D',
          mid: '#1A1A1A',
          light: '#252525',
        },
      },
    },
  },
  plugins: [],
}

export default config
