module.exports = {
	"root": true,
	"env": {
		"browser": true,
		"es2021": true
	},
	"extends": [
		"eslint:recommended",
		"plugin:react/jsx-runtime",
		"plugin:react/recommended"
	],
	"overrides": [
		{
			"env": {
				"node": true
			},
			"files": [
				".eslintrc.{js,cjs}"
			],
			"parserOptions": {
				"sourceType": "script"
			}
		}
	],
	"parserOptions": {
		"ecmaVersion": "latest",
		"sourceType": "module"
	},
	"plugins": [
		"react"
	],
	"rules": {
		// REACT RULES
		// turn off the need to do import React from 'react' everywhere
		"react/react-in-jsx-scope": "off",
		// disable prop-types checking, integrate typescript instead if needed
		"react/prop-types": "off",

		// STYLING RULES
		"arrow-body-style": ["error", "as-needed"],
		"indent": ["error", "tab"]
	},
	"settings": {
		"react": {
			"version": "detect", // React version. "detect" automatically picks the version you have installed.
			// You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
			// It will default to "latest" and warn if missing, and to "detect" in the future
		},
	}
}
