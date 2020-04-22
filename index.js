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

    plugins: ['prettier'],

    rules: {
        'prettier/prettier': 'error',
    },

    settings: {
        'import/resolver': {
            node: {
                extensions: ['*', '.js', '.json', '.vue'],
            },
        },
    },
};
