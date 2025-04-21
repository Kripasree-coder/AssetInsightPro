/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        blue: {
          400: '#60A5FA',
          600: '#2563EB',
          800: '#1E40AF',
          900: '#1E3A8A',
        },
        amber: {
          500: '#F59E0B',
        },
        red: {
          400: '#F87171',
          500: '#EF4444',
          600: '#DC2626',
        },
        green: {
          400: '#34D399',
          500: '#10B981',
          600: '#059669',
        },
      },
      animation: {
        'pulse': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.85 },
        },
      },
    },
  },
  plugins: [],
};