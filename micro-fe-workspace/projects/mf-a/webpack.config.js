const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'mf-a',

  exposes: {
    './Component': './projects/mf-a/src/app/app.component.ts',
    './Routes': './projects/mf-a/src/app/app.routes.ts', 
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
