import babel from 'rollup-plugin-babel';

export default {
	// relative path to index
	input: './src/index.js',
	output: {
        file: './index.js',
        // commonjs e.g. module.exports
        format: 'cjs'
    },
	plugins: [
		// takes a config object. Include presets or plugins to override babelrc
		babel({
			'exclude': 'node_modules/**',
		})
	]
}
