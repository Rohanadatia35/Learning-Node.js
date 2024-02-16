const express = require("express");
const dbConnect = require("./connection.js");
const app = express();

app.get('/index', async (req, res) => {
    let data =await dbConnect();
    let result=await data.find().toArray();         // --------------GET API--------------
    res.send(result)
});

app.use(express.json());

app.post('/index',async (req,res)=>{
    // console.log(req.body)
    let result = await dbConnect();
    let response =await result.insertOne(req.body)  //-----------------POST API--------------
    if(response.acknowledged){
        res.send("data inserted successfully")
    }
    console.log(response);
})

app.put('/index',async (req,res)=>{
    
})
app.listen(5000);