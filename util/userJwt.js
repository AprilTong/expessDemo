const { expressjwt: jwt } = require('express-jwt')

// 验证token过期
const jwtAuth = jwt({
    secret: 'april', // 密钥
    algorithms: ['HS256'], // 签名算法
}).unless({
    path: ['/api/login', '/api/register'], // unless 设置jwt认证白名单
})

module.exports = jwtAuth
