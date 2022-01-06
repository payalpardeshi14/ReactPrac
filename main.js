const express=require("express");
const app=express();

const{selectUser}=require("./user");
app.get("/user",async(req,res)=>{
 const list=await selectUser();
res.json(list);
});
app.get("/hello",(req,res)=>{
   res.json({message:"payal"});
   });
app.get("/1",(req,res)=>{
 res.json({message:"payal1"});
 });
 app.get("/2",(req,res)=>{
    res.json({message:"payal1"});
    });
    

app.listen(4000,()=>console.log("sorover started"));

