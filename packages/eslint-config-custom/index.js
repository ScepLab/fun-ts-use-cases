// eslint-disable-next-line no-undef
module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:functional/no-exceptions",
        "plugin:functional/stylistic",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:fp-ts/all"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "functional",
        "@typescript-eslint"
    ],
    "rules": {
        "eqeqeq": [
            "error",
            "always"
        ],
        "no-console": 1,
        "no-param-reassign": "error",
        "@typescript-eslint/no-explicit-any": "warn",
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": [
            "error",
            {
                "argsIgnorePattern": "^_"
            }
        ],
        "functional/no-mixed-type": "off",
        "fp-ts/no-module-imports": "off",
        "fp-ts/no-discarded-pure-expression": "off",
        "functional/readonly-type": "off"
    }
};
