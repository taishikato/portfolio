module.exports = {
  trailingSlash: true,
  exportPathMap: () => {
    return {
      '/': {page: '/'},
      '/about': {page: '/about'},
    }
  },
}