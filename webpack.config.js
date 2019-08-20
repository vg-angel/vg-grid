const path=require("path")

module.exports={
    watch: true,
    entry: "./src/index.ts",
    output: {
        filename: "index.js",
        path: path.resolve('dist'),
        library: "Grid"
    },
    mode: 'development',
    devtool: 'inline-dev-tool',
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    devServer: {
        host: 'localhost',
        port: 3000,
        contentBase: path.resolve('dist')
    }
}