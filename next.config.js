const withCSS = require('@zeit/next-css')

module.exports = withCSS({
  trailingSlash: true,
  exportPathMap: () => {
    return {
      '/': {page: '/'},
      '/about': {page: '/about'},
    }
  },
})
