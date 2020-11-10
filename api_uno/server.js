let server = require('express')()

server.get('/',(req,res)=>{
    res.send('index')
})
server.get('/about',(req,res)=>{
    res.send('about')
})
server.listen(1000,()=>{
    console.log(1000);
})