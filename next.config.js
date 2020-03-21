const path = require('path')

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
  webpack: config => {
    config.resolve.alias['~'] = path.resolve(__dirname) + '/src'
    return config
  },
}
