module.exports = {
    extends: "airbnb-base",
    parser: "babel-eslint",
    plugins: ["import"],
    rules: {
        'camelcase': 'off',
        "no-unused-vars": 'off',
        "no-undef": "off",
        "no-use-before-define":"off",
        "import/prefer-default-export": "off",
        "import/no-extraneous-dependencies": "off",
        "no-param-reassign": "off"
    },
};
