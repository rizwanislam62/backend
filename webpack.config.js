const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  // Entry point for your Node.js app
  entry: "./src/server.js", // Adjust this to your app's entry point

  // Output settings
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
  },

  // Set Webpack mode
  mode: process.env.NODE_ENV === "production" ? "production" : "development",

  // Target Node.js environment
  target: "node",

  // Exclude node_modules from the output bundle
  externals: [nodeExternals()],

  // Enable source maps for debugging
  devtool: "source-map",

  // Module rules (if you use ES6 or other loaders)
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  // Resolve extensions
  resolve: {
    extensions: [".js", ".json"],
  },
};
