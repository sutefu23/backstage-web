module.exports = {
  parser: require('postcss-comment'),
  plugins: {
    autoprefixer: {},
    cssnano: {},
    "postcss-import": {},
    "postcss-preset-env": {
      stage: 3,
      features: {
        "nesting-rules": true,
        "media-query-ranges": true,
      },
    },
    'postcss-sort-media-queries': {},
  },
};
