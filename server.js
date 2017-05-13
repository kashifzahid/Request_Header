var express=require('express');
var app=express();
var http = require('http');
const os=require('os');
var hoste={
    host:'api.ipify.org'
}

http.get(hoste,function(res){
  res.on('data',function(ip){
    console.log(ip.toString());
    send(ip);
  })
})
function send(datas){
  


console.log(os.platform());
console.log(os.release());
console.log(os.type());


var server=http.createServer(function(req,res){
  /*res.write(datas);
  res.write(ara);*/
  var dat={
    "ip":datas,
    "platform":os.platform(),
    "release":os.release(),
    'type':os.type()
  }
  res.write("this is "+JSON.stringify(dat));
  
  
  
}).listen(8080);
  
}

/*app.get(hoste,function(req,res){
    
        
    
    console.log("My public IP address is: " + res);
    
});*/