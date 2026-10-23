/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          DEFAULT: '#0D0D12',
          card: '#13131A',
          border: '#242430',
        },
        champagne: {
          DEFAULT: '#C9A84C',
          light: '#E5C875',
          dark: '#A68735',
          glow: 'rgba(201, 168, 76, 0.25)',
        },
        ivory: {
          DEFAULT: '#FAF8F5',
          pure: '#FFFFFF',
          muted: '#EFECE6',
        },
        slateCustom: {
          DEFAULT: '#2A2A35',
          light: '#424252',
          muted: '#7F7F94',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      borderRadius: {
        '2rem': '2rem',
        '2.5rem': '2.5rem',
        '3rem': '3rem',
        '4rem': '4rem',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
