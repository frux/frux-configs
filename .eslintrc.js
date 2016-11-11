module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es6: true,
		node: true
	},
	extends: [
		'xo',
		'xo-react'
	],
	parserOptions: {
		ecmaFeatures: {
			experimentalObjectRestSpread: true,
			jsx: true
		},
		sourceType: 'module'
	},
	plugins: [
		'react'
	],
	ext: [
		'.js',
		'.jsx',
		'.json'
	],
	rules: {
		'operator-linebreak': [
			'error',
			'after',
			{
				overrides: {
					'?': 'before',
					':': 'before'
				}
			}
		]
	}
}
