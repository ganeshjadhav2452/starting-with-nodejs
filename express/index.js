const express = require('express')

const app = express()

app.get('/',(req,res)=>{
   res.send('hi this is first express root')
})

app.get('/about',(req,res)=>{
    res.send('hi this is first express about root')
 })


 app.get('/download',(req,res)=>{
    res.send('download file')
 })

app.listen(4000,()=>{
    console.log('server established')
})