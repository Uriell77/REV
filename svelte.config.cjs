const serverless = require('@nikso/adapter-serverless');
const pkg = require('./package.json');

module.exports = {
  kit: {
    adapter: serverless(),

    // NOTE that Serverless might add a "stage" fragment to URLs. You want to
    // reflect it here in `path.base` to have static files being served properly
    paths: {
      base: '/dev',
    },

    target: '#svelte',

    vite: {
      ssr: {
        noExternal: Object.keys(pkg.dependencies || {}),
      },
    },
  },
};
