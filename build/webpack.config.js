const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')


const config = {
    // 应用入口
    entry: {
        app: path.join(__dirname, '../src/app.js')
    },
    module: {
        rules: [
            {
                test: /.jsx$/,
                loader: 'babel-loader'
            },
            {
                test: /.(js)$/,
                loader: 'babel-loader',
                exclude: [
                    path.join(__dirname, '../node_modules')
                ]
            }
        ]
    },
    // 输出目录
    output: {
        // filename: '[name].[hash].js',
        filename: '[name].js',
        path: path.join(__dirname, '../dist'),
        publicPath: ''
    },
    plugins: [
        new HTMLPlugin({
            template: path.join(__dirname, '../src/template.html')
        })
    ]
}

config.devServer = {
    host: '0.0.0.0',  // 我们可以允许我们用任意方式进行访问（127.0.0.1，localhost, 本机ip）
    port: '9999',
    contentBase: path.join(__dirname, '../dist'),
    // hot: true,  //启动热加载
    overlay: {  // 错误提醒弹窗小遮层
        errors: true //只显示error
    },
    // 和output配置对应起来
    publicPath: '',  // 访问所有静态路径都要前面加/public才能访问生成的静态文件
    historyApiFallback: {
        index: '/public/404.html' // 所有404的请求全部访问该配置下的url
    }
    }

module.exports = config