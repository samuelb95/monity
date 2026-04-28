/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#E060FF',
        accent: {
          violet: '#8060FF',
          plum: '#502080',
          deep: '#301070',
        },
        success: '#12B76A',
        danger: '#F04438',
        warning: '#F79009',
        background: '#080A12',
        surface: {
          DEFAULT: '#111320',
          elevated: '#191B2A',
        },
        border: '#262A3A',
        text: {
          primary: '#F8FAFC',
          secondary: '#A5ADBE',
        },
      },
      borderRadius: {
        card: '1rem',
        button: '0.75rem',
      },
      spacing: {
        page: '1.5rem',
        section: '2rem',
      },
      boxShadow: {
        card: '0 18px 44px rgba(0, 0, 0, 0.26)',
        glow: '0 0 20px rgba(224, 96, 255, 0.32)',
        nav: '0 -18px 40px rgba(0, 0, 0, 0.35)',
      },
    },
  },
  plugins: [],
}
