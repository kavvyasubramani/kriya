/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontSize: {
        // Adding custom font sizes
        'tiny': '0.6rem',
        'mid':'0.8rem',
      },
    },
  },
  plugins: [],
}

