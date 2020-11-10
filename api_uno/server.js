let server = require('express')()

server.get('/',(req,res)=>{
    res.send('index1')
})
server.get('/about',(req,res)=>{
    res.send('about1')
})
server.listen(1000,()=>{
    console.log(1000);
})