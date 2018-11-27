const path = require('path');
require('dotenv').config();
module.exports = {
    mode: process.env.ENVIROMENT,
    entry: {
        scripts: [
            path.resolve(__dirname, "./src/resources/scripts/scripts.js"),
            path.resolve(__dirname, "./src/resources/scripts/prueba.js")
        ]
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, 'public/js')
    },
    module: {
        rules: [
        {
            test: /\.(scss)$/,
            use: [
            {
                // Adds CSS to the DOM by injecting a `<style>` tag
                loader: 'style-loader'
            },
            {
                // Interprets `@import` and `url()` like `import/require()` and will resolve them
                loader: 'css-loader'
            },
            {
                // Loader for webpack to process CSS with PostCSS
                loader: 'postcss-loader',
                options: {
                plugins: function () {
                    return [
                    require('autoprefixer')
                    ];
                }
                }
            },
            {
                // Loads a SASS/SCSS file and compiles it to CSS
                loader: 'sass-loader'
            }
            ]
        }
        ]
    }
}