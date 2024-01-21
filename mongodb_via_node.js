const dbConnect = require("./connection.js");
// ---------------------------SHOW OR FIND DATA---------------------------------
async function getData(){
    let result = await dbConnect();
    let response= await result.find({}).toArray();
    console.log(response);
}
const getData = async () => {
    let data=await dbConnect();          //---------------2nd way of writing upper code--------------
    let response= await data.find({}).toArray();
    console.log(response);
}
getData()
// --------------------INSERT-----------------------
const insertion = async () => {
  const result = await dbConnect();
  const response = await result.insertMany([
    {
      name: "ram",
      branch: "IT",
    },
    {
      name: "raj",
      branch: "IT",
    },
  ]);
  if (response.acknowledged) {
    console.log("inserted successfully");
  } else {
    console.log("data insertion failed");
  }
};
insertion();

// -----------------------UPDATE-------------------------
const updateData = async () => {
    let result = await dbConnect();
    let response=await result.updateMany({ name: { $in: ['shubham', 'dhruv'] } }, { $set:{branch: "ME" }});
    if(response.acknowledged){
        console.log("successfully updated ");
    }
    else{
        console.log("error in update");
    }
};
updateData();
// -----------------------DELETE--------------------------
const deleteData=async ()=>{
    let result=await dbConnect();
    let response=await result.deleteMany({name:'raj'});
    if(response.acknowledged){
            console.log("successfully deleted ");
        }
    else{
            console.log("error in delete");
        }
}
deleteData();