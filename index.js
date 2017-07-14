var findMatches = require('js-cpa');
var reporter = require('./reporter');

class BundleDedupePlugin {
	constructor(options) {
		this.options = options;
	}
	apply(compiler) {
		compiler.plugin('compilation' , function(compilation) {
			// const assets = compilation.assets;
			// const fileKeys = Object.keys(assets).filter(key => {
			// 	return assets[key].constructor.name === 'ConcatSource';
			// });
			// const files = fileKeys.map(filename => {
			// 	return assets[filename].children[0]._value;
			// });
			// files.map((file, index) => findMatches(fileKeys[index], function() {
			// 			return file
			// 		}, reporter));
			compilation.plugin('optimize-chunk-modules', function(chunks, modules) {
				console.log('here');
			})
		});
	}
}

module.exports = BundleDedupePlugin
