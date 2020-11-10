let server = require('express')()

server.get('/',(req,res)=>{
    res.send('index2')
})
server.get('/about',(req,res)=>{
    res.send('about2')
})
server.listen(1000,()=>{
    console.log(1000);
})