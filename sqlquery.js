const express = require("express");
const app=express();
const con =require('./config.js');
app.get('/',(req,res)=>{
    con.query("select * from data",(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log(result);
        }
    })
})
app.listen(5000);