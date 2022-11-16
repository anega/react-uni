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
    },
  },
  plugins: [],
}
