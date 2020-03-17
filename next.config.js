module.exports = {
  typescript: {
    ignoreDevErrors: true,
  },
  exportTrailingSlash: true,
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/test': { page: '/test' },
    }
  },
}
