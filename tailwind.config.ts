import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['"Cormorant Garamond"', '"Noto Serif JP"', 'serif'],
        sans:    ['"Noto Sans JP"', 'sans-serif'],
        serif:   ['"Noto Serif JP"', 'Georgia', 'serif'],
      },
      maxWidth: {
        content: '740px',
        wide: '1100px',
      },
    },
  },
  plugins: [],
}
export default config
