const path = require('path')

module.exports = {
  experiments: {
    outputModule: true
  },
  entry: {
    'solid-client': './src/packages/solid-client.js',
    'solid-client-authn-browser': './src/packages/solid-client-authn-browser.js',
    'vocab-common-rdf': './src/packages/vocab-common-rdf.js',
  },
  output: {
    library: {
      type: 'module'
    },
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist/packages')
  },
  resolve: {
    fallback: { "buffer": false }
  }
}
