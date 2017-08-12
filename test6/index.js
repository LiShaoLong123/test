/**
 * Created by Administrator on 2017/8/12.
 */
var fs = require('fs')
var path = require('path')
module.exports = function (test, txt, callback) {
    fs.readdir(test, function (err, data) {
        if (err)
            return callback(err)
        data = data.filter(function (file) {
            return path.extname(file) === ('.' + txt);
        })
        callback(null, data)
    })
}
