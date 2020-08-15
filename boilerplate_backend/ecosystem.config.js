module.exports = {
  apps: [
    {
      name: 'node-boilerplate',
      script: './index.js',
      env: {
        NODE_ENV: 'production',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
};
