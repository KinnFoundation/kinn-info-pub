/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*/*.js"],
  theme: {
    extend: {
      animation: {
        border: 'border 1s ease infinite',
        clippath: 'clippath 3s infinite linear'
      },
      keyframes: {
        border: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        clippath: {
          '0%, 100%': {'clip-path': 'inset(0 0 95% 0)'},
          '25%': {'clip-path': 'inset(0 95% 0 0)'},
          '50%': {'clip-path': 'inset(95% 0 0 0)'},
          '75%': {'clip-path': 'inset(0 0 0 95%)'},
        }
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
  variants: {
    scrollbar: ['rounded']
  }
}
