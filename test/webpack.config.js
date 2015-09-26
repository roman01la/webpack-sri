const WebpackSRIPlugin = require('../index');
const path = require('path');

module.exports = {
  entry: [ path.join(__dirname, './test.js') ],
  output: {
    path: path.join(__dirname, '/'),
    filename: 'out.js'
  },
  plugins: [ WebpackSRIPlugin ]
};
