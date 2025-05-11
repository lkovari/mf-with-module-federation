const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  remotes: {
    "mf-a": "mf-a@https://lkovari.github.io/mf-with-module-federation/mf-a/remoteEntry.js",
    "mf-b": "mf-b@https://lkovari.github.io/mf-with-module-federation/mf-b/remoteEntry.js",
  },
  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },
});
