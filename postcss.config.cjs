module.exports = {
  plugins: {
    '@stylexjs/postcss-plugin': {
      include: ['./src/**/*.stylex.css'],
      useCSSLayers: true,
    },
  },
};
