const path = require('path')
const exec = require('child_process').exec;


module.exports = {
  target: 'node',
  mode: 'none',
  entry: [
    './src/main.js'
  ],
  module: {
    rules: [
      {
        test: /\.md$/,
        use: [{ loader: "gray-matter-loader" }],
      }
    ]
  },
  resolve: {
    alias: {
      'static': path.resolve(__dirname, 'static/')
    },
  },
  plugins: [
    {
      apply: (compiler) => {
        compiler.hooks.afterEmit.tap('AfterEmitPlugin', (compilation) => {
          exec('rm -rf api && node ./dist/main.js', (err, stdout, stderr) => {
            if (stdout) process.stdout.write(stdout);
            if (stderr) process.stderr.write(stderr);
          });
        });
      }
    }
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'api'),
    },
    host: '0.0.0.0',
    devMiddleware: {
      serverSideRender: true,
      writeToDisk: true,
    },
  }
};
