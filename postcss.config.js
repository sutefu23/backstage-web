module.exports = {
  parser: require("postcss-comment"),
  plugins: {
    autoprefixer: {},
    cssnano: {},
    "postcss-import": {},
    "postcss-mixins": {},
    "postcss-nested": {},
    "postcss-functions": {},
    "postcss-preset-env": {
      stage: 3,
      features: {
        "nesting-rules": true,
        "media-query-ranges": true,
      },
    },
    "postcss-simple-vars": {},
    "postcss-sort-media-queries": {},
  },
};
