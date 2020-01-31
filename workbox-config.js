module.exports = {
  include: ['**/*.{css,gz,js,png,html,json}'],
  swDest: 'public/sw.js',
  runtimeCaching: [
    {
      urlPattern: /\.(css|gz|js|png|html|json)$/,
      handler: 'CacheFirst'
    }
  ]
};
