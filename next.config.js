module.exports = {
  distDir: 'out',
  trailingSlash: true,
  exportPathMap: () => {
    return {
      '/': {page: '/'},
      '/about': {page: '/about'},
    }
  },
}