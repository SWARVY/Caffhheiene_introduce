import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      Pretendard_Rg: ['Pretendard_Rg', 'sans-serif'],
      Magnolia: ['Magnolia', 'sans-serif'],
      Gyeonggi_Rg: ['Gyeonggi_Rg', 'sans-serif'],
    },
    extend: {
      colors: {
        background_dark: '#1E1E1E',
        background_component: '#2B2B2B',
      },
    },
  },
  plugins: [],
}
export default config
