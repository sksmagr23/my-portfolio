/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--app-font-sans)', "'Space Grotesk'", "'Inter'", 'sans-serif'],
        mono: ['var(--app-font-sans)', "'Space Grotesk'", "'Inter'", 'sans-serif'],
      },
      colors: {
        ide: {
          bg: '#1E1F25',
          chrome: '#18191E',
          surface: '#24262E',
          surfaceHover: '#2A2D37',
          border: '#3B4353',
          borderSubtle: '#2E3340',
          accent: '#58B4EE',
          accentBright: '#7CC4FF',
          accentDeep: '#2563EB',
          text: '#E6EDF3',
          muted: '#94A3B8',
          subtle: '#64748B',
        },
      },
    },
  },
  plugins: [],
};
