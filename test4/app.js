/**
 * Created by Administrator on 2017/8/11.
 */
var  fs = require('fs');
var res = fs.readFile('test.txt','utf-8',function callback (err,data ) {
    if(err)throw err;
    console.log(data.toString().split('\n').length);
})

