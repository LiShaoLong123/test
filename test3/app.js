/**
 * Created by Administrator on 2017/8/11.
 */
var fs = require('fs');
var res = fs.readFileSync( 'test.txt'). toString();
var sum = res.split('\n').length;
console.log(sum);