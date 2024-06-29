module.exports = {
  trailingSlash: true,
  output: 'export',
  exportPathMap: () => {
    return {
      '/': {page: '/'},
      '/about': {page: '/about'},
    }
  },
}
