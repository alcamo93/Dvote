module.exports= {
    devServer: {
      open: process.platform === 'darwin',
      headers: { 'Access-Control-Allow-Origin': '*' },
      disableHostCheck: true
    }
  }

  module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/Dvote/'
    : '/'
}