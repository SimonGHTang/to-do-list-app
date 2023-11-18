module.exports = {
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
        "arrow-body-style": ["error", "as-needed"]
    }
}
