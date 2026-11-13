/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        coal: {
          900: '#0D0D0D',
          800: '#111111',
          700: '#1A1A1A',
          600: '#222222',
          500: '#2A2A2A',
        },
        neon: {
          50: '#E6FFE6',
          100: '#B8FFB8',
          200: '#7CFF7C',
          300: '#39FF14',
          400: '#22C55E',
          500: '#16A34A',
          600: '#15803D',
        },
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'Impact', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        neon: '0 0 10px rgba(57,255,20,0.5), 0 0 30px rgba(57,255,20,0.25)',
        'neon-sm': '0 0 6px rgba(57,255,20,0.4), 0 0 16px rgba(57,255,20,0.18)',
        'neon-lg': '0 0 20px rgba(57,255,20,0.6), 0 0 60px rgba(57,255,20,0.3)',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 8px rgba(57,255,20,0.4), 0 0 24px rgba(57,255,20,0.15)' },
          '50%': { boxShadow: '0 0 16px rgba(57,255,20,0.7), 0 0 48px rgba(57,255,20,0.35)' },
        },
        floatUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scan: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        pulseGlow: 'pulseGlow 2.5s ease-in-out infinite',
        floatUp: 'floatUp 0.7s ease-out forwards',
        scan: 'scan 3s linear infinite',
        marquee: 'marquee 25s linear infinite',
      },
    },
  },
  plugins: [],
};
