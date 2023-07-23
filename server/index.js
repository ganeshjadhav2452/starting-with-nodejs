// making server

const http = require('http')
const server = http.createServer((req,res)=>{
   if(req.url === '/'){
    res.end('hi this is my first node js home page')
   }else if(req.url === '/download'){
    res.end('hi this is my first download page')
   }else{
    res.end('404 page not found ')
   }
})

server.listen(3000,()=>{
    console.log('server listning  on port 3000')

})
