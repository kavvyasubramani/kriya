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
       boxShadow: {
        custom: 'rgba(0, 0, 0, 0.35) 0px 5px 15px;',
        purple: 'rgba(128, 0, 128, 0.3) 0px 19px 38px, rgba(128, 0, 128, 0.22) 0px 15px 12px',
      },
    },
  },
  plugins: [],
}

