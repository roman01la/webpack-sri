# webpack-sri
Subresource Integrity hash generator plugin for Webpack

## Installation

```
$ npm i -D webpack-sri
```

## Usage

```javascript
const WebpackSRIPlugin = require('webpack-sri');

module.exports = {
  plugins: [ WebpackSRIPlugin ]
};
```

SRI string will output into terminal.
