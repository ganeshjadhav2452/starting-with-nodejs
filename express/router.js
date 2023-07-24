const express = require('express')
const router = express.Router()
router.get('/',(req,res)=>{
    // res.sendFile(`${pathDir}/index.html`) 
    res.render("index")
 })
 
 router.get('/home',(req,res)=>{
 //  res.sendFile(`${pathDir}/home.html`)
    res.render('home')
  })
 
 
  router.get('/download',(req,res)=>{
     res.download(`${pathDir}/index.html`)
  })

  module.exports = router