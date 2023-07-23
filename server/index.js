// making server
const fs = require('fs')
const http = require('http')
const apiData = fs.readFileSync('api.json','utf-8');
const server = http.createServer((req,res)=>{
   if(req.url === '/'){
    res.end('hi this is my first node js home page')
   }else if(req.url === '/user'){
    res.end(apiData)
    
   }else{
    res.end('404 page not found ')
   }
})

server.listen(3000,()=>{
    console.log('server listning  on port 3000')

})
