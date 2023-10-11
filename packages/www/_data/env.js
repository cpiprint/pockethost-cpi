const env = {
  HTTP_PROTOCOL: process.env.PUBLIC_HTTP_PROTOCOL || 'https',
  BLOG_DOMAIN: process.env.PUBLIC_BLOG_DOMAIN || 'pockethost.io',
  APP_DOMAIN: process.env.PUBLIC_APP_DOMAIN || 'app.pockethost.io',
}
env.APP_URL = `${env.HTTP_PROTOCOL}://${env.APP_DOMAIN}`
env.BLOG_URL = `${env.HTTP_PROTOCOL}://${env.BLOG_DOMAIN}`

module.exports = env