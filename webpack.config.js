const path = require('path');

module.exports = [
    {
        entry: './index.ts',
        module: {
            rules: [
                {
                    test: /\.ts?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
            ],
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
        },
        output: {
            filename: 'openai.min.js',
            path: path.resolve(__dirname, 'dist'),
            globalObject: 'this',
            library: {
                name: 'OpenAI',
                type: 'umd',
            }
        }
    },
    {
        entry: './index.ts',
        module: {
            rules: [
                {
                    test: /\.ts?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
            ],
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
        },
        output: {
            filename: 'openai.module.min.js',
            path: path.resolve(__dirname, 'dist'),
            library: {
                type: 'module',
            },
        },
        experiments: {
            outputModule: true
        }
    }    
];