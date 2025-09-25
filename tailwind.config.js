/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'finance-green': '#10B981',
        'finance-yellow': '#F59E0B',
        'finance-red': '#EF4444',
        'finance-blue': '#3B82F6',
        'finance-gray': '#6B7280',
        'finance-dark': '#1F2937',
      }
    },
  },
  plugins: [],
}

