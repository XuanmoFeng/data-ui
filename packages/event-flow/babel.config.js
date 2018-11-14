module.exports = {
  ignore: [/\/core-js/, /@babel\/runtime/],
  plugins: [
    '@babel/plugin-proposal-export-default-from',
    [
      '@babel/plugin-transform-runtime',
      {
        helpers: true,
        regenerator: false,
        useESModules: true,
        corejs: 2,
      },
    ],
  ],
  presets: [
    [
      '@babel/preset-env',
      {
        loose: true,
        modules: 'commonjs',
        shippedProposals: true,
        targets: {
          ie: 10,
        },
        useBuiltIns: 'usage',
      },
    ],
    '@babel/preset-react',
  ],
};
