var express = require('express');
var app = express()
var morgan = require('morgan')                      //로그 모듈 임포트
var mysql = require('mysql')                        //mysql 임포트
var bodyParser = require('body-parser');
 
//미들웨어 설정
app.use(morgan('short'))                             //로그 미들웨어
app.use(express.static('./public'))                 //기본 파일 폴더 위치 설정
app.use(bodyParser.urlencoded({extended:false}))
 
    
//라우트로 분리시켜주기
var userRouter = require('./routes/user.js')

//상품리스트  게시판~! 
var productRouter = require('./routes/product.js')
app.use(userRouter)
app.use(productRouter)
       
//var PORT = process.env.PORT || 3003
//서버 가동
app.listen(3003,function(){
    console.log("서버가동") 
}) 