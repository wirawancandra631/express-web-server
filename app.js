const app=require("express");

const server=app();
server.get("/",(req,res)=>{
   
    res.send("Hello world");
})

server.listen(3000,()=>console.log(`Running server in host http://localhost:3000`))