/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  plugins: [require('daisyui')],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    prefix: '',
    darkTheme: 'dark',
  },
  theme: {
    extend: {
      screens: {
        phone: {
          max: '500px',
        },
        tablet: {
          min: '500px',
          max: '900px',
        },
        laptop: {
          min: '900px',
        },
      },
    },
  },
}
