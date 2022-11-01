const express = require('express');

const app=express();

app.listen(8080,(req,res)=>{
    console.log("Serveri running on Port Number http://localhost:8080")
})


app.get("/",(req,res)=>{

    res.send("<center>Hallo Welcome  hallo to node</center>")
})

