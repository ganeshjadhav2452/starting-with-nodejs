const express = require('express')
const app = express()
app.set('view engine','ejs')

const fs = require('fs')
const path = require('path')



const apiData = fs.readFileSync('api.json','utf-8');


const pathDir = path.join(__dirname,'public')
app.use(express.static(pathDir))

app.get('/',(req,res)=>{
   // res.sendFile(`${pathDir}/index.html`) 
   res.render("index")
})

app.get('/home',(req,res)=>{
   //  res.sendFile(`${pathDir}/home.html`)
   res.render('home')
 })


 app.get('/download',(req,res)=>{
    res.download(`${pathDir}/index.html`)
 })

app.listen(4000,()=>{
    console.log('server established')
})