const withPlugins = require('next-compose-plugins');
const removeImports = require('next-remove-imports')();
const nextTranslate = require('next-translate');
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: false,
});

module.exports = withPlugins(
  [removeImports, nextTranslate, withPWA],
  {
    reactStrictMode: false,
    swcMinify: true,
    output: 'standalone',

    // 👇 ADD THIS BLOCK HERE
    eslint: {
      ignoreDuringBuilds: true,
    },

    async rewrites() {
      return [
        {
          source: '/api/v1/:path*',
          destination: 'http://localhost:5003/api/v1/:path*',
        },
      ];
    },
  }
);
