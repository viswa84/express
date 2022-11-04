// mongodb+srv://viswa:<password>@cluster0.mtexpu9.mongodb.net/?retryWrites=true&w=majority
// mongodb+srv://viswa:<password>@cluster0.mtexpu9.mongodb.net/?retryWrites=true&w=majority


const express = require('express');

const app = express()
const PORT = 7777 ;

 app.listen(PORT,(req,res)=>{
    console.log(`app is Running on server http://localhost:${PORT}`);
 });

 app.get("/",(req,res)=>{
    
    res.send("Hallo Every one for Express")
 });
 
