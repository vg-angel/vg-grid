const path = require("path")

module.exports = {
    entry: "./src/index.ts",
    output: {
        filename: "index.js",
        path: path.join(__dirname, "dist"),
    },
    mode: "development",
    resolve: {
        extensions: [".js" , ".ts", ".tsx"]
    },
    devServer: {
        port: 3000,
        host: "localhost",
        compress: true,
        contentBase: path.join(__dirname, "dist")
    },
    module: {
        rules: [
            {
               test: /\.ts$/,
               use: "ts-loader",
               exclude: /node_modules/
            }
        ]
    }
}