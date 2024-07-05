const express = require('express')

const userController = require('../controllers/userController')

const upload = require('../util/upload')

const router = express.Router()

router.get('/list', userController.list)
router.delete('/user', userController.deleteUser)
router.post('/upload', upload, (req, res, next) => {
    console.log('req', req.file)
    res.send('上传成功')
})

router.get('/user/json', userController.getuser)
module.exports = router
