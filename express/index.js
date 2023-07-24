const express = require('express')
const app = express()
app.set('view engine','ejs')
const router = require('./router')
const fs = require('fs')
const path = require('path')
const pathDir = path.join(__dirname,'public')



const apiData = fs.readFileSync('api.json','utf-8');


app.use(express.static(pathDir))
app.use(router)


app.listen(4000,()=>{
    console.log('server established')
})