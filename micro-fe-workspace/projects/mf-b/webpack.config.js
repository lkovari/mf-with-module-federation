const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'mf-b',

  exposes: {
    './Component': './projects/mf-b/src/app/app.component.ts',
    './Routes': './projects/mf-b/src/app/app.routes.ts', 
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
