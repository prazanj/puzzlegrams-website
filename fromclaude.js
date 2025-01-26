{
    "name": "puzzlegrams-website",
    "version": "1.0.0",
    "main": "index.html",
    "scripts": {
      "build": "node ./node_modules/webpack/bin/webpack.js --config webpack.config.js",
      "start": "node ./node_modules/webpack-dev-server/bin/webpack-dev-server.js --config webpack.config.js"
    },
    "dependencies": {
      "fetch-blob": "3.2.0"
    },
    "devDependencies": {
      "webpack": "^5.0.0",
      "webpack-cli": "^4.0.0",
      "webpack-dev-server": "^3.0.0",
      "babel-loader": "^8.0.0",
      "@babel/core": "^7.0.0",
      "@babel/preset-env": "^7.0.0",
      "style-loader": "^1.0.0",
      "css-loader": "^5.0.0",
      "netlify-cli": "17.37.2"
    },
    "engines": {
      "node": ">=16.0.0"
    }
  }
  