/**
 * Created by Administrator on 2017/8/11.
 */
var fs = require('fs');
var path = require('path');
var test = process.argv[2];
var txt  = process.argv[3]
fs.readdir('test',function (err,list){
   for(var i = 0;i<list.length;i++){
       var file = list[i].toString()
       if(path.extname(file) === ('.'  + txt).toString())
           console.log(file)
   }


})