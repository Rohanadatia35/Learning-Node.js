const path=require('path');
const express=require('express');
const {reqFilter,reqFilter2}=require('./middleware');
const route =express.Router();
const route2=express.Router();
const app=express();

route.use(reqFilter);
route2.use(reqFilter2);
// app.use(reqFilter);

route.get('/index',(req,res)=>{
    res.send("welcome to index page");
})
app.get('/about',reqFilter,reqFilter2,(req,res)=>{
    res.send("welcome to about page");
})
app.get('/users',(req,res)=>{
    res.send("welcome to users page");
})
app.get('/contact',(req,res)=>{
    res.send("welcome to contact page");
})
app.use('/',{route,route2});
app.listen(5001);
