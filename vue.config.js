module.exports = {
    // publicPath: process.env.NODE_ENV === 'production'
    //     ? '/qunee_by_vue/dist/' // 打包后发布路径
    //     : '/' // 开发环境相对路径
    // ,
    publicPath: '',
    productionSourceMap:false,
    devServer: {
        overlay: {
            warnings: true,
            errors: true
        }
    }
}