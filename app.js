const app=require("express");

const server=app();
server.use(app.json());
server.use(app.urlencoded({extended:false}))
server.get("/",(req,res)=>{
   
    res.send("Hello world");
})
server.post("/login",(req,res)=>{
    const {username,password}=req.body;

    if(username =="admin" && password =="admin"){
        res.json({
            status:200,
            message:"Login successfully"
        })
    }
    else {
        res.json({
            status:401,
            message:"Login failed"
        })
    }
})

server.listen(3000,()=>console.log(`Running server in host http://localhost:3000`))