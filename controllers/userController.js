const mysql = require('../db/mysql')
const userService = require('../service/userService')

exports.list = function (req, res) {
    res.json({
        list: [
            {
                name: '12',
                id: 1,
            },
            {
                name: 'april',
                id: 2,
            },
        ],
    })
}

exports.deleteUser = function (req, res) {
    res.send(' got a delete request at user')
}

exports.getuser = function (req, res) {
    mysql.query(userService.userAll).then((data) => {
        const jsonData = JSON.parse(JSON.stringify(data))
        res.json({
            data: jsonData,
        })
    })
}
