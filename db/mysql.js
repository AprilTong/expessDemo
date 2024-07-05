const mysql = require('mysql')
const pool = mysql.createPool({
    connectionLimit: 10, // 最大连接数默认为0
    host: '', // 数据库服务器地址
    port: '', // 数据库端口,
    user: '', // 数据库的用户名
    password: '', // 数据库密码
    database: '', // 数据库名
})

class Mysql {
    constructor() {}
    query(sql) {
        return new Promise((resolve, reject) => {
            pool.getConnection(function (error, connection) {
                if (error) {
                    reject(error)
                    throw error
                }
                connection.query(sql, function (error, results, fields) {
                    if (error) {
                        reject(error)
                        throw error
                    }
                    connection.release()
                    resolve(results)
                })
            })
        })
    }
}

module.exports = new Mysql()
