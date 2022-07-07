/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'thin-purple': '#F9E8FB',
        'purple': '#E38AEB',
        'thick-purple': '#A463A9',
      }
    },
  },
  plugins: [],
};
