const express =require('express');
var path =require('path');
const app =express();

app.use(express.static(__dirname + '/public/img'));
app.use(express.static(__dirname + '/public/css'));
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/script'));

app.get('/css',function(req,resp){
resp.sendFile('style.css' , {root:path.join(__dirname + '/css')});
});
app.get('/style.css',function(req,resp){
resp.send('style.css' , {root:path.join(__dirname +'/style')});
});
app.get('/',function(req,resp){
resp.sendFile('main.html',{root: path.join(__dirname +'/views')}); 
});
app.get('/login',function(req,resp){
resp.send('/login.html',{root :path.join(__dirname + '/login.html')});
});
app.get('/signup',function(req,resp){
resp.send('/signup.html',{root:path.join(__dirname +'/signup')});
});
app.get('/socialmedia',function(req,resp){
require('/socialmedia.html',{root:path.join(__dirname + '/socialmedia')});
});
app.listen(9009 ,function(){ console.log('now its open in localhost 9009')});