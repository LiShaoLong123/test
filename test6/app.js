/**
 * Created by Administrator on 2017/8/12.
 */
/*var fs = require('fs');*/
var filterFn = require('./index');
/*var path = require('path');*/
var test = process.argv[2];
var txt  = process.argv[3];
filterFn(test,txt,function (err,data) {
    if(err){
        return console.error('There was an error:', err)
    }
    data.forEach(function (file) {
        /*if (path.extname(file) === '.' + txt)*/
            console.log(file)
    })
})
