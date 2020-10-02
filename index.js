module.exports = {
    extends: [
        'airbnb-base',
        'prettier',
        'prettier/vue',
        'plugin:prettier/recommended',
        'plugin:vue/essential',
    ],

    env: {
        browser: true,
        jest: true,
    },

    globals: {
        Shopify: true,
        theme: true,
    },

    parserOptions: {
        parser: 'babel-eslint',
    },

    plugins: ['prettier', 'unicorn'],

    rules: {
        'import/extensions': ['error', 'never'],
        'prettier/prettier': 'error',
        'unicorn/better-regex': 'error',
        'unicorn/expiring-todo-comments': 'error',
        'unicorn/explicit-length-check': 'error',
        'unicorn/prefer-add-event-listener': 'error',
        'unicorn/prefer-array-find': 'error',
        'unicorn/prefer-dataset': 'error',
        'unicorn/prefer-flat-map': 'error',
        'unicorn/prefer-includes': 'error',
        'unicorn/prefer-modern-dom-apis': 'error',
        'unicorn/prefer-query-selector': 'error',
        'unicorn/prefer-replace-all': 'error',
        'unicorn/prefer-spread': 'error',
        'unicorn/prefer-starts-ends-with': 'error',
        'unicorn/prefer-text-content': 'error',
        'unicorn/prefer-trim-start-end': 'error',
    },

    settings: {
        'import/resolver': {
            node: {
                extensions: ['*', '.js', '.json', '.vue'],
            },
        },
    },
};
