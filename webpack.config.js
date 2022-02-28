const path = require('path');
const { mainModule } = require('process');

module.exports = {
    entry: {
        index: './src/index.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    }
}