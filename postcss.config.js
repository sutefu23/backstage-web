module.exports = {
  plugins: {
    autoprefixer: {},
    cssnano: {},
    "postcss-import": {},
    "postcss-preset-env": {
        stage:3,
      features: {
        "nesting-rules": true,
      },
    },
  },
};
