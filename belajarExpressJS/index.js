const express = require('express')
const app = express()
const port = 3000

app.get('/',(req,res)=>{
    res.send("hello martin")
})

app.get('/about',(req,res)=>{
    res.send("hello martin ini about")
})

app.get('/json',(req,res)=>{
    res.json({
        nama:'ilham',
        umur:20
    })
})

app.use('/',(req,res)=>{
    res.status("404")
    res.send("404")
})

app.listen(port,()=>{
    console.log(`Server Berjalan di Port ${port}`)
})