/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xl-custom': '1248px',
      },
      backgroundImage: {
        'post-img-text': 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 100%)',
      },
      boxShadow: {
        'bigbox': '0px 20px 24px -4px rgba(16, 24, 40, 0.08), 0px 8px 8px -4px rgba(16, 24, 40, 0.03)',
        'pagination-btn': '0px 1px 2px rgba(16, 24, 40, 0.05)',
      },
      colors: {
        'blue-650': '#344054',
        'blue-750': '#1D2939',
        'blue-800': '#101828',
        'gray-60': '#F2F4F7',
        'gray-80': '#F9FAFB',
        'gray-90': '#EAECF0',
        'gray-120': '#D0D5DD',
        'gray-450': '#667085',
        'gray-550': '#475467',
      },
    },
  },
  plugins: [],
}
