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
		ecmaVersion:'2017',
		sourceType: 'module'
	},
	plugins: [
		'react'
	],
	rules: {
		'quotes': ['error', 'single', {'avoidEscape': true}],
		'generator-star-spacing': ['error', 'after'],
		'capitalized-comments': 0,
		'operator-linebreak': [
			'error',
			'after',
			{
				overrides: {
					'?': 'before',
					':': 'before'
				}
			}
		],
		'no-floating-decimal': 0,
		'spaced-comment': [
			'error',
			'always',
			{
				"markers": [
				":",
				"?:",
				"::"
				]
			}
		],
		'react/no-danger': 0,
		'react/forbid-component-props': 0,
		'react/no-did-update-set-state': 0,
		'react/jsx-sort-props': 0,
		'react/require-default-props': 0
	}
}
