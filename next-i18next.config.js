module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'id'],
    localeDetection: false,
  },
  reloadOnPrerender: process.env.NODE_ENV !== 'production',
  debug: process.env.NODE_ENV !== 'production',
  serializeConfig: false,
};
