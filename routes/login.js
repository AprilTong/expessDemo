const express = require('express')
const loginController = require('../controllers/loginController')
const jwt = require('jsonwebtoken')

const router = express.Router() //模块化路由

router.post('/register', loginController.register)

function login_middleware(req, res, next) {
    console.log('中间件1')
    next()
}

function login_params(req, res, next) {
    const { name, password } = req.query
    if (!name || !password) {
        res.json({
            message: '参数校验失败',
        })
    } else {
        next()
    }
}
router.post('/login', [login_middleware], (req, res, next) => {
    // res.send('登陆成功')
    const { username } = req
    const token = jwt.sign(
        {
            username,
        },
        'april',
        {
            // 过期时间
            expiresIn: 60 * 60 * 24,
        }
    )
    res.json({
        message: '登录成功',
        data: {
            jwtToken: token,
        },
        ret: 1,
    })
})
module.exports = router
