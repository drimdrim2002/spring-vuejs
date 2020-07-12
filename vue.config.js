module.exports = {
  devServer: {
    port: 3000,
    // 모든 api 요청은 /api로 시작함
    proxy: {
      '/api/*': {
        target: 'http://localhost:8080'
      }
    }
  }
}
