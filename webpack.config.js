
const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    filename: "prosemirror.min.js",
    path: path.resolve(__dirname, "dist")
  },
  performance: {
    hints: false
  }
};
