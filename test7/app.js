/**
 * Created by Administrator on 2017/8/12.
 */
var http = require("http");
var url = process.argv[2];
http.get(url, function(res){
    res = res.setEncoding('utf-8');
    res.on("data", console.log);
    res.on("error", console.error);
}).on("error", console.error);