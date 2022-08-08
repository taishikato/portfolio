/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    extend: {
      colors: {
        theme: 'rgb(74 222 128)',
      },
    },
  },
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  plugins: [
    require('daisyui'),
    function ({addComponents}) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '576px',
          },
          '@screen md': {
            maxWidth: '768px',
          },
          '@screen lg': {
            maxWidth: '1200px',
          },
          '@screen xl': {
            maxWidth: '1200px',
          },
        },
      })
    },
  ],
}
