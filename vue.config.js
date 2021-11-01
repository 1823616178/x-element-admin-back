'use strict'

const path = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const Components = require('unplugin-vue-components/webpack')
const {ElementPlusResolver} = require('unplugin-vue-components/resolvers')

function resolve(dir) {
    return path.join(__dirname, dir)
}

const port = 47788 // dev port

module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/'
        : '/',

    outputDir: 'dist',
    assetsDir: 'static',
    lintOnSave: false,
    productionSourceMap: true,
    devServer: {
        port: port,
        open: true,
        disableHostCheck: true,
        overlay: {
            warnings: false,
            errors: true
        },
        proxy: {
            [process.env.VUE_APP_BASE_API]: {
                // target: `http://127.0.0.1:${port}`,
                target: `http://127.0.0.1:${port}`,
                changeOrigin: true,
                pathRewrite: {
                    ['^' + process.env.VUE_APP_BASE_API]: ''
                }
            }
        },
    },

    configureWebpack: {
        externals: {},
        // provide the app's title in webpack's name field, so thatdevServer
        // it can be accessed in index.html to inject the correct title.
        name: "政府编外人力资源服务综合管理系统",
        resolve: {
            alias: {
                '@': resolve('src')
            }
        },
        plugins: process.env.NODE_ENV === 'production'
            ? [
                Components({
                    resolvers: [ElementPlusResolver()],
                }),
                new BundleAnalyzerPlugin(
                    {
                        //  可以是`server`，`static`或`disabled`。
                        //  在`server`模式下，分析器将启动HTTP服务器来显示软件包报告。
                        //  在“静态”模式下，会生成带有报告的单个HTML文件。
                        //  在`disabled`模式下，你可以使用这个插件来将`generateStatsFile`设置为`true`来生成Webpack Stats JSON文件。
                        analyzerMode: 'server',
                        //  将在“服务器”模式下使用的主机启动HTTP服务器。
                        analyzerHost: '127.0.0.1',
                        //  将在“服务器”模式下使用的端口启动HTTP服务器。
                        analyzerPort: 48961,
                        //  路径捆绑，将在`static`模式下生成的报告文件。
                        //  相对于捆绑输出目录。
                        reportFilename: 'report.html',
                        //  模块大小默认显示在报告中。
                        //  应该是`stat`，`parsed`或者`gzip`中的一个。
                        //  有关更多信息，请参见“定义”一节。
                        defaultSizes: 'parsed',
                        //  在默认浏览器中自动打开报告
                        openAnalyzer: true,
                        //  如果为true，则Webpack Stats JSON文件将在bundle输出目录中生成
                        generateStatsFile: false,
                        //  如果`generateStatsFile`为`true`，将会生成Webpack Stats JSON文件的名字。
                        //  相对于捆绑输出目录。
                        statsFilename: 'stats.json',
                        //  stats.toJson（）方法的选项。
                        //  例如，您可以使用`source：false`选项排除统计文件中模块的来源。
                        //  在这里查看更多选项：https：  //github.com/webpack/webpack/blob/webpack-1/lib/Stats.js#L21
                        statsOptions: null,
                        logLevel: 'info' // 日志级别。可以是'信息'，'警告'，'错误'或'沉默'。
                    }
                )
            ] : [
                Components({
                    resolvers: [ElementPlusResolver()],
                }),
            ]
    },

    chainWebpack(config) {
        config.plugins.delete('preload') // TODO: need test
        config.plugins.delete('prefetch') // TODO: need test
        config.entry('main').add('babel-polyfill') // main是入口js文件

        // set svg-sprite-loader
        config.module
            .rule('svg')
            .exclude.add(resolve('src/icons'))
            .end()
        config.module
            .rule('icons')
            .test(/\.svg$/)
            .include.add(resolve('src/icons'))
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]'
            })
            .end()

        const oneOfsMap = config.module.rule('scss').oneOfs.store
        oneOfsMap.forEach(item => {
            item
                .use('sass-resources-loader')
                .loader('sass-resources-loader')
                .options({
                    // 全局变量资源路径
                    // 也可以选择全局变量路径数组, 如果你有多个文件需要成为全局,就可以采用这种方法
                    resources: ['src/assets/index.scss']
                    // 或者你可以将多个scss文件@import到一个main.scss用第一种方法，都是可以的
                })
                .end()
        })

        config
            // https://webpack.js.org/configuration/devtool/#development
            .when(process.env.NODE_ENV === 'development',
                config => config.devtool('cheap-source-map')
            )

        config
            .when(process.env.NODE_ENV !== 'development',
                config => {
                    config
                        .optimization.splitChunks({
                        chunks: 'all',
                        cacheGroups: {
                            libs: {
                                name: 'chunk-libs',
                                test: /[\\/]node_modules[\\/]/,
                                priority: 10,
                                chunks: 'initial' // only package third parties that are initially dependent
                            },
                            elementUI: {
                                name: 'chunk-elementUI', // split elementUI into a single package
                                priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
                                test: /[\\/]node_modules[\\/]_?element-ui(.*)/ // in order to adapt to cnpm,
                            },
                            commons: {
                                name: 'chunk-commons',
                                test: resolve('src/components'), // can customize your rules
                                minChunks: 3, //  minimum common number
                                priority: 5,
                                reuseExistingChunk: true
                            }
                        }
                    })
                    config.optimization.runtimeChunk('single')
                }
            )
        config.module
            .rule('compile')
            .test(/\.js$/)
            .include
            .add(resolve('node_modules/element-ui/packages'))
            .add(resolve('node_modules/element-ui/src'))
            .end()
            .exclude
            .add(resolve('node_modules/element-ui/src/utils/date.js'))
            .end()
            .use('babel')
            .loader('babel-loader')
    },

    pluginOptions: {}
}
