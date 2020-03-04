const withCSS = require('@zeit/next-css')

module.exports = withCSS({
  exportTrailingSlash: true,
  exportPathMap: () => {
    return {
      '/': {page: '/'},
      '/about': {page: '/about'},
    }
  },
})
