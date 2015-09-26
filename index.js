const sri = require('sri');

const WebpackSRIPlugin = {

  apply(compiler) {

    compiler.plugin('this-compilation', function(compilation) {

      compilation.plugin('optimize-assets', function(assets, callback) {

        Object.keys(assets)
          .forEach(function(file) {

            const asset = assets[file];
            const content = asset.source();
            const sriString = sri.getSRIString(content);

            console.log(`SRI string for ${file}: ${sriString}`);
          });
      });
    });
  }
};

module.exports = WebpackSRIPlugin;
