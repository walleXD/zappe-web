const { join } = require('path')

module.exports = {
  head: {
    titleTemplate: '%s - Zappe',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Meta description' }
    ]
  },
  css: [
    {src: join(__dirname, 'styles/app.styl'), lang: 'stylus'}
  ],
  plugins: ['~plugins/vuetify'],
  build: {
    vendor: ['vuetify']
  }
}
