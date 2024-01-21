reqFilter=(req,res,next)=>{
    if(!req.query.age){
        res.send("please provide age");
    }
    else if(req.query.age<18){
        res.send("you cant accesee this page");
    }
    else{
    next();
    }
}
reqFilter2=(req,res,next)=>{
    if(!req.query.name){
        res.send("please provide name");
    }
    else if(req.query.name=='rohan'){
        next();
    }
    else{
        res.send("authentication fail");
    }
}
module.exports={
    reqFilter,
    reqFilter2
};